var n = 8;
var result = "";

for (var i = 1; i <= n; i++) {
  // spaces
  for (var spaces = n; spaces >= i; spaces--) {
    result += " ";
  }
  //ляв триъгълник
  for (var left = 1; left <= i; left++) {
    result += left;
  }
  // десен триъгълник

  for (var right = i - 1; right >= 1; right--) {
    result += right;
  }

  console.log(result);
  result = "";
}


