let str1 = "Abcd"
let str2 = "Efgh"

let isStr = true
let result = ""

if (isStr && str1.length > 0 && str1.length < 40
    && str2.length > 0 && str2.length <40) {
        if (str1.indexOf(" ",0) === -1
        && str2.indexOf(" ",0) === -1) {
            result += str1.toUpperCase() + " " + str1.toLowerCase() + " " 
                + str2.toUpperCase() + " " + str2.toLowerCase()

        console.log(result);
        } else {
            console.log(`Моля, въведете само букви, без празни места. `);
        }
        

} else {

    console.log(`Invalid data`);
    

}