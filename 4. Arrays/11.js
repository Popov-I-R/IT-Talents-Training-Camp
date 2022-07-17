var inputArr = [-23, -55, 17, 75, 56, 105, 134];
var result = "";
var comma = ", ";
var counter = 0;

if (Array.isArray(inputArr)) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] % 5 === 0 && inputArr[i] > 5) {
      counter++;

      result += inputArr[i] + comma;
    }
  }

  var newStr = result.slice(0, -2);

  console.log(`${newStr} -> ${counter} числа`);
} else {
  console.log(`Въведените входни данни не са масив!`);
}
