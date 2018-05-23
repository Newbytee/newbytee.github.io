"use strict";

const switchButton = document.getElementById("toggleButton");
let vibrate = false;

switchButton.addEventListener("click", function() {
    if (vibrate === true) {
        vibrate = false;
    } else {
        vibrate = true;
        setInterval(function() {
            window.navigator.vibrate(10);
            console.log("done");
        }, 10);
    }

    //window.navigator.vibrate([200, 100, 200]);

});