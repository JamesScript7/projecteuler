'use strict';

function smolMult(x) {
	let count = x;

	for (let i = 2; i <= x; i++) {
		if (count % i === 0) {
			if (i === x) {
				return count;
			}
		} else {
			count++;
			i = 2;
		}
	}
}

smolMult(10);
