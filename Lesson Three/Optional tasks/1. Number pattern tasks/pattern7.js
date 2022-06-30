var result = "";

for (var outside = 1; outside <= 5; outside++) {
  for (var inside = 1; inside <= 5; inside++) {
    if (outside === 3 && inside <= 5) {
      result += 0;
    } else {
      if (inside === 3 && outside !== 3) {
        result += 0;
      } else {
        result += 1;
      }
    }
  }
  console.log(result);
  result = "";
}
