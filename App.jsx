import React, { useState, useEffect } from 'react';
import { mediasOligarchiques, pantouflage, sessionsConfig, prochaineSession } from './sessions-data.js';

// ═══════════════════════════════════════════════════════════════════════════
// RÉFLEXION AUTOUR DU PROJET — R75
// Application pour les sessions de Réflexion autour du Projet de La Ruche 75
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// DONNÉES DE SYNTHÈSE PAR SESSION
// ═══════════════════════════════════════════════════════════════════════════

const sessionsSyntheses = {
  // Sessions Médias Oligarchiques
  session1: {
    titre: "Synthèse — Session #001",
    grandesIdees: [
      "L'oligarchie = concentration des pouvoirs économique, politique, administratif et médiatique",
      "28 familles/entités possèdent tous les médias français",
      "La SCOP comme modèle alternatif : salariés propriétaires, 1 personne = 1 voix",
      "Les écoles de journalisme créent une forme de pensée unique"
    ],
    questionsOuvertes: [
      "La SCOP est-elle le modèle le plus approprié ou faut-il explorer d'autres alternatives?",
      "Transformation des médias existants vs création de nouveaux médias coopératifs?",
      "Comment capitaliser au départ sans investisseur?",
      "Les salariés seraient-ils mieux à même de gérer qu'un propriétaire unique?",
      "Comment définir précisément 'média oligarchique'?",
      "Quel processus pour l'expropriation?"
    ],
    pistesAction: [
      "Approfondir la notion de SCOP lors de la prochaine session",
      "Étudier la charte déontologique d'Alternatives Économiques ou autres SCOP"
    ]
  },
  session2: {
    titre: "Synthèse — Session #002",
    grandesIdees: [
      "Les médias sont des marchés à double versant : vente au public + vente d'audience aux annonceurs",
      "L'influence est la première raison d'acheter un média, pas la rentabilité",
      "Médias structurellement déficitaires → +1 Md€/an de subventions publiques aux groupes",
      "Le déficit peut être orchestré comme outil de contrôle sur les journalistes",
      "Distinction fondamentale entre 'informer' et 'chercher à convaincre'",
      "Quid de la charte de Munich"
    ],
    questionsOuvertes: [
      "Le déficit est-il mis en place sciemment pour prétendre aux subventions ET contrôler les journalistes?",
      "Faut-il interdire aux groupes bénéficiaires de posséder des médias subventionnés?",
      "Comment auditer les financements indirects (programmes TV, etc.)?",
      "Est-ce un cadeau empoisonné de rendre les salariés propriétaires de dettes?",
      "Quid de l'indemnisation si rétrocession gratuite?"
    ],
    pistesAction: [
      "Étudier les modèles : Mediapart (SAS), Alternatives Éco (SCOP), XXI (niche sans pub)",
      "Explorer la charte de Munich comme condition d'accès aux subventions"
    ]
  },
  session3: {
    titre: "Synthèse — Session #003",
    grandesIdees: [
      "Les codes déontologiques abandonnés depuis 40 ans par le politique et l'économique",
      "Sociocratie : organisation en cercles de personnes autonomes, méthode agile",
      "Exemples : Octo (500+ salariés), Cirque du Soleil",
      "Neutralité = illusion → mieux vaut assumer sa ligne éditoriale",
      "'Edit' = couper — une ligne éditoriale est une ligne qui coupe",
      "L'AFP comme marché à double versant : info pour le gouvernement + abonnement presse",
      "Guerre cognitive : l'information instrumentalisée pour déstabiliser",
      "L'IA brouille le réel et le fictif (nouveau réflexe de doute)"
    ],
    questionsOuvertes: [
      "Comment intégrer l'IA dans la réflexion sur l'avenir des médias?",
      "Un label 'conçu sans IA' serait-il intéressant pour les médias coopératifs?",
      "Faut-il un organe de contrôle contraignant?",
      "Transformation vs création : quel est le modèle le plus pertinent?",
      "Comment faire recroître la rentabilité sans impacter les salariés?"
    ],
    pistesAction: [
      "Contacter Nexus : média indépendant sans publicité, modèle économique à étudier",
      "Interviewer une coopérative opérant en sociocratie",
      "Omerta et Karl Zero : médias sans subvention vivant de la qualité"
    ],
    citation: {
      texte: "L'utopie ne signifie pas l'irréalisable, mais l'irréalisé. L'utopie d'hier peut devenir la réalité de demain",
      auteur: "Monod"
    }
  },
  // Sessions Pantouflage (à compléter selon tes sessions)
  session4: {
    titre: "Synthèse — Session #004",
    grandesIdees: [
      "Pantouflage = allers-retours entre fonction publique et secteur privé",
      "Origine : obligation de remboursement des frais de formation (pantoufle)",
      "Le système actuel permet des passages rapides vers le privé",
      "Macron : exemple du parcours public → privé → politique"
    ],
    questionsOuvertes: [
      "La période de carence de 5 ans est-elle suffisante?",
      "Comment contrôler les conflits d'intérêts post-mandat?",
      "Faut-il interdire aux hauts fonctionnaires de devenir élus sans démission?"
    ],
    pistesAction: [
      "Documenter les parcours types des pantoufleurs français",
      "Étudier les modèles de régulation européens"
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// DONNÉES DU DOSSIER DE SYNTHÈSE GLOBAL
// ═══════════════════════════════════════════════════════════════════════════

const dossierSyntheseData = {
  themes: [
    {
      id: 'oligarchie',
      title: '🏛️ Oligarchie médiatique',
      color: '#ffebc0',
      summary: '28 familles/entités contrôlent tous les médias français',
      details: [
        'Concentration des pouvoirs : économique, politique, administratif, médiatique',
        'Propriétaires : Bouygues, Bolloré, Arnault, Niel, Drahi, Lagardère, Saadé, Kretinsky..',
        "L'influence est devenue la première raison d'acheter un média, pas la rentabilité",
        'Glissement de "vecteur d\'information" à "vecteur d\'opinion"'
      ],
      questions: [
        'Comment définir précisément "média oligarchique" ?',
        "Quel processus juridique pour l'expropriation ?",
        'Rétrocession gratuite : quid de la légalité ?'
      ]
    },
    {
      id: 'financement',
      title: '💰 Financement',
      color: '#ebc471',
      summary: "+1 Md€/an de subventions publiques",
      details: [
        'Médias structurellement déficitaires malgré les milliards de bénéfices des groupes',
        'Arnault : 17,8M€ de subventions (2023) vs 14 Mds€ de bénéfices LVMH',
        'Déficit possiblement orchestré : outil de contrôle sur les journalistes',
        "Marché à double versant : vente au public + vente d'audience aux annonceurs"
      ],
      questions: [
        'Interdire les subventions aux groupes bénéficiaires ?',
        'Auditer qui prend combien via quelles structures ?',
        'Le déficit est-il volontaire pour maintenir la pression ?'
      ]
    },
    {
      id: 'deontologie',
      title: '⚖️ Déontologie',
      color: '#d9a22c',
      summary: 'Codes abandonnés depuis 40 ans, pensée unique',
      details: [
        "Plus personne ne légifère sur les conflits d'intérêts",
        'Écoles de journalisme : formatage de la pensée',
        "Charte de Munich (1971) : n'engage que ceux qui la lisent",
        'ARCOM : si elle a cette mission, ça ne fonctionne pas'
      ],
      questions: [
        'Faut-il un nouvel organe de contrôle contraignant?',
        "Interdire aux oligarques d'être actionnaires des écoles?",
        "La charte de Munich comme condition d'accès aux subventions?"
      ]
    },
    {
      id: 'scop',
      title: '🤝 SCOP & Sociocratie',
      color: '#b08b3d',
      summary: 'Modèle coopératif : salariés propriétaires, 1 personne = 1 voix',
      details: [
        'SCOP : 51% capital + 65% droits de vote aux salariés, dirigeants élus',
        'Sociocratie : cercles de 6-8 personnes autonomes, référents inter-cercles',
        'Parmigiano-Reggiano : 50 ans de coopératives qui fonctionnent'
      ],
      questions: [
        'Transformer les médias existants OU créer de nouveaux médias coopératifs?',
        'Cadeau empoisonné si le média est déjà déficitaire?',
        'Les salariés seraient-ils mieux à même de gérer?'
      ]
    },
    {
      id: 'neutralite',
      title: '📝 Neutralité & Sémantique',
      color: '#a0751a',
      summary: "Informer ≠ Convaincre — La neutralité n'existe pas",
      details: [
        'Distinction fondamentale : information vs opinion',
        'Ligne éditoriale : chacun en a une, la neutralité est une illusion',
        '"Edit" = couper — une ligne éditoriale coupe',
        "Le choix même d'un sujet est déjà un parti pris"
      ],
      questions: [
        "Réappropriation des mots : qu'est-ce que l'information à l'ère digitale?",
        'Inclure la distinction informer/convaincre dans les statuts SCOP?',
        'Est-ce le système ou une croyance populaire qui fait croire à la neutralité?'
      ]
    },
    {
      id: 'ia',
      title: '🤖 IA & Guerre cognitive',
      color: '#835c07',
      summary: 'Brouillage réel/fictif, information instrumentalisée',
      details: [
        'Nouveau réflexe : on doute de chaque info/photo (vraie ou générée?)',
        'Exemple : photo Macron Ray-Ban crue fake mais vraie',
        'Risque : Guerre cognitive'
      ],
      questions: [
        "Comment intégrer l'IA dans la réflexion sur l'avenir des médias?",
        'Un label "conçu sans IA" serait-il intéressant?',
        'Comment protéger les petits médias?'
      ]
    }
  ],
  contacts: [
    { name: 'Nexus', desc: 'Média indépendant sans pub', status: 'À étudier' },
    { name: 'Médias M5S', desc: 'Via ruche Europe (Italie)', status: 'À étudier' },
    { name: 'Omerta / Karl Zero', desc: 'Sans subvention', status: 'À étudier' },
    { name: 'Mediapart', desc: 'SAS actionnariat mixte', status: 'Modèle' },
    { name: 'Alternatives Éco', desc: 'SCOP avec charte', status: 'Modèle' },
    { name: 'Magazine XXI', desc: 'Bimestriel sans pub', status: 'Modèle' }
  ],
  idees: [
    'Label « conçu sans IA » pour les médias coopératifs',
    "Charte de Munich = condition d'accès aux subventions",
    'Outils sociocratiques (7 piliers + 80 patterns)',
    'Audit public : qui prend combien via quelle structure'
  ]
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [reactions, setReactions] = useState({ pollen: 0, miel: 0, alveole: 0, reine: 0 });
  const [showProjet, setShowProjet] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  
  // États pour le dossier de synthèse global
  const [showDossierSynthese, setShowDossierSynthese] = useState(false);
  const [activeSyntheseTheme, setActiveSyntheseTheme] = useState(null);
  const [syntheseView, setSyntheseView] = useState('carte');

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
    setShowDossierSynthese(false);
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

  // Mind Map SVG pour le dossier global
  const MindMapSVG = () => {
    const nodes = [
      { id: 1, label: 'Oligarchie', sub: '28 propriétaires', x: 50, y: 15, color: '#ffebc0' },
      { id: 2, label: 'Financement', sub: 'Subventions + Déficit', x: 15, y: 40, color: '#ebc471' },
      { id: 3, label: 'Déontologie', sub: 'Codes abandonnés', x: 85, y: 40, color: '#d9a22c' },
      { id: 4, label: 'Sémantique', sub: 'Info → Opinion', x: 50, y: 55, color: '#a0751a' },
      { id: 5, label: 'Menaces', sub: 'IA + Guerre cognitive', x: 15, y: 75, color: '#835c07' },
      { id: 6, label: 'Solutions', sub: 'SCOP + Sociocratie', x: 85, y: 75, color: '#b08b3d' }
    ];
    
    const links = [
      { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 3 },
      { from: 2, to: 4 }, { from: 3, to: 4 }, { from: 4, to: 5 },
      { from: 4, to: 6 }, { from: 5, to: 6 }, { from: 1, to: 6, dashed: true }
    ];

    return (
      <svg viewBox="0 0 100 90" style={{ width: '100%', height: '280px' }}>
        <defs>
          <marker id="arrowGold" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(238, 194, 29, 0.5)" />
          </marker>
        </defs>
        
        {links.map((link, i) => {
          const from = nodes.find(n => n.id === link.from);
          const to = nodes.find(n => n.id === link.to);
          return (
            <line
              key={i}
              x1={from.x} y1={from.y + 6}
              x2={to.x} y2={to.y - 4}
              stroke="rgba(238, 194, 29, 0.3)"
              strokeWidth="0.5"
              strokeDasharray={link.dashed ? "2,2" : "none"}
              markerEnd="url(#arrowGold)"
            />
          );
        })}
        
        {nodes.map(node => (
          <g key={node.id}>
            <rect
              x={node.x - 18} y={node.y - 6}
              width="36" height="14"
              rx="3" ry="3"
              fill="rgba(17, 17, 17, 0.9)"
              stroke={node.color}
              strokeWidth="0.8"
            />
            <text
              x={node.x} y={node.y}
              textAnchor="middle"
              fontSize="3.5"
              fill="#fae8a4"
              fontFamily="Flamengo, Georgia, serif"
            >
              {node.label}
            </text>
            <text
              x={node.x} y={node.y + 4.5}
              textAnchor="middle"
              fontSize="2.2"
              fill="rgba(250, 232, 164, 0.6)"
            >
              {node.sub}
            </text>
          </g>
        ))}
      </svg>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE D'ACCUEIL
  // ═══════════════════════════════════════════════════════════════════════════

  const renderAccueil = () => {
    const mediasCount = sessionsConfig.medias.filter(s => s.available).length;
    const pantouflageCount = sessionsConfig.pantouflage.filter(s => s.available).length;

    return (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse at 20% 20%, rgba(238, 194, 29, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(238, 194, 29, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
          
          <header style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ marginBottom: '24px' }} className="animate-float">
              <HexLogo size={100} />
            </div>
            <h1 style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: 'clamp(22px, 6vw, 42px)',
              color: '#eec21d',
              marginBottom: '8px',
              letterSpacing: '0.05em',
              textShadow: '0 2px 20px rgba(238, 194, 29, 0.3)'
            }}>
              RÉFLEXIONS AUTOUR DU PROJET
            </h1>
            <p style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: 'clamp(20px, 4vw, 22px)',
              color: '#eec21d',
              letterSpacing: '0.15em'
            }}>
              R75
            </p>
          </header>

          <GlassCard hover={false} style={{ 
            marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.12) 0%, rgba(238, 194, 29, 0.03) 100%)',
            border: '1px solid rgba(238, 194, 29, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '32px' }}>📅</span>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{ 
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: '11px', 
                  color: '#eec21d', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  marginBottom: '4px'
                }}>
                  Prochaine session
                </div>
                <div style={{ 
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: '16px', 
                  color: '#eec21d',
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

          {/* ═══════════════════════════════════════════════════════════════════
              GRID DES DEUX CARDS - CORRIGÉ
              ═══════════════════════════════════════════════════════════════════ */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            marginBottom: '48px'
          }}>

            <GlassCard onClick={() => goToTheme('pantouflage')}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🧦</div>
              <h2 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '18px',
                color: '#eec21d',
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

            <GlassCard onClick={() => goToTheme('medias')}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📺</div>
              <h2 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '18px',
                color: '#eec21d',
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

          </div>
          {/* ═══════════════════════════════════════════════════════════════════
              FIN DE LA GRID
              ═══════════════════════════════════════════════════════════════════ */}

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowProjet(true)}
              style={{
                background: 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)',
                border: 'none',
                borderRadius: '30px',
                padding: '16px 32px',
                color: '#111',
                fontFamily: "'Flamengo', Georgia, serif",
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
              Consulter Le Projet
            </button>
          </div>

          <footer style={{ 
            marginTop: '64px', 
            paddingTop: '24px', 
            borderTop: '1px solid rgba(238, 194, 29, 0.1)',
            textAlign: 'center',
            fontSize: '15px',
            color: 'rgba(250, 232, 164, 0.5)'
          }}>
            <p>Butiner notre futur ensemble, abeille par abeille, réflexion après réflexion...</p>
            <p style={{ marginTop: '8px' }}>
              Sessions : <strong style={{ color: '#eec21d' }}>Jeudis 18h</strong> et <strong style={{ color: '#eec21d' }}>Dimanches 17h</strong>
            </p>
            <p>sauf si réunion</p>
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
    const themeIcon = isMedias ? "📺" : "🧦";

    return (
      <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
        
        <button
          onClick={goHome}
          style={{
            background: 'rgba(238, 194, 29, 0.1)',
            border: '1px solid rgba(238, 194, 29, 0.2)',
            borderRadius: '12px',
            padding: '10px 20px',
            color: '#eec21d',
            fontFamily: "'Flamengo', Georgia, serif",
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '32px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.1)'}
        >
          ← Retour à l'accueil
        </button>

        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>{themeIcon}</div>
          <h1 style={{ 
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: 'clamp(24px, 5vw, 36px)',
            color: '#eec21d',
            marginBottom: '8px'
          }}>
            {themeTitle}
          </h1>
          <p style={{ 
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: '14px', 
            color: '#fae8a4',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            NOS PRIORITÉS › LUTTER › La fin de l'oligarchie
          </p>
        </header>

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
                fontSize: '22px', 
                fontFamily: "'Flamengo', Georgia, serif",
                color: '#eec21d',
                marginBottom: '12px'
              }}>
                0{index + (isMedias ? 1 : 4)}
              </div>
              <h3 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '16px',
                color: '#eec21d',
                marginBottom: '8px'
              }}>
                {session.titre}
              </h3>
              <p style={{ fontSize: '16px', color: '#fae8a4' }}>
                {session.date}
              </p>
              {!session.available && (
                <div style={{ 
                  marginTop: '12px',
                  fontSize: '14px',
                  color: '#fae8a4',
                }}>
                  🔒 Bientôt disponible
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Card Dossier de synthèse global (uniquement pour médias) */}
        {currentTheme === 'medias' && (
          <div style={{ marginTop: '32px' }}>
            <GlassCard 
              onClick={() => setShowDossierSynthese(true)}
              style={{
                background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
                border: '1px solid rgba(238, 194, 29, 0.3)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '20px',
                color: '#eec21d',
                marginBottom: '8px'
              }}>
                Dossier de synthèse
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#fae8a4',
                marginBottom: '12px'
              }}>
                Cartographie interactive des enjeux, questions ouvertes et pistes d'action
              </p>
              <div style={{ 
                display: 'inline-block',
                padding: '8px 20px',
                background: 'rgba(238, 194, 29, 0.2)',
                borderRadius: '20px',
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '11px',
                color: '#eec21d'
              }}>
                Sessions #001 → #003
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VUE SESSION (avec onglet Synthèse)
  // ═══════════════════════════════════════════════════════════════════════════

  const renderSession = () => {
    const data = currentTheme === 'medias' ? mediasOligarchiques : pantouflage;
    const sessionData = data[currentSession];
    if (!sessionData) return null;

    // Récupérer les sections + ajouter "synthese" si disponible
    const sections = Object.keys(sessionData.sections);
    const synthese = sessionsSyntheses[currentSession];
    const allSections = synthese ? [...sections, 'synthese'] : sections;
    
    const sectionData = currentSection === 'synthese' ? null : sessionData.sections[currentSection];

    return (
      <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <button
          onClick={() => { setCurrentSession(null); setCurrentSection(null); }}
          style={{
            background: 'rgba(238, 194, 29, 0.1)',
            border: '1px solid rgba(238, 194, 29, 0.2)',
            borderRadius: '12px',
            padding: '10px 20px',
            color: '#eec21d',
            cursor: 'pointer',
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: '14px',
            marginBottom: '24px'
          }}
        >
          ← Retour aux sessions
        </button>

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
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: 'clamp(24px, 5vw, 32px)',
            color: '#eec21d',
            marginBottom: '16px'
          }}>
            {sessionData.title}
          </h1>
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            flexWrap: 'wrap',
            fontSize: '16px',
            color: '#fae8a4',
          }}>
            <span>📅 {sessionData.date}</span>
            <span>⏱️ {sessionData.duration}</span>
          </div>
        </header>

        {/* Navigation des sections (avec onglet Synthèse) */}
        <nav style={{ 
          display: 'flex', 
          gap: '8px', 
          flexWrap: 'wrap',
          marginBottom: '24px',
          padding: '8px',
          background: 'rgba(238, 194, 29, 0.1)',
          borderRadius: '16px'
        }}>
          {allSections.map(key => {
            const isSynthese = key === 'synthese';
            const label = isSynthese ? 'Synthèse' : sessionData.sections[key].title;
            
            return (
              <button
                key={key}
                onClick={() => setCurrentSection(key)}
                style={{
                  background: currentSection === key 
                    ? isSynthese 
                      ? 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
                      : 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' 
                    : isSynthese
                      ? 'rgba(22, 163, 74, 0.2)'
                      : 'rgba(238, 194, 29, 0.1)',
                  border: isSynthese && currentSection !== key ? '1px solid rgba(22, 163, 74, 0.3)' : 'none',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  color: currentSection === key ? '#111' : isSynthese ? '#4ade80' : '#fae8a4',
                  cursor: 'pointer',
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: '14px',
                  fontWeight: currentSection === key ? '600' : '400',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Contenu : section normale OU synthèse */}
        {currentSection === 'synthese' && synthese ? (
          // Affichage de la synthèse de session
          <GlassCard hover={false} style={{ 
            marginBottom: '32px',
            background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(22, 163, 74, 0.02) 100%)',
            border: '1px solid rgba(22, 163, 74, 0.2)'
          }}>
            <h2 style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: '22px',
              color: '#eec21d',
              marginBottom: '24px'
            }}>
              {synthese.titre}
            </h2>

            {/* Grandes idées */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '16px',
                color: '#eec21d',
                marginBottom: '12px'
              }}>
                Grandes idées
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {synthese.grandesIdees.map((idee, i) => (
                  <div key={i} style={{
                    background: 'rgba(238, 194, 29, 0.08)',
                    borderLeft: '3px solid #eec21d',
                    borderRadius: '0 10px 10px 0',
                    padding: '12px 16px',
                    color: '#fae8a4',
                    fontSize: '14px',
                    lineHeight: 1.6
                  }}>
                    {idee}
                  </div>
                ))}
              </div>
            </div>

            {/* Questions ouvertes */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '16px',
                color: '#e9d176',
                marginBottom: '12px'
              }}>
                Questions ouvertes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {synthese.questionsOuvertes.map((q, i) => (
                  <div key={i} style={{
                    background: 'rgba(234, 88, 12, 0.1)',
                    border: '1px solid rgba(234, 88, 12, 0.2)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#fae8a4',
                    fontSize: '14px'
                  }}>
                    {q}
                  </div>
                ))}
              </div>
            </div>

            {/* Pistes d'action */}
            <div style={{ marginBottom: synthese.citation ? '24px' : '0' }}>
              <h3 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '16px',
                color: '#f8e8ab',
                marginBottom: '12px'
              }}>
                Pistes d'action
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {synthese.pistesAction.map((piste, i) => (
                  <div key={i} style={{
                    background: 'rgba(22, 163, 74, 0.1)',
                    border: '1px solid rgba(22, 163, 74, 0.2)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#fae8a4',
                    fontSize: '14px'
                  }}>
                    ✓ {piste}
                  </div>
                ))}
              </div>
            </div>

            {/* Citation (si présente) */}
            {synthese.citation && (
              <div style={{
                marginTop: '24px',
                padding: '20px',
                background: 'rgba(238, 194, 29, 0.05)',
                borderLeft: '4px solid #eec21d',
                borderRadius: '0 12px 12px 0'
              }}>
                <p style={{ 
                  fontStyle: 'italic', 
                  color: '#eec21d',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  marginBottom: '8px'
                }}>
                  « {synthese.citation.texte} »
                </p>
                <p style={{ color: '#eec21d', fontSize: '14px' }}>
                  — {synthese.citation.auteur}
                </p>
              </div>
            )}
          </GlassCard>
        ) : sectionData ? (
          // Affichage normal d'une section
          <GlassCard hover={false} style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: '22px',
              color: '#eec21d',
              marginBottom: '24px'
            }}>
              {sectionData.title}
            </h2>
            {renderSectionContent(sectionData.content)}
          </GlassCard>
        ) : null}

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
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: '16px',
            color: '#eec21d',
            marginBottom: '16px'
          }}>
            Idées et questions
          </h3>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && submitQuestion()}
              placeholder="Écris ici.."
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
                  fontSize: '14px'
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
  // DOSSIER DE SYNTHÈSE GLOBAL
  // ═══════════════════════════════════════════════════════════════════════════

  const renderDossierSynthese = () => {
    return (
      <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <button
          onClick={() => { setShowDossierSynthese(false); setSyntheseView('carte'); setActiveSyntheseTheme(null); }}
          style={{
            background: 'rgba(238, 194, 29, 0.1)',
            border: '1px solid rgba(238, 194, 29, 0.2)',
            borderRadius: '12px',
            padding: '10px 20px',
            fontFamily: "'Flamengo', Georgia, serif",
            color: '#eec21d',
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '24px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.1)'}
        >
          ← Retour aux sessions
        </button>

        <header style={{ 
          background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          <div style={{ 
            display: 'inline-block',
            padding: '4px 12px',
            background: 'rgba(238, 194, 29, 0.2)',
            borderRadius: '20px',
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: '14px',
            color: '#eec21d',
            marginBottom: '12px'
          }}>
            DOSSIER DE SYNTHÈSE GLOBAL
          </div>
          <h1 style={{ 
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: 'clamp(22px, 5vw, 32px)',
            color: '#eec21d',
            marginBottom: '8px'
          }}>
            Expropriation des médias oligarchiques
          </h1>
          <p style={{ 
            fontSize: '16px', 
            color: '#fae8a4',
          }}>
            Synthèse des sessions #001, #002, #003 — Ruche 75
          </p>
        </header>

        <nav style={{ 
          display: 'flex', 
          gap: '8px', 
          flexWrap: 'wrap',
          marginBottom: '24px',
          padding: '8px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          justifyContent: 'center'
        }}>
          {[
            { key: 'carte', label: '🗺️ Carte' },
            { key: 'themes', label: '📂 Thèmes' },
            { key: 'actions', label: '📋 Actions' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => { setSyntheseView(key); setActiveSyntheseTheme(null); }}
              style={{
                background: syntheseView === key 
                  ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' 
                  : 'rgba(238, 194, 29, 0.1)',
                border: 'none',
                borderRadius: '12px',
                padding: '10px 20px',
                color: syntheseView === key ? '#111' : '#fae8a4',
                cursor: 'pointer',
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '14px',
                fontWeight: syntheseView === key ? '600' : '400',
                transition: 'all 0.3s ease'
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Vue Carte */}
        {syntheseView === 'carte' && (
          <GlassCard hover={false} style={{ marginBottom: '24px' }}>
            <h2 style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: '20px',
              color: '#eec21d',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Cartographie des enjeux
            </h2>
            <MindMapSVG />
            <p style={{ 
              textAlign: 'center', 
              color: '#fae8a4',
              fontSize: '16px',
              marginTop: '16px'
            }}>
              Cliquez sur "Thèmes" pour explorer chaque sujet
            </p>
          </GlassCard>
        )}

        {/* Vue Thèmes */}
        {syntheseView === 'themes' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '16px',
            marginBottom: '24px'
          }}>
            {dossierSyntheseData.themes.map(theme => (
              <div
                key={theme.id}
                onClick={() => setActiveSyntheseTheme(activeSyntheseTheme === theme.id ? null : theme.id)}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${activeSyntheseTheme === theme.id ? theme.color : 'rgba(238, 194, 29, 0.15)'}`,
                  borderLeft: `4px solid ${theme.color}`,
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{ 
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: '16px',
                  color: '#eec21d',
                  marginBottom: '8px'
                }}>
                  {theme.title}
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#fae8a4',
                  lineHeight: 1.5
                }}>
                  {theme.summary}
                </p>
                
                {activeSyntheseTheme === theme.id && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(238, 194, 29, 0.1)' }}>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ 
                        fontSize: '12px', 
                        fontFamily: "'Flamengo', Georgia, serif",
                        color: '#eec21d', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '8px'
                      }}>
                        Constats
                      </p>
                      {theme.details.map((d, i) => (
                        <div key={i} style={{
                          fontSize: '14px',
                          color: 'rgba(250, 232, 164, 0.8)',
                          marginBottom: '6px',
                          paddingLeft: '12px',
                          borderLeft: '2px solid rgba(238, 194, 29, 0.2)'
                        }}>
                          {d}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ 
                        fontSize: '12px', 
                        fontFamily: "'Flamengo', Georgia, serif",
                        color: '#eec21d', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '8px'
                      }}>
                        Questions ouvertes
                      </p>
                      {theme.questions.map((q, i) => (
                        <div key={i} style={{
                          background: 'rgba(238, 194, 29, 0.08)',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          fontSize: '14px',
                          color: '#fae8a4',
                          marginBottom: '6px'
                        }}>
                          {q}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Vue Actions */}
        {syntheseView === 'actions' && (
          <>
            <GlassCard hover={false} style={{ marginBottom: '24px' }}>
              <h2 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '18px',
                color: '#eec21d',
                marginBottom: '20px'
              }}>
                Modèles à explorer
              </h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '12px' 
              }}>
                {dossierSyntheseData.contacts.map((c, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(238, 194, 29, 0.05)',
                    borderRadius: '12px',
                    padding: '14px'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontWeight: '600', 
                        color: '#fff',
                        fontSize: '15px',
                        marginBottom: '4px'
                      }}>
                        {c.name}
                      </div>
                      <div style={{ fontSize: '14px', color: 'rgba(250, 232, 164, 0.6)' }}>
                        {c.desc}
                      </div>
                    </div>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      whiteSpace: 'nowrap',
                      background: c.status.includes('contacter') 
                        ? 'rgba(234, 88, 12, 0.2)' 
                        : 'rgba(22, 163, 74, 0.2)',
                      color: c.status.includes('contacter') 
                        ? '#fb923c' 
                        : '#4ade80'
                    }}>
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard hover={false} style={{ 
              background: 'linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(22, 163, 74, 0.02) 100%)',
              border: '1px solid rgba(22, 163, 74, 0.2)'
            }}>
              <h2 style={{ 
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '18px',
                color: '#eec21d',
                marginBottom: '16px'
              }}>
                Idées émergentes
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {dossierSyntheseData.idees.map((idee, i) => (
                  <div key={i} style={{
                    background: 'rgba(22, 163, 74, 0.1)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#fae8a4'
                  }}>
                    • {idee}
                  </div>
                ))}
              </div>
            </GlassCard>
          </>
        )}

        {/* Citation */}
        <div style={{ 
          marginTop: '32px', 
          textAlign: 'center',
          padding: '24px',
          background: 'rgba(238, 194, 29, 0.05)',
          borderRadius: '16px'
        }}>
          <p style={{ 
            fontStyle: 'italic', 
            color: 'rgba(250, 232, 164, 0.8)',
            fontSize: '16px',
            lineHeight: 1.6,
            marginBottom: '8px'
          }}>
            « L'utopie ne signifie pas l'irréalisable, mais l'irréalisé.<br/>
            L'utopie d'hier peut devenir la réalité de demain »
          </p>
          <p style={{ color: '#eec21d', fontSize: '15px' }}>
            — Monod
          </p>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU DU CONTENU
  // ═══════════════════════════════════════════════════════════════════════════

  const renderSectionContent = (content) => {
    if (!content) return null;

    if (Array.isArray(content)) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {content.map((item, i) => renderContentItem(item, i))}
        </div>
      );
    }

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
            fontFamily: "'Flamengo', Georgia, serif",
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
            fontFamily: "'Flamengo', Georgia, serif",
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
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: '18px',
            color: '#eec21d',
            flexShrink: 0
          }}>
            {item.numero}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
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
            fontFamily: "'Flamengo', Georgia, serif",
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

    // Exemples européens avec stat spéciale
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
                  fontFamily: "'Flamengo', Georgia, serif",
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

    // Government Sachs
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
                  fontFamily: "'Flamengo', Georgia, serif",
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
                fontFamily: "'Flamengo', Georgia, serif",
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
            fontFamily: "'Flamengo', Georgia, serif",
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

    // Avantages + Questions
    if (item.avantages && item.questions) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
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
              fontFamily: "'Flamengo', Georgia, serif",
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

    // Double versant / Marché
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
                  fontFamily: "'Flamengo', Georgia, serif",
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

    // Exemples avec détails (générique)
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
              fontFamily: "'Flamengo', Georgia, serif",
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
                fontFamily: "'Flamengo', Georgia, serif",
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
                fontFamily: "'Flamengo', Georgia, serif",
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
                fontFamily: "'Flamengo', Georgia, serif",
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

    // Modèle coopératif
    if (item.nom && item.modele) {
      return (
        <div key={key} style={{
          background: 'rgba(238, 194, 29, 0.05)',
          border: '1px solid rgba(238, 194, 29, 0.15)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ 
            fontFamily: "'Flamengo', Georgia, serif",
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

    // Fallback pour les arrays
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
            fontFamily: "'Flamengo', Georgia, serif",
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
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: '16px',
              color: '#eec21d',
              marginBottom: '12px'
            }}>
              NOS PRIORITÉS
            </h3>
            {[
              "LUTTER — Fin de l'oligarchie, commissions d'enquête, levée du secret défense",
              "VOTER — Souveraineté populaire, référendums d'initiative citoyenne",
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
      {showDossierSynthese 
        ? renderDossierSynthese() 
        : currentSession 
          ? renderSession() 
          : currentTheme 
            ? renderThemeHub() 
            : renderAccueil()
      }
      {renderProjetModal()}
    </div>
  );
};

export default App;
