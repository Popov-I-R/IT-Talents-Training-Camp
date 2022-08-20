var arr = new Array(10);
var n = 1;

arr[0] = n;
arr[1] = n;

if (Array.isArray(arr)) {
  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  console.log(arr);
} else {
  console.log(`Подадените данни не са масив`);
}

