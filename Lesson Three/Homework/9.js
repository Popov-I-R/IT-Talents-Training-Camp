var numA = 1;
var numB = 107;
var square = 0;
var result = "";
var sum = 0;

while (numA <= numB) {
  if (sum >= 200) {
    break;
  } else {
    if (numA % 3 === 0) {
      result = result + "skip " + numA + ", ";
    } else {
      square = numA ** 2 + ", ";
      result = result + square;
      sum = sum + numA ** 2;
    }
  }
  numA++;
}
console.log(result);
