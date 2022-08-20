var n = 44;
var result = " ";

var isValid = false;

if (n>0 && Math.floor(n) === +n) {
    isValid = true
}

if (isValid) {
    if(n >= 10 && n <= 200) {
        for (var i = n; i >=10; i--) {
            if (i%7 === 0) {
                result += i + ",";
            } else {
                continue;
            }   
        }
        console.log(result);    
    }
}

