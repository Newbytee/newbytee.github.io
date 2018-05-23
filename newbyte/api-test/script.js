"use strict";

let vibrate = false;
let intervalVar;

document.getElementById("toggleButton").addEventListener("click", function() {
    if (vibrate) {
        intervalVar = setInterval(function() {
            window.navigator.vibrate(500);
            console.log("done");
        }, 500);
        vibrate = false;
    } else {
        clearInterval(intervalVar);
        vibrate = true;
    }
});