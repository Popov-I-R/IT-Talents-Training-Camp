var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    result += j;
  }

  console.log(result);
  result = "";
}

for (var k = n-1; k >= 1; k--) {
  for (var down = 1; down <= k; down++) {
    result += down;
  }
  console.log(result);
  result = "";
}
