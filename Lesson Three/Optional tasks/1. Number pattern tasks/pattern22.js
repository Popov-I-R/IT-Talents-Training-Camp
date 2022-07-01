var result = "";
var n = 5;

for (var i = 1; i <= n; i++) {
  for (var j = n; j >= 1; j--) {
    if (j >= i) {
      result += i;
    }
  }
  console.log(result);
  result = "";
}
