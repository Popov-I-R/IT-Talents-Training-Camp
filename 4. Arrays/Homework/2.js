var arr1 = [5, 2, 5, 8, 3];
var newArr = [];
var combinedArrays = [];

if (Array.isArray(arr1)) {
  for (let i = 0; i < arr1.length; i++) {
    newArr.unshift(arr1[i]);
  }

  combinedArrays = arr1.concat(newArr);

  console.log(combinedArrays);
} else {
  console.log(`Подадените данни не са масив`);
}

