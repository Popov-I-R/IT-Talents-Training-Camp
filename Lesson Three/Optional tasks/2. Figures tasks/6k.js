var result = "";

for (let i = 8; i >= 1; i--) {
  for (var j = 1; j <= 8; j++) {
    if (j <= i) {
      result += j;
    } else {
      result += " ";
    }
  }
  for (var k = 8; k >= 1; k--) {
    if (k === 8) {
      continue;
    }
    if (k <= i) {
      result += k;
    } else {
      result += " ";
    }
  }

  console.log(result);
  result = "";
}
