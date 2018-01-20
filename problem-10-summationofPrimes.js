'use strict';

/* Problem 10: Summation of Primes.
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 *
 * */

// THIS DOES NOT WORK WELL WITH INPUT 2000000.

function primeSummer(maxVal) {
	let sum = 2;

	for (let i = 3; i < maxVal; i++) {
		for (let j = 2; j <= i; j++) {
			if (i % j === 0) {
				j = i + 1;
			} else if (j === (i - 1)) {
				sum += i;
				console.log('Prime:',i,'Sum:',sum);
			}
		}
	}

	console.log('Sum of the Prime Numbers:',sum);
	return sum;
}

primeSummer(1000);
