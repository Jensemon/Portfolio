// set js variables to the boxes.

//create an array of all divs in grid
let box = document.getElementById("grid").querySelectorAll("div");
let nav = document.getElementById("navlist").querySelectorAll("li");

// takes an array of elements and sends each element to the passed function
function doAll(siblingArray, func, property, value) {
  if (property && value) {
    for (let i = 0; i < siblingArray.length; i++) {
      func(siblingArray[i], property, value);
    }
  } else {
    console.log("No property or value passed");
  }
}

// takes an element and property and sets its value.
function setValue(element, property, value) {
  element.style[property] = value;
}

//setValue(box[1], "color", "red");
doAll(box, setValue, "color", "blue");
doAll(nav, setValue, "color", "red");
