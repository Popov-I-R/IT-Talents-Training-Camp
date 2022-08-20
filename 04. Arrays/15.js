var inputArr = [7.13, 0.2, 4.9, -5.1, 6.34, 1.12];
var biggestNumbers = [];

if (Array.isArray(inputArr)) {
  for (var i = 0; i < inputArr.length - 1; i++) {
    if (typeof inputArr[i] === "number") {
      var min = i;

      for (var j = i + 1; j < inputArr.length; j++) {
        if (inputArr[j] < 0) {
          inputArr[j] = Math.abs(inputArr[j]);
        }
        if (inputArr[j] > inputArr[min]) {
          min = j;
        }
      }
      if (min != i) {
        var current = inputArr[i];
        inputArr[i] = inputArr[min];
        inputArr[min] = current;
      }
    } else {
      console.log(`Въведените данни на индекс ${i} не са цифри`);
      break;
    }
  }
  biggestNumbers = inputArr.slice(0, 3);
  console.log(biggestNumbers);
} else {
  console.log(`Въведените данни не са масив`);
}
