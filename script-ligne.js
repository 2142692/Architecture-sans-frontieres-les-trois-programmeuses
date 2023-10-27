gsap.registerPlugin(ScrollTrigger);

const mask = document.querySelector('#Rectangle_1_3');
const sections = gsap.utils.toArray('.histoire_desc');
const section = document.querySelector('.histoire_desc');
const svg = document.querySelector('svg');
/*let scrollOne = gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger:{
        trigger: sections,
        pin: true,
        scrub: 1,
        end: "+=3000"
    }
})
*/
gsap.to(mask, {
    height: "90%",
    scrollTrigger:{
        trigger: section,
        markers: "true",
        
        start: "9% 20%",
        
        scrub:1,
        
    }
})