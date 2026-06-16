import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Location from './components/Location';
import Contact from './components/Contact';
import { detectLocalImages } from './utils/imageMapper';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

type PageType = 'home' | 'gallery' | 'features' | 'location' | 'contact';

function MainApp() {
  const [page, setPage] = useState<PageType>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localImagesChecked, setLocalImagesChecked] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  // Detect which images have local physical files in public folder
  useEffect(() => {
    detectLocalImages().finally(() => {
      setLocalImagesChecked(true);
    });
  }, []);

  // Scroll listener for sticky transparent-to-solid Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (targetPage: PageType) => {
    setPage(targetPage);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const getNavLinkClass = (itemPage: PageType) => {
    return page === itemPage ? 'active' : '';
  };

  const getNavLinkStyle = (itemPage: PageType) => {
    return page === itemPage ? { color: 'var(--teal)' } : {};
  };

  return (
    <div className={`min-h-screen flex flex-col lang-${lang}`} style={{ background: 'var(--mint-light)', color: 'var(--text-dark)' }}>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled || page !== 'home' ? 'always-scrolled scrolled' : ''}`}>
        <div className="nav-brand" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>
          <span className="nav-brand-title">{t('Noble Tara Oasis')}</span>
          <span className="nav-brand-sub">{t('Bangkok · Private Pool Villa')}</span>
        </div>
        <div className="nav-links items-center">
          <a href="#" className={getNavLinkClass('home')} style={getNavLinkStyle('home')} onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>{t('Home')}</a>
          <a href="#" className={getNavLinkClass('gallery')} style={getNavLinkStyle('gallery')} onClick={(e) => { e.preventDefault(); handleNavigation('gallery'); }}>{t('Gallery')}</a>
          <a href="#" className={getNavLinkClass('features')} style={getNavLinkStyle('features')} onClick={(e) => { e.preventDefault(); handleNavigation('features'); }}>{t('Features')}</a>
          <a href="#" className={getNavLinkClass('location')} style={getNavLinkStyle('location')} onClick={(e) => { e.preventDefault(); handleNavigation('location'); }}>{t('Location')}</a>
          <a href="#" className={getNavLinkClass('contact')} style={getNavLinkStyle('contact')} onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>{t('Contact')}</a>
          <button 
            onClick={toggleLang} 
            className="ml-4 px-2 py-1 text-xs border border-white/30 rounded text-white hover:bg-white/10 transition-colors uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {lang === 'en' ? 'EN | TH' : 'TH | EN'}
          </button>
        </div>
        <div className="flex gap-4 items-center md:hidden">
          <button 
            onClick={toggleLang} 
            className="px-2 py-1 text-[10px] border border-white/30 rounded text-white active:bg-white/10 uppercase"
          >
            {lang === 'en' ? 'EN / TH' : 'TH / EN'}
          </button>
          <button className="hamburger block" onClick={() => setMobileMenuOpen(true)}>
            <svg viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={() => setMobileMenuOpen(false)}>&times;</button>
        <div className="mobile-menu-links mt-8">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>{t('Home')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('gallery'); }}>{t('Gallery')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('features'); }}>{t('Features')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('location'); }}>{t('Location')}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>{t('Contact')}</a>
        </div>
      </div>

      {/* BODY MAIN PANEL */}
      <main className="flex-grow">
        {page === 'home' && <Home onNavigate={handleNavigation} />}
        {page === 'gallery' && <Gallery />}
        {page === 'features' && <Features onNavigate={handleNavigation} />}
        {page === 'location' && <Location onNavigate={handleNavigation} />}

        {page === 'contact' && <Contact />}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">{t('Noble Tara Oasis')}</div>
            <div className="footer-tagline">{t('A Private Oasis in Bangkok')}</div>
            <a href="mailto:nobletaraoasis@gmail.com" className="footer-email">nobletaraoasis@gmail.com</a>
          </div>
          <div>
            <div className="footer-col-label">{t('EXPLORE')}</div>
            <div className="footer-links">
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>{t('Home')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('gallery'); }}>{t('Gallery')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('features'); }}>{t('Features')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('location'); }}>{t('Location')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>{t('Contact')}</a>
            </div>
          </div>
          <div>
            <div className="footer-col-label">{t('GET IN TOUCH')}</div>
            <div className="footer-links footer-contact">
              <a href="mailto:nobletaraoasis@gmail.com">nobletaraoasis@gmail.com</a>
              <a href="https://www.facebook.com/profile.php?id=61590259964190" target="_blank" rel="noopener noreferrer">{t('Noble Tara Oasis on Facebook')}</a>
              <a href="tel:+66632193194">{t('Call / WhatsApp: +66 (0) 63 219 3194')}</a>
              <a href="https://line.me/ti/p/~aishastefanie" target="_blank" rel="noopener noreferrer">{t('Line ID: aishastefanie')}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          {t('Noble Tara Oasis · Noble Tara Town in Town · Bangkok · 2025')}
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
