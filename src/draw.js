import C from './constants.js';


// CreateCanvas will create the initial canvas and place it on the left or right based on placement.
// The canvas contains multiple strips
function CreateCanvas(node, top, width, height, placement, margin) {

    let viewportPos = node.getBoundingClientRect()

	var canv = document.createElement('canvas');
	canv.height = height;
	canv.width = width;
	canv.classList.add(C.CANVAS_CLASS);
	canv.style.position='absolute'
	canv.style.top=top + 'px'
    if (placement === 'left') {
        canv.style.left = viewportPos.left + window.pageXOffset + 'px'
        // canv.style.left=0 + 'px'
        canv.style.marginLeft = margin + 'px'
    } else {
        canv.style.left = viewportPos.right + window.pageXOffset - canv.width + 'px'
        // canv.style.right=0 + 'px'
        canv.style.marginRight = margin + 'px'
    }
	
    document.body.appendChild(canv)

	return canv
}

function AddGradient(canvas, shadeValues, resolution, tagIdx, width, gap, color, baseline) {

    // Convert color to rgb format
    // See: https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes
    let d = document.createElement("zzz");
    d.style.color = color;
    document.body.appendChild(d)
    let components = window.getComputedStyle(d).color.slice(0, -1).slice(4).split(',')
    document.body.removeChild(d);

    let colorConv = function(alpha) {
        return 'rgba(' + components.join(',') + ',' + alpha + ')'
    }

    for (let j = 0; j < shadeValues.length; j++) {
        let shadeVal = shadeValues[j]
        shadeVal = Math.max(shadeVal-baseline, 0);

        var ctx = canvas.getContext("2d");
        ctx.lineWidth = 0;
        ctx.fillStyle = colorConv(shadeVal) //'rgb(' + [255 * (1 - shadeVal), 255 * (1 - shadeVal), 255 * (1 - shadeVal)].join(',') + ')';
        
        let y = j * resolution
        let x = width * tagIdx + gap * tagIdx

        ctx.fillRect(x, y, width, resolution);
    }
}

function ShiftPadding(node, placement, gutterWidth) {
    if (placement === 'left') {
        let paddingLeft = parseFloat(window.getComputedStyle(node).paddingLeft)
        node.style.paddingLeft = (paddingLeft + gutterWidth) + 'px'
    } else {
        let paddingRight = parseFloat(window.getComputedStyle(node).paddingRight)
        node.style.paddingRight = (paddingRight + gutterWidth) + 'px'
    }
}

export {
	CreateCanvas,
	AddGradient,
    CreateRectangles,
    ShiftPadding,
}