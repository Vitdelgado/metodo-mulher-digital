// Método Mulher no Digital - Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.module-item, .testimonial-card, .pricing-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // CTA button click handlers
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processando...';
            this.disabled = true;
            
            // Simulate processing (in real implementation, this would handle the purchase)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                
                // In a real implementation, this would redirect to payment gateway
                alert('Em uma implementação real, você seria redirecionado para o gateway de pagamento.');
            }, 2000);
        });
    });

    // Track user engagement
    let scrollPercent = 0;
    let maxScroll = 0;
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        scrollPercent = Math.round((scrollTop / documentHeight) * 100);
        maxScroll = Math.max(maxScroll, scrollPercent);
        
        // Track engagement milestones
        if (maxScroll >= 25 && !sessionStorage.getItem('milestone_25')) {
            sessionStorage.setItem('milestone_25', 'true');
            console.log('User engagement: 25% of page viewed');
        }
        
        if (maxScroll >= 50 && !sessionStorage.getItem('milestone_50')) {
            sessionStorage.setItem('milestone_50', 'true');
            console.log('User engagement: 50% of page viewed');
        }
        
        if (maxScroll >= 75 && !sessionStorage.getItem('milestone_75')) {
            sessionStorage.setItem('milestone_75', 'true');
            console.log('User engagement: 75% of page viewed');
        }
    });

    // Add hover effects to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('premium-card')) {
                this.style.transform = 'translateY(-10px) scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Module items click interaction
    const moduleItems = document.querySelectorAll('.module-item');
    
    moduleItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle pulse effect when clicked
            this.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });

    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Form validation (if forms are added later)
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Lazy loading for images (if added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
            
            // Track Core Web Vitals
            if ('web-vital' in window) {
                // This would integrate with actual Core Web Vitals library
                console.log('Core Web Vitals tracking enabled');
            }
        });
    }

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // In production, this would send error reports to monitoring service
    });

    // Accessibility improvements
    document.addEventListener('keydown', function(e) {
        // Skip to main content with keyboard shortcut
        if (e.altKey && e.key === 'm') {
            const mainContent = document.querySelector('main') || document.querySelector('.hero-section');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Add focus indicators for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    console.log('Método Mulher no Digital - Landing Page loaded successfully');
});

// External API integrations (placeholder for future features)
const MMDLanding = {
    // Analytics tracking
    trackEvent: function(eventName, eventData = {}) {
        console.log('Event tracked:', eventName, eventData);
        // Integration with Google Analytics, Facebook Pixel, etc.
    },
    
    // Lead capture
    captureEmail: function(email) {
        if (this.validateEmail(email)) {
            console.log('Email captured:', email);
            // Integration with email marketing platform
            return true;
        }
        return false;
    },
    
    // Payment processing
    initiateCheckout: function(product, price) {
        console.log('Checkout initiated:', product, price);
        // Integration with payment gateway (Stripe, PayPal, etc.)
    },
    
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};

// Make MMDLanding globally available
window.MMDLanding = MMDLanding;
