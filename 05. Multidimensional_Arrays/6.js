var m = 4;
var n = 4;

var result = "";

for (let i = 0; i <= m; i++) {
  for (let j = 0; j <= n; j++) {
    if (i === j) {
      result += 1;
    } else {
      result += 0;
    }
  }
  console.log(result);
  result = "";
}
