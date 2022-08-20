let n = 10

function isNum () {
    if (typeof n !== "number") {
        console.log(`Моля, въведете число!`);
    } else {
        countToN(n)
    }
}
isNum(n)

function countToN() {
    let arr = [];
    for (let i = 1; i <=n; i++) {
        arr.push(i)
        
    }
    console.log(arr);

}

