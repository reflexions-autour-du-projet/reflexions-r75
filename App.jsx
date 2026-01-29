import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  Briefcase, 
  Calendar, 
  Clock, 
  Landmark, 
  Coins, 
  Scale, 
  Handshake, 
  FileText, 
  Bot, 
  Search, 
  Lightbulb, 
  HelpCircle, 
  Check, 
  Lock, 
  Map, 
  FolderOpen, 
  ClipboardList,
  ArrowRight,
  ArrowLeft,
  Paperclip,
  CheckCircle,
  X
} from 'lucide-react';
import { mediasOligarchiques, pantouflage, sessionsConfig, prochaineSession } from './sessions-data.js';

// ═══════════════════════════════════════════════════════════════════════════
// RÉFLEXION AUTOUR DU PROJET — R75
// Application pour les sessions de Réflexion autour du Projet de la Ruche 75
// ═══════════════════════════════════════════════════════════════════════════

// Lien Discord pour les questions et discussions
const DISCORD_FORUM_URL = "https://discord.com/channels/1426932365896454337/1462537887592743096";

// Couleur principale pour les icônes
const ICON_COLOR = "#eec21d";

// ═══════════════════════════════════════════════════════════════════════════
// DONNÉES DE SYNTHÈSE PAR SESSION
// ═══════════════════════════════════════════════════════════════════════════

const sessionsSyntheses = {
  // Sessions Médias Oligarchiques
  session1: {
    titre: "Synthèse — Session #001",
    theme: 'medias',
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
    theme: 'medias',
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
    theme: 'medias',
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
  // Sessions Pantouflage
  session4: {
    titre: "Synthèse — Session #004",
    theme: 'pantouflage',
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
      title: 'Oligarchie médiatique',
      icon: Landmark,
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
      title: 'Financement',
      icon: Coins,
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
      title: 'Déontologie',
      icon: Scale,
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
      title: 'SCOP & Sociocratie',
      icon: Handshake,
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
      title: 'Neutralité & Sémantique',
      icon: FileText,
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
      title: 'IA & Guerre cognitive',
      icon: Bot,
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
  const [showProjet, setShowProjet] = useState(false);
  
  // États pour le dossier de synthèse global
  const [showDossierSynthese, setShowDossierSynthese] = useState(false);
  const [activeSyntheseTheme, setActiveSyntheseTheme] = useState(null);
  const [syntheseView, setSyntheseView] = useState('carte');

  // États pour la recherche
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

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

  // ═══════════════════════════════════════════════════════════════════════════
  // FONCTIONS DE RECHERCHE
  // ═══════════════════════════════════════════════════════════════════════════

  const performSearch = (query) => {
    if (!query || query.length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(sessionsSyntheses).forEach(([sessionId, session]) => {
      const sessionNum = sessionId.replace('session', '');
      const sessionLabel = `Session #00${sessionNum}`;
      
      // Chercher dans les grandes idées
      session.grandesIdees?.forEach((idee) => {
        if (idee.toLowerCase().includes(lowerQuery)) {
          results.push({
            sessionId,
            sessionLabel,
            theme: session.theme,
            type: 'Grande idée',
            typeIcon: 'lightbulb',
            content: idee
          });
        }
      });

      // Chercher dans les questions ouvertes
      session.questionsOuvertes?.forEach((question) => {
        if (question.toLowerCase().includes(lowerQuery)) {
          results.push({
            sessionId,
            sessionLabel,
            theme: session.theme,
            type: 'Question ouverte',
            typeIcon: 'help',
            content: question
          });
        }
      });

      // Chercher dans les pistes d'action
      session.pistesAction?.forEach((piste) => {
        if (piste.toLowerCase().includes(lowerQuery)) {
          results.push({
            sessionId,
            sessionLabel,
            theme: session.theme,
            type: "Piste d'action",
            typeIcon: 'check',
            content: piste
          });
        }
      });
    });

    setSearchResults(results.slice(0, 10));
    setShowSearchResults(true);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
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
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    if (index === -1) return text;
    
    return (
      <>
        {text.slice(0, index)}
        <span style={{ 
          background: 'rgba(238, 194, 29, 0.4)', 
          borderRadius: '2px',
          padding: '0 2px'
        }}>
          {text.slice(index, index + query.length)}
        </span>
        {text.slice(index + query.length)}
      </>
    );
  };

  // Fonction pour rendre l'icône de résultat de recherche
  const renderSearchResultIcon = (typeIcon) => {
    const iconProps = { size: 12, color: ICON_COLOR, strokeWidth: 2 };
    switch(typeIcon) {
      case 'lightbulb': return <Lightbulb {...iconProps} />;
      case 'help': return <HelpCircle {...iconProps} />;
      case 'check': return <Check {...iconProps} />;
      default: return <Lightbulb {...iconProps} />;
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

  // ═══════════════════════════════════════════════════════════════════════════
  // BARRE DE RECHERCHE
  // ═══════════════════════════════════════════════════════════════════════════

  const SearchBar = () => (
    <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(238, 194, 29, 0.06)',
        border: '1px solid rgba(238, 194, 29, 0.15)',
        borderRadius: '14px',
        padding: '10px 14px',
        transition: 'all 0.3s ease'
      }}>
        <Search size={16} color={ICON_COLOR} strokeWidth={2} style={{ opacity: 0.6, flexShrink: 0 }} />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => searchQuery.length >= 2 && setShowSearchResults(true)}
          placeholder="Rechercher..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            marginLeft: '10px',
            color: '#fae8a4',
            fontSize: '14px',
            fontFamily: "'Flamengo', Georgia, serif"
          }}
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSearchResults([]);
              setShowSearchResults(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(250, 232, 164, 0.4)',
              cursor: 'pointer',
              padding: '2px 6px',
              fontSize: '14px',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={14} color="rgba(250, 232, 164, 0.4)" />
          </button>
        )}
      </div>

      {/* Résultats de recherche */}
      {showSearchResults && searchResults.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '8px',
          background: 'rgba(17, 17, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(238, 194, 29, 0.2)',
          borderRadius: '14px',
          overflow: 'hidden',
          zIndex: 100,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            padding: '10px 14px',
            borderBottom: '1px solid rgba(238, 194, 29, 0.1)',
            fontSize: '11px',
            color: 'rgba(250, 232, 164, 0.5)',
            fontFamily: "'Flamengo', Georgia, serif",
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''}
          </div>
          <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
            {searchResults.map((result, index) => (
              <div
                key={index}
                onClick={() => goToSearchResult(result)}
                style={{
                  padding: '12px 14px',
                  cursor: 'pointer',
                  borderBottom: index < searchResults.length - 1 ? '1px solid rgba(238, 194, 29, 0.06)' : 'none',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  marginBottom: '4px'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {renderSearchResultIcon(result.typeIcon)}
                  </span>
                  <span style={{ 
                    fontSize: '10px', 
                    color: '#eec21d',
                    fontFamily: "'Flamengo', Georgia, serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em'
                  }}>
                    {result.sessionLabel}
                  </span>
                  <span style={{ 
                    fontSize: '9px', 
                    color: 'rgba(250, 232, 164, 0.4)',
                    padding: '2px 6px',
                    background: 'rgba(238, 194, 29, 0.08)',
                    borderRadius: '8px'
                  }}>
                    {result.type}
                  </span>
                </div>
                <div style={{ 
                  fontSize: '13px', 
                  color: '#fae8a4',
                  lineHeight: 1.4
                }}>
                  {highlightMatch(result.content, searchQuery)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Aucun résultat */}
      {showSearchResults && searchQuery.length >= 2 && searchResults.length === 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '8px',
          background: 'rgba(17, 17, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(238, 194, 29, 0.2)',
          borderRadius: '14px',
          padding: '16px',
          textAlign: 'center',
          zIndex: 100
        }}>
          <div style={{ marginBottom: '6px' }}>
            <Search size={20} color={ICON_COLOR} style={{ opacity: 0.5 }} />
          </div>
          <div style={{ 
            color: 'rgba(250, 232, 164, 0.5)',
            fontSize: '13px'
          }}>
            Aucun résultat pour "{searchQuery}"
          </div>
        </div>
      )}
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
          
          <header style={{ textAlign: 'center', marginBottom: '32px' }}>
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
              letterSpacing: '0.15em',
              marginBottom: '20px'
            }}>
              R75
            </p>

            {/* ════════════════════════════════════════════════════════════════
                BARRE DE RECHERCHE
                ════════════════════════════════════════════════════════════════ */}
            <SearchBar />
          </header>

          <GlassCard hover={false} style={{ 
            marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.12) 0%, rgba(238, 194, 29, 0.03) 100%)',
            border: '1px solid rgba(238, 194, 29, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Calendar size={32} color={ICON_COLOR} strokeWidth={1.5} />
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
              GRID DES DEUX CARDS
              ═══════════════════════════════════════════════════════════════════ */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            marginBottom: '48px'
          }}>

            <GlassCard onClick={() => goToTheme('pantouflage')}>
              <div style={{ marginBottom: '16px' }}>
                <Briefcase size={48} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
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
                color: 'rgba(238, 194, 29, 0.5)'
              }}>
                <ArrowRight size={24} />
              </div>
            </GlassCard>

            <GlassCard onClick={() => goToTheme('medias')}>
              <div style={{ marginBottom: '16px' }}>
                <Tv size={48} color={ICON_COLOR} strokeWidth={1.5} />
              </div>
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
                color: 'rgba(238, 194, 29, 0.5)'
              }}>
                <ArrowRight size={24} />
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
    const ThemeIcon = isMedias ? Tv : Briefcase;

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
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.1)'}
        >
          <ArrowLeft size={16} /> Retour à l'accueil
        </button>

        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ marginBottom: '16px' }}>
            <ThemeIcon size={64} color={ICON_COLOR} strokeWidth={1.5} />
          </div>
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Lock size={14} color="#fae8a4" /> Bientôt disponible
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

    // Récupérer les sections + ajouter "synthese" si disponible (et pas déjà présent)
    const sections = Object.keys(sessionData.sections);
    const synthese = sessionsSyntheses[currentSession];
    // Éviter le doublon : n'ajouter 'synthese' que si pas déjà dans les sections
    const allSections = synthese && !sections.includes('synthese') 
      ? [...sections, 'synthese'] 
      : sections;
    
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
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeft size={16} /> Retour aux sessions
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} color={ICON_COLOR} /> {sessionData.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color={ICON_COLOR} /> {sessionData.duration}
            </span>
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
                      ? 'linear-gradient(135deg, #44701D 0%, #365a17 100%)'
                      : 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' 
                    : isSynthese
                      ? 'rgba(68, 112, 29, 0.2)'
                      : 'rgba(238, 194, 29, 0.1)',
                  border: isSynthese && currentSection !== key ? '1px solid rgba(68, 112, 29, 0.3)' : 'none',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  color: currentSection === key ? '#111' : isSynthese ? '#44701D' : '#eec21d',
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
            background: 'linear-gradient(135deg, rgba(68, 112, 29, 0.1) 0%, rgba(68, 112, 29, 0.02) 100%)',
            border: '1px solid rgba(68, 112, 29, 0.2)'
          }}>
            <h2 style={{ 
              fontFamily: "'Flamengo', Georgia, serif",
              fontSize: '22px',
              color: '#44701D',
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
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <HelpCircle size={18} color="#e9d176" /> Questions ouvertes
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
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Check size={18} color="#f8e8ab" /> Pistes d'action
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {synthese.pistesAction.map((piste, i) => (
                  <div key={i} style={{
                    background: 'rgba(22, 163, 74, 0.1)',
                    border: '1px solid rgba(22, 163, 74, 0.2)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#fae8a4',
                    fontSize: '14px',
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

        {/* ═══════════════════════════════════════════════════════════════════
            BOUTON DISCORD - Remplace la zone de questions
            ═══════════════════════════════════════════════════════════════════ */}
        <GlassCard hover={false} style={{
          background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.15) 0%, rgba(88, 101, 242, 0.05) 100%)',
          border: '1px solid rgba(88, 101, 242, 0.3)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '18px',
            color: '#7289da',
            marginBottom: '8px'
          }}>
            Une idée, une question?
          </h3>
          <p style={{ 
            fontFamily: "'Flamengo'",
            fontSize: '14px',
            color: '#7289da',
            marginBottom: '20px',
            lineHeight: 1.6
          }}>
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
              fontSize: '16px',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(88, 101, 242, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(88, 101, 242, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(88, 101, 242, 0.3)';
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
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(238, 194, 29, 0.1)'}
        >
          <ArrowLeft size={16} /> Retour aux sessions
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
            { key: 'carte', label: 'Carte', icon: Map },
            { key: 'themes', label: 'Thèmes', icon: FolderOpen },
            { key: 'actions', label: 'Actions', icon: ClipboardList }
          ].map(({ key, label, icon: IconComp }) => (
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
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <IconComp size={16} color={syntheseView === key ? '#111' : '#fae8a4'} />
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
            {dossierSyntheseData.themes.map(theme => {
              const IconComp = theme.icon;
              return (
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
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <IconComp size={20} color={theme.color} />
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
              );
            })}
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
                      <div style={{ fontSize: '14px', color: '#eec21d' }}>
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
                        : '#453706',
                      color: c.status.includes('contacter') 
                        ? '#fb923c' 
                        : '#eec21d'
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
                color: '#48892c',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Lightbulb size={20} color="#48892c" /> Idées émergentes
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {dossierSyntheseData.idees.map((idee, i) => (
                  <div key={i} style={{
                    background: 'rgba(22, 163, 74, 0.1)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    fontSize: '15px',
                    color: '#fae8a4',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}>
                    <Check size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {idee}
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
              color: '#eec21d',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}>
              <Paperclip size={16} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              {item.note}
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
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}>
                  <Coins size={16} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong style={{ color: '#eec21d' }}>Aujourd'hui :</strong> {item.remboursement}</span>
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
              color: '#eec21d',
              marginBottom: '6px'
            }}>
              {item.titre}
            </div>
            <div style={{ fontSize: '16px', color: 'rgba(250, 232, 164, 0.7)', marginBottom: '6px' }}>
              {item.description}
            </div>
            {item.page && (
              <div style={{ fontSize: '16px', color: '#eec21d', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={14} color={ICON_COLOR} /> {item.page}
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
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <HelpCircle size={18} color="#eec21d" /> Questions ouvertes
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.questions.map((q, i) => (
                <div key={i} style={{
                  background: 'rgba(238, 194, 29, 0.1)',
                  border: '1px solid rgba(238, 194, 29, 0.2)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#eec21d',
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
              fontStyle: 'italic',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px'
            }}>
              <Lightbulb size={18} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              {item.insight}
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
            <div style={{ fontSize: '15px', color: '#8fc', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={14} color="#8fc" /> {item.resultat}
            </div>
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 22px',
              background: 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)',
              color: '#111',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px'
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
