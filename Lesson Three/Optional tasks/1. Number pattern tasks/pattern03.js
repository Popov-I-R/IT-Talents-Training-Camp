var result = "";

for (var j = 1; j <= 5; j++) {
  for (var i = 1; i <= 5; i++) {
    if (i % 2 === 1) {
      result += "0";
    } else {
      result += "1";
    }
  }
  console.log(result);
  result = "";
}
