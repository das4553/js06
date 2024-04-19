function time() {
  let now = new Date();
  let hours = now.getHours();
  let time = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  let minutes = now.getMinutes().toString().padStart(2, 0);
  let seconds = now.getSeconds().toString().padStart(2, 0);
  let timeString = `${hours}:${minutes}:${seconds} ${time}`;
  document.getElementById("clock").textContent = timeString;
}
time();
setInterval(time, 100);

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slidesWrapper = document.querySelector(".slides-wrapper");
const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");
let currentSlide = 0;

function loadSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");

slide1.addEventListener("click", () => {
  loadSlides();
  currentSlide = 0;
});
slide2.addEventListener("click", () => {
  loadSlides();
  currentSlide = 1;
});
slide3.addEventListener("click", () => {
  loadSlides();
  currentSlide = 2;
});
slide4.addEventListener("click", () => {
  loadSlides();
  currentSlide = 3;
});

function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  loadSlides();
}

function goToPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide -= 1;
  }
  loadSlides();
}

loadSlides();

sliderIntervalId = setInterval(goToNextSlide, 5000);

slidesWrapper.addEventListener("mouseenter", () => {
  clearInterval(sliderIntervalId);
});

slidesWrapper.addEventListener("mouseleave", () => {
  sliderIntervalId = setInterval(goToNextSlide, 5000);
});
