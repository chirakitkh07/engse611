var paragraphs = document.querySelectorAll("#main p");


paragraphs.forEach(function(p) {
    
    if (p.textContent.trim() === "Llamas and Chickens!") {
        p.style.color = "red"; 
    }
});