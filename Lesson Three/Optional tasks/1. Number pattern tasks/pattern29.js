var n = 5;
var result = "";

for (var i = 1; i <= 5; i++) {
  for (var j = n; j >= i; j--) {
    result += j;
  }
  console.log(result);
  result = "";
}
