import React from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { useApp } from '../../context/AppContext';
import { translations } from '../../utils/translations';

export default function StepAttributes({ category }) {
  const { language } = useApp();
  const { formData, updateField } = useQuestionnaire();
  const t = translations[language].questionnaire[category];

  // Attribute keys based on category
  const attributeKeys = {
    physical: [
      'acceleration', 'sprintSpeed', 'agility', 'balance', 'strength',
      'stamina', 'jumping', 'physicality', 'reactions', 'composure', 'endurance'
    ],
    technical: [
      'ballControl', 'firstTouch', 'dribbling', 'closeControl', 'shortPassing',
      'longPassing', 'vision', 'crossing', 'curve', 'finishing', 'shotPower',
      'longShots', 'volleys', 'heading', 'penalty', 'freeKickAccuracy',
      'throughBalls', 'weakFootAbility', 'skillMoves'
    ],
    defensive: [
      'defensiveAwareness', 'interceptions', 'standingTackle', 'slidingTackle',
      'marking', 'pressing', 'aggression', 'aerialAbility'
    ],
    goalkeeper: [
      'diving', 'reflexes', 'handling', 'positioning', 'kicking',
      'distribution', 'oneOnOne', 'communication'
    ]
  };

  const keys = attributeKeys[category] || [];

  const getAttributeBadgeClass = (val) => {
    if (val >= 85) return 'rating-elite';      // 85-100: Elite (Neon Green Glow)
    if (val >= 70) return 'rating-good';       // 70-84: Good (Light Green)
    if (val >= 50) return 'rating-average';    // 50-69: Average (Grey-Cyan)
    return 'rating-developing';                // 1-49: Developing (Muted Orange)
  };

  return (
    <div className="step-attributes-container">
      <h3 className="attributes-title">{t.title}</h3>
      
      <div className="attributes-grid">
        {keys.map((key) => {
          const value = formData[category][key];
          const label = t[key] || key;
          
          return (
            <div key={key} className="glass-card attribute-slider-card">
              <div className="slider-header">
                <span className="slider-label">{label}</span>
                <span className={`slider-value-badge ${getAttributeBadgeClass(value)}`}>
                  {value}
                </span>
              </div>
              
              <div className="slider-wrapper">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={value}
                  className="attribute-range-slider"
                  onChange={(e) => updateField(category, key, parseInt(e.target.value))}
                  aria-label={label}
                />
                <div className="slider-track-fill" style={{ width: `${value}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .step-attributes-container {
          width: 100%;
          text-align: left;
        }

        .attributes-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .attributes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          width: 100%;
        }

        .attribute-slider-card {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-radius: var(--border-radius-sm);
          position: relative;
          overflow: hidden;
          background: rgba(12, 15, 23, 0.4);
        }

        .slider-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slider-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .slider-value-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          padding: 4px 10px;
          border-radius: var(--border-radius-full);
          min-width: 42px;
          text-align: center;
          border: 1px solid transparent;
        }

        /* Color badges based on values */
        .slider-value-badge.rating-elite {
          background: rgba(0, 242, 148, 0.1);
          border-color: rgba(0, 242, 148, 0.4);
          color: var(--accent);
          box-shadow: 0 0 10px rgba(0, 242, 148, 0.2);
        }

        .slider-value-badge.rating-good {
          background: rgba(0, 210, 255, 0.1);
          border-color: rgba(0, 210, 255, 0.4);
          color: var(--accent-blue);
        }

        .slider-value-badge.rating-average {
          background: rgba(148, 163, 184, 0.1);
          border-color: rgba(148, 163, 184, 0.3);
          color: var(--text-primary);
        }

        .slider-value-badge.rating-developing {
          background: rgba(249, 115, 22, 0.1);
          border-color: rgba(249, 115, 22, 0.3);
          color: #f97316;
        }

        /* Input Slider range customizing */
        .slider-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 8px;
        }

        .attribute-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-full);
          outline: none;
          cursor: pointer;
          position: relative;
          z-index: 2;
          margin: 0;
        }

        /* Webkit Handle */
        .attribute-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent);
          cursor: pointer;
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .attribute-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: var(--accent-hover);
        }

        /* Mozilla Handle */
        .attribute-range-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent);
          cursor: pointer;
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .attribute-range-slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          background: var(--accent-hover);
        }

        .slider-track-fill {
          position: absolute;
          left: 0;
          top: 1px;
          height: 6px;
          background: linear-gradient(90deg, var(--accent-blue) 0%, var(--accent) 100%);
          border-radius: var(--border-radius-full) 0 0 var(--border-radius-full);
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .attributes-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}
