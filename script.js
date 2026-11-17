
// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = "Light";
    }
    else {
        themeBtn.innerHTML = "Dark";
    }

});

// Mobile Navigation Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});

// Close menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });

});
