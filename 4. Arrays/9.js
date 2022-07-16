var inputArr = [2, 3, 7, -5];
var outputArr = [];
// ---------------Решение с допълнителен масив---------------------
if (Array.isArray(inputArr)) {


for (let i = 0; i < inputArr.length; i++) {
  outputArr.unshift(inputArr[i]);
}
console.log(outputArr);
} else {
    console.log(`Въведените входни данни не са масив`);
}

//--------------------Решение без допълнителен масив------------------
// if (Array.isArray(arr)) {

// inputArr.reverse()
// console.log(inputArr)
// } else {
//     console.log(`Въведените входни данни не са масив`);
// }
