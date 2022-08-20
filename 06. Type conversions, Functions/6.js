var sentence = "супер яката задача";

var result = ""

if (typeof sentence === "string") {
    var splitted = sentence.split(" ")
    for (let i = 0; i < splitted.length; i++) {
        for (let j = 0; j < splitted[i].length; j++) {
            if (j === 0) {
                var temp = splitted[i][j].toString()
                var glavni = temp.toUpperCase()
                result += glavni
    
            } else {
                result += splitted[i][j] 
            }
        }
        result += " "
    }
    console.log(result);

} else {
    console.log(`Моля, въведете думи.`);
}







