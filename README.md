# 🐝 R75 — Réflexions autour du Projet

Application pour les sessions de Rélexion autour du Projet de La Ruche 75 (Discord)

## 📱 Fonctionnalités

- **Sessions thématiques** : Médias oligarchiques, Pantouflage, et plus à venir
- **Design liquid glass** moderne avec thème sombre et doré
- **Responsive** : fonctionne sur mobile et desktop
- **Interactif** : réactions, questions, sondages
- **Évolutif** : ajout facile de nouvelles sessions chaque semaine

## 🎨 Design System

| Élément | Valeur |
|---------|--------|
| **Fond** | #111111 (noir profond) |
| **Accent** | #eec21d 
| **Texte** | #fae8a4  |
| **Police titres** | Flamengo |
| **Police corps** | Distrampler Luxury Serif |

## 🔤 Polices

Les polices **Flamengo** et **Distrampler** sont incluses dans le dossier `fonts/` :
- `fonts/Flamengo.otf` → Titres et sous-titres
- `fonts/Distrampler.otf` → Corps de texte

## 🚀 Déploiement

### Avec Vercel (recommandé)

1. Push ce repository sur GitHub
2. Connecte-le à Vercel
3. Déploiement automatique !

### En local

```bash
npm install
npm run dev
```

## 📅 Sessions

Les sessions ont lieu :
- **Jeudis à 18h**
- **Dimanches à 17h**

## 📝 Ajouter une nouvelle session

1. Ouvre `sessions-data.js`
2. Trouve le thème concerné
3. Copie un bloc de session existant
4. Modifie le contenu avec tes notes
5. Change `available: false` en `available: true` dans `sessionsConfig`
6. Commit et push !

## 📂 Structure

```
r75-app/
├── index.html          # Page HTML principale
├── main.jsx            # Point d'entrée React
├── App.jsx             # Application principale
├── sessions-data.js    # Données des sessions (à modifier chaque semaine)
├── fonts/              # Polices personnalisées
│   ├── Flamengo.otf    # Titres
│   ├── Distrampler.otf # Corps de texte
│   └── README.md
├── package.json        # Dépendances
├── vite.config.js      # Configuration Vite
└── vercel.json         # Configuration Vercel
```

---

🐝 *Butiner notre futur ensemble, abeille par abeille, réflexion après réflexion...*
