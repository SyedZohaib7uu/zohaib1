window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.container');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        setActiveLink(current);
    });

    function setActiveLink(current) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }
});
var adp = document.getElementById("pop")
var p = document.getElementById("p")
var b = document.getElementById("jiopko")
var a = 0
b.addEventListener("click", () => {
    if (a === 0) {
        adp.innerText = "With a keen eye for detail and an innate sense of design aesthetics, Zohaib breathes life into static web pages, transforming them into dynamic and engaging platforms.";
        b.innerText = "Read Less";
        a = 1; // Update state to "Read Less"
    } else {
        adp.innerText = ""; // Hide additional text
        b.innerText = "Read More";
        a = 0; // Update state to "Read More"
    }
});
var adpp = document.getElementById("popp")
var pp = document.getElementById("pp")
var bb = document.getElementById("jiopkoo")
var aa = 0
bb.addEventListener("click", () => {
    if (aa === 0) {
        adpp.innerText = "Zohaib is a proficient frontend developer on Fiverr, delivering tailored solutions. He actively contributes to the developer community on GitHub, sharing knowledge and collaborating on open-source projects.";
        bb.innerText = "Read Less";
        aa = 1; // Update state to "Read Less"
    } else {
        adpp.innerText = ""; // Hide additional text
        bb.innerText = "Read More";
        aa = 0; // Update state to "Read More"
    }
});