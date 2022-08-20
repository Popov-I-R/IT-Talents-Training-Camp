var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

var currentCounter = 0;
var biggestCount = 0;

var biggestNumSaver = 0;

for (var i = 0; i <= 9; i++) {
  currentCounter = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === i) {
      currentCounter++;
      if (currentCounter > biggestCount) {
        biggestCount = currentCounter;
        biggestNumSaver = arr[j];
        if (j === arr.length - 1) {
          currentCounter = 0;
        }
      }
    } else if (j === arr.length - 1) {
      currentCounter = 0;
    }
  }
}
console.log(
  `Най-често срещаното число е ${biggestNumSaver} и се среща ${biggestCount} пъти.`
);
