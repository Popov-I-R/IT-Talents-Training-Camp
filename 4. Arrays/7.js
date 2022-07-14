var inputArr = [2, 3, -11, 7];

var sum = 0;

if (Array.isArray(inputArr)) {
  var lenghtOfInputArr = inputArr.length; // взимам дължината
  var outputArr = new Array(lenghtOfInputArr);

  for (let i = 0; i < outputArr.length; i++) {
    if (typeof inputArr[i - 1] === "undefined") {
      inputArr[i - 1] = 0;
    } else if (typeof inputArr[i + 1] === "undefined") {
      inputArr[i + 1] = 0;
    }

    outputArr[i] = inputArr[i - 1] + inputArr[i + 1];
  }
  console.log(outputArr);
} else {
  console.log(`Въведените входни данни не са масив.`);
}
