var num = 1;
var j = 1;
var result = "";

while (num <= 9) {
  while (j <= 9) {
    j++;
    result += num + "*" + (j - 1) + "; ";
  }
  console.log(result);
  result = "";
  j = num + 1;
  num++;
}
