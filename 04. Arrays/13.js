var n = 99;
var array = [];

if (n > 0 && typeof n === "number") {
  while (n !== 0) {
    var temp = n % 2;
    n = Math.floor(n / 2);
    array.unshift(temp);
  }

  console.log(array);
} else {
  console.log(
    `Въведените данни са некоректни. Моля въведете число по-голямо от 0.`
  );
}
