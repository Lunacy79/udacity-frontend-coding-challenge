function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " toggled";
    } else {
        x.className = "nav";
    }
}