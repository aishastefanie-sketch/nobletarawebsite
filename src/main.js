document.addEventListener('DOMContentLoaded', () => {
  // NAVBAR SCROLL & ACTIVE STATE
  const nav = document.querySelector('.navbar');
  if (nav && !nav.classList.contains('always-scrolled')) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 80);
    });
  }

  // SET ACTIVE LINK
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
      link.style.color = 'var(--teal)';
    }
  });

  // MOBILE MENU
  const hamburger = document.querySelector('.hamburger');
  const closeBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu-overlay');

  if (hamburger && closeBtn && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('active'));
    closeBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
  }

  // SCROLL ANIMATIONS (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // LIGHTBOX LOGIC
  const lightboxOverlay = document.querySelector('.lightbox-overlay');
  if (lightboxOverlay) {
    const lightboxImg = lightboxOverlay.querySelector('.lightbox-img');
    const lightboxCounter = lightboxOverlay.querySelector('.lightbox-counter');
    const closeLightboxBtn = lightboxOverlay.querySelector('.lightbox-close');
    const prevBtn = lightboxOverlay.querySelector('.lightbox-prev');
    const nextBtn = lightboxOverlay.querySelector('.lightbox-next');
    
    let galleryImages = Array.from(document.querySelectorAll('img[data-lightbox-src]'));
    let currentIndex = 0;

    const updateLightbox = () => {
      lightboxImg.src = galleryImages[currentIndex].getAttribute('data-lightbox-src');
      lightboxCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    };

    const openLightbox = (index) => {
      currentIndex = index;
      updateLightbox();
      lightboxOverlay.classList.add('active');
    };

    const closeLightbox = () => lightboxOverlay.classList.remove('active');
    const nextImage = () => { currentIndex = (currentIndex + 1) % galleryImages.length; updateLightbox(); };
    const prevImage = () => { currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; updateLightbox(); };

    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => openLightbox(index));
    });

    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', (e) => { if(e.target === lightboxOverlay) closeLightbox(); });
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    document.addEventListener('keydown', (e) => {
      if (!lightboxOverlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    });
  }

  // FORM SUBMISSION MOCK
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const wrapper = form.parentElement;
      wrapper.innerHTML = `
        <div style="text-align: center; padding: 40px 0;">
          <svg style="width: 52px; height: 52px; stroke: var(--teal); fill: none; stroke-width: 2; margin-bottom: 20px;" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
          <h3 style="color: var(--text-dark); margin-bottom: 10px;">Thank You</h3>
          <p style="font-family: 'Lato', sans-serif; font-weight: 300; font-size: 16px; color: var(--text-mid);">We will be in touch shortly to arrange your private viewing of Noble Tara Oasis.</p>
        </div>
      `;
    });
  }
});
