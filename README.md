# Auditorium des Champs Libres - Fiche Technique

Site web présentant la fiche technique complète de l'Auditorium des Champs Libres à Rennes.

## 📋 Description

Ce site Hugo documente les équipements techniques et caractéristiques de l'auditorium :
- **Audio** : Système de diffusion HOLOPHONIX avec 80 HP Amadeus, parc matériel complet
- **Lumière** : Console GrandMA3, projecteurs AYRTON, parc DMX complet
- **Vidéo/Réseau** : Vidéoprojecteur 4K 20 000 lumens, mélangeurs, infrastructure réseau
- **Caractéristiques** : 348 places, dimensions scène, équipements scéniques

## 🚀 Développement Local

### Prérequis
- Hugo Extended 0.112.0+
- Go 1.22+
- Git

### Installation
```bash
# Cloner le repository avec les submodules
git clone --recurse-submodules https://github.com/TechAuditoLCLRennes/TechAuditoLCLRennes.github.io.git
cd TechAuditoLCLRennes.github.io

# Démarrer le serveur local
hugo server -D
```

Le site sera accessible à `http://localhost:1313`

## 📁 Structure du Projet

```
├── hugo.yaml             # Configuration Hugo
├── go.mod                # Dépendances Go
├── content/
│   ├── _index.md         # Page d'accueil
│   ├── audio.md          # Équipements audio
│   ├── lights.md         # Équipements lumière
│   ├── video-reseau.md   # Équipements vidéo/réseau
│   ├── contact.md        # Contacts
│   ├── views.md          # Visualisations 3D
│   └── map.md            # Plan d'accès
├── layouts/
│   └── shortcodes/
│       ├── views-360.html    # Visualisations 3D
│       └── map-access.html   # Carte OpenStreetMap
├── static/
│   └── assets/
│       ├── pdf/             # Documents techniques
│       ├── img/             # Images
│       ├── js/              # JavaScript (Three.js)
│       ├── 3D/              # Modèles 3D
│       └── virtual_cubes/   # Textures pour panoramas
└── themes/hextra/        # Thème Hextra (submodule)
```

## 🎨 Technologies

- **Hugo** : Générateur de sites statiques
- **Hextra** : Thème professionnel moderne
- **GitHub Pages** : Hébergement via GitHub Actions
- **Three.js** : Visualisations 3D et panoramas
- **Markdown** : Contenu des pages

## 📊 Fonctionnalités

### Visualisations 3D
- Modèle 3D de l'auditorium (Three.js + GLTFLoader)
- Panoramas 360° interactifs
- Contrôles orbitaux pour navigation

### Documentation Technique
- Tables détaillées d'équipements
- Plans et schémas techniques (PDF)
- Spécifications dimensionnelles
- Informations de contact

## 🔧 Maintenance

### Mise à jour du contenu
- Modifier les fichiers `.md` dans `content/`
- Ajouter les nouveaux PDF dans `static/assets/pdf/`
- Mettre à jour les images dans `static/assets/img/`

### Mise à jour des modèles 3D
- Remplacer `static/assets/3D/planes.glb`
- Mettre à jour les textures dans `static/assets/virtual_cubes/`

### Build et déploiement
```bash
# Build pour production
hugo --minify

# Déploiement automatique via GitHub Actions
git push origin main
```

## 📝 Licence

Ce projet est maintenu par l'équipe technique des Champs Libres.

## 📞 Contact

- **Email** : d.seignard@leschampslibres.fr
- **GitHub** : [@TechAuditoLCLRennes](https://github.com/TechAuditoLCLRennes)

---

[🗺️ Voir la carte](/map) • [🎭 Visualisations 3D](/views)
