var n = 7;
var result = "";

for (var i = n; i >= 1; i--) {
  if (i === 1 || i === n) {
    for (var upDown = n; upDown >= 1; upDown--) {
      result += "#";
    }
  } else {
    for (var between = 1; between <= n; between++) {
      if (between > 1 && between < 7) {
        if (between === i) {
          result += " " + "#";
        } else {
          result += " ";
        }
      }
    }
  }

  console.log(result);
  result = "";
}
