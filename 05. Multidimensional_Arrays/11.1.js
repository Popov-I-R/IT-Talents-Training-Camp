var n = 4;
var m = 5;

result = "";

var arr = new Array(n);

for (let i = 1; i <= n * m; i = i + m) {
  arr[i] = new Array(m);
  for (let j = i; j <= i + n; j++) {
    arr[i] = i;
    arr[j] = j;
    result += arr[j] + " ";
  }
  console.log(result);
  result = "";
}
