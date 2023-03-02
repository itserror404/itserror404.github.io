// This code is optional and used for preloading images for better user experience
const images = ['project1.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg'];

function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
  }
}

window.onload = preloadImages;


// Toggle menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('clicked');
});
