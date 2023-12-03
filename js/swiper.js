const swiper = new Swiper('.products__slider', {
        slidesPerView: 'auto',
        spaceBetween:70,
        slideToClickedSlide:true,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
  });
const featured = new Swiper('.featured__slider', {
  slidesPerView: 'auto',
  spaceBetween:20,
  speed: 4000,
  allowTouchMove: false,
  loop:true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true
  }
});