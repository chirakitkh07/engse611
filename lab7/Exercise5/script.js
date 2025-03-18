        // Selecting the button element
        let button = document.getElementById("removeElementButton");

        // Adding an event listener to the button
        button.addEventListener("click", function() {
            // Selecting all paragraph elements with the class "example"
            let paragraphs = document.querySelectorAll(".example");

            // Looping through all paragraphs and removing them
            paragraphs.forEach(function(paragraph) {
                paragraph.remove();
            });
        });
        // Selecting the "Back" button
        let backButton = document.getElementById("backButton");

        // Adding an event listener to the "Back to Home" button to navigate to index.html
        backButton.addEventListener("click", function() {
            window.location.href = "../index.html"; // Redirects to index.html
        });