'use strict';

/* Problem 14: Longest Collatz Sequence.
 *
 * The following iterative sequence is defined for the set of
 * positive integers:
 *
 * n -> n/2 (n is even)
 * n -> 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the
 * following sequence:
 *
 * 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 *
 * It can be seen that this sequence (starting at 13 and finishing
 * at 1) contains 10 terms. Although it has not been proved yet
 * (Collatz Problem), it is thought that all starting numbers finish
 * at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * Note: Once the chain starts the terms are allowed to go above
 * one million.
 *
 * */

function collatzSeq(num) {
	let maxNum = 0;
	let maxInd = 0;

	for (let j = num; j > num/2; j--) {
		let total = [j];
		let i = j;

		while (i > 0) {
			if (i> 1) {
				if (i % 2 === 0) {
					i /= 2;
					total.push(i);
				} else {
					i = (3*i) + 1;
					total.push(i);
				}
			} else {
				if (total.length > maxNum) {
					maxNum = total.length;
					maxInd = j;
				}
				i = 0;
			}
		}
	}
	
	const msg = `${maxInd} has a chain of ${maxNum}.`;
	console.log(msg);
	return msg;
}

collatzSeq(1000000);
