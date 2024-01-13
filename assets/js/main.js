
new Swiper('.testimonial__slider--video', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 52,
    navigation: {
        nextEl: ".testimonial__btns--prev",
        prevEl: ".testimonial__btns--next",
      },
})
new Swiper('.testimonial__slider--text', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: ".testimonial__btns--prev",
        prevEl: ".testimonial__btns--next",
      },
})
new Swiper('.clients__slider', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".clients__btns--prev",
        prevEl: ".clients__btns--next",
      },
})

// Видео отзывы ============================

if(document.querySelector('.testimonial__slider--video')){
    const slide = document.querySelectorAll('.testimonial__item');
    slide.forEach((el) => {

      let img = el.querySelector('.testimonial__item--img');
      let video = el.querySelector('.testimonial__item--video');
      img.addEventListener('click', function () {
        img.classList.add('hidden');
        video.classList.remove('hidden');
      })
    })
  }

// Модальные окна

const modal = document.querySelector('.modal-box');
const openModal = document.querySelectorAll('[data-open]');
if(modal){
    openModal.forEach((el) => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.remove('hidden');
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('body').style.marginRight = '14px';
        });
        modal.querySelector('.close').addEventListener('click', function(){
            modal.classList.add('hidden');
            document.querySelector('body').style.overflowY = 'auto';
            document.querySelector('body').style.marginRight = '0';

        });
    });
}

// =============