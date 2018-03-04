var currentSheet = document.getElementById("pageTheme");

function switchTheme(theme) {

    var sheetSwitchButton = document.getElementById("themeSwitchButton");

    currentSheet.setAttribute("href", "css/" + theme + ".css");

    if (theme === "dark") {

        sheetSwitchButton.setAttribute("onclick", "switchTheme('light')");
        sheetSwitchButton.innerHTML = "Switch to light theme";

    } else {

        sheetSwitchButton.setAttribute("onclick", "switchTheme('dark')");
        sheetSwitchButton.innerHTML = "Switch to dark theme";

    }

}