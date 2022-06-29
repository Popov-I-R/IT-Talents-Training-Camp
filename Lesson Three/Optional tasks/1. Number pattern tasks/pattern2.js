result = "";

for (var i = 1; i <= 5; i++) {
  if (i % 2 === 1) {
    for (var j = 1; j <= 5; j++) {
      result += "1";
    }
  } else {
    for (var j = 1; j <= 5; j++) {
      result += "0";
    }
  }
  console.log(result);
  result = "";
}
