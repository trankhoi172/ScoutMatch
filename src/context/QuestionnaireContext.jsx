import React, { createContext, useContext, useState, useEffect } from 'react';
import { matchUserProfile } from '../utils/matchingEngine';

const QuestionnaireContext = createContext();

const defaultFormData = {
  basic: {
    name: '',
    nickname: '',
    age: '',
    height: '',
    weight: '',
    preferredFoot: 'right', // left, right, both
    primaryPosition: ''
  },
  physical: {
    acceleration: 50,
    sprintSpeed: 50,
    agility: 50,
    balance: 50,
    strength: 50,
    stamina: 50,
    jumping: 50,
    physicality: 50,
    reactions: 50,
    composure: 50,
    endurance: 50
  },
  technical: {
    ballControl: 50,
    firstTouch: 50,
    dribbling: 50,
    closeControl: 50,
    shortPassing: 50,
    longPassing: 50,
    vision: 50,
    crossing: 50,
    curve: 50,
    finishing: 50,
    shotPower: 50,
    longShots: 50,
    volleys: 50,
    heading: 50,
    penalty: 50,
    freeKickAccuracy: 50,
    throughBalls: 50,
    weakFootAbility: 50,
    skillMoves: 50
  },
  defensive: {
    defensiveAwareness: 50,
    interceptions: 50,
    standingTackle: 50,
    slidingTackle: 50,
    marking: 50,
    pressing: 50,
    aggression: 50,
    aerialAbility: 50
  },
  goalkeeper: {
    diving: 50,
    reflexes: 50,
    handling: 50,
    positioning: 50,
    kicking: 50,
    distribution: 50,
    oneOnOne: 50,
    communication: 50
  },
  styles: [],
  personality: [],
  tactics: {
    system: '',
    role: ''
  }
};

export const QuestionnaireProvider = ({ children }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSavedSessionAvailable, setIsSavedSessionAvailable] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [matchResults, setMatchResults] = useState(null);

  // Check if draft session is available on mount
  useEffect(() => {
    const draft = localStorage.getItem('football_questionnaire_draft');
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        if (parsed && parsed.basic && parsed.basic.name) {
          setIsSavedSessionAvailable(true);
        }
      } catch (e) {
        console.error('Failed to parse draft questionnaire', e);
      }
    }
  }, []);

  // Autosave whenever form data or current step changes
  useEffect(() => {
    if (isSubmitted) return;
    
    // Don't save empty default forms
    if (formData.basic.name !== '') {
      const dataToSave = {
        formData,
        currentStep
      };
      localStorage.setItem('football_questionnaire_draft', JSON.stringify(dataToSave));
    }
  }, [formData, currentStep, isSubmitted]);

  // Load saved session
  const loadSavedSession = () => {
    const draft = localStorage.getItem('football_questionnaire_draft');
    if (draft) {
      try {
        const parsed = JSON.parse(draft);
        if (parsed.formData) setFormData(parsed.formData);
        if (parsed.currentStep) setCurrentStep(parsed.currentStep);
        setIsSavedSessionAvailable(false);
      } catch (e) {
        console.error('Error loading saved session', e);
      }
    }
  };

  // Start fresh
  const clearSession = () => {
    localStorage.removeItem('football_questionnaire_draft');
    setFormData(defaultFormData);
    setCurrentStep(1);
    setIsSavedSessionAvailable(false);
    setErrors({});
  };

  // Update a single nested field (for basic info, physical stats, tactics)
  const updateField = (category, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  // Handle styles/personality tags list select/deselect
  const toggleArrayItem = (category, item) => {
    setFormData((prev) => {
      const list = prev[category];
      const isSelected = list.includes(item);
      const updatedList = isSelected
        ? list.filter((i) => i !== item)
        : [...list, item];
      
      return {
        ...prev,
        [category]: updatedList
      };
    });

    // Clear error
    if (errors[category]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[category];
        return updated;
      });
    }
  };

  // Check if current position is Goalkeeper
  const isGoalkeeper = formData.basic.primaryPosition === 'GK';

  // Step Validation logic
  const validateStep = (step) => {
    const stepErrors = {};
    
    if (step === 1) {
      if (!formData.basic.name.trim()) {
        stepErrors.name = true;
      }
      const ageNum = parseInt(formData.basic.age);
      if (isNaN(ageNum) || ageNum < 5 || ageNum > 99) {
        stepErrors.age = true;
      }
      const heightNum = parseInt(formData.basic.height);
      if (isNaN(heightNum) || heightNum < 100 || heightNum > 250) {
        stepErrors.height = true;
      }
      const weightNum = parseInt(formData.basic.weight);
      if (isNaN(weightNum) || weightNum < 30 || weightNum > 150) {
        stepErrors.weight = true;
      }
      if (!formData.basic.primaryPosition) {
        stepErrors.position = true;
      }
    }
    
    if (step === 6) {
      if (formData.styles.length === 0) {
        stepErrors.styles = true;
      }
    }
    
    if (step === 7) {
      if (formData.personality.length === 0) {
        stepErrors.personality = true;
      }
    }
    
    if (step === 8) {
      if (!formData.tactics.system) {
        stepErrors.system = true;
      }
      if (!formData.tactics.role) {
        stepErrors.role = true;
      }
    }
    
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  // Navigation handlers
  const nextStep = () => {
    if (validateStep(currentStep)) {
      // Determine what the next step index is
      // Step 5 is GK attributes. If NOT Goalkeeper, step 4 jumps to step 6.
      if (currentStep === 4 && !isGoalkeeper) {
        setCurrentStep(6);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
      return true;
    }
    return false;
  };

  const prevStep = () => {
    // If NOT Goalkeeper and we are at step 6, going back goes to step 4
    if (currentStep === 6 && !isGoalkeeper) {
      setCurrentStep(4);
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const jumpToStep = (stepIndex) => {
    // Allows direct navigation from review page
    setCurrentStep(stepIndex);
  };

  const submitForm = () => {
    // Validate everything
    let allValid = true;
    
    // Validate step 1
    if (!validateStep(1)) allValid = false;
    // Validate step 6
    if (!validateStep(6)) allValid = false;
    // Validate step 7
    if (!validateStep(7)) allValid = false;
    // Validate step 8
    if (!validateStep(8)) allValid = false;
    
    if (allValid) {
      // Remove draft from local storage
      localStorage.removeItem('football_questionnaire_draft');
      // Save final data to storage for Phase 3 matching
      localStorage.setItem('football_questionnaire_final', JSON.stringify(formData));
      
      // Calculate matches using similarity engine
      const results = matchUserProfile(formData);
      setMatchResults(results);
      
      // Save results to local storage
      localStorage.setItem('football_questionnaire_results', JSON.stringify({
        formData,
        matches: results.matches,
        durationMs: results.durationMs
      }));
      
      setIsSubmitted(true);
      return true;
    }
    return false;
  };

  const restartQuestionnaire = () => {
    setFormData(defaultFormData);
    setCurrentStep(1);
    setIsSubmitted(false);
    setMatchResults(null);
    setErrors({});
  };

  return (
    <QuestionnaireContext.Provider
      value={{
        formData,
        currentStep,
        errors,
        isSavedSessionAvailable,
        isGoalkeeper,
        isSubmitted,
        matchResults,
        updateField,
        toggleArrayItem,
        nextStep,
        prevStep,
        jumpToStep,
        loadSavedSession,
        clearSession,
        submitForm,
        restartQuestionnaire,
        validateStep
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = () => {
  const context = useContext(QuestionnaireContext);
  if (!context) {
    throw new Error('useQuestionnaire must be used within a QuestionnaireProvider');
  }
  return context;
};
