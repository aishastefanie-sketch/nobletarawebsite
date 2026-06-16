import React from 'react';
import { AppImage } from './AppImage';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <>
      {/* HOME-1: HERO */}
      <header id="home-hero" style={{ height: '100vh', minHeight: '600px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 24px' }}>
        <AppImage filename="nightpool.jpeg" alt="Hero Villa" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(26,42,34,0.2) 0%, rgba(26,42,34,0.6) 55%, rgba(26,42,34,0.82) 100%)', zIndex: 1 }}></div>
        
        <div style={{ zIndex: 2, maxWidth: '720px' }}>
          <span className="overline" style={{ color: 'var(--teal)', fontSize: '11px', letterSpacing: '0.22em', display: 'block' }}>
            {t('NOBLE TARA · BANGKOK')}
          </span>
          <h1 style={{ color: 'var(--white)', margin: '18px 0' }}>
            {t('A Private Oasis in the Heart of Bangkok')}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '36px' }}>
            {t('Architect-designed private pool villa. Noble Tara Town in Town.')}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <a href="contact.html" onClick={(e) => handleLinkClick(e, 'contact')} className="btn btn-crimson">{t('Arrange a Viewing')}</a>
            <a href="#home-welcome" className="btn btn-outline-white">{t('Explore the Villa ↓')}</a>
          </div>
          
          <svg style={{ width: '24px', height: '24px', stroke: 'var(--white)', fill: 'none', strokeWidth: 2, margin: '60px auto 0', display: 'block' }} viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </header>

      {/* HOME-2: WELCOME & CORE IDENTITY */}
      <section id="home-welcome" style={{ background: 'var(--mint-mid)', padding: '96px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ width: '60px', height: '1px', background: 'var(--teal)', margin: '0 auto 20px' }}></div>
          <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('THE PROPERTY')}</span>
          <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 32px' }}>{t('Noble Tara Oasis')}</h2>
          <p className="body-text reveal visible" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('Located within the highly sought-after Noble Tara Town in Town community, this architect-designed private pool villa offers a rare combination of privacy, greenery, and convenient city living in the heart of Bangkok. The property has been thoughtfully designed around a private courtyard and swimming pool, creating a sense of calm and seclusion that is increasingly difficult to find within the city. Mature landscaping, abundant natural light, and strong indoor-outdoor connections give the home a distinctive atmosphere that feels more like a private retreat than a conventional Bangkok residence.')}
          </p>
        </div>
      </section>

      {/* HOME-3: KEY STATS STRIP */}
      <section id="home-stats" style={{ background: 'var(--teal)', padding: '48px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '24px' }}>
          <div className="reveal visible" style={{ textAlign: 'center', color: 'var(--white)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: '32px' }}>232 sqm</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{t('LIVING AREA')}</div>
          </div>
          <div className="reveal visible" style={{ textAlign: 'center', color: 'var(--white)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: '32px' }}>356 sqm</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{t('LAND AREA')}</div>
          </div>
          <div className="reveal visible" style={{ textAlign: 'center', color: 'var(--white)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: '32px' }}>3</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{t('BEDROOMS')}</div>
          </div>
          <div className="reveal visible" style={{ textAlign: 'center', color: 'var(--white)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: '32px' }}>3</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{t('BATHROOMS')}</div>
          </div>
          <div className="reveal visible" style={{ textAlign: 'center', color: 'var(--white)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: '32px' }}>{t('Private Pool')}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{t('COURTYARD VILLA')}</div>
          </div>
        </div>
      </section>

      {/* HOME-4: ARCHITECTURE MEETS FEELING */}
      <section className="split-section" style={{ background: 'var(--mint-light)' }}>
        <div className="split-half" style={{ overflow: 'hidden' }}>
          <AppImage filename="diningtable.jpeg" alt="Dining Table" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="split-half split-text">
          <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('ARCHITECTURE MEETS FEELING')}</span>
          <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '16px 0 28px' }}>{t('Where Nature & Vibrant Design Converge')}</h2>
          <p className="body-text reveal visible" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('Most homes in Bangkok compete purely on technical specifications; this home competes entirely on feeling. Stepping inside reveals a striking alternative to sterile, minimalist white boxes. Curated by an award-winning architect, the interiors celebrate life through bold splashes of lime green, rich crimsons, and warm sunshine-golds that mirror the mature jungle canopy outside. It is a fully move-in-ready family sanctuary, completely secluded yet positioned just minutes from top international schools and city connections.')}
          </p>
          <a href="gallery.html" onClick={(e) => handleLinkClick(e, 'gallery')} className="btn btn-teal reveal visible" style={{ marginTop: '40px', alignSelf: 'flex-start' }}>{t('View the Gallery')}</a>
        </div>
      </section>

      {/* HOME-5: CLOSING CTA STRIP */}
      <section style={{ background: 'var(--crimson)', padding: '80px 24px', textAlign: 'center' }}>
        <h2 className="reveal visible" style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '48px', color: 'var(--white)', marginBottom: '16px' }}>{t('Own the Oasis')}</h2>
        <p className="reveal visible" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '16px', color: 'rgba(255,255,255,0.82)', marginBottom: '36px' }}>
          {t('23,000,000 THB · Serious enquiries only · Private viewings by appointment.')}
        </p>
        <div className="reveal visible" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <a href="contact.html" onClick={(e) => handleLinkClick(e, 'contact')} className="btn btn-outline-white">{t('Arrange a Private Viewing')}</a>
          <a href="features.html" onClick={(e) => handleLinkClick(e, 'features')} className="btn btn-outline-white">{t('View Features & Blueprints')}</a>
        </div>
      </section>
    </>
  );
}
