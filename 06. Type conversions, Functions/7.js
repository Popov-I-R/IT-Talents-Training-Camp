var words = "asd fg hjkl";
var result = "";
var counter = 0;

if (typeof words === "string") {
  var splittedWords = words.split(" ");
  var numOfWords = splittedWords.length;

  for (let i = 0; i < splittedWords.length; i++) {
    if (splittedWords[i].length > counter) {
      counter = splittedWords[i].length;
    }
  }
  console.log(`${numOfWords} думи, най-дългата е с ${counter} символа.`);
} else {
  console.log(`Моля, въведете набор от думи!`);
}
