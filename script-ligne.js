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

// --- DÉBUT ligne du temps Animation ---
const timeline = document.querySelector('.timeline-items');
const progress = document.querySelector('.progress');


gsap.to(progress, {
  height: "100%",
  scrollTrigger:{
      trigger: timeline,
    
      start: "-2% 24%",
      end: "95%",
      scrub:1,
  }
});

const dot1 = document.querySelector('.timeline-dot.no1'); 
const dot2 = document.querySelector('.timeline-dot.no2'); 
const dot3 = document.querySelector('.timeline-dot.no3'); 
const dot4 = document.querySelector('.timeline-dot.no4'); 
const dot5 = document.querySelector('.timeline-dot.no5'); 
const dot6 = document.querySelector('.timeline-dot.no6'); 
const dot7 = document.querySelector('.timeline-dot.no7'); 

gsap.fromTo(dot1, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: timeline,
  
  start: "0% 24%",
  end: "0% 24%",
  scrub:1,
}});

gsap.fromTo(dot2, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: timeline,
  
  start: "8% 24%",
  end: "8% 24%",
  scrub:1,
}});

gsap.fromTo(dot3, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: timeline,
 
  start: "16% 24%",
  end: "16% 24%",
  scrub:1,
}});

gsap.fromTo(dot4, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: timeline,
  
  start: "24% 24%",
  end: "24% 24%",
  scrub:1,
}});

gsap.fromTo(dot5, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: timeline,
  
  start: "35% 24%",
  end: "35% 24%",
  scrub:1,
}});

gsap.fromTo(dot6, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: timeline,
 
  start: "50% 24%",
  end: "50% 24%",
  scrub:1,
}});

gsap.fromTo(dot7, {
  opacity: "0%",
 
}, {opacity:"100%",
 scrollTrigger:{
  trigger: timeline,
  
  start: "70% 24%",
  end: "70% 24%",
  scrub:1,
}});


const date1 = document.querySelector('.timeline-date.no1'); 
const date2 = document.querySelector('.timeline-date.no2'); 
const date3 = document.querySelector('.timeline-date.no3'); 
const date4 = document.querySelector('.timeline-date.no4'); 
const date5 = document.querySelector('.timeline-date.no5'); 
const date6 = document.querySelector('.timeline-date.no6'); 
const date7 = document.querySelector('.timeline-date.no7'); 

gsap.from(date1, {opacity: 0 , y: -50,
 scrollTrigger:{
  trigger: timeline,
  start: "0% 24%",
  end: "0% 24%",
  scrub:1,
}});

gsap.from(date2, {opacity: 0 , y: -50,
  scrollTrigger:{
   trigger: timeline,
   start: "8% 24%",
   end: "8% 24%",
   scrub:1,
 }});

 gsap.from(date3, {opacity: 0 , y: -50,
  scrollTrigger:{
   trigger: timeline,
   start: "16% 24%",
  end: "16% 24%",
   scrub:1,
 }});

 gsap.from(date4, {opacity: 0 , y: -50,
  scrollTrigger:{
   trigger: timeline,
   start: "24% 24%",
  end: "24% 24%",
   scrub:1,
 }});

 gsap.from(date5, {opacity: 0 , y: -50,
  scrollTrigger:{
   trigger: timeline,
   start: "35% 24%",
  end: "35% 24%",
   scrub:1,
 }});

 gsap.from(date6, {opacity: 0 , y: -50,
  scrollTrigger:{
   trigger: timeline,
   start: "50% 24%",
   end: "50% 24%",
   scrub:1,
 }});

 gsap.from(date7, {opacity: 0 , y: -50,
  scrollTrigger:{
   trigger: timeline,
   start: "70% 24%",
  end: "70% 24%",
   scrub:1,
 }});

 
 const content1 = document.querySelector('.timeline-content.no1'); 
 const content2 = document.querySelector('.timeline-content.no2'); 
 const content3 = document.querySelector('.timeline-content.no3'); 
 const content4 = document.querySelector('.timeline-content.no4'); 
 const content5 = document.querySelector('.timeline-content.no5'); 
 const content6 = document.querySelector('.timeline-content.no6'); 
 const content7 = document.querySelector('.timeline-content.no7'); 

 gsap.from(content1, {opacity: 0 , x: -50,
  scrollTrigger:{
   trigger: timeline,
   start: "0% 24%",
   end: "6% 24%",
   scrub:1,
 }});
 
 gsap.from(content2, {opacity: 0 , x: 50,
   scrollTrigger:{
    trigger: timeline,
    start: "8% 24%",
    end: "14% 24%",
    scrub:1,
  }});
 
  gsap.from(content3, {opacity: 0 , x: -50,
   scrollTrigger:{
    trigger: timeline,
    start: "16% 24%",
   end: "22% 24%",
    scrub:1,
  }});
 
  gsap.from(content4, {opacity: 0 , x: 50,
   scrollTrigger:{
    trigger: timeline,
    start: "24% 24%",
   end: "30% 24%",
    scrub:1,
  }});
 
  gsap.from(content5, {opacity: 0 , x: -50,
   scrollTrigger:{
    trigger: timeline,
    start: "35% 24%",
   end: "41% 24%",
    scrub:1,
  }});
 
  gsap.from(content6, {opacity: 0 , x: 50,
   scrollTrigger:{
    trigger: timeline,
    start: "50% 24%",
    end: "56% 24%",
    scrub:1,
  }});
 
  gsap.from(content7, {opacity: 0 , x: -50, 
   scrollTrigger:{
    trigger: timeline,
    start: "70% 24%",
   end: "76% 24%",
    scrub:1,
  }});
// --- FIN ligne du temps Animation ---