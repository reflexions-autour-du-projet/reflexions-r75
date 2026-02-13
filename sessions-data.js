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
  titre: "Session 6 : Les mesures du Projet",
  date: "Vendredi 13 février à 18h",
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
    { id: 'session5', titre: "La sélection avant l'élection", date: "05/02", available: true },
    { id: 'session6', titre: "Les mesures du Projet", date: "13/02", available: false },
    { id: 'session7', titre: "Questions et Réflexions", date: "19/02", available: false },
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
          application: "S'applique aux réunions Bilderberg, French-American Foundation, certaines sessions du WEF..."
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
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 6 — Les mesures du Projet (13 février 2026) — À VENIR
  // ═══════════════════════════════════════════════════════════════════════
  // session6: {
  //   title: "Les mesures du Projet",
  //   date: "13 février 2026",
  //   duration: "2h",
  //   sections: {
  //     // À compléter après la session
  //   }
  // }

  // ═══════════════════════════════════════════════════════════════════════
  // SESSION 7 — Questions et Réflexions (19 février 2026) — À VENIR
  // ═══════════════════════════════════════════════════════════════════════
  // session7: {
  //   title: "Questions et Réflexions",
  //   date: "19 février 2026",
  //   duration: "2h",
  //   sections: {
  //     // À compléter après la session
  //   }
  // }
};
