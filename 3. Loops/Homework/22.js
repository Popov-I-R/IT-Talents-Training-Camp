var num = 1;

var countNum = 0;
var finalResult = "";

while (countNum < 10) {
	if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
		countNum++;
		if (countNum <= 10) {
            finalResult += countNum + ":" + num + ";" + " ";
		} 
	}
	num++;
}

console.log(finalResult);