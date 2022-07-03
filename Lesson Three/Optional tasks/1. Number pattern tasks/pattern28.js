var n = 5;
var result = "";

for (var i = 5; i >= 1; i--) {
  for (var j = n; j >= i; j--) {
    result += j;
  }
  console.log(result);
  result = "";
}
