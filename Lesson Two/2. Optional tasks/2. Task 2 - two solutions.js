var number = 3665;

var firstNum = Math.floor(number / 1000);
var remainder1 = number % 1000; 

var secondNum = Math.floor(remainder1 / 100);
var remainder2 = remainder1 % 100;

var thirdNum = Math.floor(remainder2 / 10);
var remainder3 = remainder2 % 10;

var fourthNum = Math.floor(remainder3 / 1);


console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(fourthNum);



// ------------OLD SOLUTION-----------

// var number = 3476;

// var thousands = 1000;
// var hundreds = 100;
// var tens = 10;
// var ones = 1;

// var thousandsResult = number / thousands;
// console.log(Math.floor(thousandsResult));

// var hundredsResult = (number - Math.floor(thousandsResult) * thousands);
// var hundredsFinal = hundredsResult / hundreds;
// console.log(Math.floor(hundredsFinal));

// var tensResult = (number - Math.floor(thousandsResult) * thousands) - (Math.floor(hundredsFinal) * hundreds);
// var tensFinal = tensResult / tens;
// console.log(Math.floor(tensFinal));

// var onesResult = tensResult - (Math.floor(tensFinal) * tens);
// console.log(onesResult);



