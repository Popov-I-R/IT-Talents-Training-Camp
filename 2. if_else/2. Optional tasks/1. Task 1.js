var side1 = 10.5;
var side2 = 8.5;
var side3 = 5;

var perimeter = side1 + side2 + side3;
var semiP = perimeter / 2;

//calculate the area
var areaValue = Math.sqrt(
  semiP * (semiP - side1) * (semiP - side2) * (semiP - side3)
);

console.log(`The area of the triangle is: ${areaValue}`);
console.log(`The perimeter of the triangle is: ${perimeter}`);

