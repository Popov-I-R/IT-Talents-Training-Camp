var inputArr = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, -7.5, 8.6, 9.1, -4];
var outputArr = [];
var sum = 0;
var averageValue = 0;
var nonZeroCounter = 0; // Брояч за числата от новата редица, които са различни от 0
// за да знам на колко да разделя, за да получа средната стойност.

if (Array.isArray(inputArr)) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > -10 && inputArr[i] < 10) {
      // Проверка дали е между -10 и 10

      if (inputArr[i] < 0.231 && inputArr[i] !== 0) {
        outputArr.push((i + 1) * (i + 1) + 41.25);
      } else {
        outputArr.push(inputArr[i] * (i + 1));
      }
    } else {
      console.log("Моля въведете числа между - 10 и 10 ");
      break;
    }
  }

  for (let j = 0; j < outputArr.length; j++) {
    if (outputArr[j] !== 0) {
      nonZeroCounter++;
    }
    sum += outputArr[j];
  }

  averageValue = sum / nonZeroCounter;

  console.log(inputArr);
  console.log(outputArr);
  console.log(`Средна стойност на елементите: ${averageValue}`);
} else {
  console.log(`Въведените данни не са масив`);
}
