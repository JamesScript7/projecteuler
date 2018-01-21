'use strict';

// Finds out if an integer is a prime number and returns a boolean value.
exports.isPrime = function(num) {
	var start = 2;
	while(start <= Math.sqrt(num)) {
		if (num % start++ < 1) return false;
	}
	return num > 1;
}
