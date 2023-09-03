import { _ } from './utils.js';
import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.19/+esm';
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const isMobileScreen = window.innerWidth <= 840;

if(isMobileScreen) {
    return;
}

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
});

function raf(time) {
    lenis.raf(time);
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
contactButton.addEventListener('click', () => lenis.scrollTo('.contact', { duration: 5 }));
