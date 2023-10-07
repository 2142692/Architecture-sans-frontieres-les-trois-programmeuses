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