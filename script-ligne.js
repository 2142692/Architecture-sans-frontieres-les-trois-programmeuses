gsap.registerPlugin(ScrollTrigger);

// --- DÉBUT Hambuger Animation ---
const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.upper');
const lineTwo = hamburger.querySelector('.middle');
const lineThree = hamburger.querySelector('.lower');

const lines = [lineOne, lineTwo, lineThree];

hamburger.addEventListener('mouseenter', () => {
  gsap.timeline().to(lines, { duration: 0.2, ease: 'power2.inOut',
    scaleX: 1.5,
    stagger: {
      each: 0.125,
      repeat: 1,
      yoyo: true,
    },
  });
});
// --- FIN Hamburger Animation ---

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