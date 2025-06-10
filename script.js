// Keep this as-is
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('active');
}

// NEW: Toggle 'clicked' class on experience boxes when clicked
document.addEventListener('DOMContentLoaded', () => {
  const experienceBoxes = document.querySelectorAll('.experience-box');
  experienceBoxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('clicked');
    });
  });
});
