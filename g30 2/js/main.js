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

let position = 0;
const SLIDES_TO_SHOW = 1,
    SLIDES_TO_SCROLL = 1,
    FULLSCREEN_SLIDER = document.querySelector('.fullscreen__slider'),
    SLIDER_TRACK = document.querySelector('.slider__track'),
    SLIDER_BLOCK = document.querySelectorAll('.slider__block'),
    SLIDER_ARROW_LEFT = document.querySelector('.slider__arrow-left'),
    SLIDER_ARROW_RIGHT = document.querySelector('.slider__arrow-right'),
    SLIDER_BLOCK_COUNT = SLIDER_BLOCK.length,
    SLIDER_BLOCK_WIDTH = /*FULLSCREEN_SLIDER.clientWidth / SLIDES_TO_SHOW*/1445,
    MOVE_POSITION = SLIDES_TO_SCROLL * SLIDER_BLOCK_WIDTH;

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

    if(FULLSCREEN.classList.contains('fullscreen__back-sliders')) {
        FULLSCREEN.classList.toggle('fullscreen__back-sliders');
        BURGER.classList.remove('header__burger-black');
        SLIDER_ARROW_LEFT.classList.add('--hidden');
        SLIDER_ARROW_LEFT.classList.remove('slider__arrow-black');
        SLIDER_ARROW_RIGHT.classList.remove('slider__arrow-black');
        SLIDER.classList.add('--show');
        position = 0;
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

    if(FULLSCREEN.classList.contains('fullscreen__back-sliders')) {
        FULLSCREEN.classList.toggle('fullscreen__back-sliders');
        BURGER.classList.remove('header__burger-black');
        SLIDER_ARROW_LEFT.classList.add('--hidden');
        SLIDER_ARROW_LEFT.classList.remove('slider__arrow-black');
        SLIDER_ARROW_RIGHT.classList.remove('slider__arrow-black');
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

NEWS_BUTTON.addEventListener('click', ()=>{
    NEWS_BODY.classList.toggle('--hidden');
    NEWS_BODY.classList.toggle('news__body-show');

    SLIDER.classList.toggle('--show');
    SLIDER.classList.toggle('--hidden');

    FULLSCREEN.classList.toggle('fullscreen__back-1');
    FULLSCREEN.classList.toggle('fullscreen__back-4');

    LOGO.classList.toggle('logo__body-transform');
}, false);

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

const LOGO_IMG = document.querySelector('.logo__img');

SLIDER_BLOCK.forEach(item => {
    item.style.minWidth = `${SLIDER_BLOCK_WIDTH}px`;
})

SLIDER_TRACK.addEventListener('wheel', event => {
    function checkScrollDirectionIsUp (event) {
        if (event.wheelDelta) {return event.wheelDelta > 0;}
        
        return event.deltaY < 0;
    }

    if (checkScrollDirectionIsUp(event)) {
        const itemsLeft = SLIDER_BLOCK_COUNT- (Math.abs(position) + SLIDES_TO_SHOW * SLIDER_BLOCK_WIDTH) / SLIDER_BLOCK_WIDTH;

        position -= itemsLeft >= SLIDES_TO_SCROLL ? MOVE_POSITION : itemsLeft * SLIDER_BLOCK_WIDTH;

        SET_POSITION();
        CHECK_BUTTONS();
    } else {
        const itemsLeft = Math.abs(position) / SLIDER_BLOCK_WIDTH;

        position += itemsLeft >= SLIDES_TO_SCROLL ? MOVE_POSITION : itemsLeft * SLIDER_BLOCK_WIDTH;

        SET_POSITION();
        CHECK_BUTTONS();
    }
}, false);

SLIDER_ARROW_RIGHT.addEventListener('click', () => {
    const itemsLeft = SLIDER_BLOCK_COUNT- (Math.abs(position) + SLIDES_TO_SHOW * SLIDER_BLOCK_WIDTH) / SLIDER_BLOCK_WIDTH;

    position -= itemsLeft >= SLIDES_TO_SCROLL ? MOVE_POSITION : itemsLeft * SLIDER_BLOCK_WIDTH;

    /*let img = document.createElement('img');
    img.setAttribute('src', 'img/backs/black_logo.svg');
    LOGO.setAttribute('class', 'logo__body-black-transform');

    LOGO.removeChild(LOGO_IMG);
    LOGO.appendChild(img);*/

    SET_POSITION();
    CHECK_BUTTONS();
})

SLIDER_ARROW_LEFT.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / SLIDER_BLOCK_WIDTH;

    position += itemsLeft >= SLIDES_TO_SCROLL ? MOVE_POSITION : itemsLeft * SLIDER_BLOCK_WIDTH;

    SET_POSITION();
    CHECK_BUTTONS();
})

const SET_POSITION = () => {SLIDER_TRACK.style.transform = `translateX(${position}px)`;}

const CHECK_BUTTONS = () => {
    if(position === 0) {
        SLIDER_ARROW_LEFT.classList.add('--hidden');
        FULLSCREEN.classList.remove('fullscreen__back-sliders');
        SLIDER_ARROW_LEFT.classList.remove('slider__arrow-black');
        SLIDER_ARROW_RIGHT.classList.remove('slider__arrow-black');
        BURGER.classList.remove('header__burger-black');
    }
    else {
        SLIDER_ARROW_LEFT.classList.remove('--hidden');
        FULLSCREEN.classList.add('fullscreen__back-sliders');
        SLIDER_ARROW_LEFT.classList.add('slider__arrow-black');
        SLIDER_ARROW_RIGHT.classList.add('slider__arrow-black');
        BURGER.classList.add('header__burger-black');
    }

    if (position <= -(SLIDER_BLOCK_COUNT - SLIDES_TO_SHOW) * SLIDER_BLOCK_WIDTH) {
        SLIDER_ARROW_RIGHT.classList.add('--hidden');
        SLIDER_ARROW_LEFT.classList.add('slider__arrow-black');
    }
    else {SLIDER_ARROW_RIGHT.classList.remove('--hidden');}
}

CHECK_BUTTONS();