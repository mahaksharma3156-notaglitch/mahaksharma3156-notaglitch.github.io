const menuButton =
  document.querySelector(".menu-button");

const navLinks =
  document.querySelector(".nav-links");

const navItems =
  document.querySelectorAll(".nav-links a");


/* Mobile menu */

menuButton.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


/* Close menu after clicking */

navItems.forEach((item) => {

  item.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


/* Highlight current section */

const sections =
  document.querySelectorAll("main section[id]");


window.addEventListener("scroll", () => {

  let current = "home";


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 130;


    if (window.scrollY >= sectionTop) {

      current =
        section.getAttribute("id");

    }

  });


  navItems.forEach((item) => {

    item.classList.remove("active");


    if (
      item.getAttribute("href") ===
      `#${current}`
    ) {

      item.classList.add("active");

    }

  });

});
