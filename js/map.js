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
