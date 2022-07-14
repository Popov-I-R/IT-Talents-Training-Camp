var n = 5;
var result = "";
var memory = 1;

for (var i = 1; i <= n; i++) {
  memory = 0;
  for (var sum = i; sum <= n * 2 - 1 + i; sum++) {
    memory = memory + i;
    result += memory + " ";
  }

  console.log(result);
  result = "";
}
