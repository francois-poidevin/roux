# Brice Roux Formations — Site Web & Modèle 3D ADN

Site web one-scroll moderne et interactif développé pour **Brice Roux** (PhD • Formateur & Consultant Indépendant en Biologie Moléculaire).

## 🧬 Fonctionnalités

1. **Modèle 3D ADN (`dna.glb`) en arrière-plan** :
   - Chargé dès le démarrage de la page web via Three.js et `GLTFLoader`.
   - Rotation fluide et continue combinée au défilement de la page (scroll-driven animation).
   - Intégration robuste avec support direct (bundle base64) pour éviter toute erreur CORS lors d'une ouverture locale (`file://`) ou via serveur HTTP.

2. **Compétences & Expertises (issues de LinkedIn)** :
   - PCR Digitale (dPCR / ddPCR) & PCR Quantitative (qPCR).
   - Séquençage, Génomique & Clonage.
   - Validation de méthodes (ISO / BPL) & Troubleshooting.
   - Ingénierie pédagogique et accompagnement d'équipes scientifiques.

3. **Projets & Partenariats 2027** :
   - Appel à collaboration pour des journées de travaux pratiques de PCR digitale en région parisienne.

4. **Design & Performance** :
   - Design ultra-moderne avec Tailwind CSS, mode sombre élégant et typographie soignée.
   - Optimisé pour des performances fluides à 60 FPS.

## 🚀 Utilisation

Pour lancer le site web localement :

```bash
python3 -m http.server 8000
```

Puis ouvrir dans votre navigateur :
`http://localhost:8000`

Ou ouvrir directement le fichier `index.html` dans Google Chrome.
