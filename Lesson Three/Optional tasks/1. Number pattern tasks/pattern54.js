var n=12345;
var result = "";
var last = n % 10;
var fourth = n % 100;
var middle =n % 1000;
var second =n % 10000;
var first =n % 100000;

var counterOfIntegers = 0;

for (var i = n; i >=1; i--) {
    if (i === first || i === second || i === middle || i === fourth || i === last) {
        counterOfIntegers = counterOfIntegers + 1;
    }
    
}

for (var i = 1; i <= counterOfIntegers; i++) {
    for (var j = i; j <= counterOfIntegers; j++) {
        result += j;
    }
    console.log(result)
    result = "";
    
}