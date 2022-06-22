var number = 1350;

var firstNum = Math.floor(number / 1000);
var remainder1 = number % 1000;

var secondNum = Math.floor(remainder1 / 100); 
var remainder2 = remainder1 % 100; 

var thirdNum = Math.floor(remainder2 / 10);
var remainder3 = remainder2 % 10;

var fourNum = Math.floor(remainder3 / 1);


if (firstNum === 0 || secondNum === 0 || thirdNum === 0 || fourNum === 0) {
    console.log('I found zero!!!');
};