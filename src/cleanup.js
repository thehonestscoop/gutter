
import C from './constants.js';

// RemoveSpan is used when the browser is resized or the zoom level changes.
// It deletes out the artificial spans that were created to detect the positon of the sentences.
function RemoveSpan(node, ...classNames) {
	
	for (let className of classNames) {
		let potentialSpan = node.getElementsByClassName(className)
		for (var i=potentialSpan.length-1; i>=0; i--) {
			let ps = potentialSpan[i]
			if (ps.tagName === 'SPAN') {
				// Remove span See: https://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/
				
				let parent = ps.parentNode;
				while (ps.firstChild) parent.insertBefore(ps.firstChild, ps);
				parent.removeChild(ps);
			}
		}
	}

	node.normalize()

}

function RemoveCanvas() {
	let canvases = document.body.getElementsByClassName(C.CANVAS_CLASS)
	for (var i=canvases.length-1; i>=0; i--) {
		let c = canvases[i]

		let parent = c.parentNode;
		parent.removeChild(c);
	}
}


function ResetPadding(node, placement, gutterWidth) {
	if (placement === 'left') {
		let paddingLeft = parseFloat(window.getComputedStyle(node).paddingLeft)
		node.style.paddingLeft = (paddingLeft - gutterWidth) + 'px'
	} else {
		let paddingRight = parseFloat(window.getComputedStyle(node).paddingRight)
		node.style.paddingRight = (paddingRight - gutterWidth) + 'px'
	}
}

export {
	RemoveSpan,
	RemoveCanvas,
	ResetPadding,
}