import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useQuestionnaire } from '../context/QuestionnaireContext';
import { useApp } from '../context/AppContext';
import { translations } from '../utils/translations';
import { getPlayerDetails } from '../data/playerDetails';
import { 
  CheckCircle2, RotateCcw, Database, FileSpreadsheet, 
  Cpu, Clock, User, Award, Sparkles, Info, Compass, X, 
  TrendingUp, Star, ShieldAlert, ExternalLink
} from 'lucide-react';

// Nation codes mapping for flagcdn
const NATION_CODES = {
  "Argentina": "ar",
  "Portugal": "pt",
  "Norway": "no",
  "France": "fr",
  "Egypt": "eg",
  "England": "gb",
  "Poland": "pl",
  "Brazil": "br",
  "Belgium": "be",
  "Spain": "es",
  "Netherlands": "nl",
  "Germany": "de",
  "Italy": "it",
  "Croatia": "hr",
  "Canada": "ca",
  "Scotland": "gb-sct",
  "Uruguay": "uy",
  "South Korea": "kr",
  "Ecuador": "ec",
  "Morocco": "ma",
  "Slovenia": "si",
  "Switzerland": "ch",
  "Austria": "at",
  "Nigeria": "ng",
  "Colombia": "co",
  "Georgia": "ge",
  "Japan": "jp",
  "Sweden": "se",
  "Turkey": "tr",
  "Burkina Faso": "bf",
  "Hungary": "hu",
  "Slovakia": "sk"
};

// Reliable decoupled player image loader with auto-retry and silhouette fallback
function ScoutingPlayerImage({ imageUrl, fallbackUrls = [], alt, className }) {
  const allUrls = [imageUrl, ...fallbackUrls].filter(Boolean);
  const [currentUrlIdx, setCurrentUrlIdx] = React.useState(0);
  const [hasError, setHasError] = React.useState(false);

  const activeUrl = allUrls[currentUrlIdx];
  const isFallbackExhausted = !activeUrl || hasError;

  const handleError = () => {
    if (currentUrlIdx + 1 < allUrls.length) {
      setCurrentUrlIdx(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (isFallbackExhausted) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="player-silhouette-svg" aria-label="Silhouette placeholder">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    );
  }

  return (
    <img 
      src={activeUrl} 
      alt={alt} 
      className={className} 
      onError={handleError}
      loading="lazy"
    />
  );
}

// Reusable Single Player Card Component
function PlayerCard({ matchItem, idx, language, formData, getFlagUrl, getCategoryComparison, openPlayerDetails }) {
  const player = matchItem.player;
  const score = matchItem.overallScore;
  const cats = matchItem.categories;
  
  const explanation = language === 'en' ? matchItem.explanationEn : matchItem.explanationVi;

  // Averages calculations
  const techCompare = getCategoryComparison(formData, player, 'technical');
  const physCompare = getCategoryComparison(formData, player, 'physical');
  const defCompare = getCategoryComparison(formData, player, 'defensive');
  const gkCompare = player.isGK ? getCategoryComparison(formData, player, 'goalkeeper') : null;
  
  return (
    <div 
      className="player-scouting-card-premium clickable-card"
      onClick={() => openPlayerDetails(matchItem)}
      title={language === 'en' ? "Click to view full player details" : "Nhấp để xem chi tiết cầu thủ"}
    >
      {/* FUT Glass Shield Header */}
      <div className="premium-card-top">
        <div className="fut-shield-avatar">
          <span className="scout-rank-badge">#{idx + 1}</span>
          <div className="fut-shield-glow" />
          <div className="fut-shield-inner">
            <ScoutingPlayerImage 
              imageUrl={player.imageUrl} 
              fallbackUrls={player.imageFallbackUrls} 
              alt={player.name} 
              className="player-fut-photo" 
            />
          </div>
        </div>

        <div className="player-meta-info-premium">
          <div className="name-and-flag-row">
            <h4 className="premium-player-name">{player.name}</h4>
            <img 
              src={getFlagUrl(player.nationality)} 
              alt={player.nationality} 
              className="nation-flag"
            />
          </div>
          <p className="premium-player-club-sub">
            <strong>{player.club}</strong> • {player.league}
          </p>
          <div className="player-biography-chips">
            <span className="bio-chip text-uppercase font-bold">{player.primaryPosition}</span>
            <span className="bio-chip">{player.age} y/o</span>
            <span className="bio-chip">{player.height} cm</span>
            <span className="bio-chip text-capitalize">{player.preferredFoot}</span>
          </div>
        </div>

        {/* Percentage SVG Loader */}
        <div className="svg-ring-wrapper">
          <svg className="progress-ring" width="70" height="70">
            <circle className="progress-ring-bg" stroke="rgba(255,255,255,0.04)" strokeWidth="4.5" fill="transparent" r="28" cx="35" cy="35" />
            <circle className="progress-ring-fill" stroke="var(--accent)" strokeWidth="4.5" fill="transparent" r="28" cx="35" cy="35" 
                    strokeDasharray="175.93" strokeDashoffset={175.93 - (175.93 * score) / 100} strokeLinecap="round" />
          </svg>
          <div className="score-ring-content">
            <span className="ring-score-val">{score}%</span>
            <span className="ring-score-lbl">{language === 'en' ? 'MATCH' : 'KHỚP'}</span>
          </div>
        </div>

      </div>

      {/* Custom Match Explanation */}
      <div className="match-explanation-box">
        <p className="explanation-paragraph">
          <Sparkles className="spark-inline-icon" size={13} />
          <span>{explanation}</span>
        </p>
      </div>

      {/* Side-by-side ratings */}
      <div className="side-by-side-comparison-grid">
        <div className="metric-compare-bar">
          <div className="bar-label">{language === 'en' ? 'TECHNICAL SKILLS' : 'KỸ NĂNG KỸ THUẬT'}</div>
          <div className="bar-row">
            <span className="bar-subject">{language === 'en' ? 'You' : 'Bạn'}</span>
            <div className="bar-track">
              <div className="bar-fill user-fill" style={{ width: `${techCompare.user}%` }} />
            </div>
            <span className="bar-val">{techCompare.user}</span>
          </div>
          <div className="bar-row">
            <span className="bar-subject">{language === 'en' ? 'Player' : 'Cầu thủ'}</span>
            <div className="bar-track">
              <div className="bar-fill player-fill" style={{ width: `${techCompare.player}%` }} />
            </div>
            <span className="bar-val">{techCompare.player}</span>
          </div>
        </div>

        <div className="metric-compare-bar">
          <div className="bar-label">{language === 'en' ? 'PHYSICAL RATINGS' : 'THÔNG SỐ THỂ CHẤT'}</div>
          <div className="bar-row">
            <span className="bar-subject">{language === 'en' ? 'You' : 'Bạn'}</span>
            <div className="bar-track">
              <div className="bar-fill user-fill" style={{ width: `${physCompare.user}%` }} />
            </div>
            <span className="bar-val">{physCompare.user}</span>
          </div>
          <div className="bar-row">
            <span className="bar-subject">{language === 'en' ? 'Player' : 'Cầu thủ'}</span>
            <div className="bar-track">
              <div className="bar-fill player-fill" style={{ width: `${physCompare.player}%` }} />
            </div>
            <span className="bar-val">{physCompare.player}</span>
          </div>
        </div>

        {!player.isGK && (
          <div className="metric-compare-bar">
            <div className="bar-label">{language === 'en' ? 'DEFENSIVE PROWESS' : 'NĂNG LỰC PHÒNG NGỰ'}</div>
            <div className="bar-row">
              <span className="bar-subject">{language === 'en' ? 'You' : 'Bạn'}</span>
              <div className="bar-track">
                <div className="bar-fill user-fill" style={{ width: `${defCompare.user}%` }} />
              </div>
              <span className="bar-val">{defCompare.user}</span>
            </div>
            <div className="bar-row">
              <span className="bar-subject">{language === 'en' ? 'Player' : 'Cầu thủ'}</span>
              <div className="bar-track">
                <div className="bar-fill player-fill" style={{ width: `${defCompare.player}%` }} />
              </div>
              <span className="bar-val">{defCompare.player}</span>
            </div>
          </div>
        )}

        {player.isGK && gkCompare && (
          <div className="metric-compare-bar">
            <div className="bar-label">{language === 'en' ? 'GOALKEEPING RATING' : 'KỸ NĂNG THỦ MÔN'}</div>
            <div className="bar-row">
              <span className="bar-subject">{language === 'en' ? 'You' : 'Bạn'}</span>
              <div className="bar-track">
                <div className="bar-fill user-fill" style={{ width: `${gkCompare.user}%` }} />
              </div>
              <span className="bar-val">{gkCompare.user}</span>
            </div>
            <div className="bar-row">
              <span className="bar-subject">{language === 'en' ? 'Player' : 'Cầu thủ'}</span>
              <div className="bar-track">
                <div className="bar-fill player-fill" style={{ width: `${gkCompare.player}%` }} />
              </div>
              <span className="bar-val">{gkCompare.player}</span>
            </div>
          </div>
        )}

        <div className="metric-compare-bar">
          <div className="bar-label">{language === 'en' ? 'TACTICS & STYLE MATCH' : 'HỆ THỐNG & PHONG CÁCH'}</div>
          <div className="bar-row">
            <span className="bar-subject">{language === 'en' ? 'Tactics' : 'Chiến thuật'}</span>
            <div className="bar-track">
              <div className="bar-fill user-fill" style={{ width: `${cats.tactical}%` }} />
            </div>
            <span className="bar-val">{cats.tactical}%</span>
          </div>
          <div className="bar-row">
            <span className="bar-subject">{language === 'en' ? 'Style' : 'Lối đá'}</span>
            <div className="bar-track">
              <div className="bar-fill player-fill" style={{ width: `${cats.styles}%` }} />
            </div>
            <span className="bar-val">{cats.styles}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Phase3Placeholder() {
  const { language, animations } = useApp();
  const { formData, matchResults, restartQuestionnaire } = useQuestionnaire();
  const t = translations[language].phase3;
  const tBasic = translations[language].questionnaire.basic;
  const tTactics = translations[language].questionnaire.tactics;

  // Pagination for matching list (capped at 30 max)
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Modal State
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [detailedCache, setDetailedCache] = useState({});
  const [modalLoading, setModalLoading] = useState(false);

  const matchesList = matchResults?.matches || [];
  const durationMs = matchResults?.durationMs || 0;
  
  // Cap matches at 30 players maximum
  const matchesToRender = matchesList.slice(0, 30);
  const topMatches = matchesToRender.slice(0, visibleCount);

  const formatStatValue = (val) => {
    if (val === undefined || val === null || val === "Unavailable") {
      return language === 'en' ? 'Unavailable' : 'Không khả dụng';
    }
    return typeof val === 'number' ? val.toLocaleString() : val;
  };

  const getPositionLabel = (posKey) => {
    return tBasic.positions[posKey]?.name || posKey;
  };

  const getFlagUrl = (nationality) => {
    const code = NATION_CODES[nationality] || "un";
    return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
  };

  // Helper to retrieve category averages from user vs player
  const getCategoryComparison = (userObj, playerObj, category) => {
    const keys = Object.keys(userObj[category] || {});
    if (keys.length === 0) return { user: 50, player: 50 };
    
    let userSum = 0;
    let playerSum = 0;
    keys.forEach(k => {
      userSum += Number(userObj[category][k]) || 50;
      playerSum += Number(playerObj[category][k]) || 50;
    });

    return {
      user: Math.round(userSum / keys.length),
      player: Math.round(playerSum / keys.length)
    };
  };

  // EA FC style 6 primary stats calculations
  const calculatePrimaryRatings = (p) => {
    if (p.isGK) {
      return [
        { label: language === 'en' ? 'DIV' : 'BAY NGƯỜI', val: p.goalkeeper.diving },
        { label: language === 'en' ? 'REF' : 'PHẢN XẠ', val: p.goalkeeper.reflexes },
        { label: language === 'en' ? 'HAN' : 'BẮT BÓNG', val: p.goalkeeper.handling },
        { label: language === 'en' ? 'POS' : 'VỊ TRÍ', val: p.goalkeeper.positioning },
        { label: language === 'en' ? 'KIC' : 'PHÁT BÓNG', val: p.goalkeeper.kicking },
        { label: language === 'en' ? '1v1' : 'ĐỐI MẶT', val: p.goalkeeper.oneOnOne }
      ];
    }

    const pace = Math.round((p.physical.acceleration + p.physical.sprintSpeed) / 2);
    const sho = Math.round((p.technical.finishing + p.technical.shotPower + p.technical.longShots) / 3);
    const pas = Math.round((p.technical.shortPassing + p.technical.longPassing + p.technical.vision) / 3);
    const dri = Math.round((p.technical.dribbling + p.technical.ballControl + p.physical.agility) / 3);
    const def = Math.round((p.defensive.standingTackle + p.defensive.interceptions + p.defensive.defensiveAwareness) / 3);
    const phy = Math.round((p.physical.strength + p.physical.stamina + p.physical.jumping) / 3);

    return [
      { label: language === 'en' ? 'PAC (Pace)' : 'PAC (Tốc độ)', val: pace },
      { label: language === 'en' ? 'SHO (Shoot)' : 'SHO (Dứt điểm)', val: sho },
      { label: language === 'en' ? 'PAS (Pass)' : 'PAS (Chuyền)', val: pas },
      { label: language === 'en' ? 'DRI (Dribble)' : 'DRI (Rê bóng)', val: dri },
      { label: language === 'en' ? 'DEF (Defend)' : 'DEF (Phòng ngự)', val: def },
      { label: language === 'en' ? 'PHY (Physical)' : 'PHY (Thể chất)', val: phy }
    ];
  };

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 5, matchesToRender.length));
      setIsLoadingMore(false);
    }, 600); // smooth simulated loading delay
  };

  // Open Modal details with lazy loading simulation & caching
  const openPlayerDetails = (matchItem) => {
    const player = matchItem.player;
    if (detailedCache[player.id]) {
      setSelectedPlayer({
        basic: player,
        score: matchItem.overallScore,
        categories: matchItem.categories,
        details: detailedCache[player.id]
      });
      return;
    }

    setModalLoading(true);
    // Simulate API lazy loading delay
    setTimeout(() => {
      const details = getPlayerDetails(player);
      setDetailedCache(prev => ({
        ...prev,
        [player.id]: details
      }));
      setSelectedPlayer({
        basic: player,
        score: matchItem.overallScore,
        categories: matchItem.categories,
        details: details
      });
      setModalLoading(false);
    }, 350);
  };

  const closePlayerDetails = () => {
    setSelectedPlayer(null);
  };

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (selectedPlayer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPlayer]);

  // Handle Escape key closing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePlayerDetails();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`phase3-placeholder-container ${animations === 'off' ? 'instant' : ''}`}>
      
      {/* Tactical Pitch BG Overlays */}
      <div className="pitch-background">
        <div className="pitch-outline">
          <div className="penalty-area left" />
          <div className="center-circle" />
          <div className="penalty-area right" />
        </div>
      </div>

      <div className="container placeholder-content-inner">
        <div className="glass-card success-card scale-in">
          
          <div className="success-badge-wrapper pulse-slow">
            <CheckCircle2 size={62} className="success-check-icon" />
          </div>

          <h2 className="success-title">{t.title}</h2>
          <p className="success-subtitle">{t.subtitle}</p>

          <div className="success-info-box">
            <Info className="info-icon" size={20} />
            <p className="info-text">{t.infoText}</p>
          </div>

          {/* Engine Latency diagnostics */}
          <div className="profiling-bar">
            <div className="profile-metric">
              <Database size={15} className="metric-icon" />
              <span>DATABASE: <strong>150+ Verified Footballers</strong></span>
            </div>
            <div className="profile-metric">
              <Cpu size={15} className="metric-icon" />
              <span>ALGORITHM: <strong>Weighted Similarity Vector</strong></span>
            </div>
            <div className="profile-metric">
              <Clock size={15} className="metric-icon" />
              <span>LATENCY: <strong>{durationMs.toFixed(2)} ms</strong></span>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="dashboard-grid">
            
            {/* LEFT DOSSIER SCAN CARD */}
            <div className="dashboard-col dossier-col">
              <h3 className="dashboard-col-title">
                <FileSpreadsheet size={18} />
                <span>{t.dataSummary}</span>
              </h3>
              
              <div className="scouting-report-card">
                <div className="scouting-report-header">
                  <div className="scouting-icon-wrap">
                    <User size={28} />
                  </div>
                  <div>
                    <h4 className="scout-name">{formData.basic.name}</h4>
                    <span className="scout-badge">
                      {language === 'en' ? 'LOCAL DOSSIER' : 'HỒ SƠ NỘI BỘ'}
                    </span>
                  </div>
                </div>

                {/* Section 1: Personal Details */}
                <div className="scouting-section">
                  <h5 className="section-title-label">
                    <User size={13} />
                    <span>{language === 'en' ? 'Personal Details' : 'Thông tin cá nhân'}</span>
                  </h5>
                  <div className="scout-grid-details">
                    <div className="scout-grid-item">
                      <span className="scout-label">{tBasic.age}</span>
                      <span className="scout-value">{formData.basic.age} y/o</span>
                    </div>
                    <div className="scout-grid-item">
                      <span className="scout-label">{tBasic.height}</span>
                      <span className="scout-value">{formData.basic.height} cm</span>
                    </div>
                    <div className="scout-grid-item">
                      <span className="scout-label">{tBasic.weight}</span>
                      <span className="scout-value">{formData.basic.weight} kg</span>
                    </div>
                    <div className="scout-grid-item">
                      <span className="scout-label">{tBasic.foot}</span>
                      <span className="scout-value val-accent">
                        {formData.basic.preferredFoot === 'left' 
                          ? tBasic.footLeft 
                          : formData.basic.preferredFoot === 'right' 
                            ? tBasic.footRight 
                            : tBasic.footBoth}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Football details */}
                <div className="scouting-section">
                  <h5 className="section-title-label">
                    <Award size={13} />
                    <span>{language === 'en' ? 'Football Identity' : 'Thông tin bóng đá'}</span>
                  </h5>
                  <div className="scouting-identity-list">
                    <div className="identity-row">
                      <span className="scout-label">{tBasic.position}</span>
                      <span className="position-chip primary-chip">{getPositionLabel(formData.basic.primaryPosition)}</span>
                    </div>
                    <div className="identity-row">
                      <span className="scout-label">{language === 'en' ? 'System' : 'Hệ thống'}</span>
                      <span className="value-chip font-bold">
                        {tTactics.systems[formData.tactics.system] || formData.tactics.system}
                      </span>
                    </div>
                    <div className="identity-row">
                      <span className="scout-label">{language === 'en' ? 'Tactical Role' : 'Vai trò'}</span>
                      <span className="value-chip blue-chip">
                        {tTactics.roles[formData.tactics.role] || formData.tactics.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section 3: Styles list */}
                <div className="scouting-section">
                  <h5 className="section-title-label">
                    <Compass size={13} />
                    <span>{language === 'en' ? 'Preferred Playing Styles' : 'Phong cách chơi bóng'}</span>
                  </h5>
                  <div className="style-chips-flex">
                    {formData.styles.length > 0 ? (
                      formData.styles.map(sKey => {
                        const styleLabel = translations[language].questionnaire.style[sKey];
                        return (
                          <span key={sKey} className="style-chip">{styleLabel}</span>
                        );
                      })
                    ) : (
                      <span className="no-styles-selected">
                        {language === 'en' ? 'None selected' : 'Không có'}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: SIMILARITY MATCHING LIST */}
            <div className="dashboard-col matches-col">
              <h3 className="dashboard-col-title">
                <Sparkles size={18} className="title-glow-icon" />
                <span>{language === 'en' ? 'Similarity Analysis Matches' : 'Báo cáo tương đồng chi tiết'}</span>
              </h3>

              <div className="matches-list">
                {topMatches.length > 0 ? (
                  topMatches.map((matchItem, idx) => (
                    <PlayerCard 
                      key={matchItem.player.id}
                      matchItem={matchItem}
                      idx={idx}
                      language={language}
                      formData={formData}
                      getFlagUrl={getFlagUrl}
                      getCategoryComparison={getCategoryComparison}
                      openPlayerDetails={openPlayerDetails}
                    />
                  ))
                ) : (
                  <div className="no-matches-msg">
                    {language === 'en' ? 'No matching players found.' : 'Không tìm thấy cầu thủ phù hợp.'}
                  </div>
                )}
              </div>

              {/* Lazy Loading load more button */}
              <div className="load-more-wrapper">
                <button 
                  className={`load-more-premium-btn ${visibleCount >= matchesToRender.length ? 'disabled' : ''} ${isLoadingMore ? 'loading' : ''}`}
                  onClick={loadMore}
                  disabled={visibleCount >= matchesToRender.length || isLoadingMore}
                  aria-label="Load more matched players"
                >
                  {isLoadingMore ? (
                    <div className="btn-spinner" />
                  ) : visibleCount >= matchesToRender.length ? (
                    <span>{language === 'en' ? 'All Matches Loaded (Max 30)' : 'Đã tải hết cầu thủ (Tối đa 30)'}</span>
                  ) : (
                    <span>{language === 'en' ? `Show More Players (${matchesToRender.length - visibleCount} left)` : `Hiển thị thêm cầu thủ (còn ${matchesToRender.length - visibleCount})`}</span>
                  )}
                </button>
              </div>

            </div>

          </div>

          <div className="actions-wrapper">
            <button 
              className="btn-primary restart-btn" 
              onClick={restartQuestionnaire}
            >
              <RotateCcw size={18} />
              <span>{t.btnRestart}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lazy Loading spinner for initial click fetch */}
      {modalLoading && createPortal(
        <div className="modal-loading-overlay">
          <div className="loading-card-glow">
            <div className="scanner-line" />
            <Sparkles className="loading-spin-icon" size={40} />
            <p>{language === 'en' ? 'Syncing scouting database...' : 'Đang truy xuất dữ liệu trình sát...'}</p>
          </div>
        </div>,
        document.body
      )}

      {/* PREMIUM PLAYER DETAILS MODAL (Portal) */}
      {selectedPlayer && createPortal(
        <div className="player-modal-backdrop" onClick={closePlayerDetails}>
          <div className="player-modal-content-wrapper scale-in" onClick={e => e.stopPropagation()}>
            
            {/* Modal Header banner */}
            <div className="modal-top-banner">
              <div className="modal-pitch-lines" />
              
              {/* Close Button */}
              <button className="modal-close-x-btn" onClick={closePlayerDetails} aria-label="Close modal">
                <X size={20} />
              </button>

              <div className="banner-primary-details">
                {/* Large FUT Avatar shield */}
                <div className="modal-avatar-fut-card">
                  <div className="card-badge-rating">{selectedPlayer.score}</div>
                  <div className="card-badge-pos">{selectedPlayer.basic.primaryPosition}</div>
                  <div className="modal-card-glow" />
                  <div className="avatar-card-inner">
                    <ScoutingPlayerImage 
                      imageUrl={selectedPlayer.basic.imageUrl} 
                      fallbackUrls={selectedPlayer.basic.imageFallbackUrls} 
                      alt={selectedPlayer.basic.name} 
                      className="player-modal-fut-photo" 
                    />
                  </div>
                </div>

                <div className="banner-text-details">
                  <div className="modal-name-flag-row">
                    <h2 className="modal-player-fullname">{selectedPlayer.details.name}</h2>
                    <img 
                      src={getFlagUrl(selectedPlayer.details.nationality)} 
                      alt={selectedPlayer.details.nationality} 
                      className="modal-nation-flag-img"
                    />
                  </div>
                  
                  <p className="modal-club-league-subtitle">
                    <strong>{selectedPlayer.details.club}</strong> • {selectedPlayer.details.league}
                  </p>

                  <div className="modal-similarity-percent-overlay">
                    <span className="sim-lbl">{language === 'en' ? 'ENGINE MATCH SCORE' : 'ĐỘ TƯƠNG ĐỒNG THUẬT TOÁN'}</span>
                    <h3 className="sim-val">⭕ {selectedPlayer.score}%</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="modal-scroll-body">
              <div className="modal-body-grid">
                
                {/* COLUMN 1: Attributes & statistics */}
                <div className="modal-body-col col-stats">
                  
                  {/* Detailed Similarity Breakdown */}
                  <div className="modal-section-card">
                    <h4 className="card-section-title">
                      <Sparkles size={16} className="title-glow-icon" />
                      <span>{language === 'en' ? 'Detailed Similarity Breakdown' : 'Chi tiết độ tương đồng'}</span>
                    </h4>
                    <div className="similarity-breakdown-list">
                      <div className="breakdown-item">
                        <span className="breakdown-lbl font-bold">{language === 'en' ? 'Overall Match Score' : 'Độ khớp tổng thể'}</span>
                        <div className="breakdown-bar-wrap">
                          <div className="breakdown-bar-fill overall-fill" style={{ width: `${selectedPlayer.score}%` }} />
                        </div>
                        <span className="breakdown-val font-bold color-accent">{selectedPlayer.score}%</span>
                      </div>
                      
                      {selectedPlayer.categories.technical !== undefined && (
                        <div className="breakdown-item">
                          <span className="breakdown-lbl">{language === 'en' ? 'Technical Similarity' : 'Tương đồng kỹ thuật'}</span>
                          <div className="breakdown-bar-wrap">
                            <div className="breakdown-bar-fill" style={{ width: `${selectedPlayer.categories.technical}%` }} />
                          </div>
                          <span className="breakdown-val">{selectedPlayer.categories.technical}%</span>
                        </div>
                      )}

                      {selectedPlayer.categories.physical !== undefined && (
                        <div className="breakdown-item">
                          <span className="breakdown-lbl">{language === 'en' ? 'Physical Similarity' : 'Tương đồng thể chất'}</span>
                          <div className="breakdown-bar-wrap">
                            <div className="breakdown-bar-fill" style={{ width: `${selectedPlayer.categories.physical}%` }} />
                          </div>
                          <span className="breakdown-val">{selectedPlayer.categories.physical}%</span>
                        </div>
                      )}

                      {selectedPlayer.categories.tactical !== undefined && (
                        <div className="breakdown-item">
                          <span className="breakdown-lbl">{language === 'en' ? 'Tactical Similarity' : 'Tương đồng chiến thuật'}</span>
                          <div className="breakdown-bar-wrap">
                            <div className="breakdown-bar-fill" style={{ width: `${selectedPlayer.categories.tactical}%` }} />
                          </div>
                          <span className="breakdown-val">{selectedPlayer.categories.tactical}%</span>
                        </div>
                      )}

                      {selectedPlayer.categories.styles !== undefined && (
                        <div className="breakdown-item">
                          <span className="breakdown-lbl">{language === 'en' ? 'Style & Mentals' : 'Lối chơi & Tâm lý'}</span>
                          <div className="breakdown-bar-wrap">
                            <div className="breakdown-bar-fill" style={{ width: `${selectedPlayer.categories.styles}%` }} />
                          </div>
                          <span className="breakdown-val">{selectedPlayer.categories.styles}%</span>
                        </div>
                      )}

                      {selectedPlayer.categories.position !== undefined && (
                        <div className="breakdown-item">
                          <span className="breakdown-lbl">{language === 'en' ? 'Position Compatibility' : 'Độ tương thích vị trí'}</span>
                          <div className="breakdown-bar-wrap">
                            <div className="breakdown-bar-fill" style={{ width: `${selectedPlayer.categories.position}%` }} />
                          </div>
                          <span className="breakdown-val">{selectedPlayer.categories.position}%</span>
                        </div>
                      )}

                      {selectedPlayer.categories.foot !== undefined && (
                        <div className="breakdown-item">
                          <span className="breakdown-lbl">{language === 'en' ? 'Preferred Foot Match' : 'Độ khớp chân thuận'}</span>
                          <div className="breakdown-bar-wrap">
                            <div className="breakdown-bar-fill" style={{ width: `${selectedPlayer.categories.foot}%` }} />
                          </div>
                          <span className="breakdown-val">{selectedPlayer.categories.foot}%</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Grouped FC/FIFA attributes */}
                  <div className="modal-section-card">
                    <h4 className="card-section-title">
                      <TrendingUp size={16} />
                      <span>{language === 'en' ? 'Scouting Attribute Ratings' : 'Xếp hạng chỉ số trình sát'}</span>
                    </h4>
                    <div className="grouped-ratings-layout">
                      {calculatePrimaryRatings(selectedPlayer.basic).map(attr => (
                        <div key={attr.label} className="grouped-rating-bar-item">
                          <div className="bar-header-info">
                            <span className="bar-attr-name font-bold">{attr.label}</span>
                            <span className="bar-attr-score font-bold color-accent">{attr.val}</span>
                          </div>
                          <div className="modal-rating-track">
                            <div className={`modal-rating-fill ${attr.val >= 80 ? 'fill-high' : attr.val >= 60 ? 'fill-medium' : 'fill-low'}`} style={{ width: `${attr.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* COLUMN 2: Details, Bio & Achievements */}
                <div className="modal-body-col col-bio">
                  
                  {/* Personal & Career details */}
                  <div className="modal-section-card">
                    <h4 className="card-section-title">
                      <User size={16} />
                      <span>{language === 'en' ? 'Personal & Career Details' : 'Thông tin cá nhân & Sự nghiệp'}</span>
                    </h4>
                    <div className="bio-details-scout-list">
                      <div className="bio-scout-row">
                        <span className="bio-scout-lbl">{language === 'en' ? 'Date of Birth' : 'Ngày sinh'}</span>
                        <span className="bio-scout-val">{selectedPlayer.basic.dob || "Unavailable"}</span>
                      </div>
                      <div className="bio-scout-row">
                        <span className="bio-scout-lbl">{language === 'en' ? 'Age' : 'Tuổi'}</span>
                        <span className="bio-scout-val">{selectedPlayer.details.age}</span>
                      </div>
                      <div className="bio-scout-row">
                        <span className="bio-scout-lbl">{language === 'en' ? 'Height / Weight' : 'Chiều cao / Cân nặng'}</span>
                        <span className="bio-scout-val">{selectedPlayer.details.height} cm / {selectedPlayer.details.weight} kg</span>
                      </div>
                      <div className="bio-scout-row">
                        <span className="bio-scout-lbl">{language === 'en' ? 'Preferred Foot' : 'Chân thuận'}</span>
                        <span className="bio-scout-val text-capitalize color-accent">{selectedPlayer.details.preferredFoot}</span>
                      </div>
                      <div className="bio-scout-row">
                        <span className="bio-scout-lbl">{language === 'en' ? 'Shirt Number' : 'Số áo'}</span>
                        <span className="bio-scout-val font-bold">
                          {selectedPlayer.details.shirtNumber === "Unavailable" 
                            ? (language === 'en' ? 'Unavailable' : 'Không có') 
                            : `#${selectedPlayer.details.shirtNumber}`}
                        </span>
                      </div>
                      <div className="bio-scout-row">
                        <span className="bio-scout-lbl">{language === 'en' ? 'Years Active' : 'Năm hoạt động'}</span>
                        <span className="bio-scout-val">
                          {selectedPlayer.details.career.yearsActive === "Unavailable" 
                            ? (language === 'en' ? 'Unavailable' : 'Không có') 
                            : selectedPlayer.details.career.yearsActive}
                        </span>
                      </div>
                      <div className="bio-scout-row">
                        <span className="bio-scout-lbl">{language === 'en' ? 'Previous Clubs' : 'Câu lạc bộ cũ'}</span>
                        <span className="bio-scout-val text-right">
                          {selectedPlayer.details.career.previousClubs[0] === "Unavailable" 
                            ? (language === 'en' ? 'Unavailable' : 'Không có') 
                            : selectedPlayer.details.career.previousClubs.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Career verified statistics */}
                  <div className="modal-section-card">
                    <h4 className="card-section-title">
                      <Clock size={16} />
                      <span>{language === 'en' ? 'Verified Career Statistics' : 'Thống kê sự nghiệp đã xác minh'}</span>
                    </h4>
                    <div className="statistics-grid-list">
                      <div className="stat-grid-box">
                        <span className="stat-box-lbl">{language === 'en' ? 'Appearances' : 'Số trận'}</span>
                        <span className="stat-box-val">{formatStatValue(selectedPlayer.details.stats.appearances)}</span>
                      </div>
                      <div className="stat-grid-box">
                        <span className="stat-box-lbl">{language === 'en' ? 'Goals' : 'Bàn thắng'}</span>
                        <span className="stat-box-val">{formatStatValue(selectedPlayer.details.stats.goals)}</span>
                      </div>
                      <div className="stat-grid-box">
                        <span className="stat-box-lbl">{language === 'en' ? 'Assists' : 'Kiến tạo'}</span>
                        <span className="stat-box-val">{formatStatValue(selectedPlayer.details.stats.assists)}</span>
                      </div>
                      {selectedPlayer.basic.isGK && (
                        <div className="stat-grid-box">
                          <span className="stat-box-lbl">{language === 'en' ? 'Clean Sheets' : 'Giữ sạch lưới'}</span>
                          <span className="stat-box-val">{formatStatValue(selectedPlayer.details.stats.cleanSheets)}</span>
                        </div>
                      )}
                      <div className="stat-grid-box">
                        <span className="stat-box-lbl">{language === 'en' ? 'Minutes Played' : 'Số phút thi đấu'}</span>
                        <span className="stat-box-val">{formatStatValue(selectedPlayer.details.stats.minutesPlayed)}</span>
                      </div>
                      <div className="stat-grid-box">
                        <span className="stat-box-lbl">{language === 'en' ? 'Int. Appearances' : 'Trận quốc tế'}</span>
                        <span className="stat-box-val">{formatStatValue(selectedPlayer.details.stats.internationalApps)}</span>
                      </div>
                      <div className="stat-grid-box">
                        <span className="stat-box-lbl">{language === 'en' ? 'Int. Goals' : 'Bàn quốc tế'}</span>
                        <span className="stat-box-val">{formatStatValue(selectedPlayer.details.stats.internationalGoals)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="modal-section-card">
                    <h4 className="card-section-title">
                      <Star size={16} className="title-glow-icon" />
                      <span>{language === 'en' ? 'Major Honours & Achievements' : 'Danh hiệu & Thành tích chính'}</span>
                    </h4>
                    <ul className="achievements-bullet-list">
                      {selectedPlayer.details.achievements[0] === "Unavailable" ? (
                        <span className="no-styles-selected">
                          {language === 'en' ? 'Unavailable' : 'Không có'}
                        </span>
                      ) : (
                        selectedPlayer.details.achievements.map((ach, idx) => (
                          <li key={idx} className="achievement-li-item">
                            <Award size={14} className="ach-bullet-icon" />
                            <span>{ach}</span>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Biography Section */}
              <div className="biography-card-section modal-section-card">
                <h4 className="card-section-title">
                  <Compass size={16} />
                  <span>{language === 'en' ? 'Verified Player Biography' : 'Tiểu sử cầu thủ đã xác minh'}</span>
                </h4>
                <div className="biography-paragraphs">
                  {selectedPlayer.details.biography.map((p, idx) => (
                    <p key={idx} className="biography-p">{p}</p>
                  ))}
                </div>
              </div>

              {/* External Sources Links */}
              <div className="external-sources-section">
                <h5 className="sources-title-label">
                  <ShieldAlert size={12} />
                  <span>{language === 'en' ? 'VERIFIED EXTERNAL REFERENCES' : 'NGUỒN THAM KHẢO ĐÃ XÁC MINH'}</span>
                </h5>
                <div className="sources-links-flex">
                  <a href={selectedPlayer.details.externalLinks.wikipedia} target="_blank" rel="noopener noreferrer" className="external-source-link">
                    <span>Wikipedia</span>
                    <ExternalLink size={12} />
                  </a>
                  <a href={selectedPlayer.details.externalLinks.clubWebsite} target="_blank" rel="noopener noreferrer" className="external-source-link">
                    <span>{language === 'en' ? 'Official Club Profile' : 'Hồ sơ câu lạc bộ'}</span>
                    <ExternalLink size={12} />
                  </a>
                  <a href={selectedPlayer.details.externalLinks.leagueProfile} target="_blank" rel="noopener noreferrer" className="external-source-link">
                    <span>{language === 'en' ? 'League Statistics' : 'Thống kê giải đấu'}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>,
        document.body
      )}

      <style>{`
        .phase3-placeholder-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 0 80px 0;
          position: relative;
          z-index: 5;
          overflow: hidden;
          background: radial-gradient(circle at center, #0e1610 0%, #06090c 100%);
        }

        /* Tactical Pitch BG overlay styling */
        .pitch-background {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          pointer-events: none;
          z-index: 1;
        }

        .pitch-outline {
          position: absolute;
          inset: 40px;
          border: 2px solid #fff;
          border-radius: 10px;
        }

        .pitch-outline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #fff;
          transform: translateX(-50%);
        }

        .center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          border: 2px solid #fff;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .penalty-area {
          position: absolute;
          top: 50%;
          width: 140px;
          height: 320px;
          border: 2px solid #fff;
          transform: translateY(-50%);
        }

        .penalty-area.left {
          left: 0;
          border-left: none;
        }

        .penalty-area.right {
          right: 0;
          border-right: none;
        }

        .placeholder-content-inner {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 1200px !important;
          z-index: 2;
        }

        .success-card {
          width: 100%;
          max-width: 1100px;
          padding: 55px 45px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          border-radius: var(--border-radius-lg);
          background: rgba(8, 12, 18, 0.65);
          border: 1px solid rgba(var(--accent-rgb), 0.22);
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(var(--accent-rgb), 0.08);
          backdrop-filter: blur(20px);
        }

        .success-badge-wrapper {
          color: var(--accent);
          filter: drop-shadow(0 0 20px var(--accent-glow-strong));
          margin-bottom: 2px;
        }

        .success-title {
          font-family: var(--font-heading);
          font-size: 2.35rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary) 50%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .success-subtitle {
          color: var(--text-secondary);
          font-size: 1.15rem;
          max-width: 640px;
          line-height: 1.6;
        }

        .success-info-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(16, 26, 36, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 18px 22px;
          border-radius: var(--border-radius-sm);
          text-align: left;
          width: 100%;
        }

        .info-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
          filter: drop-shadow(0 0 5px rgba(var(--accent-rgb), 0.3));
        }

        .info-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Profiling bar latency metrics */
        .profiling-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 10px 24px;
          border-radius: var(--border-radius-full);
          font-size: 0.85rem;
          color: var(--text-muted);
          width: fit-content;
        }

        .profile-metric {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .metric-icon {
          color: var(--accent);
        }

        /* Dashboard grid */
        .dashboard-grid {
          display: grid;
          grid-template-columns: 36% 64%;
          gap: 36px;
          width: 100%;
          margin-top: 10px;
          text-align: left;
        }

        .dashboard-col {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .dashboard-col-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .title-glow-icon {
          color: var(--accent);
          filter: drop-shadow(0 0 6px rgba(var(--accent-rgb), 0.6));
        }

        /* Dossier styling left card */
        .scouting-report-card {
          background: rgba(14, 20, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--border-radius-md);
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: inset 0 2px 10px rgba(255,255,255,0.01);
        }

        .scouting-report-header {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 16px;
        }

        .scouting-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.15) 0%, rgba(var(--accent-rgb), 0.03) 100%);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          filter: drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.2));
        }

        .scout-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .scout-badge {
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }

        .scouting-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .section-title-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .scout-grid-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .scout-grid-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          padding: 8px 12px;
        }

        .scout-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .scout-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .val-accent {
          color: var(--accent);
        }

        .scouting-identity-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .identity-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.15);
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.02);
        }

        .position-chip {
          background: var(--accent);
          color: #080c12;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 2px 10px;
          border-radius: 4px;
        }

        .value-chip {
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .blue-chip {
          color: var(--accent-blue);
        }

        .style-chips-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .style-chip {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: var(--text-secondary);
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: var(--border-radius-full);
          transition: background var(--transition-fast);
        }

        .style-chip:hover {
          background: rgba(255,255,255,0.08);
          color: var(--text-primary);
        }

        .no-styles-selected {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-style: italic;
        }

        /* Matches List styling */
        .matches-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
          max-height: 750px;
          overflow-y: auto;
          padding-right: 8px;
          align-content: start;
        }

        .matches-list::-webkit-scrollbar {
          width: 5px;
        }
        .matches-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .matches-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .matches-list::-webkit-scrollbar-thumb:hover {
          background: var(--accent);
        }

        /* PREMIUM SCOUTING PLAYER CARD */
        .player-scouting-card-premium {
          background: linear-gradient(180deg, rgba(16, 22, 32, 0.5) 0%, rgba(8, 12, 18, 0.5) 100%);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--border-radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
          height: 480px; /* Fixed height for 100% visual consistency! */
          box-sizing: border-box;
        }

        .player-fut-photo {
          width: 90%;
          height: 90%;
          object-fit: contain;
          transform: translateY(4px);
        }

        .player-modal-fut-photo {
          width: 92%;
          height: 92%;
          object-fit: contain;
          transform: translateY(6px);
        }

        .player-silhouette-svg {
          width: 70%;
          height: 70%;
          color: rgba(255, 255, 255, 0.25);
          transform: translateY(4px);
        }

        /* Similarity breakdown styles */
        .similarity-breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .breakdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.82rem;
        }

        .breakdown-lbl {
          width: 140px;
          color: var(--text-secondary);
        }

        .breakdown-bar-wrap {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          overflow: hidden;
        }

        .breakdown-bar-fill {
          height: 100%;
          background: var(--accent-blue);
          border-radius: 10px;
        }

        .breakdown-bar-fill.overall-fill {
          background: var(--accent);
          box-shadow: 0 0 5px rgba(var(--accent-rgb), 0.3);
        }

        .breakdown-val {
          width: 40px;
          text-align: right;
          color: var(--text-primary);
        }

        .player-scouting-card-premium.clickable-card {
          cursor: pointer;
        }

        .player-scouting-card-premium.clickable-card:hover {
          border-color: rgba(var(--accent-rgb), 0.35);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3), 0 0 15px rgba(var(--accent-rgb), 0.05);
          background: linear-gradient(180deg, rgba(16, 22, 32, 0.6) 0%, rgba(8, 12, 18, 0.6) 100%);
        }

        .player-scouting-card-premium.clickable-card:active {
          transform: translateY(0);
        }

        .premium-card-top {
          display: flex;
          align-items: center;
          gap: 18px;
          position: relative;
          z-index: 2;
        }

        /* FUT Shield Avatar */
        .fut-shield-avatar {
          width: 60px;
          height: 74px;
          position: relative;
          flex-shrink: 0;
        }

        .scout-rank-badge {
          position: absolute;
          top: -8px;
          left: -8px;
          background: var(--accent);
          color: #07090e;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.75rem;
          padding: 2px 7px;
          border-radius: var(--border-radius-full);
          box-shadow: 0 3px 6px rgba(0,0,0,0.4);
          z-index: 5;
        }

        .fut-shield-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent) 0%, transparent 100%);
          opacity: 0.15;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          filter: blur(2px);
        }

        .fut-shield-inner {
          position: absolute;
          inset: 1px;
          background: rgba(20, 28, 40, 0.95);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .player-avatar-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          text-shadow: 0 0 10px rgba(255,255,255,0.2);
        }

        .player-meta-info-premium {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .name-and-flag-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .premium-player-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .nation-flag {
          width: 22px;
          height: 15px;
          object-fit: cover;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .premium-player-club-sub {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .player-biography-chips {
          display: flex;
          gap: 6px;
          margin-top: 4px;
        }

        .bio-chip {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.05);
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* SVG percentage progress ring */
        .svg-ring-wrapper {
          position: relative;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .progress-ring {
          transform: rotate(-90deg);
        }

        .progress-ring-bg {
          stroke: rgba(255, 255, 255, 0.04);
        }

        .progress-ring-fill {
          filter: drop-shadow(0 0 4px rgba(var(--accent-rgb), 0.4));
        }

        .score-ring-content {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          inset: 0;
        }

        .ring-score-val {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.05rem;
          color: var(--accent);
          text-shadow: 0 0 10px var(--accent-glow);
          line-height: 1;
        }

        .ring-score-lbl {
          font-size: 0.6rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          margin-top: 1px;
        }

        /* MATCH EXPLANATION BOX */
        .match-explanation-box {
          background: rgba(var(--accent-rgb), 0.04);
          border-left: 3px solid var(--accent);
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
        }

        .explanation-paragraph {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .explanation-paragraph span {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .spark-inline-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 3px;
          filter: drop-shadow(0 0 3px rgba(var(--accent-rgb), 0.4));
        }

        /* SIDE BY SIDE COMPARISON */
        .side-by-side-comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 24px;
          border-top: 1px dashed rgba(255,255,255,0.06);
          padding-top: 16px;
        }

        .metric-compare-bar {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bar-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .bar-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
        }

        .bar-subject {
          width: 48px;
          color: var(--text-secondary);
        }

        .bar-track {
          flex: 1;
          height: 5px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 10px;
        }

        .bar-fill.user-fill {
          background: var(--accent-blue);
        }

        .bar-fill.player-fill {
          background: var(--accent);
        }

        .bar-val {
          font-weight: 700;
          color: var(--text-primary);
          width: 25px;
          text-align: right;
        }

        /* Load More Premium Button */
        .load-more-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 12px;
        }

        .load-more-premium-btn {
          width: 100%;
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12) 0%, rgba(var(--accent-rgb), 0.03) 100%);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          color: var(--accent);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          padding: 14px 28px;
          border-radius: var(--border-radius-full);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all var(--transition-fast);
          backdrop-filter: blur(5px);
          letter-spacing: 0.02em;
        }

        .load-more-premium-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.22) 0%, rgba(var(--accent-rgb), 0.08) 100%);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(var(--accent-rgb), 0.15);
          border-color: rgba(var(--accent-rgb), 0.45);
        }

        .load-more-premium-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .load-more-premium-btn.disabled,
        .load-more-premium-btn:disabled {
          background: rgba(255,255,255,0.02);
          border-color: rgba(255,255,255,0.06);
          color: var(--text-muted);
          cursor: not-allowed;
        }

        .btn-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(var(--accent-rgb), 0.2);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        /* Initial clicked player spinner overlay */
        .modal-loading-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(5, 7, 10, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loading-card-glow {
          background: rgba(14, 20, 30, 0.9);
          border: 1px solid rgba(var(--accent-rgb), 0.3);
          border-radius: var(--border-radius-md);
          padding: 35px 50px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .scanner-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          animation: scan 1.8s ease-in-out infinite;
        }

        .loading-spin-icon {
          color: var(--accent);
          animation: pulse 1s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(var(--accent-rgb), 0.6));
        }

        .loading-card-glow p {
          font-family: var(--font-heading);
          color: var(--text-secondary);
          font-size: 0.9rem;
          letter-spacing: 0.05em;
        }

        /* PREMIUM PLAYER DETAILS MODAL STYLING */
        .player-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 20px;
        }

        .player-modal-content-wrapper {
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          background: rgba(10, 14, 22, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(var(--accent-rgb), 0.05);
        }

        .modal-top-banner {
          background: linear-gradient(135deg, #0e1d14 0%, #070b0e 100%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 35px 40px;
          position: relative;
        }

        .modal-pitch-lines {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          pointer-events: none;
          background-image: radial-gradient(circle at center, transparent 70%, #fff 71%);
          background-size: 200px 200px;
          background-position: center;
        }

        .modal-close-x-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all var(--transition-fast);
        }

        .modal-close-x-btn:hover {
          background: rgba(255,255,255,0.08);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .banner-primary-details {
          display: flex;
          align-items: center;
          gap: 28px;
          position: relative;
          z-index: 2;
        }

        /* Modal FUT Avatar Card design */
        .modal-avatar-fut-card {
          width: 90px;
          height: 110px;
          background: linear-gradient(180deg, #101c13 0%, #080c10 100%);
          border: 1.5px solid rgba(var(--accent-rgb), 0.35);
          clip-path: polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%);
          position: relative;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        .card-badge-rating {
          position: absolute;
          top: 14px;
          left: 12px;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.95rem;
          color: var(--accent);
          line-height: 1;
        }

        .card-badge-pos {
          position: absolute;
          top: 26px;
          left: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .modal-card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(var(--accent-rgb), 0.25) 0%, transparent 80%);
          pointer-events: none;
        }

        .avatar-card-inner {
          position: absolute;
          inset: 4px;
          background: rgba(14,20,30,0.95);
          clip-path: polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-initials-txt {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.65rem;
          color: var(--text-primary);
          text-shadow: 0 0 12px rgba(var(--accent-rgb), 0.4);
        }

        .banner-text-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-name-flag-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .modal-player-fullname {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .modal-nation-flag-img {
          width: 28px;
          height: 19px;
          object-fit: cover;
          border-radius: 2px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .modal-club-league-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .modal-similarity-percent-overlay {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-top: 4px;
        }

        .sim-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .sim-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--accent);
          text-shadow: 0 0 8px rgba(var(--accent-rgb), 0.2);
        }

        /* Modal scrollable content body */
        .modal-scroll-body {
          flex: 1;
          overflow-y: auto;
          padding: 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          background: #080c10;
        }

        .modal-scroll-body::-webkit-scrollbar {
          width: 5px;
        }
        .modal-scroll-body::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .modal-body-col {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .modal-section-card {
          background: rgba(14, 20, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .card-section-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 10px;
        }

        /* Grouped Ratings */
        .grouped-ratings-layout {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .grouped-rating-bar-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bar-header-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
        }

        .bar-attr-name {
          color: var(--text-secondary);
        }

        .bar-attr-score {
          font-weight: 800;
        }

        .color-accent {
          color: var(--accent);
        }

        .modal-rating-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
          overflow: hidden;
        }

        .modal-rating-fill {
          height: 100%;
          border-radius: 10px;
          background: var(--accent);
        }

        .modal-rating-fill.fill-high {
          background: var(--accent);
          box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.3);
        }

        .modal-rating-fill.fill-medium {
          background: var(--accent-blue);
        }

        .modal-rating-fill.fill-low {
          background: #e74c3c;
        }

        /* Career statistics boxes */
        .statistics-grid-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .stat-grid-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255,255,255,0.02);
          border-radius: 6px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          text-align: center;
        }

        .stat-box-lbl {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .stat-box-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        /* Personal details row list */
        .bio-details-scout-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bio-scout-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.2);
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.02);
          font-size: 0.82rem;
        }

        .bio-scout-lbl {
          color: var(--text-muted);
        }

        .bio-scout-val {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Major Honours & Achievements */
        .achievements-bullet-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .achievement-li-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .ach-bullet-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
          filter: drop-shadow(0 0 2px rgba(var(--accent-rgb), 0.3));
        }

        /* Biography Section */
        .biography-card-section {
          gap: 14px;
        }

        .biography-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .biography-p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          text-indent: 14px;
        }

        /* External Sources references */
        .external-sources-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 20px;
        }

        .sources-title-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sources-links-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .external-source-link {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          font-size: 0.78rem;
          padding: 6px 14px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .external-source-link:hover {
          background: rgba(var(--accent-rgb), 0.08);
          border-color: rgba(var(--accent-rgb), 0.35);
          color: var(--accent);
        }

        /* Animations */
        @keyframes scan {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 992px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .success-card {
            padding: 40px 24px;
          }
          .modal-body-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .success-title {
            font-size: 1.8rem;
          }
          .scout-grid-details {
            grid-template-columns: 1fr;
          }
          .side-by-side-comparison-grid {
            grid-template-columns: 1fr;
          }
          .premium-card-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .svg-ring-wrapper {
            align-self: flex-end;
          }
          .modal-top-banner {
            padding: 24px 20px;
          }
          .banner-primary-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }
          .modal-scroll-body {
            padding: 20px;
          }
          .statistics-grid-list {
            grid-template-columns: repeat(2, 1fr);
          }
          .sources-links-flex {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
