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
// 1. Trouve le thème concerné (mediasOligarchiques, pantouflage ou violencesPolitiques)
// 2. Copie un bloc "sessionX" existant
// 3. Colle-le à la suite, change le numéro (session8, session9...)
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
  titre: "Session 8 : Aux origines des violences politiques",
  date: "Mercredi 04 mars à 18h",
  theme: "violencesPolitiques"
};

export const sessionsConfig = {
  medias: [
    { id: 'session1', titre: "Introduction à l'oligarchie", date: "18/01", available: true },
    { id: 'session2', titre: "Modèle oligarchique vs SCOP", date: "22/01", available: true },
    { id: 'session3', titre: "Questions et Réflexions", date: "25/01", available: true },
  ],
  pantouflage: [
    { id: 'session4', titre: "Introduction au pantouflage", date: "29/01", available: true },
    { id: 'session5', titre: "La sélection avant l'élection", date: "05/02", available: true },
    { id: 'session6', titre: "Les mesures du Projet", date: "13/02", available: true },
  ],
  violencesPolitiques: [
    { id: 'session7', titre: "Commissions d'enquête et violences politiques", date: "25/02", available: true },
    { id: 'session8', titre: "Aux origines des violences politiques", date: "04/03", available: true },
    { id: 'session9', titre: "Les mesures du Projet", date: "11/03", available: false },
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
  // SESSION 4 — Introduction au pantouflage (29 janvier 2026)
  // ═══════════════════════════════════════════════════════════════════════
  session4: {
    title: "Introduction au pantouflage",
    date: "29 janvier 2026",
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
            source: "Harvard University, 2017"
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
          { numero: 5, titre: "Base de données des conflits d'intérêts", description: "Déclaration obligatoire pour tout fonctionnaire, accessible au public", page: "p.44" }
        ]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 5 — La sélection avant l'élection (5 février 2026)
  // ═══════════════════════════════════════════════════════════════════════
  session5: {
    title: "La sélection avant l'élection",
    date: "5 février 2026",
    duration: "2h",
    sections: {
      rappel: {
        title: "Rappel de la session précédente",
        content: [
          "L'origine du pantouflage remonte à l'École Polytechnique sous Napoléon : « la botte » (servir l'État 10 ans) vs « la pantoufle » (partir vers le privé).",
          "Ce qui était un choix individuel est devenu un système structurel de concentration des pouvoirs.",
          "Les programmes Young Global Leaders (WEF, French-American Foundation) identifient et mettent en réseau les futurs dirigeants bien avant leur accession au pouvoir.",
          "Promotion 1993 du WEF : Angela Merkel, Tony Blair, Nicolas Sarkozy, Viktor Orbán, José Manuel Barroso, Bill Gates — tous devenus dirigeants ou milliardaires 10 ans plus tard."
        ]
      },
      patternRichesse: {
        title: "Le pattern de croissance exponentielle",
        content: {
          intro: "Une caractéristique troublante apparaît chez les alumni YGL : succès exponentiel après leur sélection, richesse qui explose malgré des dons philanthropiques massifs.",
          exemples: [
            { nom: "Bill Gates", detail: "Déjà leader avant 1993, succès exponentiel après, richesse qui explose malgré des dons massifs" },
            { nom: "Larry Page", detail: "Sélectionné YGL en 2002, succès exponentiel après, richesse qui explose malgré des dons massifs" },
            { nom: "Jeff Bezos", detail: "Sélectionné YGL en 1998, succès exponentiel après, richesse qui explose malgré des dons massifs" },
            { nom: "Mark Zuckerberg", detail: "Sélectionné YGL en 2009, même pattern de croissance exponentielle" }
          ],
          question: "Et les milliardaires qui n'ont PAS été YGL ? Warren Buffett, Michael Bloomberg, Bernard Arnault... même pattern de croissance. Auraient-ils participé à d'autres programmes similaires ?"
        }
      },
      elonMusk: {
        title: "Le cas Elon Musk",
        content: {
          constat: "Selon les archives Internet, Elon Musk figurait parmi les YGL 2008, identifié comme 'Chairman de Tesla Motors'. Son nom a depuis été retiré de la liste publique des alumni.",
          paradoxe: "Il critique maintenant le WEF comme 'gouvernement mondial non élu que personne n'a demandé'... mais il a été sélectionné et mis en réseau par ce programme en 2008.",
          question: "En janvier 2026, ce même Elon Musk est interviewé à Davos... par le PDG de BlackRock. Vrai dissident ou opposition contrôlée ?"
        }
      },
      givingPledge: {
        title: "Le Giving Pledge",
        content: {
          definition: "En 2010, Warren Buffett et Bill Gates lancent le 'Giving Pledge' : un engagement public par lequel des milliardaires promettent de donner au moins la moitié de leur fortune à des causes philanthropiques.",
          membres: "Plus de 250 signataires de 30 pays : Michael Bloomberg, Mark Zuckerberg, Elon Musk, MacKenzie Scott (ex-Bezos)...",
          realite: {
            source: "Institute for Policy Studies (2025)",
            revelations: [
              "Les 32 signataires américains originaux de 2010 sont devenus collectivement 166% plus riches depuis qu'ils ont signé",
              "Sur les 22 signataires décédés, seuls 8 avaient effectivement donné la moitié de leur fortune",
              "~80% des dons identifiables sont allés vers des fondations privées qu'ils contrôlent eux-mêmes"
            ]
          },
          conclusion: "Le Giving Pledge fonctionne moins comme un acte de générosité que comme un réseau de mise en relation entre ultra-riches. Un journaliste de Bloomberg l'a qualifié de 'club' plutôt que d'engagement réel."
        }
      },
      autresReseaux: {
        title: "L'écosystème des réseaux privés",
        content: [
          {
            nom: "La Commission Trilatérale",
            depuis: "1973 (fondée par David Rockefeller)",
            description: "Réunit des dirigeants d'Amérique du Nord, d'Europe et d'Asie-Pacifique",
            membres: "Henry Kissinger, Alan Greenspan, Paul Volcker (futurs présidents de la Fed), Larry Fink (PDG BlackRock)"
          },
          {
            nom: "Atlantic Council — Millennium Fellowship",
            depuis: "2015",
            description: "Programme de 9 mois pour 'jeunes leaders émergents en affaires internationales'",
            membres: "Voyages, rencontres avec responsables gouvernementaux à huis clos, réseau d'alumni mondial",
            cout: "3 000 à 15 000$ selon secteur public/privé"
          },
          {
            nom: "Aspen Global Leadership Network",
            depuis: "2009",
            description: "Plus de 4 000 alumni dans 60+ pays",
            membres: "Rhétorique similaire au WEF : 'transformer les leaders du succès vers la signification'"
          },
          {
            nom: "Le groupe Bilderberg",
            depuis: "1954",
            description: "Cercle très fermé réunissant les personnalités les plus influentes des États-Unis et d'Europe",
            membres: "120-150 personnes pendant 3 jours dans un lieu secret, échanges soumis à la règle de Chatham House"
          }
        ]
      },
      bilderberg: {
        title: "Le groupe Bilderberg en détail",
        content: {
          origine: "Nom venant de l'hôtel Bilderberg (Oosterbeek, Pays-Bas) où s'est tenue la première réunion en mai 1954. Initiative du prince Bernhard des Pays-Bas avec le soutien des services de renseignement américains (documents déclassifiés CIA).",
          objectif: "Officiellement : renforcer la coopération Europe-Amérique du Nord pendant la Guerre froide et créer des liens entre élites des deux côtés de l'Atlantique.",
          securite: "Hôtels entièrement vidés, lieux encerclés par police/gardes armés/armée, salles scannées pour dispositifs d'écoute, aucun journaliste autorisé, aucun CR officiel publié.",
          citation: {
            auteur: "Denis Healey",
            texte: "Dire que nous cherchions à créer un gouvernement mondial est exagéré, mais pas totalement inexact. Nous pensions qu'on ne pouvait pas continuer éternellement à se battre pour rien et à tuer des gens.",
            source: "The Guardian, 2000 (cofondateur Bilderberg, 30 ans au comité directeur)"
          },
          timing: [
            { nom: "Bill Clinton", detail: "Bilderberg 1991 → Président USA 1993 (2 ans après)" },
            { nom: "Tony Blair", detail: "Bilderberg 1993 + YGL 1993 → Premier ministre UK 1997 (4 ans après)" },
            { nom: "Emmanuel Macron", detail: "Bilderberg 2014 → YGL 2016 → Président 2017 (3 ans après)" }
          ]
        }
      },
      chathamHouse: {
        title: "La règle de Chatham House",
        content: {
          definition: "Protocole de confidentialité créé en 1927 par le Royal Institute of International Affairs (think tank britannique basé dans Chatham House, ancienne résidence de trois Premiers ministres britanniques).",
          regle: "« Quand une réunion se déroule sous la règle de Chatham House, les participants sont libres d'utiliser les informations reçues, mais ils ne doivent révéler ni l'identité, ni l'affiliation des personnes qui les ont communiquées. »",
          implication: "Vous pouvez dire 'j'ai entendu proposer telle politique' mais pas QUI l'a proposé. Les idées circulent, les sources restent protégées.",
          argument: "Officiellement : encourager la franchise. Les participants peuvent s'exprimer librement sans craindre d'être cités.",
          sanction: "Pas juridiquement contraignante — 'accord entre gentlemen'. Seule sanction : exclusion du réseau.",
          application: "S'applique aux réunions Bilderberg, French-American Foundation, certaines sessions du WEF...",
          questionCle: "La Chatham House Rule protège-t-elle la franchise des débats... ou la source du narratif ?"
        }
      },
      usinesNarratifs: {
        title: "Des usines à narratifs ?",
        content: {
          probleme: "Qui sont les participants à ces forums ? Des héritiers, des politiques, des PDG, des artistes... Être né dans la bonne famille ou avoir réussi dans les affaires ne confère pas automatiquement la capacité de comprendre un accord commercial international ou les implications d'une réforme bancaire.",
          hypothese: "Ces réunions ne sont pas des 'think tanks' où l'on pense collectivement, mais des usines à narratifs où l'on distribue les mêmes éléments de langage à des relais d'influence.",
          fonctionnement: "Le PDG le dira aux investisseurs, le politique le dira à l'Assemblée, l'artiste le dira sur les réseaux sociaux, le journaliste l'écrira dans son éditorial — même message, mille voix différentes.",
          observation: "Sur certains sujets (climat, numérique, 'réformes structurelles'), on entend exactement les mêmes formulations, les mêmes arguments, les mêmes métaphores, d'un pays à l'autre, d'un parti à l'autre, d'un média à l'autre.",
          questionCle: "La Chatham House Rule protège-t-elle la franchise des débats... ou la source du narratif ?"
        }
      },
      artistes: {
        title: "Les artistes dans les réseaux YGL",
        content: {
          intro: "Les Young Global Leaders ne se limitent pas aux affaires, à la finance ou à la politique. On y trouve un nombre significatif d'artistes, d'acteurs, de musiciens et de sportifs — ce n'est pas anodin.",
          musique: [
            {
              nom: "Bono (U2)",
              annee: "1993 (première promotion)",
              suites: "Co-fondateur de ONE (lobbying pauvreté, financé par Gates & Soros) et RED (lancé à Davos 2006, plus gros contributeur privé du Global Fund)"
            },
            {
              nom: "Shakira",
              annee: "2008",
              suites: "Fondation Pies Descalzos (1997), plus jeune ambassadrice UNICEF (2003), Crystal Award WEF 2017"
            },
            {
              nom: "A.R. Rahman",
              annee: "2008",
              suites: "Compositeur Slumdog Millionaire, A.R. Rahman Foundation (2006), ambassadeur Stop TB Partnership (OMS)"
            },
            {
              nom: "Wyclef Jean (Fugees)",
              annee: "2010",
              suites: "Fondation Yélé Haiti — scandale : sur 16M$ levés après le séisme, seul 1/3 utilisé pour les secours. Sélectionné YGL malgré le scandale en cours."
            }
          ],
          cinema: [
            {
              nom: "Leonardo DiCaprio",
              annee: "2008",
              suites: "Messager de la Paix de l'ONU sur le climat (2014), Clinton Global Citizen Award (2014), Crystal Award WEF (2016)"
            },
            {
              nom: "Charlize Theron",
              annee: "2014",
              suites: "Fondatrice Charlize Theron Africa Outreach Project"
            },
            {
              nom: "Amal Clooney",
              annee: "2016",
              suites: "Co-fondatrice Clooney Foundation for Justice (2016), partenariats avec Obama Foundation et Melinda French Gates"
            }
          ],
          sport: [
            { nom: "Roger Federer", annee: "2010", suites: "Sélectionné parmi 5 000 candidats avec Evan Williams (Twitter) et Wyclef Jean" },
            { nom: "Michael Schumacher", annee: "Alumni", suites: "7 titres de champion du monde F1" }
          ],
          france: [
            { nom: "JR (artiste)", annee: "2020", suites: "Même promotion que Gabriel Attal (futur Premier ministre 2024)" }
          ]
        }
      },
      heritiers: {
        title: "Les héritiers dans les réseaux",
        content: {
          intro: "Ces héritiers ne sont pas sélectionnés pour leurs accomplissements personnels mais parce qu'ils sont les futurs gestionnaires de fortunes et d'influence colossales — le WEF ne forme plus seulement des leaders, il intègre des dynasties.",
          exemples: [
            { nom: "Chelsea Clinton", annee: "2013", detail: "Fille de Bill et Hillary Clinton" },
            { nom: "Ivanka Trump", annee: "2015", detail: "Fille de Donald Trump (avant même qu'il ne devienne président)" },
            { nom: "Nathaniel Rothschild", annee: "2005", detail: "Fils de Jacob Rothschild, 4e Baron Rothschild" },
            { nom: "Alexander Soros", annee: "2018", detail: "Fils de George Soros" }
          ],
          paradoxe: "Donald Trump critique le WEF comme 'gouvernement mondial non élu'... alors que sa fille en est membre depuis 2015."
        }
      },
      pourquoiArtistes: {
        title: "Pourquoi intégrer ces profils ?",
        content: {
          raison: "Ce sont des faiseurs d'opinion avec une influence culturelle massive.",
          mecanisme: [
            "Quand Leonardo DiCaprio parle du climat, des millions de personnes écoutent",
            "Quand Bono défend une cause, elle gagne en visibilité mondiale",
            "Quand Roger Federer ou Shakira s'associent à une initiative, elle devient 'cool', acceptable"
          ],
          pattern: "Ces artistes deviennent systématiquement des porte-parole de causes globales (climat, pauvreté, éducation, santé mondiale) — causes qui correspondent précisément aux agendas promus par le WEF.",
          angleMort: "Ces appartenances ne sont quasiment jamais mentionnées dans les médias. Quand Leonardo DiCaprio parle du climat à la télévision, personne ne précise qu'il est YGL du WEF depuis 2008.",
          enjeu: "Le public a le droit de savoir si la personne qui lui parle est membre d'un réseau d'influence, tout comme on exige des élus qu'ils déclarent leurs conflits d'intérêts."
        }
      },
      ecosysteme: {
        title: "Un écosystème à plusieurs niveaux",
        content: {
          niveaux: [
            {
              niveau: "Pour les jeunes 'à fort potentiel'",
              programmes: "Young Global Leaders (WEF), Young Leaders (FAF), Millennium Fellowship (Atlantic Council), Aspen Institute..."
            },
            {
              niveau: "Pour les dirigeants en exercice",
              programmes: "Commission Trilatérale, groupe Bilderberg, sommets de Davos..."
            },
            {
              niveau: "Pour les ultra-riches",
              programmes: "Giving Pledge — crée une communauté et des occasions de collaboration entre milliardaires"
            },
            {
              niveau: "Dimension culturelle",
              programmes: "Artistes, sportifs, célébrités intégrés comme relais d'influence auprès du grand public"
            }
          ],
          chevauchement: "Ces cercles se chevauchent : on peut être YGL à 35 ans, rejoindre la Commission Trilatérale à 50 ans, signer le Giving Pledge à 60 ans et participer à Bilderberg tout au long de sa carrière — et à chaque étape, on croise les mêmes artistes engagés, les mêmes sportifs ambassadeurs, les mêmes célébrités militantes.",
          exemple: "Larry Fink (PDG BlackRock) : membre du Council on Foreign Relations, membre de la Commission Trilatérale, trustee du WEF, intervieweur d'Elon Musk à Davos 2026."
        }
      },
      conclusion: {
        title: "Ce que révèle cette cartographie",
        content: {
          constat: "Le pantouflage — ce passage du public au privé qu'on tente de réguler — n'est que la façade visible d'un système bien plus vaste.",
          amont: "En amont de toute élection, il y a un système de sélection, de formation et de mise en réseau qui prépare les trajectoires. Des individus sont identifiés jeunes, mis en contact les uns avec les autres, formés aux mêmes idées et accompagnés tout au long de leur ascension.",
          exempleAttal: "Gabriel Attal, Young Global Leader 2020, est devenu Premier ministre en 2024.",
          questionsOuvertes: [
            "Peut-on réellement réguler le pantouflage sans s'intéresser à ce qui le prépare ?",
            "Faut-il exiger la transparence sur la participation à ces programmes ?",
            "Un élu ou haut fonctionnaire formé dans ces réseaux est-il de facto en situation de conflit d'intérêts structurel ?",
            "Qui choisit réellement nos dirigeants : le peuple à travers le vote, ou un système parallèle de sélection ?"
          ],
          indicateur: "Quand quelqu'un est autant attaqué pour ce qu'il EST et non pour ce qu'il DIT, ça vaut le coup de creuser. Et à l'inverse, quand quelqu'un est invité à Davos, sélectionné YGL ou récompensé par un Crystal Award... ça vaut peut-être le coup de se demander pourquoi."
        }
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 6 — Les mesures du Projet (13 février 2026)
  // ═══════════════════════════════════════════════════════════════════════
  session6: {
    title: "Les mesures du Projet",
    date: "13 février 2026",
    duration: "2h",
    sections: {
      rappel: {
        title: "Rappel des sessions précédentes",
        content: [
          "Depuis trois sessions, on travaille sur le pantouflage : ses origines (la botte vs la pantoufle sous Napoléon), son amplification avec les privatisations des années 80, puis son explosion depuis 2017 avec plus de 40 conseillers ministériels partis vers le privé.",
          "Des cas concrets en France (Macron, Kohler, Djebbari, Pénicaud), en Europe (Barroso, Kroes, De Gucht) et à l'international avec le phénomène 'Government Sachs'.",
          "Tout un écosystème de programmes de sélection (YGL du WEF, French-American Foundation, Commission Trilatérale, Atlantic Council, Aspen Institute, groupe Bilderberg, Giving Pledge) fonctionnant sous la règle de Chatham House.",
          "Des artistes, sportifs et célébrités intégrés comme relais d'influence (Shakira, DiCaprio, Federer, Bono), dont les affiliations ne sont jamais mentionnées dans les médias."
        ]
      },
      casMontchalin: {
        title: "Le cas Amélie de Montchalin",
        content: {
          intro: "Le 11 février 2026, Macron a nommé Amélie de Montchalin à la tête de la Cour des comptes, en remplacement de Pierre Moscovici — un cas d'école pour illustrer tout ce qu'on a vu depuis deux sessions.",
          parcours: {
            formation: [
              { ecole: "HEC Paris", type: "École de commerce de l'élite économique française" },
              { ecole: "Harvard Kennedy School of Government", type: "École de formation des dirigeants politiques internationaux" }
            ],
            prive: {
              periode: "2008-2017 (9 ans)",
              postes: [
                { entreprise: "BNP Paribas", role: "Finance — l'un des plus gros groupes bancaires mondiaux" },
                { entreprise: "AXA", role: "Affaires publiques — lobbying auprès des pouvoirs publics" }
              ]
            },
            politique: [
              { periode: "2017", poste: "Élue députée LREM de l'Essonne (première élection)", detail: "Coordinatrice du groupe macroniste à la commission des finances" },
              { periode: "2019-2020", poste: "Secrétaire d'État aux Affaires européennes" },
              { periode: "2020-2022", poste: "Ministre de la Transformation et de la Fonction publiques", detail: "Pilote la plus grande réforme de la haute fonction publique depuis 1945, suppression de l'ENA" },
              { periode: "2022", poste: "Battue aux législatives dans l'Essonne" },
              { periode: "2024", poste: "Ministre de l'Action et des Comptes publics (gouv. Bayrou puis Lecornu)", detail: "En charge du budget de l'État" },
              { periode: "11/02/2026", poste: "Nommée Première présidente de la Cour des comptes" }
            ],
            reseaux: [
              { programme: "Young Leader — French-American Foundation", annee: "2018", detail: "Sélectionnée alors qu'elle n'est députée que depuis un an. La promotion 2019 a été reçue au ministère des Affaires étrangères par Montchalin elle-même." },
              { programme: "Young Global Leader — World Economic Forum", annee: "2021", detail: "Sélectionnée avec 112 autres personnes, présentée comme 'ministre de la Transformation et de la Fonction publique'. Doublement labellisée comme Macron avant elle." }
            ],
            famille: "Mariée à Guillaume de Montchalin, partner au Boston Consulting Group — l'un des principaux bénéficiaires des marchés publics de cabinets de conseil (commission d'enquête sénatoriale 2022). L'épouse d'un partner du BCG dirigera l'institution censée contrôler les comptes de l'État qui paie ces cabinets."
          },
          paradoxe: "Une Young Global Leader du WEF et Young Leader de la FAF a piloté la plus grande réforme de la haute fonction publique française depuis 1945."
        }
      },
      courDesComptes: {
        title: "La Cour des comptes et ses implications",
        content: {
          role: {
            missions: [
              "Contrôle la régularité des comptes publics",
              "Vérifie que l'argent des contribuables est bien utilisé",
              "Évalue les politiques publiques (~200 rapports par an)",
              "Le Premier président préside aussi le Haut Conseil des finances publiques et le Conseil des prélèvements obligatoires"
            ],
            enjeu: "C'est le poste clé du contrôle des finances de la nation."
          },
          irrevocabilite: {
            regle: "Pas de durée de mandat, seule limite : 68 ans",
            consequence: "Amélie a 40 ans → potentiellement 28 ans à la tête de l'institution",
            perspective: "28 ans = plus long que tous les mandats présidentiels de la Ve République (sauf De Gaulle et Mitterrand), 5 élections présidentielles, 4-5 changements de président",
            precedent: "L'usage n'avait jamais vu un président nommé avant 58 ans (sénatrice LR Christine Lavarde). En nommant quelqu'un de jeune, on maximise la durée du verrouillage."
          },
          conflitInterets: [
            "Dès avril 2026 : la Cour publiera son rapport sur l'exécution du budget 2025, celui qu'Amélie a elle-même préparé comme ministre des Comptes publics",
            "En juillet : état des lieux des finances publiques — des finances qu'elle gérait elle-même quelques semaines plus tôt",
            "Rupture de l'usage (depuis Sarkozy) de nommer une personnalité issue de l'opposition pour garantir l'indépendance",
            "Nomination exclusivement du ressort du chef de l'État : aucune approbation parlementaire, aucun vote des commissions"
          ]
        }
      },
      verrouillage: {
        title: "La stratégie de verrouillage institutionnel avant 2027",
        content: {
          contexte: "Macron ne peut pas se représenter (3e mandat consécutif interdit). Les sondages donnent une alternance probable. Stratégie : placer des fidèles à des postes irrévocables qui survivront à l'alternance.",
          nominations: [
            {
              nom: "Richard Ferrand — Conseil constitutionnel",
              date: "Février 2025",
              profil: "Cofondateur d'En Marche, premier président LREM de l'Assemblée nationale (2018-2022), le plus proche fidèle de Macron",
              detail: "58 parlementaires ont voté contre sur 97, seulement 39 pour. Passé à UNE voix près (il fallait 59 voix contre, 3/5e). 16 députés RN se sont abstenus sur consigne de Marine Le Pen.",
              enjeu: "Pas juriste (il l'a reconnu lui-même). Nommé pour 9 ans non renouvelables (→ 2034). Validera les présidentielles de 2027 et 2032.",
              lienLP: "Plusieurs observateurs ont lié l'abstention du RN au fait que le Conseil devait se prononcer sur une QPC concernant l'éligibilité de Marine Le Pen."
            },
            {
              nom: "François Villeroy de Galhau — Banque de France",
              date: "Annonce de démission le même jour que la nomination Montchalin",
              profil: "Polytechnicien, énarque, inspecteur des finances, passé par la Direction du Trésor, cabinet de DSK, puis Cetelem et BNP Paribas — parcours de pantouflage classique",
              detail: "Mandat devait courir jusqu'à l'automne 2027 (après la présidentielle). En partant en juin 2026, il offre la nomination de son successeur à Macron au lieu du prochain président.",
              enjeu: "Successeur nommé pour 6 ans (→ 2032 minimum). Siège au Conseil des gouverneurs de la BCE. Bloomberg a titré : 'Villeroy quitte la Banque de France, laissant Macron choisir le prochain gouverneur'."
            },
            {
              nom: "Vice-président du Conseil d'État",
              date: "Départ à la retraite le 21 mai 2026",
              detail: "Le vice-président est le patron réel de l'institution (le président formel est le Premier ministre qui ne siège jamais). Plus haute juridiction administrative, conseille le gouvernement sur tous les projets de loi, juge les litiges entre citoyens et administration.",
              enjeu: "Encore une nomination qui reviendra à Macron avant 2027."
            },
            {
              nom: "30 hauts fonctionnaires en un seul Conseil des ministres",
              date: "26 juin 2024 — 4 jours avant le premier tour des législatives après la dissolution",
              detail: "Recteurs d'académie, ambassadeurs, hauts magistrats, patrons d'ARS, état-major de l'armée de l'air, gouverneur militaire de Paris, représentant permanent à l'OTAN — 30 nominations en un seul jour."
            }
          ],
          bilan: "Quatre des institutions les plus puissantes de la République (Cour des comptes, Conseil constitutionnel, Banque de France, Conseil d'État) — toutes entre les mains de personnes nommées par Macron, toutes en poste bien au-delà de 2027.",
          retour2032: "La Revue Politique et Parlementaire affirme que Macron aurait confié à des proches son souhait de 'revenir en 2032'. La Constitution interdit un 3e mandat consécutif, mais pas après une interruption — ces nominations stratégiques prendraient alors un autre sens.",
          conclusion: "Si la Cour des comptes, le Conseil constitutionnel, la Banque de France et le Conseil d'État sont tous dirigés par des personnes nommées par le même président, dans la même fenêtre temporelle, avec la même motivation de verrouillage — alors la séparation des pouvoirs est une fiction."
        }
      },
      mesure1: {
        title: "Mesure 1 : Démission définitive du corps",
        content: {
          aujourdhui: {
            systeme: "La 'disponibilité'",
            fonctionnement: "Un haut fonctionnaire qui veut se présenter à une élection se met 'en disponibilité' — s'il perd, il retrouve son poste; s'il gagne, il exerce son mandat; à la fin, il peut revenir.",
            consequence: "Aucun risque pour les hauts fonctionnaires : la 'carrière tournante' (allers-retours privé/public) est sans fin et sans conséquence. Macron pourrait en théorie revenir au corps de l'Inspection après son mandat."
          },
          projet: {
            principe: "Si tu es haut fonctionnaire et que tu veux devenir élu, tu démissionnes de ton corps. Définitivement. Pas de filet de sécurité, pas de plan B, pas de retour possible.",
            logique: "Soit tu choisis de servir le peuple en tant qu'élu, soit tu choisis de servir l'État en tant qu'administrateur — mais tu ne fais pas les deux alternativement au gré des opportunités."
          },
          congeRepublicain: {
            principe: "6 mois, deux fois par carrière, pour les citoyens ordinaires (salariés du privé, indépendants)",
            effet: "Double sens : rendre l'entrée en politique plus difficile pour les élites administratives (suppression du filet) et plus facile pour les citoyens ordinaires (congé protégé)"
          },
          applicationMontchalin: "Montchalin n'est pas issue d'un grand corps — elle vient du privé. Cette mesure ne l'aurait pas empêchée directement, mais aurait empêché le parcours type de beaucoup de ses collègues macronistes (Conseil d'État, Inspection des finances, Cour des comptes)."
        }
      },
      mesure2: {
        title: "Mesure 2 : Période de carence de 5 ans",
        content: {
          aujourdhui: {
            systeme: "Période de carence de 3 ans (public → privé), contrôlée par la HATVP",
            failles: [
              "Djebbari : avis réservé de la HATVP, interdit d'exercer dans les transports pendant 3 ans → devenu consultant pour des entreprises du secteur sous couvert d'un cabinet de conseil",
              "Quasi rien n'existe pour le passage inverse (élection → haute fonction publique)",
              "Montchalin : zéro jour d'attente entre le ministère des Comptes publics et la Cour des comptes"
            ]
          },
          projet: {
            duree: "5 ans au lieu de 3",
            effets: [
              "Les dossiers changent de main, les interlocuteurs changent, les enjeux évoluent",
              "Les contacts directs perdent en pertinence",
              "Le 'capital informationnel' (secrets, failles, leviers d'influence) se déprécie",
              "Couvre un mandat présidentiel entier",
              "S'applique dans les DEUX sens : public → privé ET élection → haute fonction publique"
            ]
          },
          applicationMontchalin: "Avec une carence de 5 ans, elle n'aurait pas pu passer du ministère à la Cour des comptes avant 2031. Le budget 2025 serait de l'histoire ancienne, un autre président serait en poste, et la stratégie de verrouillage avant 2027 serait impossible.",
          questionsOuvertes: [
            "5 ans suffisants quand les réseaux opèrent sur des décennies ?",
            "Faudrait-il différencier selon le niveau de responsabilité (5 ans pour un député, 7-10 ans pour un ministre) ?",
            "Le 'pantouflage triangulaire' (privé → public → institution de contrôle) est-il couvert ? La carence de 5 ans ne traite que le dernier passage, pas la trajectoire d'ensemble."
          ]
        }
      },
      mesure3: {
        title: "Mesure 3 : Transparence décennale et publication des avis",
        content: {
          aujourdhui: {
            problemes: [
              "Déclarations de patrimoine et d'intérêts : périmètre limité, souvent incomplètes, difficiles à exploiter",
              "Avis de la commission de déontologie : confidentiels — le citoyen ne sait rien de qui a demandé quoi",
              "Aucune obligation de déclarer les appartenances à des réseaux ou programmes de formation (YGL, FAF...)",
              "Aucun suivi dans le temps — on contrôle au moment du passage, mais on ne suit pas les trajectoires"
            ]
          },
          projet: {
            transparenceDecennale: {
              principe: "Ne plus regarder un instant T mais une période de 10 ans",
              effet: "Comme passer d'une photo à un film : on voit les enrichissements suspects, les coïncidences temporelles, on connecte les événements dans leur chronologie et leurs conséquences"
            },
            publicationRetroactive: "Tous les avis rendus depuis la création de la commission deviendraient publics — on pourrait voir a posteriori quelles autorisations ont été données et croiser avec ce que les personnes sont devenues",
            refonteCommission: "La commission de déontologie ne serait plus un organe entre pairs : elle intégrerait des citoyens et serait rattachée au défenseur du peuple (élu, pas nommé par le président) — la fin du contrôle de soi par et pour soi"
          },
          applicationMontchalin: "Le parcours d'Amélie aurait été documenté et rendu public dans sa continuité. Pas un seul média mainstream n'a mentionné ses affiliations YGL et FAF cette semaine. Si la déclaration d'intérêts incluait ces appartenances, le débat public serait tout autre."
        }
      },
      mesure4: {
        title: "Mesure 4 : Réforme structurelle de la haute fonction publique",
        content: {
          grandCorpsDecennaux: {
            titre: "A) Grands corps pour des durées décennales",
            aujourdhui: "Quand on intègre un grand corps (Inspection des finances, Conseil d'État, Cour des comptes), c'est à vie.",
            projet: "Appartenance limitée à 10 ans — les grands corps ne seraient plus des clubs à vie où l'on accumule du capital social sur 30 ans.",
            applicationMontchalin: "La nomination d'Amélie aurait une portée de 10 ans maximum au lieu de 28."
          },
          ouvertureAcces: {
            titre: "B) Ouverture de l'accès par le bas",
            aujourdhui: "Les grands corps sont peuplés quasi exclusivement par les anciens de Polytechnique, Sciences Po/INSP.",
            projet: "Accès sur concours à toutes les catégories de fonctionnaires, avec mise sous tutelle politique des jurys pour éviter la cooptation — la VRAIE démocratisation de la haute fonction publique."
          },
          fusionEcoles: {
            titre: "C) Fusion des écoles en une École d'État unique",
            projet: "ENM (magistrature) + INET (administration territoriale) + INSP (ex-ENA) fusionnent. Les élèves choisissent une branche et sont interdits de changement pendant 10 ans.",
            effet: "Casse le tourisme institutionnel, la base du pantouflage interne."
          },
          fusionAntiCorruption: {
            titre: "D) Fusion des organes anti-corruption",
            projet: "L'AFA, la MICAF, la HATVP et les offices d'enquête sont fusionnés en un seul organisme.",
            effet: "Un seul interlocuteur, une seule base de données, une seule capacité d'enquête et de sanction — la fin du 'saupoudrage' anti-corruption."
          }
        }
      },
      anglesMorts: {
        title: "Les angles morts du Projet",
        content: {
          reseauxTransnationaux: {
            probleme: "Les mesures s'attaquent au moment du passage entre les fonctions, mais aucune ne traite ce qui se passe en amont : la sélection, la formation, la construction d'un sentiment d'appartenance à un groupe transnational.",
            illustration: "Montchalin = YL FAF 2018, YGL WEF 2021 — affiliations absentes de toute déclaration officielle, dont aucun média mainstream ne parle.",
            propositions: [
              "Déclaration obligatoire de toute participation à ces programmes, intégrée à la déclaration d'intérêts",
              "Registre public de ces affiliations, consultable par les citoyens",
              "Audit systématique des conflits d'intérêts liés à ces affiliations avant toute nomination",
              "Transparence sur le financement de ces programmes : qui paie pour former nos futurs dirigeants ?"
            ]
          },
          irrevocabilite: {
            probleme: "Le Projet propose des durées décennales pour les grands corps, mais qu'en est-il des postes de Premier président de la Cour des comptes (irrévocable), vice-président du Conseil d'État, gouverneur de la Banque de France (6 ans renouvelables), président du Conseil constitutionnel (9 ans) ?",
            propositions: [
              "Mandats limités pour tous les postes à la tête des institutions (10 ans max)",
              "Interdiction de nommer dans les 12-18 derniers mois d'un mandat présidentiel"
            ]
          },
          preSelectionExtraDemocratique: {
            probleme: "Les programmes YGL, FAF, Bilderberg identifient et labellisent les futurs dirigeants bien avant que les citoyens n'aient leur mot à dire.",
            reponseProjet: "RIC en toutes matières, mandats révocables, élection des magistrats, 100 000 signatures citoyennes, tirage au sort de citoyens dans les instances de contrôle.",
            question: "Est-ce suffisant pour contrebalancer des réseaux opérant en amont, à l'international, avec des moyens financiers et organisationnels considérables ?"
          },
          medias: {
            probleme: "Ces réseaux intègrent artistes, sportifs et célébrités comme relais d'influence (DiCaprio, Bono, Shakira, Federer — tous YGL, jamais présentés comme tels dans les médias).",
            reponseProjet: "Expropriation des médias oligarchiques et transformation en SCOP.",
            question: "Si les médias sont détenus par leurs salariés et non par des oligarques eux-mêmes intégrés à ces réseaux, la transparence émerge-t-elle naturellement ?"
          }
        }
      },
      questionsOuvertes: {
        title: "Questions ouvertes pour la suite",
        content: [
          "Comment définir un registre public des affiliations sans tomber dans le fichage, tout en garantissant la transparence ?",
          "Faut-il appliquer la logique décennale du Projet à tous les postes institutionnels clés ?",
          "Faut-il ajouter une question de rétroactivité pour les nominations en cours ?",
          "5 ans de carence sont-ils suffisants face à des réseaux opérant sur des décennies ?",
          "Le pantouflage triangulaire (privé → public → institution de contrôle) est-il suffisamment couvert ?",
          "Peut-on réguler un système quand les régulateurs en sont eux-mêmes issus ?",
          "Le Projet répond par les citoyens tirés au sort et le RIC en toute matière — est-ce suffisant ?"
        ]
      },
      conclusion: {
        title: "Conclusion",
        content: {
          bilan: "Le pantouflage est un mécanisme structurel, préparé en amont par des réseaux de sélection transatlantiques et consolidé en aval par des nominations irrévocables.",
          mesuresProjet: "Démission définitive, carence de 5 ans, transparence décennale, réforme structurelle de la haute fonction publique — des mesures concrètes et significatives.",
          limites: "Ces mesures s'attaquent au moment du passage sans couvrir directement ce qui le prépare en amont, ni ce qui le verrouille en aval.",
          actualite: "Le cas Montchalin, Ferrand et les autres démontrent que le verrouillage est en cours — c'est exactement ce contre quoi le Projet cherche à nous prémunir.",
          objectif: "L'objectif n'est pas de trouver toutes les réponses, mais d'identifier les bonnes questions — celles que les mesures actuelles ne posent pas.",
          prochaine: "La semaine prochaine : nouveau volet sur la transparence (patrimoine des hauts fonctionnaires, agendas ministériels publics)."
        }
      }
    }
  }
};


// ┌─────────────────────────────────────────────────────────────────────────┐
// │  ⚖️ THÈME 3 : LES VIOLENCES POLITIQUES                                │
// └─────────────────────────────────────────────────────────────────────────┘

export const violencesPolitiques = {

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 7 — Commissions d'enquête et violences politiques (25 février 2026)
  // ═══════════════════════════════════════════════════════════════════════
  session7: {
    title: "Commissions d'enquête et violences politiques",
    date: "25 février 2026",
    duration: "2h",
    sections: {

      // ─────────────────────────────────────────────────────────────────
      // BLOC 1 — Qu'est-ce que les violences politiques ?
      // (fusion : rappel succinct + definition)
      // ─────────────────────────────────────────────────────────────────
      definition: {
        title: "Qu'est-ce que les violences politiques ?",
        content: [
          "Ce soir, on ouvre un nouveau chapitre : les violences politiques et la proposition du Projet de créer des commissions d'enquête et un Tribunal populaire pour y répondre.",
          {
            intro: "Les violences politiques ne se limitent pas aux coups de matraque ou aux tirs de LBD. C'est l'ensemble des moyens par lesquels le pouvoir impose sa volonté aux citoyens en dehors du cadre démocratique normal.",
            formes: [
              { icon: "🛡️", type: "Violence physique d'État", detail: "Maintien de l'ordre devenu répression : charges sans sommation, tirs de LBD dans les visages, grenades de désencerclement, nasses, gardes à vue préventives, violence dans les lieux de privation de liberté" },
              { icon: "⚖️", type: "Violence judiciaire", detail: "Utilisation du système judiciaire comme arme politique : gardes à vue massives, comparutions immédiates expéditives, poursuites disproportionnées contre des manifestants, impunité des responsables de violences d'État" },
              { icon: "🏛️", type: "Violence institutionnelle", detail: "Verrouillage des institutions, passage en force via le 49.3, nominations pour neutraliser les contre-pouvoirs, refus d'appliquer les recommandations des organes de contrôle" },
              { icon: "💶", type: "Violence économique", detail: "Précarisation organisée, destruction des services publics, privatisations, violence de l'impôt injuste ou de l'austérité imposée" },
              { icon: "🗣️", type: "Violence symbolique", detail: "Mépris de classe institutionnalisé ('gens qui ne sont rien', 'traverser la rue'), criminalisation du mouvement social (manifestants transformés en 'casseurs' ou 'ultras')" }
            ],
            objectifCommun: "Toutes ces formes de violence servent le même objectif : maintenir l'ordre oligarchique en place, décourager la contestation et protéger les intérêts de ceux qui détiennent le pouvoir."
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 2 — La répression
      // (fusion : intimidation + giletsJaunes + armesUtilisees + auDelaGiletsJaunes)
      // ─────────────────────────────────────────────────────────────────
      repression: {
        title: "La répression",
        content: [
          { niveau: "1. La dissuasion", detail: "Quand manifester signifie risquer de perdre un œil, une main, ou de se retrouver en garde à vue 24 heures, le calcul coût-bénéfice de la protestation change radicalement. Castaner a décoré ~9 000 agents au titre d'une 'promotion exceptionnelle médaille de la sécurité intérieure Gilets jaunes' — dont certains impliqués dans des enquêtes pour violences." },
          { niveau: "2. L'asymétrie de la sanction", detail: "Les manifestants sont poursuivis massivement et condamnés rapidement. Les agents responsables de violences bénéficient d'une impunité quasi totale. Message : le pouvoir peut faire ce qu'il veut, vous non." },
          { niveau: "3. La normalisation", detail: "À force de répétition, la violence d'État devient 'le maintien de l'ordre'. Les commissions d'enquête produisent des rapports que personne n'applique. L'IGPN classe la majorité des plaintes sans suite. La CJR protège les ministres." },
          { niveau: "4. Le verrouillage", detail: "Les mêmes personnes qui ordonnent ou couvrent ces violences sont ensuite nommées à des postes de contrôle irrévocables. Le système se protège lui-même." },
          {
            intro: "Le mouvement des Gilets jaunes (17 novembre 2018) est un cas d'école pour comprendre l'ampleur des violences politiques en France.",
            coteManifestants: {
              source: "Ministère de l'Intérieur, décompte David Dufresne",
              chiffres: [
                { number: "2 495", label: "personnes blessées (chiffres officiels)" },
                { number: "23-25", label: "personnes éborgnées" },
                { number: "5", label: "mains arrachées" },
                { number: "1", label: "personne amputée d'un testicule" },
                { number: "11", label: "personnes décédées (accidents liés aux blocages)" }
              ]
            },
            repressionJudiciaire: {
              source: "Ministère de la Justice, France Bleu (15 nov. 2019)",
              chiffres: [
                { number: "12 107", label: "interpellations en six mois" },
                { number: "10 852", label: "gardes à vue" },
                { number: "3 200", label: "condamnations (dont 40% de prison ferme)" }
              ]
            },
            enquetesPolicieres: {
              chiffres: [
                { number: "401", label: "enquêtes judiciaires confiées à l'IGPN (source : ministère de la Justice, janv. 2020)" },
                { number: "155", label: "classées sans suite (plus d'un tiers — source : Le JDD, janv. 2020)" },
                { number: "0", label: "policier condamné pour les 23 personnes éborgnées, cinq ans après (source : AFP / Factuel, nov. 2023)" }
              ]
            },
            asymetrie: "3 200 condamnations de manifestants, zéro condamnation de policier pour les personnes éborgnées. L'asymétrie est structurelle."
          },
          {
            contexte: "La France est l'un des seuls pays d'Europe occidentale à utiliser ce type d'armement contre des manifestants.",
            chiffresGlobaux: [
              { number: "12 908", label: "tirs de LBD recensés en six mois (source : Franceinfo, 18 mai 2019)" }
            ],
            journee1erDecembre: {
              date: "1er décembre 2018 à Paris (CRS uniquement)",
              munitions: [
                { number: "7 940", label: "grenades lacrymogènes" },
                { number: "800", label: "grenades de désencerclement" },
                { number: "339", label: "grenades GLI-F4 (contenant 25g de TNT)" },
                { number: "776", label: "cartouches de LBD" }
              ],
              note: "Total toutes forces confondues : estimé entre 10 000 et 15 000 grenades"
            },
            alertes: "Amnesty International, l'ONU, le Conseil de l'Europe, le Défenseur des droits se sont inquiétés de l'usage excessif de la force en France.",
            lancet: {
              source: "The Lancet (Chauvin et al., 2 nov. 2019)",
              resultat: "43 cas de blessures oculaires causées par les armes 'non-létales' sur la période fév. 2016-août 2019, dont l'immense majorité concentrée sur 2018-2019"
            }
          },
          { source: "Basta!", stat: "864 morts suite à interventions policières, 1977-2022 (45 ans)" },
          { source: "ACAT (2016), rapport 'L'ordre et la force'", stat: "89 cas de violences policières entre 2005 et 2015, dont 26 mortels. Sur ces cas, 7 seulement ont donné lieu à des condamnations." },
          "Manifestations contre la réforme des retraites (2023), Sainte-Soline, émeutes après la mort de Nahel — à chaque fois le même schéma : violence disproportionnée, enquêtes opaques, impunité quasi systématique."
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 3 — Commissions d'enquête
      // (fusion : commissionsEnquete + limites + bilanCommissions)
      // ─────────────────────────────────────────────────────────────────
      commissions: {
        title: "Commissions d'enquête",
        content: [
          {
            fondement: "Article 51-2 de la Constitution (révision de 2008), ordonnance du 17 novembre 1958.",
            pouvoirsTheoriques: [
              "Droit de citation directe (toute personne convoquée est tenue de se présenter)",
              "Auditions sous serment (faux témoignage passible de 5 ans de prison et 75 000€ d'amende, art. 434-13 à 434-15 du code pénal)",
              "Pouvoir d'investigation sur pièces et sur place",
              "Droit de tirage (chaque groupe politique peut obtenir une commission par an, institué le 15 sept. 1988)"
            ],
            droitOpposition: "Les fonctions de président ou de rapporteur reviennent de droit à un membre d'un groupe d'opposition."
          },
          { limite: "Temporalité", detail: "Mission limitée à 6 mois maximum. Impossible de reconstituer sur le même sujet pendant 12 mois. Six mois pour enquêter sur des violences systémiques couvrant des années." },
          { limite: "Aucun pouvoir judiciaire", detail: "Les commissions ne rendent pas la justice. Elles constatent et recommandent, mais ne peuvent ni poursuivre, ni condamner, ni sanctionner. Comme le dit Jean-Jacques Urvoas : 'le juge cherche des responsabilités ; le Parlement des dysfonctionnements'." },
          { limite: "Irrecevabilité judiciaire", detail: "Une commission ne peut pas enquêter sur des faits faisant l'objet de poursuites judiciaires (art. 6, ordonnance 1958). Dès qu'une information judiciaire est ouverte — même si elle ne mène nulle part — le Parlement est bloqué." },
          { limite: "Composition politique", detail: "30 membres à la proportionnelle des groupes : la majorité présidentielle y est représentée. La commission sur le maintien de l'ordre (2020) a produit des recommandations (limitation du LBD, réforme de l'IGPN). Pratiquement aucune appliquée." },
          { limite: "Les auditions sont un jeu de dupes", detail: "Serment obligatoire mais pas de droit à un avocat, pas d'accès au dossier, pas de droit au silence. La CEDH (arrêt Corbet et autres c/ France, 2015) a jugé que ce régime pose problème au regard du droit de ne pas s'auto-incriminer. Résultat : les auditionnés mentent (risque infime) ou se retranchent derrière leur droit. Pendant ce temps, les parlementaires bénéficient de l'immunité (art. 26)." },
          {
            condamnation: {
              nombre: "1 seule condamnation pour faux témoignage depuis 1958",
              qui: "Professeur Michel Aubier, condamné en appel (2018) à 20 000€ d'amende pour avoir omis de déclarer qu'il était salarié de Total lors de son audition sur la pollution de l'air (Sénat, 2015)",
              source: "Le Club des Juristes ; Cour d'appel de Paris, 9 nov. 2018"
            },
            affaireBenalla: {
              contexte: "Février 2019, le Sénat conclut que Benalla et Crase 'se sont rendus coupables de faux témoignage'. Mars 2019, le Bureau du Sénat transmet 5 noms au parquet : Benalla, Crase, Kohler, Strzoda, général Lavergne.",
              resultat: "Juin 2019 : le procureur Rémy Heitz classe sans suite les cas de Strzoda, Kohler et Lavergne. L'enquête pour faux témoignage de Benalla et Crase, ouverte en avril 2019, est toujours pendante plus de six ans après. Zéro condamnation pour parjure.",
              sources: "Rapport Sénat n°18-324 ; Public Sénat (21 mars 2019, 27 juin 2019)"
            },
            affaireMcKinsey: {
              contexte: "Mars 2022, le Sénat saisit la justice pour suspicion de faux témoignage de Karim Tadjeddine (McKinsey) — déclarait payer l'IS en France alors que le cabinet n'en avait pas payé depuis au moins dix ans.",
              resultat: "À ce jour, pas de condamnation.",
              source: "Public Sénat, 25 mars 2022"
            },
            synthese: "Des dizaines de commissions d'enquête en 70 ans de Ve République. Des centaines d'auditions. Des milliers de pages de rapports. Et au bout : une condamnation pour parjure, des recommandations classées sans suite, et un système qui continue.",
            citationFondapol: {
              source: "Fondapol (octobre 2025), 'Le Parlement enquête, le droit vacille'",
              texte: "Le délit de faux témoignage se révèle 'faiblement dissuasif'. Les parlementaires les plus déterminés dénoncent des faux témoignages 'avant tout pour rechercher un effet médiatique'."
            }
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 4 — La CJR
      // (fusion : cjr + bilanCJR)
      // ─────────────────────────────────────────────────────────────────
      cjr: {
        title: "La CJR",
        content: [
          {
            creation: "Créée en 1993 dans le contexte de l'affaire du sang contaminé, pour juger les membres du gouvernement pour les actes commis dans l'exercice de leurs fonctions.",
            composition: "15 juges : seulement 3 magistrats de la Cour de cassation et 12 parlementaires (6 députés + 6 sénateurs). Des ministres jugés par leurs collègues.",
            citation: {
              auteur: "Cécile Guérin-Bargues (Pr. droit public, Paris-Panthéon-Assas)",
              texte: "Les décisions de la CJR sont 'peu convaincantes', les condamnations 'très faibles', la composition crée un 'soupçon de complaisance' ou 'une politisation de la justice'."
            }
          },
          {
            stats: [
              { number: "22 166", label: "requêtes reçues (source : RDLF, 2025)" },
              { number: "17", label: "informations ouvertes" },
              { number: "9", label: "décisions rendues (concernant 12 ministres)" },
              { number: "0", label: "condamnation à de la prison ferme" }
            ],
            decisions: {
              relaxes: [
                "Laurent Fabius et Georgina Dufoix (sang contaminé, 1999)",
                "Ségolène Royal (diffamation, 2000)",
                "Édouard Balladur (affaire Karachi, 2021)",
                "Éric Dupond-Moretti (prise illégale d'intérêts, 2023 — relaxé alors que le PNF estimait l'infraction caractérisée)"
              ],
              dispensesDePeine: [
                "Edmond Hervé (sang contaminé, déclaré coupable mais dispensé de sanction, 1999)",
                "Christine Lagarde (affaire Tapie, déclarée coupable mais dispensée de peine, 2016 — affaire ayant coûté 403M€ aux contribuables)"
              ],
              condamnationsAvecSursis: [
                "Michel Gillibert (3 ans avec sursis, 2004, après 10 ans d'instruction)",
                "Charles Pasqua (1 an avec sursis, 2010)",
                "Jean-Jacques Urvoas (1 mois avec sursis, 2019)",
                "François Léotard (2 ans avec sursis, 2021)",
                "Kader Arif (1 an avec sursis)"
              ]
            },
            covid: {
              date: "7 juillet 2025",
              resultat: "Non-lieu général — Édouard Philippe, Agnès Buzyn et Olivier Véran bénéficient tous d'un non-lieu. Plus de 20 000 des 22 166 requêtes étaient liées au Covid.",
              source: "Vie-publique.fr, juillet 2025"
            },
            paradoxe: "Une prise illégale d'intérêts est punie moins gravement si son auteur est ministre que s'il est un agent public subalterne — alors que le principe du droit veut qu'une infraction est plus grave quand commise par quelqu'un qui a un devoir de probité.",
            casPasqua: "La CJR a relaxé Charles Pasqua des accusations de corruption passive, alors que la cour d'appel de Paris avait condamné deux prévenus pour corruption active au bénéfice de ce même ministre — deux corrupteurs avérés, mais aucun corrompu.",
            citationLeGall: {
              auteur: "Henri-Claude Le Gall (ancien président de la CJR)",
              texte: "Très souvent les juges, sénateurs ou députés, connaissent très bien les ministres qu'ils jugent, et ont beaucoup de mal à rester détachés et à juger objectivement."
            },
            synthese: "22 000+ requêtes, 9 décisions, 0 prison ferme — c'est ce que le Projet appelle une 'impunité de facto'."
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 5 — Mesures 1 à 3
      // (fusion : mesure1 + mesure2 + mesure3)
      // ─────────────────────────────────────────────────────────────────
      mesures123: {
        title: "Mesures 1 à 3",
        content: [
          {
            principe: "Création d'un Tribunal populaire et d'un Comité de clémence chargés de la 'transition républicaine', dont l'autorité sera déclinée localement, avec une existence de dix ans.",
            droitSpecial: "Droit spécial, rétroactif, à compétence limitée aux faits passés, pouvoir de sanction limité à des peines courtes. Pas de justice expéditive ni de vengeance, mais un mécanisme temporaire et borné.",
            comiteClemence: "Après une période de latence, les condamnés pourront voir leur situation révisée, même si leur 'dignité nationale' ne pourra pas être restituée. Modèle inspiré des commissions vérité et réconciliation.",
            comparaison: "Aujourd'hui : un policier mutile un manifestant → enquête IGPN → plus d'un tiers des plaintes classées sans suite. Avec le Tribunal populaire : faits examinés par une instance indépendante, avec rétroactivité.",
            page: "pp. 10"
          },
          {
            cible: "L'ensemble des fonctionnaires ayant participé, supervisé ou donné visa à des opérations de maintien de l'ordre menées sous les trois mandats précédents.",
            principe: "Briser la chaîne de commandement de l'impunité : on ne poursuit pas seulement l'agent qui a tiré, mais aussi celui qui a donné l'ordre, supervisé, couvert.",
            rattachement: "Placé sous la direction du Tribunal populaire, avec 'pleins pouvoirs administratifs', sous le seul contrôle du Comité de clémence.",
            comparaison: "Aujourd'hui : les poursuites sont exercées par le parquet → ministère de la Justice → gouvernement. Le gouvernement qui ordonne les violences est le même qui décide des poursuites."
          },
          {
            enquetes: [
              "Responsabilité des dirigeants dans la crise du Covid-19 et destruction du système de santé (rappel : non-lieu CJR, juillet 2025)",
              "Laboratoires d'expérimentation et de guerre bactériologique, en particulier le laboratoire P4 de Wuhan",
              "Levée du secret défense sur les conseils de défense organisés à l'Élysée concernant le Covid-19",
              "Cabinets de consultance (McKinsey, BCG — rappel : lien familial Montchalin/BCG)",
              "Spoliation de biens nationaux (Alcatel, Arcelor, Alstom, Areva)",
              "Infractions touchant au respect de la souveraineté populaire et nationale, via un Procureur de la Nation élu"
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 6 — Mesures 4 à 6
      // (fusion : mesure4 + mesure5 + mesure6)
      // ─────────────────────────────────────────────────────────────────
      mesures456: {
        title: "Mesures 4 à 6",
        content: [
          {
            principe: "Amnistie et commission de réparation pour les Gilets jaunes, les militants des convois, les soignants sanctionnés et les militants politiques réprimés lors des trois mandats précédents.",
            rappel: "3 200 condamnations de manifestants pendant les Gilets jaunes (40% de prison ferme). Des milliers de vies brisées pour avoir exercé un droit constitutionnel.",
            temoignage: {
              nom: "Alexandre Frey",
              detail: "Blessé le 8 décembre 2018 à Paris, déclarait à l'AFP n'avoir 'aucune nouvelle de mon dossier, même par rapport à mes avocats, il n'y a personne au bout du fil, c'est le néant'."
            }
          },
          {
            principe: "Transformation en haute cour sous l'autorité du Tribunal populaire et du Comité de clémence, avec tirage au sort intégral du jury.",
            effet: "Fin du jugement des pairs par les pairs. Plus de parlementaires qui jugent leurs collègues ministres. Des citoyens tirés au sort.",
            page: "pp. 15-17"
          },
          {
            justice: [
              { mesure: "Élection des magistrats et création d'un Procureur de la Nation élu", effet: "Fin de la dépendance du parquet vis-à-vis de l'exécutif" },
              { mesure: "Fusion AFA, MICAF, HATVP et offices d'enquête en un seul organisme", effet: "Un seul interlocuteur, une seule base de données, une seule capacité d'enquête et de sanction" },
              { mesure: "Reversement des effectifs de police judiciaire de la DGSI à la PJ et interdiction de communication entre renseignements et parquets", effet: "Fin de l'utilisation des services de renseignement à des fins politiques" },
              { mesure: "Transcription par IA des étapes de la procédure pénale, enregistrement et diffusion systématique des audiences", effet: "Transparence totale du processus judiciaire" }
            ],
            interieur: [
              { mesure: "Création d'un corps d'inspection indépendant des forces de l'ordre", effet: "Fin de l'IGPN telle qu'on la connaît" },
              { mesure: "Dissolution des BRAV-M", effet: "Fin des Brigades de Répression de l'Action Violente Motorisées" },
              { mesure: "Suppression des BAC", effet: "Au profit d'une police de proximité" },
              { mesure: "Récépissé de contrôle d'identité, enregistrement systématique des interventions, port obligatoire du matricule", effet: "Traçabilité de chaque intervention" },
              { mesure: "Contraventionnalisation de l'outrage", effet: "L'outrage ne serait plus un délit passible de prison mais une contravention — fin de l'outil de pression" },
              { mesure: "Abandon des outils de maintien de l'ordre 'intermédiaires', fin de l'utilisation d'unités non-spécialisées", effet: "Fin de l'armement disproportionné contre les manifestants" }
            ],
            pages: "pp. 15-19"
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 7 — Bilan & Sources
      // (fusion : questionsOuvertes + conclusion + sources)
      // ─────────────────────────────────────────────────────────────────
      bilanSources: {
        title: "Bilan & Sources",
        content: [
          "Comment garantir l'indépendance d'un tribunal qui traite de violences politiques (par nature politique) ? Le modèle des commissions vérité et réconciliation (Afrique du Sud) montre que c'est possible, mais repose sur une volonté politique exceptionnelle.",
          "La limitation à dix ans et à des peines courtes est-elle suffisante ? Le caractère rétroactif du droit spécial pose-t-il un problème au regard du principe de non-rétroactivité de la loi pénale ?",
          "Le Projet propose un corps d'inspection indépendant, mais comment le protéger de la cooptation à terme ? L'IGPN montre que même un organe créé pour contrôler finit par protéger. Faut-il des jurys citoyens systématiques pour chaque plainte ?",
          "Faut-il aller jusqu'à l'interdiction pure et simple du LBD et des grenades de désencerclement, comme le demande Amnesty International ?",
          "La transformation de la CJR en haute cour avec jury citoyen résout la partialité, mais comment éviter que le nouveau système reproduise le même entonnoir (22 000+ requêtes, 9 procès) ?",
          "Peut-on réformer un système de l'intérieur quand les gardiens du système sont ceux-là mêmes qu'il faudrait contrôler ?",
          "Le Projet répond par la souveraineté populaire (RIC, mandats révocables, tirage au sort, élection des magistrats). Mais ces outils supposent un transfert de pouvoir que le pouvoir en place n'a aucun intérêt à concéder.",
          {
            constat: "Les violences politiques en France ne sont pas des 'bavures' ou des 'dérapages' isolés, mais un mécanisme structurel au service du maintien de l'ordre oligarchique.",
            commissions: "Les commissions d'enquête parlementaires sont structurellement incapables de produire des résultats concrets : 6 mois de travaux, aucun pouvoir de sanction, recommandations ignorées, une seule condamnation pour parjure en 70 ans de Ve République.",
            cjrBilan: "La CJR, en 30 ans et 22 000+ requêtes, n'a prononcé aucune peine de prison ferme et a relaxé la majorité des ministres — y compris l'affaire Covid classée par un non-lieu général en juillet 2025.",
            igpn: "L'IGPN a classé plus d'un tiers des enquêtes Gilets jaunes sans suite. Cinq ans après, aucun policier condamné pour les personnes éborgnées.",
            reponseProjet: "Face à ce système d'impunité structurelle, le Projet propose une rupture : Tribunal populaire temporaire avec rétroactivité, comité de poursuites ciblant la chaîne de commandement, transformation de la CJR en haute cour citoyenne, élection des magistrats, fusion des organes anti-corruption, corps d'inspection indépendant.",
            prochaine: "La semaine prochaine : aux origines des violences politiques."
          },
          {
            giletsJaunes: [
              "Ministère de l'Intérieur : 2 495 blessés côté manifestants (oct. 2019)",
              "France Bleu (15 nov. 2019) : 11 000 gardes à vue, 3 200 condamnations, 313 enquêtes IGPN",
              "David Dufresne / Mediapart : 24 éborgnés, 5 mains arrachées",
              "Le JDD (janv. 2020) : 401 enquêtes, 155 classées sans suite",
              "AFP / Factuel (nov. 2023) : 23 éborgnés, zéro condamnation",
              "The Lancet (Chauvin et al., 2 nov. 2019) : 43 cas de blessures oculaires",
              "ACAT (2016), 'L'ordre et la force' : 89 cas, 26 mortels, 7 condamnations",
              "Basta! : 864 morts suite à interventions policières (1977-2022)",
              "Franceinfo (18 mai 2019) : 12 908 tirs de LBD",
              "Amnesty International France (2019) : demande de suspension du LBD",
              "Mediapart (17 juil. 2019) : 9 162 agents décorés"
            ],
            commissionsEnquete: [
              "Vie-publique.fr / Philippe Blachèr (oct. 2023) : art. 51-2, ordonnance 1958",
              "Assemblée nationale : fiches de synthèse n°61",
              "Fondapol (oct. 2025) : 'Le Parlement enquête, le droit vacille'",
              "Le Club des Juristes (mai 2025) : une seule condamnation (Michel Aubier)",
              "Dalloz Actualité : 'Audition devant la commission d'enquête : un résidu de barbarie'",
              "Public Sénat : affaire Benalla (21 mars 2019, 27 juin 2019)",
              "Sénat : Rapport n°18-324 (20 fév. 2019)",
              "Public Sénat : McKinsey (25 mars 2022)",
              "Rapport AN n°3786 : commission maintien de l'ordre (janv. 2021)",
              "CEDH : Corbet et autres c/ France (19 mars 2015)"
            ],
            cjr: [
              "Vie-publique.fr (juil. 2025) : non-lieu Covid, bilan des 9 décisions",
              "RDLF (2025) : 22 166 requêtes, 17 informations, 9 décisions",
              "RDLF (2025) : 'Repenser la responsabilité pénale des ministres'",
              "France 24 (nov. 2023) : juridiction d'exception contestée",
              "Cécile Guérin-Bargues (Paris-Panthéon-Assas, RDLF 2025) : anomalie institutionnelle"
            ],
            projet: [
              "Le Projet (8e édition) : 'Fin de l'Impunité' (pp. 10) — Tribunal populaire, Comité de clémence, comité de poursuites",
              "Le Projet : 'La Justice' (pp. 15-17) — transformation CJR, élection magistrats, fusion AFA/MICAF/HATVP",
              "Le Projet : 'L'Intérieur' (pp. 18-19) — corps d'inspection indépendant, dissolution BRAV-M, suppression BAC"
            ]
          }
        ]
      }

    }
  },

// ═══════════════════════════════════════════════════════════════════════
  // SESSION 8 — Aux origines des violences politiques (4 mars 2026)
  // ═══════════════════════════════════════════════════════════════════════
  session8: {
    title: "Aux origines des violences politiques",
    date: "4 mars 2026",
    duration: "2h",
    sections: {

      // ─────────────────────────────────────────────────────────────────
      // BLOC 1 — Rappel de la session précédente
      // ─────────────────────────────────────────────────────────────────
      rappel: {
        title: "Rappel de la session précédente",
        content: [
          "Les violences politiques forment un système à cinq niveaux : physique, judiciaire, institutionnelle, économique et symbolique.",
          "Les Gilets jaunes ont illustré l'asymétrie structurelle : 3 200 manifestants condamnés (40% prison ferme), zéro policier condamné pour 23 personnes éborgnées.",
          "Les outils de contrôle censés corriger — commissions d'enquête, CJR, IGPN — sont structurellement incapables de produire des sanctions.",
          "Question centrale de cette session : pourquoi ce système existe-t-il depuis si longtemps, et comment a-t-il évolué pour devenir aussi efficace ?"
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 2 — Origines historiques
      // ─────────────────────────────────────────────────────────────────
      originesHistoriques: {
        title: "Aux origines historiques des violences politiques",
        content: [
          {
            periode: "L'héritage hobbesien (fin XVIIe – XVIIIe siècle)",
            intro: "Thomas Hobbes, dans le Léviathan (1651), pose les bases théoriques que Max Weber formalisera : l'État détient le monopole de la violence physique légitime. Les individus cèdent leur droit naturel à la violence en échange de la protection du souverain.",
            probleme: "Cette légitimité est utilisée non pour protéger les citoyens, mais pour protéger les intérêts de ceux qui contrôlent l'État — c'est exactement ce que la Révolution française va mettre en crise, tout en posant les fondements de la violence d'État moderne."
          },
          {
            periode: "La Révolution française (1789–1799) : berceau de la violence politique moderne",
            intro: "La Révolution invente simultanément deux choses contradictoires : la souveraineté populaire et la Terreur d'État. C'est dans cette tension que naissent toutes les formes de violence politique qu'on connaît aujourd'hui.",
            elements: [
              {
                titre: "Violence physique institutionnalisée",
                detail: "La Terreur (1793–1794) fait exécuter entre 16 000 et 40 000 personnes selon les estimations — menée au nom du peuple, par des institutions élues (Comité de Salut public, Tribunal révolutionnaire). Pour la première fois, la violence d'État se légitime par la volonté générale, non par la grâce divine."
              },
              {
                titre: "Violence judiciaire comme outil politique",
                detail: "La loi du 22 prairial an II (juin 1794) supprime toutes les garanties procédurales : plus d'avocat, pas de témoins à charge, seule peine possible : la mort. Modèle de la 'justice d'exception' dont on retrouve l'écho dans les comparutions immédiates actuelles."
              }
            ],
            heritage: "Ce que la Révolution lègue : la violence peut être légitime si exercée au nom du peuple — équation dangereuse utilisée pendant deux siècles pour justifier des répressions que rien ne justifie."
          },
          {
            periode: "Du XIXe siècle à la IIIe République : la professionnalisation de la répression",
            moments: [
              {
                nom: "La répression de juin 1848",
                detail: "L'armée tire sur les ouvriers insurgés de Paris : 1 500 à 3 000 morts, 12 000 arrestations, 4 000 déportés en Algérie. Première fois que l'État républicain utilise la violence militaire massive contre le mouvement ouvrier. Le général Cavaignac est investi de pouvoirs dictatoriaux par l'Assemblée — prototype de la 'nécessité d'ordre public'."
              },
              {
                nom: "La Commune de Paris (1871) — La Semaine sanglante",
                detail: "Entre 10 000 et 30 000 morts selon les estimations — la plus grande répression politique de l'histoire française moderne. La IIIe République naissante construit aussitôt un récit de légitimation : les Communards sont présentés comme des 'fous', des 'criminels', des 'pétroleuses'. La violence symbolique suit et couvre la violence physique."
              },
              {
                nom: "La création des 'Brigades du Tigre' (1907)",
                detail: "Clemenceau crée les premières unités de police spécialisées dans la répression politique. Pour la première fois, l'État dispose d'un outil institutionnel permanent, professionnel et politiquement contrôlé. On passe de la répression militaire occasionnelle à la surveillance et répression permanentes."
              }
            ],
            note: "C'est aussi au XIXe siècle que naît le concept de 'classes dangereuses' (Honoré Frégier, 1840), construisant une association durable entre pauvreté, criminalité et menace politique — une construction idéologique encore opérante dans le discours sur les 'zones de non-droit'."
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 3 — Formes insidieuses de violences politiques
      // ─────────────────────────────────────────────────────────────────
      formesInsidieuses: {
        title: "Exemples de violences politiques insidieuses au cours de l'histoire",
        content: [
          {
            forme: "La surveillance comme violence préventive",
            periode: "Second Empire (Napoléon III)",
            detail: "Invention d'un système de surveillance politique systématique : mouchards, dossiers de police sur les opposants, contrôle des correspondances. L'effet de dissuasion est radical — quand on sait qu'on est surveillé, on s'autocensure. La violence n'a même pas besoin d'être exercée : sa potentialité suffit.",
            continuite: "Les fichiers de renseignement politique existent toujours en France. La logique est identique, avec des outils numériques infiniment plus puissants."
          },
          {
            forme: "La manipulation de l'information comme arme politique",
            exemple: "L'affaire Dreyfus (1894–1906)",
            detail: "Un officier innocent condamné sur la base de faux documents forgés par l'État-Major, avec la complicité des institutions judiciaires et militaires. Quand la vérité commence à émerger, l'appareil d'État produit de nouveaux faux, intimide les témoins et construit une campagne d'opinion. Émile Zola est poursuivi en justice pour sa lettre 'J'accuse' (L'Aurore, 13 janvier 1898).",
            echo: "On retrouve ce même schéma dans l'affaire Benalla : faux témoignages identifiés, transmis au parquet, classés sans suite. La sophistication des outils change, la logique reste identique."
          },
          {
            forme: "L'utilisation des crises comme vecteur d'expansion du pouvoir",
            reference: "Naomi Klein, The Shock Doctrine (2007)",
            detail: "Les crises — économiques, sécuritaires, sanitaires — sont utilisées comme prétexte pour accélérer des réformes qui n'auraient jamais pu passer en temps normal.",
            exemples: [
              "Les lois d'exception de 1793, adoptées sous la pression de la guerre",
              "Le Patriot Act américain : 342 pages adoptées six semaines après le 11 septembre 2001, que quasiment aucun parlementaire n'avait lues",
              "Les ordonnances Covid-19 : 30 ordonnances adoptées en mars 2020, dans l'opacité totale des conseils de défense à l'Élysée"
            ],
            lienProjet: "Le Projet demande la levée du secret défense sur les conseils de défense Covid-19 — parce que c'est là que les décisions ont été prises, loin de tout contrôle démocratique."
          },
          {
            forme: "La disqualification des victimes comme mécanisme systémique",
            detail: "Constante de l'histoire : avant de réprimer, il faut disqualifier. Les Communards sont des 'fous furieux', les grévistes des 'agitateurs', les Gilets jaunes des 'casseurs', les opposants au vaccin des 'complotistes'. Ce processus disqualifie moralement les victimes avant même que la répression n'ait lieu, rendant celle-ci acceptable — voire souhaitable — aux yeux de l'opinion.",
            reference: "Violence symbolique au sens de Pierre Bourdieu : elle conditionne l'espace du possible, détermine qui peut parler et être entendu."
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 4 — Violences politiques psychologiques
      // ─────────────────────────────────────────────────────────────────
      violencesPsychologiques: {
        title: "Les violences politiques psychologiques : définition et mécanismes",
        content: [
          {
            mecanisme: "Le gaslighting institutionnel",
            origine: "Terme issu du film Gaslight (1944) : un mari manipule sa femme pour lui faire croire qu'elle perd la raison.",
            definition: "Transposé au niveau politique : nier systématiquement des réalités documentées, faire douter les victimes de leur propre perception, renverser la charge de la preuve.",
            exemples: [
              "'Les LBD ne mutilent pas' — alors que 43 cas de blessures oculaires graves sont documentés sur la période Gilets jaunes",
              "'Il n'y a pas de violences policières en France' — répété par des responsables politiques alors que l'IGPN elle-même a ouvert 401 enquêtes judiciaires",
              "'Les commissions d'enquête fonctionnent' — alors que leurs recommandations sont systématiquement ignorées",
              "Covid-19 : 'les masques ne servent à rien' (janvier 2020), puis 'il faut porter le masque' (mai 2020) — contradiction jamais assumée, jamais expliquée"
            ],
            caracteristique: "Le gaslighting institutionnel est systémique : il ne vient pas d'un individu mais d'un appareil coordonné (gouvernement, médias, experts institutionnels) qui produit une réalité alternative cohérente et soutenue dans la durée."
          },
          {
            mecanisme: "Le chantage et la coercition",
            formes: [
              { type: "Coercition économique", detail: "Menace implicite ou explicite de perdre emploi, subventions, marchés publics pour toute organisation qui s'oppose trop frontalement. Associations, syndicats, médias dépendant de subventions publiques sont particulièrement vulnérables." },
              { type: "Coercition judiciaire préventive", detail: "Ouverture d'enquêtes préliminaires sans intention nécessaire de poursuivre — suffisante pour déstabiliser un adversaire, l'obliger à se défendre, l'empêcher d'agir." },
              { type: "Chantage à la réputation", detail: "Fuite d'informations judiciaires — illégale mais rarement sanctionnée — vers des médias complaisants, au moment stratégique." },
              { type: "Coercition corporelle et soumission chimique", detail: "Octobre 2023 : le sénateur Joël Guerriau mis en examen pour avoir versé de la MDMA dans le verre de la députée Sandrine Josso lors d'un dîner. Illustre la violence chimique comme outil de mise sous emprise. Ce que produit cette forme de violence : honte, doute sur sa propre perception, peur de ne pas être crue — le silence qui suit n'est pas de la complicité, c'est une réponse de survie." }
            ]
          },
          {
            mecanisme: "L'abus institutionnel et la violence administrative",
            detail: "La plus banale et la plus méconnue : l'exercice du pouvoir bureaucratique comme outil de contrôle et de punition.",
            formes: [
              "Le refus de traiter les dossiers dans les délais légaux",
              "La multiplication des contrôles fiscaux, sanitaires, administratifs ciblant des opposants — légaux dans leur forme, politiques dans leur ciblage",
              "La 'mort administrative' : suspendre une association en lui coupant ses subventions, sans jamais justifier cette décision devant une juridiction"
            ],
            lienProjet: "Le Projet propose une transparence absolue des agendas ministériels et une réduction des délais administratifs — parce que l'opacité est précisément ce qui permet l'arbitraire."
          },
          {
            mecanisme: "La normalisation et l'habitude",
            detail: "Le mécanisme psychologique le plus puissant : à force de répétition, l'inacceptable devient normal.",
            reference: "Stanley Milgram, expériences sur l'obéissance à l'autorité (1963) : des individus ordinaires peuvent administrer ce qu'ils croient être des chocs électriques mortels simplement parce qu'une autorité institutionnelle le demande.",
            paliers: "Ce qui était une exception devient la règle, ce qui était la règle devient la norme, ce qui était inimaginable devient envisageable. Le LBD40, utilisé pour la première fois en maintien de l'ordre en 2004, est aujourd'hui banal. Les gardes à vue préventives de masse, inimaginables sous la IVe République, sont aujourd'hui courantes."
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 5 — Le mensonge systématique comme arme politique
      // ─────────────────────────────────────────────────────────────────
      mensongeSystematique: {
        title: "« Tout va bien en France » : le mensonge systématique comme arme politique",
        content: [
          {
            titre: "La genèse : 2005 comme point de bascule",
            evenements: [
              {
                nom: "Le référendum sur le TCE (mai 2005)",
                detail: "55% des Français votent Non. Réponse du système : faire passer le traité de Lisbonne par voie parlementaire en 2008, sans référendum. Premier grand mensonge systémique de la période : 'votre vote compte' — puis il ne compte pas si vous votez mal."
              },
              {
                nom: "Les émeutes de novembre 2005",
                detail: "Nicolas Sarkozy qualifie les émeutiers de 'racailles' à 'nettoyer au Kärcher' — pas un dérapage, une stratégie de langage testée et assumée, qui inaugure une ère où l'invective personnelle remplace le débat politique."
              }
            ],
            continuite: "De 2005 à aujourd'hui : chaque crise est suivie non d'une remise en question, mais d'une intensification de la communication — plus d'éléments de langage, plus de novlangue, plus de déni."
          },
          {
            titre: "La fabrique des éléments de langage",
            detail: "Le mensonge cesse d'être individuel pour devenir industriel. Des formules coordonnées sont distribuées à l'ensemble des responsables pour qu'ils répondent à l'unisson. Quand dix ministres, quarante députés et vingt éditorialistes répètent la même formule dans la même semaine, elle prend la consistance d'une réalité — non parce qu'elle est vraie, mais parce qu'elle est omniprésente.",
            exemples: [
              { formule: "'Le quoi qu'il en coûte' (2020)", analyse: "Laisse entendre un effort solidaire exceptionnel — pendant que les contrats McKinsey se multiplient et que les conseils de défense décident dans l'opacité." },
              { formule: "'En même temps'", analyse: "Figure rhétorique qui noie la contradiction dans une fausse synthèse : réformer les retraites ET être social, taxer les riches ET les exonérer, défendre la souveraineté ET signer des traités de libre-échange." },
              { formule: "'Il n'y a pas d'alternative'", analyse: "Héritée du thatchérisme (TINA : There Is No Alternative). Transforme un choix politique en nécessité naturelle — la politique monétaire de la BCE, les règles budgétaires, la réforme des retraites deviennent indiscutables." },
              { formule: "'Les fake news'", analyse: "Retournement sémantique : le pouvoir s'approprie une critique initialement dirigée contre lui pour la retourner contre ses opposants. Quiconque conteste le récit officiel devient vecteur de 'désinformation'." }
            ]
          },
          {
            titre: "Le parallélisme accusatoire",
            definition: "Technique rhétorique : face à une accusation légitime, on ne répond pas sur le fond mais on retourne l'accusation contre son auteur.",
            exemples: [
              { sujet: "Dette publique", formule: "'C'est la gauche qui a creusé les déficits'" },
              { sujet: "Violences policières", formule: "'Et les violences contre les policiers ?'" },
              { sujet: "Pantouflage", formule: "'Tous les partis font ça'" }
            ],
            efficacite: "Exploite l'impartialité apparente des médias : pour montrer qu'ils ne prennent pas parti, les journalistes présentent 'les deux sons de cloche', ce qui donne au parallélisme une légitimité qu'il ne mérite pas."
          },
          {
            titre: "La novlangue française",
            reference: "Orwell, 1984 : la novlangue comme outil de contrôle par l'appauvrissement du langage — moins de mots, moins de nuances, moins de capacité à nommer ce qu'on vit.",
            dynamiques: [
              "Simplification du vocabulaire dans les programmes scolaires depuis les années 1980 : moins de mots appris, moins de capacité à nommer précisément et donc à contester.",
              "Technocratisation : les réformes deviennent des 'plans de transformation', des 'réformes structurelles', des 'ajustements paramétriques'. La réforme des retraites devient un 'rééquilibrage du système par répartition'.",
              "Euphémisation permanente : plus de 'licenciements' mais des 'plans de sauvegarde de l'emploi'. Plus de 'coupes' dans les budgets hospitaliers mais une 'rationalisation des dépenses'. Plus de 'casse' des services publics mais leur 'modernisation'.",
              "Réduction du temps de parole : formats en 30 secondes, tweets de 280 caractères, extraits de 15 secondes — structurellement incompatible avec la complexité des sujets, favorise mécaniquement le slogan sur l'argument."
            ]
          },
          {
            titre: "La censure douce : ce qui ne se dit pas",
            formes: [
              { type: "Censure par sélection éditoriale", detail: "La concentration des médias (Bolloré, Arnault, Saadé, Niel, Drahi, Kretinsky) produit non pas une censure par décret, mais une censure par choix éditorial. Certains sujets ne sont pas censurés : ils ne sont simplement pas traités, ou rendus illisibles." },
              { type: "Censure algorithmique", detail: "Sur les plateformes numériques, des sujets peuvent être 'démonétisés', 'shadowbannés', déprioritisés dans les algorithmes — sans décision explicite, sans recours possible. Le Projet est un exemple documenté de cette censure : comptes désactivés, vidéos retirées, sans justification claire." },
              { type: "Censure par l'agenda", detail: "Les médias choisissent ce dont on parle et comment. Une réforme impopulaire peut être votée pendant une semaine saturée par un fait divers ou un événement sportif — pas un complot, un mécanisme systémique qui produit les mêmes effets." },
              { type: "Auto-censure des journalistes", detail: "Dans un paysage médiatique concentré, les journalistes savent ce qu'on peut et ne peut pas écrire. Les rédactions sont des écosystèmes avec des règles implicites." }
            ]
          },
          {
            titre: "Quelques mensonges d'État documentés depuis 2005",
            exemples: [
              { affirmation: "'Le système de santé français est le meilleur du monde'", realite: "Le nombre de lits d'hôpitaux passe de 5,7 pour 1 000 habitants en 2000 à 3,2 en 2022 (OCDE). Les déserts médicaux touchent 8% du territoire." },
              { affirmation: "'La réforme des retraites est nécessaire pour sauver le système' (2023)", realite: "Le rapport du Conseil d'orientation des retraites lui-même (2022) indiquait que le système était globalement à l'équilibre à horizon 2032 dans plusieurs scénarios." },
              { affirmation: "'Les masques ne servent à rien' (Buzyn, janvier 2020)", realite: "→ 'Il faut porter le masque' (Castex, mai 2020). Contradiction jamais assumée, construite sur la pénurie de stocks que l'État avait lui-même laissé se vider." },
              { affirmation: "'La France est une démocratie exemplaire'", realite: "RSF classe la France au 21e rang de la liberté de la presse en 2024. Amnesty International documente chaque année des violations des droits humains lors des manifestations." },
              { affirmation: "'Nous n'avons rien à cacher' (sur les conseils de défense Covid)", realite: "La demande de levée du secret défense, portée par le Projet, n'a toujours pas abouti." }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 6 — Évolution dans le temps long
      // ─────────────────────────────────────────────────────────────────
      evolutionTempsLong: {
        title: "Évolution des violences politiques depuis les révolutions : France, Europe, Monde",
        content: [
          {
            periode: "XIXe siècle : de la violence militaire à la violence policière",
            detail: "Grande transformation : passage de la répression militaire occasionnelle à la surveillance et répression policière permanentes.",
            comparaison: {
              france: "1800 (refondation préfecture de police), 1848, 1871 — modèle issu de la gendarmerie napoléonienne.",
              angleterre: "Massacre de Peterloo (1819) : cavalerie contre manifestants pour le droit de vote. Choc tel que l'État britannique choisit de développer une police civile (Metropolitan Police Act, 1829) — origine du 'bobby', police de proximité sans armes à feu. Un modèle radicalement différent du modèle français, aux conséquences directes sur les cultures policières respectives aujourd'hui."
            }
          },
          {
            periode: "XXe siècle : l'industrialisation de la violence politique",
            elements: [
              { contexte: "Régimes totalitaires", detail: "Développement d'appareils de violence d'État inédits : Gestapo, NKVD soviétique, Stasi est-allemande. Ce qui est nouveau : la systématisation — surveillance de masse, fichiers, délations organisées, torture institutionnalisée." },
              { contexte: "Démocraties libérales", detail: "Formes plus subtiles : loi McCarthyite aux États-Unis (1950-1954), destruction de carrières par simple association. En France, les 'renseignements généraux' surveillent syndicats, partis politiques, intellectuels." }
            ]
          },
          {
            periode: "Fin du XXe siècle : la violence psychologique devient dominante",
            detail: "La violence physique directe devient de moins en moins acceptable politiquement — sous la pression du droit international des droits humains, de la montée des médias, de la société civile. Les appareils d'État s'adaptent.",
            mutations: [
              "En France, les 'affaires' des années 1990 montrent que la violence est de plus en plus institutionnelle et financière : l'État est capturé, mais la violence ne s'exerce plus avec des matraques — elle s'exerce avec des nominations, des marchés publics, des conflits d'intérêts.",
              "Émergence de la 'communication politique' comme outil de contrôle : cabinets de conseil, spin doctors, éléments de langage — professionnalisation du gaslighting institutionnel."
            ]
          },
          {
            periode: "XXIe siècle : surveillance numérique et retour de la violence physique",
            detail: "Combinaison du pire des deux mondes : sophistication des outils psychologiques hérités du XXe siècle et retour assumé de la violence physique.",
            elements: [
              { evenement: "Scandale Snowden (2013)", detail: "Révèle que les États-Unis surveillent massivement leurs propres citoyens et leurs alliés. La NSA collecte des métadonnées sur l'ensemble des communications mondiales — le Panoptique de Bentham réalisé à l'échelle planétaire." },
              { evenement: "Lois antiterroristes post-2015", detail: "Élargissent considérablement les pouvoirs de surveillance en Europe, souvent au-delà de ce que la lutte contre le terrorisme justifie. En France, la loi Renseignement de 2015 légalise la surveillance de masse." },
              { evenement: "Algorithmes de modération", detail: "Deviennent des outils de contrôle de l'information avec une opacité totale sur leurs critères. Forme de violence symbolique exercée non plus par l'État directement, mais par des entreprises privées en interaction avec lui." },
              { evenement: "Retour de la répression physique", detail: "Gilets jaunes en France, manifestations BLM aux États-Unis, Hong Kong — dans tous ces cas, les États démocratiques utilisent des niveaux de force que la communauté internationale avait théoriquement condamnés." }
            ]
          }
        ]
      },

      // ─────────────────────────────────────────────────────────────────
      // BLOC 7 — Conclusion
      // ─────────────────────────────────────────────────────────────────
      conclusion: {
        title: "Conclusion",
        content: {
          bilan: "On a remonté un fil long de deux siècles. Les violences politiques qu'on documente aujourd'hui ne sont pas des accidents ou des dérapages, mais le produit d'une construction historique délibérée, qui a perfectionné ses outils à chaque génération.",
          constante: "De la Terreur révolutionnaire à la surveillance numérique, de la répression de la Commune aux LBD des Gilets jaunes — la logique est constante : protéger l'ordre établi contre ceux qui le contestent, en utilisant l'ensemble des formes de violence disponibles (physique, judiciaire, institutionnelle, économique, symbolique, psychologique).",
          enjeu: "Ce qui change, c'est la sophistication. Et c'est précisément parce que ces formes sont devenues plus invisibles, plus difficiles à nommer, qu'il est important de mettre des mots sur ces mécanismes — car commencer à les comprendre, c'est aussi commencer à les démanteler.",
          anglesNonCouvertsByProjet: [
            "Le gaslighting institutionnel : comment le Projet propose-t-il de contrer la production industrielle du mensonge politique ?",
            "La surveillance numérique et les algorithmes de modération : angle peu traité dans les mesures actuelles.",
            "La responsabilité des communicants et spin doctors dans la fabrique des éléments de langage.",
            "La violence psychologique systématique : peut-on légiférer contre le gaslighting institutionnel ?"
          ],
          prochaine: "Session 9 : les mesures du Projet face aux violences politiques — connecter les outils proposés avec les réalités documentées ce soir."
        }
      }

    }
  },
  
  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 9 — Les mesures du Projet (11 mars 2026) — À VENIR
  // ═══════════════════════════════════════════════════════════════════════
  // session9: {
  //   title: "Les mesures du Projet",
  //   date: "11 mars 2026",
  //   duration: "2h",
  //   sections: {
  //     // À compléter après la session
  //   }
  // }
};
