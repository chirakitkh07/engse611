
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Clicked!");
    });
});
