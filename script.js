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