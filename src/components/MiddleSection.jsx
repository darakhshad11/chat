import React from 'react';
import { motion } from 'framer-motion';
import hospitalward from '../assests/hospital-ward.jpg';
import labor from '../assests/labor.jpg';
import surgery from '../assests/surgery.jpg';
import operations from '../assests/operation.jpg';


const MiddleSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Image fade-in animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  // Stats data
  const stats = [
    {
      id: 1,
      value: '150+',
      label: 'Trusted by Professionals',
      icon: (
        <svg className="w-8 h-8 text-teal-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    },
    {
      id: 2,
      value: '15',
      label: 'Quality Care',
      icon: (
        <svg className="w-8 h-8 text-teal-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];

  // Features data with images
  const features = [
    {
      id: 1,
      title: 'Efficient Workforce Management',
      description: 'Centralize scheduling and improve compliance with our Artificial Intelligence driven healthcare staffing and management tools.',
      image: operations,
      altText: 'Healthcare operations dashboard'
    },
    {
      id: 2,
      title: 'Patient Data Security',
      description: 'Ensure secure management of patient data while maintaining regulatory compliance and enhancing care quality.',
      image: surgery,
      altText: 'Secure patient data management'
    }
  ];

  // Department images data
  const departments = [
    {
      id: 1,
      image: hospitalward,
      altText: 'Hospital ward',
      title: 'Hospital Ward Management'
    },
    {
      id: 2,
      image: labor,
      altText: 'Labor and delivery',
      title: 'Labor & Delivery'
    }
  ];

  return (
    <section className="pt-20 bg-white">
      {/* Overview Section with Background Image */}
      <div className="relative py-20 mb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-teal-900/80 z-10"></div>
          <img 
            src={operations} 
            alt="Healthcare professionals in action" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Empowering Healthcare Staffing Solutions
            </h2>
            <p className="text-xl text-teal-50 max-w-4xl mx-auto">
              Careforceone streamlines healthcare operations, enhancing efficiency and compliance 
              while ensuring quality patient care through an integrated management platform 
              tailored for healthcare organizations.
            </p>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="text-center bg-white/95 backdrop-blur rounded-xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
              >
                {stat.icon}
                <h3 className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Department Images Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            Specialized Healthcare Departments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our solutions are tailored to meet the unique needs of various healthcare departments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              variants={imageVariants}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img 
                src={dept.image} 
                alt={dept.altText}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent flex items-end">
                <h3 className="text-xl font-semibold text-white p-6">{dept.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Solutions Section */}
      <div className="bg-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline operations and enhance patient care with our AI-powered 
              integrated staffing and management platform.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <motion.div 
                  className="w-full md:w-1/2"
                  variants={imageVariants}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.altText}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
                </motion.div>
                <div className="w-full md:w-1/2">
                  <div className="h-2 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mb-6"></div>
                  <h3 className="text-2xl font-bold text-teal-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg shadow-md border border-teal-200 hover:bg-teal-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 text-center bg-white rounded-2xl p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Ready to transform your healthcare operations?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Join the 150+ healthcare professionals already benefiting from our comprehensive staffing solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-teal-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;