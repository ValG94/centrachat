# Changelog - CENTRACHAT Website

## [1.0.1] - 2025-10-10

### 🔄 Modifications

#### Formulaire d'adhésion - Volume annuel
- **Mise à jour des montants** : Conversion des montants en euros vers les francs CFA (XAF)
- **Adaptation régionale** : Montants adaptés pour la zone CEMAC

#### Nouvelles tranches de volume annuel :
- **Tranche 1** : 0 - 30 000 000 FCFA (≈ 0 - 45 700 €)
- **Tranche 2** : 30 000 000 - 120 000 000 FCFA (≈ 45 700 - 182 900 €)
- **Tranche 3** : 120 000 000 - 300 000 000 FCFA (≈ 182 900 - 457 300 €)
- **Tranche 4** : Plus de 300 000 000 FCFA (≈ Plus de 457 300 €)

#### Traductions mises à jour :
- **Français** : Montants en FCFA avec séparateurs d'espaces
- **Anglais** : Montants en XAF avec séparateurs de virgules (format international)

### 💡 Justification des montants

Les nouveaux montants correspondent aux réalités économiques de la zone CEMAC :
- **Taux de change** : 1 EUR ≈ 656 FCFA (taux fixe)
- **Adaptation locale** : Montants cohérents avec les budgets d'approvisionnement des entreprises et institutions de la région
- **Segmentation** : Permet de cibler différents types d'organisations (PME, grandes entreprises, institutions publiques)

### 🔧 Fichiers modifiés

1. `src/components/JoinSection.jsx` - Formulaire d'adhésion
2. `src/i18n.js` - Traductions FR/EN pour les montants

### 🚀 Déploiement

Après ces modifications :
1. Redémarrer le serveur de développement
2. Tester le changement de langue (FR/EN) dans le formulaire
3. Vérifier l'affichage des montants en FCFA/XAF

---

## [1.0.0] - 2025-10-09

### 🎉 Version initiale
- Site vitrine bilingue complet pour CENTRACHAT INTERNATIONAL
- Design responsive avec animations Framer Motion
- Formulaire de contact fonctionnel avec API Nodemailer
- SEO optimisé pour la zone CEMAC
- Support multilingue FR/EN avec react-i18next
