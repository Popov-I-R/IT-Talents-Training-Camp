var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
var smallestDifference = 0;
var result = 0;

if (Array.isArray(arr)) {
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  var averageValue = Math.round(sum / 7);

  for (let j = 0; j < arr.length; j++) {
    result = averageValue - arr[j];
    if (result >= 0) {
      smallestDifference = result;
      if (result > smallestDifference) {
        continue;
      } else {
        smallestDifference = arr[j];
      }
    } else {
      break;
    }
  }

  console.log(smallestDifference);
} else {
  console.log(`Въведените входни данни не са масив`);
}
