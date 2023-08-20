// Background Backward & Forward Text Animation
const textTranslateX = 20;

gsap.set('.background-text h1:first-child', { xPercent: 0 });
gsap.set('.background-text h1:last-child', { xPercent: - textTranslateX });

const backwardTextAnimation = gsap.to('.background-text h1:first-child', { xPercent: - textTranslateX });
const forwardTextAnimation = gsap.to('.background-text h1:last-child', { xPercent: 0 });

const textTimeline = gsap.timeline()
                    .add(backwardTextAnimation)
                    .add(forwardTextAnimation, '<');

ScrollTrigger.create({
    trigger: '.hero-text-container',
    start: 'top top',
    end: '+=700',
    animation: textTimeline,
    scrub: 1,
});

// Projects Reveal Animation
gsap.set('.projects-container .glass-box img:not(:first-child)', { yPercent: 100 });

const projectsAnimation = gsap.to('.projects-container .glass-box img:not(:first-child)', {
    yPercent: 0,
    duration: 1,
    stagger: 1
});

ScrollTrigger.create({
    trigger: '.projects-container',
    start: 'top top',
    end: 'bottom bottom',
    pin: '.glass-box',
    pinSpacing: false,
    animation: projectsAnimation,
    scrub: 0.6,
});