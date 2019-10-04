$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__card').removeClass('catalog__card_active').eq($(this).index()).addClass('catalog__card_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click',function(e) {
                e.preventDefault();
                $('.catalog__content').eq(i).toggleClass('catalog__content_active');
                $('.catalog__list').eq(i).toggleClass('catalog__list_active');
            })
        }) 
      };
      toggleSlide('.catalog__link');
      toggleSlide('.catalog__back');
})   