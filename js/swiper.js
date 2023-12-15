const swiper = new Swiper('.products__slider', {
        slidesPerView: 'auto',
        spaceBetween:70,
        slideToClickedSlide:true,
        loop:true,
        centeredSlides:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            // when window width is >= 320px
            1024:{
              spaceBetween:70,
            },
            650:{
              spaceBetween:35,
            },
            0:{
              spaceBetween:15,
            },
          }
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