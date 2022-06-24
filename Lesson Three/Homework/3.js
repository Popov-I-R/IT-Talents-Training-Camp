var result = "";

for (var i = -10; i <= 10; i++) {
    if (i % 2 === 1 || i % 2 === -1) {
        result += i + " ";
    }
 }

 console.log(result);