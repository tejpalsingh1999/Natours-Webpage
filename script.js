'use strict';
//popup, popup__content, popu__close, btn btn--white, btn--popup

const button = document.querySelectorAll('.btn--popup');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');



for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        popup.classList.add('popup--hidden');
    });
}

const closeBar = function () {
    popup.classList.remove('popup--hidden');
}

close.addEventListener('click', closeBar);
popup.addEventListener('click', closeBar);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup.classList.contains('popup--hidden')) {
        closeBar();

    }
})

