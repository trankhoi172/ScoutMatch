import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';

export default function LoadingScreen({ onComplete }) {
  const { language, animations } = useApp();
  const t = translations[language].loading;
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Fade out phase
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade transition before completing
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 500); // matches CSS fade duration
      return () => clearTimeout(completeTimer);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out-loader' : ''} ${animations === 'off' ? 'instant' : ''}`}>
      <div className="loader-content">
        {/* Minimalist SVG Soccer Ball Path Drawing */}
        <div className="ball-icon-wrapper">
          <svg
            className="loader-svg-ball"
            viewBox="0 0 100 100"
            width="80"
            height="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer boundary circle */}
            <circle
              className="ball-outer"
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            {/* Center Pentagon */}
            <polygon
              className="ball-inner-pentagon"
              points="50,38 61,46 57,59 43,59 39,46"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Pentagon to boundary paths */}
            <line x1="50" y1="38" x2="50" y2="4" stroke="currentColor" strokeWidth="2" />
            <line x1="61" y1="46" x2="94" y2="35" stroke="currentColor" strokeWidth="2" />
            <line x1="57" y1="59" x2="77" y2="91" stroke="currentColor" strokeWidth="2" />
            <line x1="43" y1="59" x2="23" y2="91" stroke="currentColor" strokeWidth="2" />
            <line x1="39" y1="46" x2="6" y2="35" stroke="currentColor" strokeWidth="2" />
            
            {/* Surrounding Hexagon outer ribs */}
            <line x1="50" y1="4" x2="77" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="4" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="94" y1="35" x2="77" y2="12" stroke="currentColor" strokeWidth="2" />
            <line x1="94" y1="35" x2="90" y2="68" stroke="currentColor" strokeWidth="2" />
            <line x1="77" y1="91" x2="90" y2="68" stroke="currentColor" strokeWidth="2" />
            <line x1="77" y1="91" x2="50" y2="96" stroke="currentColor" strokeWidth="2" />
            <line x1="23" y1="91" x2="50" y2="96" stroke="currentColor" strokeWidth="2" />
            <line x1="23" y1="91" x2="10" y2="68" stroke="currentColor" strokeWidth="2" />
            <line x1="6" y1="35" x2="10" y2="68" stroke="currentColor" strokeWidth="2" />
            <line x1="6" y1="35" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <h2 className="loader-title">{t.text}</h2>
        
        {/* Modern Micro Progress Indicator */}
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        <div className="progress-percentage">{Math.round(Math.min(progress, 100))}%</div>
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .loading-screen.fade-out-loader {
          opacity: 0;
          pointer-events: none;
          transform: scale(1.05);
        }
        .loading-screen.instant {
          transition: none !important;
        }
        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .ball-icon-wrapper {
          color: var(--accent);
          filter: drop-shadow(0 0 15px var(--accent-glow-strong));
        }
        
        /* SVG Animation */
        .loader-svg-ball {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawBall 2s ease-in-out infinite alternate;
        }
        .animations-off .loader-svg-ball {
          stroke-dashoffset: 0 !important;
          animation: none !important;
        }

        .loader-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          text-transform: uppercase;
        }
        
        .progress-container {
          width: 180px;
          height: 3px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-full);
          overflow: hidden;
          position: relative;
        }
        
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-blue) 100%);
          border-radius: var(--border-radius-full);
          transition: width 0.05s linear;
        }
        
        .progress-percentage {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        @keyframes drawBall {
          0% {
            stroke-dashoffset: 400;
            transform: rotate(0deg);
          }
          40% {
            stroke-dashoffset: 0;
            transform: rotate(180deg);
          }
          70% {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
          }
          100% {
            stroke-dashoffset: 0;
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
