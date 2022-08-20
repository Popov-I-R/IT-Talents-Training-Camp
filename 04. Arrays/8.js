// var inputArr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

// var temp = [inputArr[0]];
// var result = [];

// if (Array.isArray(inputArr)) {
//   for (var i = 1; i < inputArr.length; i++) {
//     if (inputArr[i] === temp[0]) {
//       temp.push(inputArr[i]);
//     } else {
//       temp = [];
//       temp.push(inputArr[i]);
//     }

//     if (temp.length > result.length) {
//       result = temp.slice();
//       temp = inputArr[i + 1];
//     }
//   }
//   console.log(`Максималната редица е: ${result}`);
// } else {
//   console.log("Invalid input");
// }



var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1,4,4,4,4,4,4];

if (Array.isArray(arr)) {
  var isNum = true;

  var numCheck = arr.forEach((element) => {
    if (typeof element !== "number") {
      isNum = false }})
      
      if (isNum) {
        var num = arr[0]
        var maxCount = 0
        var counter = 1

        for (let i = 0; i < arr.length; i++) {
          current = arr[i]
          if (arr[i] === arr[i+1]) {
            counter++
            if (counter > maxCount) {
              maxCount = counter
              num = arr[i] 
            }
          } else {
            counter = 1
          }
          
        }
        var numToS = num.toString() + " "
        console.log(numToS.repeat(maxCount));

      } else {
        console.log(`Моля, въведете числа`);
      }



    } else {
      console.log(`Моля, въведете масив с числа`);
    }