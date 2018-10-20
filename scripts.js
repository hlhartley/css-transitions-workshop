var headerText = document.querySelector('.header-text');
var headerBtn = document.querySelector('.header-btn');
var modal = document.querySelector('.modal');
var modalBtn = document.querySelector('.caret-wrapper')
var hamburger = document.querySelector('.hamburger');

headerBtn.addEventListener('click', toggleHeader);
modalBtn.addEventListener('click', toggleModal);
hamburger.addEventListener('click', toggleHamburger);

function toggleHeader() {
  headerText.classList.toggle('toggled-header')
}

function toggleModal() {
  modal.classList.toggle('toggled-modal')
}

function toggleHamburger() {
  hamburger.classList.toggle('toggled-hamburger');
}