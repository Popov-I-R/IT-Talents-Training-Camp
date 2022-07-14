var n = 9;
var result = "";

for (let i = 1; i <= n; i++) {
  if (i === 1 || i === 9) {
    for (var j = 1; j <= 9; j++) {
      result += "5" + " ";
    }
  } else if (i === 2 || i === 8) {
    for (var j = 1; j <= 9; j++) {
      if (j >= 2 && j <= 8) {
        result += "4" + " ";
      } else {
        result += "5" + " ";
      }
    }
  } else if (i === 3 || i === 7) {
    for (var j = 1; j <= 9; j++) {
      if (j >= 3 && j <= 7) {
        result += "3" + " ";
      } else if (j === 1 || j === 9) {
        result += "5" + " ";
      } else {
        result += "4" + " ";
      }
    }
  } else if (i === 4 || i === 6) {
    for (var j = 1; j <= 9; j++) {
      if (j >= 5 && j <= 6) {
        result += "2" + " ";
      } else if (j === 1 || j === 9) {
        result += "5" + " ";
      } else if (j === 2 || j === 8) {
        result += "4" + " ";
      } else {
        result += "3" + " ";
      }
    }
  } else if (i === 5) {
    for (var j = 1; j <= 9; j++) {
      if (j === 5) {
        result += "1" + " ";
      } else if (j === 1 || j === 9) {
        result += "5" + " ";
      } else if (j === 2 || j === 8) {
        result += "4" + " ";
      } else if (j === 3 || j === 7) {
        result += "3" + " ";
      } else if (j === 4 || j === 6) {
        result += "2" + " ";
      }
    }
  }
  console.log(result);
  result = "";
}
