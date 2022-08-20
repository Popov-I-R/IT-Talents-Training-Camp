var n = 5;
var result = "";

for (var i = 1; i <= 5; i++) {
  for (var j = i; j <= n * 2 - 1; j++) {
    if (j < i * 2) {
      result += j;
    } else {
    }
  }
  console.log(result);
  result = "";
}
