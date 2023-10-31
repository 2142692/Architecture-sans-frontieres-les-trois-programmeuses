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
const desc1 = document.querySelector('.desc1');
const desc2 = document.querySelector('.desc2');
const desc3 = document.querySelector('.desc3');
const desc4 = document.querySelector('.desc4');
const desc5 = document.querySelector('.desc5');
const desc6 = document.querySelector('.desc6');
const desc7 = document.querySelector('.desc7');
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
        
        start: "0% 24%",
        end: "80%",
        scrub:1,
    }
});

gsap.fromTo(desc1, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: section,
 
  start: "0% 24%",
  end: "0% 24%",
  scrub:1,
}});

gsap.fromTo(desc2, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: section,
  
  start: "9% 24%",
  end: "9% 24%",
  scrub:1,
}});

gsap.fromTo(desc3, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: section,
 
  start: "18% 24%",
  end: "18% 24%",
  scrub:1,
}});

gsap.fromTo(desc4, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: section,
  
  start: "28% 24%",
  end: "28% 24%",
  scrub:1,
}});

gsap.fromTo(desc5, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: section,
  
  start: "41% 24%",
  end: "41% 24%",
  scrub:1,
}});

gsap.fromTo(desc6, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: section,
 
  start: "56% 24%",
  end: "56% 24%",
  scrub:1,
}});

gsap.fromTo(desc7, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: section,
  
  start: "85% 24%",
  end: "85% 24%",
  scrub:1,
}});