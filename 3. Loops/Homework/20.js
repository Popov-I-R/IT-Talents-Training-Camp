var string = "";
for (var i = 0; i <= 10; i++) {
    for (let j = i; j <= 9; j++) {
        string += j;
    }

    for (let x = 0; x <= i -1; x++) {
        string += x;
    }
    console.log(string);
    string = "";
    
}