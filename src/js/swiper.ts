import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/a11y';

// Docs: https://swiperjs.com/swiper-api
new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  initialSlide: Math.round(Math.random()*5),
  speed: 500,
  spaceBetween: 100,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    enabled: true,
    prevSlideMessage: "Previous testimonial",
    nextSlideMessage: "Next testimonial",
  },
});
