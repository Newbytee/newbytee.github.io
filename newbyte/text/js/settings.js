var currentSheet = document.getElementById("pageTheme");

function switchTheme(theme) {

    var sheetSwitchButton = document.getElementById("themeSwitchButton");

    localStorage.setItem("theme", theme);
    currentSheet.setAttribute("href", "css/" + theme + ".css");

    if (theme === "dark") {

        sheetSwitchButton.setAttribute("onclick", "switchTheme('light')");
        sheetSwitchButton.innerHTML = "Switch to light mode";


    } else {

        sheetSwitchButton.setAttribute("onclick", "switchTheme('dark')");
        sheetSwitchButton.innerHTML = "Switch to dark mode";

    }

}