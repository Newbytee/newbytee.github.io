"use strict";

let vibrate = false;
let intervalVar;

document.getElementById("toggleButton").addEventListener("click", function() {
    if (vibrate) {
        intervalVar = setInterval(function() {
            //window.navigator.vibrate([200, 100, 200]);
            window.navigator.vibrate(500);
        }, 500);
        vibrate = false;
    } else {
        clearInterval(intervalVar);
        vibrate = true;
    }
});

alert("test 2");