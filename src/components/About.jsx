import React from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { Zap, Sliders, Sparkles } from 'lucide-react';

export default function About() {
  const { language } = useApp();
  const t = translations[language].about;

  const features = [
    {
      icon: <Zap size={32} />,
      title: t.card1Title,
      desc: () => t.card1Desc,
      glowClass: 'accent-green'
    },
    {
      icon: <Sliders size={32} />,
      title: t.card2Title,
      desc: () => t.card2Desc,
      glowClass: 'accent-blue'
    },
    {
      icon: <Sparkles size={32} />,
      title: t.card3Title,
      desc: () => t.card3Desc,
      glowClass: 'accent-green'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header text-center">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="grid-3 card-container">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card about-card">
              <div className={`card-icon-container ${feature.glowClass}`}>
                {feature.icon}
              </div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-desc">{feature.desc()}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
          background-color: var(--bg-secondary);
          position: relative;
          z-index: 5;
        }

        .about-header {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .section-title {
          background: linear-gradient(135deg, var(--text-primary) 60%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          max-width: 540px;
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .card-container {
          margin-top: 20px;
        }

        .about-card {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          border-radius: var(--border-radius-md);
          text-align: left;
          height: 100%;
        }

        .about-card:hover {
          transform: translateY(-8px);
        }

        .card-icon-container {
          width: 60px;
          height: 60px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast), filter var(--transition-fast);
        }

        .about-card:hover .card-icon-container {
          transform: scale(1.1) rotate(5deg);
        }

        .card-icon-container.accent-green {
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent);
          filter: drop-shadow(0 0 10px rgba(var(--accent-rgb), 0.15));
        }

        .card-icon-container.accent-blue {
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.2);
          color: var(--accent-blue);
          filter: drop-shadow(0 0 10px rgba(0, 210, 255, 0.15));
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 70px 0;
          }
          .about-header {
            margin-bottom: 40px;
          }
          .about-card {
            padding: 30px 24px;
          }
        }
      `}</style>
    </section>
  );
}
