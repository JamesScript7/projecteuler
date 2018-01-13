'use strict';

function palindromic(x) {
	const digit = parseInt('9'.repeat(x));

	for (let i = digit; i > 0 ; i--) {
		for (let j = digit; j > 0; j--) {
			const product    = String(i * j),
						palindrome = String(product.split('').reverse().join(''));
			
			if (product === palindrome) {
				return `Largest Palindrome Found:\r${i} x ${j} = ${product}`;
			}
		}
	}
}

palindromic(2);
