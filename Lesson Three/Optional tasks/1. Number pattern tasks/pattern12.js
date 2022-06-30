var num = 5;

var result = "";

for (let i = 1; i <= num; i++) {
  for (let j = 0; j < 5; j++) {
    result += i + j;
  }
  console.log(result);
  result = "";
}
