// create an array of all divs in grid
let box = document.getElementById("grid").querySelectorAll("div");
// create an array of all li in navlist
let nav = document.getElementById("navlist").querySelectorAll("li");

// takes an array of elements and sends each element to the passed function
function doAll(siblingArray, func, property, value) {
  if (property && value) {
    for (let i = 0; i < siblingArray.length; i++) {
      func(siblingArray[i], property, value);
    }
  } else {
    throw "No property or value passed";
  }
}

// sets 'value' of desired 'property' on passed element
function setValue(element, property, value) {
  element.style[property] = value;
}

// looks for "On" and "Off" in an elements id, replace with the other if it exists.
function onOff(element) {
  if (element.id.includes("Off")) {
    element.id = element.id.replace("Off", "On");
  } else if (element.id.includes("On")) {
    element.id = element.id.replace("On", "Off");
  } else throw 'Id does not contain "On" or "Off"';
}

//test fluff

//setValue(box[1], "color", "red");
doAll(box, setValue, "color", "magenta");
doAll(nav, setValue, "color", "red");

colorTheme = {};
/*
  document
    .getElementById("box1")
    .addEventListener("click", doAll.bind(this, box, setValue, "color", "white"));

  document
    .getElementById("box2")
    .addEventListener("click", doAll.bind(this, box, setValue, "color", "red"));
    document.getElementById("projects").addEventListener("click", function() {
      document.getElementById("box6").style.left = "0vw";
  });
*/

document
  .getElementById("projects")
  .addEventListener("click", onOff.bind(this, box[5]));
