const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

window.addEventListener('scroll', () => {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.style.background = 'rgba(0,0,0,0.8)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.4)';
  }
});