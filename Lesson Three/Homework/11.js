let num = 5;
let result = "";
let star = '*'
 
for (var i = 1; i <= num; i++){
    var spacing = "";
    for (var x = i+1; x <= num; x++){
        spacing += ' ';
    }
    console.log(spacing + star);
    star += '**';
}