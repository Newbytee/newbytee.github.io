var currentLocation;

if (!(storageAvailable('localStorage'))) {

    alert("Warning: The local storage API is unavailable on your current device/browser, saving may not be available.");

}

if (localStorage.getItem("currentLocation") === undefined) {

    console.log("Storage registered");

    localStorage.setItem("currentLocation", "intro_0");

} else if (localStorage.getItem("currentLocation") !== undefined) {

    console.log("Storage found");

}

currentLocation = localStorage.getItem("currentLocation");
console.log(currentLocation);

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