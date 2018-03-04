var loadingText = document.getElementById("loading");
var storyText = [ document.getElementById("storyText1"), document.getElementById("storyText2"), document.getElementById("storyText3") ];
var inventory = [ "Flower" ];
var currentLocation = "intro_0";
var storyTextLength = storyText.length;
var inventorySize = inventory.length;

loadingText.parentNode.removeChild(loadingText);

function readTxtFile(path, field) {

    if (field === undefined) {

        field = 0;

    }

    $.ajax({

        url : "txt/" + path + ".html",
        dataType: "text",
        success : function(data) {

            $(storyText[field]).html(data);

        }

    });

}

function changeLocation(locationName) {

    currentLocation = locationName;

    readTxtFile(currentLocation, 0);

}

function displayInventory() {

    inventorySize = inventory.length;

    for (var i = 0; i < inventorySize; i++) {



    }

}

function clearFields() {

    for (var i = 0; i < storyTextLength; i++) {

        $(storyText[i].html(" "));

    }

}

readTxtFile(currentLocation, 0);
//clearFields();
//readTxtFile("txt/bleh", 0);