var n = 9;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 0; j <= 9; j++) {
    if (j === 0) {
      result += i + "|" + " ";
    } else if (j > 0) {
      result += i * j + " ";
    }
  }
  console.log(result);
  result = "";
}
