var arr = [2,1,2,1,2]
var nazuben = true


for (let i = 1; i < arr.length-1; i++) {
   if (!((arr[i] > arr[i-1] && arr[i] > arr[i+1])  
   || (arr[i] < arr[i-1] && arr[i] < arr[i+1])  )   ) {
      nazuben = false
      break
   }
   
}

console.log(nazuben ? "da" : "ne");

