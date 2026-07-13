import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { language } = useApp();
  const t = translations[language].faq;
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 }
  ];

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container-inner">
        <div className="faq-header text-center">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`glass-card faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="faq-header-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`faq-icon ${isOpen ? 'rotate' : ''}`} 
                  />
                </button>
                
                <div 
                  id={`faq-answer-${idx}`}
                  className="faq-answer-container"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 100px 0;
          background-color: var(--bg-primary);
          position: relative;
          z-index: 5;
        }

        .faq-container-inner {
          max-width: 800px !important;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          border-radius: var(--border-radius-md);
          overflow: hidden;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        
        .faq-item.active {
          border-color: rgba(var(--accent-rgb), 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 10px rgba(var(--accent-rgb), 0.05);
        }

        .faq-header-btn {
          width: 100%;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.15rem;
          text-align: left;
          cursor: pointer;
          gap: 20px;
        }

        .faq-question {
          flex: 1;
          transition: color var(--transition-fast);
        }

        .faq-header-btn:hover .faq-question {
          color: var(--accent);
        }

        .faq-icon {
          color: var(--text-muted);
          transition: transform var(--transition-normal), color var(--transition-normal);
          flex-shrink: 0;
        }

        .faq-item.active .faq-icon {
          color: var(--accent);
        }

        .faq-icon.rotate {
          transform: rotate(180deg);
        }

        .faq-answer-container {
          overflow: hidden;
          transition: max-height var(--transition-normal) ease-in-out, opacity var(--transition-normal) ease-in-out;
        }

        .faq-answer {
          padding: 0 24px 24px 24px;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 70px 0;
          }
          .faq-header {
            margin-bottom: 30px;
          }
          .faq-header-btn {
            padding: 20px;
            font-size: 1.05rem;
          }
          .faq-answer {
            padding: 0 20px 20px 20px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
