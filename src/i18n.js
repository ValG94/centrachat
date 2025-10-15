import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      // Navigation
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.services": "Nos services",
      "nav.sectors": "Secteurs",
      "nav.join": "Devenir membre",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.title": "CENTRACHAT INTERNATIONAL",
      "hero.subtitle": "One Hub, Many Buyers",
      "hero.description": "Première centrale d'achats panafricaine basée à Yaoundé. Nous mutualisons vos besoins pour négocier les meilleurs prix et optimiser vos approvisionnements.",
      "hero.cta": "Devenez membre",
      
      // About
      "about.title": "À propos de CENTRACHAT",
      "about.mission": "Notre mission est de crédibiliser et ancrer la marque dans le paysage africain grâce à la mutualisation et la solidarité économique.",
      "about.values.title": "Nos valeurs",
      "about.values.performance": "Performance",
      "about.values.transparency": "Transparence", 
      "about.values.solidarity": "Solidarité",
      "about.values.innovation": "Innovation",
      "about.values.local": "Ancrage local",
      
      // Services
      "services.title": "Nos services",
      "services.subtitle": "Comment fonctionne notre centrale d'achats",
      "services.mutualization.title": "Mutualisation des volumes",
      "services.mutualization.desc": "Nous regroupons vos besoins pour négocier les meilleurs prix.",
      "services.sourcing.title": "Sourcing international",
      "services.sourcing.desc": "Accès à un réseau de fournisseurs mondiaux validés.",
      "services.logistics.title": "Logistique intégrée",
      "services.logistics.desc": "Transport, douane, stockage et livraison sur site.",
      "services.quality.title": "Contrôle qualité & conformité",
      "services.quality.desc": "Assurez la fiabilité de vos achats grâce à nos procédures de contrôles SGS.",
      "services.tenders.title": "Appels d'offres mutualisés",
      "services.tenders.desc": "Réduisez vos coûts en participant à nos consultations groupées.",
      "services.consulting.title": "Conseil & audit achats",
      "services.consulting.desc": "Optimisez vos budgets d'approvisionnement.",
      
      // Sectors
      "sectors.title": "Secteurs d'activité",
      "sectors.subtitle": "Notre polyvalence au service de tous les secteurs",
      "sectors.public": "Collectivités & institutions publiques",
      "sectors.construction": "BTP & infrastructures",
      "sectors.energy": "Énergie & industrie",
      "sectors.health": "Hôpitaux & santé",
      "sectors.hospitality": "Hôtellerie & restauration",
      "sectors.commerce": "Commerce & distribution",
      
      // Join
      "join.title": "Devenir membre",
      "join.subtitle": "Rejoignez notre réseau de clients institutionnels",
      "join.benefits.title": "Avantages de l'adhésion",
      "join.benefits.negotiation": "Négociation groupée",
      "join.benefits.support": "Suivi personnalisé",
      "join.benefits.access": "Accès aux appels d'offres mutualisés",
      "join.cta": "Demander une adhésion",
      "join.form.volume.label": "Volume annuel estimé",
      "join.form.volume.placeholder": "Sélectionnez une tranche",
      "join.form.volume.0-30M": "0 - 30 000 000 FCFA",
      "join.form.volume.30M-120M": "30 000 000 - 120 000 000 FCFA", 
      "join.form.volume.120M-300M": "120 000 000 - 300 000 000 FCFA",
      "join.form.volume.300M+": "Plus de 300 000 000 FCFA",
      
      // Contact
      "contact.title": "Contact",
      "contact.subtitle": "Contactez-nous pour plus d'informations",
      "contact.form.name": "Nom",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Envoyer",
      "contact.address": "Avenue Rosa Park, Lieu-dit Ambassade des États-Unis, Yaoundé, Cameroun",
      "contact.phone": "+237 655 42 42 42",
      "contact.email": "foch@centrachat.africa",
      
      // Footer
      "footer.legal": "Mentions légales",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "CGU",
      "footer.copyright": "© CENTRACHAT INTERNATIONAL 2025. Tous droits réservés."
    }
  },
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Our services",
      "nav.sectors": "Sectors",
      "nav.join": "Join us",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.title": "CENTRACHAT INTERNATIONAL",
      "hero.subtitle": "One Hub, Many Buyers",
      "hero.description": "First pan-African purchasing hub based in Yaoundé. We pool your needs to negotiate the best prices and optimize your procurement.",
      "hero.cta": "Become a member",
      
      // About
      "about.title": "About CENTRACHAT",
      "about.mission": "Our mission is to establish credibility and anchor the brand in the African landscape through pooling and economic solidarity.",
      "about.values.title": "Our values",
      "about.values.performance": "Performance",
      "about.values.transparency": "Transparency",
      "about.values.solidarity": "Solidarity", 
      "about.values.innovation": "Innovation",
      "about.values.local": "Local anchoring",
      
      // Services
      "services.title": "Our services",
      "services.subtitle": "How our purchasing hub works",
      "services.mutualization.title": "Volume pooling",
      "services.mutualization.desc": "We group your needs to negotiate the best prices.",
      "services.sourcing.title": "International sourcing",
      "services.sourcing.desc": "Access to a network of validated global suppliers.",
      "services.logistics.title": "Integrated logistics",
      "services.logistics.desc": "Transport, customs, storage and on-site delivery.",
      "services.quality.title": "Quality control & compliance",
      "services.quality.desc": "Ensure the reliability of your purchases through our procedures.",
      "services.tenders.title": "Pooled tenders",
      "services.tenders.desc": "Reduce your costs by participating in our group consultations.",
      "services.consulting.title": "Purchasing consulting & audit",
      "services.consulting.desc": "Optimize your procurement budgets.",
      
      // Sectors
      "sectors.title": "Business sectors",
      "sectors.subtitle": "Our versatility serving all sectors",
      "sectors.public": "Communities & public institutions",
      "sectors.construction": "Construction & infrastructure",
      "sectors.energy": "Energy & industry",
      "sectors.health": "Hospitals & health",
      "sectors.hospitality": "Hotels & restaurants",
      "sectors.commerce": "Trade & distribution",
      
      // Join
      "join.title": "Join us",
      "join.subtitle": "Join our network of institutional clients",
      "join.benefits.title": "Membership benefits",
      "join.benefits.negotiation": "Group negotiation",
      "join.benefits.support": "Personalized support",
      "join.benefits.access": "Access to pooled tenders",
      "join.cta": "Request membership",
      "join.form.volume.label": "Estimated annual volume",
      "join.form.volume.placeholder": "Select a range",
      "join.form.volume.0-30M": "0 - 30,000,000 XAF",
      "join.form.volume.30M-120M": "30,000,000 - 120,000,000 XAF",
      "join.form.volume.120M-300M": "120,000,000 - 300,000,000 XAF",
      "join.form.volume.300M+": "More than 300,000,000 XAF",
      
      // Contact
      "contact.title": "Contact",
      "contact.subtitle": "Contact us for more information",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Send",
      "contact.address": "Avenue Rosa Park, US Embassy area, Yaoundé, Cameroon",
      "contact.phone": "+237 655 42 42 42",
      "contact.email": "foch@centrachat.africa",
      
      // Footer
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy policy",
      "footer.terms": "Terms of use",
      "footer.copyright": "© CENTRACHAT INTERNATIONAL 2025. All rights reserved."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
