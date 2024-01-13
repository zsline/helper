
new Swiper('.testimonial__slider--video', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 52,
    navigation: {
        nextEl: ".testimonial__btns--prev",
        prevEl: ".testimonial__btns--next",
      },
      pagination: {
        el: ".testimonial__pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },
});
new Swiper('.testimonial__slider--text', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 50,
    pagination: {
        el: ".testimonial-text__pagination",
        clickable: true,
      },
    navigation: {
        nextEl: ".testimonial__btns--prev",
        prevEl: ".testimonial__btns--next",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        997: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
      },
});
new Swiper('.clients__slider', {

    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".clients__btns--prev",
        prevEl: ".clients__btns--next",
    },
    pagination: {
      el: ".clients__pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2.5,
      },
      670: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
})

const blogSlider = new Swiper('.blog__slider', {
    slidesPerGroup: 1,
    spaceBetween: 35,
    navigation: {
        nextEl: ".blog__btns--prev",
        prevEl: ".blog__btns--next",
    },
    pagination: {
        el: ".blog__pagination",
        clickable: true,
      },
    
    breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        670: {
          slidesPerView: 3,
        },
        997: {
          slidesPerView: 4,
        },
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
const modalVideo = document.querySelector('.modal-video');

const openModal = document.querySelectorAll('[data-open]');
if(modal){
    openModal.forEach((el) => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            if(el.classList.contains('main__video')){
                modalVideo.classList.remove('hidden');
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('body').style.marginRight = '14px'
            } else {
                modal.classList.remove('hidden');
                document.querySelector('body').style.overflow = 'hidden';
                document.querySelector('body').style.marginRight = '14px';
            }

        });
        modal.querySelector('.close').addEventListener('click', function(){
            modal.classList.add('hidden');
            document.querySelector('body').style.overflowY = 'auto';
            document.querySelector('body').style.marginRight = '0';
        });
        modalVideo.querySelector('.close').addEventListener('click', function(){
            modalVideo.classList.add('hidden');
            document.querySelector('body').style.overflowY = 'auto';
            document.querySelector('body').style.marginRight = '0';
        });
    });
}

// =============