class Popup {
    constructor() {
        this.popup = document.createElement("DIV");
        this.popupText = document.createElement("P");
        this.popupCCNumberField = document.createElement("INPUT");
        this.popupCCDateField = document.createElement("INPUT");
        this.popupCCCVVField = document.createElement("INPUT");
        this.popupButton = document.createElement("BUTTON");
        this.popup.style.height = "400px";
        this.popup.style.width = "400px";
        this.popup.style.backgroundColor = "#FFF9F8";
        this.popup.style.zIndex = "100";
        this.popup.style.position = "fixed";
        this.popup.style.top = "50px";
        this.popup.style.left = "50%";
        this.popup.style.marginLeft = "-200px";
        this.popup.style.boxShadow = "1px 1px 15px 5px #333333AA";
        this.popupText.innerHTML = "Why are you visiting this website?";
        this.popupText.style.textAlign = "center";
        this.popupText.style.marginTop = "3%";
        this.popupText.style.marginBottom = "3%";
        this.popupCCNumberField.style.width = "96%";
        this.popupCCCVVField.style.width = "96%";
        this.popupCCDateField.style.width = "96%";
        this.popupButton.innerHTML = "Submit";
        this.popupButton.style.marginTop = "2.4%";
        this.popupButton.style.width = "20%";
        this.popupButton.style.marginLeft = "40%";
        this.popupButton.addEventListener("click", this.closePopUp.bind(this));
        this.popup.appendChild(this.popupText);
        this.popup.appendChild(this.popupTextArea);
        this.popup.appendChild(this.popupButton);
        document.body.appendChild(this.popup);
    }
    closePopUp() {
        if (this.popupTextArea.value.length > 0) {
            this.popup.parentElement.removeChild(this.popup);
        }
    }
}

new Popup();