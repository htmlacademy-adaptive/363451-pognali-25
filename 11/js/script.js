const mainHeader = document.querySelector(".main-header");

const mainToggle = document.querySelector(".main-header__toggle");

mainHeader.classList.remove("main-header--nojs");

mainToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains("main-header--opened")) {
    mainHeader.classList.remove("main-header--opened");
    mainHeader.classList.add("main-header--closed");
  } else {
    mainHeader.classList.remove("main-header--closed");
    mainHeader.classList.add("main-header--opened");
  }
});

const rateButton = document.querySelector(".rate__button");
const modalBusiness = document.querySelector(".modal-business");
const rateButtonClose = document.querySelector(".rate-business__button");

rateButton.addEventListener('click', function (event) {
  event.preventDefault();
  modalBusiness.classList.add('modal-business__open')
  })

rateButtonClose.addEventListener('click', function (event) {
  event.preventDefault();
  modalBusiness.classList.remove('modal-business__open')
  })
