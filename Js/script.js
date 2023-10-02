const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});


var options = {
    strings: ["Full Stack Web Developer", "Android Developer ", "Python Enthuastic "],
    typeSpeed: 50, // typing speed in milliseconds
    backSpeed: 25, // backspacing speed in milliseconds
    loop: true // loop the animation infinitely
};

var typed = new Typed("#typed-text", options);



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
