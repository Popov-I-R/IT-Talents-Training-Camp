var num = 5;
result = "";

for (var i = 1; i <= num; i++) {
  if (i === 1 || i === num) {
    for (var firstAndLast = 1; firstAndLast <= num; firstAndLast++) {
      result += "1";
    }
  } else {
    for (var rows = 1; rows <= num; rows++) {
      if (rows === 1 || rows === num) {
        result += "1";
      } else {
        result += "0";
      }
    }
  }
  console.log(result);
  result = "";
}
