var n = 6;
var result = "";

for (var i = 1; i <= n; i++) {
  // spaces
  for (var space = 1; space <= n - i; space++) {
    result += " ";
  }

  for (var symbol = 1; symbol <= 2 * i - 1; symbol++) {
    result += "#";
  }
  console.log(result);
  result = "";
}
