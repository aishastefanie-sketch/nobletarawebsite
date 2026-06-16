import React, { useState, useEffect } from 'react';
import { AppImage } from './AppImage';
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    // Chapter 1
    { src: "nightpoolvilla.jpeg", category: "chapter-1", alt: "Noble Tara Oasis Night Exterior", desc: t("Serene grounds and courtyard pool at twilight.") },
    { src: "overheadpool.jpeg", category: "chapter-1", alt: "Overhead Pool", desc: t("Royal overhead pool scene from the upper level.") },
    { src: "entranceexterior.jpeg", category: "chapter-1", alt: "Entrance Exterior", desc: t("Welcoming foyer bordered by tropical greenery.") },
    { src: "walkway.jpeg", category: "chapter-1", alt: "Jungle Walkway", desc: t("Expansive wooden walkway wrapping around mature canopy.") },
    { src: "daypool.jpg", category: "chapter-1", alt: "Day Pool", desc: t("Sundrenched swimming pool surrounded by refined tropical landscaping.") },
    { src: "overheadterrace.jpeg", category: "chapter-1", alt: "Overhead Terrace Scene", desc: t("A bird's eye view from the master level terrace.") },
    { src: "frontexterior.jpeg", category: "chapter-1", alt: "Front Exterior", desc: t("Elegant front facade bordered by mature tropical trees.") },
    { src: "sideexterior.jpeg", category: "chapter-1", alt: "Side Exterior", desc: t("Tranquil side facade bordered by mature tropical trees.") },

    // Chapter 2
    { src: "entrance.jpeg", category: "chapter-2", alt: "Interior Entrance", desc: t("Warm and welcoming entry space.") },
    { src: "livingroom.jpeg", category: "chapter-2", alt: "Living Room Core", desc: t("Warm and artistic central salon filled with rich accents.") },
    { src: "widelivingroom.jpeg", category: "chapter-2", alt: "Wide Living Room View", desc: t("Open-plan main lounge framed by floor-to-ceiling windows.") },
    { src: "kitchen.jpeg", category: "chapter-2", alt: "Chef's Kitchen", desc: t("Bespoke modern kitchen with professional equipment.") },
    { src: "1stfloorstairs.jpeg", category: "chapter-2", alt: "Lower Stairwell", desc: t("Architectural staircase featuring bespoke metalwork.") },
    { src: "2ndfloorstairs.jpeg", category: "chapter-2", alt: "Upper Stairwell", desc: t("Sunken skylight filtering ambient light through the levels.") },

    // Chapter 3
    { src: "masterbedroom.jpeg", category: "chapter-3", alt: "Master Suite Sanctuary", desc: t("Generous master chambers overlooking the courtyard below.") },
    { src: "masterbedroombath.jpeg", category: "chapter-3", alt: "Master Bath Oasis", desc: t("Japanese-inspired master en-suite with deep soaking tub.") },
    { src: "guestroom2.jpeg", category: "chapter-3", alt: "Secondary Guest Chambers", desc: t("Charming secondary bedroom with integrated custom wardrobe.") },
    { src: "2ndfloorbathroom.jpeg", category: "chapter-3", alt: "Bespoke Teal Bathroom", desc: t("Custom tilework and vibrant hues define the secondary baths.") },
    { src: "1stfloorbathroom.jpeg", category: "chapter-3", alt: "Marble Ground Bath", desc: t("Elegant downstairs bathroom finished in premium materials.") },
    { src: "guestroom1.jpeg", category: "chapter-3", alt: "First Guest Room", desc: t("Secondary guest chambers with warm ambient light.") },
    { src: "guestroom2table.jpeg", category: "chapter-3", alt: "Guest Room Working Desk", desc: t("Comfortable seating and work area within the guest suite.") },
    { src: "masterbedroomshower.jpeg", category: "chapter-3", alt: "Master Bedroom Shower", desc: t("A peaceful connection to the outdoors.") }
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Map image filenames to index in flat list for correct lightbox tracking
  const getFlatIndex = (src: string) => images.findIndex(img => img.src === src);

  return (
    <>
      {/* GALLERY-1: PAGE HERO */}
      <header className="page-hero">
        <AppImage filename="reverseentrance.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
        <div className="page-hero-overlay" style={{ background: 'rgba(26,42,34,0.52)' }}></div>
        <div className="page-hero-content reveal visible">
          <span className="overline" style={{ color: 'var(--teal)' }}>{t('NOBLE TARA OASIS')}</span>
          <h1>{t('Gallery')}</h1>
          <p className="page-hero-subtitle">{t('A photo story in three chapters.')}</p>
        </div>
      </header>

      {/* GALLERY-2: CHAPTER 1 */}
      <section style={{ background: 'var(--teal)', padding: '52px 24px', textAlign: 'center' }}>
        <span className="overline reveal visible" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('CHAPTER ONE')}</span>
        <h2 className="reveal visible" style={{ fontStyle: 'italic', color: 'var(--white)', margin: '14px 0 20px' }}>{t('Serene Grounds & Courtyard Pool')}</h2>
        <p className="body-text reveal visible" style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(255,255,255,0.85)' }}>
          {t('Step into a world of unbroken peace. Enclosed within a highly secure, deeply quiet residential enclave, the exterior spaces are defined by mature tropical canopy and absolute stillness. There are no city sounds here — only the gentle rustle of leaves and the calm glow of the private courtyard pool.')}
        </p>
      </section>

      <section style={{ background: 'var(--mint-mid)', padding: '56px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 7, minWidth: '300px', height: '360px' }}
              onClick={() => openLightbox(getFlatIndex("overheadpool.jpeg"))}
            >
              <AppImage filename="overheadpool.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center 70%', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 3, minWidth: '200px', height: '360px' }}
              onClick={() => openLightbox(getFlatIndex("walkway.jpeg"))}
            >
              <AppImage filename="walkway.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
          </div>
          {/* Row 2 */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 4, minWidth: '250px', height: '380px' }}
              onClick={() => openLightbox(getFlatIndex("overheadterrace.jpeg"))}
            >
              <AppImage filename="overheadterrace.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 5, minWidth: '250px', height: '380px' }}
              onClick={() => openLightbox(getFlatIndex("nightpoolvilla.jpeg"))}
            >
              <AppImage filename="nightpoolvilla.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 3, minWidth: '250px', height: '380px' }}
              onClick={() => openLightbox(getFlatIndex("sideexterior.jpeg"))}
            >
              <AppImage filename="sideexterior.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
          </div>
          {/* Row 3 */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 3, minWidth: '250px', height: '340px' }}
              onClick={() => openLightbox(getFlatIndex("entranceexterior.jpeg"))}
            >
              <AppImage filename="entranceexterior.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 4, minWidth: '250px', height: '340px' }}
              onClick={() => openLightbox(getFlatIndex("daypool.jpg"))}
            >
              <AppImage filename="daypool.jpg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 4, minWidth: '300px', height: '340px' }}
              onClick={() => openLightbox(getFlatIndex("frontexterior.jpeg"))}
            >
              <AppImage filename="frontexterior.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY-3: CHAPTER 2 */}
      <section style={{ background: 'var(--sage)', padding: '52px 24px', textAlign: 'center' }}>
        <span className="overline reveal visible" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('CHAPTER TWO')}</span>
        <h2 className="reveal visible" style={{ fontStyle: 'italic', color: 'var(--white)', margin: '14px 0 20px' }}>{t('Living & Artistic Spaces')}</h2>
        <p className="body-text reveal visible" style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(255,255,255,0.9)' }}>
          {t('An architectural celebration of color and texture. The living spaces reject sterile design, embracing life with vibrant splashes of lime green, rich crimsons, and warm sunshine-golds that interact beautifully with the natural light pouring through the skylights.')}
        </p>
      </section>

      <section style={{ background: 'var(--mint-light)', padding: '56px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 6, minWidth: '300px', height: '420px' }}
              onClick={() => openLightbox(getFlatIndex("widelivingroom.jpeg"))}
            >
              <AppImage filename="widelivingroom.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 4, minWidth: '300px', height: '420px' }}
              onClick={() => openLightbox(getFlatIndex("entrance.jpeg"))}
            >
              <AppImage filename="entrance.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 1.2, minWidth: '250px', height: '400px' }}
              onClick={() => openLightbox(getFlatIndex("livingroom.jpeg"))}
            >
              <AppImage filename="livingroom.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 1, minWidth: '250px', height: '400px' }}
              onClick={() => openLightbox(getFlatIndex("kitchen.jpeg"))}
            >
              <AppImage filename="kitchen.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div style={{ flex: 0.8, minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '8px', height: '400px' }}>
              <div 
                className="gallery-img-wrapper gallery-grid-hover" 
                style={{ flex: 1, height: '196px' }}
                onClick={() => openLightbox(getFlatIndex("1stfloorstairs.jpeg"))}
              >
                <AppImage filename="1stfloorstairs.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
              </div>
              <div 
                className="gallery-img-wrapper gallery-grid-hover" 
                style={{ flex: 1, height: '196px' }}
                onClick={() => openLightbox(getFlatIndex("2ndfloorstairs.jpeg"))}
              >
                <AppImage filename="2ndfloorstairs.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY-4: CHAPTER 3 */}
      <section style={{ background: 'var(--crimson)', padding: '52px 24px', textAlign: 'center' }}>
        <span className="overline reveal visible" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('CHAPTER THREE')}</span>
        <h2 className="reveal visible" style={{ fontStyle: 'italic', color: 'var(--white)', margin: '14px 0 20px' }}>{t('Restful Private Quarters & Baths')}</h2>
        <p className="body-text reveal visible" style={{ maxWidth: '640px', margin: '0 auto', color: 'rgba(255,255,255,0.88)' }}>
          {t('The ultimate retreat within a retreat. Located entirely on the upper floor for total privacy, the bedrooms and bespoke bathrooms offer a peaceful, light-filled sanctuary to unwind.')}
        </p>
      </section>

      <section style={{ background: 'var(--mint-mid)', padding: '56px 48px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 5.5, minWidth: '300px', height: '420px' }}
              onClick={() => openLightbox(getFlatIndex("masterbedroom.jpeg"))}
            >
              <AppImage filename="masterbedroom.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div style={{ flex: 4.5, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '8px', height: '420px' }}>
              <div 
                className="gallery-img-wrapper gallery-grid-hover" 
                style={{ flex: 1, height: '206px' }}
                onClick={() => openLightbox(getFlatIndex("guestroom2table.jpeg"))}
              >
                <AppImage filename="guestroom2table.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
              </div>
              <div 
                className="gallery-img-wrapper gallery-grid-hover" 
                style={{ flex: 1, height: '206px' }}
                onClick={() => openLightbox(getFlatIndex("guestroom2.jpeg"))}
              >
                <AppImage filename="guestroom2.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 1, minWidth: '250px', height: '360px' }}
              onClick={() => openLightbox(getFlatIndex("guestroom1.jpeg"))}
            >
              <AppImage filename="guestroom1.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center 70%', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 1.5, minWidth: '250px', height: '360px' }}
              onClick={() => openLightbox(getFlatIndex("masterbedroombath.jpeg"))}
            >
              <AppImage filename="masterbedroombath.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 1.1, minWidth: '250px', height: '360px' }}
              onClick={() => openLightbox(getFlatIndex("2ndfloorbathroom.jpeg"))}
            >
              <AppImage filename="2ndfloorbathroom.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 0.9, minWidth: '250px', height: '360px' }}
              onClick={() => openLightbox(getFlatIndex("masterbedroomshower.jpeg"))}
            >
              <AppImage filename="masterbedroomshower.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
            <div 
              className="gallery-img-wrapper gallery-grid-hover" 
              style={{ flex: 1, minWidth: '250px', height: '360px' }}
              onClick={() => openLightbox(getFlatIndex("1stfloorbathroom.jpeg"))}
            >
              <AppImage filename="1stfloorbathroom.jpeg" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '0px' }} loading="lazy" alt="Gallery image" />
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {lightboxOpen && (
        <div className="lightbox-overlay active" onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10000, maxWidth: '90vw' }}>
            <AppImage filename={images[currentIndex].src} className="lightbox-img" style={{ maxWidth: '85vw', maxHeight: '72vh', objectFit: 'contain' }} alt="Gallery image" />
            <p style={{ color: 'white', marginTop: '14px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', textAlign: 'center' }}>
              {images[currentIndex].desc}
            </p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={nextImage}>
            <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div className="lightbox-counter">{currentIndex + 1} / {images.length}</div>
        </div>
      )}
    </>
  );
}
