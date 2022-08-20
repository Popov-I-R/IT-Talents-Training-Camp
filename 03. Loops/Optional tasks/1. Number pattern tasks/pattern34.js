var n = 5;
var result = "";

for (var i = 1; i <= n * 2 - 1; i = i + 2) {
  for (var j = i; j < n * 2; j = j + 2) {
    result += j;
  }
  console.log(result);
  result = "";
}
