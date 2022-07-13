var n = 8;
var result = "";

for (var i = 1; i <= n; i++) {
  //left
  for (var left = 1; left <= n; left++) {
    if (left <= i) {
      result += left;
    } else {
      result += " ";
    }
  }
  // right
  for (var right = n-1; right >= 1; right--) {
    if (right >= i+1) {
      result += " "
    } else {
      result += right;
    }
  }

  console.log(result);
  result = "";
}
