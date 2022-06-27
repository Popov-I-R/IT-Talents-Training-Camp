var num = 4;
var sign = "+";

var side = "*";
var inside = "*";

if (num >= 3 && num <= 20) {
    for (var i = 1; i < num; i++) {
        side += "*";
    }

    console.log(side);

    for (var x = 1; x <= (num-2); x++) {
        for (var j = 1; j <=(num-2); j++) {
            inside +=sign;
        }

        inside += "*";
        console.log(inside);
        inside = "*";
    }
    
    console.log(side);
} 

