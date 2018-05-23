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



    /*if (vibrate === true) {
        vibrate = false;
        intervalVar
    } else {
        vibrate = true;
        let intervalVar = setInterval(function() {
            window.navigator.vibrate(10);

        }, 10);
    }*/

    //window.navigator.vibrate([200, 100, 200]);

});