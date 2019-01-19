import * as licenses from './licenses.js';
import {Gutter} from './classes.js';
import C from './constants.js';
import {RemoveSpan, RemoveCanvas, ResetPadding} from './cleanup.js';
import {FindSentences} from './sentences.js';
import {CumulativeDistribution, CalculateFractionalS} from './math.js';
import {CreateCanvas, AddGradient, CreateRectangles, ShiftPadding} from './draw.js';


function Render(gutterNodes) {

	RemoveCanvas()

	for (let gNode of gutterNodes) {

		let gutter = new Gutter(gNode.dataset)

		// Clean up existing spans used to identify sentences (for resizing)
		RemoveSpan(gNode, C.SENTENCE_CLASS, C.SENTENCE_END, C.SENTENCE_START)
		ResetPadding(gNode, gutter.placement, gutter.tags.length*gutter.width + (gutter.tags.length-1)*gutter.gap)

		// Shift text in node by adding padding
		ShiftPadding(gNode, gutter.placement, gutter.tags.length*gutter.width + (gutter.tags.length-1)*gutter.gap)

		// Find sentences
		FindSentences(gNode, gutter)

		// Create canvas for gutter
		let canvas
		if (gutter.sentences.length !== 0) {
			let width = gutter.tags.length*gutter.width + (gutter.tags.length-1)*gutter.gap
			let height = gutter.sentences[gutter.sentences.length-1].bottom - gutter.sentences[0].top
			canvas = CreateCanvas(gNode, gutter.sentences[0].top, width, height, gutter.placement, gutter.margin)
		} else {
			// No sentences. Draw empty canvas?
			RemoveSpan(gNode, C.SENTENCE_CLASS, C.SENTENCE_END, C.SENTENCE_START)
			continue
		}
		

		// Calculate shade distribution for each tag
		for (let tagIdx = 0; tagIdx < gutter.tags.length; tagIdx++) {
			let tag = gutter.tags[tagIdx]
			let stripMarkers = gutter.markers[tag]


			// Calculate for each sentence, the shade value
			for (let s = 0; s < gutter.sentences.length; s++) {
				let sentence = gutter.sentences[s]
				sentence.addShadeValue(tag, CumulativeDistribution(s, stripMarkers))
			}

			// Range from min to max in y-axis
			let minY = gutter.sentences[0].top
			let maxY = gutter.sentences[gutter.sentences.length-1].bottom
			let yRange = []


			let currentY = minY
			do {
				// Find closest sentence (s index) for current y-axis value
				let sIdx = gutter.closestSentence(tag, currentY+0.5*gutter.resolution)
				yRange.push(sIdx)
				currentY += gutter.resolution
			} while (currentY <= maxY); // NB: It is possible for mid-point to exceed maxY
			// Perhaps add last value to the end if not equal to maxY

			// Obtain the y-axis position for 
			let sentenceIdxToY = {}
			let yToSentenceIdx = {}
			for (let y = 0; y < yRange.length; y++) {
				let sentenceIdx = yRange[y]
				let sentence = gutter.sentences[sentenceIdx]
				sentenceIdxToY[sentenceIdx] = sentence.middle
				yToSentenceIdx[sentence.middle] = sentenceIdx
			}

			let midYValues = Object.values(sentenceIdxToY).sort(function(a, b){return a - b})

			// Calculate shade values for each y value ranging from minY to maxY
			let shadeValues = []
			currentY = minY
			do {
				let yVal = currentY+0.5*gutter.resolution // These are the y-axis values we are drawing rectangles for
				let sentenceIdx = yToSentenceIdx[yVal]
				if (sentenceIdx !== undefined) {
					shadeValues.push(CumulativeDistribution(sentenceIdx, stripMarkers))
				} else {
					// Find the two s values that are on either side of yVal
					for (let j = 0; j < midYValues.length; j++) {
						let leftY = midYValues[j]
						let rightY = midYValues[j+1]
						let leftS = yToSentenceIdx[leftY]
						let rightS = yToSentenceIdx[rightY]

						if (yVal < leftY) {
							// Before first sentence
							let sFrac = CalculateFractionalS(leftS-0.5, currentY, leftS, leftY, yVal, gutter.resolution)
							shadeValues.push(CumulativeDistribution(sFrac, stripMarkers))
							break
						}

						if ((rightY === undefined) && (yVal > leftY)) {
							// After last sentence	
							let sFrac = CalculateFractionalS(leftS, leftY, leftS+0.5, maxY, yVal, gutter.resolution)	
							shadeValues.push(CumulativeDistribution(sFrac, stripMarkers))
							break
						} else if  ((yVal > leftY) && (yVal < rightY)) {
							let sFrac = CalculateFractionalS(leftS, leftY, rightS, rightY, yVal, gutter.resolution)
							shadeValues.push(CumulativeDistribution(sFrac, stripMarkers))
							break
						}
					}
				}
				currentY += gutter.resolution
			} while (currentY <= maxY);

			// Draw gradient
			AddGradient(canvas, shadeValues, gutter.resolution, tagIdx, gutter.width, gutter.gap, gutter.color[tagIdx], gutter.baseline[tagIdx])

		}

		if (!gutter.debug) {
			RemoveSpan(gNode, C.SENTENCE_CLASS, C.SENTENCE_END, C.SENTENCE_START)
		} else {
			console.log(gutter)
		}
	}
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


// Automatically Execute

document.addEventListener('DOMContentLoaded', () => {
	
	Render(document.getElementsByClassName("ths-gutter"))

	// Render 500ms after DOM is ready
	setTimeout(() => {
		Render(document.getElementsByClassName("ths-gutter"))
	}, 500)

	// Rerender after each image finishes loading
	let images = document.images
	for(let i = 0; i < images.length; i++) {
		images[i].addEventListener("load", () => {
			Render(document.getElementsByClassName("ths-gutter"))
		});
	}

	// Render after a fixed time as a last resort (after 5 seconds)
	setTimeout(() => {
		Render(document.getElementsByClassName("ths-gutter"))
	}, 5000)

});


let onresizeTimer;
window.onresize = () => {
	// Since we are placing the canvas in document.body, when you resize the window, it leaves the
	// canvas at the prior location until Render() is run. This has a bad effect so we Remove it.
	RemoveCanvas()
	if (onresizeTimer !== undefined) { clearTimeout(onresizeTimer) }
	onresizeTimer = setTimeout(() => {
		Render(document.getElementsByClassName("ths-gutter"))
		onresizeTimer = undefined
	}, 50)
}

export default {Render: Render}