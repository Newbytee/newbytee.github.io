"use strict";

const slideout = new Slideout({
    "panel": document.getElementById("panel"),
    "menu": document.getElementById("menu"),
    "padding": 256,
    "tolerance": 0
});

const switches = document.getElementsByClassName("switchButtons");
let vibrate = false;
let vibrationType = 0;
let intervalVar;

for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("click", function() {
        vibrationType = i;
        slideout.close();
    });
}

document.getElementById("toggleButton").addEventListener("click", function() {
    if (vibrate) {
        switch (vibrationType) {
            case 0:
                intervalVar = setInterval(function() {
                    //window.navigator.vibrate([200, 100, 200]);
                    window.navigator.vibrate(500);
                }, 500);
                console.log("type 0");
                break;
            case 1:
                intervalVar = setInterval(function() {
                    window.navigator.vibrate([200, 100, 200]);
                }, 500);
                console.log("type 1");
                break;
            case 2:
                intervalVar = setInterval(function() {
                    window.navigator.vibrate([100, 100]);
                }, 200);
                console.log("type 2");
                break;
            case 3:
                intervalVar = setInterval(function() {
                    window.navigator.vibrate([100, 100, 400]);
                }, 600);
                console.log("type 3");
                break;
            case 4:
                intervalVar = setInterval(function() {
                    window.navigator.vibrate([100, 50, 300, 50]);
                }, 500);
                console.log("type 4");
                break;
        }
        vibrate = false;
    } else {
        clearInterval(intervalVar);
        vibrate = true;
    }
});

//alert("test 3");