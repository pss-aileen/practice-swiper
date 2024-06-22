const thumbsSwiper = new Swiper('#thumbs-swiper', {
  direction: 'vertical',
  // loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  watchSlidesProgress: true,
  autoHeight: true,
});

const swiper = new Swiper('#swiper', {
  direction: 'horizontal',

  thumbs: {
    swiper: thumbsSwiper,
  },

  grabCursor: true,
  effect: "fade",
  
});

