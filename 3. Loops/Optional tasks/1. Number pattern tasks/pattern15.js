var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = i; j <= n + i - 1; j++) {
    if (j >= n) {
      result += n;
    } else {
      result += j;
    }
  }
  console.log(result);
  result = "";
}
