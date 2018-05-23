"use strict";

const switchButton = document.getElementById("toggleButton");
let vibrate = false;
let intervalVar;

switchButton.addEventListener("click", function() {
    if (vibrate) {
        intervalVar = setInterval(function() {
            window.navigator.vibrate(10);
            console.log("done");
        }, 10);
        vibrate = false;
    } else {
        clearInterval(intervalVar);
        vibrate = true;
    }
});