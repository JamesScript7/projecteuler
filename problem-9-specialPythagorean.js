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


// This Function is to recreate the chart on:
// http://www.friesian.com/pythag.htm

function pythagoreanTriples(n) {
	let a = [],
			b = [],
			c = [];

	for (let i = 3; i < 100; i++) {
		const inc = a.length ? a.length - 1 : 0;

		if (i % 2 !== 0) {
			a.push(i);
			b.push( ((i*i) - 1) / 2 );
			c.push( (((i*i) - 1) / 2) + 1 );
			console.log(a[inc], b[inc], c[inc]);
		}
	}
}

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
