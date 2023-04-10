// image slider
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");
let currentSlide = 0;

function slideImages() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides[currentSlide].classList.add("active");
  contents[currentSlide].classList.add("active");
}
const interval = 6000; // duration of the slide
setInterval(slideImages, interval); // automatically change the slide
