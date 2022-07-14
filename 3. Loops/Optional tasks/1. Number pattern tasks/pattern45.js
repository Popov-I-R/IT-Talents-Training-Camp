var result = "";

for (var i = 1; i <= 5; i++) {
  if (i === 2) {
    for (var j = i; j <= i + 1; j++) {
      result += j + " ";
    }
  } else if (i === 3) {
    for (var j = i + 1; j <= i + 3; j++) {
      result += j + " ";
    }
  } else if (i === 4) {
    for (var j = i * 2 - 1; j <= i * 2 + 2; j++) {
      result += j + " ";
    }
  } else if (i === 5) {
    for (var j = i * 2 + 1; j <= i * 3; j++) {
      result += j + " ";
    }
  } else {
    for (var j = i; j <= i; j++) {
      result += j;
    }
  }

  console.log(result);
  result = "";
}
