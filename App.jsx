import React, { useState, useEffect } from 'react';
import { 
  Tv, Briefcase, Calendar, Clock, Landmark, Coins, Scale, Handshake, FileText, Bot, 
  Search, Lightbulb, HelpCircle, Check, Lock, Map, FolderOpen, ClipboardList,
  ArrowRight, ArrowLeft, Paperclip, CheckCircle, X, History, Quote, Users, Globe, Award,
  Share2, ShieldAlert
} from 'lucide-react';
import { mediasOligarchiques, pantouflage, violencesPolitiques, sessionsConfig, prochaineSession } from './sessions-data.js';

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
      "Origine historique : « la botte » (servir l'État 10 ans) vs « la pantoufle » (partir vers le privé) — École Polytechnique militarisée par Napoléon en 1814",
      "Environ 31 000€ à rembourser si l'on ne sert pas l'État pendant 10 ans — faille réglementaire 2000-2015 qui exemptait tous les élèves",
      "Depuis 2017, +40 conseillers ministériels ont quitté le public pour le privé : du jamais vu dans l'Histoire",
      "Exemples français : Macron (Rothschild), Kohler (mis en examen, nommé DG adjoint Société Générale), Djebbari (retoqué par la HATVP), Pénicaud (Galileo), Leprettre (lobby Phytéis)",
      "« Government Sachs » : aux USA, 88% des lobbyistes de Goldman Sachs avaient travaillé pour le gouvernement fédéral en 2016",
      "Influence mondiale de Goldman : Draghi (BCE puis PM italien), Carney (PM canadien), Sunak (PM britannique), Monti, Turnbull...",
      "50% des ex-commissaires européens et 30% des ex-eurodéputés travaillent pour des lobbyistes de l'UE (Transparency International)",
      "Programmes Young Leaders : French-American Foundation (1981) et WEF Young Global Leaders (1992/2004) créent les conditions préalables au pantouflage",
      "Klaus Schwab (2017) : « Nous pénétrons les cabinets des gouvernements à travers le monde avec nos Young Global Leaders »",
      "Le pantouflage n'est pas une dérive marginale mais un mécanisme structurel de concentration des pouvoirs"
    ],
    questionsOuvertes: [
      "La période de carence de 5 ans (contre 3 actuellement) est-elle suffisante?",
      "Peut-on réguler le pantouflage sans s'intéresser à ce qui le prépare (Young Leaders)?",
      "Faut-il exiger la transparence sur la participation aux programmes Young Leaders?",
      "Un élu ou haut fonctionnaire formé dans ces réseaux est-il en situation de conflit d'intérêts structurel?",
      "Comment contrôler les conflits d'intérêts post-mandat?",
      "Le système crée-t-il intentionnellement la confusion entre intérêt général et intérêts particuliers?"
    ],
    pistesAction: [
      "Documenter les parcours types des pantoufleurs français",
      "Étudier les modèles de régulation européens et leurs limites",
      "Créer un registre public des participants aux programmes de formation des élites",
      "Rendre obligatoire la déclaration de participation aux programmes Young Leaders pour tout candidat à une fonction publique",
      "Consulter les sites Legifrance et Europa Lex pour suivre les textes en discussion"
    ],
    citation: { texte: "Ce dont nous sommes très fiers maintenant, c'est que nous pénétrons les cabinets des gouvernements à travers le monde avec nos Young Global Leaders", auteur: "Klaus Schwab", source: "Harvard University, 2017" }
  },
  session7: {
    titre: "Synthèse — Session #007", theme: 'violencesPolitiques',
    grandesIdees: [
      "Les violences politiques forment un système à 5 niveaux : physique, judiciaire, institutionnelle, économique et symbolique",
      "Gilets jaunes : 3 200 condamnations de manifestants (40% prison ferme) vs zéro policier condamné pour 23 personnes éborgnées",
      "12 908 tirs de LBD en 6 mois — la France est l'un des seuls pays d'Europe occidentale à utiliser ces armes contre des manifestants",
      "Commissions d'enquête : 6 mois max, aucun pouvoir de sanction, 1 seule condamnation pour parjure en 70 ans de Ve République",
      "La CJR en 30 ans et 22 166+ requêtes : 9 décisions, 0 peine de prison ferme — non-lieu général Covid en juillet 2025",
      "L'IGPN a classé plus d'un tiers des enquêtes Gilets jaunes sans suite",
      "Mesures du Projet : Tribunal populaire temporaire, Comité de clémence, comité de poursuites ciblant la chaîne de commandement",
      "Transformation de la CJR en haute cour citoyenne avec jury tiré au sort, élection des magistrats, dissolution BRAV-M, suppression BAC"
    ],
    questionsOuvertes: [
      "Comment garantir l'indépendance d'un tribunal qui traite de violences par nature politiques ?",
      "La limitation à 10 ans et à des peines courtes est-elle suffisante ?",
      "Le caractère rétroactif du droit spécial pose-t-il un problème au regard du principe de non-rétroactivité pénale ?",
      "Comment protéger le corps d'inspection indépendant de la cooptation à terme ?",
      "Faut-il interdire purement le LBD et les grenades de désencerclement comme le demande Amnesty ?",
      "Peut-on réformer un système de l'intérieur quand les gardiens du système sont ceux qu'il faudrait contrôler ?"
    ],
    pistesAction: [
      "Documenter les 401 enquêtes IGPN Gilets jaunes et leur suivi judiciaire",
      "Cartographier la chaîne de commandement des violences pour identifier les responsabilités",
      "Étudier les commissions vérité et réconciliation (Afrique du Sud) comme modèle",
      "Préparer un dossier sur les recommandations non appliquées des commissions d'enquête"
    ]
  },
  session8: {
    titre: "Synthèse — Session #008", theme: 'violencesPolitiques',
    grandesIdees: [
      "Les violences politiques actuelles ne sont pas des accidents — elles sont le produit d'une construction historique de deux siècles",
      "La Révolution française invente simultanément la souveraineté populaire ET la Terreur d'État : tension jamais résolue depuis",
      "XIXe siècle : de la répression militaire occasionnelle (1848 : 3 000 morts, 1871 : 10-30 000 morts) à la surveillance policière permanente",
      "Gaslighting institutionnel : nier les réalités documentées, renverser la charge de la preuve",
      "La fabrique des éléments de langage : 'En même temps', 'Il n'y a pas d'alternative', 'quoi qu'il en coûte' — mensonge industriel coordonné",
      "2005 comme point de bascule : TCE rejeté → traité de Lisbonne sans référendum",
      "Novlangue française : euphémisation permanente, technocratisation, réduction du vocabulaire",
      "XXIe siècle : surveillance numérique (Snowden 2013) + retour assumé de la violence physique",
      "La disqualification des victimes précède toujours la répression : Communards 'fous furieux', GJ 'casseurs', opposants 'complotistes'"
    ],
    questionsOuvertes: [
      "Le gaslighting institutionnel : comment contrer la production industrielle du mensonge politique ?",
      "La surveillance numérique et les algorithmes de modération : angle peu traité dans les mesures actuelles",
      "Peut-on légiférer contre le gaslighting institutionnel ?",
      "Le modèle britannique (police sans armes à feu) est-il transposable en France ?",
      "Comment contrer la normalisation progressive de l'inacceptable (Milgram) ?"
    ],
    pistesAction: [
      "Documenter les contradictions d'État : masques (jan. 2020 vs mai 2020), retraites (rapport COR 2022 vs discours)",
      "Cartographier l'évolution du vocabulaire politique depuis 2005 (novlangue)",
      "Étudier la coercition économique sur les associations dépendant de subventions publiques"
    ]
  },
  session6: {
    titre: "Synthèse — Session #006", theme: 'pantouflage',
    grandesIdees: [
      "Cas d'école Montchalin : HEC/Harvard → BNP/AXA → députée LREM → Young Leader FAF 2018 → YGL WEF 2021 → ministre → Cour des comptes (poste irrévocable, potentiellement 28 ans en poste)",
      "Conflit d'intérêts direct : elle évaluera dès avril le budget 2025 qu'elle a elle-même préparé comme ministre des Comptes publics",
      "Rupture avec l'usage de nommer une personnalité de l'opposition à la Cour des comptes — et nomination la plus jeune (40 ans vs 58 ans historique)",
      "Lien familial BCG : son mari est partner au Boston Consulting Group, un des principaux bénéficiaires des marchés publics de conseil que la Cour est censée contrôler",
      "Stratégie de verrouillage avant 2027 : Ferrand au Conseil constitutionnel (→2034), Montchalin à la Cour des comptes (→2054), Banque de France et Conseil d'État à nommer",
      "Ferrand nommé président du Conseil constitutionnel à une voix près grâce à l'abstention de 16 députés RN — soupçon de deal Macron-Le Pen",
      "Villeroy de Galhau démissionne de la Banque de France le même jour que la nomination Montchalin, offrant la nomination du successeur à Macron avant 2027",
      "30 nominations de hauts fonctionnaires en un seul Conseil des ministres le 26 juin 2024, à 4 jours du premier tour des législatives",
      "Boucles WhatsApp de hauts fonctionnaires pour « ralentir et empêcher le RN d'exercer le pouvoir » en cas de victoire (Europe 1)",
      "Mesures du Projet : démission définitive du corps, carence de 5 ans (vs 3 actuellement), transparence décennale, congé républicain de 6 mois, grands corps décennaux, fusion ENM/INET/INSP, fusion AFA/MICAF/HATVP",
      "Angles morts : réseaux transnationaux non déclarés (YGL, FAF, Bilderberg), irrévocabilité des postes, pré-sélection extra-démocratique, opacité médiatique"
    ],
    questionsOuvertes: [
      "La déclaration obligatoire des appartenances aux réseaux (YGL, FAF, Bilderberg...) est-elle réaliste sans tomber dans le fichage ?",
      "Faut-il plafonner tous les mandats institutionnels à 10 ans maximum ?",
      "Faut-il interdire les nominations aux postes clés dans les 12-18 derniers mois d'un mandat présidentiel ?",
      "La carence de 5 ans est-elle suffisante face à des réseaux qui opèrent sur des décennies ?",
      "Le pantouflage triangulaire (privé → public → institution de contrôle) est-il couvert par les mesures du Projet ?",
      "Peut-on réguler un système quand les régulateurs en sont issus ? Le RIC et les citoyens tirés au sort suffisent-ils ?",
      "Comment éviter les failles de circumvention (type Polytechnique 2000-2015) ?",
      "L'ensemble des mesures du Projet aurait-il empêché la stratégie de verrouillage en cours ?"
    ],
    pistesAction: [
      "Proposer la déclaration obligatoire des appartenances aux programmes de sélection transatlantiques pour tout candidat ou haut fonctionnaire",
      "Étudier l'interdiction de nommer aux postes institutionnels clés dans les 12-18 derniers mois d'un mandat présidentiel",
      "Porter la réflexion sur les mandats limités (10 ans max) pour tous les postes institutionnels",
      "Documenter les trajectoires de verrouillage en cours (Ferrand, Montchalin, Banque de France, Conseil d'État) comme dossier de plaidoyer",
      "Proposer l'approbation parlementaire renforcée (majorité simple pour valider au lieu de 3/5e pour bloquer)",
      "Intégrer la transparence des agendas ministériels pour rendre visibles les contacts avec les réseaux"
    ],
    citation: { texte: "Des hauts fonctionnaires confirment l'existence de boucles d'échanges privés sur WhatsApp où certains discutent de comment ralentir et empêcher le Rassemblement national d'exercer le pouvoir en cas de victoire en 2027", auteur: "Europe 1", source: "Février 2026" }
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
    { id: 'session5', numero: '005', titre: "La sélection avant l'élection", date: '05/02/2026', disponible: true },
    { id: 'session6', numero: '006', titre: 'Les mesures du Projet', date: '13/02/2026', disponible: true },
  ],
  violencesPolitiques: [
    { id: 'session7', numero: '007', titre: "Commissions d'enquête et violences politiques", date: '25/02/2026', disponible: true },
    { id: 'session8', numero: '008', titre: "Aux origines des violences politiques", date: '04/03/2026', disponible: true },
    { id: 'session9', numero: '009', titre: "Les mesures du Projet", date: '11/03/2026', disponible: false },
  ]
};

const dossierSyntheseData = {
  themes: [
    { id: 'oligarchie', title: 'Oligarchie médiatique', icon: Landmark, color: '#FFEBC0', summary: '28 familles/entités contrôlent tous les médias français',
      details: ['Concentration des pouvoirs : économique, politique, administratif, médiatique', 'Propriétaires : Bouygues, Bolloré, Arnault, Niel, Drahi, Lagardère, Saadé, Kretinsky..', "L'influence est devenue la première raison d'acheter un média, pas la rentabilité", 'Glissement de "vecteur d\'information" à "vecteur d\'opinion"'],
      questions: ['Comment définir précisément "média oligarchique" ?', "Quel processus juridique pour l'expropriation ?", 'Rétrocession gratuite : quid de la légalité ?'] },
    { id: 'financement', title: 'Financement', icon: Coins, color: '#EBC471', summary: "+1 Md€/an de subventions publiques",
      details: ['Médias structurellement déficitaires malgré les milliards de bénéfices des groupes', 'Arnault : 17,8M€ de subventions (2023) vs 14 Mds€ de bénéfices LVMH', 'Déficit possiblement orchestré : outil de contrôle sur les journalistes', "Marché à double versant : vente au public + vente d'audience aux annonceurs"],
      questions: ['Interdire les subventions aux groupes bénéficiaires ?', 'Auditer qui prend combien via quelles structures ?', 'Le déficit est-il volontaire pour maintenir la pression ?'] },
    { id: 'deontologie', title: 'Déontologie', icon: Scale, color: '#D9A22C', summary: 'Codes abandonnés depuis 40 ans, pensée unique',
      details: ["Plus personne ne légifère sur les conflits d'intérêts", 'Écoles de journalisme : formatage de la pensée', "Charte de Munich (1971) : n'engage que ceux qui la lisent", 'ARCOM : si elle a cette mission, ça ne fonctionne pas'],
      questions: ['Faut-il un nouvel organe de contrôle contraignant?', "Interdire aux oligarques d'être actionnaires des écoles?", "La charte de Munich comme condition d'accès aux subventions?"] },
    { id: 'scop', title: 'SCOP & Sociocratie', icon: Handshake, color: '#B08B3D', summary: 'Modèle coopératif : salariés propriétaires, 1 personne = 1 voix',
      details: ['SCOP : 51% capital + 65% droits de vote aux salariés, dirigeants élus', 'Sociocratie : cercles de 6-8 personnes autonomes, référents inter-cercles', 'Parmigiano-Reggiano : 50 ans de coopératives qui fonctionnent'],
      questions: ['Transformer les médias existants OU créer de nouveaux médias coopératifs?', 'Cadeau empoisonné si le média est déjà déficitaire?', 'Les salariés seraient-ils mieux à même de gérer?'] },
    { id: 'neutralite', title: 'Neutralité & Sémantique', icon: FileText, color: '#A0751A', summary: "Informer ≠ Convaincre — La neutralité n'existe pas",
      details: ['Distinction fondamentale : information vs opinion', 'Ligne éditoriale : chacun en a une, la neutralité est une illusion', '"Edit" = couper — une ligne éditoriale coupe', "Le choix même d'un sujet est déjà un parti pris"],
      questions: ["Réappropriation des mots : qu'est-ce que l'information à l'ère digitale?", 'Inclure la distinction informer/convaincre dans les statuts SCOP?', 'Est-ce le système ou une croyance populaire qui fait croire à la neutralité?'] },
    { id: 'ia', title: 'IA & Guerre cognitive', icon: Bot, color: '#835C07', summary: 'Brouillage réel/fictif, information instrumentalisée',
      details: ['Nouveau réflexe : on doute de chaque info/photo (vraie ou générée?)', 'Exemple : photo Macron Ray-Ban crue fake mais vraie', 'Risque : Guerre cognitive'],
      questions: ["Comment intégrer l'IA dans la réflexion sur l'avenir des médias?", 'Un label "conçu sans IA" serait-il intéressant?', 'Comment protéger les petits médias?'] },
    { id: 'reseaux', title: 'Réseaux sociaux & Ingérences', icon: Share2, color: '#523F02', summary: "Effet arroseur arrosé : outil d'ingénierie sociale devenu vecteur d'info alternative",
      details: [
        'Réseaux sociaux originellement conçus pour "débiliser" les populations (ingénierie sociale)',
        'Effet inverse : ont permis de révéler des informations ignorées par les médias mainstream',
        'Régulation massive et urgente récente — coïncidence ou volonté de contrôle ?',
        'Comptes "propagandesques" (ex: Josiane Lepine sur X) : contenus absurdes mais très mis en avant',
        'Ces comptes ont un réel following/engagement et sont gérés par des personnes physiques'
      ],
      questions: [
        'Qui définit l\'information à laquelle nous avons le droit d\'accéder ?',
        'Pourquoi réguler les réseaux sociaux mais pas certaines chaînes TV ?',
        'La régulation vise-t-elle à censurer les discours "dissidents" avant 2027 ?',
        'Quid du libre arbitre et de l\'esprit critique face à la régulation ?',
        'Par qui sont gérés les comptes de propagande mis en avant par X ?',
        'Quel est ce système parallèle de mise en avant algorithmique ?'
      ] }
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
    'Audit public : qui prend combien via quelle structure',
    'Étudier le système de mise en avant algorithmique sur X et autres plateformes',
    "Documenter les comptes propagandesques : origine, financement, réseaux",
    'Réflexion sur la régulation différenciée : réseaux sociaux vs TV traditionnelle'
  ]
};

const dossierSynthesePantouflageData = {
  themes: [
    { id: 'origines', title: 'Origines historiques', icon: History, color: '#FFEBC0', summary: 'École Polytechnique, Napoléon et la naissance du pantouflage',
      details: [
        '"La botte" (servir l\'État 10 ans) vs "la pantoufle" (partir vers le privé) — argot polytechnicien depuis 1814',
        'Napoléon militarise l\'X en 1814 : engagement décennal, uniforme, casernes',
        'Aujourd\'hui : ~31 000€ à rembourser si l\'on ne sert pas l\'État pendant 10 ans',
        'Faille réglementaire 2000-2015 : exemption de fait du remboursement pendant 15 ans',
        '"Corpsards" (grands corps de l\'État) vs "non-corpsards" (privé) — la distinction perdure'
      ],
      questions: [
        'Comment expliquer que des trajectoires aussi similaires se reproduisent dans des contextes nationaux si différents ?',
        'Le système crée-t-il intentionnellement la confusion entre intérêt général et intérêts particuliers ?',
        'La faille 2000-2015 était-elle délibérée ?'
      ]
    },
    { id: 'france', title: 'Pantouflage en France', icon: Landmark, color: '#EBC471', summary: 'Depuis 2017 : +40 conseillers ministériels — du jamais vu',
      details: [
        'Macron : ENA → Inspecteur des finances → Rothschild → Ministre → Président',
        'Alexis Kohler : mis en examen pour "prise illégale d\'intérêts" → DG adjoint Société Générale (oct. 2024)',
        'Djebbari : retoqué par la HATVP pour rejoindre CMA-CGM — "risques déontologiques substantiels"',
        'Muriel Pénicaud : réforme la formation professionnelle → conseil d\'administration de Galileo (bénéficiaire direct)',
        'Éléonore Leprettre : ex-cheffe de cabinet Agriculture → Phytéis (lobby agrochimique)',
        'Depuis 2017, jamais autant de conseillers ministériels n\'avaient quitté le public pour le privé'
      ],
      questions: [
        'La HATVP est-elle suffisamment indépendante et dotée de moyens pour contrôler les passages ?',
        'Faut-il créer un casier déontologique public pour tout haut fonctionnaire ?',
        'Comment traiter les cas où la HATVP valide malgré des conflits d\'intérêts évidents ?'
      ]
    },
    { id: 'govtSachs', title: '"Government Sachs"', icon: Globe, color: '#D9A22C', summary: '88% des lobbyistes de Goldman avaient travaillé pour le gouvernement fédéral US (2016)',
      details: [
        'Robert Rubin (co-président GS) → Secrétaire au Trésor sous Clinton',
        'Henry Paulson (PDG GS) → Secrétaire au Trésor sous Bush, supervise le plan TARP dont GS reçoit 12,9 Mds$',
        'Mario Draghi (VP GS Europe) → Banque d\'Italie → BCE → Premier ministre italien',
        'Mark Carney (ancien GS) → Banque du Canada → Banque d\'Angleterre → Premier ministre canadien',
        'Rishi Sunak (ancien GS) → Premier ministre britannique (2022-2024)',
        '50% des ex-commissaires européens et 30% des ex-eurodéputés travaillent pour des lobbyistes (Transparency International)'
      ],
      questions: [
        'S\'agit-il de coïncidences ou d\'un phénomène plus structuré ?',
        'Comment expliquer la reproduction de ce schéma dans des contextes nationaux si différents ?',
        'Faut-il interdire à d\'anciens banquiers d\'affaires d\'exercer des fonctions de régulation financière ?'
      ]
    },
    { id: 'youngLeaders', title: 'Programmes Young Leaders', icon: Users, color: '#B08B3D', summary: 'French-American Foundation (1981) et WEF Young Global Leaders (1992) — fabrique de réseaux',
      details: [
        'Promotion 1993 YGL : Merkel, Blair, Sarkozy, Orbán, Barroso, Gates — 10 ans après, ils dirigeaient leurs pays',
        'Macron : FAF Young Leader 2012 → Président 5 ans après ; YGL WEF 2016 → Président 1 an après',
        'Klaus Schwab (Harvard, 2017) : "Nous pénétrons les cabinets des gouvernements à travers le monde"',
        'Artistes et célébrités comme relais d\'influence : Bono (1993), Shakira (2008), DiCaprio (2008) — lien jamais mentionné dans les médias',
        'Héritiers sélectionnés : Chelsea Clinton (2013), Ivanka Trump (2015), Nathaniel Rothschild (2005), Alexander Soros (2018)',
        'Gabriel Attal : YGL 2020 → Premier ministre 2024'
      ],
      questions: [
        'Ces programmes créent-ils, intentionnellement ou non, une classe dirigeante supranationale ?',
        'Faut-il exiger la transparence sur la participation à ces programmes pour tout candidat à une fonction publique ?',
        'La sélection précoce des "talents" constitue-t-elle un contournement de la démocratie ?'
      ]
    },
    { id: 'reseaux', title: 'Réseaux transnationaux', icon: Share2, color: '#A0751A', summary: 'Bilderberg, Commission Trilatérale, Giving Pledge — opacité institutionnalisée',
      details: [
        'Bilderberg (depuis 1954) : 120-150 personnalités, hôtel secret, aucun CR officiel, aucun journaliste',
        'Règle de Chatham House : pas de révélation d\'identité — sanction sociale (exclusion du réseau), pas juridique',
        'Giving Pledge : signataires originaux sont devenus 166% plus riches depuis leur signature (IPS, 2025)',
        '~80% des dons identifiables vont vers des fondations privées contrôlées par les donateurs eux-mêmes',
        'Elon Musk : YGL 2008 retiré de la liste officielle — critique virulente du WEF mais interviewé à Davos 2026 par Larry Fink (BlackRock)',
        'Ces forums fonctionneraient moins comme espaces de réflexion que comme distributeurs d\'éléments de langage'
      ],
      questions: [
        'Comment encadrer la participation à des réseaux transnationaux non démocratiques comme Bilderberg ou la Commission Trilatérale ?',
        'S\'agit-il d\'une opposition contrôlée ou de vrais dissidents quand des membres critiquent publiquement ces réseaux ?',
        'Comment garantir la transparence sur le financement de ces programmes — qui paie pour former nos dirigeants ?'
      ]
    },
    { id: 'montchalin', title: 'Cas Montchalin & Verrouillage 2027', icon: Lock, color: '#835C07', summary: 'Pantouflage triangulaire : privé → public → institution de contrôle',
      details: [
        'HEC/Harvard → BNP/AXA (lobbying) → députée LREM → Young Leader FAF 2018 → YGL WEF 2021 → ministre → Cour des comptes (irrévocable, potentiellement 28 ans)',
        'Conflit d\'intérêts direct dès avril : elle évaluera le budget 2025 qu\'elle a elle-même préparé comme ministre des Comptes publics',
        'Son mari : partner au BCG, principal bénéficiaire des marchés publics de conseil que la Cour est censée contrôler',
        'Richard Ferrand au Conseil constitutionnel jusqu\'en 2034 — validé à une voix près, 16 députés RN se sont abstenus',
        'Villeroy de Galhau démissionne de la Banque de France le même jour → Macron nomme le successeur avant 2027',
        '4 institutions majeures de la République verrouillées dans la même fenêtre temporelle, toutes au-delà de 2027'
      ],
      questions: [
        'Faut-il interdire toute nomination aux postes clés dans les 12-18 derniers mois d\'un mandat présidentiel ?',
        'L\'irrévocabilité des postes institutionnels est-elle compatible avec la démocratie ?',
        'Le pantouflage triangulaire (privé → public → institution de contrôle) est-il couvert par les mesures du Projet ?'
      ]
    },
    { id: 'mesures', title: 'Mesures du Projet', icon: Scale, color: '#523F02', summary: 'Carence de 5 ans, démission définitive, transparence décennale, réforme des grands corps',
      details: [
        'Démission définitive du corps : fin de la "disponibilité" qui permet de partir puis revenir avec tous ses avantages',
        'Carence de 5 ans (vs 3 actuellement) — avec Montchalin, elle n\'aurait pu prendre ce poste avant 2031',
        'Congé républicain de 6 mois pour les salariés du privé : rendre la politique plus accessible pour les citoyens ordinaires',
        'Transparence décennale : passer d\'une "photo" à un "film" — voir les trajectoires, les enrichissements, les coïncidences',
        'Grands corps limités à 10 ans (au lieu d\'à vie), fusion ENM/INET/INSP, fusion AFA/MICAF/HATVP',
        'La stratégie de verrouillage avant 2027 aurait été structurellement impossible avec ces mesures'
      ],
      questions: [
        '5 ans de carence est-ce suffisant face à des réseaux qui opèrent sur des décennies ?',
        'Peut-on réguler un système quand les régulateurs en sont issus ?',
        'Le RIC et les citoyens tirés au sort suffisent-ils comme contre-pouvoir ?',
        'Faut-il différencier les délais selon le niveau de responsabilité (5 ans député, 7-10 ans ministre) ?'
      ]
    }
  ],
  contacts: [
    { name: 'HATVP', desc: 'Haute Autorité pour la Transparence de la Vie Publique', status: 'À réformer' },
    { name: 'Transparency International', desc: 'Rapports sur le lobbying et le pantouflage européen', status: 'Ressource' },
    { name: 'Legifrance', desc: 'Textes de loi et décrets sur les conflits d\'intérêts', status: 'À surveiller' },
    { name: 'Europa Lex', desc: 'Directives et textes européens en discussion', status: 'À surveiller' },
    { name: 'Institute for Policy Studies', desc: 'Rapport 2025 sur le Giving Pledge et les ultra-riches', status: 'Ressource' },
    { name: 'Internet Archive', desc: 'Archives des listes YGL et Bilderberg effacées', status: 'Outil' }
  ],
  idees: [
    'Déclaration obligatoire d\'appartenance aux programmes Young Leaders / Bilderberg pour tout candidat ou haut fonctionnaire',
    'Interdire toute nomination aux postes institutionnels clés dans les 12-18 derniers mois d\'un mandat présidentiel',
    'Mandats limités à 10 ans maximum pour tous les postes à la tête des institutions (Cour des comptes, Conseil d\'État, Banque de France, Conseil constitutionnel)',
    'Approbation parlementaire renforcée : majorité simple pour valider (et non 3/5e pour bloquer)',
    'Registre public des trajectoires des hauts fonctionnaires — accessible et lisible par tous',
    'Transparence des agendas ministériels pour rendre visibles les contacts avec les réseaux d\'influence',
    'Documenter le "pantouflage triangulaire" (privé → public → institution de contrôle) comme catégorie juridique spécifique'
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
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('r75-fontSize') || 'normal');
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  // ═══════════════════════════════════════════════════════════════════════════
  // EFFETS
  // ═══════════════════════════════════════════════════════════════════════════
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
      const match = dateStr.match(/(\d{1,2})\s+(\w+)\s+à\s+(\d{1,2})h/);
      if (match) {
        const moisFr = {
          'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
          'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
        };
        const jour = parseInt(match[1]);
        const mois = moisFr[match[2].toLowerCase()];
        const heure = parseInt(match[3]);
        const annee = 2026;
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
  // COULEURS — THÈME FIXE SOMBRE
  // ═══════════════════════════════════════════════════════════════════════════
  const colors = {
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
  };

  const ICON_COLOR = colors.primary;
  
  const textFont = "'Avenir', 'Avenir Next', -apple-system, BlinkMacSystemFont, sans-serif";
  const titleFont = "'Flamengo', Georgia, serif";

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
    const data = currentTheme === 'medias' ? mediasOligarchiques : currentTheme === 'pantouflage' ? pantouflage : violencesPolitiques;
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
          results.push({ sessionId, sessionLabel, theme: session.theme, type: "Angle d'action", typeIcon: 'check', content: p });
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
    const data = result.theme === 'medias' ? mediasOligarchiques : result.theme === 'pantouflage' ? pantouflage : violencesPolitiques;
    const sessionData = data[result.sessionId];
    if (sessionData) {
      setCurrentSection(Object.keys(sessionData.sections)[0]);
    }
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span style={{ background: 'rgba(238, 194, 29, 0.4)', borderRadius: '2px', padding: '0 2px' }}>
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
        fontFamily: titleFont,
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
    <svg width={size} height={size * 1.15} viewBox="0 0 100 115" style={{ filter: 'drop-shadow(0 0 20px rgba(238, 194, 29, 0.3))' }}>
      <defs>
        <linearGradient id="hexGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4d03f" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#d4a516" />
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
          boxShadow: isHovered && hover && onClick ? '0 20px 40px rgba(238, 194, 29, 0.15)' : 'none',
          ...customStyle
        }}
      >
        {children}
      </div>
    );
  };

  const AccessibilityControls = () => (
    <div style={{ position: 'fixed', top: '16px', right: '16px', display: 'flex', gap: '8px', zIndex: 100 }}>
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
                ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)'
                : 'transparent',
              border: 'none',
              color: fontSize === size ? '#111' : colors.primary,
              cursor: 'pointer',
              fontFamily: titleFont,
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
            fontFamily: titleFont
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
      
      <style>{`
        input::placeholder {
          color: ${colors.primary} !important;
          opacity: 0.8;
          font-family: 'Flamengo', Georgia, serif !important;
        }
      `}</style>
      
      {showSearchResults && searchResults.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px',
          background: 'rgba(17, 17, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '14px', overflow: 'hidden', zIndex: 100,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            padding: '10px 14px', borderBottom: `1px solid ${colors.cardBorder}`,
            fontSize: '11px', color: colors.textVeryMuted,
            fontFamily: titleFont,
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
                  <span style={{ fontSize: '10px', color: colors.primary, fontFamily: titleFont, textTransform: 'uppercase', letterSpacing: '0.03em' }}>{result.sessionLabel}</span>
                  <span style={{ fontSize: '9px', color: colors.textVeryMuted, padding: '2px 6px', background: colors.buttonBg, borderRadius: '8px' }}>{result.type}</span>
                </div>
                <div style={{ fontSize: '13px', color: colors.text, lineHeight: 1.4, fontFamily: textFont }}>{highlightMatch(result.content, searchQuery)}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {showSearchResults && searchQuery.length >= 2 && searchResults.length === 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '8px',
          background: 'rgba(17, 17, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '14px', padding: '16px', textAlign: 'center', zIndex: 100
        }}>
          <div style={{ marginBottom: '6px' }}><Search size={20} color={ICON_COLOR} style={{ opacity: 0.5 }} /></div>
          <div style={{ color: colors.textVeryMuted, fontSize: '13px', fontFamily: titleFont }}>Aucun résultat pour "{searchQuery}"</div>
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
    const violencesCount = sessionsConfig.violencesPolitiques.filter(s => s.available).length;

    return (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: colors.gradientOverlay, pointerEvents: 'none', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px' }}><HexLogo size={100} color={colors.primary} /></div>
            <h1 style={{
              fontFamily: titleFont,
              fontSize: `clamp(22px, 6vw, ${fs.large + 18}px)`,
              color: colors.primary,
              marginBottom: '8px',
              letterSpacing: '0.05em',
              textShadow: '0 2px 20px rgba(238, 194, 29, 0.3)'
            }}>RÉFLEXIONS AUTOUR DU PROJET</h1>
            <p style={{
              fontFamily: titleFont,
              fontSize: `clamp(20px, 4vw, ${fs.title}px)`,
              color: colors.primary,
              letterSpacing: '0.15em',
              marginBottom: '20px'
            }}>RUCHE 75 PARIS</p>
            <SearchBar />
          </header>

          {/* Prochaine session */}
          <GlassCard hover={false} style={{
            marginBottom: '40px',
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.12) 0%, rgba(238, 194, 29, 0.03) 100%)',
            border: '1px solid rgba(238, 194, 29, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Calendar size={32} color={ICON_COLOR} strokeWidth={1.5} />
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div style={{
                  fontFamily: titleFont,
                  fontSize: '11px',
                  color: colors.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '4px'
                }}>Prochaine session</div>
                <div style={{
                  fontFamily: titleFont,
                  fontSize: fs.base + 'px',
                  color: colors.primary,
                  marginBottom: '4px'
                }}>{prochaineSession.titre}</div>
                <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, fontFamily: textFont }}>{prochaineSession.date}</div>
                {(countdown.days > 0 || countdown.hours > 0 || countdown.minutes > 0) && (
                  <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} color={ICON_COLOR} />
                    <span style={{
                      fontFamily: textFont,
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

            <GlassCard onClick={() => goToTheme('violencesPolitiques')}>
              <div style={{ marginBottom: '16px' }}><ShieldAlert size={48} color={ICON_COLOR} strokeWidth={1.5} /></div>
              <h2 style={{ fontFamily: titleFont, fontSize: (fs.title - 4) + 'px', color: colors.primary, marginBottom: '12px' }}>Les violences politiques</h2>
              <p style={{ color: colors.textMuted, fontSize: fs.base + 'px', marginBottom: '16px', lineHeight: 1.6, fontFamily: textFont }}>Commissions d'enquête, impunité structurelle et réformes de la justice</p>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: colors.buttonBg, borderRadius: '20px', fontSize: (fs.base - 1) + 'px', color: colors.primary, fontFamily: textFont }}>{violencesCount} session{violencesCount > 1 ? 's' : ''}</div>
              <div style={{ position: 'absolute', right: '24px', bottom: '24px', color: colors.textVeryMuted }}><ArrowRight size={24} /></div>
            </GlassCard>
            
            <GlassCard onClick={() => goToTheme('pantouflage')}>
              <div style={{ marginBottom: '16px' }}><Briefcase size={48} color={ICON_COLOR} strokeWidth={1.5} /></div>
              <h2 style={{ fontFamily: titleFont, fontSize: (fs.title - 4) + 'px', color: colors.primary, marginBottom: '12px' }}>Le pantouflage</h2>
              <p style={{ color: colors.textMuted, fontSize: fs.base + 'px', marginBottom: '16px', lineHeight: 1.6, fontFamily: textFont }}>Les allers-retours entre fonction publique et secteur privé</p>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: colors.buttonBg, borderRadius: '20px', fontSize: (fs.base - 1) + 'px', color: colors.primary, fontFamily: textFont }}>{pantouflageCount} session{pantouflageCount > 1 ? 's' : ''}</div>
              <div style={{ position: 'absolute', right: '24px', bottom: '24px', color: colors.textVeryMuted }}><ArrowRight size={24} /></div>
            </GlassCard>

            <GlassCard onClick={() => goToTheme('medias')}>
              <div style={{ marginBottom: '16px' }}><Tv size={48} color={ICON_COLOR} strokeWidth={1.5} /></div>
              <h2 style={{ fontFamily: titleFont, fontSize: (fs.title - 4) + 'px', color: colors.primary, marginBottom: '12px' }}>Les médias oligarchiques</h2>
              <p style={{ color: colors.textMuted, fontSize: fs.base + 'px', marginBottom: '16px', lineHeight: 1.6, fontFamily: textFont }}>Expropriation des médias oligarchiques et transformation en SCOP</p>
              <div style={{ display: 'inline-block', padding: '6px 16px', background: colors.buttonBg, borderRadius: '20px', fontSize: (fs.base - 1) + 'px', color: colors.primary, fontFamily: textFont }}>{mediasCount} session{mediasCount > 1 ? 's' : ''}</div>
              <div style={{ position: 'absolute', right: '24px', bottom: '24px', color: colors.textVeryMuted }}><ArrowRight size={24} /></div>
            </GlassCard>
            
          </div>

          {/* Bouton Projet */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowProjet(true)}
              style={{
                background: 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)',
                border: 'none',
                borderRadius: '30px',
                padding: '16px 32px',
                color: '#111',
                fontFamily: titleFont,
                fontSize: fs.base + 'px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(238, 194, 29, 0.3)'
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
            color: colors.textVeryMuted,
            fontFamily: textFont
          }}>
            <p>Butiner notre futur ensemble, abeille par abeille, réflexion après réflexion...</p>
            <p style={{ marginTop: '8px' }}>
              Sessions : <strong style={{ color: colors.primary }}>Mercredis 18h</strong>
            </p>
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
    const isViolences = currentTheme === 'violencesPolitiques';
    const sessions = isMedias ? sessionsConfig.medias : isViolences ? sessionsConfig.violencesPolitiques : sessionsConfig.pantouflage;
    const historique = isMedias ? sessionsHistorique.medias : isViolences ? sessionsHistorique.violencesPolitiques : sessionsHistorique.pantouflage;
    const themeTitle = isMedias ? "Les médias oligarchiques" : isViolences ? "Les violences politiques" : "Le pantouflage";
    const ThemeIcon = isMedias ? Tv : isViolences ? ShieldAlert : Briefcase;

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
              fontFamily: titleFont,
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
              fontFamily: titleFont,
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
            fontFamily: titleFont,
            fontSize: `clamp(24px, 5vw, ${fs.large + 12}px)`,
            color: colors.primary,
            marginBottom: '8px'
          }}>{themeTitle}</h1>
          <p style={{
            fontFamily: textFont,
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
              fontFamily: titleFont,
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
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textVeryMuted, marginBottom: '4px', fontFamily: textFont }}>{session.date}</div>
                  <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '2px' }}>Session #{session.numero}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{session.titre}</div>
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
              <div style={{ fontSize: fs.title + 'px', fontFamily: titleFont, color: colors.primary, marginBottom: '12px' }}>
                0{idx + (isMedias ? 1 : isViolences ? 7 : 4)}
              </div>
              <h3 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{session.titre}</h3>
              <p style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{session.date}</p>
              {!session.available && (
                <div style={{ marginTop: '12px', fontSize: (fs.base - 2) + 'px', color: colors.text, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: textFont }}>
                  <Lock size={14} color={colors.text} /> Bientôt disponible
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Dossier de synthèse (médias et pantouflage) */}
        {(currentTheme === 'medias' || currentTheme === 'pantouflage') && (
          <div style={{ marginTop: '32px' }}>
            <GlassCard
              onClick={() => setShowDossierSynthese(true)}
              style={{
                background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
                border: '1px solid rgba(238, 194, 29, 0.3)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontFamily: titleFont, fontSize: (fs.title - 2) + 'px', color: colors.primary, marginBottom: '8px' }}>Dossier de synthèse</h3>
              <p style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '12px', fontFamily: textFont }}>Cartographie interactive des enjeux, questions ouvertes et angles d'action</p>
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                background: colors.buttonBgHover,
                borderRadius: '20px',
                fontFamily: titleFont,
                fontSize: '11px',
                color: colors.primary
              }}>{currentTheme === 'medias' ? 'Sessions #001 → #003' : 'Sessions #004 → #006'}</div>
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
    const data = currentTheme === 'medias' ? mediasOligarchiques : currentTheme === 'pantouflage' ? pantouflage : violencesPolitiques;
    const sessionData = data[currentSession];
    if (!sessionData) return null;

    const sections = Object.keys(sessionData.sections);
    const allSections = sections;
    const sectionData = sessionData.sections[currentSection];

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
            fontFamily: titleFont,
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
          background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
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
            marginBottom: '12px',
            fontFamily: textFont
          }}>SESSION {currentSession.replace('session', '')}</div>
          <h1 style={{
            fontFamily: titleFont,
            fontSize: `clamp(24px, 5vw, ${fs.large + 8}px)`,
            color: colors.primary,
            marginBottom: '16px'
          }}>{sessionData.title}</h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>
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
            const label = sessionData.sections[key]?.title || key;
            const isActive = currentSection === key;
            
            return (
              <button
                key={key}
                onClick={() => setCurrentSection(key)}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)'
                    : 'transparent',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '10px 16px',
                  color: isActive ? '#111' : colors.primary,
                  cursor: 'pointer',
                  fontFamily: titleFont,
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
        {sectionData ? (
          <GlassCard hover={false} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontFamily: titleFont, fontSize: fs.title + 'px', color: colors.primary, marginBottom: '24px' }}>{sectionData.title}</h2>
            {renderSectionContent(sectionData.content)}
          </GlassCard>
        ) : null}

        {/* Discord CTA */}
        <GlassCard hover={false} style={{
          background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.15) 0%, rgba(88, 101, 242, 0.05) 100%)',
          border: '1px solid rgba(88, 101, 242, 0.3)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontFamily: titleFont, fontSize: (fs.title - 4) + 'px', color: '#7289da', marginBottom: '8px' }}>Une idée, une question?</h3>
          <p style={{ fontFamily: textFont, fontSize: (fs.base - 2) + 'px', color: '#7289da', marginBottom: '20px', lineHeight: 1.6 }}>
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
              fontFamily: titleFont,
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
  const renderDossierSynthese = () => {
    const isPantouflage = currentTheme === 'pantouflage';
    const synthData = isPantouflage ? dossierSynthesePantouflageData : dossierSyntheseData;
    const synthTitle = isPantouflage ? 'Le pantouflage & les réseaux d\'élites' : 'Expropriation des médias oligarchiques';
    const synthSubtitle = isPantouflage ? 'Synthèse des sessions #004, #005, #006 — Ruche 75' : 'Synthèse des sessions #001, #002, #003 — Ruche 75';
    const actionsTitle = isPantouflage ? 'Ressources & références' : 'Modèles à explorer';

    return (
    <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Bouton retour */}
      <button
        onClick={() => { setShowDossierSynthese(false); setSyntheseView('carte'); setActiveSyntheseTheme(null); }}
        style={{
          background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '12px',
          padding: '10px 20px',
          fontFamily: titleFont,
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
        background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
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
          fontFamily: titleFont,
          fontSize: (fs.base - 2) + 'px',
          color: colors.primary,
          marginBottom: '12px'
        }}>DOSSIER DE SYNTHÈSE GLOBAL</div>
        <h1 style={{
          fontFamily: titleFont,
          fontSize: `clamp(22px, 5vw, ${fs.large + 8}px)`,
          color: colors.primary,
          marginBottom: '8px'
        }}>{synthTitle}</h1>
        <p style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{synthSubtitle}</p>
      </header>

      {/* Navigation tabs */}
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
        ].map(({ key, label, icon: IconComp }) => {
          const isActive = syntheseView === key;
          return (
            <button
              key={key}
              onClick={() => { setSyntheseView(key); setActiveSyntheseTheme(null); }}
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)'
                  : colors.buttonBg,
                border: 'none',
                borderRadius: '12px',
                padding: '10px 20px',
                color: isActive ? '#111' : colors.text,
                cursor: 'pointer',
                fontFamily: titleFont,
                fontSize: (fs.base - 2) + 'px',
                fontWeight: isActive ? '600' : '400',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <IconComp size={16} color={isActive ? '#111' : colors.text} />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Vue Carte */}
      {syntheseView === 'carte' && (
        <GlassCard hover={false} style={{ marginBottom: '24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: titleFont, fontSize: (fs.title - 2) + 'px', color: colors.primary, marginBottom: '16px' }}>
            Cartographie des enjeux
          </h2>
          <p style={{ color: colors.text, fontSize: fs.base + 'px', marginBottom: '24px', fontFamily: textFont }}>
            Cliquez sur "Thèmes" pour explorer chaque sujet en détail
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {synthData.themes.map(theme => {
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
                  <IconComp size={16} color={theme.color} />
                  <span style={{ fontSize: (fs.base - 2) + 'px', color: theme.color, fontFamily: titleFont }}>{theme.title}</span>
                </div>
              );
            })}
          </div>
        </GlassCard>
      )}

      {/* Vue Thèmes */}
      {syntheseView === 'themes' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {synthData.themes.map(theme => {
            const IconComp = theme.icon;
            const themeColor = theme.color;
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
                  fontFamily: titleFont,
                  fontSize: fs.base + 'px',
                  color: themeColor,
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <IconComp size={20} color={themeColor} />
                  {theme.title}
                </h3>
                <p style={{ fontSize: (fs.base - 2) + 'px', color: colors.text, lineHeight: 1.5, fontFamily: textFont }}>{theme.summary}</p>
                
                {isExpanded && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${colors.cardBorder}` }}>
                    <p style={{
                      fontSize: '12px',
                      fontFamily: titleFont,
                      color: themeColor,
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
                        borderLeft: `2px solid ${colors.cardBorder}`,
                        fontFamily: textFont
                      }}>{d}</div>
                    ))}
                    <p style={{
                      fontSize: '12px',
                      fontFamily: titleFont,
                      color: themeColor,
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
                        marginBottom: '6px',
                        fontFamily: textFont
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
          <h2 style={{ fontFamily: titleFont, fontSize: (fs.title - 4) + 'px', color: colors.primary, marginBottom: '20px' }}>
            {actionsTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', marginBottom: '24px' }}>
            {synthData.contacts.map((c, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: colors.buttonBg,
                borderRadius: '12px',
                padding: '14px'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: titleFont, color: '#EEC21D', fontSize: (fs.base - 1) + 'px', marginBottom: '4px' }}>{c.name}</div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.primary, fontFamily: textFont }}>{c.desc}</div>
                </div>
                <span style={{
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                  background: colors.buttonBgHover,
                  color: colors.primary,
                  fontFamily: textFont
                }}>{c.status}</span>
              </div>
            ))}
          </div>
          
          <h3 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', marginTop: '24px' }}>
            Idées à creuser
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {synthData.idees.map((idee, i) => (
              <div key={i} style={{
                background: colors.buttonBg,
                borderLeft: `3px solid ${colors.primary}`,
                borderRadius: '0 10px 10px 0',
                padding: '12px 16px',
                color: colors.text,
                fontSize: (fs.base - 2) + 'px',
                fontFamily: textFont
              }}>{idee}</div>
            ))}
          </div>
        </GlassCard>
      )}
    </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDU - CONTENU DE SECTION
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
      return <p key={key} style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item}</p>;
    }

    if ((item.type === 'definition' && item.term) || (item.term && item.meaning)) {
      return (
        <div key={key} style={{
          background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
          borderLeft: `4px solid ${colors.primary}`,
          borderRadius: '0 16px 16px 0',
          padding: '20px 24px'
        }}>
          <div style={{ fontFamily: titleFont, fontSize: fs.title + 'px', color: colors.primary, marginBottom: '8px' }}>{item.term}</div>
          {item.etymology && <div style={{ color: colors.textMuted, fontSize: fs.base + 'px', fontStyle: 'italic', marginBottom: '8px', fontFamily: textFont }}>{item.etymology}</div>}
          <div style={{ color: '#fff', fontSize: fs.base + 'px', fontFamily: textFont }}>{item.meaning}</div>
          {item.principes && (
            <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
              {item.principes.map((p, i) => (
                <li key={i} style={{ color: colors.textMuted, marginBottom: '8px', lineHeight: 1.6, fontSize: fs.base + 'px', fontFamily: textFont }}>{p}</li>
              ))}
            </ul>
          )}
          {item.note && (
            <div style={{
              marginTop: '16px', padding: '12px', background: colors.buttonBg,
              borderRadius: '10px', fontSize: fs.base + 'px', color: colors.primary,
              display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: textFont
            }}>
              <Paperclip size={16} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              {item.note}
            </div>
          )}
        </div>
      );
    }

    if (item.type === 'definition' && item.origine && item.terminologie) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)',
            borderLeft: `4px solid ${colors.primary}`,
            borderRadius: '0 16px 16px 0',
            padding: '20px 24px'
          }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <History size={18} color={ICON_COLOR} /> Origine historique
            </div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}><strong>Date :</strong> {item.origine.date}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}><strong>Contexte :</strong> {item.origine.contexte}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}><strong>École :</strong> {item.origine.ecole}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            {item.terminologie.map((t, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{t.terme}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{t.signification}</div>
              </div>
            ))}
          </div>
          {item.remboursement && (
            <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Coins size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.remboursement}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.numero !== undefined) {
      return (
        <div key={key} style={{
          display: 'flex', gap: '16px', background: colors.buttonBg,
          border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px', alignItems: 'flex-start'
        }}>
          <div style={{
            width: '40px', height: '40px', background: colors.buttonBgHover, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: titleFont, fontSize: (fs.title - 4) + 'px', color: colors.primary, flexShrink: 0
          }}>{item.numero}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '6px' }}>{item.titre}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, marginBottom: '6px', fontFamily: textFont }}>{item.description}</div>
            {item.page && (
              <div style={{ fontSize: fs.base + 'px', color: colors.primary, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: textFont }}>
                <FileText size={14} color={ICON_COLOR} /> {item.page}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (item.icon && item.name && item.detail) {
      return (
        <div key={key} style={{
          background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`,
          borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px'
        }}>
          <span style={{ fontSize: '24px' }}>{item.icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '4px' }}>{item.name}</div>
            <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.detail}</div>
          </div>
        </div>
      );
    }

    if (item.type === 'comparaison' && item.elements) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {item.elements.map((el, i) => (
            <div key={i} style={{
              background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`,
              borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px'
            }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{el.label}</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{el.value}</div>
            </div>
          ))}
        </div>
      );
    }

    if (item.stat && item.citation && item.exemples) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
            borderRadius: '16px', padding: '24px', textAlign: 'center'
          }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.large + 8) + 'px', color: colors.primary, marginBottom: '8px' }}>{item.stat.number}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{item.stat.label}</div>
          </div>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '20px' }}>
            <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>« {item.citation.texte} »</p>
            <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px', fontFamily: textFont }}>— {item.citation.source}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{ex.nom}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{ex.detail}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (item.type === 'stat' && item.number) {
      return (
        <div key={key} style={{
          background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
          borderRadius: '16px', padding: '24px', textAlign: 'center'
        }}>
          <div style={{ fontFamily: titleFont, fontSize: (fs.large + 16) + 'px', color: colors.primary, marginBottom: '8px' }}>{item.number}</div>
          <div style={{ fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', marginBottom: '8px', fontFamily: textFont }}>{item.label}</div>
          {item.detail && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{item.detail}</div>}
        </div>
      );
    }

    if (item.explication && item.versants) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.explication}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {item.versants.map((v, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{v.titre}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{v.detail}</div>
              </div>
            ))}
          </div>
          {item.insight && (
            <div style={{
              background: 'rgba(238, 194, 29, 0.1)',
              borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px'
            }}>
              <Lightbulb size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.insight}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.probleme && item.exemples && item.proposition) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.probleme}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', color: colors.text, fontSize: (fs.base - 1) + 'px', fontFamily: textFont }}>{ex}</div>
            ))}
          </div>
          <div style={{ background: 'rgba(68, 112, 29, 0.15)', border: '1px solid rgba(68, 112, 29, 0.3)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <CheckCircle size={20} color="#44701D" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}><strong>Proposition :</strong> {item.proposition}</div>
          </div>
          {item.reference && (
            <div style={{ background: colors.buttonBg, borderRadius: '10px', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.textMuted, display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: textFont }}>
              <FileText size={16} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              {item.reference}
            </div>
          )}
        </div>
      );
    }

    if (item.nom && item.modele && item.resultat) {
      return (
        <div key={key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{item.nom}</div>
          <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, marginBottom: '6px', fontFamily: textFont }}><strong>Modèle :</strong> {item.modele}</div>
          <div style={{ fontSize: (fs.base - 1) + 'px', color: '#44701D', fontFamily: textFont }}>✓ {item.resultat}</div>
        </div>
      );
    }

    if (item.avantages && item.questions) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h4 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#5F7E43', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={18} color="#5F7E43" /> Avantages
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.avantages.map((av, i) => (
                <div key={i} style={{ background: 'rgba(95, 126, 67, 0.1)', border: '1px solid rgba(95, 126, 67, 0.2)', borderRadius: '10px', padding: '12px 16px', color: '#5F7E43', fontSize: fs.base + 'px', fontFamily: textFont }}>{av}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={18} color={colors.primary} /> Questions ouvertes
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.questions.map((q, i) => (
                <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '10px', padding: '12px 16px', color: colors.primary, fontSize: fs.base + 'px', fontFamily: textFont }}>{q}</div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.name && item.medias) {
      return (
        <div key={key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{item.name}</div>
          <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.medias}</div>
        </div>
      );
    }

    if (item.titre && item.detail && !item.numero) {
      return (
        <div key={key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontWeight: '600', color: '#fff', marginBottom: '6px', fontSize: fs.base + 'px', fontFamily: textFont }}>{item.titre}</div>
          <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{item.detail}</div>
        </div>
      );
    }

    if (item.principal && item.autres) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.title + 'px', color: colors.primary, marginBottom: '16px' }}>{item.principal.nom}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.principal.parcours.map((p, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 12px',
                  background: p.type === 'public' ? 'rgba(59, 130, 246, 0.1)' : p.type === 'privé' ? 'rgba(239, 68, 68, 0.1)' : colors.buttonBg,
                  borderRadius: '8px',
                  borderLeft: `3px solid ${p.type === 'public' ? '#3b82f6' : p.type === 'privé' ? '#ef4444' : colors.primary}`
                }}>
                  <span style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, minWidth: '80px', fontFamily: textFont }}>{p.periode}</span>
                  <span style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{p.poste}</span>
                  <span style={{
                    marginLeft: 'auto', fontSize: '10px', padding: '2px 8px', borderRadius: '10px',
                    background: p.type === 'public' ? 'rgba(59, 130, 246, 0.2)' : p.type === 'privé' ? 'rgba(239, 68, 68, 0.2)' : colors.buttonBgHover,
                    color: p.type === 'public' ? '#3b82f6' : p.type === 'privé' ? '#ef4444' : colors.primary,
                    textTransform: 'uppercase', fontFamily: textFont
                  }}>{p.type}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Autres exemples</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {item.autres.map((a, i) => (
                <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{a.nom}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{a.detail}</div>
                </div>
              ))}
            </div>
          </div>
          {item.stat && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.large + 8) + 'px', color: '#ef4444', marginBottom: '8px' }}>{item.stat.number}</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{item.stat.label}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.exemples && item.stat && item.stat.source) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{ex.nom}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{ex.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '8px', fontFamily: textFont }}>{item.stat.chiffre}</div>
            <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>— {item.stat.source}</div>
          </div>
        </div>
      );
    }

    if (item.intro && item.exemples && item.mondial) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>
          <div>
            <h4 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} color={ICON_COLOR} /> Exemples américains
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {item.exemples.map((ex, i) => (
                <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                  {ex.nom && (
                    <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', paddingBottom: '8px', borderBottom: `1px solid ${colors.cardBorder}` }}>{ex.nom}</div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '12px', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, marginBottom: '2px', fontFamily: textFont }}>Avant</div>
                      <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{ex.avant}</div>
                    </div>
                    <ArrowRight size={16} color={colors.textVeryMuted} />
                    <div>
                      <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, marginBottom: '2px', fontFamily: textFont }}>Après</div>
                      <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{ex.apres}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={18} color={ICON_COLOR} /> Influence mondiale
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {item.mondial.map((m, i) => (
                <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontSize: (fs.base - 1) + 'px', color: colors.primary, fontWeight: '600', fontFamily: textFont }}>{m.nom}</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', background: colors.buttonBgHover, borderRadius: '10px', color: colors.textMuted, fontFamily: textFont }}>{m.pays}</span>
                  </div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.concept && item.citation && item.programmes) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.concept}</p>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '20px' }}>
            <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>« {item.citation.texte} »</p>
            <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px', fontFamily: textFont }}>— {item.citation.auteur}</p>
            {item.citation.source && <p style={{ color: colors.textVeryMuted, fontSize: (fs.base - 3) + 'px', marginTop: '4px', fontFamily: textFont }}>{item.citation.source}</p>}
          </div>
          {item.programmes.map((prog, i) => (
            <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Award size={24} color={ICON_COLOR} />
                <div>
                  <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary }}>{prog.nom}</div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>Depuis {prog.depuis}</div>
                </div>
              </div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '12px', padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', fontFamily: textFont }}>{prog.format}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {prog.exemples.map((ex, j) => {
                  const isObject = typeof ex === 'object';
                  return (
                    <div key={j} style={{ padding: '6px 12px', background: colors.buttonBgHover, borderRadius: '20px', fontSize: (fs.base - 2) + 'px', color: colors.text, fontFamily: textFont }}>
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

    if (Array.isArray(item)) {
      return (
        <div key={key} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {item.map((sub, i) => renderContentItem(sub, `${key}-${i}`))}
        </div>
      );
    }

    if (item.intro && item.exemples && item.question) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{ex.nom}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{ex.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <HelpCircle size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.question}</div>
          </div>
        </div>
      );
    }

    if (item.constat && item.paradoxe && item.question) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.constat}</div>
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444', marginBottom: '8px' }}>Paradoxe</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.paradoxe}</div>
          </div>
          <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <HelpCircle size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.question}</div>
          </div>
        </div>
      );
    }

    if (item.definition && item.membres && item.realite && item.conclusion) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.definition}</p>
          <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Membres notables</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.membres}</div>
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#ef4444', marginBottom: '12px' }}>La réalité — {item.realite.source}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.realite.revelations.map((rev, i) => (
                <div key={i} style={{ background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>• {rev}</div>
              ))}
            </div>
          </div>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.conclusion}</div>
          </div>
        </div>
      );
    }

    if (item.nom && item.depuis && item.description && item.membres) {
      return (
        <div key={key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Users size={24} color={ICON_COLOR} />
            <div>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary }}>{item.nom}</div>
              <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>Depuis {item.depuis}</div>
            </div>
          </div>
          <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '8px', fontFamily: textFont }}>{item.description}</div>
          <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}><strong>Membres/Format :</strong> {item.membres}</div>
          {item.cout && <div style={{ marginTop: '8px', fontSize: (fs.base - 2) + 'px', color: colors.primary, fontFamily: textFont }}>💰 Coût : {item.cout}</div>}
        </div>
      );
    }

    if (item.origine && item.objectif && item.securite && item.timing) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Origine</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.origine}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
            <div style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Objectif officiel</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.objectif}</div>
            </div>
            <div style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Sécurité</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.securite}</div>
            </div>
          </div>
          {item.citation && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '20px' }}>
              <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>« {item.citation.texte} »</p>
              <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px', fontFamily: textFont }}>— {item.citation.auteur}</p>
              {item.citation.source && <p style={{ color: colors.textVeryMuted, fontSize: (fs.base - 3) + 'px', marginTop: '4px', fontFamily: textFont }}>{item.citation.source}</p>}
            </div>
          )}
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>📅 Timing troublant</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.timing.map((t, i) => (
                <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', fontFamily: textFont }}>
                  <span style={{ color: colors.primary, fontWeight: '600' }}>{t.nom}</span>
                  <span style={{ color: colors.textMuted }}> — {t.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.definition && item.regle && item.implication && item.sanction) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.definition}</p>
          <div style={{ background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>La règle</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, fontStyle: 'italic', lineHeight: 1.6, fontFamily: textFont }}>{item.regle}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { label: 'Implication', value: item.implication },
              { label: 'Argument officiel', value: item.argument },
              { label: 'Sanction', value: item.sanction }
            ].map((el, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>{el.label}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{el.value}</div>
              </div>
            ))}
          </div>
          {item.application && (
            <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Globe size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}><strong>Application :</strong> {item.application}</div>
            </div>
          )}
          {item.questionCle && (
            <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <HelpCircle size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.questionCle}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.probleme && item.hypothese && item.fonctionnement && item.observation) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.probleme}</p>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444', marginBottom: '8px' }}>Hypothèse</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.hypothese}</div>
          </div>
          <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Fonctionnement</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.fonctionnement}</div>
          </div>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Observation</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.observation}</div>
          </div>
          {item.questionCle && (
            <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <HelpCircle size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.questionCle}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.intro && (item.musique || item.cinema || item.sport)) {
      const categories = [
        { key: 'musique', label: '🎵 Musique', data: item.musique },
        { key: 'cinema', label: '🎬 Cinéma', data: item.cinema },
        { key: 'sport', label: '⚽ Sport', data: item.sport },
        { key: 'france', label: '🇫🇷 France', data: item.france }
      ].filter(c => c.data && c.data.length > 0);

      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>
          {categories.map((cat) => (
            <div key={cat.key}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>{cat.label}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cat.data.map((artiste, i) => (
                  <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary }}>{artiste.nom}</span>
                      <span style={{ fontSize: '11px', padding: '2px 8px', background: colors.buttonBgHover, borderRadius: '10px', color: colors.textMuted, fontFamily: textFont }}>YGL {artiste.annee}</span>
                    </div>
                    <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{artiste.suites}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (item.intro && item.exemples && item.paradoxe) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary }}>{ex.nom}</span>
                  <span style={{ fontSize: '10px', padding: '2px 8px', background: colors.buttonBgHover, borderRadius: '10px', color: colors.textMuted }}>{ex.annee}</span>
                </div>
                <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>{ex.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444', marginBottom: '8px' }}>Paradoxe</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.paradoxe}</div>
          </div>
        </div>
      );
    }

    if (item.raison && item.mecanisme && item.pattern) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Raison</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.raison}</div>
          </div>
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Mécanisme</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.mecanisme.map((m, i) => (
                <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{m}</div>
              ))}
            </div>
          </div>
          <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Pattern</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.pattern}</div>
          </div>
          {item.angleMort && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444', marginBottom: '8px' }}>Angle mort médiatique</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.angleMort}</div>
            </div>
          )}
          {item.enjeu && (
            <div style={{ background: 'rgba(68, 112, 29, 0.15)', border: '1px solid rgba(68, 112, 29, 0.3)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#44701D', marginBottom: '8px' }}>Enjeu</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.enjeu}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.niveaux && item.chevauchement) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.niveaux.map((n, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>{n.niveau}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{n.programmes}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Chevauchement des cercles</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.chevauchement}</div>
          </div>
          {item.exemple && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Exemple concret</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.exemple}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.constat && item.amont && item.questionsOuvertes) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', lineHeight: 1.6, fontFamily: textFont }}>{item.constat}</div>
          </div>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.amont}</p>
          {item.exempleAttal && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{item.exempleAttal}</div>
            </div>
          )}
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#9E876E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={18} color="#9E876E" /> Questions ouvertes
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.questionsOuvertes.map((q, i) => (
                <div key={i} style={{ background: 'rgba(158, 135, 110, 0.15)', border: '1px solid rgba(158, 135, 110, 0.3)', borderRadius: '10px', padding: '12px 16px', color: colors.text, fontSize: (fs.base - 1) + 'px', fontFamily: textFont }}>{q}</div>
              ))}
            </div>
          </div>
          {item.indicateur && (
            <div style={{ background: 'rgba(68, 112, 29, 0.15)', border: '1px solid rgba(68, 112, 29, 0.3)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#44701D', marginBottom: '8px' }}>💡 Indicateur</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.indicateur}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.type === 'mesure' && item.intitule) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)',
            borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 16px 16px 0', padding: '20px 24px'
          }}>
            {item.numero && (
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 2) + 'px', color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Mesure {item.numero}</div>
            )}
            <div style={{ fontFamily: titleFont, fontSize: fs.title + 'px', color: colors.primary, marginBottom: '8px' }}>{item.intitule}</div>
            {item.citation && <div style={{ fontStyle: 'italic', fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>« {item.citation} »</div>}
          </div>
          {item.actuel && (
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#ef4444', marginBottom: '12px' }}>⚠️ Ce qui existe aujourd'hui</div>
              {typeof item.actuel === 'string' ? (
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.actuel}</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.actuel.map((a, i) => (
                    <div key={i} style={{ background: 'rgba(239, 68, 68, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{a}</div>
                  ))}
                </div>
              )}
            </div>
          )}
          {item.projet && (
            <div style={{ background: 'rgba(68, 112, 29, 0.12)', border: '1px solid rgba(68, 112, 29, 0.25)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#44701D', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#44701D" /> Ce que ça change avec le Projet
              </div>
              {typeof item.projet === 'string' ? (
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.projet}</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.projet.map((p, i) => (
                    <div key={i} style={{ background: 'rgba(68, 112, 29, 0.1)', borderLeft: '3px solid #44701D', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{p}</div>
                  ))}
                </div>
              )}
            </div>
          )}
          {item.application && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>📌 Application concrète</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.application}</div>
            </div>
          )}
          {item.limites && (
            <div style={{ background: 'rgba(158, 135, 110, 0.12)', border: '1px solid rgba(158, 135, 110, 0.25)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#9E876E', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={16} color="#9E876E" /> Limites identifiées
              </div>
              {typeof item.limites === 'string' ? (
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.limites}</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {item.limites.map((l, i) => (
                    <div key={i} style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont, paddingLeft: '12px', borderLeft: '2px solid rgba(158, 135, 110, 0.3)' }}>{l}</div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    }

    if (item.type === 'parcours' && item.etapes) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {item.nom && <div style={{ fontFamily: titleFont, fontSize: fs.title + 'px', color: colors.primary }}>{item.nom}</div>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {item.etapes.map((etape, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px',
                background: etape.type === 'public' ? 'rgba(59, 130, 246, 0.1)' : etape.type === 'privé' ? 'rgba(239, 68, 68, 0.1)' : etape.type === 'réseau' ? 'rgba(168, 85, 247, 0.1)' : etape.type === 'institution' ? 'rgba(238, 194, 29, 0.1)' : colors.buttonBg,
                borderRadius: '10px',
                borderLeft: `3px solid ${etape.type === 'public' ? '#3b82f6' : etape.type === 'privé' ? '#ef4444' : etape.type === 'réseau' ? '#a855f7' : etape.type === 'institution' ? '#eec21d' : colors.primary}`
              }}>
                <span style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, minWidth: '80px', fontFamily: textFont }}>{etape.periode}</span>
                <span style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, flex: 1, fontFamily: textFont }}>{etape.poste}</span>
                <span style={{
                  fontSize: '10px', padding: '2px 8px', borderRadius: '10px',
                  background: etape.type === 'public' ? 'rgba(59, 130, 246, 0.2)' : etape.type === 'privé' ? 'rgba(239, 68, 68, 0.2)' : etape.type === 'réseau' ? 'rgba(168, 85, 247, 0.2)' : etape.type === 'institution' ? 'rgba(238, 194, 29, 0.2)' : colors.buttonBgHover,
                  color: etape.type === 'public' ? '#3b82f6' : etape.type === 'privé' ? '#ef4444' : etape.type === 'réseau' ? '#a855f7' : etape.type === 'institution' ? '#eec21d' : colors.primary,
                  textTransform: 'uppercase', fontFamily: textFont
                }}>{etape.type}</span>
              </div>
            ))}
          </div>
          {item.liens && (
            <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Paperclip size={18} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.liens}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.type === 'verrouillage' && item.institutions) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {item.intro && <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.institutions.map((inst, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px', display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary }}>{inst.institution}</div>
                  {inst.jusqua && (
                    <span style={{ fontSize: '11px', padding: '4px 10px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '20px', color: '#ef4444', fontFamily: textFont, fontWeight: '600' }}>→ {inst.jusqua}</span>
                  )}
                </div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}><strong>{inst.personne}</strong> — {inst.duree}</div>
                {inst.detail && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>{inst.detail}</div>}
              </div>
            ))}
          </div>
          {item.alerte && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.alerte}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.type === 'angle_mort') {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {item.titre && <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#9E876E', display: 'flex', alignItems: 'center', gap: '8px' }}><HelpCircle size={18} color="#9E876E" /> {item.titre}</div>}
          {item.contenu && (
            <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>
              {typeof item.contenu === 'string' ? item.contenu : item.contenu.map((c, i) => (
                <div key={i} style={{ background: 'rgba(158, 135, 110, 0.1)', borderRadius: '8px', padding: '10px 12px', marginBottom: '6px' }}>{c}</div>
              ))}
            </div>
          )}
          {item.propositions && (
            <div>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#5F7E43', marginBottom: '8px' }}>Propositions complémentaires</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.propositions.map((p, i) => (
                  <div key={i} style={{ background: 'rgba(95, 126, 67, 0.1)', borderLeft: '3px solid #5F7E43', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{p}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (item.intro && item.parcours && item.parcours.formation) {
      const p = item.parcours;
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={18} color={ICON_COLOR} /> Formation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {p.formation.map((f, i) => (
                <div key={i} style={{ background: 'rgba(168, 85, 247, 0.1)', borderLeft: '3px solid #a855f7', borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#a855f7' }}>{f.ecole}</div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>{f.type}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#ef4444', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Briefcase size={18} color="#ef4444" /> Secteur privé ({p.prive.periode})</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {p.prive.postes.map((poste, i) => (
                <div key={i} style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444', borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444' }}>{poste.entreprise}</div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>{poste.role}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#3b82f6', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Landmark size={18} color="#3b82f6" /> Parcours politique</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {p.politique.map((etape, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '10px 14px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px', borderLeft: '3px solid #3b82f6' }}>
                  <span style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, minWidth: '80px', fontFamily: textFont, flexShrink: 0 }}>{etape.periode}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{etape.poste}</div>
                    {etape.detail && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, marginTop: '4px', fontFamily: textFont }}>{etape.detail}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#a855f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={18} color="#a855f7" /> Réseaux</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {p.reseaux.map((r, i) => (
                <div key={i} style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#a855f7' }}>{r.programme}</span>
                    <span style={{ fontSize: '10px', padding: '2px 8px', background: 'rgba(168, 85, 247, 0.2)', borderRadius: '10px', color: '#a855f7', fontFamily: textFont }}>{r.annee}</span>
                  </div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>{r.detail}</div>
                </div>
              ))}
            </div>
          </div>
          {p.famille && (
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Users size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{p.famille}</div>
            </div>
          )}
          {item.paradoxe && (
            <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <HelpCircle size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.paradoxe}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.role && item.role.missions && item.irrevocabilite) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><Landmark size={18} color={ICON_COLOR} /> Missions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.role.missions.map((m, i) => (
                <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{m}</div>
              ))}
            </div>
            {item.role.enjeu && (
              <div style={{ marginTop: '12px', background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px', fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', fontFamily: textFont }}>{item.role.enjeu}</div>
            )}
          </div>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#ef4444', marginBottom: '16px' }}>⚠️ Irrévocabilité</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {[
                { label: 'Règle', value: item.irrevocabilite.regle },
                { label: 'Conséquence', value: item.irrevocabilite.consequence },
                { label: 'Perspective', value: item.irrevocabilite.perspective },
                { label: 'Précédent', value: item.irrevocabilite.precedent }
              ].filter(el => el.value).map((el, i) => (
                <div key={i} style={{ background: 'rgba(239, 68, 68, 0.08)', borderRadius: '10px', padding: '12px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.base - 2) + 'px', color: '#ef4444', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{el.label}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.5, fontFamily: textFont }}>{el.value}</div>
                </div>
              ))}
            </div>
          </div>
          {item.conflitInterets && (
            <div>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#9E876E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><HelpCircle size={18} color="#9E876E" /> Conflits d'intérêts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {item.conflitInterets.map((c, i) => (
                  <div key={i} style={{ background: 'rgba(158, 135, 110, 0.12)', border: '1px solid rgba(158, 135, 110, 0.25)', borderRadius: '10px', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{c}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (item.contexte && item.nominations && item.bilan) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.contexte}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {item.nominations.map((n, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
                <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '4px' }}>{n.nom}</div>
                {n.date && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, marginBottom: '12px', fontFamily: textFont }}>{n.date}</div>}
                {n.profil && <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '10px', fontFamily: textFont }}>{n.profil}</div>}
                {n.detail && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>{n.detail}</div>}
                {n.enjeu && <div style={{ background: 'rgba(239, 68, 68, 0.08)', borderLeft: '3px solid #ef4444', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont, marginBottom: n.lienLP ? '8px' : '0' }}>{n.enjeu}</div>}
                {n.lienLP && <div style={{ background: 'rgba(158, 135, 110, 0.12)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont, fontStyle: 'italic' }}>{n.lienLP}</div>}
              </div>
            ))}
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.04) 100%)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont, fontWeight: '600' }}>{item.bilan}</div>
          </div>
          {item.retour2032 && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>📅 Retour en 2032 ?</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.retour2032}</div>
            </div>
          )}
          {item.conclusion && (
            <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.7, fontFamily: textFont, fontStyle: 'italic' }}>{item.conclusion}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.aujourdhui && item.projet && !item.type) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#ef4444', marginBottom: '12px' }}>⚠️ Ce qui existe aujourd'hui</div>
            {item.aujourdhui.systeme && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.primary, fontWeight: '600', marginBottom: '8px', fontFamily: textFont }}>{item.aujourdhui.systeme}</div>}
            {item.aujourdhui.fonctionnement && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>{item.aujourdhui.fonctionnement}</div>}
            {item.aujourdhui.consequence && <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{item.aujourdhui.consequence}</div>}
            {item.aujourdhui.failles && item.aujourdhui.failles.map((f, i) => <div key={i} style={{ background: 'rgba(239, 68, 68, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}>{f}</div>)}
            {item.aujourdhui.problemes && item.aujourdhui.problemes.map((p, i) => <div key={i} style={{ background: 'rgba(239, 68, 68, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}>{p}</div>)}
          </div>
          <div style={{ background: 'rgba(68, 112, 29, 0.12)', border: '1px solid rgba(68, 112, 29, 0.25)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#44701D', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={18} color="#44701D" /> Ce que propose le Projet</div>
            {item.projet.principe && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont, fontWeight: '600' }}>{item.projet.principe}</div>}
            {item.projet.logique && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.projet.logique}</div>}
            {item.projet.duree && <div style={{ fontSize: (fs.base - 1) + 'px', color: '#44701D', fontWeight: '600', marginBottom: '12px', fontFamily: textFont }}>{item.projet.duree}</div>}
            {item.projet.effets && item.projet.effets.map((e, i) => <div key={i} style={{ background: 'rgba(68, 112, 29, 0.1)', borderLeft: '3px solid #44701D', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}>{e}</div>)}
            {item.projet.transparenceDecennale && (
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#44701D', marginBottom: '8px' }}>Transparence décennale</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontWeight: '600', marginBottom: '4px', fontFamily: textFont }}>{item.projet.transparenceDecennale.principe}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.projet.transparenceDecennale.effet}</div>
              </div>
            )}
            {item.projet.publicationRetroactive && <div style={{ background: 'rgba(68, 112, 29, 0.1)', borderLeft: '3px solid #44701D', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}><strong>Publication rétroactive :</strong> {item.projet.publicationRetroactive}</div>}
            {item.projet.refonteCommission && <div style={{ background: 'rgba(68, 112, 29, 0.1)', borderLeft: '3px solid #44701D', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}><strong>Refonte :</strong> {item.projet.refonteCommission}</div>}
          </div>
          {item.congeRepublicain && (
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.25)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#3b82f6', marginBottom: '8px' }}>🏛️ Congé républicain</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontWeight: '600', marginBottom: '4px', fontFamily: textFont }}>{item.congeRepublicain.principe}</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.congeRepublicain.effet}</div>
            </div>
          )}
          {item.applicationMontchalin && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>📌 Application au cas Montchalin</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.applicationMontchalin}</div>
            </div>
          )}
          {item.questionsOuvertes && (
            <div>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#9E876E', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><HelpCircle size={16} color="#9E876E" /> Questions ouvertes</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.questionsOuvertes.map((q, i) => (
                  <div key={i} style={{ background: 'rgba(158, 135, 110, 0.12)', border: '1px solid rgba(158, 135, 110, 0.2)', borderRadius: '10px', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{q}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (item.grandCorpsDecennaux && item.ouvertureAcces) {
      const subSections = [item.grandCorpsDecennaux, item.ouvertureAcces, item.fusionEcoles, item.fusionAntiCorruption].filter(Boolean);
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {subSections.map((sub, i) => (
            <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '16px' }}>{sub.titre}</div>
              {sub.aujourdhui && <div style={{ background: 'rgba(239, 68, 68, 0.08)', borderLeft: '3px solid #ef4444', borderRadius: '0 8px 8px 0', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '12px', fontFamily: textFont }}><span style={{ color: '#ef4444', fontWeight: '600' }}>Aujourd'hui :</span> {sub.aujourdhui}</div>}
              {sub.projet && <div style={{ background: 'rgba(68, 112, 29, 0.1)', borderLeft: '3px solid #44701D', borderRadius: '0 8px 8px 0', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: sub.effet || sub.applicationMontchalin ? '12px' : '0', fontFamily: textFont }}><span style={{ color: '#44701D', fontWeight: '600' }}>Projet :</span> {sub.projet}</div>}
              {sub.effet && <div style={{ background: colors.buttonBg, borderRadius: '8px', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.textMuted, marginBottom: sub.applicationMontchalin ? '12px' : '0', fontFamily: textFont, fontStyle: 'italic' }}>{sub.effet}</div>}
              {sub.applicationMontchalin && <div style={{ background: 'rgba(238, 194, 29, 0.08)', borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 8px 8px 0', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}><span style={{ color: colors.primary, fontWeight: '600' }}>Cas Montchalin :</span> {sub.applicationMontchalin}</div>}
            </div>
          ))}
        </div>
      );
    }

    if (item.reseauxTransnationaux && item.preSelectionExtraDemocratique) {
      const angles = [
        { key: 'reseauxTransnationaux', label: '🌐 Réseaux transnationaux', data: item.reseauxTransnationaux },
        { key: 'irrevocabilite', label: '🔒 Irrévocabilité', data: item.irrevocabilite },
        { key: 'preSelection', label: '🎯 Pré-sélection extra-démocratique', data: item.preSelectionExtraDemocratique },
        { key: 'medias', label: '📺 Médias', data: item.medias }
      ].filter(a => a.data);

      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {angles.map((angle) => (
            <div key={angle.key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#9E876E', marginBottom: '12px' }}>{angle.label}</div>
              {angle.data.probleme && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, marginBottom: '12px', fontFamily: textFont }}>{angle.data.probleme}</div>}
              {angle.data.illustration && <div style={{ background: 'rgba(239, 68, 68, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '12px', fontFamily: textFont }}>{angle.data.illustration}</div>}
              {angle.data.reponseProjet && <div style={{ background: 'rgba(68, 112, 29, 0.1)', borderLeft: '3px solid #44701D', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: angle.data.question ? '12px' : '0', fontFamily: textFont }}><span style={{ color: '#44701D', fontWeight: '600' }}>Réponse du Projet :</span> {angle.data.reponseProjet}</div>}
              {angle.data.propositions && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.base - 2) + 'px', color: '#5F7E43', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Propositions</div>
                  {angle.data.propositions.map((p, i) => (
                    <div key={i} style={{ background: 'rgba(95, 126, 67, 0.1)', borderLeft: '3px solid #5F7E43', borderRadius: '0 8px 8px 0', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{p}</div>
                  ))}
                </div>
              )}
              {angle.data.question && (
                <div style={{ background: 'rgba(158, 135, 110, 0.12)', borderRadius: '10px', padding: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <HelpCircle size={16} color="#9E876E" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontStyle: 'italic', fontFamily: textFont }}>{angle.data.question}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (item.bilan && item.mesuresProjet && item.objectif) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', lineHeight: 1.6, fontFamily: textFont }}>{item.bilan}</div>
          </div>
          <div style={{ background: 'rgba(68, 112, 29, 0.12)', border: '1px solid rgba(68, 112, 29, 0.25)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#44701D', marginBottom: '8px' }}>Mesures du Projet</div>
            <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.mesuresProjet}</div>
          </div>
          <div style={{ background: 'rgba(158, 135, 110, 0.12)', border: '1px solid rgba(158, 135, 110, 0.25)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#9E876E', marginBottom: '8px' }}>Limites identifiées</div>
            <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.limites}</div>
          </div>
          {item.actualite && (
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.actualite}</div>
            </div>
          )}
          <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.objectif}</div>
          </div>
          {item.prochaine && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>📅 Prochaine session</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{item.prochaine}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.intro && item.formes && item.objectifCommun) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {item.formes.map((f, i) => (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{f.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '4px' }}>{f.type}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{f.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.objectifCommun}</div>
          </div>
        </div>
      );
    }

    if (item.niveau && item.detail) {
      return (
        <div key={key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontWeight: '600', color: colors.primary, marginBottom: '6px', fontSize: fs.base + 'px', fontFamily: titleFont }}>{item.niveau}</div>
          <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{item.detail}</div>
        </div>
      );
    }

    if (item.limite && item.detail) {
      return (
        <div key={key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontWeight: '600', color: '#ef4444', marginBottom: '6px', fontSize: fs.base + 'px', fontFamily: titleFont }}>{item.limite}</div>
          <div style={{ fontSize: fs.base + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{item.detail}</div>
        </div>
      );
    }

    if (item.source && item.stat && !item.chiffre && !item.chiffres) {
      return (
        <div key={key} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}>{item.stat}</div>
          <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>— {item.source}</div>
        </div>
      );
    }

    if (item.intro && item.coteManifestants) {
      const statSections = [
        item.coteManifestants && { label: 'Côté manifestants', source: item.coteManifestants.source, chiffres: item.coteManifestants.chiffres },
        item.repressionJudiciaire && { label: 'Répression judiciaire', source: item.repressionJudiciaire.source, chiffres: item.repressionJudiciaire.chiffres },
        item.enquetesPolicieres && { label: 'Enquêtes policières', source: null, chiffres: item.enquetesPolicieres.chiffres }
      ].filter(Boolean);

      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.intro}</p>
          {statSections.map((section, i) => (
            <div key={i}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>
                {section.label}
                {section.source && <span style={{ fontSize: (fs.base - 3) + 'px', color: colors.textMuted, marginLeft: '8px', fontFamily: textFont }}>({section.source})</span>}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                {section.chiffres.map((c, j) => (
                  <div key={j} style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontFamily: titleFont, fontSize: (fs.large + 4) + 'px', color: '#ef4444', marginBottom: '4px' }}>{c.number}</div>
                    <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.text, fontFamily: textFont }}>{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {item.asymetrie && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: fs.base + 'px', color: '#ef4444', fontWeight: '600', lineHeight: 1.6, fontFamily: textFont }}>{item.asymetrie}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.contexte && item.chiffresGlobaux && item.journee1erDecembre) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.contexte}</p>
          {item.chiffresGlobaux.map((c, i) => (
            <div key={i} style={{ background: 'rgba(239, 68, 68, 0.12)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.large + 12) + 'px', color: '#ef4444', marginBottom: '4px' }}>{c.number}</div>
              <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{c.label}</div>
            </div>
          ))}
          <div style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '4px' }}>{item.journee1erDecembre.date}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginTop: '12px' }}>
              {item.journee1erDecembre.munitions.map((m, i) => (
                <div key={i} style={{ background: 'rgba(239, 68, 68, 0.08)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.title + 2) + 'px', color: '#ef4444' }}>{m.number}</div>
                  <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>{m.label}</div>
                </div>
              ))}
            </div>
            {item.journee1erDecembre.note && <div style={{ marginTop: '12px', fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontStyle: 'italic', fontFamily: textFont }}>{item.journee1erDecembre.note}</div>}
          </div>
          {item.alertes && <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.alertes}</p>}
          {item.lancet && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{item.lancet.source}</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.lancet.resultat}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.fondement && item.pouvoirsTheoriques) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Fondement juridique</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{item.fondement}</div>
          </div>
          <div>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Pouvoirs théoriques</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.pouvoirsTheoriques.map((p, i) => (
                <div key={i} style={{ background: 'rgba(68, 112, 29, 0.1)', borderLeft: '3px solid #44701D', borderRadius: '0 10px 10px 0', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{p}</div>
              ))}
            </div>
          </div>
          {item.droitOpposition && (
            <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Scale size={20} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{item.droitOpposition}</div>
            </div>
          )}
        </div>
      );
    }

    if (item.condamnation && item.synthese && (item.affaireBenalla || item.affaireMcKinsey)) {
      const affaires = [item.affaireBenalla, item.affaireMcKinsey].filter(Boolean);
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.large + 8) + 'px', color: '#ef4444', marginBottom: '8px' }}>{item.condamnation.nombre}</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, marginBottom: '8px', fontFamily: textFont }}>{item.condamnation.qui}</div>
            <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>— {item.condamnation.source}</div>
          </div>
          {affaires.map((affaire, i) => (
            <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
              {affaire.contexte && <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, marginBottom: '12px', fontFamily: textFont }}>{affaire.contexte}</div>}
              {affaire.resultat && <div style={{ background: 'rgba(239, 68, 68, 0.08)', borderLeft: '3px solid #ef4444', borderRadius: '0 8px 8px 0', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '8px', fontFamily: textFont }}>{affaire.resultat}</div>}
              {affaire.sources && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>Sources : {affaire.sources}</div>}
              {affaire.source && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontFamily: textFont }}>Source : {affaire.source}</div>}
            </div>
          ))}
          <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.synthese}</div>
          </div>
          {item.citationFondapol && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>« {item.citationFondapol.texte} »</p>
              <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px', fontFamily: textFont }}>— {item.citationFondapol.source}</p>
            </div>
          )}
        </div>
      );
    }

    if (item.creation && item.composition && item.citation) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.creation}</p>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, fontFamily: textFont }}>{item.composition}</div>
          </div>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
            <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>« {item.citation.texte} »</p>
            <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px', fontFamily: textFont }}>— {item.citation.auteur}</p>
          </div>
        </div>
      );
    }

    if (item.stats && item.decisions && item.synthese) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
            {item.stats.map((s, i) => (
              <div key={i} style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.large + 8) + 'px', color: '#ef4444' }}>{s.number}</div>
                <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.text, fontFamily: textFont }}>{s.label}</div>
              </div>
            ))}
          </div>
          {item.decisions.relaxes && (
            <div style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#ef4444', marginBottom: '12px' }}>Relaxes</div>
              {item.decisions.relaxes.map((r, i) => <div key={i} style={{ background: 'rgba(239, 68, 68, 0.06)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}>{r}</div>)}
            </div>
          )}
          {item.decisions.dispensesDePeine && (
            <div style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#9E876E', marginBottom: '12px' }}>Dispenses de peine</div>
              {item.decisions.dispensesDePeine.map((d, i) => <div key={i} style={{ background: 'rgba(158, 135, 110, 0.1)', borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}>{d}</div>)}
            </div>
          )}
          {item.decisions.condamnationsAvecSursis && (
            <div style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>Condamnations avec sursis</div>
              {item.decisions.condamnationsAvecSursis.map((c, i) => <div key={i} style={{ background: colors.buttonBgHover, borderRadius: '8px', padding: '10px 12px', fontSize: (fs.base - 1) + 'px', color: colors.text, marginBottom: '6px', fontFamily: textFont }}>{c}</div>)}
            </div>
          )}
          {item.covid && (
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444', marginBottom: '8px' }}>Covid — {item.covid.date}</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{item.covid.resultat}</div>
            </div>
          )}
          {item.paradoxe && <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.paradoxe}</p>}
          {item.casPasqua && <p style={{ color: colors.text, lineHeight: 1.7, fontSize: fs.base + 'px', fontFamily: textFont }}>{item.casPasqua}</p>}
          {item.citationLeGall && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <p style={{ fontStyle: 'italic', color: colors.text, fontSize: fs.base + 'px', lineHeight: 1.6, marginBottom: '8px', fontFamily: textFont }}>« {item.citationLeGall.texte} »</p>
              <p style={{ color: colors.primary, fontSize: (fs.base - 2) + 'px', fontFamily: textFont }}>— {item.citationLeGall.auteur}</p>
            </div>
          )}
          <div style={{ background: 'rgba(238, 194, 29, 0.1)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', lineHeight: 1.6, fontFamily: textFont }}>{item.synthese}</div>
          </div>
        </div>
      );
    }

    if (item.principe && !item.projet && !item.aujourdhui && !item.type) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'rgba(68, 112, 29, 0.12)', border: '1px solid rgba(68, 112, 29, 0.25)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#44701D', marginBottom: '8px' }}>Principe</div>
            <div style={{ fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.principe}</div>
          </div>
          {item.droitSpecial && <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}><div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Droit spécial</div><div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.droitSpecial}</div></div>}
          {item.comiteClemence && <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}><div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Comité de clémence</div><div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.comiteClemence}</div></div>}
          {item.cible && <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}><div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '8px' }}>Cible</div><div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.cible}</div></div>}
          {item.rattachement && <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}><div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{item.rattachement}</div></div>}
          {item.comparaison && <div style={{ background: 'rgba(239, 68, 68, 0.08)', borderLeft: '3px solid #ef4444', borderRadius: '0 10px 10px 0', padding: '12px 16px' }}><div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444', marginBottom: '6px' }}>Aujourd'hui</div><div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{item.comparaison}</div></div>}
          {item.effet && <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '16px' }}><div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.effet}</div></div>}
          {item.rappel && <p style={{ color: colors.textMuted, lineHeight: 1.7, fontSize: (fs.base - 1) + 'px', fontFamily: textFont }}>{item.rappel}</p>}
          {item.temoignage && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{item.temoignage.nom}</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontStyle: 'italic', fontFamily: textFont }}>{item.temoignage.detail}</div>
            </div>
          )}
          {item.page && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: textFont }}><FileText size={14} color={ICON_COLOR} /> {item.page}</div>}
        </div>
      );
    }

    if (item.enquetes && Array.isArray(item.enquetes)) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {item.enquetes.map((e, i) => (
            <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '14px 16px', fontSize: fs.base + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{e}</div>
          ))}
        </div>
      );
    }

    if (item.justice && item.interieur) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { label: '⚖️ Justice', data: item.justice, accentColor: '#3b82f6' },
            { label: '🛡️ Intérieur', data: item.interieur, accentColor: '#ef4444' }
          ].map((section, i) => (
            <div key={i}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>{section.label}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {section.data.map((r, j) => (
                  <div key={j} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: section.accentColor, marginBottom: '6px' }}>{r.mesure}</div>
                    <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{r.effet}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {item.pages && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: textFont }}><FileText size={14} color={ICON_COLOR} /> {item.pages}</div>}
        </div>
      );
    }

    if (item.giletsJaunes && item.commissionsEnquete && item.cjr) {
      const categories = Object.entries(item).filter(([_, v]) => Array.isArray(v));
      const catLabels = { giletsJaunes: 'Gilets jaunes', commissionsEnquete: "Commissions d'enquête", cjr: 'Cour de justice de la République', projet: 'Le Projet' };
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {categories.map(([catKey, sources]) => (
            <div key={catKey}>
              <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '10px' }}>{catLabels[catKey] || catKey}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {sources.map((s, i) => (
                  <div key={i} style={{ background: colors.buttonBg, borderRadius: '8px', padding: '10px 14px', fontSize: (fs.base - 2) + 'px', color: colors.textMuted, lineHeight: 1.5, fontFamily: textFont }}>{s}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (item.constat && item.commissions && item.reponseProjet) {
      const parts = [
        { text: item.constat, style: 'emphasis' },
        { text: item.commissions, style: 'alert' },
        { text: item.cjrBilan, style: 'alert' },
        { text: item.igpn, style: 'alert' },
        { text: item.reponseProjet, style: 'positive' },
        { text: item.prochaine, style: 'next' }
      ].filter(p => p.text);

      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {parts.map((p, i) => {
            if (p.style === 'emphasis') return <div key={i} style={{ background: 'rgba(238, 194, 29, 0.15)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}><div style={{ fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', lineHeight: 1.6, fontFamily: textFont }}>{p.text}</div></div>;
            if (p.style === 'alert') return <div key={i} style={{ background: 'rgba(239, 68, 68, 0.08)', borderLeft: '3px solid #ef4444', borderRadius: '0 10px 10px 0', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{p.text}</div>;
            if (p.style === 'positive') return <div key={i} style={{ background: 'rgba(68, 112, 29, 0.12)', border: '1px solid rgba(68, 112, 29, 0.25)', borderRadius: '12px', padding: '16px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{p.text}</div>;
            if (p.style === 'next') return <div key={i} style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}><div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>📅 Prochaine session</div><div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{p.text}</div></div>;
            return null;
          })}
        </div>
      );
    }

    // ─── SESSION 8 : Historical period block ───
    // { periode, intro, elements/moments, heritage/note }
    if (item.periode && (item.intro || item.moments || item.elements)) {
      const subItems = item.elements || item.moments || [];
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238,194,29,0.1) 0%, transparent 100%)', borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 16px 16px 0', padding: '16px 20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '8px' }}>{item.periode}</div>
            {item.intro && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.intro}</div>}
          </div>
          {item.probleme && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.probleme}</div>}
          {subItems.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {subItems.map((el, i) => (
                <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '16px' }}>
                  {el.titre && <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{el.titre}</div>}
                  {el.nom && <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{el.nom}</div>}
                  {el.contexte && <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{el.contexte}</div>}
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{el.detail}</div>
                </div>
              ))}
            </div>
          )}
          {item.comparaison && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {Object.entries(item.comparaison).map(([pays, detail], i) => (
                <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '14px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px', textTransform: 'capitalize' }}>{pays}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{detail}</div>
                </div>
              ))}
            </div>
          )}
          {item.mutations && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.mutations.map((m, i) => (
                <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{m}</div>
              ))}
            </div>
          )}
          {(item.heritage || item.note) && (
            <div style={{ background: 'rgba(238,194,29,0.08)', borderRadius: '12px', padding: '14px 16px', fontSize: (fs.base - 1) + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>
              {item.heritage || item.note}
            </div>
          )}
        </div>
      );
    }

    // ─── SESSION 8 : Insidious form block ───
    // { forme, periode, detail, continuite, echo, reference, exemples, lienProjet }
    if (item.forme && item.detail) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#ef4444', marginBottom: '4px' }}>{item.forme}</div>
            {item.periode && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, marginBottom: '8px', fontFamily: textFont }}>{item.periode}</div>}
            <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.detail}</div>
          </div>
          {item.exemple && (
            <div style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '12px 16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 2) + 'px', color: colors.primary, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Exemple</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.exemple}</div>
            </div>
          )}
          {(item.continuite || item.echo) && (
            <div style={{ background: 'rgba(238,194,29,0.08)', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <ArrowRight size={16} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{item.continuite || item.echo}</div>
            </div>
          )}
          {(item.reference || item.lienProjet) && (
            <div style={{ background: colors.buttonBg, borderRadius: '10px', padding: '10px 14px', fontSize: (fs.base - 2) + 'px', color: colors.textMuted, display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: textFont }}>
              <FileText size={14} color={ICON_COLOR} style={{ flexShrink: 0, marginTop: '2px' }} />
              {item.reference || item.lienProjet}
            </div>
          )}
        </div>
      );
    }

    // ─── SESSION 8 : Psychological mechanism block ───
    // { mecanisme, origine/reference, definition/detail, exemples, caracteristique/paliers/formes }
    if (item.mecanisme && (item.definition || item.formes || item.paliers)) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, transparent 100%)', borderLeft: '4px solid #a855f7', borderRadius: '0 16px 16px 0', padding: '16px 20px' }}>
            <div style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: '#a855f7', marginBottom: '8px' }}>{item.mecanisme}</div>
            {item.origine && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontStyle: 'italic', marginBottom: '8px', fontFamily: textFont }}>{item.origine}</div>}
            {item.reference && <div style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, fontStyle: 'italic', marginBottom: '8px', fontFamily: textFont }}>{item.reference}</div>}
            {item.definition && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.definition}</div>}
            {item.detail && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.detail}</div>}
          </div>
          {item.exemples && Array.isArray(item.exemples) && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.exemples.map((ex, i) => (
                <div key={i} style={{ background: 'rgba(168,85,247,0.08)', borderLeft: '3px solid rgba(168,85,247,0.4)', borderRadius: '0 10px 10px 0', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.5, fontFamily: textFont }}>{ex}</div>
              ))}
            </div>
          )}
          {item.formes && Array.isArray(item.formes) && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {item.formes.map((f, i) => (
                <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '14px' }}>
                  <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#a855f7', marginBottom: '6px' }}>{f.type}</div>
                  <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{f.detail}</div>
                </div>
              ))}
            </div>
          )}
          {item.caracteristique && (
            <div style={{ background: 'rgba(238,194,29,0.08)', borderRadius: '10px', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.primary, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.caracteristique}</div>
          )}
          {item.paliers && (
            <div style={{ background: colors.buttonBg, borderRadius: '12px', padding: '14px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.paliers}</div>
          )}
        </div>
      );
    }

    // ─── SESSION 8 : Systematic lie sections ───
    // { titre, evenements/detail/dynamiques/formes/exemples, continuite }
    if (item.titre && (item.evenements || item.dynamiques || (item.formes && !item.mecanisme))) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ fontFamily: titleFont, fontSize: (fs.base) + 'px', color: colors.primary, paddingBottom: '8px', borderBottom: `1px solid ${colors.cardBorder}` }}>{item.titre}</div>
          {item.detail && <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.detail}</div>}
          {item.evenements && item.evenements.map((ev, i) => (
            <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '14px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{ev.nom}</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{ev.detail}</div>
            </div>
          ))}
          {item.dynamiques && item.dynamiques.map((d, i) => (
            <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{d}</div>
          ))}
          {item.formes && Array.isArray(item.formes) && !item.mecanisme && item.formes.map((f, i) => (
            <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '14px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '6px' }}>{f.type}</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{f.detail}</div>
            </div>
          ))}
          {item.exemples && item.exemples.map((ex, i) => {
            if (ex.formule) return (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '4px' }}>{ex.formule}</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont }}>{ex.analyse}</div>
              </div>
            );
            if (ex.affirmation) return (
              <div key={i} style={{ background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#ef4444', marginBottom: '4px' }}>« {ex.affirmation} »</div>
                <div style={{ fontSize: (fs.base - 1) + 'px', color: '#44701D', lineHeight: 1.6, fontFamily: textFont }}>→ {ex.realite}</div>
              </div>
            );
            if (ex.sujet) return (
              <div key={i} style={{ background: colors.buttonBg, borderRadius: '10px', padding: '12px 14px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: (fs.base - 2) + 'px', color: colors.textMuted, minWidth: '80px', fontFamily: textFont }}>{ex.sujet}</span>
                <span style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontStyle: 'italic', fontFamily: textFont }}>{ex.formule || ex.realite}</span>
              </div>
            );
            return <div key={i} style={{ background: colors.buttonBg, borderLeft: `3px solid ${colors.primary}`, borderRadius: '0 10px 10px 0', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{typeof ex === 'string' ? ex : JSON.stringify(ex)}</div>;
          })}
          {item.continuite && <div style={{ background: 'rgba(238,194,29,0.08)', borderRadius: '10px', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.textMuted, lineHeight: 1.6, fontFamily: textFont, fontStyle: 'italic' }}>{item.continuite}</div>}
          {item.definition && <div style={{ background: 'rgba(168,85,247,0.08)', borderLeft: '3px solid rgba(168,85,247,0.4)', borderRadius: '0 10px 10px 0', padding: '12px 16px', fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.6, fontFamily: textFont }}>{item.definition}</div>}
          {item.efficacite && <div style={{ background: colors.buttonBg, borderRadius: '10px', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.textMuted, fontFamily: textFont }}>{item.efficacite}</div>}
        </div>
      );
    }

    // ─── SESSION 8 : Conclusion block (bilan + constante + enjeu) ───
    if (item.bilan && item.constante && item.enjeu) {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238,194,29,0.15) 0%, rgba(238,194,29,0.05) 100%)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, fontWeight: '600', lineHeight: 1.6, fontFamily: textFont }}>{item.bilan}</div>
          </div>
          <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '16px' }}>
            <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, lineHeight: 1.7, fontFamily: textFont }}>{item.constante}</div>
          </div>
          <div style={{ background: 'rgba(238,194,29,0.08)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: fs.base + 'px', color: colors.primary, lineHeight: 1.7, fontFamily: textFont, fontStyle: 'italic' }}>{item.enjeu}</div>
          </div>
          {item.anglesNonCouvertsByProjet && (
            <div>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: '#9E876E', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={16} color="#9E876E" /> Angles non couverts par le Projet
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {item.anglesNonCouvertsByProjet.map((a, i) => (
                  <div key={i} style={{ background: 'rgba(158,135,110,0.1)', border: '1px solid rgba(158,135,110,0.2)', borderRadius: '10px', padding: '10px 14px', fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{a}</div>
                ))}
              </div>
            </div>
          )}
          {item.prochaine && (
            <div style={{ background: colors.buttonBg, borderLeft: `4px solid ${colors.primary}`, borderRadius: '0 12px 12px 0', padding: '14px 16px' }}>
              <div style={{ fontFamily: titleFont, fontSize: (fs.base - 1) + 'px', color: colors.primary, marginBottom: '4px' }}>📅 Prochaine session</div>
              <div style={{ fontSize: (fs.base - 1) + 'px', color: colors.text, fontFamily: textFont }}>{item.prochaine}</div>
            </div>
          )}
        </div>
      );
    }

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
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: '24px'
      }}>
        <div style={{
          background: '#1a1a1a',
          border: `1px solid ${colors.cardBorder}`,
          borderRadius: '24px', padding: '32px',
          maxWidth: '600px', width: '100%',
          maxHeight: '80vh', overflow: 'auto', position: 'relative'
        }}>
          <button
            onClick={() => setShowProjet(false)}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '36px', height: '36px',
              background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`,
              borderRadius: '50%', color: colors.text, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>

          <h2 style={{ fontFamily: titleFont, fontSize: fs.title + 'px', color: colors.primary, marginBottom: '8px' }}>Le Projet</h2>
          <p style={{ color: colors.textMuted, fontSize: fs.base + 'px', marginBottom: '24px', fontFamily: textFont }}>Projet politique — La dernière Version</p>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: titleFont, fontSize: fs.base + 'px', color: colors.primary, marginBottom: '12px' }}>NOS PRIORITÉS</h3>
            {[
              "LUTTER — Fin de l'oligarchie, commissions d'enquête, levée du secret défense",
              "VOTER — Souveraineté populaire, référendums d'initiative citoyenne",
              'GRANDIR — Éducation nationale, formation, culture',
              'PROTÉGER — Justice, sécurité, défense nationale',
              'PRODUIRE — Réindustrialisation, agriculture, économie',
              'SOIGNER — Santé, hôpital public, prévention',
              'PARTAGER — Redistribution, solidarité, services publics'
            ].map((item, i) => (
              <div key={i} style={{ padding: '12px 16px', background: colors.buttonBg, border: `1px solid ${colors.cardBorder}`, borderRadius: '10px', fontSize: fs.base + 'px', color: colors.text, marginBottom: '8px', fontFamily: textFont }}>{item}</div>
            ))}
          </div>

          <a
            href="https://ruches.org/sites/default/files/mediatheque/documents/2025-12/le-projet-8.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 22px',
              background: 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)',
              color: '#111', borderRadius: '12px', textDecoration: 'none',
              fontWeight: '600', fontSize: fs.base + 'px', fontFamily: titleFont
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
    <div style={{ minHeight: '100vh', background: colors.background, color: colors.text, fontFamily: textFont }}>
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
