var matrix = [
[1,2,3,4],
[5,6,7,8],
[9,4,5,6],
[3,3,3,5],
]

var multi = 1

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       if (i > j && i !== 0 && j !== matrix[i].length-1) {
        multi = multi * matrix[i][j];
       }
        
    }
    
}

console.log(`Произведението на елементите под главния диагонал е: ${multi}`);