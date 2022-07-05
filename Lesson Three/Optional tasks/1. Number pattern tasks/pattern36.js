var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n; j++) {
    if (j <= i) {
      if (i % 2 === 0) {
        result += "0";
      } else {
        result += "1";
      }
    }
  }
  console.log(result);
  result = "";
}
