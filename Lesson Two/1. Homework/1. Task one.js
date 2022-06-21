var a = 13.2;
var b = 29.5;
var c = 22.1;

if (a < c && b > c || a > c && b < c) {
  console.log(`Numbers: a = ${a}, b = ${b}, c = ${c}`);
  console.log(`The number 'c'(${c}) is between 'a'(${a}) and 'b'(${b})`);
} /* else {
    console.log(`Numbers: a = ${a}, b = ${b}, c = ${c}`);
    console.log(`C is not between A and B`)
}
*/
