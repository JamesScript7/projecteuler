'use strict';

/* Problem 4: Largest palindromic product
 *
 * A palindromic number reads the same both ways. The largest
 * palindrome made from the product of two 2-digit numbers is
 * 9009 = 91 x 99.
 *
 * Find the largest palindrome made from the product of two
 * 3-digit numbers.
 *
 * */

function palindromic(x) {
	const digit = parseInt('9'.repeat(x));

	for (let i = digit; i > 0 ; i--) {
		for (let j = digit; j > 0; j--) {
			const product  = String(i * j),
						reversed = String(product.split('').reverse().join(''));

			if (product === reversed) {
				console.log(product);
				return `Largest Palindrome Found:\r${i} x ${j} = ${product}`;
			}
		}
	}
}

palindromic(3);
