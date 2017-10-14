var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var modal = document.querySelector(".add-to-cart");
var overlay = document.querySelector(".overlay");
var button = document.querySelector(".product__btn");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("overlay--show");
  modal.classList.add("add-to-cart--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("add-to-cart--show")) {
      modal.classList.remove("add-to-cart--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  if (modal.classList.contains("add-to-cart--show")) {
    modal.classList.remove("add-to-cart--show");
    overlay.classList.remove("overlay--show");
  }
});
