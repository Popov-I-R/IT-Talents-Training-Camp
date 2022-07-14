var arr = [10, 3, 5, 8, 6, -3, 7];
var temp = 100;

if (Array.isArray(arr)) {
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    if (current < temp && current % 3 === 0) {
      temp = current;
    }
  }

  console.log(`Най-малкото число кракно на 3 е ${temp}`);
} else {
  console.log(`Подадените данни не са масив`);
}

