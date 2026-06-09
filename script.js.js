// ===============================
// MENU BURGER RESPONSIVE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("#nav-links");

    // Ouvrir/Fermer le menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        // Changer l'icône
        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }
    });

    // Fermer le menu après clic sur un lien
    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.innerHTML = "☰";
        });
    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            const navbarHeight =
                document.querySelector("header").offsetHeight;

            const sectionPosition =
                targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth"
            });
        }

    });

});


// ===============================
// ANIMATION APPARITION AU SCROLL
// ===============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold: 0.15
    }

);

document
    .querySelectorAll("section, .project-card")
    .forEach(element => {

        element.classList.add("hidden");
        observer.observe(element);

    });