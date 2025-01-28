import localizationManager from "./localizationManager.js";

const subButton1 = document.getElementById('sub-1');
const subButton2 = document.getElementById('sub-2');
const mainButton = document.getElementById('main-button');


let localization = localizationManager.getLocalization();

let nodesForTranslation = document.querySelectorAll("[data-localization]");

let subscriptionsPrices = {
    "com.bp.wallpaper.year": "$30.99",
    "com.bp.wallpaper.week1": "$0.48",
    "com.bp.wallpaper.week2": "$6.99"
}

nodesForTranslation.forEach(function (node) {
    let localizationString = localization[node.dataset.localization]
    if (localizationString.indexOf("{{price}}") != -1) {
        localizationString = localizationString.replace("{{price}}", subscriptionsPrices[node.dataset.sub]);
    }
    node.innerHTML = localizationString
});

subButton1.addEventListener('pointerdown', function () {
    handleSubscriptionClick(subButton1, subButton2);
}, false);
  
subButton2.addEventListener('pointerdown', function () {
    handleSubscriptionClick(subButton2, subButton1);
}, false);
  
mainButton.addEventListener('pointerdown', function () {
    let activeButton = document.querySelector(".active");
    window.location.href = activeButton.dataset.link
  },false);

function handleSubscriptionClick(button, inactiveButton) {
    button.classList.add("active");
    inactiveButton.classList.remove("active");
}