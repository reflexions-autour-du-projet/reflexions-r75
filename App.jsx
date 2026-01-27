import React, { useState, useEffect } from 'react';
import { mediasOligarchiques, pantouflage, sessionsConfig, prochaineSession } from './sessions-data.js';

// ═══════════════════════════════════════════════════════════════════════════
// RÉFLEXION AUTOUR DU PROJET — R75
// Application pour les sessions de Rélexion autour du Projet de La Ruche 75 (Discord)
// Discord
// ═══════════════════════════════════════════════════════════════════════════

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [reactions, setReactions] = useState({ pollen: 0, miel: 0, alveole: 0, reine: 0 });
  const [showProjet, setShowProjet] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  // Charger les polices Flamengo et Distrampler
  useEffect(() => {
    // Ajouter les styles globaux
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Flamengo';
        src: url('/fonts/Flamengo.otf') format('opentype');
        font-weight: 100 900;
        font-style: normal;
        font-display: block;
      }
      
      @font-face {
        font-family: 'Distrampler';
        src: url('/fonts/Distrampler.otf') format('opentype');
        font-weight: 100 900;
        font-style: normal;
        font-display: block;
      }
      
      * { box-sizing: border-box; margin: 0; padding: 0; }
      
      body, html {
        font-family: 'Distrampler', Georgia, 'Times New Roman', serif !important;
        font-size: 16px;
        background: #111111;
        color: #fae8a4;
        min-height: 100vh;
      }
      
      /* Force Flamengo sur tous les titres */
      h1, h2, h3, h4, h5, h6,
      [class*="title"],
      [class*="heading"] {
        font-family: 'Flamengo', Georgia, serif !important;
      }
      
      /* Force Distrampler sur le texte courant à 16px */
      p, span, div, li, a, input, textarea, button, label {
        font-family: 'Distrampler', Georgia, 'Times New Roman', serif;
        font-size: 16px;
      }
      
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: rgba(238, 194, 29, 0.05); }
      ::-webkit-scrollbar-thumb { 
        background: rgba(238, 194, 29, 0.3); 
        border-radius: 4px; 
      }
      ::-webkit-scrollbar-thumb:hover { background: rgba(238, 194, 29, 0.5); }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Navigation
  const goToTheme = (theme) => {
    setCurrentTheme(theme);
    setCurrentSession(null);
    setCurrentSection(null);
  };

  const goToSession = (sessionId) => {
    setCurrentSession(sessionId);
    const data = currentTheme === 'medias' ? mediasOligarchiques : pantouflage;
    const sessionData = data[sessionId];
    if (sessionData) {
      const firstSection = Object.keys(sessionData.sections)[0];
      setCurrentSection(firstSection);
    }
  };

  const goHome = () => {
    setCurrentTheme(null);
    setCurrentSession(null);
    setCurrentSection(null);
  };

  const addReaction = (type) => {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const submitQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions(prev => [...prev, { text: newQuestion, time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }]);
      setNewQuestion('');
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPOSANTS UI
  // ═══════════════════════════════════════════════════════════════════════════

  const HexLogo = ({ size = 80, color = "#eec21d" }) => (
    <svg width={size} height={size * 1.15} viewBox="0 0 100 115" style={{ filter: 'drop-shadow(0 0 20px rgba(238, 194, 29, 0.3))' }}>
      <defs>
        <linearGradient id="hexGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4d03f" />
          <stop offset="50%" stopColor="#eec21d" />
          <stop offset="100%" stopColor="#d4a516" />
        </linearGradient>
      </defs>
      <polygon 
        points="50,2 95,28 95,87 50,113 5,87 5,28" 
        fill="none" 
        stroke="url(#hexGold)" 
        strokeWidth="4"
      />
      <text 
        x="50" y="68" 
        textAnchor="middle" 
        fill="url(#hexGold)" 
        style={{ fontFamily: "'Flamengo'", fontSize: '22px', fontWeight: 'bold' }}
      >
        R75
      </text>
    </svg>
  );

  const GlassCard = ({ children, onClick, style: customStyle = {}, hover = true }) => (
    <div 
      onClick={onClick}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(238, 194, 29, 0.15)',
        borderRadius: '24px',
        padding: '24px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        ...customStyle
      }}
      onMouseEnter={(e) => {
        if (hover && onClick) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.borderColor = 'rgba(238, 194, 29, 0.4)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(238, 194, 29, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover && onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(238, 194, 29, 0.15)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
    >
      {children}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE D'ACCUEIL
  // ═══════════════════════════════════════════════════════════════════════════

  const renderAccueil = () => {
    const mediasCount = sessionsConfig.medias.filter(s => s.available).length;
    const pantouflageCount = sessionsConfig.pantouflage.filter(s => s.available).length;

    return (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        {/* Background effects */}
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse at 20% 20%, rgba(238, 194, 29, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(238, 194, 29, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Header avec logo */}
          <header style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ marginBottom: '24px', animation: 'float 6s ease-in-out infinite' }}>
              <HexLogo size={100} />
            </div>
            <h1 style={{ 
              fontFamily: "'Flamengo'",
              fontSize: 'clamp(22px, 6vw, 42px)',
              color: '#fff',
              marginBottom: '8px',
              letterSpacing: '0.05em',
              textShadow: '0 2px 20px rgba(238, 194, 29, 0.3)'
            }}>
              RÉFLEXIONS AUTOUR DU PROJET
            </h1>
            <p style={{ 
              fontFamily: "'Flamengo'",
              fontSize: 'clamp(20px, 4vw, 22px)',
              color: '#eec21d',
              letterSpacing: '0.15em'
            }}>
              R75
            </p>
          </header>

          {/* Bannière prochaine session */}
          <GlassCard hover={false} style={{ 
            marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.12) 0%, rgba(238, 194, 29, 0.03) 100%)',
            border: '1px solid rgba(238, 194, 29, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '32px' }}>📅</span>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ 
                  fontSize: '16px', 
                  color: '#eec21d', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  marginBottom: '4px'
                }}>
                  Prochaine session
                </div>
                <div style={{ 
                  fontFamily: "'Flamengo'",
                  fontSize: '18px', 
                  color: '#fff',
                  marginBottom: '4px'
                }}>
                  {prochaineSession.titre}
                </div>
                <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)' }}>
                  {prochaineSession.date}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Cartes des thèmes */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            marginBottom: '48px'
          }}>
            
            {/* Thème 1 : Médias oligarchiques */}
            <GlassCard onClick={() => goToTheme('medias')}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📺</div>
              <h2 style={{ 
                fontFamily: "'Flamengo'",
                fontSize: '22px',
                color: '#fff',
                marginBottom: '12px'
              }}>
                Les médias oligarchiques
              </h2>
              <p style={{ color: 'rgba(250, 232, 164, 0.7)', fontSize: '16px', marginBottom: '16px', lineHeight: 1.6 }}>
                Expropriation des médias oligarchiques et transformation en SCOP
              </p>
              <div style={{ 
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(238, 194, 29, 0.15)',
                borderRadius: '20px',
                fontSize: '15px',
                color: '#eec21d'
              }}>
                {mediasCount} session{mediasCount > 1 ? 's' : ''}
              </div>
              <div style={{ 
                position: 'absolute', 
                right: '24px', 
                bottom: '24px',
                fontSize: '24px',
                color: 'rgba(238, 194, 29, 0.5)'
              }}>
                →
              </div>
            </GlassCard>

            {/* Thème 2 : Pantouflage */}
            <GlassCard onClick={() => goToTheme('pantouflage')}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚪</div>
              <h2 style={{ 
                fontFamily: "'Flamengo'",
                fontSize: '22px',
                color: '#fff',
                marginBottom: '12px'
              }}>
                Le pantouflage
              </h2>
              <p style={{ color: 'rgba(250, 232, 164, 0.7)', fontSize: '16px', marginBottom: '16px', lineHeight: 1.6 }}>
                Les allers-retours entre fonction publique et secteur privé
              </p>
              <div style={{ 
                display: 'inline-block',
                padding: '6px 16px',
                background: 'rgba(238, 194, 29, 0.15)',
                borderRadius: '20px',
                fontSize: '15px',
                color: '#eec21d'
              }}>
                {pantouflageCount} session{pantouflageCount > 1 ? 's' : ''}
              </div>
              <div style={{ 
                position: 'absolute', 
                right: '24px', 
                bottom: '24px',
                fontSize: '24px',
                color: 'rgba(238, 194, 29, 0.5)'
              }}>
                →
              </div>
            </GlassCard>
          </div>

          {/* Bouton Le Projet */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowProjet(true)}
              style={{
                background: 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)',
                border: 'none',
                borderRadius: '30px',
                padding: '16px 32px',
                color: '#111',
                fontFamily: "'Flamengo'",
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(238, 194, 29, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(238, 194, 29, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(238, 194, 29, 0.3)';
              }}
            >
              📜 Consulter Le Projet
            </button>
          </div>

          {/* Footer */}
          <footer style={{ 
            marginTop: '64px', 
            paddingTop: '24px', 
            borderTop: '1px solid rgba(238, 194, 29, 0.1)',
            textAlign: 'center',
            fontSize: '15px',
            color: 'rgba(250, 232, 164, 0.5)'
          }}>
           <p>🐝 Butiner notre futur ensemble, abeille par abeille, réflexion après réflexion...</p>
            <p style={{ marginTop: '8px' }}>
              Sessions : <strong style={{ color: '#eec21d' }}>Jeudis 18h</strong> et <strong style={{ color: '#eec21d' }}>Dimanches 17h</strong> - sauf réunion
            </p>
          </footer>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // HUB DE THÈME (Liste des sessions)
  // ═══════════════════════════════════════════════════════════════════════════

  const renderThemeHub = () => {
    const isMedias = currentTheme === 'medias';
    const sessions = isMedias ? sessionsConfig.medias : sessionsConfig.pantouflage;
    const themeTitle = isMedias ? "Les médias oligarchiques" : "Le pantouflage";
    const themeIcon = isMedias ? "📺" : "🚪";

    return (
      <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Bouton retour */}
        <button
          onClick={goHome}
          style={{
            background: 'rgba(238, 194, 29, 0.1)',
            border: '1px solid rgba(238, 194, 29, 0.2)',
            borderRadius: '12px',
            padding: '10px 20px',
            color: '#fae8a4',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '32px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.1)'}
        >
          ← Retour à l'accueil
        </button>

        {/* Header du thème */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>{themeIcon}</div>
          <h1 style={{ 
            fontFamily: "'Flamengo'",
            fontSize: 'clamp(24px, 5vw, 36px)',
            color: '#fff',
            marginBottom: '8px'
          }}>
            {themeTitle}
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: 'rgba(250, 232, 164, 0.6)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            NOS PRIORITÉS › LUTTER › La fin de l'oligarchie
          </p>
        </header>

        {/* Grille des sessions */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '20px' 
        }}>
          {sessions.map((session, index) => (
            <GlassCard 
              key={session.id}
              onClick={session.available ? () => goToSession(session.id) : undefined}
              style={{
                opacity: session.available ? 1 : 0.5,
                cursor: session.available ? 'pointer' : 'not-allowed'
              }}
              hover={session.available}
            >
              <div style={{ 
                fontSize: '32px', 
                fontFamily: "'Flamengo'",
                color: '#eec21d',
                marginBottom: '12px'
              }}>
                0{index + (isMedias ? 1 : 4)}
              </div>
              <h3 style={{ 
                fontFamily: "'Flamengo'",
                fontSize: '18px',
                color: '#fff',
                marginBottom: '8px'
              }}>
                {session.titre}
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.6)' }}>
                {session.date}
              </p>
              {!session.available && (
                <div style={{ 
                  marginTop: '12px',
                  fontSize: '15px',
                  color: 'rgba(250, 232, 164, 0.5)'
                }}>
                  🔒 Bientôt disponible
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VUE SESSION
  // ═══════════════════════════════════════════════════════════════════════════

  const renderSession = () => {
    const data = currentTheme === 'medias' ? mediasOligarchiques : pantouflage;
    const sessionData = data[currentSession];
    if (!sessionData) return null;

    const sections = Object.keys(sessionData.sections);
    const sectionData = sessionData.sections[currentSection];

    return (
      <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Bouton retour */}
        <button
          onClick={() => { setCurrentSession(null); setCurrentSection(null); }}
          style={{
            background: 'rgba(238, 194, 29, 0.1)',
            border: '1px solid rgba(238, 194, 29, 0.2)',
            borderRadius: '12px',
            padding: '10px 20px',
            color: '#fae8a4',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '24px'
          }}
        >
          ← Retour aux sessions
        </button>

        {/* Header de session */}
        <header style={{ 
          background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px'
        }}>
          <div style={{ 
            display: 'inline-block',
            padding: '4px 12px',
            background: 'rgba(238, 194, 29, 0.2)',
            borderRadius: '20px',
            fontSize: '16px',
            color: '#eec21d',
            marginBottom: '12px'
          }}>
            SESSION {currentSession.replace('session', '')}
          </div>
          <h1 style={{ 
            fontFamily: "'Flamengo'",
            fontSize: 'clamp(24px, 5vw, 32px)',
            color: '#fff',
            marginBottom: '16px'
          }}>
            {sessionData.title}
          </h1>
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            flexWrap: 'wrap',
            fontSize: '16px',
            color: 'rgba(250, 232, 164, 0.7)'
          }}>
            <span>📅 {sessionData.date}</span>
            <span>⏱️ {sessionData.duration}</span>
          </div>
        </header>

        {/* Navigation des sections */}
        <nav style={{ 
          display: 'flex', 
          gap: '8px', 
          flexWrap: 'wrap',
          marginBottom: '24px',
          padding: '8px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px'
        }}>
          {sections.map(key => (
            <button
              key={key}
              onClick={() => setCurrentSection(key)}
              style={{
                background: currentSection === key 
                  ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' 
                  : 'rgba(238, 194, 29, 0.1)',
                border: 'none',
                borderRadius: '12px',
                padding: '10px 16px',
                color: currentSection === key ? '#111' : '#fae8a4',
                cursor: 'pointer',
                fontFamily: "'Flamengo'",
                fontSize: '16px',
                fontWeight: currentSection === key ? '600' : '400',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {sessionData.sections[key].title}
            </button>
          ))}
        </nav>

        {/* Contenu de la section */}
        <GlassCard hover={false} style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '24px',
            color: '#eec21d',
            marginBottom: '24px'
          }}>
            {sectionData.title}
          </h2>
          {renderSectionContent(sectionData.content)}
        </GlassCard>

        {/* Barre de réactions */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}>
          {[
            { key: 'pollen', emoji: '🌻' },
            { key: 'miel', emoji: '🍯' },
            { key: 'alveole', emoji: '🐝' },
          ].map(({ key, emoji }) => (
            <button
              key={key}
              onClick={() => addReaction(key)}
              style={{
                background: 'rgba(238, 194, 29, 0.1)',
                border: '1px solid rgba(238, 194, 29, 0.2)',
                borderRadius: '24px',
                padding: '12px 20px',
                color: '#fae8a4',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'all 0.3s ease'
              }}
            >
              {emoji} {reactions[key] > 0 && `(${reactions[key]})`}
            </button>
          ))}
        </div>

        {/* Zone de questions */}
        <GlassCard hover={false}>
          <h3 style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '18px',
            color: '#eec21d',
            marginBottom: '16px'
          }}>
            💬 Vos questions
          </h3>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && submitQuestion()}
              placeholder="Posez votre question ou ajoutez une idée.."
              style={{
                flex: 1,
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(238, 194, 29, 0.2)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#fae8a4',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <button
              onClick={submitQuestion}
              style={{
                background: '#eec21d',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 20px',
                color: '#111',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Envoyer
            </button>
          </div>
          {questions.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {questions.map((q, i) => (
                <div key={i} style={{
                  background: 'rgba(238, 194, 29, 0.05)',
                  borderRadius: '10px',
                  padding: '12px',
                  fontSize: '16px'
                }}>
                  <span style={{ color: 'rgba(250, 232, 164, 0.5)', marginRight: '8px' }}>{q.time}</span>
                  <span style={{ color: '#fae8a4' }}>{q.text}</span>
                </div>
              ))}
            </div>
          )}
        </GlassCard>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU DU CONTENU
  // ═══════════════════════════════════════════════════════════════════════════

  const renderSectionContent = (content) => {
    if (!content) return null;

    // Array de contenus mixtes
    if (Array.isArray(content)) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {content.map((item, i) => renderContentItem(item, i))}
        </div>
      );
    }

    // Objet unique
    return renderContentItem(content, 0);
  };

  const renderContentItem = (item, key) => {
    if (typeof item === 'string') {
      return (
        <p key={key} style={{ color: 'rgba(250, 232, 164, 0.85)', lineHeight: 1.7 }}>
          {item}
        </p>
      );
    }

    // Définition
    if (item.type === 'definition' || item.term) {
      return (
        <div key={key} style={{
          background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
          borderLeft: '4px solid #eec21d',
          borderRadius: '0 16px 16px 0',
          padding: '20px 24px'
        }}>
          <div style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '22px',
            color: '#eec21d',
            marginBottom: '8px'
          }}>
            {item.term}
          </div>
          {item.etymology && (
            <div style={{ 
              color: 'rgba(250, 232, 164, 0.6)', 
              fontSize: '16px', 
              fontStyle: 'italic',
              marginBottom: '8px'
            }}>
              {item.etymology}
            </div>
          )}
          <div style={{ color: '#fff', fontSize: '16px' }}>{item.meaning}</div>
          {item.principes && (
            <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
              {item.principes.map((p, i) => (
                <li key={i} style={{ color: 'rgba(250, 232, 164, 0.8)', marginBottom: '8px', lineHeight: 1.6 }}>
                  {p}
                </li>
              ))}
            </ul>
          )}
          {item.note && (
            <div style={{ 
              marginTop: '16px',
              padding: '12px',
              background: 'rgba(238, 194, 29, 0.1)',
              borderRadius: '10px',
              fontSize: '16px',
              color: '#eec21d'
            }}>
              📎 {item.note}
            </div>
          )}
          {/* Pour la définition du pantouflage avec origine et terminologie */}
          {item.origine && (
            <div style={{ marginTop: '16px' }}>
              <div style={{ 
                fontSize: '16px', 
                color: 'rgba(250, 232, 164, 0.6)',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#eec21d' }}>Origine :</strong> {item.origine.date} — {item.origine.contexte}
              </div>
              {item.terminologie && item.terminologie.map((t, i) => (
                <div key={i} style={{
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                  marginBottom: '8px'
                }}>
                  <span style={{ color: '#eec21d', fontWeight: '600' }}>{t.terme}</span>
                  <span style={{ color: 'rgba(250, 232, 164, 0.8)', marginLeft: '8px' }}>{t.signification}</span>
                </div>
              ))}
              {item.remboursement && (
                <div style={{ 
                  marginTop: '12px',
                  padding: '12px',
                  background: 'rgba(238, 194, 29, 0.1)',
                  borderRadius: '10px',
                  fontSize: '16px'
                }}>
                  💰 <strong style={{ color: '#eec21d' }}>Aujourd'hui :</strong> {item.remboursement}
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    // Pouvoir avec icône
    if (item.icon && item.name) {
      return (
        <div key={key} style={{
          background: 'rgba(238, 194, 29, 0.05)',
          border: '1px solid rgba(238, 194, 29, 0.15)',
          borderRadius: '16px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
          <div style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '16px',
            color: '#eec21d',
            marginBottom: '8px'
          }}>
            {item.name}
          </div>
          <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)' }}>
            {item.detail || item.examples}
          </div>
        </div>
      );
    }

    // Mesure numérotée
    if (item.numero !== undefined) {
      return (
        <div key={key} style={{
          display: 'flex',
          gap: '16px',
          background: 'rgba(238, 194, 29, 0.05)',
          border: '1px solid rgba(238, 194, 29, 0.15)',
          borderRadius: '16px',
          padding: '20px',
          alignItems: 'flex-start'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'rgba(238, 194, 29, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Flamengo'",
            fontSize: '18px',
            color: '#eec21d',
            flexShrink: 0
          }}>
            {item.numero}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontFamily: "'Flamengo'",
              fontSize: '16px',
              color: '#fff',
              marginBottom: '6px'
            }}>
              {item.titre}
            </div>
            <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)', marginBottom: '6px' }}>
              {item.description}
            </div>
            {item.page && (
              <div style={{ fontSize: '16px', color: '#eec21d' }}>
                📄 {item.page}
              </div>
            )}
          </div>
        </div>
      );
    }

    // Oligarque/média
    if (item.name && item.medias) {
      return (
        <div key={key} style={{
          background: 'rgba(238, 194, 29, 0.05)',
          border: '1px solid rgba(238, 194, 29, 0.15)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '15px',
            color: '#eec21d',
            marginBottom: '6px'
          }}>
            {item.name}
          </div>
          <div style={{ fontSize: '15px', color: 'rgba(250, 232, 164, 0.7)' }}>
            {item.medias}
          </div>
        </div>
      );
    }

    // Comparaison
    if (item.type === 'comparaison') {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {item.elements.map((el, i) => (
            <div key={i} style={{
              background: 'rgba(238, 194, 29, 0.05)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div style={{ 
                fontSize: '16px', 
                color: '#eec21d', 
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '6px'
              }}>
                {el.label}
              </div>
              <div style={{ fontSize: '15px', color: '#fae8a4' }}>{el.value}</div>
            </div>
          ))}
        </div>
      );
    }

    // Stat
    if (item.stat || (item.number && item.label)) {
      const stat = item.stat || item;
      return (
        <div key={key} style={{
          background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
          borderRadius: '20px',
          padding: '32px',
          textAlign: 'center'
        }}>
          <div style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '56px',
            color: '#eec21d',
            lineHeight: 1
          }}>
            {stat.number}
          </div>
          <div style={{ fontSize: '18px', color: '#fff', marginTop: '8px' }}>{stat.label}</div>
          {stat.detail && (
            <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.6)', marginTop: '4px' }}>
              {stat.detail}
            </div>
          )}
        </div>
      );
    }

    // Citation
    if (item.citation) {
      return (
        <div key={key} style={{
          background: 'rgba(238, 194, 29, 0.05)',
          borderLeft: '4px solid #eec21d',
          borderRadius: '0 12px 12px 0',
          padding: '20px 24px'
        }}>
          <div style={{ 
            fontSize: '15px', 
            color: '#fae8a4', 
            fontStyle: 'italic',
            lineHeight: 1.7,
            marginBottom: '12px'
          }}>
            "{item.citation.texte}"
          </div>
          <div style={{ fontSize: '15px', color: '#eec21d' }}>
            — {item.citation.source}
          </div>
        </div>
      );
    }

    // Avantages + Questions (Session 2) — DOIT ÊTRE AVANT les conditions génériques
    if (item.avantages && item.questions) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ 
              fontFamily: "'Flamengo'",
              fontSize: '16px',
              color: '#eec21d',
              marginBottom: '12px'
            }}>
              ✅ Avantages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.avantages.map((av, i) => (
                <div key={i} style={{
                  background: 'rgba(143, 255, 143, 0.1)',
                  border: '1px solid rgba(143, 255, 143, 0.2)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#8fc',
                  fontSize: '16px'
                }}>
                  {av}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ 
              fontFamily: "'Flamengo'",
              fontSize: '16px',
              color: '#eec21d',
              marginBottom: '12px'
            }}>
              ❓ Questions ouvertes
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.questions.map((q, i) => (
                <div key={i} style={{
                  background: 'rgba(238, 194, 29, 0.1)',
                  border: '1px solid rgba(238, 194, 29, 0.2)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#fae8a4',
                  fontSize: '16px'
                }}>
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Double versant / Marché (Session 3) — DOIT ÊTRE AVANT les conditions génériques
    if (item.explication && item.versants) {
      return (
        <div key={key}>
          <p style={{ color: 'rgba(250, 232, 164, 0.85)', lineHeight: 1.7, marginBottom: '20px' }}>
            {item.explication}
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '20px'
          }}>
            {item.versants.map((v, i) => (
              <div key={i} style={{
                background: 'rgba(238, 194, 29, 0.08)',
                border: '1px solid rgba(238, 194, 29, 0.2)',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <div style={{ 
                  fontFamily: "'Flamengo'",
                  fontSize: '16px',
                  color: '#eec21d',
                  marginBottom: '8px'
                }}>
                  {v.titre}
                </div>
                <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.8)', lineHeight: 1.6 }}>
                  {v.detail}
                </div>
              </div>
            ))}
          </div>
          {item.insight && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
              borderRadius: '12px',
              padding: '16px 20px',
              fontSize: '16px',
              color: '#fff',
              fontStyle: 'italic'
            }}>
              💡 {item.insight}
            </div>
          )}
        </div>
      );
    }

    // Exemples européens avec stat spéciale (Session 4) — DOIT ÊTRE AVANT if (item.exemples)
    if (item.exemples && item.stat && item.stat.source) {
      return (
        <div key={key}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{
                background: 'rgba(238, 194, 29, 0.05)',
                border: '1px solid rgba(238, 194, 29, 0.15)',
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ 
                  fontFamily: "'Flamengo'",
                  fontSize: '16px',
                  color: '#eec21d',
                  marginBottom: '6px'
                }}>
                  {ex.nom}
                </div>
                <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.8)' }}>
                  {ex.detail}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '15px', 
              color: '#fff',
              marginBottom: '8px',
              lineHeight: 1.6
            }}>
              {item.stat.chiffre}
            </div>
            <div style={{ fontSize: '16px', color: '#eec21d' }}>
              — {item.stat.source}
            </div>
          </div>
        </div>
      );
    }

    // Government Sachs (Session 4) — DOIT ÊTRE AVANT if (item.exemples)
    if (item.intro && item.exemples) {
      return (
        <div key={key}>
          <p style={{ color: 'rgba(250, 232, 164, 0.85)', lineHeight: 1.7, marginBottom: '20px' }}>
            {item.intro}
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{
                background: 'rgba(238, 194, 29, 0.05)',
                border: '1px solid rgba(238, 194, 29, 0.15)',
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ 
                  fontFamily: "'Flamengo'",
                  fontSize: '16px',
                  color: '#eec21d',
                  marginBottom: '8px'
                }}>
                  {ex.nom}
                </div>
                {ex.avant && (
                  <div style={{ fontSize: '15px', color: 'rgba(250, 232, 164, 0.6)', marginBottom: '4px' }}>
                    Avant : {ex.avant}
                  </div>
                )}
                <div style={{ fontSize: '16px', color: '#fae8a4' }}>
                  {ex.apres || ex.detail}
                </div>
              </div>
            ))}
          </div>
          {item.mondial && (
            <>
              <h4 style={{ 
                fontFamily: "'Flamengo'",
                fontSize: '16px',
                color: '#eec21d',
                marginBottom: '12px'
              }}>
                Dans le monde
              </h4>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px'
              }}>
                {item.mondial.map((m, i) => (
                  <div key={i} style={{
                    background: 'rgba(238, 194, 29, 0.05)',
                    borderRadius: '10px',
                    padding: '12px'
                  }}>
                    <div style={{ fontSize: '16px', color: '#eec21d', marginBottom: '4px' }}>
                      {m.pays}
                    </div>
                    <div style={{ fontWeight: '600', color: '#fff' }}>{m.nom}</div>
                    <div style={{ fontSize: '15px', color: 'rgba(250, 232, 164, 0.7)' }}>{m.detail}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      );
    }

    // Exemples avec détails (générique) — APRÈS les conditions spécifiques
    if (item.exemples) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {item.exemples.map((ex, i) => (
            <div key={i} style={{
              background: 'rgba(238, 194, 29, 0.05)',
              border: '1px solid rgba(238, 194, 29, 0.15)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              {renderExemple(ex)}
            </div>
          ))}
        </div>
      );
    }

    // Principal (parcours Macron)
    if (item.principal) {
      return (
        <div key={key}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '24px'
          }}>
            <h4 style={{ 
              fontFamily: "'Flamengo'",
              fontSize: '20px',
              color: '#eec21d',
              marginBottom: '16px'
            }}>
              {item.principal.nom}
            </h4>
            <Timeline parcours={item.principal.parcours} />
          </div>
          
          {item.autres && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ 
                fontFamily: "'Flamengo'",
                fontSize: '16px',
                color: '#eec21d',
                marginBottom: '8px'
              }}>
                Autres exemples
              </h4>
              {item.autres.map((ex, i) => (
                <div key={i} style={{
                  background: 'rgba(238, 194, 29, 0.05)',
                  border: '1px solid rgba(238, 194, 29, 0.15)',
                  borderRadius: '12px',
                  padding: '16px'
                }}>
                  <div style={{ fontWeight: '600', color: '#fff', marginBottom: '6px' }}>{ex.nom}</div>
                  <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)' }}>{ex.detail}</div>
                </div>
              ))}
            </div>
          )}
          
          {item.stat && (
            <div style={{
              marginTop: '24px',
              background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <span style={{ 
                fontFamily: "'Flamengo'",
                fontSize: '36px',
                color: '#eec21d'
              }}>
                {item.stat.number}
              </span>
              <span style={{ fontSize: '16px', color: '#fae8a4', marginLeft: '12px' }}>
                {item.stat.label}
              </span>
            </div>
          )}
        </div>
      );
    }

    // Young Leaders
    if (item.concept && item.programmes) {
      return (
        <div key={key}>
          <p style={{ color: 'rgba(250, 232, 164, 0.85)', lineHeight: 1.7, marginBottom: '20px' }}>
            {item.concept}
          </p>
          
          {item.citation && (
            <div style={{
              background: 'rgba(238, 194, 29, 0.08)',
              borderLeft: '4px solid #eec21d',
              borderRadius: '0 12px 12px 0',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{ 
                fontSize: '15px', 
                color: '#fae8a4', 
                fontStyle: 'italic',
                lineHeight: 1.7,
                marginBottom: '8px'
              }}>
                "{item.citation.texte}"
              </div>
              <div style={{ fontSize: '15px', color: '#eec21d' }}>
                — {item.citation.auteur}, {item.citation.source}
              </div>
            </div>
          )}
          
          {item.programmes.map((prog, i) => (
            <div key={i} style={{
              background: 'rgba(238, 194, 29, 0.05)',
              border: '1px solid rgba(238, 194, 29, 0.15)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '16px'
            }}>
              <div style={{ 
                fontFamily: "'Flamengo'",
                fontSize: '18px',
                color: '#eec21d',
                marginBottom: '8px'
              }}>
                {prog.nom}
              </div>
              <div style={{ fontSize: '15px', color: 'rgba(250, 232, 164, 0.6)', marginBottom: '12px' }}>
                Depuis {prog.depuis} — {prog.format}
              </div>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px' 
              }}>
                {prog.exemples.map((ex, j) => (
                  <span key={j} style={{
                    padding: '6px 12px',
                    background: 'rgba(238, 194, 29, 0.1)',
                    borderRadius: '20px',
                    fontSize: '15px',
                    color: '#fae8a4'
                  }}>
                    {typeof ex === 'string' ? ex : `${ex.nom} → ${ex.delai}`}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Modèle coopératif avec nom, modele, resultat
    if (item.nom && item.modele) {
      return (
        <div key={key} style={{
          background: 'rgba(238, 194, 29, 0.05)',
          border: '1px solid rgba(238, 194, 29, 0.15)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '16px',
            color: '#eec21d',
            marginBottom: '6px'
          }}>
            {item.nom}
          </div>
          <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)', marginBottom: '4px' }}>
            {item.modele}
          </div>
          {item.resultat && (
            <div style={{ fontSize: '15px', color: '#8fc' }}>✓ {item.resultat}</div>
          )}
        </div>
      );
    }

    // Titre + detail simple
    if (item.titre && item.detail) {
      return (
        <div key={key} style={{
          background: 'rgba(238, 194, 29, 0.05)',
          border: '1px solid rgba(238, 194, 29, 0.15)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ fontWeight: '600', color: '#fff', marginBottom: '6px' }}>{item.titre}</div>
          <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)', lineHeight: 1.6 }}>{item.detail}</div>
        </div>
      );
    }

    // Fallback pour les arrays d'items avec icon
    if (Array.isArray(item)) {
      return (
        <div key={key} style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {item.map((subItem, i) => renderContentItem(subItem, `${key}-${i}`))}
        </div>
      );
    }

    return null;
  };

  const renderExemple = (ex) => {
    if (typeof ex === 'string') {
      return <div style={{ color: '#fae8a4' }}>{ex}</div>;
    }
    return (
      <>
        <div style={{ fontWeight: '600', color: '#fff', marginBottom: '6px' }}>{ex.nom}</div>
        <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)' }}>{ex.detail}</div>
      </>
    );
  };

  // Timeline component
  const Timeline = ({ parcours }) => (
    <div style={{ position: 'relative', paddingLeft: '22px' }}>
      <div style={{
        position: 'absolute',
        left: '8px',
        top: '8px',
        bottom: '8px',
        width: '2px',
        background: 'linear-gradient(180deg, #eec21d 0%, rgba(238, 194, 29, 0.2) 100%)'
      }} />
      {parcours.map((item, i) => (
        <div key={i} style={{ 
          position: 'relative', 
          marginBottom: '16px',
          paddingLeft: '16px'
        }}>
          <div style={{
            position: 'absolute',
            left: '-20px',
            top: '6px',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: item.type === 'privé' ? '#e74c3c' : item.type === 'formation' ? '#3498db' : '#eec21d',
            border: '3px solid #111'
          }} />
          <div style={{ color: 'rgba(250, 232, 164, 0.5)', fontSize: '16px' }}>{item.periode}</div>
          <div style={{ color: '#fff', fontWeight: '500' }}>{item.poste}</div>
        </div>
      ))}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginTop: '20px',
        paddingLeft: '16px',
        fontSize: '16px',
        color: 'rgba(250, 232, 164, 0.7)'
      }}>
        <span><span style={{ color: '#eec21d' }}>●</span> Public</span>
        <span><span style={{ color: '#e74c3c' }}>●</span> Privé</span>
        <span><span style={{ color: '#3498db' }}>●</span> Formation</span>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // MODAL LE PROJET
  // ═══════════════════════════════════════════════════════════════════════════

  const renderProjetModal = () => {
    if (!showProjet) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '24px'
      }}>
        <div style={{
          background: '#1a1a1a',
          border: '1px solid rgba(238, 194, 29, 0.3)',
          borderRadius: '24px',
          padding: '32px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '80vh',
          overflow: 'auto',
          position: 'relative'
        }}>
          <button
            onClick={() => setShowProjet(false)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              background: 'rgba(238, 194, 29, 0.1)',
              border: '1px solid rgba(238, 194, 29, 0.3)',
              borderRadius: '50%',
              color: '#fae8a4',
              cursor: 'pointer',
              fontSize: '20px'
            }}
          >
            ×
          </button>
          
          <h2 style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '22px',
            color: '#eec21d',
            marginBottom: '8px'
          }}>
            Le Projet
          </h2>
          <p style={{ 
            color: 'rgba(250, 232, 164, 0.6)', 
            fontSize: '16px',
            marginBottom: '24px'
          }}>
            Projet politique — La dernière Version
          </p>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontFamily: "'Flamengo'",
              fontSize: '16px',
              color: '#eec21d',
              marginBottom: '12px'
            }}>
              NOS PRIORITÉS
            </h3>
            {[
              'LUTTER — Fin de l\'oligarchie, commissions d\'enquête, levée du secret défense',
              'VOTER — Souveraineté populaire, référendums d\'initiative citoyenne',
              'GRANDIR — Éducation nationale, formation, culture',
              'PROTÉGER — Justice, sécurité, défense nationale',
              'PRODUIRE — Réindustrialisation, agriculture, économie',
              'SOIGNER — Santé, hôpital public, prévention',
              'PARTAGER — Redistribution, solidarité, services publics'
            ].map((item, i) => (
              <div key={i} style={{
                padding: '12px 16px',
                background: 'rgba(238, 194, 29, 0.05)',
                border: '1px solid rgba(238, 194, 29, 0.15)',
                borderRadius: '10px',
                fontSize: '16px',
                color: '#fae8a4',
                marginBottom: '8px'
              }}>
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://ruches.org/sites/default/files/mediatheque/documents/2025-12/le-projet-8.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 22px',
              background: 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)',
              color: '#111',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px'
            }}
          >
            📄 Lire le Projet
          </a>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU PRINCIPAL
  // ═══════════════════════════════════════════════════════════════════════════

  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#111111',
      color: '#fae8a4'
    }}>
      {currentSession ? renderSession() : currentTheme ? renderThemeHub() : renderAccueil()}
      {renderProjetModal()}
    </div>
  );
};

export default App;
