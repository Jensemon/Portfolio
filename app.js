// nodelist creation
let box = document.getElementById("grid").querySelectorAll("div");
let nav = document.getElementById("navbar").querySelectorAll("div");

var boxBg = document.getElementById("gridBg");
boxBg.style.width = document.getElementById("grid").offsetWidth + "px";
boxBg.style.height = document.getElementById("grid").offsetHeight + "px";
boxBg.style.top = document.getElementById("navbar").offsetHeight + "px";

// IIFE that creates properties and methods on each box
(function setBox(box) {
  // set positions for animation start (invw), onscreen (onvw), animation end (outvw)
  let invw = "-100vw";
  let onvw = "0vw";
  let outvw = "100vw";
  let duration = "300ms";
  // create and shuffle an organized array for transitionDelay
  let delay = [];
  for (let i = 0; i < box.length; i++) {
    delay.push(60 * i);
  }
  shuffle(delay);

  // shuffles the nodelist
  //shuffle(box);

  // loops through the nodelist to set properties and methods
  box.forEach(element => {
    element.style.position = "relative";
    element.style.left = invw;
    element.style.transitionProperty = "left";
    element.style.transitionDuration = duration;
    // element.style.transitionTimingFunction = "cubic-bezier(.64,-0.37,.34,.9)";
    element.style.transitionTimingFunction =
      "cubic-bezier(0.68, -0.55, 0.265, 1.55)";

    element.style.transitionDelay = delay.shift() + "ms";

    // method to transition elements onto screen
    element.on = function() {
      element.style.left = onvw;
      boxBg.style.opacity = "0.2";
    };
    // method to transition elements off screen
    element.off = function() {
      if (element.style.left === onvw) {
        element.style.left = outvw;
        boxBg.style.opacity = "0";
      }
    };

    element.addEventListener("transitionend", function() {
      if (element.style.left === outvw) {
        setTimeout(function() {
          element.style.transitionDuration = "0ms";
          setTimeout(function() {
            element.style.left = invw;
            setTimeout(function() {
              element.style.transitionDuration = duration;
            }, 20);
          }, 20);
        }, 20);
      }
    });
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
