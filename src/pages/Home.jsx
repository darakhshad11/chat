import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Contact from './Contact';
import MiddleSection from '../components/MiddleSection';
import ClientFeedback from '../components/ClientFeedback';


const Home = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: -20
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="home-page"
    >
      <HeroSection />
      <MiddleSection/>
      <ClientFeedback/>
     <Contact/>
    </motion.div>
  );
};

export default Home;