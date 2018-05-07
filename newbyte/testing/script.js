var foo = `j"i" ' 'o`;


var currentLocation;
var array = [];

if (!(storageAvailable('localStorage'))) {

    alert("Warning: The local storage API is unavailable on your current device/browser, saving may not be available.");

}

if (localStorage.getItem("currentLocation") === null) {

    array = [ "Bep", "blep", "nep" ];

    console.log("Storage registered");

    localStorage.setItem("currentLocation", "intro_0");
    localStorage.setItem("array", JSON.stringify(array));

} else if (localStorage.getItem("currentLocation") !== null) {

    console.log("Storage found");

}

var array2 = JSON.parse(localStorage.getItem("array"));
currentLocation = localStorage.getItem("currentLocation");
console.log(currentLocation);
console.log(typeof array2);
console.log(JSON.parse(localStorage.getItem("array")));
console.log(localStorage.getItem("array"));
console.log(array2[1]);
alert(currentLocation);

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
                // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}