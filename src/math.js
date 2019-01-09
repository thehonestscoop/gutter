


// For a given (s,v), DetermineSpread returns the spread coefficient
// required for the bell curve.
function DetermineSpread(s, v) {
	if (s <= 0) {
		throw "marker.s must be > 0";
	}
	if ((v >= 1) || (v <= 0)) {
		throw "marker.v must be between 0 and 1"
	}

	return -s*s/Math.log(v)
}

function Distribution(s, sentencePos, spread) {
	return Math.exp(-Math.pow((s-sentencePos),2)/spread);
}

// CumulativeDistribution returns the max value for a given s
// produced by all marker's distributions
function CumulativeDistribution(s, markers) {

	let maxShade = 0

	for (let m of markers) {
		let shade = m.distribution(s)
		if (shade > maxShade) {
			maxShade = shade
		}
	}

	return maxShade
}

// CalculateFractionalS returns a (potentially fractional) s value for currentY
// which using the same proportion compared in y-space.
function CalculateFractionalS(leftS, leftY, rightS, rightY, currentY, resolution) {

	if ((currentY < leftY) || ((currentY-0.5*resolution) > rightY)) {
		throw "currentY out of bounds"
	}

	if (currentY === leftY) {
		return leftS
	}

	if (currentY === rightY) {
		return rightS
	}

	// current Y is in between left Y and right Y
	let frac = (currentY - leftY) / (rightY-leftY)

	return frac * (rightS-leftS) + leftS
}


export {
	DetermineSpread,
	Distribution,
	CumulativeDistribution,
	CalculateFractionalS,
}