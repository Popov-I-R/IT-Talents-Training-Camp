var result = "";

for (var i = 1; i <= 9; i++) {
  if (i === 1 || i === 9) {
    for (var j = 1; j <= 9; j++) {
      if (j === 1 || j === 9) {
        result += "1";
      } else {
        result += " ";
      }
    }
  } else if (i === 2 || i === 8) {
    for (var j = 1; j <= 8; j++) {
      if (j === 2 || j === 8) {
        result += "2";
      } else {
        result += " ";
      }
    }
  } else if (i === 3 || i === 7) {
    for (var j = 1; j <= 7; j++) {
      if (j === 3 || j === 7) {
        result += "3";
      } else {
        result += " ";
      }
    }
  } else if (i === 4 || i === 6) {
    for (var j = 1; j <= 6; j++) {
      if (j === 4 || j === 6) {
        result += "4";
      } else {
        result += " ";
      }
    }
  } else {
    for (var j = 1; j <= 5; j++) {
      if (j === 5) {
        result += "5";
      } else {
        result += " ";
      }
    }
  }

  console.log(result);
  result = "";
}
