$(document).ready(function(){
    $('.slider').slick({
        speed: 120,
        prevArrow:'<button type="button" class="slider__arrow slider__arrow_prev"><img src="icons/slider/slide_back.png"></button>',
        nextArrow:'<button type="button" class="slider__arrow slider__arrow_next"><img src="icons/slider/slide_forward.png"></button>',
        responsive:[
        {
            breakpoint: 768,
            settings:{
                arrows: false
            }
        }]
    });
    $('ul.products__menu').on('click', 'li:not(.products__item_active)', function() {
        $(this)
          .addClass('products__item_active').siblings().removeClass('products__item_active')
          .closest('div.container').find('div.slick-slide').removeClass('slick-current slick-active').eq($(this).index()).addClass('slick-current slick-active');
    }); 
});