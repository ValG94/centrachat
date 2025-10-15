import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#14243D] to-[#1a2f4a] rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold text-[#14243D] mb-4 group-hover:text-[#BFA046] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      
      {/* Decorative element */}
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#BFA046] to-[#14243D] group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
};

export default ServiceCard;
