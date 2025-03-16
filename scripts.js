// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Reveal animation
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    // Initial check for elements in view
    reveal();
    
    // Add scroll event listener
    window.addEventListener('scroll', reveal);

    // UI Gallery Lightbox
    const gallery = document.querySelector('.gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentImageIndex = 0;
    const images = [

        'fireai.png',

        'eco.png',
      'yamahaf2.png',
        'zengarden.png',
        
        '13.png',
        'yamahaf.png',
        'cypherof.png',
        
        'port1.png',
        'port2.png',
        '14.png',
        'hoodie.png',
        
        '15.png'
       
        
    ];

    // Dynamically add gallery images
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery image ${index + 1}`;
        img.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(img);
    });

    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[currentImageIndex];
        lightbox.classList.add('active');
    }

    // Close lightbox
    document.querySelector('.close').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Previous image
    document.querySelector('.prev').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex];
    });

    // Next image
    document.querySelector('.next').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex];
    });
});
document.body.classList.add('js-loaded');




document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Prevent scrolling when menu is open
    });

    // Close menu when clicking a link
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('.back-to-top');
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // If using mobile menu, close it after clicking
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
});


// JavaScript for Filter Toggle
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.id.replace('-filter', ''); // "all", "ui", or "web"
    
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');

    // Show/hide projects
    projectItems.forEach(item => {
      if (filter === 'all') {
        item.classList.remove('hidden');
      } else {
        item.classList.toggle('hidden', !item.classList.contains(filter));
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];
  
    // Get all elements with class 'enlarge'
    const enlargeElements = document.querySelectorAll('.enlarge');
  
    enlargeElements.forEach(function(elem) {
      elem.onclick = function(e) {
        e.preventDefault(); // Prevent default link behavior
        modal.style.display = 'block';
        modalImg.src = this.getAttribute('data-img');
      }
    });
  
    // Close the modal when clicking on the (x)
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }
  
    // Close the modal when clicking outside the image
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });
