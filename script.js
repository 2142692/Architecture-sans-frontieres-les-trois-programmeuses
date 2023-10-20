// --- DÉBUT Swiper Hero ---
const swiperHero = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
// --- FIN Swiper Hero ---

// --- DÉBUT Swiper Nouvelles ---
const swiperNews = new Swiper(".mySecondSwiper", {
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// --- FIN Swiper Nouvelles ---

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

// --- DÉBUT Don Animation ---
const sentence = "Faites un don";

let cursor = gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1});

gsap.from(".contenu svg", {x: "15%", yoyo: true, ease: "power1.inOut", repeat: -1});

let animation = gsap.timeline({repeat: -1});

let timeLine = gsap.timeline();
timeLine.to(".text", {duration: 2, text: sentence});
animation.add(timeLine);
// --- FIN Don Animation ---

// --- DÉBUT Don Animation EN ---
const sentenceEn = "Make a donation";

let cursorEn = gsap.to(".cursor-en", {opacity: 0, ease: "power2.inOut", repeat: -1});

gsap.from(".contenu-en svg", {x: "15%", yoyo: true, ease: "power1.inOut", repeat: -1});

let animationEn = gsap.timeline({repeat: -1});

let timeLineEn = gsap.timeline();
timeLineEn.to(".text-en", {duration: 2, text: sentenceEn});
animationEn.add(timeLineEn);
// --- FIN Don Animation EN ---

// --- DÉBUT Erreur 404 Animation ---
gsap.registerPlugin(ScrollTrigger);
let erreur = gsap.timeline()
.from(".erreur_titre",
{opacity: 0, repeat: -2, ease: "power2.inOut", duration:0.7, yoyo:true})

.from(".erreur_desc",
{opacity: 0, y: 50, duration:3})




// --- FIN Erreur 404 Animation---

