var n = 7;
var result = "";

for (let i = 1; i <= n; i++) {
  if (i === 1 || i === n) {

    for (let upDown = 1; upDown <= n; upDown++) {
      result += "#";
    }
  } else {
    for (let betweeen = 1; betweeen <= n; betweeen++) {
      if (i === betweeen) {
        result += "#";
      } else {
        result += " ";
      }
    }
  }

  console.log(result);
  result = "";
}
