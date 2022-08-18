
let squareStyleTop = 10;
let squareStyleLeft = 10;

let browserWidth = window.innerWidth
let browserHeight = window.innerHeight


function goDown (){
    console.log(browserHeight - squareStyleTop);
    if (squareStyleTop < (browserHeight - 192)) {
        squareStyleTop += 10
        document.getElementById("monkey").style.top = squareStyleTop + "px";
        console.log("squareStylTop is ", squareStyleTop)
    } else {
        squareStyleTop -=10
        console.log(`error`);
    }
}


function goUp (){
    if (squareStyleTop > 10) {
        squareStyleTop -= 10
        document.getElementById("monkey").style.top = squareStyleTop + "px";
        console.log("squareStylTop is ", squareStyleTop)
    } else {
        console.log(`error`);
        
    }
}

function goLeft(){
    if (squareStyleLeft > 10) {
        squareStyleLeft -= 10;
        document.getElementById("monkey").style.left = squareStyleLeft + "px";
        console.log("squareStylLeft is ", squareStyleLeft)
    } else {
        console.log(`error`);
    }
}

function goRight(){
    if (squareStyleLeft < (browserWidth-324)) {
        squareStyleLeft += 10;
        document.getElementById("monkey").style.left = squareStyleLeft + "px";
        console.log("squareStylRight is ", squareStyleLeft)
    } else {
        console.log(`error`);
    }
}

window.addEventListener("keydown", (event) => {

    switch(event.code) {
      case "KeyS":
      case "ArrowDown":
        goDown();
        break;

      case "KeyW":
      case "ArrowUp":
        goUp();
        break;

      case "KeyA":
      case "ArrowLeft":
        goLeft()
        break;

      case "KeyD":
      case "ArrowRight":
        goRight();
        break;
    }
  

  
    
  });


