var loadingText = document.getElementById("loading");
var storyText = [ document.getElementById("storyText1"), document.getElementById("storyText2"), document.getElementById("storyText3") ];
var inventory = [];
var currentLocation;
//var visitedLocations = [];
var storyTextLength = storyText.length;
var inventorySize = inventory.length;

if (!(storageAvailable('localStorage'))) {

    alert("Warning: The local storage API is unavailable on your current device/browser, saving may not be available.");

}

if (localStorage.getItem("currentLocation") === null) {

    console.log("Storage registered");

    localStorage.setItem("currentLocation", "intro_0");

} else if (localStorage.getItem("currentLocation") !== null) {

    console.log("Storage found");

}

currentLocation = localStorage.getItem("currentLocation");

console.log(currentLocation);

loadingText.parentNode.removeChild(loadingText);

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

    localStorage.setItem("currentLocation", locationName);
    currentLocation  = "txt/" + locationName + ".html";

    readTxtFile(currentLocation, 0);

}

function displayInventory() {

    inventorySize = inventory.length;

    clearFields(2);

    if (inventorySize === 0) {

        $(storyText[2]).html("Your inventory is empty");

        return;

    }

    var tmpInventory = "Your inventory contains:<br>";

    for (var i = 0; i < inventorySize; i++) {

        tmpInventory += inventory[i] + "<br>";

    }

    $(storyText[2]).html(tmpInventory);

}

function clearFields(n) {

    if (isNaN(n)) {

        for (var i = 0; i < storyTextLength; i++) {

            $(storyText[i]).html(" ");

        }

    } else {

        $(storyText[n]).html(" ");

    }

}

changeLocation(currentLocation);