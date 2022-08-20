var result = "";

for (var i = 1; i <= 5; i++) {
  if (i % 2 === 1) {
    for (var j = 1; j <= i; j++) {
      result += j;
    }
  } else {
    for (var j = i; j >= 1; j--) {
      result += j;
    }
  }
  console.log(result);
  result = "";
}
