const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// ========================================
// ACTIVE NAVIGATION
// ========================================

function updateActiveNav() {

    const scrollPosition = window.scrollY + 150;

    let currentSection = sections[0];

    // If we're at the bottom of the page,
    // activate the last section
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        currentSection = sections[sections.length - 1];
    }

    else {

        sections.forEach((section) => {

            if (section.offsetTop <= scrollPosition) {
                currentSection = section;
            }

        });

    }

    navLinks.forEach((link) => {
        link.classList.remove("active");
    });

    const activeLink = document.querySelector(
        `nav a[href="#${currentSection.id}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
    }
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// ========================================
// FADE TEXT LINE BY LINE
// ========================================

const paragraphs = document.querySelectorAll(".content p");

function updateTextFade() {

    const fadeStart = 200;
    const fadeEnd = 20;

    paragraphs.forEach((paragraph) => {

        const rect = paragraph.getBoundingClientRect();

        if (rect.bottom < fadeEnd) {
            paragraph.style.opacity = "0";
        }

        else if (rect.top < fadeStart) {
            const opacity =
                (rect.bottom - fadeEnd) /
                (fadeStart - fadeEnd);

            paragraph.style.opacity = Math.max(0, Math.min(1, opacity));
        }

        else {
            paragraph.style.opacity = "1";
        }
    });
}

window.addEventListener("scroll", updateTextFade);

updateTextFade();

// ========================================
// CLICK SECTION HEADING TO SCROLL TO TOP
// ========================================

document.querySelectorAll("section h1").forEach((heading) => {

    heading.style.cursor = "pointer";

    heading.addEventListener("click", () => {

        heading.parentElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});