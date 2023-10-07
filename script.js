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

/*const sentencesArr = ["Offrez votre charité", "Faites un don"];

let cursor = gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1});

gsap.from(".contenu svg", {x: "15%", yoyo: true, ease: "power1.inOut", repeat: -1});

let animation = gsap.timeline({repeat: -1});

sentencesArr.forEach(sentence => {
  let timeLine = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
  timeLine.to(".text", {duration: 1.5, text: sentence});
  animation.add(timeLine);
});*/

const sentence = "Faites un don";

let cursor = gsap.to(".cursor", {opacity: 0, ease: "power2.inOut", repeat: -1});

gsap.from(".contenu svg", {x: "15%", yoyo: true, ease: "power1.inOut", repeat: -1});

let animation = gsap.timeline({repeat: -1});

let timeLine = gsap.timeline();
timeLine.to(".text", {duration: 2, text: sentence});
animation.add(timeLine);
