var result = "";

for (var outside = 1; outside <= 5; outside++) {
  for (var inside = 1; inside <= 5; inside++) {
    if (inside <= outside) {
      result += outside;
    }
  }
  console.log(result);
  result = "";
}
