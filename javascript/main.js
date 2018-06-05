var toggler = document.querySelector(".navbar-toggler");
var navbar = document.querySelector("#navbar-content");
var myWidth = document.body.clientWidth >= 991;

toggler.addEventListener("click", function () {
  navbar.classList.toggle("h-0");
});


