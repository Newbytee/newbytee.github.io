var loadingText = document.getElementById("loading");
var storyText = document.getElementById("storyText");
var fileReader;
var tmpTxt;
var inventory = [ "Flower" ];

loadingText.parentNode.removeChild(loadingText);

function readTxtFile(path) {

    $.ajax({
        url : path + ".txt",
        dataType: "text",
        success : function (data) {
            $(storyText).html(data);
        }
    });

}

readTxtFile("txt/bleh");