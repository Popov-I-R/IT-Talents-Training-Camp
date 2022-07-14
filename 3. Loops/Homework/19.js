var num = 11;
var isValid = false;
var result = "";
var i = num;

// Проверка за естествено число
if (num > 0 && Math.floor(num) === +num) {
  isValid = true;
}

if (isValid && num >= 10 && num <= 99) {
  while (i > 1) {
    if ((i - 1) % 2 === 0) {
      num *= 3;
      num += 1;
      i = num;
      result += num + " ";
    } else {
      num *= 0.5;
      i = num;
      result += num + " ";
    }
  }
}

console.log(result);
