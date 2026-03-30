# CENTRACHAT INTERNATIONAL - Site Vitrine

Site vitrine bilingue professionnel pour CENTRACHAT INTERNATIONAL, première centrale d'achats panafricaine basée à Yaoundé, Cameroun.

## 🌟 Fonctionnalités

- **Design moderne et professionnel** avec les couleurs de marque (bleu nuit #14243D, or #BFA046)
- **Site bilingue** français/anglais avec i18next
- **Responsive design** optimisé pour mobile, tablette et desktop
- **Animations fluides** avec Framer Motion
- **Formulaire de contact fonctionnel** avec envoi d'email via Nodemailer
- **SEO optimisé** avec métadonnées complètes et données structurées
- **Bouton WhatsApp flottant** pour contact direct
- **Accessibilité** conforme aux standards web

## 🚀 Technologies utilisées

- **React 19** avec Vite
- **TailwindCSS** pour le styling
- **Framer Motion** pour les animations
- **react-i18next** pour l'internationalisation
- **Lucide React** pour les icônes
- **shadcn/ui** pour les composants UI
- **Nodemailer** pour l'envoi d'emails

## 📁 Structure du projet

```
centrachat-website/
├── public/
├── src/
│   ├── assets/
│   │   └── centrachat-logo.jpeg
│   ├── components/
│   │   ├── ui/                    # Composants shadcn/ui
│   │   ├── Header.jsx             # Navigation principale
│   │   ├── HeroSection.jsx        # Section héro avec logo
│   │   ├── AboutSection.jsx       # À propos de l'entreprise
│   │   ├── ServicesSection.jsx    # Services offerts
│   │   ├── SectorsSection.jsx     # Secteurs d'activité
│   │   ├── JoinSection.jsx        # Formulaire d'adhésion
│   │   ├── ContactSection.jsx     # Section contact
│   │   ├── ContactForm.jsx        # Formulaire de contact
│   │   ├── ServiceCard.jsx        # Carte de service
│   │   └── Footer.jsx             # Pied de page
│   ├── App.jsx                    # Composant principal
│   ├── App.css                    # Styles personnalisés
│   ├── i18n.js                    # Configuration i18n
│   └── main.jsx                   # Point d'entrée
├── api/
│   └── contact.js                 # API route pour l'envoi d'emails
├── package.json
└── README.md
```

## 🛠️ Installation et démarrage

### Prérequis
- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd centrachat-website

# Installer les dépendances
pnpm install
# ou
npm install
```

### Configuration des variables d'environnement
Créer un fichier `.env` à la racine du projet :

```env
# Configuration SMTP pour l'envoi d'emails
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app
```

### Démarrage en développement
```bash
# Démarrer le serveur de développement
pnpm run dev
# ou
npm run dev

# Le site sera accessible sur http://localhost:5173
```

### Build pour la production
```bash
# Construire le projet
pnpm run build
# ou
npm run build

# Prévisualiser la build
pnpm run preview
# ou
npm run preview
```

## 🌐 Déploiement

### Déploiement sur Vercel (recommandé)
1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement dans Vercel
3. Déployer automatiquement

### Déploiement sur Netlify
1. Connecter le repository à Netlify
2. Configurer les variables d'environnement
3. Build command: `pnpm run build`
4. Publish directory: `dist`

### Déploiement manuel
```bash
# Build du projet
pnpm run build

# Le dossier dist/ contient les fichiers à déployer
```

## 📧 Configuration de l'envoi d'emails

Le formulaire de contact utilise Nodemailer pour envoyer des emails. Configuration requise :

1. **Gmail** : Utiliser un mot de passe d'application
2. **Autres fournisseurs** : Configurer les paramètres SMTP appropriés
3. **Variables d'environnement** : Définir SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS

## 🎨 Personnalisation

### Couleurs de marque
Les couleurs sont définies dans `src/App.css` :
- Bleu nuit principal : `#14243D`
- Or secondaire : `#BFA046`
- Gris clair : `#F8F8F8`

### Contenu multilingue
Les traductions sont dans `src/i18n.js`. Pour ajouter une nouvelle langue :
1. Ajouter les traductions dans l'objet `resources`
2. Mettre à jour la configuration i18n

### Ajout de nouvelles sections
1. Créer le composant dans `src/components/`
2. Importer et ajouter dans `src/App.jsx`
3. Ajouter les traductions dans `src/i18n.js`

## 📱 Fonctionnalités spéciales

### WhatsApp Business
Bouton flottant configuré pour le numéro +237 655 42 42 42

### Carte interactive CEMAC
Section dédiée aux pays de la zone CEMAC avec possibilité d'intégrer Leaflet

### Formulaires intelligents
- Validation côté client et serveur
- Messages de confirmation
- Gestion des erreurs

## 🔧 Scripts disponibles

```bash
# Développement
pnpm run dev

# Build production
pnpm run build

# Prévisualisation
pnpm run preview

# Linting
pnpm run lint
```

## 📞 Contact et support

**CENTRACHAT INTERNATIONAL**
- **Adresse** : Avenue Rosa Park, Lieu-dit Ambassade des États-Unis, Yaoundé, Cameroun
- **Téléphone** : +237 655 42 42 42
- **Email** : contact@centrachat.africa
- **WhatsApp** : +237 655 42 42 42

## 📄 Licence

© CENTRACHAT INTERNATIONAL 2025. Tous droits réservés.

---

**Développé avec ❤️ pour la première centrale d'achats panafricaine**
