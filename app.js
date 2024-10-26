function search() {
    var text = document.getElementById("paragraph").innerText;
    var searchInput = document.getElementById("searchInput").value;
    console.log(searchInput);
    
    var found = false;

    for (var i = 0; i <= text.length - searchInput.length; i++) {
        if (text.slice(i, i + searchInput.length).toLowerCase() === searchInput.toLowerCase()) {
            found = true;
            console.log("Text found!");
        }
    }
    if (!found) {
        console.log("Text Not found!");
    }
}

