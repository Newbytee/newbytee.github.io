"use strict";

let vibrate = false;
let intervalVar;

document.getElementById("toggleButton").addEventListener("click", function() {
    if (vibrate) {
        intervalVar = setInterval(function() {
            window.navigator.vibrate(100);
            console.log("done");
        }, 100);
        vibrate = false;
    } else {
        clearInterval(intervalVar);
        vibrate = true;
    }
});