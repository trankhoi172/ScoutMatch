import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SettingsModal from './components/SettingsModal';
import LoadingScreen from './components/LoadingScreen';
import Questionnaire from './components/Questionnaire';
import { useApp } from './context/AppContext';
import { useQuestionnaire } from './context/QuestionnaireContext';

export default function App() {
  const { theme, animations } = useApp();
  const { isSubmitted } = useQuestionnaire();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

  // Auto-activate questionnaire view if it is already submitted (for Phase 3 success placeholder)
  useEffect(() => {
    if (isSubmitted) {
      setShowQuestionnaire(true);
    }
  }, [isSubmitted]);

  // Apply a class during theme changes to enable smooth color transitions
  useEffect(() => {
    if (isLoading) return;
    
    document.documentElement.classList.add('theme-transition');
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 500);

    return () => clearTimeout(timer);
  }, [theme, isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  // Coordinated navigation handler for Navbar links
  const handleNavigate = (targetId) => {
    if (targetId === 'home') {
      setShowQuestionnaire(false);
      window.scrollTo({
        top: 0,
        behavior: animations === 'on' ? 'smooth' : 'auto'
      });
    } else if (targetId === 'about' || targetId === 'faq') {
      setShowQuestionnaire(false);
      
      // Wait for React to render the landing page elements, then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: animations === 'on' ? 'smooth' : 'auto'
          });
        }
      }, 50);
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`app-wrapper ${animations === 'off' ? 'animations-disabled' : ''}`}>
      {/* Navigation */}
      <Navbar 
        onOpenSettings={handleOpenSettings} 
        onNavigate={handleNavigate} 
      />
      
      {/* Dynamic Content Routing */}
      <main className="main-content-flow">
        {showQuestionnaire ? (
          <Questionnaire />
        ) : (
          <>
            <Hero onStartClick={() => setShowQuestionnaire(true)} />
            <About />
            <FAQ />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlay Settings Modal */}
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={handleCloseSettings} 
      />

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-primary);
        }

        .main-content-flow {
          flex: 1;
        }

        /* Page reveal transition */
        .main-content-flow {
          animation: pageReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animations-disabled .main-content-flow {
          animation: none !important;
        }

        @keyframes pageReveal {
          from {
            opacity: 0;
            transform: scale(0.99);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
