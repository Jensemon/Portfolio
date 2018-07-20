// we remove the cursor in css and create a new element that will track our mouse position instead
const cursor = document.getElementById('cursor');

// these values control the size of the cursor and its border
const radius = 50;
const borderThickness = 2;

// precalculate the total offset so we don't have to do every 'mousemove'
const offset = radius + borderThickness;

// set the styling of the cursor to depend on our declared variables
cursor.style.height = radius * 2 + "px";
cursor.style.width = radius * 2 + "px";
cursor.style.border = "solid white " + borderThickness + "px";

// move the background image one radius left and top of screen
// it's possible to skip this if you refactor the rest of the code to account for when the cursor is near the left or top of screen
document.body.style.backgroundPosition = "-" + radius + "px -" + radius + "px";

// an object with a method "update()" that sets the x and y coordinates to the clients mouse position
// some will argue to use let instead of const here but we don't want to be able to reassign pos to point to another object
// mutating the object however is perfectly valid with the keyword const, and should be preffered over let since we don't intend to reassign pos to a new object
const pos = {
  x: 0,
  y: 0,
  update: function () {
    this.x = event.clientX;
    this.y = event.clientY;
  }
}

// adds an event listener to the document that listens for mouse movement
document.addEventListener('mousemove', function () {
  // update pos.x and pos.y
  pos.update();

  // move the cursor element to where the mouse is
  cursor.style.left = (pos.x - offset) + "px";
  cursor.style.top = (pos.y - offset) + "px";

  // move the background image for the cursor pos.x to the left and pos.y upwards
  // the origin for the cursor background is the top left corner of the cursor element
  // therefore we need to move the background origin from the top left corner of the element to the top left corner of the screen
  cursor.style.backgroundPosition = "-" + pos.x + "px -" + pos.y + "px";
});