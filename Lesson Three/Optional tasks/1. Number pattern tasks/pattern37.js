var n = 5;
var result = "";

for (var i = 1; i <= 5; i++) {
  if (i === 2 || i === 3) {
    for (var j = 1; j <= 5; j++) {
      if (j <= i) {
        if (j % 2 === 0) {
          result += "1";
        } else {
          result += "0";
        }
      }
    }
  } else {
    for (var j = 1; j <= 5; j++) {
      if (j <= i) {
        if (j % 2 === 0) {
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
