var n = 5;
var result = "";
for (var i = n; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    result += j;
  }

  console.log(result);
  result = "";
}
