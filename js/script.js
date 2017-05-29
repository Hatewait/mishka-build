var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

if (navMain.classList.contains("main-nav--nojs")) {
  navMain.classList.remove("main-nav--nojs");
  navToggle.classList.remove("main-nav__toggle--nojs");
  navToggle.classList.add("main-nav__toggle--open");
}

navToggle.addEventListener("click", function(event) {
  event.preventDefault();
  navMain.classList.toggle("main-nav--open");
  navToggle.classList.toggle("main-nav__toggle--close");
  navToggle.classList.toggle("main-nav__toggle--open");
});
