import React from 'react';
import { motion } from 'framer-motion';

const ClientFeedback = () => {
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

  const testimonials = [
    {
      id: 1,
      quote: "Careforceone streamlined our staffing processes, allowing us to focus on quality patient care.",
      name: "John Smith",
      location: "New York",
      image: "https://api.placeholder.com/400/320" // Replace with actual image path
    },
    {
      id: 2,
      quote: "Using careforceone has significantly improved our compliance and efficiency in patient care administration.",
      name: "Sarah Brown",
      location: "Chicago",
      image: "https://api.placeholder.com/400/320" // Replace with actual image path
    }
  ];

  return (
    <section className="py-16 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-teal-800 sm:text-4xl">
            Client Feedback
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about our healthcare staffing solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-700"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="h-14 w-14 rounded-full overflow-hidden bg-teal-200 flex items-center justify-center">
                      <svg className="h-8 w-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-teal-600">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <svg className="absolute top-0 left-0 h-8 w-8 text-teal-100 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-700 text-lg relative pl-5">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            View More Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientFeedback;