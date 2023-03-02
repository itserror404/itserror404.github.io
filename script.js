
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

// Toggle menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('clicked');
});


