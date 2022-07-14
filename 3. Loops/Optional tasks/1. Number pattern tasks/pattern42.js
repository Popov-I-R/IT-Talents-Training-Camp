var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 2; j <= i * 2; j = j + 2) {
    if (j <= i * 2) {
      result += j;
    }
  }

  for (var k = i * 2 - 2; k >= 2; k = k - 2) {
    result += k;
  }

  console.log(result);
  result = "";
}
