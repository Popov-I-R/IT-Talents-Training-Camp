var n = 8;
var result = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 8; j++) {
    if (j >= i) {
      result += "#";
    } else {
      result += " ";
    }
  }

  console.log(result);
  result = "";
}
