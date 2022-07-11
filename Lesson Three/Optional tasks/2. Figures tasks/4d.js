var n = 8;
var result = "";

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n; j++) {
    if (j >= i) {
      result += "#";
    } else {
      result += " ";
    }
  }
  console.log(result);
  result = "";
}
