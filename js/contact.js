import { splitElements } from './utils.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reduce blob size on contact section
const blobAnimation = gsap.to('.blob', { width: '20rem', height: '20rem' });

// Text reveal animation on scroll
splitElements('.contact h1, .contact h2');

gsap.set('.contact .char', {
    lineHeight: 0,
    y: -115,
    overflow: 'hidden',
});

const charAnimation = gsap.to('.contact .char', {
    y: 0,
    lineHeight: 0.8,
    stagger: 0.05,
    delay: 0.2,
    duration: .4
});

const contactSectionTimeline = gsap.timeline().add(blobAnimation).add(charAnimation);

ScrollTrigger.create({
    trigger: '.contact',
    start: 'top bottom',
    end: 'top top',
    animation: contactSectionTimeline,
    scrub: 1,
});
