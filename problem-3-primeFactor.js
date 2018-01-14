'use strict';

/* Problem 3: Largest prime factor
 *
 * The prime factore of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143?
 *
 * Prime Factor: Any of the prime numbers that can be multiplied
 * to give the original number.
 * 
 * */

function primeFactorFinder(num) {
  const primeFactor = [];
  let   product     = 1;

  for (let i = 1; i <= num; i++) {
    if ( !(num % i) ) {
      product *= i;
      
      if (product <= num) {
        primeFactor.push(i);
      } else {
				console.log(primeFactor);
        return primeFactor;
      }
    }
  }

}

primeFactorFinder(13195);
