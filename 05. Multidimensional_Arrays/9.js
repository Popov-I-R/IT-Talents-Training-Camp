var maxSum = 0
var biggestI = 0
var biggestJ = 0


var matrix = [
    [2,3,4,5,6],
    [3,4,5,6,7],
    [3,4,2,8,6],
    [2,7,5,9,6]
]

for (let i = 0; i < matrix.length-1; i++) {
    for (let j = 0; j < matrix[i].length-1 ; j++) {
        var sum = matrix[i][j] + matrix[i][j+1] + matrix[i+1][j] + matrix[i+1][j+1]
        if (sum > maxSum || i === 0 && j === 0) {
            maxSum = sum
            biggestI = i
            biggestJ = j

            
        }
    }
    
}
console.log(matrix[biggestI][biggestJ] + " " + matrix[biggestI][biggestJ+1]);
console.log(matrix[biggestI+1][biggestJ] + " " + matrix[biggestI+1][biggestJ+1]);