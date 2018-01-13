'use strict';

function coolFunction(num, total=0) {
	const x = num - 1;
	
	if (x <= 0) {
		return total;
	} else if (x % 3 === 0 || x % 5 === 0) {
		total += x;
	}

	return coolFunction(x, total);
}

coolFunction(10);
