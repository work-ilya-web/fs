import './import/svg4everybody';
import './import/lazyLoad';
import './import/objectFitImages';
import './import/dragstart';
import progressBar from './modules/scrollingProgressBar';
import switchDarkMode from './modules/switchDarkMode';
import modals from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    ('use strict');

    progressBar();
    switchDarkMode();
    modals();

    // Проверка элемента поиск

    const searchInput = document.querySelector('.popup-search__input'),
        popupSearch = document.querySelector('.popup-search'),
        mForm = document.querySelector('.m-menu__form__form'),
        form = document.querySelector('.popup-search__form'),
        mInput = document.querySelector('.m-menu__input'),
        mmenu = document.querySelector('.m-menu'),
        popupClose = document.querySelector('.popup-search .popup__close'),
        hamburger = document.querySelectorAll('.hamburger');

    function checkSearch(form, input, wrapp, hamb) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (input.value == '1') {
                wrapp.classList.remove('error');
                wrapp.classList.add('passed');
            } else {
                wrapp.classList.remove('passed');
                wrapp.classList.add('error');
            }
        });

        input.addEventListener('input', (c) => {
            if (input.value == '') {
                wrapp.classList.remove('error');
                wrapp.classList.remove('passed');
            }
        });

        popupClose.addEventListener('click', () => {
            input.value = '';
            wrapp.classList.remove('error');
            wrapp.classList.remove('passed');

            hamburger.forEach((el) => {
                el.classList.remove('hamburger--open');
            });
        });
    }

    checkSearch(mForm, mInput, mmenu);
    checkSearch(form, searchInput, popupSearch);

    hamburger.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.forEach((el) => {
                el.classList.toggle('hamburger--open');
            });
            mmenu.classList.toggle('open');
            document.body.classList.toggle('open');
            mInput.value = '';
            mmenu.classList.remove('error');
            mmenu.classList.remove('passed');
        });
    });

    const resizePopupSearch = () => {
        if (mmenu.classList.contains('open') && window.matchMedia('(min-width: 1200px)').matches) {
            mmenu.classList.remove('open');
            popupSearch.classList.add('active');
            hamburger.forEach((el) => {
                el.classList.add('hamburger--open');
            });

            if (mmenu.classList.contains('passed')) {
                mmenu.classList.remove('passed');
                popupSearch.classList.add('passed');
            } else if (mmenu.classList.contains('error')) {
                mmenu.classList.remove('error');
                popupSearch.classList.add('error');
            } else {
                popupSearch.classList.remove('passed');
                popupSearch.classList.remove('error');
                mmenu.classList.remove('passed');
                mmenu.classList.remove('error');
            }
        }
        if (popupSearch.classList.contains('active') && window.matchMedia('(max-width: 1200px)').matches) {
            popupSearch.classList.remove('active');
            mmenu.classList.add('open');
            hamburger.forEach((el) => {
                el.classList.add('hamburger--open');
            });

            if (popupSearch.classList.contains('passed')) {
                popupSearch.classList.remove('passed');
                mmenu.classList.add('passed');
            } else if (popupSearch.classList.contains('error')) {
                popupSearch.classList.remove('error');
                mmenu.classList.add('error');
            } else {
                popupSearch.classList.remove('passed');
                popupSearch.classList.remove('error');
                mmenu.classList.remove('passed');
                mmenu.classList.remove('error');
            }
        }
    };

    window.addEventListener('resize', resizePopupSearch);
});

import './import/polyfill';
