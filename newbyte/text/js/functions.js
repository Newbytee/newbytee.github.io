"use strict";

let currentSheet = document.getElementById("pageTheme");
let loadingText = document.getElementById("loading");
let storyText = [ document.getElementById("storyText1"), document.getElementById("storyText2"), document.getElementById("storyText3") ];
let inventory = [];
let currentLocation;
let visitedLocations = [];
let storyTextLength = storyText.length;
let inventorySize = inventory.length;
let currentTheme;

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
    
    
    currentLocation  = contentPath + "/" + locationName + ".html";

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
    
    try {
        
        visitedLocations.push(localStorage.getItem("lastLocation"));
        
    } catch (e) {
        
        console.log(e);
        
    }
    
    localStorage.setItem("lastLocation", locationName);

    
    localStorage.setItem("currentLocation", locationName);
    localStorage.setItem("visitedLocations", JSON.stringify(visitedLocations));

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

function addToInventory(item) {

    inventory.push(item);
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
        localStorage.removeItem("lastLocation")
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

    readTxtFile('menu/settings.html', 2);

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