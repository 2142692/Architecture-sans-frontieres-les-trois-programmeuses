gsap.registerPlugin(ScrollTrigger);

const mask = document.querySelector('#groupe');

const section = document.querySelector('.histoire_desc');

/*let scrollOne = gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger:{
        trigger: sections,
        pin: true,
        scrub: 1,
        end: "+=3000"
    }
})*/

gsap.to(mask, {
    height: "100%",
    scrollTrigger:{
        trigger: section,
        markers: "true",
        start: "9% 24%",
        end: "50%",
        scrub:1,
    }
})