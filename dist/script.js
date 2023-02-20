"use strict";
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
    const img = document.querySelector("#profile img");
    if (html.classList.contains("light")) {
        img === null || img === void 0 ? void 0 : img.setAttribute("src", "./assets/avatar-light.png");
    }
    else {
        img === null || img === void 0 ? void 0 : img.setAttribute("src", "./assets/avatar.png");
    }
}
