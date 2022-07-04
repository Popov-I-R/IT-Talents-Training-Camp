var result = "";

for (let i = 5; i >= 1; i--) {
  for (var j = i; j <= 5; j++) {
    result += j;
  }
  console.log(result);
  result = "";
}
