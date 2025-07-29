// Memories Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Gallery filtering functionality
    initGalleryFiltering();
    
    // Initialize slideshow
    initSlideshow();
    
    // Initialize image modal
    initImageModal();
    
    // Initialize lazy loading for gallery images
    initLazyLoading();
});

// Gallery filtering
function initGalleryFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function initSlideshow() {
    // Auto-advance slideshow
    setInterval(() => {
        changeSlide(1);
    }, 8000);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    });
}

function changeSlide(direction) {
    // Hide current slide
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Calculate new slide index
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Show new slide
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

function currentSlide(n) {
    // Hide current slide
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Set new slide index
    currentSlideIndex = n - 1;
    
    // Show new slide
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

// Image modal functionality
let currentModalImageIndex = 0;
let modalImages = [];

function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    // Collect all gallery images
    modalImages = Array.from(galleryImages).map(item => {
        const img = item.querySelector('img');
        const info = item.querySelector('.gallery-info');
        return {
            src: img.src.replace('w=500', 'w=1200'), // Get higher resolution
            alt: img.alt,
            title: info ? info.querySelector('h3').textContent : '',
            description: info ? info.querySelector('p').textContent : ''
        };
    });
    
    // Add click event to gallery images
    galleryImages.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentModalImageIndex = index;
            showModal();
        });
    });
    
    // Close modal events
    closeBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                hideModal();
            } else if (e.key === 'ArrowLeft') {
                modalPrevImage();
            } else if (e.key === 'ArrowRight') {
                modalNextImage();
            }
        }
    });
    
    function showModal() {
        const currentImage = modalImages[currentModalImageIndex];
        modalImg.src = currentImage.src;
        modalImg.alt = currentImage.alt;
        modalCaption.innerHTML = `
            <h3>${currentImage.title}</h3>
            <p>${currentImage.description}</p>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function hideModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function modalPrevImage() {
    currentModalImageIndex--;
    if (currentModalImageIndex < 0) {
        currentModalImageIndex = modalImages.length - 1;
    }
    updateModalImage();
}

function modalNextImage() {
    currentModalImageIndex++;
    if (currentModalImageIndex >= modalImages.length) {
        currentModalImageIndex = 0;
    }
    updateModalImage();
}

function updateModalImage() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const currentImage = modalImages[currentModalImageIndex];
    
    // Add fade effect
    modalImg.style.opacity = '0';
    
    setTimeout(() => {
        modalImg.src = currentImage.src;
        modalImg.alt = currentImage.alt;
        modalCaption.innerHTML = `
            <h3>${currentImage.title}</h3>
            <p>${currentImage.description}</p>
        `;
        modalImg.style.opacity = '1';
    }, 150);
}

// Lazy loading for gallery images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// Add some romantic particle effects
function createRomanticParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'romantic-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particleContainer);
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            const particle = document.createElement('div');
            const isHeart = Math.random() > 0.5;
            
            if (isHeart) {
                particle.innerHTML = '❤️';
                particle.style.fontSize = (Math.random() * 8 + 12) + 'px';
            } else {
                particle.innerHTML = '✨';
                particle.style.fontSize = (Math.random() * 6 + 10) + 'px';
            }
            
            particle.style.cssText += `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: 100%;
                opacity: ${Math.random() * 0.7 + 0.3};
                animation: floatUpParticle ${Math.random() * 4 + 3}s linear forwards;
                pointer-events: none;
            `;
            
            particleContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 7000);
        }
    }, 1500);
}

// Initialize romantic particles
createRomanticParticles();

// Add particle animation styles
const particleStyles = `
@keyframes floatUpParticle {
    0% {
        transform: translateY(0) rotate(0deg) scale(1);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg) scale(0.5);
        opacity: 0;
    }
}

.gallery-image img.loaded {
    animation: imageLoad 0.6s ease-out;
}

@keyframes imageLoad {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Touch gestures for mobile */
@media (max-width: 768px) {
    .slideshow-container {
        touch-action: pan-y;
    }
    
    .modal-content {
        touch-action: pan-y;
    }
}
`;

// Add particle styles to document
const particleStyleSheet = document.createElement('style');
particleStyleSheet.textContent = particleStyles;
document.head.appendChild(particleStyleSheet);

// Touch gestures for mobile slideshow
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.slideshow-container')?.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.slideshow-container')?.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - next slide
            changeSlide(1);
        } else {
            // Swiped right - previous slide
            changeSlide(-1);
        }
    }
}