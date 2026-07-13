import React from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { Globe } from 'lucide-react';

export default function Footer() {
  const { language, setLanguage } = useApp();
  const t = translations[language].footer;

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-left">
          <p className="copyright">{t.copyright}</p>
        </div>
        
        <div className="footer-links">
          <a href="#about">{t.about}</a>
          <a href="#privacy">{t.privacy}</a>
          <a href="#terms">{t.terms}</a>
          <a href="#contact">{t.contact}</a>
        </div>
        
        <div className="footer-right">
          <div className="footer-lang-selector" aria-label="Language Selector">
            <Globe size={16} className="lang-icon" />
            <button 
              className={`lang-option-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="divider">|</span>
            <button 
              className={`lang-option-btn ${language === 'vi' ? 'active' : ''}`}
              onClick={() => setLanguage('vi')}
              aria-label="Switch to Vietnamese"
            >
              VI
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 40px 0;
          background-color: var(--bg-primary);
          border-top: 1px solid var(--glass-border);
          position: relative;
          z-index: 5;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          align-items: center;
        }

        .copyright {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        .footer-right {
          display: flex;
          align-items: center;
        }

        .footer-lang-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 6px 12px;
          border-radius: var(--border-radius-full);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .lang-icon {
          color: var(--text-muted);
        }

        .lang-option-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-weight: 700;
          transition: color var(--transition-fast);
        }

        .lang-option-btn.active {
          color: var(--accent);
        }

        .lang-option-btn:hover {
          color: var(--text-primary);
        }

        .divider {
          color: var(--glass-border);
          user-select: none;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}
