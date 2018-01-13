'use strict';

function fibo(maxVal) {
  const num     = [1,2],
        evenSum = 0;

  for (let i = 0; num[num.length - 1] < maxVal; i++) {
    num.push(num[i] + num[i + 1]);

    if ( !(num[i] % 2) ) {
      evenSum += num[i];
    }
  }
  
  return `Even number sum: ${evenSum}`;
}

fibo(4000000);
