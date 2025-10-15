import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Truck, 
  Shield, 
  FileText, 
  TrendingUp 
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Users,
      titleKey: 'services.mutualization.title',
      descKey: 'services.mutualization.desc'
    },
    {
      icon: Globe,
      titleKey: 'services.sourcing.title',
      descKey: 'services.sourcing.desc'
    },
    {
      icon: Truck,
      titleKey: 'services.logistics.title',
      descKey: 'services.logistics.desc'
    },
    {
      icon: Shield,
      titleKey: 'services.quality.title',
      descKey: 'services.quality.desc'
    },
    {
      icon: FileText,
      titleKey: 'services.tenders.title',
      descKey: 'services.tenders.desc'
    },
    {
      icon: TrendingUp,
      titleKey: 'services.consulting.title',
      descKey: 'services.consulting.desc'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BFA046] to-[#14243D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descKey)}
              index={index}
            />
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-[#14243D] text-center mb-12">
            Notre processus
          </h3>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Analyse des besoins', desc: 'Évaluation de vos besoins d\'approvisionnement' },
                { step: '02', title: 'Mutualisation', desc: 'Regroupement avec d\'autres membres' },
                { step: '03', title: 'Négociation', desc: 'Négociation groupée avec les fournisseurs' },
                { step: '04', title: 'Livraison', desc: 'Logistique et livraison optimisées' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#14243D] to-[#BFA046] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold text-[#14243D] mb-2">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {process.desc}
                  </p>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#BFA046] to-[#14243D] transform -translate-x-8"></div>
                  )}
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
              Prêt à optimiser vos achats ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Rejoignez notre réseau de membres et bénéficiez de notre expertise 
              en mutualisation d'achats pour réduire vos coûts.
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
              Contactez-nous
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
