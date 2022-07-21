let symbolsOne = "хипопотам";
let symbolsTwo = "хипопотук";




if (typeof symbolsOne === "string" && typeof symbolsTwo === "string") {
  if (symbolsOne.indexOf(" ", 0) === -1 && symbolsTwo.indexOf(" ", 0) === -1) {
    
    console.log(symbolsOne.length === symbolsTwo.length ?
         "Двата низа са с равна дължина" : "Двата низа са с различна дължина"); 

         console.log("Разлика по позиции:");

    for (let i = 0; i < symbolsOne.length; i++) {
      if (symbolsOne[i] === symbolsTwo[i]) {
        //vs oki
      } else {
        console.log(`${i+1} ${symbolsOne[i]}-${symbolsTwo[i]}`);
      }
    }
  } else {
    console.log(`Въведените символи не трябва да съдържат интервали.`);
  }
} else {
  ("Моля, въведеде редица от символи.");
}
