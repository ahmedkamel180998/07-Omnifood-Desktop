const yearSpan = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const navToggle = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");
navToggle.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
