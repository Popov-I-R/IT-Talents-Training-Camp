var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n; j++) {
    if (j <= i) {
      result += j;
    }
  }

  for (var k = i - 1; k >= 1; k--) {
    result += k;
  }
  console.log(result);
  result = "";
}
