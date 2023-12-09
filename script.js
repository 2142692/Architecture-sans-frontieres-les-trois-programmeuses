// --- DÉBUT Swiper Hero ---
if(document.querySelector(".mySwiper")){
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
}
// --- FIN Swiper Hero ---

// --- DÉBUT Swiper Nouvelles ---
if(document.querySelector(".mySecondSwiper")){
const swiperNews = new Swiper(".mySecondSwiper", {
  direction: "horizontal",
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}
// --- FIN Swiper Nouvelles ---

// --- DÉBUT Hambuger Animation ---
if(document.querySelector(".hamburger")){
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
}
// --- FIN Hamburger Animation ---

// --- DÉBUT Don Animation ---
if(document.querySelector(".cursor")){
const sentence = "Faites un don";

let cursor = gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1});

gsap.from(".contenu svg", {x: "15%", yoyo: true, ease: "power1.inOut", repeat: -1});

let animation = gsap.timeline({repeat: -1});

let timeLine = gsap.timeline();
timeLine.to(".text", {duration: 2, text: sentence});
animation.add(timeLine);
}
// --- FIN Don Animation ---

// --- DÉBUT LocalStorage ---
if(document.querySelector(".alert")){
const alert = document.querySelector('.alert');
const dismissAlertButton = document.querySelector('.alert .btn-close');

if (localStorage.getItem('hideAlert')) {
  alert.style.display = "none";
  console.log('cacher');
}

if (dismissAlertButton) {
  dismissAlertButton.addEventListener('click', event => {
    event.preventDefault();
    alert.classList.add('alert-hidden');
    localStorage.setItem("hideAlert", true);
  })
}
}
// --- FIN LocalStorage ---

// --- DÉBUT Erreur 404 Animation ---
if(document.querySelector(".clip-top")){
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
}
// --- FIN Erreur 404 Animation ---