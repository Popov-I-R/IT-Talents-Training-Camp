
let n = 5

function isNum() {

    if (typeof n !== "number") {
        console.log(`Моля, въведете цифра.`);
    } else {
        return isNegative(n);
    }
    
}
isNum(n)

function isNegative() {
    if (n <=0) {
        console.log(`Моля, въведете число над 0!`);
    } else {
        return isInteger(n);
    }
}

function isInteger() {
    if (n % 1 !== 0) {
        console.log(`Моля, въведете цяло число!`);
    } else {
        factorial(n)
    }

}

function factorial() {
    let result = 1;
    for (let i = 1; i <=n; i++) {
        result = result*i 
        
    }
    console.log(result);

}


