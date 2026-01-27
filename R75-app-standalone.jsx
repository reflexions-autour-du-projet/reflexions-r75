import React, { useState, useEffect } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// RÉFLEXION AUTOUR DU PROJET — R75
// Application pour les sessions de Rélexion autour du Projet de La Ruche 75 (Discord)
// ═══════════════════════════════════════════════════════════════════════════

// DONNÉES DES SESSIONS
const prochaineSession = {
  titre: "Session 5 : La fin de l'oligarchie, les mesures du Projet",
  date: "Jeudi 29 janvier à 18h",
  theme: "pantouflage"
};

const sessionsConfig = {
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

const mediasOligarchiques = {
  session1: {
    title: "Introduction à l'oligarchie",
    date: "18 janvier 2025",
    duration: "1h",
    sections: {
      definition: {
        title: "Qu'est-ce que l'oligarchie ?",
        content: [
          { type: "definition", term: "Oligarchie", etymology: "Du grec oligos (peu nombreux) + arkhê (pouvoir)", meaning: "Gouvernement / pouvoir exercé par un petit nombre" },
          "L'oligarchie, ce n'est pas qu'une question d'argent, mais d'entrecroisements et d'interpénétration de différents pouvoirs."
        ]
      },
      pouvoirs: {
        title: "Les 4 pouvoirs oligarchiques",
        content: [
          { icon: "💰", name: "Pouvoir économique", detail: "Grandes fortunes, CAC 40, multinationales" },
          { icon: "🏛️", name: "Pouvoir politique", detail: "Pantouflage, cabinets ministériels" },
          { icon: "📺", name: "Pouvoir médiatique", detail: "Concentration des médias" },
          { icon: "📋", name: "Pouvoir administratif", detail: "Instances de contrôle, ENA/INSP" }
        ]
      },
      mesures: {
        title: "5 mesures clés du Projet",
        content: [
          { numero: 1, titre: "Expropriation des médias oligarchiques", description: "Transformation en SCOP", page: "p.8" },
          { numero: 2, titre: "Fin du pantouflage", description: "Période de carence de 5 ans", page: "p.14" },
          { numero: 3, titre: "Transparence totale", description: "Patrimoine des hauts fonctionnaires publics", page: "p.11" },
          { numero: 4, titre: "Élection de postes clés", description: "Gouverneur BdF, procureurs...", page: "p.8" },
          { numero: 5, titre: "Commissions citoyennes", description: "Contrôle citoyen partout", page: "p.8" }
        ]
      },
      oligarques: {
        title: "Les 8 propriétaires de médias",
        content: [
          { name: "Martin Bouygues", medias: "TF1, LCI, TMC.." },
          { name: "Vincent Bolloré", medias: "Canal+, CNews, C8.." },
          { name: "Bernard Arnault", medias: "Les Échos, Le Parisien.." },
          { name: "Xavier Niel", medias: "Le Monde, L'Obs.." }
        ]
      }
    }
  },
  session2: {
    title: "Modèle oligarchique vs SCOP",
    date: "22 janvier 2025",
    duration: "1h",
    sections: {
      rappel: { title: "Rappel", content: ["L'oligarchie = concentration de pouvoirs économique, politique, administratif et médiatique"] },
      modeleActuel: {
        title: "Le modèle oligarchique actuel",
        content: { type: "comparaison", elements: [
          { label: "Structure", value: "Propriétaires milliardaires" },
          { label: "Rentabilité", value: "Rarement l'objectif — médias déficitaires" }
        ]}
      },
      subventions: {
        title: "Les subventions publiques",
        content: { stat: { number: "1 milliard €", label: "d'aides à la presse chaque année" } }
      }
    }
  },
  session3: {
    title: "Questions et Réflexions",
    date: "25 janvier 2025",
    duration: "2h",
    sections: {
      constat: {
        title: "Le constat",
        content: [{ type: "stat", number: "28", label: "familles/entités possèdent tous les médias" }]
      },
      synthese: {
        title: "Questions ouvertes",
        content: ["Comment revenir à une vraie information ?", "La SCOP est-elle le meilleur modèle ?"]
      }
    }
  }
};

const pantouflage = {
  session4: {
    title: "Introduction au pantouflage",
    date: "29 janvier 2025",
    duration: "2h",
    sections: {
      definition: {
        title: "Qu'est-ce que le pantouflage ?",
        content: { type: "definition", origine: { date: "Début 19ème siècle", contexte: "Création haute fonction publique sous Napoléon" },
          terminologie: [
            { terme: "« La botte »", signification: "Servir l'État 10 ans — rigueur militaire" },
            { terme: "« La pantoufle »", signification: "Quitter pour le privé — confort" }
          ],
          remboursement: "31 000 € si on ne sert pas l'État 10 ans"
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
              { periode: "2008-2012", poste: "Rothschild & Cie", type: "privé" },
              { periode: "2014-2016", poste: "Ministre de l'Économie", type: "public" },
              { periode: "2017-2027", poste: "Président", type: "public" }
            ]
          },
          autres: [
            { nom: "Alexis Kohler", detail: "Ex-SG Élysée → Société Générale" },
            { nom: "Jean-Baptiste Djebbari", detail: "Ex-ministre Transports → CMA-CGM (retoqué)" }
          ],
          stat: { number: "40+", label: "conseillers ont quitté pour le privé depuis 2017" }
        }
      },
      governmentSachs: {
        title: "Government Sachs",
        content: {
          intro: "Goldman Sachs = 'Government Sachs' aux USA",
          exemples: [
            { nom: "Henry Paulson", avant: "PDG Goldman", apres: "Secrétaire Trésor Bush" },
            { nom: "Mario Draghi", avant: "VP Goldman Europe", apres: "Président BCE, PM Italien" }
          ],
          mondial: [
            { nom: "Rishi Sunak", pays: "UK", detail: "PM 2022-2024" },
            { nom: "Mark Carney", pays: "Canada", detail: "PM Canadien" }
          ]
        }
      },
      youngLeaders: {
        title: "Les Young Leaders",
        content: {
          concept: "Identifier et mettre en réseau les futurs dirigeants",
          citation: { auteur: "Klaus Schwab", texte: "Nous pénétrons les cabinets avec nos Young Global Leaders", source: "Harvard 2017" },
          programmes: [
            { nom: "French-American Foundation", depuis: "1981", format: "10 FR + 10 US, 30-40 ans", exemples: ["Macron (2012)", "Hollande (1996)"] },
            { nom: "WEF Young Global Leaders", depuis: "2004", format: "-38 ans, 1400 membres", exemples: [{ nom: "Macron (2016)", delai: "Président 1 an après" }] }
          ]
        }
      },
      mesures: {
        title: "Mesures du Projet",
        content: [
          { numero: 1, titre: "Carence de 5 ans", description: "Contre 3 ans actuellement", page: "p.14" },
          { numero: 2, titre: "Démission définitive", description: "Fin de la 'disponibilité'", page: "p.14" },
          { numero: 3, titre: "Transparence patrimoine", description: "Déclaration décennale", page: "p.14" }
        ]
      }
    }
  }
};

// COMPOSANT PRINCIPAL
export default function App() {
  const [currentTheme, setCurrentTheme] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [reactions, setReactions] = useState({ pollen: 0, miel: 0, alveole: 0 });
  const [showProjet, setShowProjet] = useState(false);

  const goToTheme = (theme) => { setCurrentTheme(theme); setCurrentSession(null); };
  const goToSession = (sessionId) => {
    setCurrentSession(sessionId);
    const data = currentTheme === 'medias' ? mediasOligarchiques : pantouflage;
    if (data[sessionId]) setCurrentSection(Object.keys(data[sessionId].sections)[0]);
  };
  const goHome = () => { setCurrentTheme(null); setCurrentSession(null); setCurrentSection(null); };
  const addReaction = (type) => setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }));

  // STYLES
  const styles = {
    app: { minHeight: '100vh', background: '#111', color: '#fae8a4', fontFamily: "'Distrampler', Georgia, 'Times New Roman', serif" },
    container: { maxWidth: '900px', margin: '0 auto', padding: '24px' },
    header: { textAlign: 'center', marginBottom: '48px' },
    title: { fontFamily: "'Flamengo'", fontSize: '32px', color: '#fff', marginBottom: '8px' },
    subtitle: { fontFamily: "'Flamengo'", fontSize: '24px', color: '#eec21d', letterSpacing: '0.15em' },
    card: { background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)', backdropFilter: 'blur(20px)', border: '1px solid rgba(238, 194, 29, 0.15)', borderRadius: '24px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease', marginBottom: '16px' },
    cardTitle: { fontFamily: "'Flamengo'", fontSize: '20px', color: '#fff', marginBottom: '8px' },
    cardDesc: { color: 'rgba(250, 232, 164, 0.7)', fontSize: '16px', marginBottom: '12px' },
    badge: { display: 'inline-block', padding: '6px 16px', background: 'rgba(238, 194, 29, 0.15)', borderRadius: '20px', fontSize: '15px', color: '#eec21d' },
    button: { background: 'rgba(238, 194, 29, 0.1)', border: '1px solid rgba(238, 194, 29, 0.2)', borderRadius: '12px', padding: '10px 20px', color: '#fae8a4', cursor: 'pointer', fontSize: '16px' },
    goldButton: { background: 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)', border: 'none', borderRadius: '30px', padding: '16px 32px', color: '#111', fontFamily: "'Flamengo'", fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
    banner: { background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.12) 0%, rgba(238, 194, 29, 0.03) 100%)', border: '1px solid rgba(238, 194, 29, 0.25)', borderRadius: '24px', padding: '24px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '16px' },
    nav: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px', padding: '8px', background: 'rgba(0,0,0,0.3)', borderRadius: '16px' },
    navBtn: (active) => ({ background: active ? 'linear-gradient(135deg, #eec21d 0%, #d4a516 100%)' : 'rgba(238, 194, 29, 0.1)', border: 'none', borderRadius: '12px', padding: '10px 16px', color: active ? '#111' : '#fae8a4', cursor: 'pointer', fontSize: '15px', fontWeight: active ? '600' : '400' }),
    reactions: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' },
    reactionBtn: { background: 'rgba(238, 194, 29, 0.1)', border: '1px solid rgba(238, 194, 29, 0.2)', borderRadius: '24px', padding: '12px 20px', color: '#fae8a4', cursor: 'pointer', fontSize: '16px' },
    definition: { background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.1) 0%, transparent 100%)', borderLeft: '4px solid #eec21d', borderRadius: '0 16px 16px 0', padding: '20px 24px', marginBottom: '16px' },
    defTerm: { fontFamily: "'Flamengo'", fontSize: '28px', color: '#eec21d', marginBottom: '8px' },
    stat: { background: 'linear-gradient(135deg, rgba(238, 194, 29, 0.15) 0%, rgba(238, 194, 29, 0.05) 100%)', borderRadius: '20px', padding: '32px', textAlign: 'center' },
    statNum: { fontFamily: "'Flamengo'", fontSize: '56px', color: '#eec21d', lineHeight: 1 },
    powerCard: { background: 'rgba(238, 194, 29, 0.05)', border: '1px solid rgba(238, 194, 29, 0.15)', borderRadius: '16px', padding: '20px', textAlign: 'center' },
    mesure: { display: 'flex', gap: '16px', background: 'rgba(238, 194, 29, 0.05)', border: '1px solid rgba(238, 194, 29, 0.15)', borderRadius: '16px', padding: '20px', alignItems: 'flex-start', marginBottom: '12px' },
    mesureNum: { width: '40px', height: '40px', background: 'rgba(238, 194, 29, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Flamengo'", fontSize: '18px', color: '#eec21d', flexShrink: 0 },
    timeline: { position: 'relative', paddingLeft: '28px' },
    timelineLine: { position: 'absolute', left: '8px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(180deg, #eec21d 0%, rgba(238,194,29,0.2) 100%)' },
    timelineDot: (type) => ({ position: 'absolute', left: '-20px', top: '6px', width: '16px', height: '16px', borderRadius: '50%', background: type === 'privé' ? '#e74c3c' : type === 'formation' ? '#3498db' : '#eec21d', border: '3px solid #111' }),
    modal: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' },
    modalContent: { background: '#1a1a1a', border: '1px solid rgba(238, 194, 29, 0.3)', borderRadius: '24px', padding: '32px', maxWidth: '600px', width: '100%', maxHeight: '80vh', overflow: 'auto', position: 'relative' },
    closeBtn: { position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', background: 'rgba(238, 194, 29, 0.1)', border: '1px solid rgba(238, 194, 29, 0.3)', borderRadius: '50%', color: '#fae8a4', cursor: 'pointer', fontSize: '20px' }
  };

  // RENDER CONTENT
  const renderContent = (content) => {
    if (!content) return null;
    if (Array.isArray(content)) return content.map((item, i) => renderItem(item, i));
    return renderItem(content, 0);
  };

  const renderItem = (item, key) => {
    if (typeof item === 'string') return <p key={key} style={{ color: 'rgba(250,232,164,0.85)', lineHeight: 1.7, marginBottom: '12px' }}>{item}</p>;
    
    if (item.type === 'definition' || item.term) {
      return (
        <div key={key} style={styles.definition}>
          <div style={styles.defTerm}>{item.term}</div>
          {item.etymology && <div style={{ color: 'rgba(250,232,164,0.6)', fontSize: '16px', fontStyle: 'italic', marginBottom: '8px' }}>{item.etymology}</div>}
          {item.meaning && <div style={{ color: '#fff', fontSize: '16px' }}>{item.meaning}</div>}
          {item.origine && <div style={{ marginTop: '16px', fontSize: '16px', color: 'rgba(250,232,164,0.6)' }}><strong style={{ color: '#eec21d' }}>Origine :</strong> {item.origine.date} — {item.origine.contexte}</div>}
          {item.terminologie && item.terminologie.map((t, i) => (
            <div key={i} style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', borderRadius: '10px', margin: '8px 0' }}>
              <span style={{ color: '#eec21d', fontWeight: '600' }}>{t.terme}</span>
              <span style={{ color: 'rgba(250,232,164,0.8)', marginLeft: '8px' }}>{t.signification}</span>
            </div>
          ))}
          {item.remboursement && <div style={{ marginTop: '12px', padding: '12px', background: 'rgba(238,194,29,0.1)', borderRadius: '10px', fontSize: '16px' }}>💰 {item.remboursement}</div>}
          {item.principes && <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>{item.principes.map((p, i) => <li key={i} style={{ color: 'rgba(250,232,164,0.8)', marginBottom: '8px' }}>{p}</li>)}</ul>}
        </div>
      );
    }
    
    if (item.type === 'stat' || (item.number && item.label)) {
      const stat = item.stat || item;
      return (
        <div key={key} style={styles.stat}>
          <div style={styles.statNum}>{stat.number}</div>
          <div style={{ fontSize: '18px', color: '#fff', marginTop: '8px' }}>{stat.label}</div>
          {stat.detail && <div style={{ fontSize: '16px', color: 'rgba(250,232,164,0.6)', marginTop: '4px' }}>{stat.detail}</div>}
        </div>
      );
    }

    if (item.icon && item.name) {
      return (
        <div key={key} style={styles.powerCard}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
          <div style={{ fontFamily: "'Flamengo'", fontSize: '16px', color: '#eec21d', marginBottom: '8px' }}>{item.name}</div>
          <div style={{ fontSize: '16px', color: 'rgba(250,232,164,0.7)' }}>{item.detail}</div>
        </div>
      );
    }

    if (item.numero !== undefined) {
      return (
        <div key={key} style={styles.mesure}>
          <div style={styles.mesureNum}>{item.numero}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Flamengo'", fontSize: '16px', color: '#fff', marginBottom: '6px' }}>{item.titre}</div>
            <div style={{ fontSize: '16px', color: 'rgba(250,232,164,0.7)', marginBottom: '6px' }}>{item.description}</div>
            {item.page && <div style={{ fontSize: '12px', color: '#eec21d' }}>📄 {item.page}</div>}
          </div>
        </div>
      );
    }

    if (item.name && item.medias) {
      return (
        <div key={key} style={{ background: 'rgba(238,194,29,0.05)', border: '1px solid rgba(238,194,29,0.15)', borderRadius: '12px', padding: '16px', marginBottom: '8px' }}>
          <div style={{ fontFamily: "'Flamengo'", fontSize: '15px', color: '#eec21d', marginBottom: '6px' }}>{item.name}</div>
          <div style={{ fontSize: '15px', color: 'rgba(250,232,164,0.7)' }}>{item.medias}</div>
        </div>
      );
    }

    if (item.type === 'comparaison') {
      return (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {item.elements.map((el, i) => (
            <div key={i} style={{ background: 'rgba(238,194,29,0.05)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '12px', color: '#eec21d', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{el.label}</div>
              <div style={{ fontSize: '15px', color: '#fae8a4' }}>{el.value}</div>
            </div>
          ))}
        </div>
      );
    }

    if (item.principal) {
      return (
        <div key={key}>
          <div style={{ background: 'linear-gradient(135deg, rgba(238,194,29,0.1) 0%, transparent 100%)', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
            <h4 style={{ fontFamily: "'Flamengo'", fontSize: '20px', color: '#eec21d', marginBottom: '16px' }}>{item.principal.nom}</h4>
            <div style={styles.timeline}>
              <div style={styles.timelineLine} />
              {item.principal.parcours.map((p, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: '16px', paddingLeft: '16px' }}>
                  <div style={styles.timelineDot(p.type)} />
                  <div style={{ color: 'rgba(250,232,164,0.5)', fontSize: '12px' }}>{p.periode}</div>
                  <div style={{ color: '#fff', fontWeight: '500' }}>{p.poste}</div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: '20px', marginTop: '20px', paddingLeft: '16px', fontSize: '12px', color: 'rgba(250,232,164,0.7)' }}>
                <span><span style={{ color: '#eec21d' }}>●</span> Public</span>
                <span><span style={{ color: '#e74c3c' }}>●</span> Privé</span>
                <span><span style={{ color: '#3498db' }}>●</span> Formation</span>
              </div>
            </div>
          </div>
          {item.autres && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontFamily: "'Flamengo'", fontSize: '16px', color: '#eec21d', marginBottom: '8px' }}>Autres exemples</h4>
              {item.autres.map((ex, i) => (
                <div key={i} style={{ background: 'rgba(238,194,29,0.05)', border: '1px solid rgba(238,194,29,0.15)', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ fontWeight: '600', color: '#fff', marginBottom: '6px' }}>{ex.nom}</div>
                  <div style={{ fontSize: '16px', color: 'rgba(250,232,164,0.7)' }}>{ex.detail}</div>
                </div>
              ))}
            </div>
          )}
          {item.stat && (
            <div style={{ marginTop: '24px', background: 'linear-gradient(135deg, rgba(238,194,29,0.15) 0%, rgba(238,194,29,0.05) 100%)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
              <span style={{ fontFamily: "'Flamengo'", fontSize: '36px', color: '#eec21d' }}>{item.stat.number}</span>
              <span style={{ fontSize: '16px', color: '#fae8a4', marginLeft: '12px' }}>{item.stat.label}</span>
            </div>
          )}
        </div>
      );
    }

    if (item.intro && item.exemples) {
      return (
        <div key={key}>
          <p style={{ color: 'rgba(250,232,164,0.85)', lineHeight: 1.7, marginBottom: '20px' }}>{item.intro}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {item.exemples.map((ex, i) => (
              <div key={i} style={{ background: 'rgba(238,194,29,0.05)', border: '1px solid rgba(238,194,29,0.15)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontFamily: "'Flamengo'", fontSize: '16px', color: '#eec21d', marginBottom: '8px' }}>{ex.nom}</div>
                {ex.avant && <div style={{ fontSize: '15px', color: 'rgba(250,232,164,0.6)', marginBottom: '4px' }}>Avant : {ex.avant}</div>}
                <div style={{ fontSize: '16px', color: '#fae8a4' }}>{ex.apres || ex.detail}</div>
              </div>
            ))}
          </div>
          {item.mondial && (
            <>
              <h4 style={{ fontFamily: "'Flamengo'", fontSize: '16px', color: '#eec21d', marginBottom: '12px' }}>Dans le monde</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {item.mondial.map((m, i) => (
                  <div key={i} style={{ background: 'rgba(238,194,29,0.05)', borderRadius: '10px', padding: '12px' }}>
                    <div style={{ fontSize: '12px', color: '#eec21d', marginBottom: '4px' }}>{m.pays}</div>
                    <div style={{ fontWeight: '600', color: '#fff' }}>{m.nom}</div>
                    <div style={{ fontSize: '15px', color: 'rgba(250,232,164,0.7)' }}>{m.detail}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      );
    }

    if (item.concept && item.programmes) {
      return (
        <div key={key}>
          <p style={{ color: 'rgba(250,232,164,0.85)', lineHeight: 1.7, marginBottom: '20px' }}>{item.concept}</p>
          {item.citation && (
            <div style={{ background: 'rgba(238,194,29,0.08)', borderLeft: '4px solid #eec21d', borderRadius: '0 12px 12px 0', padding: '20px', marginBottom: '24px' }}>
              <div style={{ fontSize: '15px', color: '#fae8a4', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '8px' }}>"{item.citation.texte}"</div>
              <div style={{ fontSize: '15px', color: '#eec21d' }}>— {item.citation.auteur}, {item.citation.source}</div>
            </div>
          )}
          {item.programmes.map((prog, i) => (
            <div key={i} style={{ background: 'rgba(238,194,29,0.05)', border: '1px solid rgba(238,194,29,0.15)', borderRadius: '16px', padding: '20px', marginBottom: '16px' }}>
              <div style={{ fontFamily: "'Flamengo'", fontSize: '18px', color: '#eec21d', marginBottom: '8px' }}>{prog.nom}</div>
              <div style={{ fontSize: '15px', color: 'rgba(250,232,164,0.6)', marginBottom: '12px' }}>Depuis {prog.depuis} — {prog.format}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {prog.exemples.map((ex, j) => (
                  <span key={j} style={{ padding: '6px 12px', background: 'rgba(238,194,29,0.1)', borderRadius: '20px', fontSize: '15px', color: '#fae8a4' }}>
                    {typeof ex === 'string' ? ex : `${ex.nom} → ${ex.delai}`}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  // ACCUEIL
  if (!currentTheme) {
    const mediasCount = sessionsConfig.medias.filter(s => s.available).length;
    const pantouflageCount = sessionsConfig.pantouflage.filter(s => s.available).length;

    return (
      <div style={styles.app}>
        <div style={styles.container}>
          <header style={styles.header}>
            <svg width="100" height="115" viewBox="0 0 100 115" style={{ marginBottom: '24px', filter: 'drop-shadow(0 0 20px rgba(238,194,29,0.3))' }}>
              <polygon points="50,2 95,28 95,87 50,113 5,87 5,28" fill="none" stroke="#eec21d" strokeWidth="4" />
              <text x="50" y="68" textAnchor="middle" fill="#eec21d" style={{ fontFamily: "'Flamengo'", fontSize: '28px', fontWeight: 'bold' }}>R75</text>
            </svg>
            <h1 style={styles.title}>RÉFLEXION AUTOUR DU PROJET</h1>
            <p style={styles.subtitle}>R75</p>
          </header>

          <div style={styles.banner}>
            <span style={{ fontSize: '32px' }}>📅</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', color: '#eec21d', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Prochaine session</div>
              <div style={{ fontFamily: "'Flamengo'", fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{prochaineSession.titre}</div>
              <div style={{ fontSize: '16px', color: 'rgba(250,232,164,0.7)' }}>{prochaineSession.date}</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={styles.card} onClick={() => goToTheme('medias')}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📺</div>
              <h2 style={styles.cardTitle}>Les médias oligarchiques</h2>
              <p style={styles.cardDesc}>Expropriation des médias oligarchiques et transformation en SCOP</p>
              <span style={styles.badge}>{mediasCount} sessions</span>
            </div>
            <div style={styles.card} onClick={() => goToTheme('pantouflage')}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚪</div>
              <h2 style={styles.cardTitle}>Le pantouflage</h2>
              <p style={styles.cardDesc}>Les allers-retours entre fonction publique et secteur privé</p>
              <span style={styles.badge}>{pantouflageCount} session</span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button style={styles.goldButton} onClick={() => setShowProjet(true)}>📜 Consulter Le Projet</button>
          </div>

          <footer style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid rgba(238,194,29,0.1)', textAlign: 'center', fontSize: '15px', color: 'rgba(250,232,164,0.5)' }}>
            <p>🐝 Butiner notre futur ensemble, abeille par abeille, réflexion après réflexion..</p>
            <p style={{ marginTop: '8px' }}>Sessions : <strong style={{ color: '#eec21d' }}>Jeudis 18h</strong> et <strong style={{ color: '#eec21d' }}>Dimanches 17h</strong></p> - sauf réunion
          </footer>
        </div>

        {showProjet && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <button style={styles.closeBtn} onClick={() => setShowProjet(false)}>×</button>
              <h2 style={{ fontFamily: "'Flamengo'", fontSize: '28px', color: '#eec21d', marginBottom: '24px' }}>Le Projet</h2>
              {['LUTTER — Fin de l\'oligarchie', 'VOTER — Souveraineté populaire', 'GRANDIR — Éducation, culture', 'PROTÉGER — Justice, sécurité', 'PRODUIRE — Réindustrialisation', 'SOIGNER — Santé publique', 'PARTAGER — Redistribution'].map((p, i) => (
                <div key={i} style={{ padding: '12px', background: 'rgba(238,194,29,0.05)', borderRadius: '10px', marginBottom: '8px', fontSize: '16px' }}>{p}</div>
              ))}
              <a href="https://ruches.org/sites/default/files/mediatheque/documents/2025-12/le-projet-8.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '16px', padding: '16px 28px', background: '#eec21d', color: '#111', borderRadius: '12px', textDecoration: 'none', fontWeight: '600' }}>📄 Lire le Projet</a>
            </div>
          </div>
        )}
      </div>
    );
  }

  // HUB THÈME
  if (!currentSession) {
    const isMedias = currentTheme === 'medias';
    const sessions = isMedias ? sessionsConfig.medias : sessionsConfig.pantouflage;
    const themeTitle = isMedias ? "Les médias oligarchiques" : "Le pantouflage";

    return (
      <div style={styles.app}>
        <div style={styles.container}>
          <button style={styles.button} onClick={goHome}>← Retour</button>
          <header style={{ textAlign: 'center', margin: '32px 0 48px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>{isMedias ? '📺' : '🚪'}</div>
            <h1 style={styles.title}>{themeTitle}</h1>
            <p style={{ fontSize: '16px', color: 'rgba(250,232,164,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>NOS PRIORITÉS › LUTTER › La fin de l'oligarchie</p>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {sessions.map((session, index) => (
              <div key={session.id} style={{ ...styles.card, opacity: session.available ? 1 : 0.5, cursor: session.available ? 'pointer' : 'not-allowed' }} onClick={session.available ? () => goToSession(session.id) : undefined}>
                <div style={{ fontSize: '32px', fontFamily: "'Flamengo'", color: '#eec21d', marginBottom: '12px' }}>0{index + (isMedias ? 1 : 4)}</div>
                <h3 style={{ fontFamily: "'Flamengo'", fontSize: '18px', color: '#fff', marginBottom: '8px' }}>{session.titre}</h3>
                <p style={{ fontSize: '16px', color: 'rgba(250,232,164,0.6)' }}>{session.date}</p>
                {!session.available && <div style={{ marginTop: '12px', fontSize: '15px', color: 'rgba(250,232,164,0.5)' }}>🔒 Bientôt</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // VUE SESSION
  const data = currentTheme === 'medias' ? mediasOligarchiques : pantouflage;
  const sessionData = data[currentSession];
  if (!sessionData) return null;

  const sections = Object.keys(sessionData.sections);
  const sectionData = sessionData.sections[currentSection];

  return (
    <div style={styles.app}>
      <div style={{ ...styles.container, maxWidth: '1000px' }}>
        <button style={styles.button} onClick={() => { setCurrentSession(null); setCurrentSection(null); }}>← Retour</button>
        
        <header style={{ background: 'linear-gradient(135deg, rgba(238,194,29,0.1) 0%, transparent 100%)', borderRadius: '20px', padding: '32px', margin: '24px 0' }}>
          <span style={styles.badge}>SESSION {currentSession.replace('session', '')}</span>
          <h1 style={{ ...styles.title, marginTop: '12px' }}>{sessionData.title}</h1>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '16px', color: 'rgba(250,232,164,0.7)' }}>
            <span>📅 {sessionData.date}</span>
            <span>⏱️ {sessionData.duration}</span>
          </div>
        </header>

        <nav style={styles.nav}>
          {sections.map(key => (
            <button key={key} onClick={() => setCurrentSection(key)} style={styles.navBtn(currentSection === key)}>
              {sessionData.sections[key].title}
            </button>
          ))}
        </nav>

        <div style={styles.card}>
          <h2 style={{ fontFamily: "'Flamengo'", fontSize: '24px', color: '#eec21d', marginBottom: '24px' }}>{sectionData.title}</h2>
          {Array.isArray(sectionData.content) ? (
            <div style={{ display: sectionData.content[0]?.icon ? 'grid' : 'flex', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', flexDirection: 'column' }}>
              {renderContent(sectionData.content)}
            </div>
          ) : renderContent(sectionData.content)}
        </div>

        <div style={styles.reactions}>
          {[{ key: 'pollen', emoji: '🌻'}, { key: 'miel', emoji: '🍯' }, { key: 'alveole', emoji: '🐝' }].map(({ key, emoji }) => (
            <button key={key} onClick={() => addReaction(key)} style={styles.reactionBtn}>
              {emoji} {reactions[key] > 0 && `(${reactions[key]})`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
