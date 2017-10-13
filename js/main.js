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
