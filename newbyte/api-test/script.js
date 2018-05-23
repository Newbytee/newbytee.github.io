"use strict";

const switchButton = document.getElementById("toggleButton");

switchButton.addEventListener("click", function() {
    window.navigator.vibrate([200, 100, 200]);
    console.log("done");
});