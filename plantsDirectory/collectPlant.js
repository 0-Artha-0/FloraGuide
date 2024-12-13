// constant for plant stickers collection
const plantStickers = ["aloe.png", "flamingo.png", "arecapalm.png", "birdnestfern.png",
    "bostonfern.png", "calathea.png", "castiron.png", "evergreen.png", "moneyplant.png",
    "croton.png", "dumbcane.png", "dracaena.png", "englishivy.png", "fiddle.png",
    "maidenhair.png", "monstera.png", "parlorpalm.png", "peace.png", "peperomia.png",
    "philodendron.png", "ponytailpalm.png", "pothos.png", "prayerplant.png", "rubber,png",
    "snake.png", "spider.png", "pearls.png", "swisscheese.png", "zz.png"];

const plantNames = ["Aloe", "Flamingo", "Areca", "Bird's", "Boston",
    "Calathea", "Cast Iron", "Chinese Evergreen", "Money Plant", "Croton",
    "Dumb Cane", "Dracaena", "English Ivy", "Fiddle", "Maidenhair",
    "Monstera deliciosa", "Parlor", "Peace", "Peperomia", "Philodendron",
    "Ponytail", "Pothos", "Prayer", "Rubber", "Snake", "Spider", "String",
    "Swiss", "ZZ Plant"];

// function start when page loads 
function start() {
    // get the collection from the browser local storage or make a new collection if there's none
    var collection = JSON.parse(localStorage.getItem("collections")) || [];

    var collectBtn = document.getElementById("collectBtn");
    collectBtn.addEventListener("click", addPlant, false);
}

function addPlant() {
    // get the plant name of the caller page
    var plantName = document.getElementById("names");
    var plant = plantName.innerText;

    // get the existing collection list from the browser local storage
    // or make a new one if there's none
    var collection = JSON.parse(localStorage.getItem("collections")) || [];

    // loop and check plant name to determine image location to add to the collection
    for (var i = 0; i < plantNames.length; i++) {
        if (plant.includes(plantNames[i])) {
            var notsaved = true;

            // check if plant is already added to the collection
            for (var j of collection) {
                if (j === plantStickers[i]) {
                    alert("Plant already added.");
                    notsaved = false;
                    break;
                }
            }

            // if plant was not added peviously, add it to the collection
            if (notsaved) {
                collection.push("../Images/plantStickers/" + plantStickers[i]);
                localStorage.setItem("collections", JSON.stringify(collection));

                alert("Plant added to collection successfully!");
                break;
            }

        }

    }

}

window.addEventListener("load", start, false);
