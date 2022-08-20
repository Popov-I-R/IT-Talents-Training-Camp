var word = "asd-12sdf45-56asdf100";



if (typeof word === "string") {
  var arr = [];
  var result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() >= 45 && word[i].charCodeAt() <= 57) {
      if (word[i].charCodeAt() >= 45 && word[i].charCodeAt() <= 57) {
        if (word[i].charCodeAt() === 45 && word[i - 1].charCodeAt() <= 57) {
          arr.push(result);
          result = "";
        }
        if (i === word.length - 1) {
          result += word[i];
          arr.push(result);
        }
        result += word[i];
      } else {
        arr.push(result);
        result = "";
      }
    } else {
      if (result.length === 0) {
        continue;
      } else {
        arr.push(result);
        result = "";
      }
    }
  }
  var sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum = +sum + +arr[j];
  }

  console.log(`${arr}`);
  console.log(`Сума:${sum}`);
} else {
  ("Моля, въведете низ от символи.");
}
