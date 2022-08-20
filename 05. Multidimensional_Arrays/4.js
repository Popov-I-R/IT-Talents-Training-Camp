var arr = [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    var temp = arr.splice(i, 1);
    arr.splice(arr.length, 0, ...temp);
  }
}

console.log(arr);
