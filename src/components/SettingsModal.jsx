import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { X, Volume2, VolumeX, Sparkles, Languages, RotateCcw } from 'lucide-react';

export default function SettingsModal({ isOpen, onClose }) {
  const { 
    language, setLanguage, 
    animations, setAnimations, 
    sound, setSound, 
    resetSettings 
  } = useApp();
  
  const t = translations[language].settings;
  const drawerRef = useRef(null);

  // Close drawer on Esc keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside to close
  const handleBackdropClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`settings-backdrop ${animations === 'off' ? 'instant' : ''}`} 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
    >
      <div 
        ref={drawerRef} 
        className={`settings-drawer ${animations === 'off' ? 'instant' : ''}`}
      >
        {/* Header */}
        <div className="drawer-header">
          <h2 id="settings-title" className="drawer-title">{t.title}</h2>
          <button 
            className="close-btn" 
            onClick={onClose}
            aria-label="Close Settings"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="drawer-body">

          {/* Language selector */}
          <div className="setting-group">
            <div className="setting-label-row">
              <span className="setting-icon-tag"><Languages size={18} /></span>
              <span className="setting-label">{t.language}</span>
            </div>
            <div className="segmented-control">
              <button 
                className={`segment-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
              <button 
                className={`segment-btn ${language === 'vi' ? 'active' : ''}`}
                onClick={() => setLanguage('vi')}
              >
                Tiếng Việt
              </button>
            </div>
          </div>

          {/* Animations toggle */}
          <div className="setting-group switch-group">
            <div className="setting-label-row">
              <span className="setting-icon-tag"><Sparkles size={18} /></span>
              <span className="setting-label">{t.animations}</span>
            </div>
            <button 
              className={`toggle-switch ${animations === 'on' ? 'checked' : ''}`}
              onClick={() => setAnimations(animations === 'on' ? 'off' : 'on')}
              aria-label="Toggle Animations"
              role="switch"
              aria-checked={animations === 'on'}
            >
              <span className="toggle-label-text">
                {animations === 'on' ? t.on : t.off}
              </span>
              <span className="toggle-handle"></span>
            </button>
          </div>

          {/* Sound toggle */}
          <div className="setting-group switch-group">
            <div className="setting-label-row">
              <span className="setting-icon-tag">
                {sound === 'on' ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </span>
              <span className="setting-label">{t.sound}</span>
            </div>
            <button 
              className={`toggle-switch ${sound === 'on' ? 'checked' : ''}`}
              onClick={() => setSound(sound === 'on' ? 'off' : 'on')}
              aria-label="Toggle Sound Effects"
              role="switch"
              aria-checked={sound === 'on'}
            >
              <span className="toggle-label-text">
                {sound === 'on' ? t.on : t.off}
              </span>
              <span className="toggle-handle"></span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="drawer-footer">
          <button 
            className="btn-reset" 
            onClick={resetSettings}
            aria-label="Reset settings to default values"
          >
            <RotateCcw size={16} />
            <span>{t.reset}</span>
          </button>
        </div>
      </div>

      <style>{`
        .settings-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeInBackdrop 0.4s ease forwards;
        }

        .settings-backdrop.instant {
          animation: none !important;
          backdrop-filter: blur(4px) !important;
        }

        .settings-drawer {
          width: 100%;
          max-width: 420px;
          height: 100%;
          background: var(--glass-bg);
          border-left: 1px solid var(--glass-border);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          animation: slideInDrawer 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .settings-drawer.instant {
          animation: none !important;
          transform: translateX(0) !important;
        }

        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInDrawer {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          padding: 24px;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-title {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .close-btn:hover {
          background: var(--glass-border);
          color: var(--text-primary);
        }

        .drawer-body {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          overflow-y: auto;
        }

        .setting-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .setting-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
        }

        .setting-icon-tag {
          color: var(--accent);
          display: flex;
          align-items: center;
        }

        .setting-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-primary);
        }

        /* Segmented buttons styling */
        .segmented-control {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 4px;
          border-radius: var(--border-radius-sm);
        }

        .segment-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .segment-btn.active {
          background: var(--bg-secondary);
          color: var(--accent);
          border: 1px solid var(--glass-border);
          box-shadow: var(--shadow-sm);
        }

        /* Toggle switch styling */
        .setting-group.switch-group {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .toggle-switch {
          position: relative;
          width: 90px;
          height: 38px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-full);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0 10px;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .toggle-label-text {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-secondary);
          width: 100%;
          text-align: left;
          padding-left: 2px;
          transition: color var(--transition-fast);
        }

        .toggle-handle {
          position: absolute;
          right: 4px;
          top: 3px;
          width: 30px;
          height: 30px;
          background: var(--text-muted);
          border-radius: 50%;
          transition: transform var(--transition-normal), background-color var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }

        .toggle-switch.checked {
          background: rgba(var(--accent-rgb), 0.1);
          border-color: rgba(var(--accent-rgb), 0.3);
        }

        .toggle-switch.checked .toggle-label-text {
          color: var(--accent);
          text-align: right;
          padding-right: 32px;
        }

        .toggle-switch.checked .toggle-handle {
          transform: translateX(-50px);
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .drawer-footer {
          padding: 24px;
          border-top: 1px solid var(--glass-border);
        }

        .btn-reset {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          border: 1px dashed var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 12px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: color var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-reset:hover {
          color: var(--text-primary);
          border-color: var(--text-muted);
          background-color: rgba(255, 255, 255, 0.02);
        }
        
        .btn-reset:active {
          transform: scale(0.98);
        }

        @media (max-width: 480px) {
          .settings-drawer {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
