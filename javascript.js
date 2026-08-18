document.addEventListener('DOMContentLoaded', () => {
    // Flipcard Interactive Toggle
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        // Toggle flip on card click
        card.addEventListener('click', (e) => {
            // Prevent flip when clicking inside the iframe/video area directly
            if (e.target.tagName.toLowerCase() === 'iframe') return;

            card.classList.toggle('flipped');
        });
    });

    // Smooth Scroll Navigation Active State
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
