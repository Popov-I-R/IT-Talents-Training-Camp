var n = 6;
var result = "";
var memory = 1;

for (let i = 1; i <= n; i++) {
  if (i === 2) {
    continue;
  }
  for (var j = i; j <= memory; j++) {
    result += j;
  }

  for (var k = memory - 1; k >= i - 1; k--) {
    if (k > 1) {
      result +=  k;
    }
  }

  memory = memory + 2;
  console.log(result);
  result = "";
}
