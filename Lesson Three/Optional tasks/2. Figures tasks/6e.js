var n = 8;
var result = "";


for (var i = 1; i <= n; i++) {
  for (var row = 1; row <= n; row++) {
    if (i > row) {
      result += " ";
    } else {
      result += row - i + 1;
    }
  }

  console.log(result);
  result = "";
}
