var firstArray = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
var secondArray = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
var thirdArray = [];
var isNaturalNumber = true;

if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] > 0 && secondArray[i] > 0) {
      if (firstArray[i] > secondArray[i]) {
        thirdArray.push(firstArray[i]);
      } else {
        thirdArray.push(secondArray[i]);
      }
    } else {
      isNaturalNumber = false;
      console.log(`Невалидно число в индекс ${i}.
Моля, въведете естествени числа.
Процесът ще бъде прекратен.`);
      break;
    }
  }
  // Съдържание на 3-те масива:
  console.log(firstArray);
  console.log(secondArray);
  console.log(thirdArray);
} else {
  console.log(`Моля, въведете масив от елементи.`);
}

