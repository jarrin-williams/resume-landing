document.addEventListener("DOMContentLoaded", () => {
    new Typed(".typed-text", {
        strings: [
            "Creative Coder",
            "Problem Solver",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 1500
    });
});

const skillCards = document.querySelectorAll('.skill-card')

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('clicked');
    });
});
