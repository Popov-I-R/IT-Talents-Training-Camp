var result = "";
var num = 5;

for (var upAndDown = 1; upAndDown <= num; upAndDown++) {
  if (upAndDown === 1 || upAndDown === num) {
    for (var insideUpAndDown = 1; insideUpAndDown <= num; insideUpAndDown++) {
      if (insideUpAndDown === 1 || insideUpAndDown === num) {
        result += "1";
      } else {
        result += "0";
      }
    }
  } else {
    for (var inside = 1; inside <= num; inside++) {
      if (upAndDown === 3) {
        if (inside === 3) {
          result += "1";
        } else {
          result += "0";
        }
      } else if (upAndDown !== 3) {
        if (inside % 2 === 1) {
          result += "0";
        } else {
          result += "1";
        }
      }
    }
  }
  console.log(result);
  result = "";
}
