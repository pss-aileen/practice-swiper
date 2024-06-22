const thumbsSwiper = new Swiper('#thumbs-swiper', {
  direction: 'vertical',
  // loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
});

const swiper = new Swiper('#swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper .swiper-button-next',
    prevEl: '.swiper .swiper-button-prev',
  },

  thumbs: {
    swiper: thumbsSwiper,
  },

  grabCursor: true,
  effect: "fade",
  
});

