var word = "капак";

var isPalindrom = true;

if (typeof word === "string") {
  
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            isPalindrom = false;
        }
        
    }
  console.log(isPalindrom ? "да." : "не.");
    

} else {
  ("Моля, въведете ред от символи.");
}
