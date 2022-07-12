var n = 7;
var result = "";

for (var outside = 1; outside <= n; outside++) {
  if (outside === 1 || outside === n) {
    // Горе и долу
    for (var upAndDown = 1; upAndDown <= n; upAndDown++) {
      result += "#";
    }
  }

  if (outside === 2 || outside === n - 1) {
    // втори и пред последен ред
    for (var secondAndPre = 1; secondAndPre <= n; secondAndPre++) {
      if (
        secondAndPre === 1 ||
        secondAndPre === 2 ||
        secondAndPre === n - 1 ||
        secondAndPre === n
      ) {
        result += "#";
      } else {
        result += " ";
      }
    }
  }

  if (outside === 3 || outside === n - 2) {
    for (var thirdAndFifth = 1; thirdAndFifth <= n; thirdAndFifth++) {
      if (
        thirdAndFifth === 1 ||
        thirdAndFifth === 3 ||
        thirdAndFifth === n - 2 ||
        thirdAndFifth === n
      ) {
        result += "#";
      } else {
        result += " ";
      }
    }
  }

  if (outside === 4) {
    // Среда
    for (var middle = 1; middle <= n; middle++) {
      if (middle === 4 || middle === 1 || middle === n) {
        result += "#";
      } else {
        result += " ";
      }
    }
  }

  console.log(result);
  result = "";
}
