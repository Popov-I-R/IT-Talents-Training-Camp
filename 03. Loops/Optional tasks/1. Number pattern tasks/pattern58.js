var n = 5;
var result = "";

for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= i; j++) {
    if (j === 0) {
      result += "*";
    } else {
      result += j;
    }
  }

  for (var k = i - 1; k >= 0; k--) {
    if (k === 0) {
      result += "*";
    } else {
      result += k;
    }
  }
  console.log(result);
  result = "";
}
for (var i = n - 1; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      result += "*";
    } else {
      result += j;
    }
  }

  for (let k = i - 1; k >= 0; k--) {
    if (k === 0) {
      result += "*";
    } else {
      result += k;
    }
  }

  console.log(result);
  result = "";
}
