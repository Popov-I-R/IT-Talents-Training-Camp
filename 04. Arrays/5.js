var arr = new Array(10);

if (Array.isArray(arr)) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i * 3;
  }

  console.log(arr);
} else {
  console.log(`Подадените данни не са масив`);
}
