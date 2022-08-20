var a = 14;
var b = 15;
var c = 16;

var sumAllNums = a + b + c;

var biggest = Math.max(a,b,c);
var smallest = Math.min(a,b,c);
var sumOfMaxAndMin = biggest + smallest;
var middle = sumAllNums - sumOfMaxAndMin;

console.log(biggest, middle, smallest);

