var num = 5;
var result = "";

for (var outside = 1; outside <= num; outside++) {
  if (outside === 1 || outside === num) {
    //горна и долна част

    for (var upAndDown = 1; upAndDown <= num; upAndDown++) {
      // Вътрешна горна и долна част
      if (upAndDown === 1 || upAndDown === num) {
        result += "0";
      } else {
        result += "1";
      }
    } // Край на горна и долна част
  } else {
    for (var middle = 1; middle <= num; middle++) {
      if (middle === 1 || middle === num) {
        result += "1";
      } else {
        result += "0";
      }
    }
  }

  console.log(result);
  result = "";
}
