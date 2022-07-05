var n = 5;
var result = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j <= i) {
      if (i === 3) {
        if (j % 2 === 0) {
          result += "0";
        } else {
          result += "1";
        }
      } else if (i === 4) {
        if (j === 1 || j === 4) {
          result += "1";
        } else {
          result += "0";
        }
      } else {
        result += "1";
      }
    }
  }
  console.log(result);
  result = "";
}
