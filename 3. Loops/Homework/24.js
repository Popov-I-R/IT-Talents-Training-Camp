var n = 101;
var nRev =n;
var digit = 0;
var result = 0;

while( nRev ) {
    digit = nRev % 10;
    result = (result * 10) + digit;
    nRev = Math.floor(nRev/10);
    // Обръща числата
}

do {
    if (n === result) {
        console.log("Числото е палиндром.");
        break;
    } else {
        console.log("Числото не е палиндром.");
        break;
    }
} while ( n >= 10 && n <= 30000)