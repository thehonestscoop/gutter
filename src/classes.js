import {DetermineSpread, Distribution} from './math.js';

class Gutter {

	constructor(dataset) {

		if (dataset.debug === 'true') {
			this.debug = true;
		} else {
			this.debug = false;
		}

		if (dataset.resolution === undefined) {
			this.resolution = 1.0;
		} else {
			this.resolution = parseFloat(dataset.resolution);
			if (this.resolution < 1) {
				throw "resolution must be greater than 1"
			}
		}

		if (dataset.merge === 'true') {
			this.merge = true;
		} else {
			this.merge = false;
		}

		if (dataset.width === undefined) {
			this.width = 2.5;
		} else {
			this.width = parseFloat(dataset.width);
		}

		if (dataset.gap === undefined) {
			this.gap = 0.0;
		} else {
			this.gap = parseFloat(dataset.gap);
		}

		if (dataset.margin === undefined) {
			this.margin = 0.0;
		} else {
			this.margin = parseFloat(dataset.margin);
		}

		if (dataset.padding === undefined) {
			this.padding = 0.0;
		} else {
			this.padding = parseFloat(dataset.padding);
		}
		
		if (dataset.placement === undefined) {
			this.placement = 'left';
		} else {
			this.placement = dataset.placement 
			if ((this.placement !== 'left') && (this.placement !== 'right')) {
				throw "resolution must be 'left' or 'right"
			}
		}
		
		if (dataset.tags !== undefined) {
			this.tags = dataset.tags.split(',');
		}
		if (dataset.labels !== undefined) {
			this.labels = dataset.labels.split(','); // TODO: Implement rotated text on top of canvas
		}
		
		if (dataset.baseline === undefined) {
			this.baseline = Array(this.tags.length).fill(0.0)
		} else {
			this.baseline = []
			let splits = dataset.baseline.split(',')
			if (splits.length !== this.tags.length) {
				throw "number of baseline values must match number of tags"
			}
			for (let sp = 0; sp < splits.length; sp++) {
				let val = splits[sp].endsWith('%')?parseFloat(splits[sp])/100.0:parseFloat(splits[sp])
				if (isNaN(val)) {
					this.baseline.push(0.0);
				} else {
					if (val >= 1.0) {
						throw "baseline value must not exceed 1.0 or 100%"
					}
					this.baseline.push(val);
				}
			}
		}

		this.sentences = [];
		this.markers = {} // key:tag, value: array of markers
		for (let t of this.tags) {
			this.markers[t] = []
		}

		// Colors
		if (dataset.color === undefined) {
			this.color = Array(this.tags.length).fill('black')
		} else {
			let colors = dataset.color.split(',')
			if (colors.length === 1) {
				if (colors[0] === '') {
					colors[0] = 'black'
				}
				this.color = Array(this.tags.length).fill(colors[0])
			} else {
				if (colors.length !== this.tags.length) {
					throw "number of color values must match number of tags"
				}
				this.color = colors
			}
		}
	}

	// order returns the index of a particular tag.
	order(tag) {
		for(let i = 0; i < this.tags.length; i++) {
			if (this.tags[i] === tag) {
				return i;
			}
		}
		return null
	}

	// addSentence will append a sentence object to the gutter.
	// It will return the index in the array.
	addSentence(top, bottom, offset) {
		return this.sentences.push(new Sentence(top + offset, bottom + offset)) - 1
	}

	// closestSentence will return the sentence index that is closest to a particular y-value.
	// If multiple sentences are equal, then return the largest the sentence with largest shade value.
	closestSentence(tag, yPos) {

		let closestIndex = null
		let closestDistance = null
		let highestShade = null

		for (let s = 0; s < this.sentences.length; s++) {
			let sentence = this.sentences[s]

			let distance = Math.abs(sentence.middle - yPos)
			if (closestIndex === null) {
				closestIndex = s
				closestDistance = distance
				highestShade = sentence.shadeValue(tag)
				continue
			}

			if (distance > closestDistance) {
				return closestIndex // Increasing sentence made distance further
			}

			let shadeValue = sentence.shadeValue(tag)

			if ((distance < closestDistance) || ( (distance === closestDistance) && (shadeValue > highestShade) )) {
				closestIndex = s
				closestDistance = distance
				highestShade = shadeValue
			}
		}

		return closestIndex
	}

	addMarker(marker) {
		let tag = marker.tag
		if (this.markers.hasOwnProperty(tag)) {
			this.markers[tag].push(marker)
		}
	}

	averageGap() {
		if (this.sentences.length < 2) {
			return 0
		}


	}

}


class Sentence {

	constructor(top, bottom) {
		this.top = top
		this.bottom = bottom
		this.middle = 0.5*(this.top + this.bottom)
		this.shadeValues = {} // key:tag, value: shade value
	}

	top() {
		return this.top
	}

	middle() {
		return this.middle
	}

	bottom() {
		return this.bottom
	}

	// addShadeValue stores the sentences's shade value for a given tag.
	addShadeValue(tag, shadeValue) {
		this.shadeValues[tag] = shadeValue
	}

	// shadeValue returns the sentence's shade value for a given tag.
	shadeValue(tag) {
		if (this.shadeValues.hasOwnProperty(tag)) {
			return this.shadeValues[tag]
		}

		return null
	}
}


class Marker {

	constructor(sentenceNo, dataset) {
		// data-tag means this span is related to a particular vertical strip as defined by the parent div's data-order.
		// data-max = maximum darkness. 90=90%
		// data-limit=3s means that the particular marker's gradient only spans +/- 3 sentences from position of marker
		// However the gutter must not exceed top and bottom of parent div/p, so the gradient must get cropped earlier than +/- 3 sentences.
		// data-spread is α in the equation on middle of page 2.

		if (dataset.tag === undefined) { // Required
			throw "tag required for marker"
		} else {
			this.tag = dataset.tag 
		}

		if (dataset.max === undefined) {
			this.max = 1.0
		} else {
			this.max = dataset.max.endsWith('%')?parseFloat(dataset.max)/100.0:parseFloat(dataset.max)
			if (this.max > 1.0) {
				throw "marker.max must not exceed 1.0 or 100%"
			}
		}

		if (dataset.limit === undefined) {
			this.limit = null
		} else {
			this.limit = dataset.limit.endsWith('s')?parseInt(dataset.limit):parseInt(dataset.limit)
			if (this.limit === 0) {
				// this.limit = null
			}
		}

		if (dataset.spread === undefined) {
			this.spread = null
		} else {
			let parts = dataset.spread.split(",");
			let s = parseFloat(parts[0])
			let val = parts[1].endsWith('%')?parseFloat(parts[1])/100.0:parseFloat(parts[1])
			this.spread = DetermineSpread(s,val)  
		}

		this.sentenceNo = sentenceNo // Which sentence "owns" this marker
	}

	// distribution returns a "shade" value ranging from [0,1] for a give sentence no.
	distribution(s) {

		if (this.limit !== null) {

			let lowerLimit = this.sentenceNo - this.limit
			let upperLimit = this.sentenceNo + this.limit

			if (lowerLimit < 0) {
				lowerLimit = 0
			}

			// if (upperLimit > 0) {
			// 	upperLimit = 0
			// }
			lowerLimit = lowerLimit - 0.5
			upperLimit = upperLimit + 0.5

			// Enforce limits by clamping shade to 0
			if ((s < lowerLimit) || (s > upperLimit)) {
				return 0
			}

		}

		if (this.spread === null) {
			// No spread value is specified
			if ((this.sentenceNo - 0.5 < s) && (s < this.sentenceNo + 0.5)){
				return this.max
			} else {
				return 0
			}
		}

		let shade = Distribution(s, this.sentenceNo, this.spread)
		return this.max * shade
	}
}

export {
	Gutter,
	Marker,
}