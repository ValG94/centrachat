import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle
} from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: t('contact.address'),
      link: 'https://maps.google.com/?q=Avenue+Rosa+Park+Yaoundé+Cameroun'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: t('contact.phone'),
      link: 'tel:+237655424242'
    },
    {
      icon: Mail,
      title: 'Email',
      content: t('contact.email'),
      link: 'mailto:foch@centrachat.africa'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven: 8h00 - 17h00\nSam: 8h00 - 12h00',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BFA046] to-[#14243D] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#14243D] mb-8">
              Nos coordonnées
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#14243D] to-[#BFA046] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#14243D] mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-gray-600 hover:text-[#BFA046] transition-colors duration-300 whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-500 rounded-xl p-6 text-white"
            >
              <div className="flex items-center space-x-4">
                <MessageCircle className="h-8 w-8" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    WhatsApp Business
                  </h4>
                  <p className="text-green-100 mb-4">
                    Contactez-nous directement via WhatsApp pour une réponse rapide
                  </p>
                  <a
                    href="https://wa.me/237655424242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-green-500 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition-colors duration-300"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ouvrir WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-[#14243D] text-center mb-8">
            Notre localisation
          </h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0123456789!2d11.5123456!3d3.8480000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTAnNTIuOCJOIDExwrAzMCc0NC40IkU!5e0!3m2!1sfr!2scm!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation CENTRACHAT INTERNATIONAL"
                className="rounded-2xl"
              ></iframe>
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
              Prêt à commencer ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Rejoignez dès aujourd'hui notre réseau de membres et découvrez 
              comment nous pouvons optimiser vos achats.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#join');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#BFA046] hover:bg-[#a08a3a] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Devenir membre
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
