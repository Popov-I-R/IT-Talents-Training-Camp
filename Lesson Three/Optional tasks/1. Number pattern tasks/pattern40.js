var n = 5;
var result = "";

for (var i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    for (var chetni = 2; chetni <= n * 2; chetni = chetni + 2) {
      if (chetni <= i * 2) {
        result += chetni;
      }
    }
  } else {
    for (var nechetni = 1; nechetni <= n * 2; nechetni = nechetni + 2) {
      if (nechetni <= i * 2) {
        result += nechetni;
      }
    }
  }
  console.log(result);
  result = "";
}
