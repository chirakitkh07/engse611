
let button = document.getElementById("changeTextButton");

button.addEventListener("click", function() {
    let paragraph = document.getElementById("example");
    paragraph.textContent = "New Text Content";
});

let backButton = document.getElementById("backButton");
backButton.addEventListener("click", function() {
    window.location.href = "../index.html"; 
});
