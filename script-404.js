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

// --- DÉBUT Erreur 404 Animation ---
let anim = gsap
    .timeline({}) 
    .to(".clip-top .marquee, .clip-bottom .marquee", 5, {
        left: "100%",
        ease: "power4.inOut",
        yoyo: true,
        repeat: -1,
    })
    
    .to(".clip-center .marquee", 5, {
        left: "100%",
        ease: "power4.inOut",
        yoyo: true,
        repeat: -1,
    });
// --- FIN Erreur 404 Animation ---
