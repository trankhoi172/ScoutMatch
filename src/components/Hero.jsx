import React, { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { Play } from 'lucide-react';

export default function Hero({ onStartClick }) {
  const { language, animations } = useApp();
  const t = translations[language].hero;
  
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // Custom button ripple handler
  const [ripples, setRipples] = useState([]);
  
  const handleButtonClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    // Call the parent handler
    if (onStartClick) {
      onStartClick();
    }
  };

  // Clean up ripples
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  // Canvas particle and background animation system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = containerRef.current.offsetWidth);
    let height = (canvas.height = containerRef.current.offsetHeight);
    
    let particles = [];
    const particleCount = Math.min(Math.floor(width / 30), 45); // adapt to screen size
    const mouse = { x: null, y: null, radius: 120 };

    // Handle mouse move for interactive repulsion
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Particle template
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        // Interactive mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.5;
            this.y += Math.sin(angle) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Match theme accents
        const isLightTheme = document.documentElement.classList.contains('theme-light');
        const color = isLightTheme ? '5, 150, 105' : '0, 242, 148';
        
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = `rgba(${color}, 0.5)`;
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = canvas.width = containerRef.current.offsetWidth;
      height = canvas.height = containerRef.current.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle abstract football pitch geometry
      ctx.save();
      const isLightTheme = document.documentElement.classList.contains('theme-light');
      ctx.strokeStyle = isLightTheme ? 'rgba(5, 150, 105, 0.05)' : 'rgba(0, 242, 148, 0.035)';
      ctx.lineWidth = 1.5;

      // Draw pitch outer line with margins
      const margin = 40;
      ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

      // Draw center circle
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.15, 0, Math.PI * 2);
      ctx.stroke();

      // Draw center line
      ctx.beginPath();
      ctx.moveTo(width / 2, margin);
      ctx.lineTo(width / 2, height - margin);
      ctx.stroke();

      // Draw penalty boxes
      const boxWidth = Math.min(width * 0.15, 150);
      const boxHeight = Math.min(height * 0.35, 300);
      
      // Left Penalty Box
      ctx.strokeRect(margin, height / 2 - boxHeight / 2, boxWidth, boxHeight);
      // Right Penalty Box
      ctx.strokeRect(width - margin - boxWidth, height / 2 - boxHeight / 2, boxWidth, boxHeight);
      ctx.restore();

      // Update and draw particles (only if animations are enabled)
      if (animations === 'on') {
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Trigger loop
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animations]);

  return (
    <section id="home" className="hero-section" ref={containerRef}>
      {/* Background canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Modern gradient lighting effects */}
      <div className="light-glow glow-primary"></div>
      <div className="light-glow glow-secondary"></div>

      <div className="container hero-container">
        <div className={`glass-card hero-card slide-up`}>
          <div className="stadium-badge">
            <span className="stadium-badge-pulse"></span>
            <span>MATCHDAY ONE</span>
          </div>
          
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          
          <div className="cta-wrapper">
            <button 
              className="btn-primary start-match-btn" 
              onClick={handleButtonClick}
              aria-label="Start Footballer Matching Questionnaire"
            >
              <Play size={18} fill="currentColor" />
              <span>{t.cta}</span>
              
              {/* CSS Ripples */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="ripple"
                  style={{ left: ripple.x, top: ripple.y }}
                />
              ))}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 100px;
          padding-bottom: 60px;
          overflow: hidden;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: all;
        }

        /* Lighting Glow Effects */
        .light-glow {
          position: absolute;
          border-radius: var(--border-radius-full);
          filter: blur(100px);
          opacity: 0.15;
          z-index: 2;
          pointer-events: none;
        }
        
        .theme-light .light-glow {
          opacity: 0.08;
        }

        .glow-primary {
          width: 300px;
          height: 300px;
          background: var(--accent);
          top: 15%;
          left: 10%;
        }

        .glow-secondary {
          width: 350px;
          height: 350px;
          background: var(--accent-blue);
          bottom: 20%;
          right: 10%;
        }

        .animations-off .light-glow {
          display: none;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-card {
          width: 100%;
          max-width: 820px;
          padding: 60px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          border-radius: var(--border-radius-lg);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hero-card:hover {
          transform: translateY(-2px);
        }

        .stadium-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          padding: 6px 16px;
          border-radius: var(--border-radius-full);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent);
        }

        .stadium-badge-pulse {
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .animations-on .stadium-badge-pulse::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--accent);
          border-radius: 50%;
          animation: badgePulse 2s infinite ease-out;
        }

        @keyframes badgePulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(3.5);
            opacity: 0;
          }
        }

        .hero-title {
          line-height: 1.1;
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 70%, var(--accent-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 10px rgba(0,0,0,0.1));
        }

        .hero-subtitle {
          max-width: 620px;
          font-size: clamp(1rem, 1.2vw + 0.8rem, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-wrapper {
          margin-top: 12px;
        }

        .start-match-btn {
          min-width: 220px;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .hero-card {
            padding: 40px 24px;
            gap: 20px;
          }
          
          .glow-primary, .glow-secondary {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
