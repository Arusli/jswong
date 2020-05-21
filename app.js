let toggleState = 'hidden';

function toggleNav() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');

    if (toggleState === 'hidden') {
    sidebar.style.visibility = 'visible';
    sidebar.style.width = '200px';
    toggleState = 'visible';
    } else {
    sidebar.style.width = '0px';
    sidebar.style.visibility = 'hidden';
    toggleState = 'hidden';
    }
}

function toggleMenu() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');

    menu.style.display = 'block';
    contact.style.display = 'none';
    home.style.display = 'none';
    sidebar.style.visibility = 'hidden';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}

function toggleContact() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');

    menu.style.display = 'none'
    contact.style.display = 'block';
    home.style.display = 'none';
    sidebar.style.visibility = 'hidden';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}

function toggleYelp() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');
    let yelpLi = document.querySelector('.yelp-li')

    sidebar.style.visibility = 'hidden';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}

function toggleLogo() {
    let burger = document.querySelector('.burger-container');
    let sidebar = document.querySelector('.sidebar');
    let menuLi = document.querySelector('.menu-li');
    let menu = document.querySelector('.menu');
    let contactLi = document.querySelector('.contact-li');
    let contact = document.querySelector('.contact');
    let home = document.querySelector('.home');

    menu.style.display = 'none'
    contact.style.display = 'none';
    home.style.display = 'flex';
    sidebar.style.visibility = 'hidden';
    sidebar.style.width = '0px';
    toggleState = 'hidden';
}