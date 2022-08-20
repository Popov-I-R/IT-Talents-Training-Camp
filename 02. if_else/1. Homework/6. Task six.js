var a1 = "first";
var a2 = "second";
var a3 = "third"

var temporary = a1;

a1 = a2;
a2 = a3;
a3 = temporary;

console.log(`${a1},${a2},${a3}`);



