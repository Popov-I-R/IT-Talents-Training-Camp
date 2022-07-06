var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i * 2 - 1; j = j + 2) {
    result += j;
  }
  for (var k = j - 4; k >= 1; k = k - 2) {
    result += k;
  }

  console.log(result);
  result = "";
}
