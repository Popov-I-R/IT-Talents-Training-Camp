var num = 5;
var space = " ";

var result = "";
var memory = 0;

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 5; j++) {
    result += memory + j + " ";
    if (j === 5) {
      memory = j + memory;
    }
  }

  console.log(result);
  result = "";
}
