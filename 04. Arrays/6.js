







// var firstArray = [12, 2, 7];
// var secondArray = [12, 2, 7];

// var areEqual = true;

// // Проверка дали и 2те са масиви
// if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
//   // Проверка дали са с еднаква дължина
//   if (firstArray.length === secondArray.length) {
//     for (let i = 0; i < firstArray.length; i++) {
//       if (firstArray[i] === secondArray[i]) {
//       } else {
//         areEqual = false;
//       }
//     }
//     if (areEqual) {
//       console.log("Масивите са еднакви");
//       console.log("Масивите имат еднакъв размер");
//     } else {
//       if (firstArray.length === secondArray.length) {
//         console.log("Масивите са различни");
//         console.log("Масивите имат еднакъв размер");
//       } else {
//         console.log("Масивите са различни");
//         console.log("Масивите нямат еднакъв размер");
//       }
//     }
//   } else {
//     console.log("Масивите са различни");
//     console.log("Масивите нямат еднакъв размер");
//   }
// } else {
//   console.log("Invalid input. Only arrays are allowed.");
// }




// на лист 
// var equal = true 
// var firstArr = [12, 2, 7];
// var secondArr = [12, 2, 7,];

// if (Array.isArray(firstArr) && Array.isArray(secondArr)) {
//   var isNum = true 
//   var checkFirst = firstArr.forEach( (element) => {
//     if (typeof element !== "number") {
//       isNum = false 
//     }
//   })
//   var checkSecond = secondArr.forEach( (element) => {
//     if (typeof element !== "number") {
//       isNum = false 
//     }
//   })

//   if (isNum) {
//     for (let i = 0; i < firstArr.length; i++) {
//       if (firstArr[i] === secondArr[i]) {
//         equal = true
//       } else {
//         equal = false 
//         break
//       }
//     }
//     var firstLength = firstArr.length
//     var secondLength = secondArr.length
//     console.log(equal ?  "масивите са еднакви" : "масивите са различни");
//     console.log(firstLength === secondLength ? "Масивите имат еднакъв размер" : "Масивите имат различен размер");
//   } else {
//     console.log(`Моля, въведете цифри и в двата масива`);
//   }
// } else {
//   console.log(`Моля, въведете масиви`);
// }