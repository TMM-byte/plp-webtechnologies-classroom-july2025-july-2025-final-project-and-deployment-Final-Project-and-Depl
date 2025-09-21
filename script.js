// ===== Show default section on page load =====
document.addEventListener('DOMContentLoaded', () => {
  showSection('home-section');  // Show Home by default
  startCarousel();              // Start the image carousel
});

// ===== Navigation Section Toggle =====
function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.style.display = (section.id === sectionId) ? 'block' : 'none';
  });
}

// ===== Carousel for Home Page (fading images using <img>) =====
function startCarousel() {
  const images = document.querySelectorAll('#carousel .carousel-img');
  let currentIndex = 0;

  if (images.length === 0) return;

  // Make the first image visible
  images[currentIndex].classList.add('active');

  setInterval(() => {
    images[currentIndex].classList.remove('active'); // Hide current
    currentIndex = (currentIndex + 1) % images.length; // Next
    images[currentIndex].classList.add('active'); // Show next
  }, 3000);
}

// ===== Product Toggle Buttons (Animal / Farm) =====
function showProductType(type) {
  const animal = document.getElementById('animal-products');
  const farm = document.getElementById('farm-products');

  if (type === 'animal') {
    animal.style.display = 'grid';
    farm.style.display = 'none';
  } else {
    animal.style.display = 'none';
    farm.style.display = 'grid';
  }

  document.getElementById('animal-btn').classList.toggle('active', type === 'animal');
  document.getElementById('farm-btn').classList.toggle('active', type === 'farm');
}

// ===== Contact Form (Simple Alert) =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    contactForm.reset();
  });
}
