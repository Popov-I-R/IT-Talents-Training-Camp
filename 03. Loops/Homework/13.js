var n = 26;
for (var a = 1; a <= 9; a++) {
  for (var b = 0; b <= 9; b++) {
    for (var c = 0; c <= 9; c++) {
      if (a + b + c === n) {
        console.log("" + a + b + c);
      } else {
        continue;
      }
    }
  }
}
