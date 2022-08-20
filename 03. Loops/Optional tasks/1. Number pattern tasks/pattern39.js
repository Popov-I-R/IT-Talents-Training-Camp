var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n * 2 - 1; j++) {
    if (j <= i * 2 - 1) {
      result += j;
    }
  }
  console.log(result);
  result = "";
}
