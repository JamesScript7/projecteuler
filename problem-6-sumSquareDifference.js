'use strict';

function squarinator(x) {
	let sumSquare  = 0,
		  squareSum  = 0,
			difference = 0;

	for (let i = 1; i <= x; i++) {
		sumSquare += i ** 2;
		squareSum += i;
	}

	difference = Math.pow(squareSum, 2) - sumSquare;

	console.log(difference);
	return difference;
}

squarinator(100);
