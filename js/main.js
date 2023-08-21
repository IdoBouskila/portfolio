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

// navigate to contact section
contactButton.addEventListener('click', () => lenis.scrollTo('#contact'));

function _(selector) {
    return document.querySelector(selector);
}
