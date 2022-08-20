var n = 10;
var result = "";

for (let i = 1; i <= n; i++) {
  if (i === 1 || i === n) {
    // горе и долу
    for (let upDown = 1; upDown <= n; upDown++) {
      result += "# ";
    }
  } else {
    for (let betweeen = 1; betweeen <= n; betweeen++) {
      if (betweeen === 1 || betweeen === n) {
        result += "# ";
      } else {
        result += "  ";
      }
    }
  }

  console.log(result);
  result = "";
}
