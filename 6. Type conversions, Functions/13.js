var firstArr = [1,2,3,4,5]
var secondArr = [5,4,3,2,1]


function isArray() {
    if (Array.isArray(firstArr) && Array.isArray(secondArr)) {
        return isNum(firstArr,secondArr)
        
    } else {
        console.log(`Моля, въведете масиви.`);
    }
}
isArray(firstArr,secondArr)

function isNum(masiv1,masiv2) {
    let isNum = true
    for (let i = 0; i < masiv1.length; i++) {
      if (typeof masiv1[i] !== "number") {
        isNum = false
        break
      }
    }

    for (let i = 0; i < masiv2.length; i++) {
        if (typeof masiv1[i] !== "number") {
            isNum = false
            break
          }
        
    }

    if (!isNum) {
        console.log(`В масивите могат да се въвеждат само цифри!`);
        
        
    } else {
        return newArray(firstArr,secondArr)
    }
}



function newArray(firstArr,secondArr) {
    var newArr = []
    for (let i = 0; i < firstArr.length; i++) {
        newArr.push(firstArr[i])
    }

    for (let i = 0; i < secondArr.length; i++) {
        newArr.push(secondArr[i])
        
    }
    console.log(newArr);
}

