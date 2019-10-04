
let boxTop = 200;
let boxLeft = 200;
let box = document.getElementById("box");



document.addEventListener('keydown', logKey);

function logKey(event) {
    if (event.keyCode == 40) {
        boxTop += 10
        box.style.top = boxTop + "px"
    }  
    else if (event.keyCode == 38) {
        boxTop -= 10
        box.style.top = boxTop + "px"
    }
    else if (event.keyCode == 39) {
        boxLeft += 10
        box.style.left = boxLeft + "px"
    }
  
    else if (event.keyCode == 37) {
        boxLeft -= 10
        box.style.left = boxLeft + "px"
    }
    
console.log(event)
console.log(boxTop)
  
}


