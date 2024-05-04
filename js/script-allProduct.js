var btnSearch = document.querySelector('.search-btn');

var pagSearch = document.querySelector('.search');
var hearder = document.querySelector('header');
var main = document.querySelector('.main');
var closeSearch = document.querySelector('.closeSearch');


var abrirMenuNav = document.querySelector('.menu-nav-pag');
var menuNav = document.querySelector('nav');
var menuNavHeader = document.querySelector('header');
var fecharMenuNav = document.querySelector('.close-nav');

var btnProfile = document.querySelector('.profile-user-btn');
var pagProfileUser = document.querySelector('.profile-user');
var closeProfileUser = document.querySelector('.closeProfile');

btnProfile.addEventListener('click', function(){
    pagProfileUser.classList.add('active-profile');
    hearder.classList.add('active-search');
    main.classList.add('active-search');
    menuNav.classList.remove('active-menu-nav');
    menuNavHeader.classList.remove('active-menu-nav');
});

closeProfileUser.addEventListener('click', function(){
    pagProfileUser.classList.remove('active-profile');
    hearder.classList.remove('active-search');
    main.classList.remove('active-search');
    menuNav.classList.remove('active-menu-nav');
    menuNavHeader.classList.remove('active-menu-nav');
});

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
  main.classList.add('active-search');
  menuNavHeader.classList.add('active-menu-nav');
});

fecharMenuNav.addEventListener('click', function(){
  menuNav.classList.remove('active-menu-nav');
  main.classList.remove('active-search');
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

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('loading').style.display = 'flex';
});

document.getElementById('overlay').classList.remove('hidden');

setTimeout(function(){
    document.getElementById('loading').style.display = 'none';
    document.getElementById('overlay').classList.add('hidden');
}, 3000);