const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: "auto",
  spaceBetween: 8,
  navigation: {
    // スマホでの仕様をfalseに変更
    enabled: false,
  },

  breakpoints: {
    768: {
      spaceBetween: 8,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    1024: {
      spaceBetween: 32,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
  },
});