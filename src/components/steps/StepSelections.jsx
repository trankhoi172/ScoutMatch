import React from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { useApp } from '../../context/AppContext';
import { translations } from '../../utils/translations';
import { Check } from 'lucide-react';

export default function StepSelections({ category }) {
  const { language } = useApp();
  const { formData, toggleArrayItem, errors } = useQuestionnaire();
  const t = translations[language].questionnaire[category === 'styles' ? 'style' : 'personality'];

  // Keys to render depending on category
  const selectionKeys = {
    styles: [
      'opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8',
      'opt9', 'opt10', 'opt11', 'opt12', 'opt13', 'opt14', 'opt15',
      'opt16', 'opt17'
    ],
    personality: [
      'calm', 'aggressive', 'creative', 'leader', 'hardWorker',
      'teamPlayer', 'selfless', 'confident', 'clinical', 'intelligent',
      'disciplined', 'passionate', 'competitive', 'riskTaker',
      'composedUnderPressure'
    ]
  };

  const keys = selectionKeys[category] || [];
  const selectedItems = formData[category] || [];
  const hasError = errors[category];

  return (
    <div className="step-selections-container">
      <h3 className="selections-title">{t.title}</h3>
      
      {hasError && (
        <div className="selection-error-banner">
          {t.validation}
        </div>
      )}

      <div className="selections-grid">
        {keys.map((key) => {
          const label = t[key] || key;
          const isSelected = selectedItems.includes(key);
          
          return (
            <button
              key={key}
              type="button"
              className={`glass-card selection-card-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleArrayItem(category, key)}
              aria-pressed={isSelected}
            >
              <div className="check-box-indicator">
                {isSelected && <Check size={14} className="check-icon" />}
              </div>
              <span className="selection-label-text">{label}</span>
            </button>
          );
        })}
      </div>

      <style>{`
        .step-selections-container {
          width: 100%;
          text-align: left;
        }

        .selections-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .selection-error-banner {
          background: rgba(255, 74, 74, 0.1);
          border: 1px solid rgba(255, 74, 74, 0.3);
          color: #ff4a4a;
          padding: 12px 18px;
          border-radius: var(--border-radius-sm);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .selections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          width: 100%;
        }

        .selection-card-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: rgba(12, 15, 23, 0.4);
          text-align: left;
          width: 100%;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      color var(--transition-fast),
                      box-shadow var(--transition-fast);
        }

        .selection-card-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--accent-rgb), 0.3);
          color: var(--text-primary);
        }

        .selection-card-btn.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .check-box-indicator {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1.5px solid var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
          flex-shrink: 0;
        }

        .selection-card-btn:hover .check-box-indicator {
          border-color: var(--accent);
        }

        .selection-card-btn.selected .check-box-indicator {
          background-color: var(--accent);
          border-color: var(--accent);
        }

        .check-icon {
          color: #07090e;
        }

        .selection-label-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 600px) {
          .selections-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
