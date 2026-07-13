import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Load initial settings from localStorage or defaults
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('football_app_lang') || 'en';
  });
  
  const theme = 'dark';
  
  const [animations, setAnimationsState] = useState(() => {
    return localStorage.getItem('football_app_animations') || 'on';
  });
  
  const [sound, setSoundState] = useState(() => {
    return localStorage.getItem('football_app_sound') || 'off';
  });

  // Apply changes to document elements when values change
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('theme-dark');
    root.classList.remove('theme-light');
    localStorage.setItem('football_app_theme', 'dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Animations logic
    if (animations === 'on') {
      root.classList.add('animations-on');
      root.classList.remove('animations-off');
    } else {
      root.classList.add('animations-off');
      root.classList.remove('animations-on');
    }
    localStorage.setItem('football_app_animations', animations);
  }, [animations]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('football_app_lang', lang);
  };

  const setTheme = () => {
    // Theme is locked to dark mode
  };

  const setAnimations = (status) => {
    setAnimationsState(status);
  };

  const setSound = (status) => {
    setSoundState(status);
    localStorage.setItem('football_app_sound', status);
  };

  const resetSettings = () => {
    setLanguageState('en');
    setAnimationsState('on');
    setSoundState('off');
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        animations,
        setAnimations,
        sound,
        setSound,
        resetSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
