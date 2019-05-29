var string1 = "bleup";
var string2;
var string2Reversed;
var inputField = document.getElementById("inputField");

function reverse() {
    
    string2 = inputField.value;
    string2Reversed = string2;

    var tmpStringLength = string2.length;
    var j;

    for (var i = 0; i < tmpStringLength; i++) {

        j = (tmpStringLength - i - 1);

        alert(string2[j]);
        string2Reversed[i] = string2[j];

    }
    
    alert(string2Reversed);
    
}