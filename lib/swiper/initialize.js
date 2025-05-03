const menuSwiper = new Swiper(".category-swiper", {
    slidesPerView: "3",
    spaceBetween: 16,
    loop: true,
  breakpoints: {
      0: {
          slidesPerView: 3,
          spaceBetween: 16,
          loop: true,
      },
      900: {
          slidesPerView: 5,
          spaceBetween: 24,
          loop: true,
      },
      1280: {
          slidesPerView: 5,
          spaceBetween: 24,
      }
  }
})

const mealSwiper = new Swiper(".meal-swiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
  breakpoints: {
      0: {
          slidesPerView: 3,
          spaceBetween: 16,
          loop: true,
      },
      900: {
          slidesPerView: 5,
          spaceBetween: 24,
          loop: true,
      },
      1280: {
          slidesPerView: 5,
          spaceBetween: 24,
      }
  }
})

const sizeSwiper = new Swiper(".size-swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 1000,
    loop: false,  
})
const extraSwiper = new Swiper(".extra-swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 1000,
    loop: false,  
})

const addonSwiper = new Swiper(".addon-swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    speed: 1000,
    loop: false,  
})
const daySwiper = new Swiper(".day-swiper", {
    slidesPerView: "auto",
    speed: 1000,
    loop: false,  
})