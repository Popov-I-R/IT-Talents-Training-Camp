var n = 8;
var result = "";

for (var i = 2; i <= n + 1; i++) {
  for (var j = n; j >= 1; j--) {
    if (j >= i) {
      result += " ";
    } else {
      result += j;
    }
  }
  console.log(result);
  result = "";
}
