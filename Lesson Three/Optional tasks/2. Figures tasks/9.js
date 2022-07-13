var n = 5;
var result = "";

for (var i = n; i >= 1; i--) {
  for (var j = 1; j <= n; j++) {
    if (i >= j + 1) {
      result += ".";
    } else {
      result += n - i + 1;
    }
  }

  console.log(result);
  result = "";
}
