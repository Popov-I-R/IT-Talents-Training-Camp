var arr = [2, 3, 2, 4, 3, 7];
var itsOkay = true;

if (Array.isArray(arr)) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (arr[i] < arr[i + 1]) {
      } else {
        itsOkay = false;
      }
    } else if (i % 2 === 1) {
      if (arr[i] > arr[i - 1]) {
      } else {
        itsOkay = false;
      }
    }
  }
  if (itsOkay) {
    console.log(`Изпълнява изискванията за зигзагообразна нагоре редица`);
  } else {
    console.log(`Не изпълнява изискванията за зигзагообразна нагоре редица`);
  }
} else {
  console.log(`Въведените данни не са масив`);
}
