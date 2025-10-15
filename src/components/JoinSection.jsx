import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Users, 
  TrendingDown, 
  Clock, 
  Shield,
  ArrowRight,
  Building,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const JoinSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    sector: '',
    volume: '',
    message: ''
  });

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Réduction des coûts',
      description: 'Jusqu\'à 30% d\'économies grâce à la négociation groupée'
    },
    {
      icon: Users,
      title: 'Réseau professionnel',
      description: 'Accès à un réseau de plus de 500 membres actifs'
    },
    {
      icon: Clock,
      title: 'Gain de temps',
      description: 'Processus d\'achat simplifié et accéléré'
    },
    {
      icon: Shield,
      title: 'Qualité garantie',
      description: 'Fournisseurs vérifiés et produits certifiés'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Votre demande d\'adhésion a été envoyée avec succès !');
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#14243D] mb-6">
            {t('join.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BFA046] to-[#14243D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('join.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#14243D] mb-8">
              {t('join.benefits.title')}
            </h3>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#14243D] to-[#BFA046] rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#14243D] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Membership Process */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-[#14243D] mb-4">
                Processus d'adhésion
              </h4>
              <div className="space-y-3">
                {[
                  'Soumission de votre demande',
                  'Évaluation de votre profil',
                  'Entretien avec notre équipe',
                  'Validation et intégration'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#BFA046]" />
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#14243D] mb-6">
                Formulaire d'adhésion
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="inline h-4 w-4 mr-1" />
                      Entreprise / Organisation *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BFA046] focus:border-transparent transition-colors"
                      placeholder="Nom de votre organisation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Personne de contact *
                    </label>
                    <input
                      type="text"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BFA046] focus:border-transparent transition-colors"
                      placeholder="Nom et prénom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BFA046] focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BFA046] focus:border-transparent transition-colors"
                      placeholder="+237 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secteur d'activité *
                    </label>
                    <select
                      name="sector"
                      required
                      value={formData.sector}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BFA046] focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez un secteur</option>
                      <option value="public">Collectivités & institutions publiques</option>
                      <option value="construction">BTP & infrastructures</option>
                      <option value="energy">Énergie & industrie</option>
                      <option value="health">Hôpitaux & santé</option>
                      <option value="hospitality">Hôtellerie & restauration</option>
                      <option value="commerce">Commerce & distribution</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('join.form.volume.label')}
                    </label>
                    <select
                      name="volume"
                      value={formData.volume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BFA046] focus:border-transparent transition-colors"
                    >
                      <option value="">{t('join.form.volume.placeholder')}</option>
                      <option value="0-30M">{t('join.form.volume.0-30M')}</option>
                      <option value="30M-120M">{t('join.form.volume.30M-120M')}</option>
                      <option value="120M-300M">{t('join.form.volume.120M-300M')}</option>
                      <option value="300M+">{t('join.form.volume.300M+')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BFA046] focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez vos besoins spécifiques..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#BFA046] hover:bg-[#a08a3a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 group"
                >
                  {t('join.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
