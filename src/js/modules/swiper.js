// SWIPER Slider
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperSlider() {
  let swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    // spaceBetween: 8,

    slidesPerView: "auto",
    spaceBetween: 8,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },

    // pagination: {
    //   el: ".swiper-pagination",
    //   dynamicBullets: true,
    // },



  });
}

export default swiperSlider; 