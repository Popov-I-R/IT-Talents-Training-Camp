var arr = [-1, 3, 4, 5, 10];
var isPositive = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    isPositive = false;
  }
}
console.log(isPositive ? "da" : "ne");
