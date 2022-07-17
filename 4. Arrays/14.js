var inputArr = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];
var outputArr = [];

if (Array.isArray(inputArr)) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > -2.99 && inputArr[i] < 2.99) {
      outputArr.push(inputArr[i]);
    }
  }
  console.log(outputArr);
} else {
  console.log(`Въведените данни не са масив.`);
}
