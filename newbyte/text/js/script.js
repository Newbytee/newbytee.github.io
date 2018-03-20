if (!(storageAvailable('localStorage'))) {

    alert("Warning: The local storage API seems to be unavailable on your current device/browser, saving may not be available.");

}

if (localStorage.getItem("currentLocation") === null) {

    console.log("Storage registered");

    localStorage.setItem("currentLocation", "intro_0");
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("theme", "light");

} else if (localStorage.getItem("currentLocation") !== null) {

    console.log("Storage found");

}

currentLocation = localStorage.getItem("currentLocation");
inventory = JSON.parse(localStorage.getItem("inventory"));

console.log(currentLocation);

loadingText.parentNode.removeChild(loadingText);

//switchTheme(localStorage.getItem("theme"));
changeLocation(currentLocation);