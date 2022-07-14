var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = i; j >= 1; j--) {
    result += j;
  }
  console.log(result);
  result = "";
}
