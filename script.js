document.addEventListener("DOMContentLoaded", function () {

    /* ================= MOBILE MENU ================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
            });

        });
    }


    /* ================= ACTIVE NAVIGATION ================= */

    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navItems.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });
    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".research-card, " +
        ".publication, " +
        ".experience-card, " +
        ".education-card, " +
        ".skill-group, " +
        ".recognition-card"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    /* ================= RESIZE ================= */

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 700 &&
            navLinks
        ) {
            navLinks.classList.remove("open");
        }

    });

});
