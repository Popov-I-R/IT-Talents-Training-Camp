var n = 8;
var result = "";
var memory = 1;
var stars = "*";

for (var i = 1; i <= n; i++) {
  for (var space = 8; space > i; space--) {
    if (space === 2) {
      result += "  ";
    } else if (space === 3) {
      result += "  ";
    } else if (space === 4) {
      result += "  ";
    } else if (space === 5) {
      result += "   ";
    } else if (space === 6) {
      result += "   ";
    } else if (space === 7) {
      result += "   ";
    } else if (space === 8) {
      result += "    ";
    }
  }

  for (var j = 1; j <= i; j++) {
    if (j === 1) {
      memory = 1;
    }
    result += " " + memory;
    memory = memory * 2;
    memorysecond = memory;
  }

  for (let k = memorysecond; k >= 1; k--) {}

  console.log(result);
  result = "";
  memory = "";
}
