import React, { useState, useEffect } from 'react';
import { 
  Tv, Briefcase, Calendar, Clock, Landmark, Coins, Scale, Handshake, FileText, Bot, 
  Search, Lightbulb, HelpCircle, Check, Lock, Map, FolderOpen, ClipboardList,
  ArrowRight, ArrowLeft, Paperclip, CheckCircle, X, Sun, Moon, History, Quote, Users, Globe, Award
} from 'lucide-react';
import { mediasOligarchiques, pantouflage, sessionsConfig, prochaineSession } from './sessions-data.js';

const DISCORD_FORUM_URL = "https://discord.com/channels/1426932365896454337/1462537887592743096";

const sessionsSyntheses = {
  session1: {
    titre: "Synthèse — Session #001", theme: 'medias',
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
    titre: "Synthèse — Session #002", theme: 'medias',
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
    titre: "Synthèse — Session #003", theme: 'medias',
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
    citation: { texte: "L'utopie ne signifie pas l'irréalisable, mais l'irréalisé. L'utopie d'hier peut devenir la réalité de demain", auteur: "Monod" }
  },
  session4: {
    titre: "Synthèse — Session #004", theme: 'pantouflage',
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

// DATES CORRIGÉES - Janvier 2026
const sessionsHistorique = {
  medias: [
    { id: 'session1', numero: '001', titre: "Définition de l'oligarchie", date: '18/01/2026', disponible: true },
    { id: 'session2', numero: '002', titre: 'Financement et modèle SCOP', date: '22/01/2026', disponible: true },
    { id: 'session3', numero: '003', titre: 'Neutralité, IA et sociocratie', date: '25/01/2026', disponible: true },
  ],
  pantouflage: [
    { id: 'session4', numero: '004', titre: 'Introduction au pantouflage', date: '29/01/2026', disponible: true },
  ]
};

const dossierSyntheseData = {
  themes: [
    { id: 'oligarchie', title: 'Oligarchie médiatique', icon: Landmark, color: '#ffebc0', summary: '28 familles/entités contrôlent tous les médias français',
      details: ['Concentration des pouvoirs : économique, politique, administratif, médiatique', 'Propriétaires : Bouygues, Bolloré, Arnault, Niel, Drahi, Lagardère, Saadé, Kretinsky..', "L'influence est devenue la première raison d'acheter un média, pas la rentabilité", 'Glissement de "vecteur d\'information" à "vecteur d\'opinion"'],
      questions: ['Comment définir précisément "média oligarchique" ?', "Quel processus juridique pour l'expropriation ?", 'Rétrocession gratuite : quid de la légalité ?'] },
    { id: 'financement', title: 'Financement', icon: Coins, color: '#ebc471', summary: "+1 Md€/an de subventions publiques",
      details: ['Médias structurellement déficitaires malgré les milliards de bénéfices des groupes', 'Arnault : 17,8M€ de subventions (2023) vs 14 Mds€ de bénéfices LVMH', 'Déficit possiblement orchestré : outil de contrôle sur les journalistes', "Marché à double versant : vente au public + vente d'audience aux annonceurs"],
      questions: ['Interdire les subventions aux groupes bénéficiaires ?', 'Auditer qui prend combien via quelles structures ?', 'Le déficit est-il volontaire pour maintenir la pression ?'] },
    { id: 'deontologie', title: 'Déontologie', icon: Scale, color: '#d9a22c', summary: 'Codes abandonnés depuis 40 ans, pensée unique',
      details: ["Plus personne ne légifère sur les conflits d'intérêts", 'Écoles de journalisme : formatage de la pensée', "Charte de Munich (1971) : n'engage que ceux qui la lisent", 'ARCOM : si elle a cette mission, ça ne fonctionne pas'],
      questions: ['Faut-il un nouvel organe de contrôle contraignant?', "Interdire aux oligarques d'être actionnaires des écoles?", "La charte de Munich comme condition d'accès aux subventions?"] },
    { id: 'scop', title: 'SCOP & Sociocratie', icon: Handshake, color: '#b08b3d', summary: 'Modèle coopératif : salariés propriétaires, 1 personne = 1 voix',
      details: ['SCOP : 51% capital + 65% droits de vote aux salariés, dirigeants élus', 'Sociocratie : cercles de 6-8 personnes autonomes, référents inter-cercles', 'Parmigiano-Reggiano : 50 ans de coopératives qui fonctionnent'],
      questions: ['Transformer les médias existants OU créer de nouveaux médias coopératifs?', 'Cadeau empoisonné si le média est déjà déficitaire?', 'Les salariés seraient-ils mieux à même de gérer?'] },
    { id: 'neutralite', title: 'Neutralité & Sémantique', icon: FileText, color: '#a0751a', summary: "Informer ≠ Convaincre — La neutralité n'existe pas",
      details: ['Distinction fondamentale : information vs opinion', 'Ligne éditoriale : chacun en a une, la neutralité est une illusion', '"Edit" = couper — une ligne éditoriale coupe', "Le choix même d'un sujet est déjà un parti pris"],
      questions: ["Réappropriation des mots : qu'est-ce que l'information à l'ère digitale?", 'Inclure la distinction informer/convaincre dans les statuts SCOP?', 'Est-ce le système ou une croyance populaire qui fait croire à la neutralité?'] },
    { id: 'ia', title: 'IA & Guerre cognitive', icon: Bot, color: '#835c07', summary: 'Brouillage réel/fictif, information instrumentalisée',
      details: ['Nouveau réflexe : on doute de chaque info/photo (vraie ou générée?)', 'Exemple : photo Macron Ray-Ban crue fake mais vraie', 'Risque : Guerre cognitive'],
      questions: ["Comment intégrer l'IA dans la réflexion sur l'avenir des médias?", 'Un label "conçu sans IA" serait-il intéressant?', 'Comment protéger les petits médias?'] }
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

const App = () => {
  // ═══════════════════════════════════════════════════════════════════════════
  // ÉTATS
  // ═══════════════════════════════════════════════════════════════════════════
  const [currentTheme, setCurrentTheme] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [showProjet, setShowProjet] = useState(false);
  const [showDossierSynthese, setShowDossierSynthese] = useState(false);
  const [activeSyntheseTheme, setActiveSyntheseTheme] = useState(null);
  const [syntheseView, setSyntheseView] = useState('carte');
  const [showHistorique, setShowHistorique] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('r75-darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('r75-fontSize') || 'normal');
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  // ═══════════════════════════════════════════════════════════════════════════
  // EFFETS
  // ═══════════════════════════════════════════════════════════════════════════
  useEffect(() => {
    localStorage.setItem('r75-darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('r75-fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const calculateCountdown = () => {
      const dateStr = prochaineSession.date;
      const match = dateStr.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
      if (match) {
        const moisFr = {
          'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
          'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
        };
        const jour = parseInt(match[1]);
        const mois = moisFr[match[2].toLowerCase()];
        const annee = parseInt(match[3]);
        const heure = dateStr.toLowerCase().includes('jeudi') ? 18 : 17;
        const targetDate = new Date(annee, mois, jour, heure, 0, 0);
        const diff = targetDate - new Date();
        if (diff > 0) {
          setCountdown({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
          });
        } else {
          setCountdown({ days: 0, hours: 0, minutes: 0 });
        }
      }
    };
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // COULEURS ET TAILLES
  // ═══════════════════════════════════════════════════════════════════════════
  const colors = darkMode ? {
    background: '#111111',
    primary: '#EEC21D',
    text: '#fae8a4',
    textMuted: 'rgba(250, 232, 164, 0.7)',
    textVeryMuted: 'rgba(250, 232, 164, 0.5)',
    cardBg: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
    cardBorder: 'rgba(238, 194, 29, 0.15)',
    cardBorderHover: 'rgba(238, 194, 29, 0.4)',
    inputBg: 'rgba(238, 194, 29, 0.06)',
    buttonBg: 'rgba(238, 194, 29, 0.1)',
    buttonBgHover: 'rgba(238, 194, 29, 0.2)',
    gradientOverlay: 'radial-gradient(ellipse at 20% 20%, rgba(238, 194, 29, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(238, 194, 29, 0.05) 0%, transparent 50%)',
  } : {
    background: '#EEC21D',
    primary: '#111111',
    text: '#111111',
    textMuted: 'rgba(17, 17, 17, 0.7)',
    textVeryMuted: 'rgba(17, 17, 17, 0.5)',
    cardBg: 'linear-gradient(135deg, rgba(17,17,17,0.08) 0%, rgba(17,17,17,0.02) 100%)',
    cardBorder: 'rgba(17, 17, 17, 0.15)',
    cardBorderHover: 'rgba(17, 17, 17, 0.4)',
    inputBg: 'rgba(17, 17, 17, 0.06)',
    buttonBg: 'rgba(17, 17, 17, 0.1)',
    buttonBgHover: 'rgba(17, 17, 17, 0.2)',
    gradientOverlay: 'radial-gradient(ellipse at 20% 20%, rgba(17, 17, 17, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(17, 17, 17, 0.05) 0%, transparent 50%)',
  };

  const ICON_COLOR = colors.primary;

  const fontSizes = {
    small: { base: 14, title: 18, large: 20 },
    normal: { base: 16, title: 22, large: 24 },
    large: { base: 20, title: 28, large: 32 }
  };
  const fs = fontSizes[fontSize];

  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════════
  const goToTheme = (theme) => {
    setCurrentTheme(theme);
    setCurrentSession(null);
    setCurrentSection(null);
    setShowHistorique(false);
  };

  const goToSession = (sessionId) => {
    setCurrentSession(sessionId);
    const data = currentTheme === 'medias' ? mediasOligarchiques : pantouflage;
    const sessionData = data[sessionId];
    if (sessionData) {
      setCurrentSection(Object.keys(sessionData.sections)[0]);
    }
    setShowHistorique(false);
  };

  const goHome = () => {
    setCurrentTheme(null);
    setCurrentSession(null);
    setCurrentSection(null);
    setShowDossierSynthese(false);
    setShowHistorique(false);
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RECHERCHE
  // ═══════════════════════════════════════════════════════════════════════════
  const performSearch = (query) => {
    if (!query || query.length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }
    const results = [];
    Object.entries(sessionsSyntheses).forEach(([sessionId, session]) => {
      const sessionLabel = 'Session #00' + sessionId.replace('session', '');
      session.grandesIdees?.forEach((idee) => {
        if (idee.toLowerCase().includes(query.toLowerCase())) {
          results.push({ sessionId, sessionLabel, theme: session.theme, type: 'Grande idée', typeIcon: 'lightbulb', content: idee });
        }
      });
      session.questionsOuvertes?.forEach((q) => {
        if (q.toLowerCase().includes(query.toLowerCase())) {
          results.push({ sessionId, sessionLabel, theme: session.theme, type: 'Question ouverte', typeIcon: 'help', content: q });
        }
      });
      session.pistesAction?.forEach((p) => {
        if (p.toLowerCase().includes(query.toLowerCase())) {
          results.push({ sessionId, sessionLabel, theme: session.theme, type: "Piste d'action", typeIcon: 'check', content: p });
        }
      });
    });
    setSearchResults(results.slice(0, 10));
    setShowSearchResults(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    performSearch(e.target.value);
  };

  const goToSearchResult = (result) => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
    setCurrentTheme(result.theme);
    setCurrentSession(result.sessionId);
    setCurrentSection('synthese');
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span style={{ background: darkMode ? 'rgba(238, 194, 29, 0.4)' : 'rgba(17, 17, 17, 0.2)', borderRadius: '2px', padding: '0 2px' }}>
          {text.slice(idx, idx + query.length)}
        </span>
        {text.slice(idx + query.length)}
      </>
    );
  };

  const renderSearchResultIcon = (typeIcon) => {
    const p = { size: 12, color: ICON_COLOR, strokeWidth: 2 };
    if (typeIcon === 'lightbulb') return <Lightbulb {...p} />;
    if (typeIcon === 'help') return <HelpCircle {...p} />;
    return <Check {...p} />;
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPOSANTS UTILITAIRES
  // ═══════════════════════════════════════════════════════════════════════════
  const SkeletonLoader = () => (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: colors.background,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>
        <HexLogo size={120} color={colors.primary} />
      </div>
      <p style={{
        marginTop: '24px',
        fontFamily: "'Flamengo', Georgia, serif",
        fontSize: fs.base + 'px',
        color: colors.textMuted,
        letterSpacing: '0.1em'
      }}>Chargement...</p>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.8; }
        }
      `}</style>
    </div>
  );

  const HexLogo = ({ size = 80, color = "#eec21d" }) => (
    <svg width={size} height={size * 1.15} viewBox="0 0 100 115" style={{ filter: `drop-shadow(0 0 20px ${darkMode ? 'rgba(238, 194, 29, 0.3)' : 'rgba(17, 17, 17, 0.2)'})` }}>
      <defs>
        <linearGradient id="hexGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={darkMode ? "#f4d03f" : "#222222"} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkMode ? "#d4a516" : "#000000"} />
        </linearGradient>
      </defs>
      <polygon points="50,2 95,28 95,87 50,113 5,87 5,28" fill="none" stroke="url(#hexGold)" strokeWidth="4" />
    </svg>
  );

  const GlassCard = ({ children, onClick, style: customStyle = {}, hover = true }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: colors.cardBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${isHovered && hover && onClick ? colors.cardBorderHover : colors.cardBorder}`,
          borderRadius: '24px',
          padding: '24px',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          transform: isHovered && hover && onClick ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered && hover && onClick ? `0 20px 40px ${darkMode ? 'rgba(238, 194, 29, 0.15)' : 'rgba(17, 17, 17, 0.15)'}` : 'none',
          ...customStyle
        }}
      >
        {children}
      </div>
    );
  };

  const AccessibilityControls = () => (
    <div style={{ position: 'fixed', top: '16px', right: '16px', display: 'flex', gap: '8px', zIndex: 100 }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          width: '40px', height: '40px', borderRadius: '50%',
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          color: colors.primary,
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        title={darkMode ? 'Mode clair' : 'Mode sombre'}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <div style={{
        display: 'flex',
        background: colors.buttonBg,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: '20px',
        overflow: 'hidden'
      }}>
        {['small', 'normal', 'large'].map((size, i) => (
          <button
            key={size}
            onClick={() => setFontSize(size)}
            style={{
              padding: '8px 12px',
              background: fontSize === size
                ? (darkMode ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' : 'linear-gradient(135deg, #111111 0%, #333333 100%)')
                : 'transparent',
              border: 'none',
              color: fontSize === size ? (darkMode ? '#111' : '#EEC21D') : colors.primary,
              cursor: 'pointer',
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: i === 0 ? '12px' : i === 1 ? '14px' : '16px',
              fontWeight: fontSize === size ? '600' : '400',
              transition: 'all 0.3s ease'
            }}
          >
            A
          </button>
        ))}
      </div>
    </div>
  );

  const SearchBar = () => (
    <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
      <div style={{
        display: 'flex', alignItems: 'center',
        background: colors.inputBg,
        border: `1px solid ${colors.cardBorder}`,
        borderRadius: '14px',
        padding: '10px 14px'
      }}>
        <Search size={16} color={ICON_COLOR} strokeWidth={2} style={{ opacity: 0.6, flexShrink: 0 }} />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => searchQuery.length >= 2 && setShowSearchResults(true)}
          placeholder="Rechercher..."
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            marginLeft: '10px', color: colors.text,
            fontSize: (fs.base - 2) + 'px',
            fontFamily: "'Flamengo', Georgia, serif"
          }}
        />
        {searchQuery && (
          <button
            onClick={() => { setSearchQuery(''); setSearchResults([]); setShowSearchResults(false); }}
            style={{ background: 'none', border: 'none', color: colors.textVeryMuted, cursor: 'pointer', padding: '2px 6px', display: 'flex', alignItems: 'center' }}
          >
            <X size={14} color={colors.textVeryMuted} />
          </button>
        )}
      </div>
      
      {showSearchResults && searchResults.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px',
          background: darkMode ? 'rgba(17, 17, 17, 0.98)' : 'rgba(238, 194, 29, 0.98)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '14px', overflow: 'hidden', zIndex: 100,
          boxShadow: `0 10px 40px ${darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(17, 17, 17, 0.2)'}`
        }}>
          <div style={{
            padding: '10px 14px', borderBottom: `1px solid ${colors.cardBorder}`,
            fontSize: '11px', color: colors.textVeryMuted,
            fontFamily: "'Flamengo', Georgia, serif",
            textTransform: 'uppercase', letterSpacing: '0.05em'
          }}>
            {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''}
          </div>
          <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
            {searchResults.map((result, idx) => (
              <div
                key={idx}
                onClick={() => goToSearchResult(result)}
                style={{
                  padding: '12px 14px', cursor: 'pointer',
                  borderBottom: idx < searchResults.length - 1 ? `1px solid ${colors.cardBorder}` : 'none',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = colors.buttonBgHover}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>{renderSearchResultIcon(result.typeIcon)}</span>
                  <span style={{ fontSize: '10px', color: colors.primary, fontFamily: "'Flamengo', Georgia, serif", textTransform: 'uppercase', letterSpacing: '0.03em' }}>{result.sessionLabel}</span>
                  <span style={{ fontSize: '9px', color: colors.textVeryMuted, padding: '2px 6px', background: colors.buttonBg, borderRadius: '8px' }}>{result.type}</span>
                </div>
                <div style={{ fontSize: '13px', color: colors.text, lineHeight: 1.4 }}>{highlightMatch(result.content, searchQuery)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {showSearchResults && searchQuery.length >= 2 && searchResults.length === 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px',
          background: darkMode ? 'rgba(17, 17, 17, 0.98)' : 'rgba(238, 194, 29, 0.98)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '14px', padding: '16px', textAlign: 'center', zIndex: 100
        }}>
          <div style={{ marginBottom: '6px' }}><Search size={20} color={ICON_COLOR} style={{ opacity: 0.5 }} /></div>
          <div style={{ color: colors.textVeryMuted, fontSize: '13px' }}>Aucun résultat pour "{searchQuery}"</div>
        </div>
      )}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU - ACCUEIL
  // ═══════════════════════════════════════════════════════════════════════════
  const renderAccueil = () => {
    const mediasCount = sessionsConfig.medias.filter(s => s.available).length;
    const pantouflageCount = sessionsConfig.pantouflage.filter(s => s.available).length;

    return (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: colors.gradientOverlay, pointerEvents: 'none', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px' }}><HexLogo size={100} color={colors.primary} /></div>
            <h1 style={{
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: `clamp(22px, 6vw, ${fs.large + 18}px)`,
              color: colors.primary,
              marginBottom: '8px',
              letterSpacing: '0.05em',
              textShadow: darkMode ? '0 2px 20px rgba(238, 194, 29, 0.3)' : '0 2px 20px rgba(17, 17, 17, 0.2)'
            }}>RÉFLEXIONS AUTOUR DU PROJET</h1>
            <p style={{
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: `clamp(20px, 4vw, ${fs.title}px)`,
              color: colors.primary,
              letterSpacing: '0.15em',
              marginBottom: '20px'
            }}>R75</p>
            <SearchBar />
          </header>

          {/* Prochaine session */}
          <GlassCard hover={false} style={{
            marginBottom: '40px',
            background: darkMode
              ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.12) 0%, rgba(238, 194, 29, 0.03) 100%)'
              : 'linear-gradient(135deg, rgba(17, 17, 17, 0.12) 0%, rgba(17, 17, 17, 0.03) 100%)',
            border: `1px solid ${darkMode ? 'rgba(238, 194, 29, 0.25)' : 'rgba(17, 17, 17, 0.25)'}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Calendar size={32} color={ICON_COLOR} strokeWidth={1.5} />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: '11px',
                  color: colors.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '4px'
                }}>Prochaine session</div>
                <div style={{
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: fs.base + 'px',
                  color: colors.primary,
                  marginBottom: '4px'
                }}>{prochaineSession.titre}</div>
                <div style={{ fontSize: fs.base + 'px', color: colors.textMuted }}>{prochaineSession.date}</div>
                {(countdown.days > 0 || countdown.hours > 0 || countdown.minutes > 0) && (
                  <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} color={ICON_COLOR} />
                    <span style={{
                      fontFamily: "'Flamengo', Georgia, serif",
                      fontSize: (fs.base - 2) + 'px',
                      color: colors.primary,
                      fontWeight: '600'
                    }}>
                      Dans {countdown.days > 0 && `${countdown.days}j `}{countdown.hours}h {countdown.minutes}min
                    </span>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>

          {/* Thèmes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <GlassCard onClick={() => goToTheme('pantouflage')}>
              <div style={{ marginBottom: '16px' }}><Briefcase size={48} color={ICON_COLOR} strokeWidth={1.5} /></div>
              <h2 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.title - 4) + 'px', color: colors.primary, marginBottom: '12px' }}>Le pantouflage</h2>
              <p style={{ color: colors.textMuted, fontSize: fs.base + 'px', marginBottom: '16px', lineHeight: 1.6 }}>Les allers-retours entre fonction publique et secteur privé</p>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: colors.buttonBg, borderRadius: '20px', fontSize: (fs.base - 1) + 'px', color: colors.primary }}>{pantouflageCount} session{pantouflageCount > 1 ? 's' : ''}</div>
              <div style={{ position: 'absolute', right: '24px', bottom: '24px', color: colors.textVeryMuted }}><ArrowRight size={24} /></div>
            </GlassCard>

            <GlassCard onClick={() => goToTheme('medias')}>
              <div style={{ marginBottom: '16px' }}><Tv size={48} color={ICON_COLOR} strokeWidth={1.5} /></div>
              <h2 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.title - 4) + 'px', color: colors.primary, marginBottom: '12px' }}>Les médias oligarchiques</h2>
              <p style={{ color: colors.textMuted, fontSize: fs.base + 'px', marginBottom: '16px', lineHeight: 1.6 }}>Expropriation des médias oligarchiques et transformation en SCOP</p>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: colors.buttonBg, borderRadius: '20px', fontSize: (fs.base - 1) + 'px', color: colors.primary }}>{mediasCount} session{mediasCount > 1 ? 's' : ''}</div>
              <div style={{ position: 'absolute', right: '24px', bottom: '24px', color: colors.textVeryMuted }}><ArrowRight size={24} /></div>
            </GlassCard>
          </div>

          {/* Bouton Projet */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowProjet(true)}
              style={{
                background: darkMode ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' : 'linear-gradient(135deg, #111111 0%, #333333 100%)',
                border: 'none',
                borderRadius: '30px',
                padding: '16px 32px',
                color: darkMode ? '#111' : '#EEC21D',
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: fs.base + 'px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: darkMode ? '0 4px 20px rgba(238, 194, 29, 0.3)' : '0 4px 20px rgba(17, 17, 17, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Consulter Le Projet
            </button>
          </div>

          {/* Footer */}
          <footer style={{
            marginTop: '64px',
            paddingTop: '24px',
            borderTop: `1px solid ${colors.cardBorder}`,
            textAlign: 'center',
            fontSize: (fs.base - 1) + 'px',
            color: colors.textVeryMuted
          }}>
            <p>Butiner notre futur ensemble, abeille par abeille, réflexion après réflexion...</p>
            <p style={{ marginTop: '8px' }}>
              Sessions : <strong style={{ color: colors.primary }}>Jeudis 18h</strong> et <strong style={{ color: colors.primary }}>Dimanches 17h</strong>
            </p>
            <p>sauf si réunion</p>
          </footer>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU - THEME HUB
  // ═══════════════════════════════════════════════════════════════════════════
  const renderThemeHub = () => {
    const isMedias = currentTheme === 'medias';
    const sessions = isMedias ? sessionsConfig.medias : sessionsConfig.pantouflage;
    const historique = isMedias ? sessionsHistorique.medias : sessionsHistorique.pantouflage;
    const themeTitle = isMedias ? "Les médias oligarchiques" : "Le pantouflage";
    const ThemeIcon = isMedias ? Tv : Briefcase;

    return (
      <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <button
            onClick={goHome}
            style={{
              background: colors.buttonBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: '12px',
              padding: '10px 20px',
              color: colors.primary,
              fontFamily: "'Flamengo', Georgia, serif",
              cursor: 'pointer',
              fontSize: (fs.base - 2) + 'px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = colors.buttonBgHover}
            onMouseLeave={(e) => e.currentTarget.style.background = colors.buttonBg}
          >
            <ArrowLeft size={16} /> Retour à l'accueil
          </button>
          <button
            onClick={() => setShowHistorique(!showHistorique)}
            style={{
              background: showHistorique ? colors.buttonBgHover : 'transparent',
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: '12px',
              padding: '10px 16px',
              color: colors.textMuted,
              fontFamily: "'Flamengo', Georgia, serif",
              cursor: 'pointer',
              fontSize: (fs.base - 2) + 'px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <History size={14} /> Historique
          </button>
        </div>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ marginBottom: '16px' }}><ThemeIcon size={64} color={ICON_COLOR} strokeWidth={1.5} /></div>
          <h1 style={{
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: `clamp(24px, 5vw, ${fs.large + 12}px)`,
            color: colors.primary,
            marginBottom: '8px'
          }}>{themeTitle}</h1>
          <p style={{
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: (fs.base - 2) + 'px',
            color: colors.text,
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>NOS PRIORITÉS › LUTTER › La fin de l'oligarchie</p>
        </header>

        {/* Historique */}
        {showHistorique && (
          <GlassCard hover={false} style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: (fs.title - 4) + 'px',
              color: colors.primary,
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <History size={20} color={ICON_COLOR} /> Historique des sessions
            </h3>
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              <div style={{
                position: 'absolute',
                left: '8px',
                top: '8px',
                bottom: '8px',
                width: '2px',
                background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.textVeryMuted} 100%)`
              }} />
              {historique.map((session, idx) => (
                <div
                  key={session.id}
                  onClick={() => session.disponible && goToSession(session.id)}
                  style={{
                    position: 'relative',
                    marginBottom: idx < historique.length - 1 ? '20px' : '0',
                    paddingLeft: '20px',
                    cursor: session.disponible ? 'pointer' : 'default',
                    opacity: session.disponible ? 1 : 0.5
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: '-16px',
                    top: '6px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: colors.primary,
                    border: `3px solid ${colors.background}`
                  }} />
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textVeryMuted, marginBottom: '4px' }}>{session.date}</div>
                  <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '2px' }}>Session #{session.numero}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text }}>{session.titre}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {/* Sessions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {sessions.map((session, idx) => (
            <GlassCard
              key={session.id}
              onClick={session.available ? () => goToSession(session.id) : undefined}
              style={{ opacity: session.available ? 1 : 0.5, cursor: session.available ? 'pointer' : 'not-allowed' }}
              hover={session.available}
            >
              <div style={{ fontSize: fs.title + 'px', fontFamily: "'Flamengo', Georgia, serif", color: colors.primary, marginBottom: '12px' }}>
                0{idx + (isMedias ? 1 : 4)}
              </div>
              <h3 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{session.titre}</h3>
              <p style={{ fontSize: fs.base + 'px', color: colors.text }}>{session.date}</p>
              {!session.available && (
                <div style={{ marginTop: '12px', fontSize: (fs.base - 2) + 'px', color: colors.text, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Lock size={14} color={colors.text} /> Bientôt disponible
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Dossier de synthèse (médias uniquement) */}
        {currentTheme === 'medias' && (
          <div style={{ marginTop: '32px' }}>
            <GlassCard
              onClick={() => setShowDossierSynthese(true)}
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)'
                  : 'linear-gradient(135deg, rgba(17, 17, 17, 0.15) 0%, rgba(17, 17, 17, 0.05) 100%)',
                border: `1px solid ${darkMode ? 'rgba(238, 194, 29, 0.3)' : 'rgba(17, 17, 17, 0.3)'}`,
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.title - 2) + 'px', color: colors.primary, marginBottom: '8px' }}>Dossier de synthèse</h3>
              <p style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '12px' }}>Cartographie interactive des enjeux, questions ouvertes et pistes d'action</p>
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: colors.buttonBgHover,
                borderRadius: '20px',
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: '11px',
                color: colors.primary
              }}>Sessions #001 → #003</div>
            </GlassCard>
          </div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU - SESSION
  // ═══════════════════════════════════════════════════════════════════════════
  const renderSession = () => {
    const data = currentTheme === 'medias' ? mediasOligarchiques : pantouflage;
    const sessionData = data[currentSession];
    if (!sessionData) return null;

    const sections = Object.keys(sessionData.sections);
    const synthese = sessionsSyntheses[currentSession];
    const allSections = synthese && !sections.includes('synthese') ? [...sections, 'synthese'] : sections;
    const sectionData = currentSection === 'synthese' ? null : sessionData.sections[currentSection];

    return (
      <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Bouton retour */}
        <button
          onClick={() => { setCurrentSession(null); setCurrentSection(null); }}
          style={{
            background: colors.buttonBg,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: '12px',
            padding: '10px 20px',
            color: colors.primary,
            cursor: 'pointer',
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: (fs.base - 2) + 'px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeft size={16} /> Retour aux sessions
        </button>

        {/* Header session */}
        <header style={{
          background: darkMode
            ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)'
            : 'linear-gradient(135deg, rgba(17, 17, 17, 0.1) 0%, transparent 100%)',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: colors.buttonBgHover,
            borderRadius: '20px',
            fontSize: fs.base + 'px',
            color: colors.primary,
            marginBottom: '12px'
          }}>SESSION {currentSession.replace('session', '')}</div>
          <h1 style={{
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: `clamp(24px, 5vw, ${fs.large + 8}px)`,
            color: colors.primary,
            marginBottom: '16px'
          }}>{sessionData.title}</h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: fs.base + 'px', color: colors.text }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={16} color={ICON_COLOR} /> {sessionData.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} color={ICON_COLOR} /> {sessionData.duration}</span>
          </div>
        </header>

        {/* Tabs des sections */}
        <nav style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '24px',
          padding: '8px',
          background: colors.buttonBg,
          borderRadius: '16px'
        }}>
          {allSections.map(key => {
            const isSynthese = key === 'synthese';
            const label = isSynthese ? 'Synthèse' : sessionData.sections[key].title;
            const isActive = currentSection === key;
            
            return (
              <button
                key={key}
                onClick={() => setCurrentSection(key)}
                style={{
                  background: isActive
                    ? (isSynthese ? 'linear-gradient(135deg, #44701D 0%, #365a17 100%)' : (darkMode ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' : 'linear-gradient(135deg, #111111 0%, #333333 100%)'))
                    : (isSynthese ? 'rgba(68, 112, 29, 0.2)' : 'transparent'),
                  border: isSynthese && !isActive ? '1px solid rgba(68, 112, 29, 0.3)' : 'none',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  color: isActive
                    ? (isSynthese ? '#fff' : (darkMode ? '#111' : '#EEC21D'))
                    : (isSynthese ? '#44701D' : colors.primary),
                  cursor: 'pointer',
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: (fs.base - 2) + 'px',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Contenu de la section */}
        {currentSection === 'synthese' && synthese ? (
          <GlassCard hover={false} style={{
            marginBottom: '32px',
            background: 'linear-gradient(135deg, rgba(68, 112, 29, 0.1) 0%, rgba(68, 112, 29, 0.02) 100%)',
            border: '1px solid rgba(68, 112, 29, 0.2)'
          }}>
            <h2 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.title + 'px', color: '#44701D', marginBottom: '24px' }}>{synthese.titre}</h2>
            
            {/* Grandes idées */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: fs.base + 'px',
                color: colors.primary,
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Lightbulb size={18} color={ICON_COLOR} /> Grandes idées
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {synthese.grandesIdees.map((idee, i) => (
                  <div key={i} style={{
                    background: colors.buttonBg,
                    borderLeft: `3px solid ${colors.primary}`,
                    borderRadius: '0 10px 10px 0',
                    padding: '12px 16px',
                    color: colors.text,
                    fontSize: (fs.base - 2) + 'px',
                    lineHeight: 1.6
                  }}>{idee}</div>
                ))}
              </div>
            </div>

            {/* Questions ouvertes */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: fs.base + 'px',
                color: darkMode ? '#e9d176' : '#6b5a20',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <HelpCircle size={18} color={darkMode ? '#e9d176' : '#6b5a20'} /> Questions ouvertes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {synthese.questionsOuvertes.map((q, i) => (
                  <div key={i} style={{
                    background: 'rgba(234, 88, 12, 0.1)',
                    border: '1px solid rgba(234, 88, 12, 0.2)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: colors.text,
                    fontSize: (fs.base - 2) + 'px'
                  }}>{q}</div>
                ))}
              </div>
            </div>

            {/* Pistes d'action */}
            <div style={{ marginBottom: synthese.citation ? '24px' : '0' }}>
              <h3 style={{
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: fs.base + 'px',
                color: darkMode ? '#f8e8ab' : '#5a4a00',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Check size={18} color={darkMode ? '#f8e8ab' : '#5a4a00'} /> Pistes d'action
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {synthese.pistesAction.map((piste, i) => (
                  <div key={i} style={{
                    background: 'rgba(22, 163, 74, 0.1)',
                    border: '1px solid rgba(22, 163, 74, 0.2)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: colors.text,
                    fontSize: (fs.base - 2) + 'px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px'
                  }}>
                    <Check size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {piste}
                  </div>
                ))}
              </div>
            </div>

            {/* Citation */}
            {synthese.citation && (
              <div style={{
                marginTop: '24px',
                padding: '20px',
                background: colors.buttonBg,
                borderLeft: `4px solid ${colors.primary}`,
                borderRadius: '0 12px 12px 0'
              }}>
                <p style={{ fontStyle: 'italic', color: colors.primary, fontSize: (fs.base - 2) + 'px', lineHeight: 1.6, marginBottom: '8px' }}>
                  « {synthese.citation.texte} »
                </p>
                <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px' }}>— {synthese.citation.auteur}</p>
              </div>
            )}
          </GlassCard>
        ) : sectionData ? (
          <GlassCard hover={false} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.title + 'px', color: colors.primary, marginBottom: '24px' }}>{sectionData.title}</h2>
            {renderSectionContent(sectionData.content)}
          </GlassCard>
        ) : null}

        {/* Discord CTA */}
        <GlassCard hover={false} style={{
          background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.15) 0%, rgba(88, 101, 242, 0.05) 100%)',
          border: '1px solid rgba(88, 101, 242, 0.3)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontFamily: "'Flamengo'", fontSize: (fs.title - 4) + 'px', color: '#7289da', marginBottom: '8px' }}>Une idée, une question?</h3>
          <p style={{ fontFamily: "'Flamengo'", fontSize: (fs.base - 2) + 'px', color: '#7289da', marginBottom: '20px', lineHeight: 1.6 }}>
            Retrouvons-nous sur le thread Discord pour centraliser nos ressources et nos idées!
          </p>
          <a
            href={DISCORD_FORUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: fs.base + 'px',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(88, 101, 242, 0.3)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Accéder à Discord
          </a>
        </GlassCard>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU - DOSSIER SYNTHÈSE
  // ═══════════════════════════════════════════════════════════════════════════
  const renderDossierSynthese = () => (
    <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Bouton retour */}
      <button
        onClick={() => { setShowDossierSynthese(false); setSyntheseView('carte'); setActiveSyntheseTheme(null); }}
        style={{
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '12px',
          padding: '10px 20px',
          fontFamily: "'Flamengo', Georgia, serif",
          color: colors.primary,
          cursor: 'pointer',
          fontSize: (fs.base - 2) + 'px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <ArrowLeft size={16} /> Retour aux sessions
      </button>

      {/* Header */}
      <header style={{
        background: darkMode
          ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)'
          : 'linear-gradient(135deg, rgba(17, 17, 17, 0.1) 0%, transparent 100%)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '4px 12px',
          background: colors.buttonBgHover,
          borderRadius: '20px',
          fontFamily: "'Flamengo', Georgia, serif",
          fontSize: (fs.base - 2) + 'px',
          color: colors.primary,
          marginBottom: '12px'
        }}>DOSSIER DE SYNTHÈSE GLOBAL</div>
        <h1 style={{
          fontFamily: "'Flamengo', Georgia, serif",
          fontSize: `clamp(22px, 5vw, ${fs.large + 8}px)`,
          color: colors.primary,
          marginBottom: '8px'
        }}>Expropriation des médias oligarchiques</h1>
        <p style={{ fontSize: fs.base + 'px', color: colors.text }}>Synthèse des sessions #001, #002, #003 — Ruche 75</p>
      </header>

      {/* Navigation tabs */}
      <nav style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '24px',
        padding: '8px',
        background: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(17, 17, 17, 0.1)',
        borderRadius: '16px',
        justifyContent: 'center'
      }}>
        {[
          { key: 'carte', label: 'Carte', icon: Map },
          { key: 'themes', label: 'Thèmes', icon: FolderOpen },
          { key: 'actions', label: 'Actions', icon: ClipboardList }
        ].map(({ key, label, icon: IconComp }) => {
          const isActive = syntheseView === key;
          return (
            <button
              key={key}
              onClick={() => { setSyntheseView(key); setActiveSyntheseTheme(null); }}
              style={{
                background: isActive
                  ? (darkMode ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' : 'linear-gradient(135deg, #111111 0%, #333333 100%)')
                  : colors.buttonBg,
                border: 'none',
                borderRadius: '12px',
                padding: '10px 20px',
                color: isActive ? (darkMode ? '#111' : '#EEC21D') : colors.text,
                cursor: 'pointer',
                fontFamily: "'Flamengo', Georgia, serif",
                fontSize: (fs.base - 2) + 'px',
                fontWeight: isActive ? '600' : '400',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <IconComp size={16} color={isActive ? (darkMode ? '#111' : '#EEC21D') : colors.text} />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Vue Carte */}
      {syntheseView === 'carte' && (
        <GlassCard hover={false} style={{ marginBottom: '24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.title - 2) + 'px', color: colors.primary, marginBottom: '16px' }}>
            Cartographie des enjeux
          </h2>
          <p style={{ color: colors.text, fontSize: fs.base + 'px', marginBottom: '24px' }}>
            Cliquez sur "Thèmes" pour explorer chaque sujet en détail
          </p>
          {/* Mini preview des thèmes */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {dossierSyntheseData.themes.map(theme => {
              const IconComp = theme.icon;
              return (
                <div
                  key={theme.id}
                  onClick={() => { setSyntheseView('themes'); setActiveSyntheseTheme(theme.id); }}
                  style={{
                    padding: '12px 16px',
                    background: colors.buttonBg,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconComp size={16} color={darkMode ? theme.color : '#333'} />
                  <span style={{ fontSize: (fs.base - 2) + 'px', color: colors.text }}>{theme.title}</span>
                </div>
              );
            })}
          </div>
        </GlassCard>
      )}

      {/* Vue Thèmes */}
      {syntheseView === 'themes' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {dossierSyntheseData.themes.map(theme => {
            const IconComp = theme.icon;
            const themeColor = darkMode ? theme.color : '#333';
            const isExpanded = activeSyntheseTheme === theme.id;
            
            return (
              <div
                key={theme.id}
                onClick={() => setActiveSyntheseTheme(isExpanded ? null : theme.id)}
                style={{
                  background: colors.cardBg,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${isExpanded ? themeColor : colors.cardBorder}`,
                  borderLeft: `4px solid ${themeColor}`,
                  borderRadius: '16px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{
                  fontFamily: "'Flamengo', Georgia, serif",
                  fontSize: fs.base + 'px',
                  color: colors.primary,
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <IconComp size={20} color={themeColor} />
                  {theme.title}
                </h3>
                <p style={{ fontSize: (fs.base - 2) + 'px', color: colors.text, lineHeight: 1.5 }}>{theme.summary}</p>
                
                {isExpanded && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${colors.cardBorder}` }}>
                    <p style={{
                      fontSize: '12px',
                      fontFamily: "'Flamengo', Georgia, serif",
                      color: colors.primary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px'
                    }}>Constats</p>
                    {theme.details.map((d, i) => (
                      <div key={i} style={{
                        fontSize: (fs.base - 2) + 'px',
                        color: colors.textMuted,
                        marginBottom: '6px',
                        paddingLeft: '12px',
                        borderLeft: `2px solid ${colors.cardBorder}`
                      }}>{d}</div>
                    ))}
                    <p style={{
                      fontSize: '12px',
                      fontFamily: "'Flamengo', Georgia, serif",
                      color: colors.primary,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                      marginTop: '16px'
                    }}>Questions ouvertes</p>
                    {theme.questions.map((q, i) => (
                      <div key={i} style={{
                        background: colors.buttonBg,
                        borderRadius: '8px',
                        padding: '10px 12px',
                        fontSize: (fs.base - 2) + 'px',
                        color: colors.text,
                        marginBottom: '6px'
                      }}>{q}</div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Vue Actions */}
      {syntheseView === 'actions' && (
        <GlassCard hover={false}>
          <h2 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.title - 4) + 'px', color: colors.primary, marginBottom: '20px' }}>
            Modèles à explorer
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            {dossierSyntheseData.contacts.map((c, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: colors.buttonBg,
                borderRadius: '12px',
                padding: '14px'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '600', color: darkMode ? '#fff' : '#111', fontSize: (fs.base - 1) + 'px', marginBottom: '4px' }}>{c.name}</div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.primary }}>{c.desc}</div>
                </div>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                  background: colors.buttonBgHover,
                  color: colors.primary
                }}>{c.status}</span>
              </div>
            ))}
          </div>
          
          <h3 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', marginTop: '24px' }}>
            Idées à creuser
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {dossierSyntheseData.idees.map((idee, i) => (
              <div key={i} style={{
                background: colors.buttonBg,
                borderLeft: `3px solid ${colors.primary}`,
                borderRadius: '0 10px 10px 0',
                padding: '12px 16px',
                color: colors.text,
                fontSize: (fs.base - 2) + 'px'
              }}>{idee}</div>
            ))}
          </div>
        </GlassCard>
      )}
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU - CONTENU DE SECTION (CORRIGÉ AVEC TOUS LES HANDLERS)
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
      return <p key={key} style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: fs.base + 'px' }}>{item}</p>;
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Définition classique (term, meaning, etymology)
    // ═══════════════════════════════════════════════════════════════════════
    if ((item.type === 'definition' && item.term) || (item.term && item.meaning)) {
      return (
        <div key={key} style={{
          background: darkMode
            ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)'
            : 'linear-gradient(135deg, rgba(17, 17, 17, 0.1) 0%, transparent 100%)',
          borderLeft: `4px solid ${colors.primary}`,
          borderRadius: '0 16px 16px 0',
          padding: '20px 24px'
        }}>
          <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.title + 'px', color: colors.primary, marginBottom: '8px' }}>{item.term}</div>
          {item.etymology && <div style={{ color: colors.textMuted, fontSize: fs.base + 'px', fontStyle: 'italic', marginBottom: '8px' }}>{item.etymology}</div>}
          <div style={{ color: darkMode ? '#fff' : '#111', fontSize: fs.base + 'px' }}>{item.meaning}</div>
          {item.principes && (
            <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
              {item.principes.map((p, i) => (
                <li key={i} style={{ color: colors.textMuted, marginBottom: '8px', lineHeight: 1.6, fontSize: fs.base + 'px' }}>{p}</li>
              ))}
            </ul>
          )}
          {item.note && (
            <div style={{
              marginTop: '16px',
              padding: '12px',
              background: colors.buttonBg,
              borderRadius: '10px',
              fontSize: fs.base + 'px',
              color: colors.primary,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}>
              <Paperclip size={16} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              {item.note}
            </div>
          )}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Définition pantouflage (origine, terminologie, remboursement)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.type === 'definition' && item.origine && item.terminologie) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Origine */}
          <div style={{
            background: darkMode
              ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)'
              : 'linear-gradient(135deg, rgba(17, 17, 17, 0.1) 0%, transparent 100%)',
            borderLeft: `4px solid ${colors.primary}`,
            borderRadius: '0 16px 16px 0',
            padding: '20px 24px'
          }}>
            <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <History size={18} color={ICON_COLOR} /> Origine historique
            </div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '6px' }}><strong>Date :</strong> {item.origine.date}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '6px' }}><strong>Contexte :</strong> {item.origine.contexte}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text }}><strong>École :</strong> {item.origine.ecole}</div>
          </div>

          {/* Terminologie */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {item.terminologie.map((t, i) => (
              <div key={i} style={{
                background: colors.buttonBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{t.terme}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5 }}>{t.signification}</div>
              </div>
            ))}
          </div>

          {/* Remboursement */}
          {item.remboursement && (
            <div style={{
              background: colors.buttonBg,
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <Coins size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6 }}>{item.remboursement}</div>
            </div>
          )}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Numéroté (numero, titre, description, page)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.numero !== undefined) {
      return (
        <div key={key} style={{
          display: 'flex',
          gap: '16px',
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '16px',
          padding: '20px',
          alignItems: 'flex-start'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: colors.buttonBgHover,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Flamengo', Georgia, serif",
            fontSize: (fs.title - 4) + 'px',
            color: colors.primary,
            flexShrink: 0
          }}>{item.numero}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '6px' }}>{item.titre}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, marginBottom: '6px' }}>{item.description}</div>
            {item.page && (
              <div style={{ fontSize: fs.base + 'px', color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={14} color={ICON_COLOR} /> {item.page}
              </div>
            )}
          </div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Pouvoirs oligarchiques (icon, name, detail)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.icon && item.name && item.detail) {
      return (
        <div key={key} style={{
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <span style={{ fontSize: '24px' }}>{item.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '4px' }}>{item.name}</div>
            <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted }}>{item.detail}</div>
          </div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Comparaison (type: "comparaison", elements)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.type === 'comparaison' && item.elements) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {item.elements.map((el, i) => (
            <div key={i} style={{
              background: colors.buttonBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.base - 1) + 'px', color: colors.primary, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{el.label}</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text }}>{el.value}</div>
            </div>
          ))}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Subventions (stat, citation, exemples)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.stat && item.citation && item.exemples) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Stat principale */}
          <div style={{
            background: darkMode
              ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(17, 17, 17, 0.15) 0%, rgba(17, 17, 17, 0.05) 100%)',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.large + 8) + 'px', color: colors.primary, marginBottom: '8px' }}>{item.stat.number}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text }}>{item.stat.label}</div>
          </div>

          {/* Citation */}
          <div style={{
            background: colors.buttonBg,
            borderLeft: `4px solid ${colors.primary}`,
            borderRadius: '0 12px 12px 0',
            padding: '20px'
          }}>
            <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px' }}>
              « {item.citation.texte} »
            </p>
            <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px' }}>— {item.citation.source}</p>
          </div>

          {/* Exemples */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{
                background: colors.buttonBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{ex.nom}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5 }}>{ex.detail}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Type stat seul (type: "stat", number, label, detail)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.type === 'stat' && item.number) {
      return (
        <div key={key} style={{
          background: darkMode
            ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)'
            : 'linear-gradient(135deg, rgba(17, 17, 17, 0.15) 0%, rgba(17, 17, 17, 0.05) 100%)',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center'
        }}>
          <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.large + 16) + 'px', color: colors.primary, marginBottom: '8px' }}>{item.number}</div>
          <div style={{ fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', marginBottom: '8px' }}>{item.label}</div>
          {item.detail && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6 }}>{item.detail}</div>}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Marché à double versant (explication, versants, insight)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.explication && item.versants) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px' }}>{item.explication}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {item.versants.map((v, i) => (
              <div key={i} style={{
                background: colors.buttonBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '12px',
                padding: '20px'
              }}>
                <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{v.titre}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5 }}>{v.detail}</div>
              </div>
            ))}
          </div>

          {item.insight && (
            <div style={{
              background: darkMode ? 'rgba(238, 194, 29, 0.1)' : 'rgba(17, 17, 17, 0.1)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <Lightbulb size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6 }}>{item.insight}</div>
            </div>
          )}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Info vs Opinion (probleme, exemples, proposition, reference)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.probleme && item.exemples && item.proposition) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px' }}>{item.probleme}</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{
                background: colors.buttonBg,
                borderLeft: `3px solid ${colors.primary}`,
                borderRadius: '0 10px 10px 0',
                padding: '12px 16px',
                color: colors.text,
                fontSize: (fs.base - 1) + 'px'
              }}>{ex}</div>
            ))}
          </div>

          <div style={{
            background: darkMode ? 'rgba(68, 112, 29, 0.15)' : 'rgba(68, 112, 29, 0.1)',
            border: '1px solid rgba(68, 112, 29, 0.3)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <CheckCircle size={20} color="#44701D" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: fs.base + 'px', color: colors.text }}><strong>Proposition :</strong> {item.proposition}</div>
          </div>

          {item.reference && (
            <div style={{
              background: colors.buttonBg,
              borderRadius: '10px',
              padding: '12px 16px',
              fontSize: (fs.base - 1) + 'px',
              color: colors.textMuted,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}>
              <FileText size={16} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              {item.reference}
            </div>
          )}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Médias coopératifs (nom, modele, resultat)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.nom && item.modele && item.resultat) {
      return (
        <div key={key} style={{
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{item.nom}</div>
          <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, marginBottom: '6px' }}><strong>Modèle :</strong> {item.modele}</div>
          <div style={{ fontSize: (fs.base - 1) + 'px', color: '#44701D' }}>✓ {item.resultat}</div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Avantages et questions
    // ═══════════════════════════════════════════════════════════════════════
    if (item.avantages && item.questions) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: fs.base + 'px',
              color: '#44701D',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <CheckCircle size={18} color="#44701D" /> Avantages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.avantages.map((av, i) => (
                <div key={i} style={{
                  background: 'rgba(68, 112, 29, 0.1)',
                  border: '1px solid rgba(68, 112, 29, 0.2)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#44701D',
                  fontSize: fs.base + 'px'
                }}>{av}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: fs.base + 'px',
              color: colors.primary,
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <HelpCircle size={18} color={colors.primary} /> Questions ouvertes
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.questions.map((q, i) => (
                <div key={i} style={{
                  background: colors.buttonBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: colors.primary,
                  fontSize: fs.base + 'px'
                }}>{q}</div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Oligarques médias (name, medias)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.name && item.medias) {
      return (
        <div key={key} style={{
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{item.name}</div>
          <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted }}>{item.medias}</div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Titre + detail simple
    // ═══════════════════════════════════════════════════════════════════════
    if (item.titre && item.detail && !item.numero) {
      return (
        <div key={key} style={{
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ fontWeight: '600', color: darkMode ? '#fff' : '#111', marginBottom: '6px', fontSize: fs.base + 'px' }}>{item.titre}</div>
          <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, lineHeight: 1.6 }}>{item.detail}</div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Exemples français pantouflage (principal, autres, stat)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.principal && item.autres) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Principal - Macron */}
          <div style={{
            background: darkMode
              ? 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)'
              : 'linear-gradient(135deg, rgba(17, 17, 17, 0.1) 0%, transparent 100%)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.title + 'px', color: colors.primary, marginBottom: '16px' }}>{item.principal.nom}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.principal.parcours.map((p, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 12px',
                  background: p.type === 'public' ? 'rgba(59, 130, 246, 0.1)' : p.type === 'privé' ? 'rgba(239, 68, 68, 0.1)' : colors.buttonBg,
                  borderRadius: '8px',
                  borderLeft: `3px solid ${p.type === 'public' ? '#3b82f6' : p.type === 'privé' ? '#ef4444' : colors.primary}`
                }}>
                  <span style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, minWidth: '80px' }}>{p.periode}</span>
                  <span style={{ fontSize: (fs.base - 1) + 'px', color: colors.text }}>{p.poste}</span>
                  <span style={{
                    marginLeft: 'auto',
                    fontSize: '10px',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    background: p.type === 'public' ? 'rgba(59, 130, 246, 0.2)' : p.type === 'privé' ? 'rgba(239, 68, 68, 0.2)' : colors.buttonBgHover,
                    color: p.type === 'public' ? '#3b82f6' : p.type === 'privé' ? '#ef4444' : colors.primary,
                    textTransform: 'uppercase'
                  }}>{p.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Autres exemples */}
          <div>
            <h4 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Autres exemples</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {item.autres.map((a, i) => (
                <div key={i} style={{
                  background: colors.buttonBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: '12px',
                  padding: '16px'
                }}>
                  <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{a.nom}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5 }}>{a.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat */}
          {item.stat && (
            <div style={{
              background: darkMode ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.large + 8) + 'px', color: '#ef4444', marginBottom: '8px' }}>{item.stat.number}</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text }}>{item.stat.label}</div>
            </div>
          )}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Exemples européens (exemples, stat avec source/chiffre)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.exemples && item.stat && item.stat.source) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{
                background: colors.buttonBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{ex.nom}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5 }}>{ex.detail}</div>
              </div>
            ))}
          </div>

          <div style={{
            background: darkMode ? 'rgba(238, 194, 29, 0.1)' : 'rgba(17, 17, 17, 0.1)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '8px' }}>{item.stat.chiffre}</div>
            <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted }}>— {item.stat.source}</div>
          </div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Government Sachs (intro, exemples, mondial)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.intro && item.exemples && item.mondial) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px' }}>{item.intro}</p>

          <div>
            <h4 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} color={ICON_COLOR} /> Exemples américains
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {item.exemples.map((ex, i) => (
                <div key={i} style={{
                  background: colors.buttonBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '12px',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, marginBottom: '2px' }}>Avant</div>
                    <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text }}>{ex.avant}</div>
                  </div>
                  <ArrowRight size={16} color={colors.textVeryMuted} />
                  <div>
                    <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, marginBottom: '2px' }}>Après</div>
                    <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text }}>{ex.apres}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={18} color={ICON_COLOR} /> Influence mondiale
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {item.mondial.map((m, i) => (
                <div key={i} style={{
                  background: colors.buttonBg,
                  border: `1px solid ${colors.cardBorder}`,
                  borderRadius: '12px',
                  padding: '14px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: (fs.base - 1) + 'px', color: colors.primary, fontWeight: '600' }}>{m.nom}</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', background: colors.buttonBgHover, borderRadius: '10px', color: colors.textMuted }}>{m.pays}</span>
                  </div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted }}>{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Young Leaders (concept, citation, programmes)
    // ═══════════════════════════════════════════════════════════════════════
    if (item.concept && item.citation && item.programmes) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px' }}>{item.concept}</p>

          {/* Citation */}
          <div style={{
            background: colors.buttonBg,
            borderLeft: `4px solid ${colors.primary}`,
            borderRadius: '0 12px 12px 0',
            padding: '20px'
          }}>
            <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px' }}>
              « {item.citation.texte} »
            </p>
            <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px' }}>— {item.citation.auteur}</p>
            {item.citation.source && <p style={{ color: colors.textVeryMuted, fontSize: (fs.base - 3) + 'px', marginTop: '4px' }}>{item.citation.source}</p>}
          </div>

          {/* Programmes */}
          {item.programmes.map((prog, i) => (
            <div key={i} style={{
              background: colors.buttonBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: '16px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Award size={24} color={ICON_COLOR} />
                <div>
                  <div style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary }}>{prog.nom}</div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted }}>Depuis {prog.depuis}</div>
                </div>
              </div>
              
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '12px', padding: '10px', background: darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)', borderRadius: '8px' }}>
                {prog.format}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {prog.exemples.map((ex, j) => {
                  const isObject = typeof ex === 'object';
                  return (
                    <div key={j} style={{
                      padding: '6px 12px',
                      background: colors.buttonBgHover,
                      borderRadius: '20px',
                      fontSize: (fs.base - 2) + 'px',
                      color: colors.text
                    }}>
                      {isObject ? (
                        <span>{ex.nom} <span style={{ color: colors.textMuted, fontSize: '10px' }}>({ex.delai})</span></span>
                      ) : ex}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HANDLER: Array générique
    // ═══════════════════════════════════════════════════════════════════════
    if (Array.isArray(item)) {
      return (
        <div key={key} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {item.map((sub, i) => renderContentItem(sub, `${key}-${i}`))}
        </div>
      );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // FALLBACK: Affichage JSON pour debug
    // ═══════════════════════════════════════════════════════════════════════
    console.warn('Unhandled content item:', item);
    return null;
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU - MODAL PROJET
  // ═══════════════════════════════════════════════════════════════════════════
  const renderProjetModal = () => {
    if (!showProjet) return null;
    
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: darkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(238, 194, 29, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '24px'
      }}>
        <div style={{
          background: darkMode ? '#1a1a1a' : '#EEC21D',
          border: `1px solid ${colors.cardBorder}`,
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
              background: colors.buttonBg,
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: '50%',
              color: colors.text,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>

          <h2 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.title + 'px', color: colors.primary, marginBottom: '8px' }}>Le Projet</h2>
          <p style={{ color: colors.textMuted, fontSize: fs.base + 'px', marginBottom: '24px' }}>Projet politique — La dernière Version</p>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: "'Flamengo', Georgia, serif", fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>NOS PRIORITÉS</h3>
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
                background: colors.buttonBg,
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '10px',
                fontSize: fs.base + 'px',
                color: colors.text,
                marginBottom: '8px'
              }}>{item}</div>
            ))}
          </div>

          <a
            href="https://ruches.org/sites/default/files/mediatheque/documents/2025-12/le-projet-8.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 22px',
              background: darkMode ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' : 'linear-gradient(135deg, #111111 0%, #333333 100%)',
              color: darkMode ? '#111' : '#EEC21D',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: fs.base + 'px'
            }}
          >
            <FileText size={18} /> Lire le Projet
          </a>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU PRINCIPAL
  // ═══════════════════════════════════════════════════════════════════════════
  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div style={{ minHeight: '100vh', background: colors.background, color: colors.text }}>
      <AccessibilityControls />
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
