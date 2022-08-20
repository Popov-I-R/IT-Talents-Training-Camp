var n = 5;
var result = "";
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= n; j++) {
    result += "#";
  }
  console.log(result);
  result = "";
}
