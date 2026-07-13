import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { Settings, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenSettings, onNavigate }) {
  const { language, animations } = useApp();
  const t = translations[language].nav;
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height to change nav bar backdrop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (onNavigate) {
      onNavigate(targetId);
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: animations === 'on' ? 'smooth' : 'auto'
      });
    } else if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: animations === 'on' ? 'smooth' : 'auto'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <span className="logo-icon">⚽</span>
          <span className="logo-text">{t.logo}</span>
        </a>

        {/* Desktop Menu */}
        <ul className="nav-links-desktop">
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>{t.home}</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>{t.about}</a>
          </li>
          <li>
            <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')}>{t.faq}</a>
          </li>
          <li>
            <button 
              className="icon-btn" 
              onClick={onOpenSettings} 
              aria-label={t.settings}
              title={t.settings}
            >
              <Settings size={20} className="nav-settings-icon" />
            </button>
          </li>
        </ul>

        {/* Mobile Controls */}
        <div className="nav-controls-mobile">
          <button 
            className="icon-btn" 
            onClick={onOpenSettings} 
            aria-label={t.settings}
            title={t.settings}
          >
            <Settings size={20} />
          </button>
          <button 
            className="icon-btn menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-drawer-mobile ${isMobileMenuOpen ? 'open' : ''} ${animations === 'off' ? 'instant' : ''}`}>
        <ul className="nav-links-mobile">
          <li>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>{t.home}</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>{t.about}</a>
          </li>
          <li>
            <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')}>{t.faq}</a>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background-color var(--transition-normal), border-color var(--transition-normal), backdrop-filter var(--transition-normal), height var(--transition-normal);
          display: flex;
          align-items: center;
        }
        
        .navbar.scrolled {
          background: var(--glass-bg);
          border-bottom: 1px solid var(--glass-border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          height: 70px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: 0.05em;
        }
        
        .logo-icon {
          font-size: 1.6rem;
          filter: drop-shadow(0 0 8px var(--accent-glow-strong));
        }

        .logo-text {
          background: linear-gradient(135deg, var(--text-primary) 50%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 32px;
        }

        .nav-links-desktop a {
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.02em;
          transition: color var(--transition-fast);
          position: relative;
          padding: 8px 0;
        }

        .nav-links-desktop a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width var(--transition-fast);
          border-radius: var(--border-radius-full);
        }

        .nav-links-desktop a:hover {
          color: var(--text-primary);
        }

        .nav-links-desktop a:hover::after {
          width: 100%;
        }

        .icon-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color var(--transition-fast), background-color var(--transition-fast), transform var(--transition-fast);
          border: 1px solid transparent;
        }

        .icon-btn:hover {
          color: var(--accent);
          background-color: var(--accent-glow);
          border-color: rgba(var(--accent-rgb), 0.1);
          transform: scale(1.05);
        }
        
        .icon-btn:active {
          transform: scale(0.95);
        }

        .nav-settings-icon {
          transition: transform 0.5s ease;
        }

        .icon-btn:hover .nav-settings-icon {
          transform: rotate(45deg);
        }

        .nav-controls-mobile {
          display: none;
          align-items: center;
          gap: 8px;
        }

        /* Mobile Menu Drawer */
        .nav-drawer-mobile {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--glass-border);
          padding: 24px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: opacity var(--transition-normal), transform var(--transition-normal), visibility var(--transition-normal);
          z-index: 999;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .nav-drawer-mobile.instant {
          transition: none !important;
        }

        .nav-drawer-mobile.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav-links-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style: none;
          gap: 20px;
        }

        .nav-links-mobile a {
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.2rem;
          padding: 8px 24px;
          width: 100%;
          text-align: center;
          transition: color var(--transition-fast);
        }

        .nav-links-mobile a:hover {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none;
          }
          
          .nav-controls-mobile {
            display: flex;
          }
          
          .navbar.scrolled {
            height: 70px;
          }
          
          .navbar.scrolled + .nav-drawer-mobile {
            top: 70px;
          }
          
          .nav-drawer-mobile {
            top: 80px;
          }
        }
      `}</style>
    </nav>
  );
}
