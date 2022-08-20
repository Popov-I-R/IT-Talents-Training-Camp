function toArray(parameters) {
  var arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  console.log(arr);
}

toArray(23, 45, 66, 2, 4, 5);
