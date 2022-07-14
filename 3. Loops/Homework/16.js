var numOne = 25;
var numTwo = 249;
var numbers = "";

if (numOne < numTwo) {
    if (numOne > 10 && numTwo < 5555) {
       for (var i = numTwo; i >= numOne; i--) {
        if (i % 50 === 0) {
            numbers += i +  " ";
        }
       } 
    }
}

console.log(numbers);