const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("mobileMenu");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll("#mobileMenu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});
