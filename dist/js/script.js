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
    $('[data-modal=consultation]').on('click', function(){
        $('.background,#consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.background,#consultation').fadeOut('slow');
    });
    $('ul.products__menu').on('click', 'li:not(.products__item_active)', function() {
        $(this)
          .addClass('products__item_active').siblings().removeClass('products__item_active')
          .closest('div.container').find('div.slick-slide').removeClass('slick-current slick-active').eq($(this).index()).addClass('slick-current slick-active');
    }); 

    if(window.matchMedia('(max-width: 575px)').matches){
        $(window).scroll(function(){
            if($(this).scrollTop()>800){
                $('.page-up').fadeIn();
            }
            else{
                $('.page-up').fadeOut();
            };
        });
    } else {
        $(window).scroll(function(){
            if($(this).scrollTop()>1300){
                $('.page-up').fadeIn();
            }
            else{
                $('.page-up').fadeOut();
            };
        });
    }

    $("a[href=#up]").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__wrapper'),
        menuItem = document.querySelectorAll('.header__wrapper'),
        hamburger = document.querySelector('.header__hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__wrapper_active');
        });
    });
    
    function validateForms(form){
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свой e-mail",
                  email: "Неправильно введен адрес почты"
                }
            }
        }); 
    };

    validateForms('#consultation form');

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    new WOW().init();
});