var n = 5;
var result = ""

for (var i = 1; i <=5; i++) {
    for (var j = i; j >=1; j--) {
        result += j
    }

    for (var k = 2; k <=n+1-i; k++) {
        result += k
        
    }

    console.log(result)
    result = ""
}