import React, { useEffect } from 'react';
import { useQuestionnaire } from '../context/QuestionnaireContext';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import StepBasicInfo from './steps/StepBasicInfo';
import StepAttributes from './steps/StepAttributes';
import StepSelections from './steps/StepSelections';
import StepTactics from './steps/StepTactics';
import StepReview from './steps/StepReview';
import Phase3Placeholder from './Phase3Placeholder';
import { ChevronLeft, ChevronRight, CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react';

export default function Questionnaire() {
  const { language, animations } = useApp();
  const {
    currentStep,
    errors,
    isSavedSessionAvailable,
    isSubmitted,
    nextStep,
    prevStep,
    loadSavedSession,
    clearSession,
    submitForm
  } = useQuestionnaire();

  const t = translations[language].questionnaire;

  // Auto scroll to top on step changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: animations === 'on' ? 'smooth' : 'auto'
    });
  }, [currentStep, animations]);

  if (isSubmitted) {
    return <Phase3Placeholder />;
  }

  const progressPercent = currentStep === 9 ? 100 : (currentStep / 8) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <StepBasicInfo />;
      case 2:
        return <StepAttributes category="physical" />;
      case 3:
        return <StepAttributes category="technical" />;
      case 4:
        return <StepAttributes category="defensive" />;
      case 5:
        return <StepAttributes category="goalkeeper" />;
      case 6:
        return <StepSelections category="styles" />;
      case 7:
        return <StepSelections category="personality" />;
      case 8:
        return <StepTactics />;
      case 9:
        return <StepReview />;
      default:
        return <StepBasicInfo />;
    }
  };

  const handleNextClick = () => {
    nextStep();
  };

  const handleSubmitClick = () => {
    submitForm();
  };

  const getStepTitle = (stepIdx) => {
    switch (stepIdx) {
      case 1: return t.steps.step1;
      case 2: return t.steps.step2;
      case 3: return t.steps.step3;
      case 4: return t.steps.step4;
      case 5: return t.steps.step5;
      case 6: return t.steps.step6;
      case 7: return t.steps.step7;
      case 8: return t.steps.step8;
      case 9: return t.steps.review;
      default: return "";
    }
  };

  return (
    <section id="questionnaire" className="questionnaire-section">
      {/* Session Recovery Modal Overlay */}
      {isSavedSessionAvailable && (
        <div className={`recovery-backdrop ${animations === 'off' ? 'instant' : ''}`}>
          <div className="glass-card recovery-card scale-in">
            <AlertTriangle size={48} className="recovery-icon" />
            <h3 className="recovery-title">{t.recoveryTitle}</h3>
            <p className="recovery-desc">{t.recoveryDesc}</p>
            <div className="recovery-actions">
              <button className="btn-primary resume-btn" onClick={loadSavedSession}>
                <CheckCircle2 size={16} />
                <span>{t.btnResume}</span>
              </button>
              <button className="btn-fresh" onClick={clearSession}>
                <RotateCcw size={16} />
                <span>{t.btnStartFresh}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`container questionnaire-container-inner ${currentStep === 9 ? 'review-layout' : ''}`}>
        <div className="glass-card questionnaire-card">
          
          {/* Header Progress Tracker */}
          <div className="questionnaire-header">
            <div className="step-info">
              {currentStep === 9 ? (
                <span className="step-badge review-badge">
                  {language === 'en' ? 'DOSSIER REVIEW' : 'XEM LẠI BÁO CÁO'}
                </span>
              ) : (
                <span className="step-badge">
                  {t.step} {currentStep} {t.of} 8
                </span>
              )}
              <h2 className="step-title-text">{getStepTitle(currentStep)}</h2>
            </div>
            
            {/* Fluid progress bar */}
            <div className="progress-bar-track">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Validation Header Banner (Global Check) */}
          {Object.keys(errors).length > 0 && (
            <div className="validation-header-alert">
              <AlertTriangle size={18} />
              <div className="alert-content">
                <strong>{t.validationHeader}</strong>
                <p>Please double-check all required inputs on this page before continuing.</p>
              </div>
            </div>
          )}

          {/* Dynamic Step Component Wrapper */}
          <div className={`step-content-anim-wrapper fade-in`}>
            {renderStepContent()}
          </div>

          {/* Form Actions Footer */}
          <div className="questionnaire-actions-row">
            {/* Back Button */}
            {currentStep > 1 ? (
              <button 
                type="button" 
                className="btn-back-nav" 
                onClick={prevStep}
              >
                <ChevronLeft size={18} />
                <span>{t.btnPrev}</span>
              </button>
            ) : (
              <div></div> // layout placeholder
            )}

            {/* Next / Submit Button */}
            {currentStep < 9 ? (
              <button 
                type="button" 
                className="btn-primary next-nav-btn" 
                onClick={handleNextClick}
              >
                <span>{t.btnNext}</span>
                <ChevronRight size={18} />
              </button>
            ) : (
              <button 
                type="button" 
                className="btn-primary submit-nav-btn" 
                onClick={handleSubmitClick}
              >
                <CheckCircle2 size={18} />
                <span>{t.btnSubmit}</span>
              </button>
            )}
          </div>

        </div>
      </div>

      <style>{`
        .questionnaire-section {
          min-height: 100vh;
          padding-top: 120px;
          padding-bottom: 80px;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          position: relative;
          z-index: 5;
        }

        .questionnaire-container-inner {
          max-width: 900px !important;
          transition: max-width var(--transition-slow);
        }

        .questionnaire-container-inner.review-layout {
          max-width: 1200px !important;
        }

        .questionnaire-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          gap: 36px;
          min-height: 500px;
          border: 1px solid rgba(var(--accent-rgb), 0.1);
        }

        /* Recovery prompt styling */
        .recovery-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .recovery-backdrop.instant {
          transition: none !important;
        }

        .recovery-card {
          width: 100%;
          max-width: 480px;
          padding: 40px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          border-radius: var(--border-radius-md);
          background: rgba(12, 15, 23, 0.7);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          box-shadow: var(--shadow-lg), 0 0 30px rgba(var(--accent-rgb), 0.05);
        }

        .recovery-icon {
          color: var(--accent);
          filter: drop-shadow(0 0 10px var(--accent-glow));
        }

        .recovery-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .recovery-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .recovery-actions {
          display: flex;
          width: 100%;
          gap: 16px;
          margin-top: 8px;
        }

        .resume-btn {
          flex: 1;
        }

        .btn-fresh {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          padding: 12px 20px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-fresh:hover {
          border-color: #ff4a4a;
          color: #ff4a4a;
          background-color: rgba(255, 74, 74, 0.05);
        }

        /* Progress tracker styling */
        .questionnaire-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 24px;
        }

        .step-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }

        .step-badge {
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 4px 12px;
          border-radius: var(--border-radius-full);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .step-title-text {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .progress-bar-track {
          width: 100%;
          height: 6px;
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-full);
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-blue) 100%);
          border-radius: var(--border-radius-full);
          transition: width var(--transition-normal);
        }

        /* Validation Alert Banner */
        .validation-header-alert {
          background: rgba(255, 74, 74, 0.08);
          border: 1px solid rgba(255, 74, 74, 0.2);
          color: #ff4a4a;
          padding: 14px 20px;
          border-radius: var(--border-radius-sm);
          display: flex;
          gap: 14px;
          align-items: center;
          text-align: left;
        }

        .alert-content {
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .alert-content strong {
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .alert-content p {
          color: #ff7878;
        }

        /* Step Wrapper */
        .step-content-anim-wrapper {
          min-height: 250px;
        }

        /* Actions row */
        .questionnaire-actions-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--glass-border);
          padding-top: 32px;
          margin-top: 16px;
        }

        .btn-back-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          padding: 12px 24px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          transition: border-color var(--transition-fast), color var(--transition-fast), background-color var(--transition-fast);
        }

        .btn-back-nav:hover {
          border-color: var(--text-secondary);
          color: var(--text-primary);
          background-color: rgba(255, 255, 255, 0.02);
        }
        
        .btn-back-nav:active {
          transform: scale(0.98);
        }

        .next-nav-btn, .submit-nav-btn {
          min-width: 160px;
        }

        @media (max-width: 768px) {
          .questionnaire-section {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .questionnaire-card {
            padding: 24px;
            gap: 24px;
          }
          .step-title-text {
            font-size: 1.3rem;
          }
          .btn-back-nav, .next-nav-btn, .submit-nav-btn {
            padding: 10px 18px;
            font-size: 0.95rem;
            min-width: unset;
          }
        }
      `}</style>
    </section>
  );
}
