for(var i = 100; i<= 999; i++) {
    var num1 = Math.floor(i/100) % 10;
    var num2 = Math.floor(i/10) % 10;
    var num3 = i % 10;

    if (num1 === num2 || num2 === num3 || num3 === num1) {
        continue;
    } else {
        if (i>0 && Math.floor(i) === +i) {
            console.log(i)
        }
    }
}