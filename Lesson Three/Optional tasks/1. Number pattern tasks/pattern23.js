var result = "";
var n = 5;

for (var i = 5; i >= 1; i--) {
  for (var j = 5; j >= 1; j--) {
    if (j >= i) {
      result += i;
    }
  }
  console.log(result);
  result = "";
}
