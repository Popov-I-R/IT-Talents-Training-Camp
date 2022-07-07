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

var memory = counterOfIntegers;

for (var i = 1; i <= memory; i++) {
    for (let j = 1; j <=counterOfIntegers; j++) {
        result += j;
        
    }
    counterOfIntegers--;
    console.log(result);
    result = "";
}



