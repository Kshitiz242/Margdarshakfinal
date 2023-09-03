const sections = document.querySelectorAll('.section');
const delayInterval = 750; 

document.addEventListener('DOMContentLoaded', () => {
  animateSections();
});

function animateSections() {
  sections.forEach((section, index) => {
    const delay = index * delayInterval;
    setTimeout(() => {
      section.style.transform = 'translateY(0)';
      section.style.opacity = '1';
    }, delay);
  });
}
