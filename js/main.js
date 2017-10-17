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
var button;

if (document.querySelector(".product__btn")) {
  button = document.querySelector(".product__btn");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("overlay--show");
    modal.classList.add("add-to-cart--show");
  });

} else {
  var buttons = document.querySelectorAll(".product-card__btn");
  var i;

  for (i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      overlay.classList.add("overlay--show");
      modal.classList.add("add-to-cart--show");
    });
  };

};

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

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.93863106417265,30.3230545],
    zoom: 17,
    controls: []
  });

  var myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545],
  {
    hintContent: "Наш офис"
  },
  {
    iconLayout: "default#image",
    iconImageHref: "img/icon/icon-map-pin.svg",
    iconImageSize: [66, 101],
    iconImageOffset: [-25, -85]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add("zoomControl");
  myMap.behaviors.disable("scrollZoom");
}
