var result = "";

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    if (i === 4) {
      result += "2";
    } else if (i === 5) {
      result += "1";
    } else {
      result += i;
    }
  }
  console.log(result);
  result = "";
}
