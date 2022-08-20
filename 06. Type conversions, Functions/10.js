var word = "Hello";
var result = "";

if (typeof word === "string") {
  for (let i = 0; i < word.length; i++) {
    var current = word[i].charCodeAt();
    var newCurrent = current + 5;
    result += String.fromCharCode(newCurrent);
  }
  console.log(result);
} else {
  console.log(`Моля, въведете низ от символи`);
}
