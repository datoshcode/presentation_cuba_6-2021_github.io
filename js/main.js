$(function(){
 
  $('.photo__slider').slick({
    
    // Слайдер сайта
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Стрелка слайдера влево"/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Стрелка слайдера вправо"/></button>',

    // Автоматическое воспроизведение слайдера при ширине экрана в 540px
    responsive: [
      {
        breakpoint: 540,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
    ]
  });

  // Открыть перечень Меню шапки сайта
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  // Открыть перечень Меню в футере сайта
  $('.footer__item').on('click', function(){
    $('.footer__item-list').slideToggle();
  });


});