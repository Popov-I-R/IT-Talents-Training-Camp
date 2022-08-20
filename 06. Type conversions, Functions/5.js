let firstWord = "машина";
let secondWord = "шапка";

var result = "";
var arr = [];

if (typeof firstWord === "string" && typeof secondWord === "string") {
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== secondWord.charAt(0)) {
      console.log(`${firstWord[i]}`);
    } else {
      for (var j = 0; j < secondWord.length; j++) {
        arr.push(secondWord[j]);
      }
      console.log(arr.join(""));
    }
  }
} else {
  console.log(`Моля, въведете редица от знаци`);
}
