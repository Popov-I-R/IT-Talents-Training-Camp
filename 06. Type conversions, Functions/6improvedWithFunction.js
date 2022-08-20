var word = "супер яката задача";

function isString() {
  if (typeof word !== "string") {
    console.log(`Моля, въведете изречение.`);
  } else {
    toUpperCase(word);
  }
}

isString(word);

function toUpperCase() {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (i === 0 || word[i - 1] === " ") {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }

  console.log(result);
}
