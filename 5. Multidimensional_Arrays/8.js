var matrix = [
    [false,false,false,false],
    [true,true,true,false],
    [true,true,false,false],
    [true,true,false,false],
    ]


    var booleanIsTrue = false 

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (i < j && matrix[i][j] == 1) {
            booleanIsTrue = true
        }
        
    }
    
}
console.log(booleanIsTrue ? "Съдържа се 'true' " : "Не се съдържа 'true'");
