// Mobile menu closure for the new simplified navigation (optional but good for future-proofing)
document.querySelectorAll('.nav-links-simple a').forEach(link => {
    link.addEventListener('click', () => {
        // Any logic needed when a link is clicked
    });
});

// Intersection Observer for scroll animations (Fade-in elements)
const fadeElements = document.querySelectorAll('.fade-element');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(imgId, title, description) {
    const imgElement = document.getElementById(imgId);
    lightboxImg.src = imgElement.src;
    lightboxCaption.innerHTML = `<strong>${title}</strong><br>${description}`;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        closeLightbox();
    }
});
