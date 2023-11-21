var btnSearch = document.querySelector('.search-btn');
var pagSearch = document.querySelector('.search');
var hearder = document.querySelector('header');
var closeSearch = document.querySelector('.closeSearch');


var abrirMenuNav = document.querySelector('.menu-nav');
var menuNav = document.querySelector('nav');
var menuNavHeader = document.querySelector('header');
var fecharMenuNav = document.querySelector('.close-nav');


btnSearch.addEventListener('click', function(){
    pagSearch.classList.add('active-search');
    hearder.classList.add('active-search');
    menuNav.classList.remove('active-menu-nav');
    menuNavHeader.classList.remove('active-menu-nav');
});

closeSearch.addEventListener('click', function(){
    pagSearch.classList.remove('active-search');
    hearder.classList.remove('active-search');
    menuNav.classList.remove('active-menu-nav');
    menuNavHeader.classList.remove('active-menu-nav');
});



abrirMenuNav.addEventListener('click', function(){
    menuNav.classList.add('active-menu-nav');
    menuNavHeader.classList.add('active-menu-nav');
});

fecharMenuNav.addEventListener('click', function(){
    menuNav.classList.remove('active-menu-nav');
    menuNavHeader.classList.remove('active-menu-nav');
});

// modo
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bi-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi-moon' : 'bi-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bi-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// swiper 1
var swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    // },
});
