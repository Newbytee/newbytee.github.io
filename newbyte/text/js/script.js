"use strict";

const currentSheet = document.getElementById("pageTheme");
const loadingText = document.getElementById("loading");
const storyText = [ document.getElementById("storyText1"), document.getElementById("storyText2"), document.getElementById("storyText3") ];
let inventory = [];
let currentLocation;
let visitedLocations = [];
let storyTextLength = storyText.length;
let inventorySize = inventory.length;
let firstLoad = true;
let currentTheme;

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
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

function readTxtFile(path, field) {
    if (field === undefined) {
        field = 1;
    }

    $.ajax({
        url : path,
        dataType: "text",
        success : function(data) {
            $(storyText[field]).html(data);
        }
    });
}

function changeLocation(locationName) {
    clearFields(2);
    currentLocation  = "txt/" + contentPath + "/" + locationName + ".html";
    let visit;

    if (visitedLocations.indexOf(locationName) === -1) {
        visit = 0;
        console.log("Location not visited");
    } else {
        visit = 1;
        console.log("Location before visited");
    }

    $.ajax({
        url : currentLocation,
        dataType: "text",
        success : function(data) {
            let parsedData = data.split("@");
            $(storyText[0]).html(parsedData[visit]);
        }
    });

    if (visitedLocations.indexOf(localStorage.getItem("lastLocation")) === -1) {
        visitedLocations.push(localStorage.getItem("lastLocation"));
    }

    localStorage.setItem("lastLocation", locationName);

    if (firstLoad === true) {
        firstLoad = false;
    } else {
        localStorage.setItem("currentLocation", locationName);
        localStorage.setItem("visitedLocations", JSON.stringify(visitedLocations));
    }
}

function changeLocationMore(locationName, itemName, removeItem) {
    if (removeItem) {
        addToInventory(itemName, true);
    } else {
        addToInventory(itemName, false);
    }

    changeLocation(locationName);
}

function displayInventory() {
    inventorySize = inventory.length;

    clearFields(2);

    if (inventorySize === 0) {
        $(storyText[2]).html("Your inventory is empty");
        return;
    }

    let tmpInventory = "Your inventory contains:<br>";

    for (let i = 0; i < inventorySize; i++) {
        tmpInventory += inventory[i] + "<br>";
    }

    $(storyText[2]).html(tmpInventory);
}

function addToInventory(item, removeItem) {
    if (removeItem) {
        inventory.splice(inventory.indexOf(item), 1);
    } else {
        inventory.push(item);
    }

    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function clearFields(n) {
    if (isNaN(n)) {
        for (let i = 0; i < storyTextLength; i++) {
            $(storyText[i]).html(" ");
        }
    } else {
        $(storyText[n]).html(" ");
    }
}

function resetProgress() {
    if (confirm("Are you sure? This will reset all your progress")) {
        localStorage.removeItem("currentLocation");
        localStorage.removeItem("inventory");
        localStorage.removeItem("visitedLocations");
        localStorage.removeItem("lastLocation");
        location.reload();
    }
}

function switchTheme(theme) {
    let sheetSwitchButton = document.getElementById("themeSwitchButton");

    try {
        if (theme === "dark") {
            sheetSwitchButton.setAttribute("onclick", "switchTheme('light')");
            sheetSwitchButton.innerHTML = "Switch to light mode";
        } else {
            sheetSwitchButton.setAttribute("onclick", "switchTheme('dark')");
            sheetSwitchButton.innerHTML = "Switch to dark mode";
        }
    } catch(e) {
        console.log(e);
    } finally {
        localStorage.setItem("currentTheme", theme);
        currentSheet.setAttribute("href", "css/" + theme + ".css");
    }
}

function displaySettings() {
    if (currentTheme = localStorage.getItem("currentTheme") === "dark") {
        readTxtFile('menu/settingsDark.html', 2);
    } else {
        readTxtFile('menu/settings.html', 2);
    }

    let sheetSwitchButton = document.getElementById("themeSwitchButton");

    if (currentTheme = localStorage.getItem("currentTheme") === "dark") {
        console.log("hi");
        sheetSwitchButton.setAttribute("onclick", "switchTheme('light')");
        sheetSwitchButton.innerHTML = "Switch to light mode";
    } else {
        sheetSwitchButton.setAttribute("onclick", "switchTheme('dark')");
        sheetSwitchButton.innerHTML = "Switch to dark mode";
    }
}

if (!(storageAvailable('localStorage'))) {
    alert("Warning: The local storage API seems to be unavailable on your current device/browser, saving may not be available.");
}

if (localStorage.getItem("currentLocation") === null) {
    console.log("Storage registered");

    localStorage.setItem("currentLocation", "intro_0");
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("visitedLocations", JSON.stringify(visitedLocations));
    localStorage.setItem("currentTheme", "light");
} else if (localStorage.getItem("currentLocation") !== null) {
    console.log("Storage found");
}

currentLocation = localStorage.getItem("currentLocation");
inventory = JSON.parse(localStorage.getItem("inventory"));
visitedLocations = JSON.parse(localStorage.getItem("visitedLocations"));

console.log(currentLocation);

loadingText.parentNode.removeChild(loadingText);

switchTheme(localStorage.getItem("currentTheme"));
changeLocation(currentLocation);