'use strict';

/* Problem 9: Special pythagorean triplet
 *
 * A Pythagorean triplet is a set of three natural numbers,
 * a < b < c, for which, a ** 2 + b ** 2 = c ** 2
 *
 * For example, 3 ** 2 + 4 ** 2 = 9 + 6 = 25 = 5 ** 2
 *
 * There exists exactly one Pythagorean triplet for which
 * a + b + c = 1000.
 * Find the product abc.
 *
 * */

function pythagoreanRunner(sum) {
	let a;
	
	for (a = 1; a <= sum/3; a++) {
		let b;

		for (b = a + 1; b <= sum/2; b++) {
			let c = sum - a - b;

			if (a < b && b < c) {
				if (a*a + b*b === c*c) {
					const msg     = `Sum Found! ${a} + ${b} + ${c} = ${a+b+c}`,
								product = `The Product: ${a} * ${b} * ${c} = ${a*b*c}`;

					console.log(msg + '\n' + product);
					return product;
				}
			}
		}
	}

}

pythagoreanRunner(1000);
