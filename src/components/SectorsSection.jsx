import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Building, 
  Hammer, 
  Zap, 
  Heart, 
  Coffee, 
  ShoppingCart 
} from 'lucide-react';

const SectorsSection = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      icon: Building,
      titleKey: 'sectors.public',
      color: 'from-blue-500 to-blue-600',
      examples: ['Ministères', 'Mairies', 'Ambassades', 'Organismes publics']
    },
    {
      icon: Hammer,
      titleKey: 'sectors.construction',
      color: 'from-orange-500 to-orange-600',
      examples: ['Matériaux de construction', 'Équipements BTP', 'Outillage', 'Véhicules']
    },
    {
      icon: Zap,
      titleKey: 'sectors.energy',
      color: 'from-yellow-500 to-yellow-600',
      examples: ['Équipements électriques', 'Générateurs', 'Panneaux solaires', 'Carburants']
    },
    {
      icon: Heart,
      titleKey: 'sectors.health',
      color: 'from-red-500 to-red-600',
      examples: ['Matériel médical', 'Médicaments', 'Équipements hospitaliers', 'Consommables']
    },
    {
      icon: Coffee,
      titleKey: 'sectors.hospitality',
      color: 'from-green-500 to-green-600',
      examples: ['Équipements cuisine', 'Mobilier', 'Linge', 'Produits alimentaires']
    },
    {
      icon: ShoppingCart,
      titleKey: 'sectors.commerce',
      color: 'from-purple-500 to-purple-600',
      examples: ['Équipements magasin', 'Systèmes de caisse', 'Mobilier commercial', 'Sécurité']
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-gray-50">
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
            {t('sectors.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BFA046] to-[#14243D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sectors.subtitle')}
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header with Icon */}
              <div className={`bg-gradient-to-r ${sector.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <sector.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {t(sector.titleKey)}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#14243D] mb-4">
                  Exemples de produits
                </h4>
                <ul className="space-y-2">
                  {sector.examples.map((example, exampleIndex) => (
                    <li 
                      key={exampleIndex}
                      className="flex items-center text-gray-600"
                    >
                      <div className="w-2 h-2 bg-[#BFA046] rounded-full mr-3 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#14243D] hover:bg-[#1a2f4a] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  En savoir plus
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#14243D] text-center mb-8">
              Notre impact par secteur
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '150+', label: 'Institutions publiques' },
                { value: '80+', label: 'Entreprises BTP' },
                { value: '45+', label: 'Établissements santé' },
                { value: '200+', label: 'Entreprises privées' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#BFA046] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#14243D] to-[#1a2f4a] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Votre secteur n'est pas listé ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nous adaptons nos services à tous les secteurs d'activité. 
              Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#BFA046] hover:bg-[#a08a3a] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Discutons de vos besoins
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsSection;
