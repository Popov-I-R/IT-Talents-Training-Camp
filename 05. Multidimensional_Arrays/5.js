
var matrix = [
[1,2,3],
[4,5,6],
[7,8,9],
[10,11,12],
]

var sum = 0
var maxSum = 0
var red = 0

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= matrix[i].length; j++) {
        sum = sum + matrix[i][j]
        if (sum>maxSum) {
            maxSum = sum
            red = i
        } 
    }
    sum = 0
}

console.log(`Максималната сума е ${maxSum} и се намира на ред номер ${red+1}, или ако започваме от 0, ред номер ${red}`);