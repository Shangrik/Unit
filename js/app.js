
// НАВИГАЦИОННОЕ МЕНЮ И ЕГО ПОВЕДЕНИЕ 
// иконка навигации
const nav = document.querySelector('.nav-btn');
//Навигация 
const navMenu = document.querySelector('.nav-menu');

// Все ссылки навигации
const navLinks = document.querySelectorAll('.nav-menu__link');
// Клик по иконке навигации
nav.addEventListener('click', function () {
    this.classList.toggle('nav-btn--active');
    navMenu.classList.toggle('nav-menu--active');
});

// Кликаем по ссылке навигации, убираем активную иконку и активное меню
navLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        nav.classList.remove('nav-btn--active');
        navMenu.classList.remove('nav-menu--active');
    });
});

// ФОРМА ПОИСКА И ЕЕ ПОВЕДЕНИЕ
const form = document.querySelector('.search');
const formBtn = document.querySelector('.search__button');
const fade = document.querySelector('body');

formBtn.addEventListener('click', function (e) {
    if (!(form.classList.contains('search--active'))) {
        e.preventDefault();
        form.classList.toggle('search--active');
    }


});

fade.addEventListener('click', function () {
    if (form.classList.contains('search--active')) {
        form.classList.remove('search--active');
    }
});

form.addEventListener('click', function (e) {
    e.stopPropagation();
});

// slide up

const arrow = document.querySelector('.slideup');
// arrow.style.opac = '0';



document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 500) {
            arrow.style.display = 'block';
            arrow.style.zIndex = '100';
        } else {
            arrow.style.display = 'none';
        }
    });
});


