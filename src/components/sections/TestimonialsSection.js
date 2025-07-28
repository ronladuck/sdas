import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Users } from 'lucide-react';
import { TESTIMONIALS, COMPANY_STATS } from '../../constants/data';

const TestimonialCard = ({ testimonial, index }) => {
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
        y: -4,
        scale: 1.015,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06)",
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 shadow-lg cursor-pointer"
    >
      <motion.div 
        className="flex items-center mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.08 + 0.1, duration: 0.3 }}
        viewport={{ once: true }}
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.08 + 0.15 + i * 0.03,
              duration: 0.2,
              type: "spring",
              stiffness: 500
            }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Quote className="w-8 h-8 text-purple-200 mb-2" />
        <p className="text-gray-700 leading-relaxed font-medium">"{testimonial.content}"</p>
      </motion.div>
      
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.08 + 0.25, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mr-3"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="text-purple-600 font-semibold text-sm">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </motion.div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.role}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  // Enhanced animation variants with faster, smoother timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.03,
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
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Enhanced Header */}
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
              <Users className="w-6 h-6 text-purple-600 mr-2" />
            </motion.div>
            <span className="text-purple-600 font-semibold">Client Success Stories</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              viewport={{ once: true }}
            >
              See why people
            </motion.span>
            <span className="block">
              <motion.span 
                className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true }}
              >
                love working with us
              </motion.span>
            </span>
          </motion.h2>
          
          {/* Enhanced Rating Summary */}
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center bg-white rounded-full px-6 py-3 border border-gray-200"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: 0.3 + i * 0.03,
                      type: "spring",
                      stiffness: 400
                    }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                >
                  4.9
                </motion.div>
                <div className="text-sm text-gray-600">From 200+ reviews</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id || index} testimonial={testimonial} index={index} />
          ))}
        </motion.div>

        {/* Enhanced Company Stats */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Trusted by Companies Worldwide
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {COMPANY_STATS && Object.entries(COMPANY_STATS).map(([key, value], index) => (
              <motion.div
                key={key}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.25 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -3, 
                  scale: 1.02,
                  boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-purple-600 mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: 0.3 + index * 0.05,
                    type: "spring",
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                >
                  {value}
                </motion.div>
                <div className="text-gray-600 font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection; 