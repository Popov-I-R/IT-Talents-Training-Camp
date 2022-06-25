var n = 4;
  
  for (let i = 1; i <= n; i++) {
    var isPrime = true;
    var maxDivisor = Math.round(Math.sqrt(i));
  
    for (var j = 2; j <= maxDivisor; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    } 
  }

  if (isPrime && n > 1) {
    console.log(`${n} е просто число.`);
  } else if (!isPrime || n === 1) {
      console.log(`${n} не е просто число.`)
  } 