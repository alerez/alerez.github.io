/* animations */

const BURGER = document.querySelector('.header__burger'),
    SLIDER = document.querySelector('.fullscreen__slider'),
    MENU = document.querySelector('.header__menu'),
    MENU_BUTTON = document.querySelector('.menu__button'),
    FULLSCREEN = document.querySelector('.fullscreen'),
    LOGO = document.querySelector('.logo__body')
    CONTACTS_BUTTON = document.querySelector('.contacts__button'),
    CONTACTS_CROSS = document.querySelector('.contacts__cross'),
    CONTACTS_BODY = document.querySelector('.contacts__body'),
    NEWS_BUTTON = document.querySelector('.news__button'),
    NEWS_CROSS = document.querySelector('.news__cross'),
    NEWS_BODY = document.querySelector('.news__body');

BURGER.addEventListener('click', ()=>{
    if((CONTACTS_BODY.classList.contains('--show')) && (!BURGER.classList.contains('--active'))) {
        CONTACTS_BODY.classList.toggle('--hidden');
        CONTACTS_BODY.classList.toggle('--show');

        CONTACTS_BUTTON.classList.toggle('--hidden');
        CONTACTS_BUTTON.classList.toggle('--show');

        SLIDER.classList.toggle('--show');
        SLIDER.classList.toggle('--hidden');

        LOGO.classList.toggle('logo__body-transform');
    }

    if((NEWS_BODY.classList.contains('--show')) && (!BURGER.classList.contains('--active'))) {
        LOGO.classList.toggle('logo__body-transform');
    }

    if((NEWS_BODY.classList.contains('news__body-show'))) {
        NEWS_BODY.classList.toggle('news__body-show');
        NEWS_BODY.classList.toggle('--hidden');

        SLIDER.classList.toggle('--show');
        SLIDER.classList.toggle('--hidden');

        LOGO.classList.toggle('logo__body-transform');
    }

    if((CONTACTS_BODY.classList.contains('--show')) && (BURGER.classList.contains('--active'))) {
        CONTACTS_BODY.classList.toggle('--hidden');
        CONTACTS_BODY.classList.toggle('--show');

        MENU.classList.toggle('--show');
        MENU.classList.toggle('--hidden');

        CONTACTS_BUTTON.classList.toggle('--hidden');
        CONTACTS_BUTTON.classList.toggle('--show');
    }

    if(FULLSCREEN.classList.contains('fullscreen__back-1')) {
        FULLSCREEN.classList.toggle('fullscreen__back-1');
        FULLSCREEN.classList.toggle('fullscreen__back-2');
    } else if(FULLSCREEN.classList.contains('fullscreen__back-4')) {
        FULLSCREEN.classList.toggle('fullscreen__back-4');
        FULLSCREEN.classList.toggle('fullscreen__back-2');
    } else if(FULLSCREEN.classList.contains('fullscreen__back-2')) {
        FULLSCREEN.classList.toggle('fullscreen__back-2');
        FULLSCREEN.classList.toggle('fullscreen__back-1');
    } else if(FULLSCREEN.classList.contains('fullscreen__back-3')) {
        FULLSCREEN.classList.toggle('fullscreen__back-3');
        FULLSCREEN.classList.toggle('fullscreen__back-2');
    }

    BURGER.classList.toggle('--active');

    SLIDER.classList.toggle('--show');
    SLIDER.classList.toggle('--hidden');

    MENU.classList.toggle('--show');
    MENU.classList.toggle('--hidden');

    LOGO.classList.toggle('logo__body-transform');
}, false);

MENU_BUTTON.addEventListener('click', ()=>{
    if(BURGER.classList.contains('--active')) {
        BURGER.classList.remove('--active');
    }

    MENU.classList.toggle('--hidden');

    FULLSCREEN.classList.toggle('fullscreen__back-1');
    FULLSCREEN.classList.toggle('fullscreen__back-2');

    SLIDER.classList.toggle('--show');
    SLIDER.classList.toggle('--hidden');

    LOGO.classList.toggle('logo__body-transform');
}, false);

CONTACTS_BUTTON.addEventListener('click', ()=>{
    CONTACTS_BODY.classList.toggle('--show');  
    CONTACTS_BODY.classList.toggle('--hidden');
    CONTACTS_BUTTON.classList.toggle('--hidden');

    if (!LOGO.classList.contains('logo__body-transform')) {
        LOGO.classList.toggle('logo__body-transform');
    }

    if(BURGER.classList.contains('--active')) {
        BURGER.classList.toggle('--active')

        MENU.classList.toggle('--show');
        MENU.classList.toggle('--hidden');

        SLIDER.classList.toggle('--show');
        SLIDER.classList.toggle('--hidden');
    }

    if((NEWS_BODY.classList.contains('news__body-show'))) {
        NEWS_BODY.classList.toggle('news__body-show');
        NEWS_BODY.classList.toggle('--hidden');

        SLIDER.classList.toggle('--show');
        SLIDER.classList.toggle('--hidden');
    }

    if(FULLSCREEN.classList.contains('fullscreen__back-1')) {
        FULLSCREEN.classList.toggle('fullscreen__back-1');
        FULLSCREEN.classList.toggle('fullscreen__back-3');
    } else if(FULLSCREEN.classList.contains('fullscreen__back-4')) {
        FULLSCREEN.classList.toggle('fullscreen__back-4');
        FULLSCREEN.classList.toggle('fullscreen__back-3');
    } else if(FULLSCREEN.classList.contains('fullscreen__back-2')) {
        FULLSCREEN.classList.toggle('fullscreen__back-2');
        FULLSCREEN.classList.toggle('fullscreen__back-3');
    }

    SLIDER.classList.toggle('--show');
    SLIDER.classList.toggle('--hidden');
}, false);

CONTACTS_CROSS.addEventListener('click', ()=>{
    if(BURGER.classList.contains('--active')) {
        BURGER.classList.remove('--active');

        
    }

    CONTACTS_BODY.classList.toggle('--show');  
    CONTACTS_BODY.classList.toggle('--hidden');
    CONTACTS_BUTTON.classList.toggle('--hidden');
    CONTACTS_BUTTON.classList.toggle('--show');

    FULLSCREEN.classList.toggle('fullscreen__back-1');
    FULLSCREEN.classList.toggle('fullscreen__back-3');

    SLIDER.classList.toggle('--show');
    SLIDER.classList.toggle('--hidden');

    LOGO.classList.toggle('logo__body-transform');
}, false);

/*NEWS_BUTTON.addEventListener('click', ()=>{
    NEWS_BODY.classList.toggle('--hidden');
    NEWS_BODY.classList.toggle('news__body-show');

    SLIDER.classList.toggle('--show');
    SLIDER.classList.toggle('--hidden');

    FULLSCREEN.classList.toggle('fullscreen__back-1');
    FULLSCREEN.classList.toggle('fullscreen__back-4');

    LOGO.classList.toggle('logo__body-transform');
}, false);*/

NEWS_CROSS.addEventListener('click', ()=>{
    NEWS_BODY.classList.toggle('--hidden');
    NEWS_BODY.classList.toggle('news__body-show');

    SLIDER.classList.toggle('--show');
    SLIDER.classList.toggle('--hidden');

    FULLSCREEN.classList.toggle('fullscreen__back-1');
    FULLSCREEN.classList.toggle('fullscreen__back-4');

    LOGO.classList.toggle('logo__body-transform');
}, false);

/* slider */

/*const scrollableElement = document.querySelector('.slider__track');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    console.log('UP');
  } else {
    console.log('Down');
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}*/

/*$(document).ready(function() {
    let position = 0;
    const SLIDES_TO_SHOW = 1;
    const SLIDES_TO_SCROLL = 1;
    const FULLSCREEN_SLIDER = $('.fullscreen__slider');
    const SLIDER_TRACK = $('.slider__track');
    const SLIDER_BLOCK = $('.slider__block');
    const SLIDER_ARROW_LEFT = $('.slider__arrow-left');
    const btnNext = $('.slider__arrow-right');
    const itemsCount = SLIDER_BLOCK.length;
    const itemWidth = FULLSCREEN_SLIDER.width() / SLIDES_TO_SHOW;
    const movePosition = SLIDES_TO_SCROLL * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function(){
        const itemsLeft = itemsCount- (Math.abs(position) + SLIDES_TO_SHOW * itemWidth) / itemWidth;

        position -= itemsLeft >= SLIDES_TO_SCROLL ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    SLIDER_ARROW_LEFT.click(function(){
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= SLIDES_TO_SCROLL ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    const setPosition = () => {
        SLIDER_TRACK.css({
            transform: `translateX(${position}px)`
        })
    }

    const checkBtns = () => {
        SLIDER_ARROW_LEFT.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= -(itemsCount - SLIDES_TO_SHOW) * itemWidth);
    }

    checkBtns();
})*/

$(document).ready(function() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.fullscreen__slider');
    const track = $('.slider__track');
    const item = $('.slider__block');
    const btnPrev = $('.slider__arrow-left');
    const btnNext = $('.slider__arrow-right');
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function(){
        const itemsLeft = itemsCount- (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    btnPrev.click(function(){
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        })
    }

    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
    }

    checkBtns();
})