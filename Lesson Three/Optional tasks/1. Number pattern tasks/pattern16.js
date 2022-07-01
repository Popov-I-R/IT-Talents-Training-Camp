var n = 5;
var result = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n + i - 1; j++) {
    if (j <= n) {
      result += j;
    } else {
      result += j - i;
    }
  }

  console.log(result);
  result = "";
}
