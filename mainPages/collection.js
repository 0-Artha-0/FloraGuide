function start() {
    var collection = JSON.parse(localStorage.getItem("collections")) || [];
    var collectNum = collection.length;

    // check if there the collection is empty or not
    if (collectNum != 0) {
        var page = document.getElementById("myCollection");
        var content = "";

        // loop through the collection list and increment it into content
        for (var i = 0; i < collectNum; i++) {
            content += '<div style="margin: 10px; padding: 10px; background-color: rgb(0, 0, 0, 0.5);' +
                'height: 200px; border-radius: 10px;" ondblclick="removePlant(' + i + ')">' +
                '<a href="' + collectionlinks[i] + '"></a><img src="../Images/plantStickers/' + collection[i] + 
                '" style=" height: 200px; item-align: center;"></div>';
        }

        // add the collection content to the main element in the page
        page.innerHTML = content;


    }
}

// function to remove plant if double clicked
function removePlant(i) {
    // get the collection list
    var collection = JSON.parse(localStorage.getItem("collections")) || [];
    // remove the specified plant using the passed index of the collection
    collection.splice(i, 1);
    // update the local storage with the new list
    localStorage.setItem("collections", JSON.stringify(collection));

    // reload the page to view the updated collection
    location.reload();
}

window.addEventListener("load", start, false);
