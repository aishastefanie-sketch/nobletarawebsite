import React, { useState } from 'react';
import { AppImage } from './AppImage';
import { useLanguage } from '../contexts/LanguageContext';

interface FeaturesProps {
  onNavigate: (page: 'home' | 'gallery' | 'features' | 'location' | 'contact') => void;
}

export default function Features({ onNavigate }: FeaturesProps) {
  const { t } = useLanguage();
  const [activePlan, setActivePlan] = useState<'ground' | 'second'>('ground');
  const [lightboxPlan, setLightboxPlan] = useState<string | null>(null);

  const equipmentList = [
    {
      name: t("Full-Home Air Conditioning"),
      desc: t("Split-system climate control throughout."),
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        </svg>
      )
    },
    {
      name: t("Premium Refrigerator"),
      desc: t("Multi-door smart kitchen system."),
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M5 10h14M9 6v2M9 14v4" />
        </svg>
      )
    },
    {
      name: t("Microwave"),
      desc: t("Built-in professional convection microwave."),
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="17" cy="12" r="2" />
        </svg>
      )
    },
    {
      name: t("Washing Machine"),
      desc: t("Heavy duty front-loading drum."),
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <path d="M8 6h8" />
        </svg>
      )
    },
    {
      name: t("Integrated Water Filter"),
      desc: t("Reverse osmosis fresh water purifier."),
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      )
    },
    {
      name: t("Immersive Film Projector"),
      desc: t("Custom high-lumen theater projection setup."),
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="8" cy="12" r="3" />
          <path d="M16 10h2M16 14h2" />
        </svg>
      )
    },
    {
      name: t("Enterprise Wi-Fi"),
      desc: t("Complete dual-band mesh coverage across floors."),
      icon: (
        <svg className="w-8 h-8 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* FEATURES HERO */}
      <header className="page-hero" style={{ height: '48vh' }}>
        <AppImage filename="1stfloorstairs.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Feature Image" />
        <div className="page-hero-overlay" style={{ background: 'rgba(26,42,34,0.58)' }}></div>
        <div className="page-hero-content reveal visible">
          <span className="overline" style={{ color: 'var(--teal)' }}>{t('NOBLE TARA OASIS')}</span>
          <h1>{t('Features & Blueprints')}</h1>
          <p className="page-hero-subtitle">{t('Every detail. Every dimension.')}</p>
        </div>
      </header>

      {/* OVERVIEW SECTION */}
      <section style={{ background: 'var(--teal)', padding: '80px 24px', textAlign: 'center', color: 'var(--white)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span className="overline reveal visible" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('THE OVERVIEW')}</span>
          <h2 className="reveal visible" style={{ fontStyle: 'italic', margin: '14px 0 28px' }}>{t('Designed Around Life')}</h2>
          <p className="body-text reveal visible" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8' }}>
            {t('Spanning a generous 356 sqm land area and 232 sqm of masterfully utilized living space, this detached two-storey villa is a triumph of thoughtful design. Built around a central private pool, the architecture maximizes natural light and privacy, ensuring a highly functional, secure, and peaceful environment for family living and effortless entertaining.')}
          </p>
        </div>
      </section>

      {/* INTERIOR ARCHITECTURE & FLOW */}
      <section className="split-section" style={{ background: 'var(--mint-mid)' }}>
        <div className="split-half split-text" style={{ flex: 5.5, padding: '80px 48px' }}>
          <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('INTERIOR')}</span>
          <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 36px' }}>{t('Interior Architecture & Flow')}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t('3 Bedrooms')}</strong> {t('Peaceful sanctuaries on the upper floor')}
            </div>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t('3 Bathrooms')}</strong> {t('Bespoke fixtures and custom tile layouts')}
            </div>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t('Spacious Living Room')}</strong> {t('Framed by floor-to-ceiling glass')}
            </div>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t('Dedicated Dining Area')}</strong> {t('Centered beautifully next to the garden')}
            </div>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t('Culinary Kitchen')}</strong> {t('Built-in premium cookware and quartz countertops')}
            </div>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t('Dedicated Storage')}</strong> {t('Concealed utility pantry and storage closet')}
            </div>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6', gridColumn: '1 / -1' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t("Maid's Quarters")}</strong> {t('Private ensuite bedroom with dedicated separate entrance')}
            </div>
            <div className="reveal visible" style={{ background: 'var(--white-warm)', padding: '20px 24px', borderLeft: '3px solid var(--teal)', borderRadius: '2px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.6', gridColumn: '1 / -1' }}>
              <strong style={{ fontWeight: 500, display: 'block', color: 'var(--teal)' }}>{t('Covered Laundry & Drying')}</strong> {t('Generous laundry wing isolated from main living spaces')}
            </div>
          </div>
        </div>
        <div className="split-half" style={{ flex: 4.5, minHeight: '580px' }}>
          <AppImage filename="entrancestairs.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Feature Image" />
        </div>
      </section>

      {/* EXTERIOR SECTION */}
      <section className="split-section" style={{ background: 'var(--mint-light)', flexDirection: 'row-reverse' }}>
        <div className="split-half split-text" style={{ flex: 5.5, padding: '80px 48px' }}>
          <span className="overline reveal visible" style={{ color: 'var(--crimson)' }}>{t('EXTERIOR')}</span>
          <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 36px' }}>{t('The Oasis Exterior')}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="reveal visible" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 0', borderBottom: '1px solid rgba(46,92,62,0.12)' }}>
              <svg style={{ width: '22px', height: '22px', stroke: 'var(--crimson)', fill: 'none', strokeWidth: 1.5, flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M2 12c2 0 3.5-1.5 5.5-1.5s3.5 1.5 5.5 1.5 3.5-1.5 5.5-1.5 3.5 1.5 5.5 1.5" strokeLinecap="round" />
              </svg>
              <div style={{ transform: 'translateY(-2px)' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px', color: 'var(--text-dark)', display: 'block' }}>{t('Private Swimming Pool')}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)', fontFamily: "'Inter', sans-serif" }}>{t('Deep central pool framed by safety glass and dark tiles')}</span>
              </div>
            </div>
            <div className="reveal visible" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 0', borderBottom: '1px solid rgba(46,92,62,0.12)' }}>
              <svg style={{ width: '22px', height: '22px', stroke: 'var(--crimson)', fill: 'none', strokeWidth: 1.5, flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M11 20A7 7 0 014 13v-3a8 8 0 0116 0v3a7 7 0 01-7 7H11z" />
                <path d="M11 20v4" />
              </svg>
              <div style={{ transform: 'translateY(-2px)' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px', color: 'var(--text-dark)', display: 'block' }}>{t('Garden Courtyard')}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)', fontFamily: "'Inter', sans-serif" }}>{t('Enclosed botanical paradise with high custom brick privacy walls')}</span>
              </div>
            </div>
            <div className="reveal visible" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 0', borderBottom: '1px solid rgba(46,92,62,0.12)' }}>
              <svg style={{ width: '22px', height: '22px', stroke: 'var(--crimson)', fill: 'none', strokeWidth: 1.5, flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M4 19h16M4 15h16M6 19v3M18 19v3M8 11h8v4H8z" />
              </svg>
              <div style={{ transform: 'translateY(-2px)' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px', color: 'var(--text-dark)', display: 'block' }}>{t('Outdoor Entertaining Terrace')}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)', fontFamily: "'Inter', sans-serif" }}>{t('Elevated teak-deck seating directly interfacing the main pool')}</span>
              </div>
            </div>
            <div className="reveal visible" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 0', borderBottom: '1px solid rgba(46,92,62,0.12)' }}>
              <svg style={{ width: '22px', height: '22px', stroke: 'var(--crimson)', fill: 'none', strokeWidth: 1.5, flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M12 22v-6M12 16a4 4 0 00-4-4H4a8 8 0 0116 0h-4a4 4 0 00-4 4z" />
              </svg>
              <div style={{ transform: 'translateY(-2px)' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px', color: 'var(--text-dark)', display: 'block' }}>{t('Mature Jungle Landscaping')}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)', fontFamily: "'Inter', sans-serif" }}>{t('Tropical shade trees providing an organic canopy and exceptional air cooling')}</span>
              </div>
            </div>
            <div className="reveal visible" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 0', borderBottom: '1px solid rgba(46,92,62,0.12)' }}>
              <svg style={{ width: '22px', height: '22px', stroke: 'var(--crimson)', fill: 'none', strokeWidth: 1.5, flexShrink: 0 }} viewBox="0 0 24 24">
                <rect x="2" y="10" width="20" height="10" rx="2" />
                <path d="M6 10V6a2 2 0 012-2h8a2 2 0 012 2v4M5 14h.01M19 14h.01" />
              </svg>
              <div style={{ transform: 'translateY(-2px)' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px', color: 'var(--text-dark)', display: 'block' }}>{t('Secure Covered Parking for 2 Cars')}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-mid)', fontFamily: "'Inter', sans-serif" }}>{t('Automatic security gate entry with ample shelter and guest clearance')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="split-half" style={{ flex: 4.5, minHeight: '520px' }}>
          <AppImage filename="overheadterrace.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Feature Image" />
        </div>
      </section>

      {/* MOVE-IN READY EQUIPMENT SPECIALTY */}
      <section style={{ background: 'var(--sage)', padding: '80px 24px', textAlign: 'center', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="overline reveal visible" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('INCLUDED WITH THE PROPERTY')}</span>
          <h2 className="reveal visible" style={{ fontStyle: 'italic', margin: '14px 0 14px' }}>{t('Move-In Ready')}</h2>
          <p className="reveal visible" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto 52px' }}>
            {t('Every state-of-the-art appliance and utility listed below is fully integrated and included in the asking price.')}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {equipmentList.map((item, id) => (
              <div key={id} className="reveal visible hover:scale-105 transition-transform" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', background: 'var(--mint-light)', padding: '24px', borderRadius: '4px', border: '1px solid rgba(46,92,62,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ color: 'var(--teal)' }}>
                  {item.icon}
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dark)' }}>
                  {item.name}
                </span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '13px', color: 'var(--text-mid)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BLUEPRINTS */}
      <section style={{ background: 'var(--mint-mid)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('THE BLUEPRINTS')}</span>
          <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 18px' }}>{t('Spatial Architecture')}</h2>
          <p className="reveal visible" style={{ maxWidth: '680px', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '16px', marginBottom: '40px', color: 'var(--text-mid)' }}>
            {t('Noble Tara Oasis is planned across two stunning floors. The ground floor is designed around outdoor living — the pool, courtyard, and terrace are at its center. The upper floor is entirely private, with three bedrooms and dedicated bathrooms.')}
          </p>

          {/* Interactive Switch Tab */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
            <button 
              className={`btn ${activePlan === 'ground' ? 'btn-teal' : 'btn-outline-teal'}`} 
              onClick={() => setActivePlan('ground')}
              style={{ padding: '10px 24px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              {t('Ground Floor')}
            </button>
            <button 
              className={`btn ${activePlan === 'second' ? 'btn-teal' : 'btn-outline-teal'}`} 
              onClick={() => setActivePlan('second')}
              style={{ padding: '10px 24px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              {t('Second Floor')}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Plan 1 */}
            <div 
              className="reveal visible box-shadow hover:shadow-lg transition-all cursor-zoom-in" 
              style={{ background: 'var(--white-warm)', padding: '24px', border: '1px solid rgba(46,92,62,0.1)', borderTop: `3px solid ${activePlan === 'ground' ? 'var(--teal)' : 'rgba(46,92,62,0.2)'}`, borderRadius: '2px' }}
              onClick={() => setLightboxPlan("")}
            >
              <div style={{ overflow: 'hidden', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafaf9' }}>
                <AppImage filename="groundfloorplan.jpeg" style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--sage)' }} alt="Feature Image" />
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-mid)', marginTop: '16px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                <span>{t('GROUND FLOOR · 1:75')}</span>
                <span className="text-[10px] text-teal-600 bg-teal-100/50 px-2 py-0.5 rounded">{t('Click to zoom')}</span>
              </div>
            </div>

            {/* Plan 2 */}
            <div 
              className="reveal visible box-shadow hover:shadow-lg transition-all cursor-zoom-in" 
              style={{ background: 'var(--white-warm)', padding: '24px', border: '1px solid rgba(46,92,62,0.1)', borderTop: `3px solid ${activePlan === 'second' ? 'var(--teal)' : 'rgba(46,92,62,0.2)'}`, borderRadius: '2px' }}
              onClick={() => setLightboxPlan("")}
            >
              <div style={{ overflow: 'hidden', height: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafaf9' }}>
                <AppImage filename="secondfloorplan.jpeg" style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--sage)' }} alt="Feature Image" />
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-mid)', marginTop: '16px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                <span>{t('SECOND FLOOR · 1:75')}</span>
                <span className="text-[10px] text-teal-600 bg-teal-100/50 px-2 py-0.5 rounded">{t('Click to zoom')}</span>
              </div>
            </div>
          </div>
          
          <p className="reveal visible" style={{ marginTop: '28px', textAlign: 'center', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '13px', color: 'var(--text-mid)', fontStyle: 'italic' }}>
            {t('Floor plans are in Thai-labelled architectural format. Full translated copies available on request.')}
          </p>
        </div>
      </section>

      {/* IMMERSIVE COMPONENT CONTACT BAR */}
      <section style={{ background: 'var(--crimson)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 className="reveal visible" style={{ fontStyle: 'italic', color: 'var(--white)', marginBottom: '14px' }}>{t('Arrange a Private Viewing')}</h2>
          <p className="reveal visible" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginBottom: '34px' }}>
            {t('Viewings strictly by prior appointment. Serious enquiries welcome.')}
          </p>
          <button 
            className="btn btn-outline-white reveal visible hover:bg-white hover:text-rose-950 transition-all font-semibold" 
            onClick={() => onNavigate('contact')}
            style={{ padding: '14px 36px', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px' }}
          >
            {t('Contact Listing Agent')}
          </button>
        </div>
      </section>

      {/* PLAN LIGHTBOX LIGHT */}
      {lightboxPlan && (
        <div className="lightbox-overlay active" onClick={() => setLightboxPlan(null)}>
          <button className="lightbox-close" onClick={() => setLightboxPlan(null)}>&times;</button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10000 }}>
            <img 
              src={lightboxPlan} 
              alt="Floor Plan Detailed Zoom View" 
              className="max-h-[85vh] max-w-[90vw] object-contain rounded bg-white p-4" 
              referrerPolicy="no-referrer"
            />
            <p style={{ color: 'white', marginTop: '16px', fontSize: '14px', fontFamily: "'Inter', sans-serif", letterSpacing: '1px' }}>
              {t('CLICK ANYWHERE TO DISMISS DETAIL ZOOM')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
