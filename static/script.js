document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const phrases = document.querySelectorAll('p, li');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    phrases.forEach(phrase => {
        phrase.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });
        phrase.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
        });
    });
});
