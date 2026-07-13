import React from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { useApp } from '../../context/AppContext';
import { translations } from '../../utils/translations';
import { ShieldAlert } from 'lucide-react';

export default function StepTactics() {
  const { language } = useApp();
  const { formData, updateField, errors } = useQuestionnaire();
  const t = translations[language].questionnaire.tactics;

  const systems = [
    'possession', 'counter', 'highPress', 'balanced', 
    'longBall', 'direct', 'wingPlay', 'defensive'
  ];

  const roles = [
    'playmaker', 'boxToBox', 'deepPlaymaker', 'ballWinning', 
    'insideForward', 'poacher', 'targetMan', 'false9', 
    'advancedForward', 'completeForward', 'traditionalWinger', 'sweeperKeeper'
  ];

  return (
    <div className="step-tactics-container">
      <h3 className="tactics-step-title">{t.title}</h3>

      {/* System Preference */}
      <div className={`form-field ${errors.system ? 'has-error' : ''}`}>
        <label className="tactical-field-label">
          <span>{t.system} *</span>
        </label>
        {errors.system && (
          <span className="tactical-error-msg">
            <ShieldAlert size={14} />
            {t.validationSystem}
          </span>
        )}
        <div className="tactics-radio-grid">
          {systems.map((sys) => {
            const label = t.systems[sys] || sys;
            const isSelected = formData.tactics.system === sys;
            return (
              <button
                key={sys}
                type="button"
                className={`glass-card tactic-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => updateField('tactics', 'system', sys)}
                aria-pressed={isSelected}
              >
                <div className="radio-indicator">
                  {isSelected && <span className="radio-dot"></span>}
                </div>
                <span className="tactic-btn-label">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Role Preference */}
      <div className={`form-field ${errors.role ? 'has-error' : ''}`}>
        <label className="tactical-field-label">
          <span>{t.role} *</span>
        </label>
        {errors.role && (
          <span className="tactical-error-msg">
            <ShieldAlert size={14} />
            {t.validationRole}
          </span>
        )}
        <div className="tactics-radio-grid">
          {roles.map((role) => {
            const label = t.roles[role] || role;
            const isSelected = formData.tactics.role === role;
            return (
              <button
                key={role}
                type="button"
                className={`glass-card tactic-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => updateField('tactics', 'role', role)}
                aria-pressed={isSelected}
              >
                <div className="radio-indicator">
                  {isSelected && <span className="radio-dot"></span>}
                </div>
                <span className="tactic-btn-label">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .step-tactics-container {
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .tactics-step-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .tactical-field-label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
          border-left: 3px solid var(--accent);
          padding-left: 10px;
          margin-bottom: 4px;
        }

        .tactics-radio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-top: 8px;
        }

        .tactic-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
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

        .tactic-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--accent-rgb), 0.3);
          color: var(--text-primary);
        }

        .tactic-btn.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .radio-indicator {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color var(--transition-fast);
        }

        .tactic-btn:hover .radio-indicator {
          border-color: var(--accent);
        }

        .tactic-btn.selected .radio-indicator {
          border-color: var(--accent);
        }

        .radio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--accent);
          display: inline-block;
          box-shadow: 0 0 8px var(--accent-glow);
        }

        .tactic-btn-label {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .tactical-error-msg {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #ff4a4a;
          font-weight: 500;
          margin-top: 4px;
        }

        .form-field.has-error .tactic-btn {
          border-color: rgba(255, 74, 74, 0.2);
        }
        
        .form-field.has-error .tactic-btn.selected {
          border-color: var(--accent);
        }

        @media (max-width: 600px) {
          .tactics-radio-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}
