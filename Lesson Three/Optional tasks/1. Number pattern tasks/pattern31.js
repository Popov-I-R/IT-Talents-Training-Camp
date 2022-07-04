var result = "";

for (let i = 1; i <= 5; i++) {
  for (var j = i; j <= 5; j++) {
    result += j;
  }
  console.log(result);
  result = "";
}
