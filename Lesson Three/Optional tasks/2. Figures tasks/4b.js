let n = 8;
let result = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    result += "#" + " ";
  }
  console.log(result);
  result = "";
}
