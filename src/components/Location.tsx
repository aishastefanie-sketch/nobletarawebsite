import React from 'react';
import { AppImage } from './AppImage';
import { useLanguage } from '../contexts/LanguageContext';

interface LocationProps {
  onNavigate: (page: 'home' | 'gallery' | 'features' | 'location' | 'contact') => void;
}

export default function Location({ onNavigate }: LocationProps) {
  const { t } = useLanguage();

  // Bento info cards
  const neighborhoodHighlights = [
    {
      title: t("Elite Education"),
      themeColor: "var(--teal)",
      icon: (
        <svg className="w-9 h-9 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 2 2.67 4 6 4s6-2 6-4v-5" />
        </svg>
      ),
      items: [
        "KIS International School",
        "Regent's International School",
        "Singapore International School Bangkok (SISB)"
      ]
    },
    {
      title: t("Lifestyle & Retail Hubs"),
      themeColor: "var(--sage)",
      icon: (
        <svg className="w-9 h-9 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
        </svg>
      ),
      items: [
        "Central EastVille",
        "The Scene Town in Town",
        "Lotus's",
        "Makro"
      ]
    },
    {
      title: t("Infrastructure & Medical"),
      themeColor: "var(--crimson)",
      icon: (
        <svg className="w-9 h-9 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
          <path d="M12 2v20M2 12h20" />
        </svg>
      ),
      items: [
        "Paolo Chokchai 4 Hospital",
        "Piyavate Hospital",
        "Pradit Manutham Road",
        "Chalong Rat Expressway",
        "Pracha Uthit Road"
      ]
    }
  ];

  return (
    <>
      {/* LOCATION-1: HERO */}
      <header className="page-hero">
        <AppImage filename="walkway.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Location image" />
        <div className="page-hero-overlay" style={{ background: 'rgba(26,42,34,0.55)' }}></div>
        <div className="page-hero-content reveal visible">
          <span className="overline" style={{ color: 'var(--teal)' }}>{t('NOBLE TARA TOWN IN TOWN')}</span>
          <h1>{t('Location')}</h1>
          <p className="page-hero-subtitle">{t("Bangkok's most established gated residential community.")}</p>
        </div>
      </header>

      {/* LOCATION-2: INTEGRATED LIFESTYLE STORY */}
      <section className="split-section" style={{ background: 'var(--mint-mid)' }}>
        <div className="split-half split-text" style={{ flex: '52%', padding: '80px 48px' }}>
          <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('THE COMMUNITY')}</span>
          <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 28px' }}>{t('The Lifestyle & Security of Town in Town')}</h2>
          <p className="body-text reveal visible" style={{ color: 'var(--text-dark)', lineHeight: '1.8' }}>
            {t("Town in Town is one of Bangkok's most sought-after, established residential communities, celebrated for bridging elite urban convenience with a peaceful, low-density lifestyle. Tucked securely behind the strictly monitored guard gates of ")}<strong>Noble Tara Town in Town Zone B</strong>{t(", this neighborhood guarantees an exceptionally safe, quiet environment completely free from transit noise and disruptive activities — offering absolute serenity to families and professionals alike.")}
          </p>
          <button 
            className="btn btn-teal reveal visible hover:scale-105 transition-transform mt-8 self-start" 
            onClick={() => onNavigate('contact')}
            style={{ padding: '14px 34px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em' }}
          >
            {t('Arrange a Private Viewing')}
          </button>
        </div>
        
        <div className="split-half flex justify-center items-center py-12 md:py-20 px-6" style={{ flex: '48%' }}>
          <div className="w-full max-w-4xl box-shadow overflow-hidden" style={{ borderRadius: '4px', transform: 'translate(-16px, 24px)' }}>
            <AppImage filename="neighborhood.jpeg" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', position: 'relative' }} alt="Neighborhood image" />
          </div>
        </div>
      </section>

      {/* LOCATION-3: BENTO HIGHLIGHTS GRID */}
      <section style={{ background: 'var(--mint-light)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('THE NEIGHBORHOOD')}</span>
            <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 20px' }}>{t('Everything You Need, Nearby')}</h2>
            <p className="body-text !text-sm max-w-lg mx-auto text-center" style={{ color: 'var(--text-mid)', textAlign: 'center', margin: '0 auto' }}>
              {t("Perfectly positioned for fast accessibility to Bangkok's world-class schools, prominent hospital healthcare, and retail high-streets.")}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {neighborhoodHighlights.map((hub, idx) => (
              <div 
                key={idx} 
                className="reveal visible box-shadow flex flex-col justify-between group hover:shadow-lg transition-all duration-300" 
                style={{ 
                  background: hub.themeColor, 
                  padding: '40px', 
                  borderRadius: '4px',
                  color: 'var(--white)'
                }}
              >
                <div>
                  <div className="mb-6 opacity-90 group-hover:scale-110 transition-transform duration-350 self-start" style={{ width: 'fit-content' }}>
                    {hub.icon}
                  </div>
                  <h3 className="font-serif italic text-2xl mb-6 text-white font-medium tracking-tight">
                    {hub.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {hub.items.map((place, pIdx) => (
                      <span 
                        key={pIdx} 
                        style={{ 
                          background: 'rgba(255,255,255,0.15)', 
                          color: 'var(--white)', 
                          fontFamily: "'Inter', sans-serif", 
                          fontWeight: 400, 
                          fontSize: '11px', 
                          letterSpacing: '0.08em', 
                          padding: '8px 16px', 
                          borderRadius: '40px',
                          border: '1px solid rgba(255,255,255,0.08)'
                        }}
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION-4: INTERACTIVE GOOGLE MAPS ROUTING */}
      <section style={{ background: 'var(--mint-mid)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="text-center mb-10 flex flex-col items-center">
            <span className="overline reveal visible" style={{ color: 'var(--teal)' }}>{t('FIND US')}</span>
            <h2 className="reveal visible" style={{ color: 'var(--text-dark)', margin: '14px 0 18px' }}>{t('Find Noble Tara Oasis')}</h2>
            <p className="reveal visible max-w-xl mx-auto text-center" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: '16px', color: 'var(--text-mid)', lineHeight: '1.6', textAlign: 'center', margin: '0 auto' }}>
              {t('Noble Tara Oasis is located in Noble Tara Town in Town, Zone B, Bangkok. Contact us for the precise address and directions prior to your visit.')}
            </p>
          </div>

          <div className="reveal visible box-shadow overflow-hidden" style={{ background: 'var(--white-warm)', borderRadius: '4px', borderTop: '4px solid var(--teal)' }}>
            <iframe 
              style={{ width: '100%', height: '480px', border: 'none' }} 
              src="https://maps.google.com/maps?q=Town+In+Town,+Wang+Thonglang,+Bangkok&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen={true}
              loading="lazy"
              title="Google Map showing Noble Tara Town in Town, Bangkok"
            ></iframe>
          </div>
          
          <div className="reveal visible mt-12 text-center">
            <p className="mb-6 font-light" style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'var(--text-dark)' }}>
              {t('Contact our listing agents to receive the exact private address coordinates and arrange a guided schedule.')}
            </p>
            <button 
              className="btn btn-crimson hover:scale-105 transition-transform"
              onClick={() => onNavigate('contact')}
              style={{ padding: '14px 38px', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px' }}
            >
              {t('Get Directions & Contact Listing')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
