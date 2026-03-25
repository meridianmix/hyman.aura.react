import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import ConsultationForm from './ConsultationForm';

const SLIDES = [
  {
    src: 'https://ik.imagekit.io/efnhxhh9p/hyman/image_1.jpeg?w=1200&h=800&fit=crop',
    alt: 'Dr. Kanevsky and Dr. Mark Hyman',
    caption: 'Dr. Kanevsky & Dr. Mark Hyman',
    objectPosition: 'center top',
  },
  {
    src: 'https://ik.imagekit.io/efnhxhh9p/hyman/image_2.jpeg?w=1200&h=800&fit=crop',
    alt: 'Recording the episode',
    caption: 'Recording Day \u2014 The Dr. Hyman Show',
    objectPosition: 'center 20%',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = (dir: number) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
    startAuto();
  };

  const goTo = (i: number) => {
    setIndex(i);
    startAuto();
  };

  return (
    <section
      className="hero"
      style={{ minHeight: '100vh' }}
    >
      {/* LEFT: Carousel */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }}>
        <div
          id="heroCarousel"
          style={{
            display: 'flex',
            height: '100%',
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
            willChange: 'transform',
          }}
        >
          {SLIDES.map((slide, i) => (
            <div key={i} style={{ minWidth: '100%', height: '100%', position: 'relative' }}>
              <img
                src={slide.src}
                alt={slide.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: slide.objectPosition,
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent,rgba(42,36,32,0.55))',
                  padding: '28px 28px 24px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: '0.78rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.9)',
                    margin: 0,
                  }}
                >
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Podcast badge */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            background: 'rgba(42,36,32,0.82)',
            backdropFilter: 'blur(8px)',
            borderRadius: '24px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#5c7a6e',
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(250,248,245,0.9)',
            }}
          >
            As Heard on The Dr. Hyman Show
          </span>
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => slide(-1)}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
        >
          <Icon icon="solar:alt-arrow-left-bold" width="16" height="16" color="white" />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => slide(1)}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.35)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
        >
          <Icon icon="solar:alt-arrow-right-bold" width="16" height="16" color="white" />
        </button>

        {/* Dot indicators */}
        <div style={{ position: 'absolute', bottom: '16px', right: '20px', display: 'flex', gap: '6px', zIndex: 10 }}>
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'white',
                opacity: i === index ? 1 : 0.45,
                cursor: 'pointer',
                transition: 'opacity 0.3s',
              }}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Headline + Form */}
      <div
        style={{
          background: '#faf8f5',
          padding: '60px 52px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflowY: 'auto',
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#5c7a6e',
            marginBottom: '14px',
          }}
        >
          You just listened. Now take the next step.
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 'clamp(2rem,3.2vw,3rem)',
            fontWeight: 400,
            color: '#2a2420',
            lineHeight: 1.18,
            marginBottom: '20px',
          }}
        >
          You Heard It on
          <br />
          <em style={{ fontStyle: 'italic', color: '#c9a99a' }}>The Dr. Hyman Show.</em>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: '0.97rem',
            lineHeight: 1.8,
            color: '#6b5c52',
            fontWeight: 300,
            marginBottom: '36px',
          }}
        >
          Dr. Kanevsky joined Dr. Mark Hyman to discuss a natural approach to breast
          augmentation that&rsquo;s changing the conversation. If what you heard resonated,
          this page is your next step.
        </p>

        {/* Proof row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
          <div className="proof-avatar-stack" style={{ display: 'flex' }}>
            {['S', 'M', 'L', 'K'].map((letter) => (
              <div key={letter} className="proof-avatar">{letter}</div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: '0.82rem',
              color: '#6b5c52',
              fontWeight: 300,
            }}
          >
            <strong style={{ fontWeight: 500, color: '#2a2420' }}>5,000+</strong> patients chose natural over implants
          </p>
        </div>

        {/* Form card */}
        <div
          className="form-card"
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '36px',
            boxShadow: '0 4px 24px rgba(42,36,32,0.07)',
          }}
        >
          <p className="form-card-label">Book a Consultation</p>
          <ConsultationForm formId="heroForm" trustVariant="hero" />
        </div>
      </div>
    </section>
  );
}
