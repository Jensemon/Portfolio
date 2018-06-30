// create an array of all divs in grid
let box = document.getElementById("grid").querySelectorAll("div");
// create an array of all li in navlist
let nav = document.getElementById("navlist").querySelectorAll("li");

var boxOnOffStyle = document.createElement("style");
boxOnOffStyle.innerHTML = setBoxTransitions(box);
document.body.appendChild(boxOnOffStyle);

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

// takes an array of html elements that all needs an id that includes('Off')
// loops through each element and appends an empty string with properties and
// values for each elements 'Off' and 'On' state
// returns the css string
function setBoxTransitions(arr) {
  var str = "";
  var direction;
  for (let i = 0; i < arr.length; i++) {
    arr[i].id;
    //direction = randomDirection();
    direction = randomProperty("top", "bottom");
    str +=
      "#" +
      arr[i].id +
      "{" +
      "position: relative;" +
      (direction + ": 100vw;") +
      "transition: all 1000ms cubic-bezier(.64,-0.37,.34,.9);" +
      ("transition-delay: " + random(200) + "ms;") +
      "}";

    str +=
      "#" +
      arr[i].id.replace("Off", "On") +
      "{" +
      "position: relative;" +
      (direction + ": 0vw;") +
      "transition: all 1000ms cubic-bezier(.64,-0.37,.34,.9);" +
      ("transition-delay: " + random(200) + "ms;") +
      "}";
  }
  return str;
}

// returns int in range smallest arg(inclusive) to largest arg(exclusive). 0 - largest if min value missing.
function random(max, min) {
  if (arguments.length > 1) {
    return Math.floor(
      Math.random() * Math.abs(max - min) + (max > min ? min : max)
    );
  } else {
    return Math.floor(Math.random() * max);
  }
}

// returns a random css direction
function randomDirection() {
  let arr = ["left", "right", "top", "bottom"];
  return arr[random(4)];
}

// returns a random property that was passed
function randomProperty() {
  return arguments[random(arguments.length)];
}

//test fluff

//setValue(box[1], "color", "red");
doAll(box, setValue, "color", "magenta");
doAll(nav, setValue, "color", "red");

colorTheme = {};

document.getElementById("projects").addEventListener("click", function() {
  for (let i = 0; i < box.length; i++) {
    onOff(box[i]);
  }
});
