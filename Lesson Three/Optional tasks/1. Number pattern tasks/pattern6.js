var result = "";

for (var outside = 1; outside <= 5; outside++) {
  for (var inside = 1; inside <= 5; inside++) {
    if (outside % 2 === 1 && inside % 2 === 1) {
      result += "1";
    } else {
      if (outside % 2 === 0 && inside % 2 === 0) {
        result += "1";
      } else {
        result += "0";
      }
    }
  }

  console.log(result);
  result = "";
}
