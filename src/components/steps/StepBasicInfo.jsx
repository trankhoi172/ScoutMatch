import React from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { useApp } from '../../context/AppContext';
import { translations } from '../../utils/translations';
import { Award, User, Activity, Info } from 'lucide-react';

export default function StepBasicInfo() {
  const { language } = useApp();
  const { formData, updateField, errors } = useQuestionnaire();
  const t = translations[language].questionnaire.basic;

  // Group positions by categories
  const positionGroups = [
    {
      id: "goalkeeper",
      title: t.categories.goalkeeper,
      positions: ["GK"]
    },
    {
      id: "defenders",
      title: t.categories.defenders,
      positions: ["LB", "CB", "RB", "LWB", "RWB"]
    },
    {
      id: "midfielders",
      title: t.categories.midfielders,
      positions: ["CDM", "CM", "CAM", "LM", "RM"]
    },
    {
      id: "forwards",
      title: t.categories.forwards,
      positions: ["LW", "RW", "CF", "ST", "SS", "F9"]
    }
  ];

  // Coordinates on pitch by percentage (bottom: Goalkeeper 5%, top: Forwards 90%)
  const pitchPositions = {
    GK: { name: "GK", bottom: 6, left: 50 },
    
    LB: { name: "LB", bottom: 25, left: 16 },
    CB: { name: "CB", bottom: 21, left: 50 },
    RB: { name: "RB", bottom: 25, left: 84 },
    LWB: { name: "LWB", bottom: 35, left: 12 },
    RWB: { name: "RWB", bottom: 35, left: 88 },
    
    CDM: { name: "CDM", bottom: 43, left: 50 },
    LM: { name: "LM", bottom: 58, left: 16 },
    CM: { name: "CM", bottom: 54, left: 50 },
    RM: { name: "RM", bottom: 58, left: 84 },
    CAM: { name: "CAM", bottom: 67, left: 50 },
    
    LW: { name: "LW", bottom: 81, left: 20 },
    RW: { name: "RW", bottom: 81, left: 80 },
    CF: { name: "CF", bottom: 88, left: 32 },
    F9: { name: "F9", bottom: 80, left: 68 },
    SS: { name: "SS", bottom: 74, left: 50 },
    ST: { name: "ST", bottom: 90, left: 50 }
  };

  const handlePositionSelect = (posCode) => {
    updateField('basic', 'primaryPosition', posCode);
  };

  return (
    <div className="step-basic-container">
      
      {/* 1. Basic Details Card */}
      <div className="glass-card form-section-card">
        <h3 className="section-card-title">
          <User size={18} />
          <span>{language === 'en' ? 'Player Profile Dossier' : 'Hồ Sơ Cầu Thủ'}</span>
        </h3>
        
        <div className="inputs-grid">
          {/* Full Name (Floating Label) */}
          <div className={`floating-group ${errors.name ? 'has-error' : ''}`}>
            <input
              id="player-name"
              type="text"
              className="floating-input"
              placeholder=" "
              value={formData.basic.name}
              onChange={(e) => updateField('basic', 'name', e.target.value)}
              required
            />
            <label className="floating-label" htmlFor="player-name">
              {t.name} *
            </label>
            {errors.name && <span className="error-msg">{t.validation.name}</span>}
          </div>

          {/* Nickname (Floating Label) */}
          <div className="floating-group">
            <input
              id="player-nickname"
              type="text"
              className="floating-input"
              placeholder=" "
              value={formData.basic.nickname}
              onChange={(e) => updateField('basic', 'nickname', e.target.value)}
            />
            <label className="floating-label" htmlFor="player-nickname">
              {t.nickname}
            </label>
          </div>
        </div>

        <div className="inputs-row-3">
          {/* Age (Floating Label) */}
          <div className={`floating-group ${errors.age ? 'has-error' : ''}`}>
            <input
              id="player-age"
              type="number"
              min="5"
              max="99"
              className="floating-input text-center"
              placeholder=" "
              value={formData.basic.age}
              onChange={(e) => updateField('basic', 'age', e.target.value)}
              required
            />
            <label className="floating-label center-label" htmlFor="player-age">
              {t.age} *
            </label>
            {errors.age && <span className="error-msg">{t.validation.age}</span>}
          </div>

          {/* Height (Floating Label) */}
          <div className={`floating-group ${errors.height ? 'has-error' : ''}`}>
            <input
              id="player-height"
              type="number"
              min="100"
              max="250"
              className="floating-input text-center"
              placeholder=" "
              value={formData.basic.height}
              onChange={(e) => updateField('basic', 'height', e.target.value)}
              required
            />
            <label className="floating-label center-label" htmlFor="player-height">
              {t.height} *
            </label>
            {errors.height && <span className="error-msg">{t.validation.height}</span>}
          </div>

          {/* Weight (Floating Label) */}
          <div className={`floating-group ${errors.weight ? 'has-error' : ''}`}>
            <input
              id="player-weight"
              type="number"
              min="30"
              max="150"
              className="floating-input text-center"
              placeholder=" "
              value={formData.basic.weight}
              onChange={(e) => updateField('basic', 'weight', e.target.value)}
              required
            />
            <label className="floating-label center-label" htmlFor="player-weight">
              {t.weight} *
            </label>
            {errors.weight && <span className="error-msg">{t.validation.weight}</span>}
          </div>
        </div>
      </div>

      {/* 2. Preferred Foot Cards */}
      <div className="glass-card form-section-card">
        <h3 className="section-card-title">
          <Activity size={18} />
          <span>{t.foot}</span>
        </h3>
        
        <div className="foot-cards-grid">
          {/* Left Foot */}
          <button
            type="button"
            className={`glass-card foot-option-card ${formData.basic.preferredFoot === 'left' ? 'selected' : ''}`}
            onClick={() => updateField('basic', 'preferredFoot', 'left')}
          >
            <div className="foot-icon-wrap">
              <svg viewBox="0 0 100 100" className="foot-svg">
                {/* Left foot struck ball contour */}
                <circle cx="20" cy="50" r="12" className="ball-stroke" />
                <path d="M75,25 C65,30 55,40 50,55 C45,70 50,85 70,80 C85,75 88,50 82,35 Z" className="boot-stroke" />
                <path d="M42,42 L25,48 M45,55 L28,52 M47,68 L32,58" className="kick-lines" />
              </svg>
            </div>
            <div className="foot-card-content">
              <span className="foot-card-title">{t.footLeft}</span>
              <p className="foot-card-desc">{t.footLeftDesc}</p>
            </div>
          </button>

          {/* Right Foot */}
          <button
            type="button"
            className={`glass-card foot-option-card ${formData.basic.preferredFoot === 'right' ? 'selected' : ''}`}
            onClick={() => updateField('basic', 'preferredFoot', 'right')}
          >
            <div className="foot-icon-wrap">
              <svg viewBox="0 0 100 100" className="foot-svg">
                {/* Right foot struck ball contour */}
                <circle cx="80" cy="50" r="12" className="ball-stroke" />
                <path d="M25,25 C35,30 45,40 50,55 C55,70 50,85 30,80 C15,75 12,50 18,35 Z" className="boot-stroke" />
                <path d="M58,42 L75,48 M55,55 L72,52 M53,68 L68,58" className="kick-lines" />
              </svg>
            </div>
            <div className="foot-card-content">
              <span className="foot-card-title">{t.footRight}</span>
              <p className="foot-card-desc">{t.footRightDesc}</p>
            </div>
          </button>

          {/* Both Feet */}
          <button
            type="button"
            className={`glass-card foot-option-card ${formData.basic.preferredFoot === 'both' ? 'selected' : ''}`}
            onClick={() => updateField('basic', 'preferredFoot', 'both')}
          >
            <div className="foot-icon-wrap">
              <svg viewBox="0 0 100 100" className="foot-svg">
                {/* Both feet struck ball contour */}
                <circle cx="50" cy="30" r="12" className="ball-stroke" />
                <path d="M30,55 C35,60 38,70 30,85 C22,80 18,65 24,55 Z" className="boot-stroke" />
                <path d="M70,55 C65,60 62,70 70,85 C78,80 82,65 76,55 Z" className="boot-stroke" />
                <path d="M38,48 L46,38 M62,48 L54,38" className="kick-lines" />
              </svg>
            </div>
            <div className="foot-card-content">
              <span className="foot-card-title">{t.footBoth}</span>
              <p className="foot-card-desc">{t.footBothDesc}</p>
            </div>
          </button>
        </div>
      </div>

      {/* 3. Double Position Selection Selector */}
      <div className="glass-card form-section-card selector-section-card">
        <div className="selector-title-row">
          <Award size={18} className="selector-icon" />
          <div className="selector-title-texts">
            <h3 className="section-card-title no-margin">{t.position} *</h3>
            <span className="section-card-subtitle">{t.positionSubtitle}</span>
          </div>
        </div>

        {errors.position && (
          <div className="position-error-banner">
            {t.validation.position}
          </div>
        )}

        <div className="position-selectors-layout">
          
          {/* Method 2: Interactive Pitch (Left Column on Desktop) */}
          <div className="pitch-selector-card glass-card">
            <div className="pitch-canvas-wrapper">
              <div className="pitch-field-outline">
                {/* Touchlines */}
                <div className="pitch-center-circle"></div>
                <div className="pitch-center-line"></div>
                
                {/* Penalty areas */}
                <div className="pitch-penalty-area top"></div>
                <div className="pitch-penalty-area bottom"></div>
                
                {/* Clickable Position Markers */}
                {Object.entries(pitchPositions).map(([posKey, posInfo]) => {
                  const isSelected = formData.basic.primaryPosition === posKey;
                  const label = t.positions[posKey]?.name || posKey;
                  const abbreviation = posKey;
                  
                  return (
                    <button
                      key={posKey}
                      type="button"
                      className={`pitch-marker ${isSelected ? 'selected' : ''}`}
                      style={{ 
                        bottom: `${posInfo.bottom}%`, 
                        left: `${posInfo.left}%` 
                      }}
                      onClick={() => handlePositionSelect(posKey)}
                      title={label}
                      aria-pressed={isSelected}
                    >
                      <span className="marker-text">{abbreviation}</span>
                      
                      {/* Pulse Glow under selected */}
                      {isSelected && <span className="marker-pulse"></span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display Selected position below pitch */}
            <div className="pitch-selected-display">
              <Info size={14} className="display-info-icon" />
              <div className="display-text-wrap">
                <span className="display-label">{t.selectedPositionLabel}:</span>
                <span className="display-value">
                  {formData.basic.primaryPosition 
                    ? t.positions[formData.basic.primaryPosition]?.name 
                    : (language === 'en' ? 'None selected' : 'Chưa chọn')}
                </span>
              </div>
            </div>
          </div>

          {/* Method 1: Category Selection Grid (Right Column on Desktop) */}
          <div className="categories-grid-card">
            {positionGroups.map((group) => (
              <div key={group.id} className="category-group-section">
                <h4 className="category-group-header">{group.title}</h4>
                
                <div className="category-cards-grid">
                  {group.positions.map((posKey) => {
                    const isSelected = formData.basic.primaryPosition === posKey;
                    const posData = t.positions[posKey] || { name: posKey, desc: "" };
                    
                    return (
                      <button
                        key={posKey}
                        type="button"
                        className={`glass-card position-grid-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => handlePositionSelect(posKey)}
                        aria-pressed={isSelected}
                      >
                        <div className="pos-badge">{posKey}</div>
                        <div className="pos-card-info">
                          <span className="pos-card-name">{posData.name}</span>
                          {posData.desc && <p className="pos-card-desc">{posData.desc}</p>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .step-basic-container {
          display: flex;
          flex-direction: column;
          gap: 32px;
          width: 100%;
          text-align: left;
        }

        .form-section-card {
          padding: 30px;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          gap: 24px;
          background: rgba(12, 15, 23, 0.4);
        }

        .section-card-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 12px;
        }

        .section-card-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .no-margin {
          border-bottom: none !important;
          padding-bottom: 0 !important;
        }

        /* Floating labels group style */
        .floating-group {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .floating-input {
          width: 100%;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 18px 20px 10px 20px;
          border-radius: var(--border-radius-sm);
          font-family: var(--font-body);
          font-size: 1rem;
          height: 56px;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .floating-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 10px var(--accent-glow);
          outline: none;
        }

        /* Floating label transition positioning */
        .floating-label {
          position: absolute;
          left: 20px;
          top: 18px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: transform 0.2s ease, font-size 0.2s ease, color 0.2s ease, top 0.2s ease;
          pointer-events: none;
        }

        /* Float on focus or value present */
        .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
          transform: scale(0.8) translate(-10%, -60%);
          color: var(--accent);
          top: 10px;
        }

        /* Specific center labels alignment (for Age, Height, Weight) */
        .center-label {
          width: 100%;
          left: 0;
          text-align: center;
        }
        
        .floating-input:focus ~ .center-label,
        .floating-input:not(:placeholder-shown) ~ .center-label {
          transform: scale(0.8) translate(0, -60%);
        }

        .inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .inputs-row-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }

        .text-center {
          text-align: center;
        }

        .error-msg {
          font-size: 0.85rem;
          color: #ff4a4a;
          font-weight: 500;
          margin-top: 4px;
        }

        .floating-group.has-error .floating-input {
          border-color: #ff4a4a !important;
          box-shadow: 0 0 10px rgba(255, 74, 74, 0.15) !important;
        }

        /* Preferred Foot selector cards design */
        .foot-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .foot-option-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: rgba(12, 15, 23, 0.4);
          text-align: center;
          width: 100%;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      color var(--transition-fast);
        }

        .foot-option-card:hover {
          transform: translateY(-4px);
          border-color: rgba(var(--accent-rgb), 0.3);
          color: var(--text-primary);
        }

        .foot-option-card.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .foot-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .foot-option-card:hover .foot-icon-wrap {
          border-color: rgba(var(--accent-rgb), 0.3);
        }

        .foot-option-card.selected .foot-icon-wrap {
          background: rgba(var(--accent-rgb), 0.15);
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.2);
        }

        .foot-svg {
          width: 42px;
          height: 42px;
        }

        /* SVG styling for foot cards */
        .ball-stroke {
          fill: none;
          stroke: var(--text-muted);
          stroke-width: 2;
          stroke-dasharray: 4 2;
        }
        
        .foot-option-card.selected .ball-stroke {
          stroke: var(--accent-blue);
          filter: drop-shadow(0 0 4px rgba(0, 210, 255, 0.4));
        }

        .boot-stroke {
          fill: none;
          stroke: var(--text-secondary);
          stroke-width: 2.5;
        }

        .foot-option-card.selected .boot-stroke {
          stroke: var(--accent);
          filter: drop-shadow(0 0 4px var(--accent-glow));
        }

        .kick-lines {
          fill: none;
          stroke: var(--text-muted);
          stroke-width: 2;
          opacity: 0.5;
        }

        .foot-option-card.selected .kick-lines {
          stroke: var(--accent);
          opacity: 1;
        }

        .foot-card-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .foot-card-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .foot-card-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* Double positions selector layouts */
        .selector-title-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 16px;
        }

        .selector-icon {
          color: var(--accent);
          margin-top: 4px;
        }

        .selector-title-texts {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .position-error-banner {
          background: rgba(255, 74, 74, 0.1);
          border: 1px solid rgba(255, 74, 74, 0.3);
          color: #ff4a4a;
          padding: 12px 18px;
          border-radius: var(--border-radius-sm);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .position-selectors-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          width: 100%;
        }

        /* Method 2: Tactical soccer pitch card */
        .pitch-selector-card {
          width: 100%;
          height: 520px;
          background: linear-gradient(180deg, #091a13 0%, #050d0a 100%);
          border: 1px solid rgba(0, 242, 148, 0.2);
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          padding: 16px;
          position: relative;
          box-shadow: var(--shadow-md), 0 0 25px rgba(0, 242, 148, 0.05);
        }

        .theme-light .pitch-selector-card {
          background: linear-gradient(180deg, #e6f4ea 0%, #d4edd9 100%);
          border-color: rgba(5, 150, 105, 0.3);
          box-shadow: var(--shadow-sm);
        }

        .pitch-canvas-wrapper {
          flex: 1;
          width: 100%;
          position: relative;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          overflow: hidden;
        }

        .theme-light .pitch-canvas-wrapper {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-field-outline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
        }

        .theme-light .pitch-field-outline {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-center-line {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.12);
        }

        .theme-light .pitch-center-line {
          background: rgba(5, 150, 105, 0.2);
        }

        .pitch-center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          height: 70px;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .theme-light .pitch-center-circle {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-penalty-area {
          position: absolute;
          left: 50%;
          width: 130px;
          height: 60px;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          transform: translateX(-50%);
        }

        .theme-light .pitch-penalty-area {
          border-color: rgba(5, 150, 105, 0.2);
        }

        .pitch-penalty-area.top {
          top: 0;
          border-top: none;
          border-radius: 0 0 12px 12px;
        }

        .pitch-penalty-area.bottom {
          bottom: 0;
          border-bottom: none;
          border-radius: 12px 12px 0 0;
        }

        /* Marker nodes styling */
        .pitch-marker {
          position: absolute;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1.5px solid var(--text-muted);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transform: translate(-50%, 50%);
          z-index: 10;
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      box-shadow var(--transition-fast);
        }

        .pitch-marker:hover {
          border-color: var(--accent);
          background-color: var(--bg-tertiary);
          transform: translate(-50%, 50%) scale(1.15);
        }

        .pitch-marker.selected {
          border-color: var(--accent);
          background: var(--accent);
          color: #07090e;
          font-weight: 800;
          box-shadow: 0 0 12px var(--accent);
        }

        .marker-text {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
        }

        /* Selected pulse circle under marker */
        .marker-pulse {
          position: absolute;
          width: 44px;
          height: 44px;
          border: 1.5px solid var(--accent);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .animations-on .marker-pulse {
          animation: markerPulseGlow 2s infinite ease-out;
        }

        @keyframes markerPulseGlow {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        .pitch-selected-display {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 10px 14px;
          border-radius: var(--border-radius-sm);
        }

        .display-info-icon {
          color: var(--accent-blue);
        }

        .display-text-wrap {
          display: flex;
          gap: 6px;
          font-size: 0.85rem;
        }

        .display-label {
          color: var(--text-muted);
        }

        .display-value {
          font-weight: 700;
          color: var(--accent);
        }

        /* Method 1: Category Position lists */
        .categories-grid-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .category-group-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .category-group-header {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent-blue);
          border-left: 2.5px solid var(--accent-blue);
          padding-left: 8px;
        }

        .category-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }

        .position-grid-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          border: 1px solid var(--glass-border);
          background: rgba(12, 15, 23, 0.3);
          text-align: left;
          width: 100%;
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), 
                      background-color var(--transition-fast), 
                      transform var(--transition-fast), 
                      color var(--transition-fast);
        }

        .position-grid-card:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--accent-rgb), 0.25);
          color: var(--text-primary);
        }

        .position-grid-card.selected {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--text-primary);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.1);
        }

        .pos-badge {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color var(--transition-fast);
        }

        .position-grid-card.selected .pos-badge {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(var(--accent-rgb), 0.05);
        }

        .pos-card-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .pos-card-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .pos-card-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        @media (max-width: 1024px) {
          .position-selectors-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .pitch-selector-card {
            max-width: 320px;
            margin: 0 auto;
            height: 480px;
          }
        }

        @media (max-width: 768px) {
          .inputs-grid {
            grid-template-columns: 1fr;
          }
          .foot-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .form-section-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
