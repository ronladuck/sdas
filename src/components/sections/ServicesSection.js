import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../constants/data';

const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const path = `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`;
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ 
        y: -6,
        scale: 1.015,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.18)",
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 shadow-lg group cursor-pointer"
    >
      {service.popular && (
        <motion.div 
          className="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 400 }}
        >
          Most Popular
        </motion.div>
      )}
      
      <motion.div 
        className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6"
        whileHover={{ 
          scale: 1.12,
          rotate: 3,
          backgroundColor: "rgba(147, 51, 234, 0.15)"
        }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <service.icon className="w-8 h-8 text-purple-600" />
        </motion.div>
      </motion.div>
      
      <motion.h3 
        className="text-xl font-bold text-gray-900 mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 + 0.1, duration: 0.3 }}
        viewport={{ once: true }}
      >
        {service.title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 + 0.15, duration: 0.3 }}
        viewport={{ once: true }}
      >
        {service.description}
      </motion.p>
      
      <motion.div 
        className="space-y-2 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        {service.features.map((feature, featureIndex) => (
          <motion.div 
            key={featureIndex}
            className="flex items-center space-x-2 text-sm text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.08 + 0.25 + featureIndex * 0.03,
              duration: 0.25
            }}
            viewport={{ once: true }}
          >
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.button 
        onClick={handleLearnMore}
        className="w-full bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-700 py-3 rounded-xl font-semibold border border-gray-200 hover:border-purple-200 transition-all duration-200 flex items-center justify-center space-x-2 group"
        whileHover={{ 
          scale: 1.015,
          backgroundColor: "rgba(147, 51, 234, 0.05)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
      >
        <span>Learn More</span>
        <motion.div
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
            >
              <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
            </motion.div>
            <span className="text-purple-600 font-semibold">Step 2: Professional Creative Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              We bring your content
            </motion.span>
            <span className="block">
              <motion.span 
                className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
              >
                calendar to life
              </motion.span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose from our comprehensive suite of professional services to transform your AI-generated content strategy into stunning, engagement-driving creative assets.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id || index} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p 
              className="text-lg opacity-90 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
            >
              Let our team of experts handle your content creation while you focus on growing your business.
            </motion.p>
            <motion.button
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2"
              whileHover={{ 
                scale: 1.03, 
                y: -2,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span>View All Services</span>
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection; 