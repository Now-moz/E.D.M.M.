document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // Toggle menu visibility on hamburger click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
  });

  // Close the menu when clicking outside of it (optional)
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      hamburger.classList.remove("open");
      menu.classList.remove("open");
    }
  });
});
