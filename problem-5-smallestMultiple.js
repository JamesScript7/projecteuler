'use strict';

/* Problem 5: Smallest multiple
 * 
 * 2520 is the smallest number that can be divided by each
 * of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly
 * divisible by all of the number from 1 to 10.
 *
 * */

function smolMult(x) {
	let count = x;

	for (let i = 2; i <= x; i++) {
		if (count % i === 0) {
			if (i === x) {
				console.log(count);
				return count;
			}
		} else {
			count++;
			i = 2;
		}
	}
}

smolMult(10);
