console.log("Hello, World!");

const myName = "Ahmed Kamel";
console.log(myName);

// const h1 = document.querySelector("h1");
const h1 = document.querySelector(".primary-heading");
console.log(h1);

h1.addEventListener("click", function () {
  // h1.textContent = "Hello, World!";
  h1.style.transition = "all 0.5s";
  h1.textContent = myName;
  h1.style.color = "red";
  h1.style.backgroundColor = "yellow";
  h1.style.transform = "scale(1.5)";
});

const yearSpan = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
