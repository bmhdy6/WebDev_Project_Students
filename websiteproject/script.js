// Sidenav Functions
function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
  document.querySelector("main").style.marginLeft = "250px";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector("main").style.marginLeft = "0";
}

// Slideshow Functions
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
