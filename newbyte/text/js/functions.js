"use strict";

var currentSheet = document.getElementById("pageTheme");
var loadingText = document.getElementById("loading");
var storyText = [ document.getElementById("storyText1"), document.getElementById("storyText2"), document.getElementById("storyText3") ];
var inventory = [];
var currentLocation;
var visitedLocations = [];
var storyTextLength = storyText.length;
var inventorySize = inventory.length;
var currentTheme;

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
    visitedLocations.push(locationName);
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

function addToInventory(item) {

    inventory.push(item);
    localStorage.setItem("inventory", JSON.stringify(inventory));

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

function resetProgress() {

    if (confirm("Are you sure? This will reset all your progress")) {

        localStorage.removeItem("currentLocation");
        localStorage.removeItem("inventory");
        localStorage.removeItem("visitedLocations");
        location.reload();

    }

}

function switchTheme(theme) {

    var sheetSwitchButton = document.getElementById("themeSwitchButton");

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

    readTxtFile('menu/settings.html', 2);

    var sheetSwitchButton = document.getElementById("themeSwitchButton");

    if (currentTheme = localStorage.getItem("currentTheme") === "dark") {

        sheetSwitchButton.setAttribute("onclick", "switchTheme('light')");
        sheetSwitchButton.innerHTML = "Switch to light mode";


    } else {

        sheetSwitchButton.setAttribute("onclick", "switchTheme('dark')");
        sheetSwitchButton.innerHTML = "Switch to dark mode";

    }

}