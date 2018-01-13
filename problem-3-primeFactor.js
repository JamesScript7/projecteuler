'use strict';

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
