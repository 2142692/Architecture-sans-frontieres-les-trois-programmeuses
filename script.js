const swiperHero = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    mousewheel: true,
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