import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { useApp } from '../../context/AppContext';
import { translations } from '../../utils/translations';
import { Edit2, User, Activity, Sliders, Shield, Award, CheckCircle, Brain, Target, X, Check } from 'lucide-react';
import StepBasicInfo from './StepBasicInfo';
import StepAttributes from './StepAttributes';
import StepSelections from './StepSelections';
import StepTactics from './StepTactics';

export default function StepReview() {
  const { language } = useApp();
  const { formData, isGoalkeeper, validateStep } = useQuestionnaire();
  const t = translations[language].questionnaire.review;
  const tBasic = translations[language].questionnaire.basic;
  const tStyles = translations[language].questionnaire.style;
  const tMental = translations[language].questionnaire.personality;
  const tTactics = translations[language].questionnaire.tactics;

  const [activeEditSection, setActiveEditSection] = useState(null);

  // Helper to render label tags
  const renderItemTag = (label) => (
    <span key={label} className="review-tag-item">
      {label}
    </span>
  );

  const getSectionTitle = (sec) => {
    switch (sec) {
      case 'basic': return language === 'en' ? 'Edit Profile Overview' : 'Chỉnh sửa hồ sơ cá nhân';
      case 'physical': return language === 'en' ? 'Edit Physical Dossier' : 'Chỉnh sửa chỉ số thể trạng';
      case 'technical': return language === 'en' ? 'Edit Technical Skills' : 'Chỉnh sửa kỹ năng kỹ thuật';
      case 'defensive': return language === 'en' ? 'Edit Defensive Prowess' : 'Chỉnh sửa khả năng phòng ngự';
      case 'goalkeeper': return language === 'en' ? 'Edit Goalkeeper Record' : 'Chỉnh sửa kỹ năng thủ môn';
      case 'styles': return language === 'en' ? 'Edit Playing Styles' : 'Chỉnh sửa phong cách thi đấu';
      case 'personality': return language === 'en' ? 'Edit Mentality Traits' : 'Chỉnh sửa phẩm chất tinh thần';
      case 'tactics': return language === 'en' ? 'Edit Tactical Blueprint' : 'Chỉnh sửa chiến thuật & vai trò';
      default: return '';
    }
  };

  const handleSaveSection = () => {
    const stepMap = {
      basic: 1,
      styles: 6,
      personality: 7,
      tactics: 8
    };
    const stepNum = stepMap[activeEditSection];
    if (stepNum) {
      if (validateStep(stepNum)) {
        setActiveEditSection(null);
      }
    } else {
      setActiveEditSection(null);
    }
  };

  const renderModalContent = () => {
    switch (activeEditSection) {
      case 'basic':
        return <StepBasicInfo />;
      case 'physical':
        return <StepAttributes category="physical" />;
      case 'technical':
        return <StepAttributes category="technical" />;
      case 'defensive':
        return <StepAttributes category="defensive" />;
      case 'goalkeeper':
        return <StepAttributes category="goalkeeper" />;
      case 'styles':
        return <StepSelections category="styles" />;
      case 'personality':
        return <StepSelections category="personality" />;
      case 'tactics':
        return <StepTactics />;
      default:
        return null;
    }
  };

  return (
    <div className="step-review-container">
      <div className="review-header">
        <h3 className="review-title">{t.title}</h3>
        <p className="review-subtitle">{t.subtitle}</p>
      </div>

      <div className="review-grid">
        {/* Card 1: Profile Overview */}
        <div className="glass-card review-card">
          <div className="review-card-header">
            <div className="card-header-label">
              <User size={18} className="review-card-icon" />
              <span>{t.basicInfo}</span>
            </div>
            <button className="edit-section-btn" onClick={() => setActiveEditSection('basic')}>
              <Edit2 size={14} />
              <span>{t.edit}</span>
            </button>
          </div>
          <div className="review-card-body basic-review-details">
            <div className="review-detail-row">
              <span className="detail-label">{tBasic.name}:</span>
              <span className="detail-value">{formData.basic.name}</span>
            </div>
            {formData.basic.nickname && (
              <div className="review-detail-row">
                <span className="detail-label">{tBasic.nickname}:</span>
                <span className="detail-value">"{formData.basic.nickname}"</span>
              </div>
            )}
            <div className="review-detail-row">
              <span className="detail-label">{tBasic.age}:</span>
              <span className="detail-value">{formData.basic.age}</span>
            </div>
            <div className="review-detail-row">
              <span className="detail-label">{tBasic.height}:</span>
              <span className="detail-value">{formData.basic.height} cm</span>
            </div>
            <div className="review-detail-row">
              <span className="detail-label">{tBasic.weight}:</span>
              <span className="detail-value">{formData.basic.weight} kg</span>
            </div>
            <div className="review-detail-row">
              <span className="detail-label">{tBasic.foot}:</span>
              <span className="detail-value">
                {formData.basic.preferredFoot === 'left' 
                  ? tBasic.footLeft 
                  : formData.basic.preferredFoot === 'right' 
                    ? tBasic.footRight 
                    : tBasic.footBoth}
              </span>
            </div>
            <div className="review-detail-row">
              <span className="detail-label">{tBasic.position}:</span>
              <span className="detail-value primary-position-highlight">
                {tBasic.positions[formData.basic.primaryPosition]?.name || formData.basic.primaryPosition}
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Physical Attributes */}
        <div className="glass-card review-card">
          <div className="review-card-header">
            <div className="card-header-label">
              <Activity size={18} className="review-card-icon" />
              <span>{t.physicalInfo}</span>
            </div>
            <button className="edit-section-btn" onClick={() => setActiveEditSection('physical')}>
              <Edit2 size={14} />
              <span>{t.edit}</span>
            </button>
          </div>
          <div className="review-card-body attributes-scroll-grid">
            {Object.entries(formData.physical).map(([key, val]) => (
              <div key={key} className="stat-review-row">
                <span className="stat-name">{translations[language].questionnaire.physical[key] || key}</span>
                <span className="stat-val">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Technical Attributes */}
        <div className="glass-card review-card">
          <div className="review-card-header">
            <div className="card-header-label">
              <Sliders size={18} className="review-card-icon" />
              <span>{t.technicalInfo}</span>
            </div>
            <button className="edit-section-btn" onClick={() => setActiveEditSection('technical')}>
              <Edit2 size={14} />
              <span>{t.edit}</span>
            </button>
          </div>
          <div className="review-card-body attributes-scroll-grid">
            {Object.entries(formData.technical).map(([key, val]) => (
              <div key={key} className="stat-review-row">
                <span className="stat-name">{translations[language].questionnaire.technical[key] || key}</span>
                <span className="stat-val">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: Defensive Attributes */}
        <div className="glass-card review-card">
          <div className="review-card-header">
            <div className="card-header-label">
              <Shield size={18} className="review-card-icon" />
              <span>{t.defensiveInfo}</span>
            </div>
            <button className="edit-section-btn" onClick={() => setActiveEditSection('defensive')}>
              <Edit2 size={14} />
              <span>{t.edit}</span>
            </button>
          </div>
          <div className="review-card-body attributes-scroll-grid">
            {Object.entries(formData.defensive).map(([key, val]) => (
              <div key={key} className="stat-review-row">
                <span className="stat-name">{translations[language].questionnaire.defensive[key] || key}</span>
                <span className="stat-val">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 5: Goalkeeper Attributes (Conditional) */}
        {isGoalkeeper && (
          <div className="glass-card review-card">
            <div className="review-card-header">
              <div className="card-header-label">
                <Award size={18} className="review-card-icon" />
                <span>{t.gkInfo}</span>
              </div>
              <button className="edit-section-btn" onClick={() => setActiveEditSection('goalkeeper')}>
                <Edit2 size={14} />
                <span>{t.edit}</span>
              </button>
            </div>
            <div className="review-card-body attributes-scroll-grid">
              {Object.entries(formData.goalkeeper).map(([key, val]) => (
                <div key={key} className="stat-review-row">
                  <span className="stat-name">{translations[language].questionnaire.goalkeeper[key] || key}</span>
                  <span className="stat-val">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Card 6: Tactical blueprint */}
        <div className="glass-card review-card">
          <div className="review-card-header">
            <div className="card-header-label">
              <Target size={18} className="review-card-icon" />
              <span>{t.tacticalInfo}</span>
            </div>
            <button className="edit-section-btn" onClick={() => setActiveEditSection('tactics')}>
              <Edit2 size={14} />
              <span>{t.edit}</span>
            </button>
          </div>
          <div className="review-card-body basic-review-details">
            <div className="review-detail-row">
              <span className="detail-label">{tTactics.system}:</span>
              <span className="detail-value">{tTactics.systems[formData.tactics.system] || formData.tactics.system}</span>
            </div>
            <div className="review-detail-row">
              <span className="detail-label">{tTactics.role}:</span>
              <span className="detail-value primary-position-highlight">{tTactics.roles[formData.tactics.role] || formData.tactics.role}</span>
            </div>
          </div>
        </div>

        {/* Card 7: Action styles */}
        <div className="glass-card review-card span-2">
          <div className="review-card-header">
            <div className="card-header-label">
              <CheckCircle size={18} className="review-card-icon" />
              <span>{t.stylesInfo}</span>
            </div>
            <button className="edit-section-btn" onClick={() => setActiveEditSection('styles')}>
              <Edit2 size={14} />
              <span>{t.edit}</span>
            </button>
          </div>
          <div className="review-card-body tag-review-grid">
            {formData.styles.map((key) => renderItemTag(tStyles[key] || key))}
          </div>
        </div>

        {/* Card 8: Mentality Traits */}
        <div className="glass-card review-card span-2">
          <div className="review-card-header">
            <div className="card-header-label">
              <Brain size={18} className="review-card-icon" />
              <span>{t.mentalInfo}</span>
            </div>
            <button className="edit-section-btn" onClick={() => setActiveEditSection('personality')}>
              <Edit2 size={14} />
              <span>{t.edit}</span>
            </button>
          </div>
          <div className="review-card-body tag-review-grid">
            {formData.personality.map((key) => renderItemTag(tMental[key] || key))}
          </div>
        </div>
      </div>

      {/* Popup Section Edit Modal Overlay rendered via Portal */}
      {activeEditSection && createPortal(
        <div className="section-edit-backdrop" onClick={() => setActiveEditSection(null)}>
          <div className="section-edit-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <h3 className="modal-title">{getSectionTitle(activeEditSection)}</h3>
              <button 
                className="modal-close-btn" 
                onClick={() => setActiveEditSection(null)}
                aria-label="Cancel editing"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Body (Scrollable form contents) */}
            <div className="modal-body">
              {renderModalContent()}
            </div>
            
            {/* Modal Footer */}
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn-modal-cancel" 
                onClick={() => setActiveEditSection(null)}
              >
                {language === 'en' ? 'Cancel' : 'Hủy bỏ'}
              </button>
              <button 
                type="button" 
                className="btn-primary btn-modal-save" 
                onClick={handleSaveSection}
              >
                <Check size={16} />
                <span>{language === 'en' ? 'Save Changes' : 'Lưu thay đổi'}</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        .step-review-container {
          width: 100%;
          text-align: left;
        }

        .review-header {
          margin-bottom: 32px;
        }

        .review-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .review-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          width: 100%;
        }

        @media (min-width: 1025px) {
          .review-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .review-card {
          padding: 24px;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(12, 15, 23, 0.4);
          height: fit-content;
        }

        .review-card.span-2 {
          grid-column: span 2;
        }

        @media (min-width: 1025px) {
          .review-card.span-2 {
            grid-column: span 3;
          }
        }

        .review-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 12px;
        }

        .card-header-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .review-card-icon {
          color: var(--accent);
        }

        .edit-section-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .edit-section-btn:hover {
          color: var(--accent);
        }

        .review-card-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .review-detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          border-bottom: 1px dashed rgba(255,255,255,0.03);
          padding-bottom: 6px;
        }

        .detail-label {
          color: var(--text-secondary);
        }

        .detail-value {
          font-weight: 600;
          color: var(--text-primary);
        }

        .primary-position-highlight {
          color: var(--accent) !important;
          font-weight: 700;
        }

        .capitalize {
          text-transform: capitalize;
        }

        /* Stat Grid Review Scroll */
        .attributes-scroll-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 280px;
          overflow-y: auto;
          padding-right: 8px;
        }

        .stat-review-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 8px 12px;
          border-radius: var(--border-radius-sm);
          font-size: 0.85rem;
        }

        .stat-name {
          color: var(--text-secondary);
          margin-right: 8px;
        }

        .stat-val {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--accent-blue);
        }

        /* Tag Grid review */
        .tag-review-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          flex-direction: row;
        }

        .review-tag-item {
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          padding: 6px 12px;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Popup Section Edit Modal */
        .section-edit-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeInBackdrop 0.2s ease-out forwards;
        }

        .section-edit-modal {
          width: 100%;
          max-width: 680px;
          max-height: 85vh;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-lg), 0 0 35px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: slideUpModal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUpModal {
          from {
            transform: translateY(30px) scale(0.98);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .modal-close-btn {
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

        .modal-close-btn:hover {
          background: var(--glass-border);
          color: var(--text-primary);
        }

        .modal-body {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
          background: rgba(12, 15, 23, 0.1);
        }

        .modal-body .glass-card {
          background: rgba(255, 255, 255, 0.01) !important;
          border: 1px solid rgba(255, 255, 255, 0.03) !important;
          box-shadow: none !important;
          padding: 20px !important;
          margin-bottom: 16px;
        }

        .modal-footer {
          padding: 20px 24px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          background: rgba(0, 0, 0, 0.2);
        }

        .btn-modal-save {
          min-width: 140px;
        }

        .btn-modal-cancel {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 10px 20px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-modal-cancel:hover {
          border-color: var(--text-muted);
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.02);
        }

        @media (max-width: 768px) {
          .review-grid {
            grid-template-columns: 1fr;
          }
          .review-card.span-2 {
            grid-column: span 1;
          }
          .attributes-scroll-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
