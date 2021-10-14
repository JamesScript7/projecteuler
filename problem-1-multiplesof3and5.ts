'use strict';

/* Problem 1: Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10
 * that are multiples of 3 or 5, we get 3, 5, 6, and 9.
 * The sum of these multiples is 23.
 *
 * Find the sum of all the multiple of 3 or 5 below 1000.
 *
 * */

function coolFunction(num: number, total: number = 0): any {
	const x: number = num - 1;

	if (x <= 0) {
		return total;
	} else if (x % 3 === 0 || x % 5 === 0) {
		total += x;
	}

	return coolFunction(x, total);
}

console.log(coolFunction(1000));
