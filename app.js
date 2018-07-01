// create an array of all divs in grid
let box = document.getElementById("grid").querySelectorAll("div");

// create an array of all li in navlist
let nav = document.getElementById("navlist").querySelectorAll("li");

// IIFE that creates properties and methods on each box
(function setBox(box) {
  // shuffles the nodelist
  shuffle(box);

  // loops through the nodelist to set properties and methods
  box.forEach(element => {
    element.style.position = "relative";
    element.style.transitionProperty = "all";
    element.style.transitionDuration = "200ms";
    element.style.transitionTimingFunction = "cubic-bezier(.64,-0.37,.34,.9)";
    element.style.transitionDelay = random(1000) + "ms";

    // method to transition elements onto screen
    element.on = function() {
      element.status = true; // no current usecase, for testing
      element.style.left = "0vw";
    };
    // method to transition elements off screen
    element.off = function() {
      element.status = false; // no current usecase, for testing
      element.style.left = "100vw";
    };
    // immediately invoke 'off' to initially render elements off screen
    element.off();
  });
})(box);

// invokes the passed method on each element in a nodelist
function invokeAll(nodeList, method) {
  nodeList.forEach(element => {
    element[method]();
  });
}

// shuffles an array and returns it
function shuffle(arr) {
  var x;
  var temp;
  for (let i = 0; i < arr.length; i++) {
    x = random(arr.length);
    temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
  }
  return arr;
}

// If one number is passed return random int from 0(inclusive) to that number(exclusive)
// If two numbers are passed return a random int between them (including the lower, excluding the higher)
// If an array is passed return a random element
function random(max, min) {
  if (Array.isArray(max)) {
    return max[random(max.length)];
  } else if (arguments.length > 1) {
    return Math.floor(
      Math.random() * Math.abs(max - min) + (max > min ? min : max)
    );
  } else if (arguments.length === 1) {
    return Math.floor(Math.random() * max);
  } else {
    throw "random() must be called with 1-2 numbers or an array";
  }
}

document.getElementById("about").addEventListener("click", function() {
  invokeAll(box, "off");
});
document.getElementById("contact").addEventListener("click", function() {
  invokeAll(box, "off");
});

document.getElementById("projects").addEventListener("click", function() {
  invokeAll(box, "on");
});

/////////////////////////////////////////// /////////////////////////////////////////
// ##### /// ##### ///// #### //// ##### // //// ### ///// ### /// ### ///// ##### //
//// # ///// # //////// #    # ///// # //// /// # /////// #   # // #  # //// # //////
//// # ///// ### /////// ### /////// # //// // # /////// #    # // #   # /// ### ////
//// # ///// # /////// #    # ////// # //// // # /////// #   # /// #  # //// # //////
//// # ///// ##### //// #### /////// # //// /// #### //// ### //// ### ///// ##### //
/////////////////////////////////////////// /////////////////////////////////////////
