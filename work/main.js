// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Mobile menu button functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
    // Add mobile menu functionality here
    console.log('Mobile menu clicked');
});

// Particle effect
const particlesContainer = document.querySelector('.particles-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${Math.random() > 0.5 ? '#5B21B6' : '#2563EB'};
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
    `;
    
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const angle = Math.random() * Math.PI * 2;
    const velocity = 1 + Math.random() * 2;
    
    particle.style.left = `${startX}%`;
    particle.style.top = `${startY}%`;
    
    particlesContainer.appendChild(particle);
    
    gsap.to(particle, {
        x: Math.cos(angle) * 100,
        y: Math.sin(angle) * 100,
        opacity: 1,
        duration: velocity,
        ease: "none",
        onComplete: () => {
            particle.remove();
        }
    });
}

// Create particles periodically
setInterval(createParticle, 200);

// Animate statistics numbers
const stats = document.querySelectorAll('.stat-item');

const observerOptions = {
    threshold: 0.5, // Triggers when 50% of the element is visible
    rootMargin: '-50px' // Adds a margin to when the observation triggers
};

stats.forEach(stat => {
    const value = parseInt(stat.dataset.value);
    const numberElement = stat.querySelector('.stat-number');
    
    // Reset initial value
    numberElement.textContent = '0+';
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Start counting animation
            let currentValue = 0;
            const duration = 2000;
            const increment = value / (duration / 16);

            function updateNumber() {
                if (currentValue < value) {
                    currentValue += increment;
                    if (currentValue > value) currentValue = value;
                    numberElement.textContent = Math.floor(currentValue).toLocaleString() + '+';
                    requestAnimationFrame(updateNumber);
                }
            }

            updateNumber();
            observer.disconnect(); // Stop observing after animation starts
        }
    }, observerOptions);

    observer.observe(stat);
});


// 3D Card Animation
const card = document.querySelector('.card-3d');
const cardWrapper = document.querySelector('.card-wrapper');
let isFlipped = false;

card.addEventListener('click', () => {
    isFlipped = !isFlipped;
    card.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
});

// Add this to your existing JavaScript
// Intersection Observer for feature cards animation
const featureCards = document.querySelectorAll('.feature-card');

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2
});

featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transitionDelay = `${index * 0.1}s`;
    featureObserver.observe(card);
});

// Add this to your JavaScript
const featureIcons = document.querySelectorAll('.feature-icon');

featureIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.6s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'rotate(0deg)';
    });
});


// Add to your existing JavaScript
// Animate code window on scroll
const codeWindow = document.querySelector('.code-window');
const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.3
});

codeObserver.observe(codeWindow);

// Typing animation for code
const codeContent = document.querySelector('.code-content code');
const codeText = codeContent.innerText;
codeContent.innerText = '';

function typeCode() {
    let i = 0;
    const typing = setInterval(() => {
        if (i < codeText.length) {
            codeContent.innerText += codeText.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 50);
}

// Start typing animation when code window is in view
const typeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeCode();
            typeObserver.disconnect();
        }
    });
});

typeObserver.observe(codeWindow);


// Add to your existing JavaScript
// Pricing Toggle Functionality
const billingToggle = document.getElementById('billingToggle');
const amounts = document.querySelectorAll('.amount');

billingToggle.addEventListener('change', () => {
    amounts.forEach(amount => {
        const monthly = parseFloat(amount.dataset.monthly);
        const annual = parseFloat(amount.dataset.annual);
        
        amount.textContent = billingToggle.checked ? annual : monthly;
        
        // Add animation
        amount.style.transform = 'scale(1.1)';
        setTimeout(() => {
            amount.style.transform = 'scale(1)';
        }, 200);
    });
});

// Animate pricing cards on scroll
const pricingCards = document.querySelectorAll('.pricing-card');
const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2
});

pricingCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transitionDelay = `${index * 0.1}s`;
    pricingObserver.observe(card);
});


// Add to your existing JavaScript
// Infinite logo scroll
const logoTrack = document.querySelector('.logo-track');
const logos = logoTrack.innerHTML;
logoTrack.innerHTML = logos + logos; // Duplicate logos for seamless scroll

// Testimonial cards animation
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2
});

testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transitionDelay = `${index * 0.1}s`;
    testimonialObserver.observe(card);
});

// Add to your existing JavaScript
// Animate CTA section on scroll
const ctaContent = document.querySelector('.cta-content');
const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2
});

ctaContent.style.opacity = '0';
ctaContent.style.transform = 'translateY(20px)';
ctaObserver.observe(ctaContent);
