var n = 8;
var result = "";
var space = 1;
// външен
for (var i = n; i >= 1; i--) {
  for (var spaces = 1; spaces <= space; spaces++) {
    result += " ";
  }
  //left

  for (var left = 1; left <= i; left++) {
    result += left;
  }

  // right
  for (var right = i - 1; right >= 1; right--) {
    result += right;
  }
  
  space++;
  console.log(result);
  result = "";
}
