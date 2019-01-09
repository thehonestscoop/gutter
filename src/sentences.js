import findAndReplaceDOMText from '@thehonestscoop/findandreplacedomtext';
import Reg from './regex.js';
import C from './constants.js';
import {Gutter, Marker} from './classes.js';

// FindSentences will wrap all sentences in a span as well as the first character and last
// character.
function FindSentences(node, gutter) {

	let markerPos = transformMarkerNodes(node)

	encodePunctuation(node)

	findAndReplaceDOMText(node, {
		find: /(?=\S)(([.]{2,})?[^!?]+?([.。…!?]+|(?=\s+$)|$)(\s*[′’'”″“")»]+)*)/g,
		wrap: 'span',
		wrapClass: C.SENTENCE_CLASS,
		preset: 'prose',
	});

	// Add the markers back after having removed them
	transformMarkerNodesBack(node, markerPos)

	decodePunctuation(node)

	// Create a span for the start and end character
	wrapOuterSentence(node)

	storeSentencePositions(node, gutter)
}

// storeSentencePositions will calculate the positions of each sentence node.
// See: https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
function storeSentencePositions(node, gutter) {

	let yOffset = window.pageYOffset // - el.ownerDocument.documentElement.clientTop

	let allSentenceNodes = node.getElementsByClassName(C.SENTENCE_CLASS)
	for (let snode of allSentenceNodes) {
		let starts = snode.getElementsByClassName(C.SENTENCE_START)
		let ends = snode.getElementsByClassName(C.SENTENCE_END)

		if ((starts.length === 0) && (ends.length === 0)) {
			// Ignore this sentence. Pretend it doesn't exist
			continue
		}

		if (starts.length === 0) {
			if (ends.length !== 0) {
				// Only end exists
				let e = ends[0].getBoundingClientRect()
				let sentenceNo = gutter.addSentence(e.top, e.bottom, yOffset)

				let markers = snode.getElementsByClassName(C.MARKER_CLASS)
				for (let m of markers) {
					let mm = new Marker(sentenceNo, m.dataset)
					gutter.addMarker(mm)
				}
			}
		} else {
			if (ends.length === 0) {
				// Only start exists
				let s = starts[0].getBoundingClientRect()
				let sentenceNo = gutter.addSentence(s.top, s.bottom, yOffset)

				let markers = snode.getElementsByClassName(C.MARKER_CLASS)
				for (let m of markers) {
					let mm = new Marker(sentenceNo, m.dataset)
					gutter.addMarker(mm)
				}
			} else {
				// Both start and end exists
				let s = starts[0].getBoundingClientRect()
				let e = ends[0].getBoundingClientRect()
				let sentenceNo = gutter.addSentence(s.top, e.bottom, yOffset)

				let markers = snode.getElementsByClassName(C.MARKER_CLASS)
				for (let m of markers) {
					let mm = new Marker(sentenceNo, m.dataset)
					gutter.addMarker(mm)
				}
			}
		}
	}

}

// transformMarkerNodes will remove marker nodes and replace them with some random text in their position.
// Later, we will search for the text and replace them back with the marker node (after the
// sentence detection is performed)
function transformMarkerNodes(node) {

	let idToMarker = new Map()

	let markers = node.getElementsByClassName(C.MARKER_CLASS)
	for (var i=markers.length-1; i>=0; i--) {
		let m = markers[i]
		let randStr = '{{{'+  (Math.random().toString(36)+'00000000000000000').slice(2, 16+2) +'}}}'
		let replacedNode = m.parentNode.replaceChild(document.createTextNode(randStr), m);
		idToMarker.set(randStr, replacedNode); 
	}

	node.normalize()

	return idToMarker
}

// transformMarkerNodesBack will undo the operation in transformMarkerNodes.
// It will replace the text identifiers with the marker we had previously removed.
function transformMarkerNodesBack(node, map) {

	findAndReplaceDOMText(node, {
		find: /{{{([\w\d]{16,}?)}}}/g,
		replace: match => {
			let replacement = map.get(match.text)
			if (replacement === undefined){
				return ''
			}
        	return replacement
    	},
	});

	node.normalize()
}

function encodePunctuation(node) {
	// WARNING: findAndReplaceDOMText seems to weirdly modify the text in the node, and not just
	// replace the periods with {{46}}!. This effects the sentence detection at the later step.
	// We must call normalize(): https://www.sitepoint.com/removing-useless-nodes-from-the-dom/

	// Escape dots in abbreviations 
	findAndReplaceDOMText(node, {
		find: Reg.abbreviations,
		replace: match => { return match.text.replace(/\./g, "{{46}}")},
	});

	// Escape words with dots in the inside
	findAndReplaceDOMText(node, {
		find: Reg.innerWordPeriod,
		replace: match => { return match.text.replace(/\./g, "{{46}}")},
	});

	node.normalize()
}

function decodePunctuation(node) {
	// Convert {{46}} back to '.'
	findAndReplaceDOMText(node, {
		find: /{{(\d{1,3})}}/g,
		replace: match => {
        	return '.';
    	},
	});

	node.normalize()
}

// wrapOuterSentence is used to wrap first and last character in a <span> to mark 
// the start and end of a sentence.
function wrapOuterSentence(node) {

	let sentences = node.getElementsByClassName(C.SENTENCE_CLASS)
	for (let s of sentences) {

		// If the sentence is just a period, this process seems to fail.
		// It seems to nest the `end` inside the `start`.
		findAndReplaceDOMText(s, {
			find: /^(.?)/i,
			wrap: 'span',
			wrapClass: C.SENTENCE_START,
		});

		findAndReplaceDOMText(s, {
			find: /(.?)$/i,
			wrap: 'span',
			wrapClass: C.SENTENCE_END,
		});
	}
}

export {
	FindSentences,

}
