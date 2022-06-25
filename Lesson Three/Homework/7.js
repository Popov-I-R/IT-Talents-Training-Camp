var n = 5;
var result  = '';

for(var i = 1; i <=n; i += 1) {
  if (i === n) {
    result +=  i*3
  }
    else {
      result +=  i*3 + ",";
    }
}
console.log(result);