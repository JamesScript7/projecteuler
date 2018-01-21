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

const rf = require('./reusableFunctions');

function primeMultiplier(stopValue) {
	let primeNums = [2];
	let count = 3;

	while (primeNums.length !== stopValue) {
		if (rf.isPrime(count)) {
			primeNums.push(count);
		}
		count++;	
	}

	console.log(primeNums.slice(-1));
	return primeNums.slice(-1);
}

primeMultiplier(10001);
