function showAbout() {
    const aboutSection = document.getElementById('about-section');
    aboutSection.classList.toggle('hidden'); // Toggles the "hidden" class
}





// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', (e) => {
        if (e.target.getAttribute('href') === '#scholarship') {
          e.preventDefault();
          document.querySelector('#scholarship').scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  