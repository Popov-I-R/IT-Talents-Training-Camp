var arr = ["asd", "abc", "aide", "tozi", "tuk"];
var find = "tuk";

var result = "";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    result += i;
  } else {
  }
}

if (result.length > 0) {
  console.log(`Съвпадение на индекс: ${result}`);
} else {
  console.log(`Няма съвпадения.`);
}
