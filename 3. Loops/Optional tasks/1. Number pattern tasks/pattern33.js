var n = 5;
var result = "";

for (var i = 5; i >= 1; i--) {
  for (var j = i; j < i * 2; j++) {
    result += j;
  }
  console.log(result);
  result = "";
}
