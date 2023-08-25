import { splitElements } from './utils.js';

splitElements('.hero-text-container > *');

gsap.to('.hero-text-container .char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .5
});

// Hero Text Scroll Animation
gsap.set('.hero-text-container, .scroll-text', { yPercent: 0 });

const heroAnimation = gsap.to('.hero-text-container', { yPercent: -35 });

ScrollTrigger.create({
    trigger: '.hero',
    start: 'top',
    end: 'center',
    animation: heroAnimation,
    scrub: 1,
});
