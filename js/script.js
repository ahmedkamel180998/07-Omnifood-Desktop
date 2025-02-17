const yearSpan = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const navToggle = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");
navToggle.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll("a:link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const scrolledSection = document.querySelector(href);
      scrolledSection.scrollIntoView({ behavior: "smooth" });
    }

    if (header.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
    }
  });
});

const heroSection = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(heroSection);
