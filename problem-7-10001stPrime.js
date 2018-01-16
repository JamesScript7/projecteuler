'use strict';

/* Problem 7: 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 *
 * A prime number is a whole number greater than 1 whose only
 * factor are 1 and itself.
 * 
 * */

function primeMultiplier(stopValue) {
	let primeNums = [2];
	let count = 2;

	for (let i = 3; primeNums[primeNums.length -1] < stopValue; i++) {
		if ( i % count === 0 && count < i) {
			count++;
		} else if ( i % count !== 0 && count < i ) {
			primeNums.push(i);
		}
	}
	console.log(count);
	console.log(primeNums);
	//return primeNums[x - 1];
}

primeMultiplier(50);
