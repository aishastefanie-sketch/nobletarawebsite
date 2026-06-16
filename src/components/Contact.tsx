import React, { useState } from 'react';
import { AppImage } from './AppImage';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    viewingTime: t('— Select a time —')
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate safe beautiful form submission
    setFormSubmitted(true);
  };

  return (
    <>
      {/* CONTACT-1: HERO */}
      <header className="page-hero" style={{ height: '56vh' }}>
        <AppImage filename="nightpool.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Contact image" />
        <div className="page-hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(26,42,34,0.5) 0%, rgba(26,42,34,0.78) 100%)' }}></div>
        <div className="page-hero-content reveal visible text-center">
          <span className="overline" style={{ color: 'var(--teal)' }}>{t('NOBLE TARA OASIS')}</span>
          <h1 className="my-2 text-white">{t('Own the Oasis')}</h1>
          <div className="text-4xl md:text-5xl my-4 text-emerald-400 font-serif tracking-wide" style={{ fontStyle: 'italic' }}>
            23,000,000 THB
          </div>
          <p className="max-w-xl mx-auto font-light text-base md:text-lg mb-2 text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('An irreplaceable asset in Noble Tara Town in Town (Zone B).')}
          </p>
          <p className="text-sm font-light text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('Serious inquiries only. Viewings strictly by prior appointment.')}
          </p>
        </div>
      </header>

      {/* CONTACT-2: INQUIRY FORM & DETAILED INFORMATION */}
      <section className="split-section" style={{ background: 'var(--mint-mid)' }}>
        {/* Left Half: Direct Info */}
        <div className="split-half split-text" style={{ flex: '50%', padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('GET IN TOUCH')}</span>
          <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 22px' }}>{t("We'd Love to Show You Around")}</h2>
          <p className="body-text reveal visible" style={{ color: 'var(--text-dark)', marginBottom: '40px', lineHeight: '1.7' }}>
            {t('Noble Tara Oasis is available for private viewings by appointment. We welcome enquiries from families, executives, and overseas buyers relocating to Bangkok. Please reach out — we will respond promptly.')}
          </p>
          
          <div className="reveal visible">
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', color: 'var(--text-mid)', marginBottom: '16px' }}>
              {t('DIRECT CONTACT')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '420px' }}>
              <a 
                href="tel:+66632193194" 
                className="contact-badge-custom"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  background: 'var(--mint-light)', 
                  padding: '14px 22px', 
                  borderRadius: '40px', 
                  border: '1.5px solid rgba(46,92,62,0.15)', 
                  fontFamily: "'Inter', sans-serif", 
                  fontWeight: 400, 
                  fontSize: '12px', 
                  letterSpacing: '0.08em', 
                  color: 'var(--text-dark)'
                }}
              >
                <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {t('Call / WhatsApp: +66 (0) 63 219 3194')}
              </a>
              <a 
                href="https://line.me/ti/p/~aishastefanie" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-badge-custom"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  background: 'var(--mint-light)', 
                  padding: '14px 22px', 
                  borderRadius: '40px', 
                  border: '1.5px solid rgba(46,92,62,0.15)', 
                  fontFamily: "'Inter', sans-serif", 
                  fontWeight: 400, 
                  fontSize: '12px', 
                  letterSpacing: '0.08em', 
                  color: 'var(--text-dark)'
                }}
              >
                <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
                {t('Line ID: aishastefanie')}
              </a>
              <a 
                href="mailto:nobletaraoasis@gmail.com" 
                className="contact-badge-custom"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  background: 'var(--mint-light)', 
                  padding: '14px 22px', 
                  borderRadius: '40px', 
                  border: '1.5px solid rgba(46,92,62,0.15)', 
                  fontFamily: "'Inter', sans-serif", 
                  fontWeight: 400, 
                  fontSize: '12px', 
                  letterSpacing: '0.08em', 
                  color: 'var(--text-dark)'
                }}
              >
                <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                nobletaraoasis@gmail.com
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61590259964190" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-badge-custom"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  background: 'var(--mint-light)', 
                  padding: '14px 22px', 
                  borderRadius: '40px', 
                  border: '1.5px solid rgba(46,92,62,0.15)', 
                  fontFamily: "'Inter', sans-serif", 
                  fontWeight: 400, 
                  fontSize: '12px', 
                  letterSpacing: '0.08em', 
                  color: 'var(--text-dark)'
                }}
              >
                <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
                {t('Noble Tara Oasis on Facebook')}
              </a>
            </div>
          </div>
        </div>

        {/* Right Half: Live Form */}
        <div className="split-half" style={{ flex: '50%', padding: '80px 48px', background: 'var(--mint-light)' }}>
          <div className="reveal visible" style={{ maxWidth: '480px', margin: '0 auto' }}>
            <span className="overline" style={{ color: 'var(--teal)' }}>{t('BOOK A VIEWING')}</span>
            <h3 style={{ color: 'var(--text-dark)', margin: '14px 0 10px' }}>{t('Send an Enquiry')}</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-mid)', marginBottom: '36px' }}>
              {t('Fill in the form below and our private concierge will be in touch to confirm your custom viewing.')}
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-white rounded-lg shadow-sm text-center border-t-4 border-teal-600 transition-all duration-500 animate-fade-in">
                <svg className="w-[56px] h-[56px] stroke-teal-600 fill-none stroke-2 mx-auto mb-5" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h4 className="font-serif italic text-2xl text-emerald-950 mb-3">{t('Enquiry Received')}</h4>
                <p className="font-light text-slate-600 text-sm leading-relaxed mb-6">
                  {t('Thank you')}, <strong>{formData.name}</strong>. {t('Your enquiry has been received. Our concierge will be in touch shortly.')}
                </p>
                <button 
                  className="btn btn-outline-teal text-xs tracking-widest uppercase font-semibold py-2.5 px-6 mx-auto"
                  onClick={() => {
                    setFormData({ name: '', email: '', phone: '', viewingTime: t('— Select a time —') });
                    setFormSubmitted(false);
                  }}
                >
                  {t('Send another enquiry')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-12 mt-12">
                <div>
                  <label className="text-[10px] tracking-widest font-bold text-teal-900 block mb-5 uppercase">{t('Your Name')}</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-slate-300 pb-5 outline-none focus:border-teal-600 font-light text-sm text-slate-800 transition-all font-sans" 
                    required 
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-widest font-bold text-teal-900 block mb-5 uppercase">{t('Email Address')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-slate-300 pb-5 outline-none focus:border-teal-600 font-light text-sm text-slate-800 transition-all font-sans" 
                    required 
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-widest font-bold text-teal-900 block mb-5 uppercase">{t('Phone Number')}</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-slate-300 pb-5 outline-none focus:border-teal-600 font-light text-sm text-slate-800 transition-all font-sans" 
                    placeholder={t('+66 or international format')}
                  />
                </div>

                <div className="relative">
                  <label className="text-[10px] tracking-widest font-bold text-teal-900 block mb-5 uppercase">{t('Preferred Viewing Time')}</label>
                  <select 
                     name="viewingTime" 
                     value={formData.viewingTime}
                     onChange={handleInputChange}
                     className="w-full bg-transparent border-b border-slate-300 pb-5 pr-8 outline-none focus:border-teal-600 font-light text-sm text-slate-800 transition-all cursor-pointer appearance-none font-sans"
                   >
                     <option value={t('— Select a time —')}>{t('— Select a time —')}</option>
                     <option value={t('Morning (9:00am – 12:00pm)')}>{t('Morning (9:00am – 12:00pm)')}</option>
                     <option value={t('Afternoon (12:00pm – 4:00pm)')}>{t('Afternoon (12:00pm – 4:00pm)')}</option>
                     <option value={t('Late Afternoon (4:00pm – 6:00pm)')}>{t('Late Afternoon (4:00pm – 6:00pm)')}</option>
                     <option value={t('Weekend Morning')}>{t('Weekend Morning')}</option>
                     <option value={t('Weekend Afternoon')}>{t('Weekend Afternoon')}</option>
                     <option value={t('Flexible / To Be Confirmed')}>{t('Flexible / To Be Confirmed')}</option>
                  </select>
                  <svg className="absolute right-0 bottom-6 w-4 h-4 text-slate-400 pointer-events-none stroke-current fill-none" viewBox="0 0 24 24">
                     <path d="M6 9l6 6 6-6" strokeWidth={1.5} />
                  </svg>
                </div>

                <div className="mt-4">
                  <button 
                    type="submit" 
                    className="btn btn-crimson w-full py-5 tracking-[0.15em] font-semibold text-xs text-white uppercase hover:scale-[1.02] active:scale-100 transition-all"
                  >
                    {t('Send Enquiry')}
                  </button>
  
                  <p className="font-light text-[11px] text-slate-500 text-center mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t('Your information will only be used to respond to this enquiry.')}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT-3: FOOTER ACCENT SPLASH PICTURE */}
      <section className="w-full h-[68vh] overflow-hidden relative">
        <AppImage filename="glassreflection.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Contact image" />
      </section>
    </>
  );
}
