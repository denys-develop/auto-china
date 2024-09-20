  // SWIPER Slider
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperSlider() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 8, 
 

    breakpoints: {
      780: {
      slidesPerView: 1,
      spaceBetween: 16,
      },
    },

    breakpoints: {
      920: {
      slidesPerView: 2,
      spaceBetween: 20,
      },
    }
  });
}

export default swiperSlider; 