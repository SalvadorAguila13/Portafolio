window.addEventListener("load", () => {
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150, 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'rigth' });
})