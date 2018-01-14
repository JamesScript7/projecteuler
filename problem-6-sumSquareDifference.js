'use strict';

/* Problem 6: Sum square difference
 *
 * The sum of the squares of the first ten natural numbers is 385.
 * The square of the sum of the first ten natural numebrs is 3025.
 *
 * Hence the difference between the sum of the squares of the first
 * ten natural numbers and the square of the sum is 3025 - 385 = 2640.
 *
 * Find the difference between the sum of the square of the first one
 * hundred natural numbers and the square of the sum.
 *
 * */

function squarinator(x) {
	let sumSquare  = 0,
		  squareSum  = 0,
			difference = 0;

	for (let i = 1; i <= x; i++) {
		sumSquare += i ** 2;
		squareSum += i;
	}

	difference = (squareSum ** 2) - sumSquare;

	console.log(difference);
	return difference;
}

squarinator(100);
