// Get the square element
var square = document.getElementById("square");

// Set the initial position of the square
// square.style.left = "0px";
// square.style.top = "0px";

square.style.left = "0px";
square.style.top = "0px";

// Move the square when the arrow keys are pressed
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            square.style.left = (parseInt(square.style.left) - 10) + "px";
            break;
        case 38: // Up arrow
            square.style.top = (parseInt(square.style.top) - 10) + "px";
            break;
        case 39: // Right arrow
            square.style.left = (parseInt(square.style.left) + 10) + "px";
            break;
        case 40: // Down arrow
            square.style.top = (parseInt(square.style.top) + 10) + "px";
            break;
    }
}