// start function called when page loads
function start() {
    // get search button id
    var submitBtn = document.getElementById("search");
    submitBtn.addEventListener("click", filter, false);
}

// filter function called when user inputs in search bar
function filter() {
    // get search input
    var searchInput = document.getElementById("plantSearch");
    var searchTerm = searchInput.value.toLowerCase();

    // get all plant items
    var plantList = document.getElementById("plantList");
    var plantItems = plantList.getElementsByTagName("li");

    // Loop through all plant list items
    var len = plantItems.length;
    for (var i = 0; i < len; i++) {
        var plant = plantItems[i];
        var link = plant.querySelector("a");
        var plantL = link.innerHTML.toLowerCase();

        // Show/hide plant items based on search term
        if (plantL.includes(searchTerm)) {
            plant.style.display = "";
        }
        else {
            plant.style.display = "none";
        }
    }
}
window.addEventListener("load", start, false);
