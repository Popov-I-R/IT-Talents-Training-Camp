var arr = [1, 2, 3, 4, 5, 6, 7];

// Размяна на 0 и 1 чрез 3та Променлива

if (Array.isArray(arr)) {
  var temp = arr[1];
  arr[1] = arr[0];
  arr[0] = temp;

  //Размяна на 3 и 4 чрез събиране
  arr[2] = arr[2] + arr[3];
  arr[3] = arr[2] - arr[3];
  arr[2] = arr[2] - arr[3];

  // Размяна на 5 и 6 чрез умножение

  arr[4] = arr[4] * arr[5];
  arr[5] = arr[4] / arr[5];
  arr[4] = arr[4] / arr[5];

  console.log(arr);
} else {
  console.log(`Въведените данни не са масив`);
}
