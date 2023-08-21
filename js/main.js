const contactButton = _('.contact-btn');
const blob = _('.blob');

window.addEventListener('pointermove', (e) => {
    blob.animate(
        {
            left: `${ e.clientX }px`,
            top: `${ e.clientY }px`
        },
        { duration: 3500, fill: 'forwards' }
    );
});

// Smooth Scroll effect
const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// integrate Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// navigate to contact section
contactButton.addEventListener('click', () => lenis.scrollTo('.contact'));

function _(selector) {
    return document.querySelector(selector);
}
