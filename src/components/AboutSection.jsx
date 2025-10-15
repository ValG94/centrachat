import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, key: 'performance' },
    { icon: Award, key: 'transparency' },
    { icon: Users, key: 'solidarity' },
    { icon: Lightbulb, key: 'innovation' },
    { icon: Globe, key: 'local' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BFA046] to-[#14243D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.mission')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#14243D] mb-6">
                Notre histoire
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée à Yaoundé, CENTRACHAT INTERNATIONAL est née de la vision 
                  de créer la première centrale d'achats panafricaine, réunissant 
                  les forces économiques de la région CEMAC.
                </p>
                <p>
                  Notre approche innovante de la mutualisation permet aux entreprises 
                  et institutions de bénéficier d'un pouvoir de négociation renforcé 
                  et d'optimiser leurs coûts d'approvisionnement.
                </p>
                <p>
                  Dirigée par William Fotchine, notre équipe s'appuie sur une expertise 
                  approfondie des marchés africains et des relations privilégiées avec 
                  les fournisseurs internationaux.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#14243D] mb-8 text-center lg:text-left">
              {t('about.values.title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#14243D] to-[#BFA046] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#14243D] group-hover:text-[#BFA046] transition-colors duration-300">
                        {t(`about.values.${value.key}`)}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Coverage Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-[#14243D] mb-8">
            Zone de couverture CEMAC
          </h3>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['Cameroun', 'Gabon', 'Tchad', 'RCA', 'Congo', 'Guinée Équatoriale'].map((country, index) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-[#14243D] to-[#1a2f4a] text-white hover:scale-105 transition-transform duration-300"
                >
                  <Globe className="h-8 w-8 mx-auto mb-2 text-[#BFA046]" />
                  <p className="font-medium text-sm">{country}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
