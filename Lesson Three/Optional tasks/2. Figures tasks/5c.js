var n = 6;
var result = "";

for (var i = 1; i <= n; i++) {
  // goren spaces
  for (var j = 1; j <= n - i; j++) {
    result += "  ";
  }
  for (var sym = 1; sym <= 2 * i - 1; sym++) {
    result += " #";
  }

  console.log(result);
  result = "";
}

for (var down = 1; down <= n; down++) {
  //spaces
  for (var k = 1; k <= down; k++) {
    result += "  ";
  }

  for (var sym1 = 1; sym1 < 2 * (n - down); sym1++) {
    result += " #";
  }
  console.log(result);
  result = "";
}
