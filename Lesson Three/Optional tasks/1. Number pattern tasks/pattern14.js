var result = "";
var n = 5;

for (var i = n; i >= 1; i--) {
  for (var inside = n; inside >= 1; inside--) {
    if (inside <= i) {
      result += i;
    } else {
      result += inside;
    }
  }

  console.log(result);
  result = "";
}
