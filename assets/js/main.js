// ========================================
// MOBILE MENU TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
        });
    });
});

// ========================================
// GALLERY LIGHTBOX
// ========================================
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

// Close lightbox when clicking outside the image
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});

// ========================================
// FORM VALIDATION
// ========================================
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('error');
            isValid = false;
        } else {
            emailInput.classList.remove('error');
        }
    }

    return isValid;
}

// ========================================
// SMOOTH SCROLL FOR ANCHORS
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.product-card, .feature-card, .gallery-item');
    animatedElements.forEach(el => observer.observe(el));
});

// ========================================
// COUNTER ANIMATION (for statistics)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('[data-counter]');

    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => counterObserver.observe(counter));
});

// ========================================
// FILTER FUNCTIONALITY
// ========================================
function filterProducts(category) {
    const products = document.querySelectorAll('[data-category]');

    products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
            setTimeout(() => product.classList.add('show'), 10);
        } else {
            product.classList.remove('show');
            setTimeout(() => product.style.display = 'none', 300);
        }
    });

    // Update active filter button
    const filterBtns = document.querySelectorAll('[data-filter]');
    filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ========================================
// UTILITY: Set active nav link
// ========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ========================================
// CAROUSEL FUNCTIONALITY
// ========================================
class Carousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentSlide = 0;
        this.autoRotateInterval = null;
        this.autoRotateDelay = 5000; // 5 seconds

        if (this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        // Carousel buttons
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Start auto-rotation
        this.startAutoRotate();

        // Pause on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => this.stopAutoRotate());
            carouselContainer.addEventListener('mouseleave', () => this.startAutoRotate());
        }
    }

    showSlide(index) {
        // Ensure index is within bounds
        if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else {
            this.currentSlide = index;
        }

        // Update slides
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === this.currentSlide);
        });

        // Update indicators
        this.indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === this.currentSlide);
        });
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
        this.resetAutoRotate();
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
        this.resetAutoRotate();
    }

    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoRotate();
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => {
            this.showSlide(this.currentSlide + 1);
        }, this.autoRotateDelay);
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
        }
    }

    resetAutoRotate() {
        this.stopAutoRotate();
        this.startAutoRotate();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});

// ========================================
// LAZY LOADING IMAGES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    });
}
