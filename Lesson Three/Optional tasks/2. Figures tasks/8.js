var n = 9;
var result = "";

//външен цикъл
for (var i = 1; i <=n; i++) {
    // If за горе, среда и долу
    if (i === 1 || i === 5 || i === n) {

        //for за горен, среден и долен ред
        for (var UpMidDown = 1; UpMidDown <= n; UpMidDown++) {

            // if за символите в реда
            if (UpMidDown === 1|| UpMidDown === 5 || UpMidDown ===n) {
                result += "+"
            } else {
                result += "="
            }
        
        }
    // за всички останали редове
    } else { 
        for (var allOthers = 1; allOthers <= n; allOthers++) {
            // if за символите в реда
            if (allOthers === 1|| allOthers === 5 || allOthers ===n) {
                result += "|"
            } else {
                result += " "
            }
        }
    }

    console.log(result);
    result= "";
    
}
