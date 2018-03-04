var loadingText = document.getElementById("loading");
var storyText = [ document.getElementById("storyText1"), document.getElementById("storyText2"), document.getElementById("storyText3") ];
var inventory = [ "Flower", "Box" ];
var currentLocation = "intro_0";
var storyTextLength = storyText.length;
var inventorySize = inventory.length;

loadingText.parentNode.removeChild(loadingText);

function readTxtFile(path, field) {

    if (field === undefined) {

        field = 0;

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

    currentLocation  = "txt/" + locationName + ".html";

    readTxtFile(currentLocation, 0);

}

function displayInventory() {

    clearFields(1);

    var tmpInventory = "Your inventory contains:<br>";

    inventorySize = inventory.length;

    for (var i = 0; i < inventorySize; i++) {

        tmpInventory += inventory[i] + "<br>";

    }

    $(storyText[1]).html(tmpInventory);

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
//clearFields();
//readTxtFile("txt/bleh", 0);