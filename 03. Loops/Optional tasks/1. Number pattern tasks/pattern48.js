var result = "";

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    if (i >= j) {
      result += j;
    } else {
      result += " ";
    }
  }

  for (var k = 5; k >= 1; k--) {
    if (i + 1 <= k) {
      result += " ";
    } else {
      result += k;
    }
  }

  console.log(result);
  result = "";
}



