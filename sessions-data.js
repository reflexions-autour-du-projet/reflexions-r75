// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║   📝 FICHIER DE DONNÉES — RÉFLEXION AUTOUR DU PROJET — R75              ║
// ║                                                                           ║
// ║   🐝 C'est ICI que tu ajoutes tes nouvelles sessions chaque semaine !    ║
// ║   Tu n'as PAS BESOIN de toucher aux autres fichiers.                     ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝
//
// ═══════════════════════════════════════════════════════════════════════════
// COMMENT AJOUTER UNE NOUVELLE SESSION :
// ═══════════════════════════════════════════════════════════════════════════
// 
// 1. Trouve le thème concerné (mediasOligarchiques ou pantouflage)
// 2. Copie un bloc "sessionX" existant
// 3. Colle-le à la suite, change le numéro (session5, session6...)
// 4. Remplis le contenu avec tes notes de session
// 5. Va dans "sessionsConfig" ci-dessous
// 6. Change "available: false" en "available: true" pour ta nouvelle session
// 7. Sauvegarde et c'est tout ! Le site se met à jour automatiquement 🎉
//
// ═══════════════════════════════════════════════════════════════════════════


// ┌─────────────────────────────────────────────────────────────────────────┐
// │  🎯 CONFIGURATION RAPIDE (modifie ici chaque semaine)                  │
// └─────────────────────────────────────────────────────────────────────────┘

export const prochaineSession = {
  titre: "Session 5 : Les mesures du Projet",
  date: "Jeudi 5 février à 18h",
  theme: "pantouflage"
};

export const sessionsConfig = {
  medias: [
    { id: 'session1', titre: "Introduction à l'oligarchie", date: "18/01", available: true },
    { id: 'session2', titre: "Modèle oligarchique vs SCOP", date: "22/01", available: true },
    { id: 'session3', titre: "Questions et Réflexions", date: "25/01", available: true },
  ],
  pantouflage: [
    { id: 'session4', titre: "Introduction au pantouflage", date: "29/01", available: true },
    { id: 'session5', titre: "Les mesures du Projet", date: "05/02", available: false },
    { id: 'session6', titre: "Questions et Réflexions", date: "08/02", available: false },
  ]
};


// ┌─────────────────────────────────────────────────────────────────────────┐
// │  📺 THÈME 1 : LES MÉDIAS OLIGARCHIQUES                                 │
// └─────────────────────────────────────────────────────────────────────────┘

export const mediasOligarchiques = {

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 1 — Introduction à l'oligarchie (18 janvier 2025)
  // ═══════════════════════════════════════════════════════════════════════
  session1: {
    title: "Introduction à l'oligarchie",
    date: "18 janvier 2025",
    duration: "1h",
    sections: {
      definition: {
        title: "Qu'est-ce que l'oligarchie ?",
        content: [
          {
            type: "definition",
            term: "Oligarchie",
            etymology: "Du grec oligos (peu nombreux) + arkhê (pouvoir)",
            meaning: "Gouvernement / pouvoir exercé par un petit nombre"
          },
          "L'oligarchie, ce n'est pas qu'une question d'argent, mais d'entrecroisements et d'interpénétration de différents pouvoirs."
        ]
      },
      pouvoirs: {
        title: "Les 4 pouvoirs oligarchiques",
        content: [
          { icon: "💰", name: "Pouvoir économique", detail: "Grandes fortunes, CAC 40, multinationales" },
          { icon: "🏛️", name: "Pouvoir politique", detail: "Pantouflage, cabinets ministériels, hauts fonctionnaires" },
          { icon: "📺", name: "Pouvoir médiatique", detail: "Concentration des médias, contrôle de l'information" },
          { icon: "📋", name: "Pouvoir administratif", detail: "Instances de contrôle, grandes écoles (ENA/INSP)" }
        ]
      },
      mesures: {
        title: "5 mesures clés du Projet",
        content: [
          { numero: 1, titre: "Expropriation des médias oligarchiques", description: "Transformation en SCOP (coopératives)", page: "p.8" },
          { numero: 2, titre: "Fin du pantouflage", description: "Période de carence de 5 ans pour passer du public au privé", page: "p.14" },
          { numero: 3, titre: "Transparence totale", description: "Patrimoine des hauts fonctionnaires, agendas ministériels publics", page: "p.11" },
          { numero: 4, titre: "Élection de postes clés", description: "Gouverneur de la Banque de France, procureurs...", page: "p.8" },
          { numero: 5, titre: "Commissions citoyennes de contrôle", description: "Intégrées partout dans l'administration", page: "p.8" }
        ]
      },
      scop: {
        title: "Qu'est-ce qu'une SCOP ?",
        content: {
          type: "definition",
          term: "SCOP",
          meaning: "Société Coopérative et Participative",
          principes: [
            "Les salariés sont collectivement propriétaires",
            "1 personne = 1 voix (pas de pouvoir proportionnel à l'argent)",
            "Les bénéfices sont réinvestis ou partagés équitablement"
          ],
          note: "Référendum sur l'indépendance des médias prévu dans Le Projet (p.40)"
        }
      },
      oligarques: {
        title: "Les 8 propriétaires de médias",
        content: [
          { name: "Martin Bouygues", medias: "TF1, LCI, TMC..." },
          { name: "Arnaud Lagardère", medias: "Europe 1, Paris Match, JDD..." },
          { name: "Patrick Drahi", medias: "BFM TV, RMC, Libération..." },
          { name: "Vincent Bolloré", medias: "Canal+, CNews, C8..." },
          { name: "Bernard Arnault", medias: "Les Échos, Le Parisien..." },
          { name: "Rodolphe Saadé", medias: "La Provence, BFM Marseille..." },
          { name: "Daniel Kretinsky", medias: "Marianne, Elle, Télé 7 jours..." },
          { name: "Xavier Niel", medias: "Le Monde, L'Obs, Télérama..." }
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 2 — Modèle oligarchique vs SCOP (22 janvier 2025)
  // ═══════════════════════════════════════════════════════════════════════
  session2: {
    title: "Modèle oligarchique vs SCOP",
    date: "22 janvier 2025",
    duration: "1h",
    sections: {
      rappel: {
        title: "Rappel",
        content: [
          "L'oligarchie s'illustre par une concentration de différents pouvoirs : économique, politique, administratif et médiatique.",
          "Les médias oligarchiques = le pouvoir sur l'espace médiatique par un petit nombre."
        ]
      },
      modeleActuel: {
        title: "Le modèle oligarchique actuel",
        content: {
          type: "comparaison",
          elements: [
            { label: "Structure", value: "Un ou quelques propriétaires" },
            { label: "Gouvernance", value: "Décisions stratégiques prises par le propriétaire seul" },
            { label: "Éditorial", value: "Ligne dite 'indépendante' MAIS le propriétaire nomme le directeur" },
            { label: "Financement", value: "Publicités + abonnements + subventions publiques" },
            { label: "Rentabilité", value: "Rarement l'objectif — les médias sont souvent déficitaires" }
          ]
        }
      },
      subventions: {
        title: "Les subventions publiques",
        content: {
          stat: { number: "1 milliard €", label: "d'aides à la presse chaque année" },
          citation: {
            source: "Fondation Heinrich Böll (2024)",
            texte: "Dans un système d'information en crise et structurellement déficitaire, les médias rachetés par les industriels et financiers sont d'abord utilisés comme leviers d'influence."
          },
          exemples: [
            { nom: "Bernard Arnault (Les Échos, Le Parisien)", detail: "16M€ (2020) → 22,5M€ (2021) → 17,8M€ (2023) — LVMH : 14 milliards € de bénéfices en 2022" },
            { nom: "Xavier Niel (Le Monde)", detail: "8,4M€ en 2023 — Iliad : 367M€ de bénéfice net en 2024" },
            { nom: "Famille Dassault (Le Figaro)", detail: "11M€ en 2023 — Dassault Aviation : +1 milliard € de bénéfice net en 2024" }
          ]
        }
      },
      modeleSCOP: {
        title: "Le modèle SCOP proposé",
        content: {
          type: "comparaison",
          elements: [
            { label: "Capital", value: "Les salariés détiennent minimum 51% du capital et 65% des droits de vote" },
            { label: "Vote", value: "1 voix par personne (non proportionnelle au capital)" },
            { label: "Dirigeants", value: "Élus par les salariés" },
            { label: "Bénéfices", value: "Répartis en 3 parts : participation (salariés), réserves (entreprise), dividendes" },
            { label: "Forme juridique", value: "Peut prendre la forme d'une SA ou SARL" }
          ]
        }
      },
      avantagesQuestions: {
        title: "Avantages et questions",
        content: {
          avantages: [
            "Indépendance éditoriale",
            "Implication des salariés (motivation différente quand on travaille pour soi)",
            "Décisions collectives",
            "Stabilité (une SCOP ne peut pas être 'vendue' à un milliardaire du jour au lendemain)"
          ],
          questions: [
            "Financement initial : comment capitaliser sans investisseur ?",
            "Cadeau empoisonné ? (reprendre un média déficitaire)",
            "Les salariés seraient-ils mieux à même de faire tourner le média ?"
          ]
        }
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 3 — Questions et Réflexions (25 janvier 2025)
  // ═══════════════════════════════════════════════════════════════════════
  session3: {
    title: "Questions et Réflexions",
    date: "25 janvier 2025",
    duration: "2h",
    sections: {
      constat: {
        title: "Le constat",
        content: [
          { 
            type: "stat", 
            number: "28", 
            label: "familles, entités ou personnalités",
            detail: "possèdent l'intégralité des médias censés nous informer, du plus futile (Elle, Voici) au plus supposément sérieux (FranceInfo, Les Echos)"
          }
        ]
      },
      doubleMarche: {
        title: "Le marché à double versant",
        content: {
          explication: "Les médias ont deux 'clients' différents avec deux rapports de force différents :",
          versants: [
            { titre: "Versant 1 : Le public", detail: "Le produit (journal, programme TV) se vend au grand public" },
            { titre: "Versant 2 : Les annonceurs", detail: "L'audience générée se vend aux annonceurs → double source de revenus et d'influence" }
          ],
          insight: "Les oligarques ont compris qu'en contrôlant les budgets publicitaires via leurs autres entreprises, ils gagnent un levier d'influence supplémentaire."
        }
      },
      infoVsOpinion: {
        title: "Information vs Opinion",
        content: {
          probleme: "Un écart s'est creusé entre ce qu'est censé être un média (information) et ce qu'il est devenu (influence).",
          exemples: [
            "CNews : pas d'information factuelle, seulement de l'opinion présentée comme des faits",
            "Le Parisien pourrait être considéré comme un 'influenceur', non plus comme un vecteur d'information"
          ],
          proposition: "Les 'chaînes d'information' devraient s'appeler 'plateformes d'opinion'",
          reference: "Charte de Munich (années 70) : définit ce que doit être un journaliste, notamment avoir une certaine neutralité"
        }
      },
      controle: {
        title: "Mécanismes de contrôle",
        content: [
          { titre: "Déficit organisé", detail: "Avoir un média déficitaire permet de prétendre à des aides publiques ET d'exercer une pression sur les journalistes (menace de licenciements économiques)" },
          { titre: "Écoles de journalisme", detail: "Créent une forme de pensée unique — les oligarques s'assurent ainsi de la continuité idéologique" },
          { titre: "Financements croisés", detail: "Xavier Niel est actionnaire de Mediawan qui produit 'C À Vous' sur France 5 (financé par le contribuable) — serpent qui se mord la queue" }
        ]
      },
      exemplesCooperatifs: {
        title: "Médias coopératifs qui fonctionnent",
        content: [
          { nom: "Mediapart", modele: "SAS avec actionnariat salariés + lecteurs", resultat: "Rentable depuis plusieurs années" },
          { nom: "Alternatives Économiques", modele: "SCOP", resultat: "Fonctionne avec charte déontologique stricte" },
          { nom: "XXI", modele: "Magazine papier bimestriel sans publicité", resultat: "Modèle de niche pérenne" }
        ]
      },
      synthese: {
        title: "Questions ouvertes",
        content: [
          "Comment revenir à une information en son sens originel ?",
          "Comment contrôler citoyennement ce qui va à quel média, par quel biais ?",
          "La transformation en SCOP est-elle la proposition la plus pertinente ?",
          "Faudrait-il plutôt créer de nouveaux modèles de médias ?",
          "Comment faire recroître la rentabilité sans impacter les salariés ?"
        ]
      }
    }
  }
};


// ┌─────────────────────────────────────────────────────────────────────────┐
// │  🚪 THÈME 2 : LE PANTOUFLAGE                                           │
// └─────────────────────────────────────────────────────────────────────────┘

export const pantouflage = {

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 4 — Introduction au pantouflage (29 janvier 2025)
  // ═══════════════════════════════════════════════════════════════════════
  session4: {
    title: "Introduction au pantouflage",
    date: "29 janvier 2025",
    duration: "2h",
    sections: {
      definition: {
        title: "Qu'est-ce que le pantouflage ?",
        content: {
          type: "definition",
          origine: {
            date: "Début du 19ème siècle",
            contexte: "Création de la haute fonction publique française sous Napoléon",
            ecole: "École Polytechnique (1794) militarisée en 1814"
          },
          terminologie: [
            { terme: "« La botte »", signification: "Servir l'État pendant au moins 10 ans — rigueur militaire, discipline, service" },
            { terme: "« La pantoufle »", signification: "Quitter pour le privé — image du chausson confortable opposé à la botte militaire" }
          ],
          remboursement: "Environ 31 000 € à rembourser si l'on ne sert pas l'État pendant 10 ans. Entre 2000 et 2015, une faille exemptait tous les élèves du remboursement."
        }
      },
      exemplesFrance: {
        title: "Exemples français",
        content: {
          principal: {
            nom: "Emmanuel Macron",
            parcours: [
              { periode: "2002-2004", poste: "ENA", type: "formation" },
              { periode: "2004-2008", poste: "Inspecteur des finances", type: "public" },
              { periode: "2008-2012", poste: "Banquier chez Rothschild & Cie", type: "privé" },
              { periode: "2012-2013", poste: "Cabinet de Hollande", type: "public" },
              { periode: "2014-2016", poste: "Ministre de l'Économie", type: "public" },
              { periode: "2017-2027", poste: "Président de la République", type: "public" }
            ]
          },
          autres: [
            { nom: "Alexis Kohler", detail: "Ex-secrétaire général de l'Élysée, mis en examen pour 'prise illégale d'intérêts' (liens avec MSC), nommé DG adjoint de la Société Générale (octobre 2024)" },
            { nom: "Jean-Baptiste Djebbari", detail: "Ex-ministre des Transports, reconversion retoquée par la HATVP pour rejoindre CMA-CGM ('risques déontologiques substantiels')" },
            { nom: "Muriel Pénicaud", detail: "Ex-ministre du Travail, rejoint Galileo (groupe qui a profité de sa loi 'Avenir professionnel' de 2018)" },
            { nom: "Éléonore Leprettre", detail: "Ex-cheffe de cabinet du ministre de l'Agriculture, rejoint Phytéis (principal lobby agrochimique en France)" }
          ],
          stat: { number: "40+", label: "conseillers ministériels ont quitté le public pour le privé depuis 2017 — du jamais vu dans l'Histoire !" }
        }
      },
      exemplesEurope: {
        title: "Exemples européens",
        content: {
          exemples: [
            { nom: "José Manuel Barroso", detail: "Président Commission européenne (2004-2014) → Goldman Sachs (2016), 2 mois après fin de la période de refroidissement" },
            { nom: "Neelie Kroes", detail: "Commissaire au Numérique → Uber + Salesforce (entreprises qu'elle avait supervisées)" },
            { nom: "Karel De Gucht", detail: "Commissaire au Commerce → ArcelorMittal (secteur de ses négociations)" }
          ],
          stat: { source: "Transparency International", chiffre: "50% des anciens commissaires européens et 30% des ex-eurodéputés travaillent pour des lobbyistes de l'UE" }
        }
      },
      governmentSachs: {
        title: "Government Sachs",
        content: {
          intro: "Aux États-Unis, Goldman Sachs est surnommée 'Government Sachs' pour sa domination dans les cercles du pouvoir. En 2016, 88% des lobbyistes de Goldman avaient travaillé pour le gouvernement fédéral américain.",
          exemples: [
            { nom: "Robert Rubin", avant: "Co-président Goldman Sachs", apres: "Secrétaire au Trésor sous Clinton (1995-1999)" },
            { nom: "Henry Paulson", avant: "PDG Goldman Sachs", apres: "Secrétaire au Trésor sous Bush (2006-2009) — a supervisé le plan TARP de 700 milliards $" },
            { nom: "Steven Mnuchin", avant: "17 ans chez Goldman", apres: "Secrétaire au Trésor sous Trump (2017-2021)" },
            { nom: "Gary Cohn", avant: "Directeur des opérations Goldman", apres: "Conseiller économique principal de Trump (2017-2018)" },
            { nom: "Mario Draghi", avant: "Vice-président Goldman Europe (2002-2005)", apres: "Président BCE (2011-2019) puis Premier ministre italien (2021-2022)" }
          ],
          mondial: [
            { nom: "Rishi Sunak", pays: "Royaume-Uni", detail: "Premier ministre (2022-2024)" },
            { nom: "Mario Monti", pays: "Italie", detail: "Premier ministre (2011-2013)" },
            { nom: "Mark Carney", pays: "Canada", detail: "Gouverneur Banque d'Angleterre puis Premier ministre canadien" },
            { nom: "Malcolm Turnbull", pays: "Australie", detail: "Premier ministre (2015-2018)" }
          ]
        }
      },
      youngLeaders: {
        title: "Les programmes Young Leaders",
        content: {
          concept: "Identifier des individus 'à fort potentiel' dans différents secteurs (politique, économie, médias, culture), les réunir pour développer une vision commune et tisser des réseaux qui perdurent.",
          citation: {
            auteur: "Klaus Schwab",
            texte: "Ce dont nous sommes très fiers maintenant, c'est que nous pénétrons les cabinets des gouvernements à travers le monde avec nos Young Global Leaders",
            source: "Klaus Shwab (Harvard University, 2017)"
          },
          programmes: [
            {
              nom: "French-American Foundation (Young Leaders)",
              depuis: "1981",
              format: "10 Français + 10 Américains, 30-40 ans, 2 séminaires de 5 jours/an",
              exemples: ["François Hollande (1996)", "Alain Juppé (1982)", "Emmanuel Macron (2012)", "Valérie Pécresse", "Fleur Pellerin"]
            },
            {
              nom: "World Economic Forum — Young Global Leaders",
              depuis: "1992/2004",
              format: "Moins de 38 ans, mandats de 6 ans, ~1400 membres sur 120 nationalités",
              exemples: [
                { nom: "Angela Merkel (1993)", delai: "Chancelière 12 ans après" },
                { nom: "Tony Blair (1993)", delai: "Premier ministre 4 ans après" },
                { nom: "Emmanuel Macron (2016)", delai: "Président 1 an après" },
                { nom: "Jacinda Ardern (2014)", delai: "Première ministre 3 ans après" },
                { nom: "Sanna Marin (2020)", delai: "Sélectionnée déjà Première ministre" }
              ]
            }
          ]
        }
      },
      mesures: {
        title: "Mesures du Projet",
        content: [
          { numero: 1, titre: "Période de carence de 5 ans", description: "Contre 3 ans actuellement pour passer du public au privé", page: "p.14 & p.44" },
          { numero: 2, titre: "Démission définitive du corps", description: "Obligation pour tout haut fonctionnaire devenant élu (fin de la 'disponibilité' qui permet les retours)", page: "p.14" },
          { numero: 3, titre: "Transparence du patrimoine", description: "Déclaration décennale pour tous les hauts fonctionnaires des grands corps", page: "p.14" },
          { numero: 4, titre: "Publication des avis de déontologie", description: "Tous les avis rendus publics, y compris rétroactivement", page: "p.14" },
          { numero: 5, titre: "Interdiction des appartenances secrètes", description: "Plus d'association non déclarée ou réclamant l'anonymat de ses membres", page: "p.44" },
          { numero: 6, titre: "Base de données des conflits d'intérêts", description: "Déclaration obligatoire pour tout fonctionnaire, accessible au public", page: "p.44" }
        ]
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 5 — Les mesures du Projet (À VENIR)
  // ═══════════════════════════════════════════════════════════════════════
  // session5: {
  //   title: "Les mesures du Projet",
  //   date: "5 février 2025",
  //   duration: "2h",
  //   sections: {
  //     // À compléter après la session
  //   }
  // }
};
