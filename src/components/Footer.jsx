import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';
import centrachatLogo from '../assets/centrachat-logo.jpeg';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/237655424242',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-[#14243D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={centrachatLogo} 
                alt="CentraChat Logo" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">CENTRACHAT</h3>
                <p className="text-[#BFA046] text-sm">One Hub, Many Buyers</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Première centrale d'achats panafricaine basée à Yaoundé. 
              Nous mutualisons vos besoins pour optimiser vos approvisionnements 
              et négocier les meilleurs prix.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#BFA046] hover:bg-[#a08a3a] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#BFA046]">
              {t('contact.title')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#BFA046] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  {t('contact.address')}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#BFA046] flex-shrink-0" />
                <a 
                  href="tel:+237655424242"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#BFA046] flex-shrink-0" />
                <a 
                  href="mailto:foch@centrachat.africa"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#BFA046]">
              Liens rapides
            </h4>
            <div className="space-y-3">
              <a 
                href="#about" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#services" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {t('nav.services')}
              </a>
              <a 
                href="#sectors" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {t('nav.sectors')}
              </a>
              <a 
                href="#join" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                {t('nav.join')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.legal')}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.privacy')}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
