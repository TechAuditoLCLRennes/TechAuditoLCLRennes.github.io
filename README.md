# Auditorium des Champs Libres - Fiche Technique

Site web présentant la fiche technique complète de l'Auditorium des Champs Libres à Rennes.

## 📋 Description

Ce site Jekyll GitHub Pages documente les équipements techniques et caractéristiques de l'auditorium :
- **Audio** : Système de diffusion HOLOPHONIX avec 80 HP Amadeus, parc matériel complet
- **Lumière** : Console GrandMA3, projecteurs AYRTON, parc DMX complet
- **Vidéo/Réseau** : Vidéoprojecteur 4K 20 000 lumens, mélangeurs, infrastructure réseau
- **Caractéristiques** : 348 places, dimensions scène, équipements scéniques

## 🚀 Développement Local

### Prérequis
- Ruby 3.0+
- Bundler gem
- Jekyll

### Installation
```bash
# Cloner le repository
git clone https://github.com/TechAuditoLCLRennes/TechAuditoLCLRennes.github.io.git
cd TechAuditoLCLRennes.github.io

# Installer les dépendances
bundle install

# Démarrer le serveur local
bundle exec jekyll serve
```

Le site sera accessible à `http://localhost:4000`

## 📁 Structure du Projet

```
├── _config.yml          # Configuration Jekyll
├── _layouts/
│   └── page.html        # Layout des pages
├── _includes/
│   ├── nav.html         # Navigation
│   ├── map.html         # Carte
│   └── views.html       # Visualisations 3D
├── assets/
│   ├── pdf/             # Documents techniques
│   ├── img/             # Images
│   ├── js/              # JavaScript (Three.js)
│   ├── 3D/              # Modèles 3D
│   └── virtual_cubes/   # Textures pour panoramas
├── index.md             # Page d'accueil
├── audio.md             # Équipements audio
├── lights.md            # Équipements lumière
├── video_reseau.md      # Équipements vidéo/réseau
└── views.md             # Visualisations 3D
```

## 🎨 Technologies

- **Jekyll** : Générateur de sites statiques
- **GitHub Pages** : Hébergement
- **Three.js** : Visualisations 3D et panoramas
- **Bootstrap** : Framework CSS (via thème retlab)
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
- Modifier les fichiers `.md` dans la racine
- Ajouter les nouveaux PDF dans `assets/pdf/`
- Mettre à jour les images dans `assets/img/`

### Mise à jour des modèles 3D
- Remplacer `assets/3D/planes.glb`
- Mettre à jour les textures dans `assets/virtual_cubes/`

### Build et déploiement
```bash
# Build pour production
bundle exec jekyll build

# Déploiement automatique via GitHub Pages
git push origin main
```

## 📝 Licence

Ce projet est maintenu par l'équipe technique des Champs Libres.

## 📞 Contact

- **Email** : d.seignard@leschampslibres.fr
- **GitHub** : [@TechAuditoLCLRennes](https://github.com/TechAuditoLCLRennes)

---

[🗺️ Voir la carte](map.md) • [🎭 Visualisations 3D](views.md)
