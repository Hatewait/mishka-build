var popupOpenLink = document.querySelector(".popup-open-link");
var popup = document.querySelector(".popup");
var popupOverlay = document.querySelector(".popup__overlay");
var productBuy = document.querySelectorAll(".catalog__add-link");
var ESCAPE_KEY_CODE = 27;

if (popupOpenLink) {
  popupOpenLink.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup--show");
  });
}
popupOverlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--show");
});

for (var i = 0; i < productBuy.length; i++) {
  productBuy[i].addEventListener("click", function(event) {
    event.preventDefault();
    if (popup) {
      popup.classList.add("popup--show");
    }
  });
}

var setupKeyDownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    popup.classList.remove("popup--show");
  }
};

document.addEventListener('keydown', function () {
  setupKeyDownHandler(event);
});