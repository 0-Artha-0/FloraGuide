
// start function called when page loads
function start() {
    // get search button id
    var submitBtn = document.getElementById("search");
    submitBtn.addEventListener("click", send, false);
}

function send() {
    // get search input
    var searchInput = document.getElementById("plantSearch");
    var searchTerm = searchInput.value;

    // if there is a search input go to the directory page
    if (searchTerm.trim()) {
        window.location.href = "mainPages/directory.html";
    }
    else {
        alert("Please enter a search term.");
    }
}

window.addEventListener("load", start, false);
