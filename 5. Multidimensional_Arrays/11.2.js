var n = 4;
var m = 5;

result = "";

var arr = new Array(n);

for (let i = 1; i <= arr.length; i++) {
  for (let j = i; j <= n * n + i; j = j + n) {
    result += j + " ";
  }

  console.log(result);
  result = "";
}
