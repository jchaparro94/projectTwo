// Selectors
let header = document.querySelector('.header');
let navList = document.querySelector('.nav-list');
let timesButton = document.querySelector('.fa-times');
let burger = document.querySelector('.fa-bars');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function () {
  let windowPosition = window.scrollY > 50;
  header.classList.toggle('active', windowPosition)
})

// Hamburger Toggler
hamburgerMenu.addEventListener('click', function () {
  navList.classList.toggle('menu-open');
  timesButton.classList.toggle('show');
  burger.classList.toggle('hide');
});