/* ==========================================
   MAIN.JS - Homepage JavaScript
   Maimuna Zaheer - AI Policy • Tech Governance • Blog
   ========================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Smooth Scrolling for Navigation Links
    // ==========================================
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset to account for sticky header
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Newsletter Form Handling
    // ==========================================
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Basic email validation
            const email = emailInput.value.trim();
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Update button state
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            // Simulate newsletter signup (replace with actual API call)
            setTimeout(() => {
                // Reset form
                emailInput.value = '';
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                
                // Show success message
                showMessage('Thanks for subscribing! You\'ll hear from me when I publish new posts.', 'success');
            }, 1500);
        });
    }

    // ==========================================
    // Active Navigation Highlighting
    // ==========================================
    function updateActiveNav() {
        const sections = document.querySelectorAll('.section[id]');
        const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
        
        let currentSection = '';
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // ==========================================
    // Project Card Animations
    // ==========================================
    function animateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        projectCards.forEach((card, index) => {
            // Initial state for animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            
            observer.observe(card);
        });
    }

    // ==========================================
    // Utility Functions
    // ==========================================
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show temporary messages
    function showMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.temp-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create new message element
        const messageEl = document.createElement('div');
        messageEl.className = `temp-message temp-message--${type}`;
        messageEl.textContent = message;
        
        // Style the message
        Object.assign(messageEl.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '4px',
            color: '#ffffff',
            fontSize: '0.9rem',
            zIndex: '1000',
            maxWidth: '300px',
            opacity: '0',
            transform: 'translateX(100%)',
            transition: 'all 0.3s ease'
        });
        
        // Set background color based on type
        if (type === 'success') {
            messageEl.style.backgroundColor = '#8a68c1';
        } else if (type === 'error') {
            messageEl.style.backgroundColor = '#e74c3c';
        } else {
            messageEl.style.backgroundColor = '#333333';
        }
        
        // Add to page
        document.body.appendChild(messageEl);
        
        // Animate in
        setTimeout(() => {
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 4000);
    }

    // ==========================================
    // Initialize Features
    // ==========================================
    
    // Set up scroll listener for active nav
    window.addEventListener('scroll', updateActiveNav);
    
    // Initialize project card animations
    animateProjectCards();
    
    // Add CSS for active nav state
    const style = document.createElement('style');
    style.textContent = `
        .navbar a.active {
            color: #8a68c1 !important;
            border-bottom-color: #8a68c1 !important;
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // Mobile Menu Toggle (if needed in future)
    // ==========================================
    
    // Add mobile menu functionality if viewport is small
    function handleMobileMenu() {
        const navbar = document.querySelector('.navbar');
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            // Add mobile menu toggle functionality here if needed
            // For now, the CSS handles responsive layout
        }
    }
    
    window.addEventListener('resize', handleMobileMenu);
    handleMobileMenu(); // Initial call

    // ==========================================
    // Performance: Smooth Scroll Polyfill Check
    // ==========================================
    
    // Check if smooth scrolling is supported
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Add polyfill or fallback for older browsers
        console.log('Smooth scrolling not natively supported, using fallback');
    }

    console.log('Homepage JavaScript initialized successfully');
});

// ==========================================
// External Link Handling
// ==========================================

// Add external link indicators and handling
document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        // Add subtle indication for external links
        link.style.position = 'relative';
        
        // Add click tracking if analytics is available
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            console.log('External link clicked:', href);
            
            // Add analytics tracking here if needed
            // gtag('event', 'click', { 'event_category': 'external_link', 'event_label': href });
        });
    });
}); 