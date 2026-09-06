document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
            });
        });
    }

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateNav() {

        let current = "";

        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 150) {
                current = section.id;
            }
        });

        navItems.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );
        });
    }

    window.addEventListener("scroll", updateNav);
    updateNav();

});
