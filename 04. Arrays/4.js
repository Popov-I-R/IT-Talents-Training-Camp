var arr = [6, 27, -1, 5, 7, 7, 5, -1, 27, 6];
var reversedArr = [];
var isMirrorArray = true;

if (Array.isArray(arr)) {
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }

  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversedArr[i]) {
      isMirrorArray = false;
    } else {
    }
  }

  if (isMirrorArray) {
    console.log("Масива е огледален");
  } else {
    console.log("Масива не е огледален");
  }
} else {
  console.log(`Подадените данни не са масив`);
}


// var arr = [4,2,2,4,5];
// var reversedArr = []

// var ogledalen = false 

// if (Array.isArray(arr)) {
//   var isNum = true 
//   var checkNum = arr.forEach( (element) => {if (typeof element !== "number") {
//     isNum = false 
    
//   }})

//   if (isNum) {
//     for(let i = 0;i < arr.length;i++) {
//       reversedArr.unshift(arr[i])
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === reversedArr[i]) {
//         ogledalen = true 
//       } else {
//         false
//         break
//       }
      
//     }
    
//     console.log(ogledalen ? "da" : "ne");
//   } else {
    
//   }


// }



