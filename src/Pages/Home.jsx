import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';

function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Scroll-triggered animations
  const [ref, inView] = useInView({
    triggerOnce: false, // Triggers every time element comes into view
    threshold: 0.1
  });

  return (
    <div className="home-container">
      <motion.div 
        className="home-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        ref={ref}
      >
        <motion.h1 variants={itemVariants}>
          Hello, I'm <span className="highlight">Ednah Moraa</span>
        </motion.h1>
        
        <motion.p className="subtitle" variants={itemVariants}>
          Blockchain, Frontend Developer, Backend Developer and UI/UX Enthusiast
        </motion.p>
        
        <motion.p className="intro" variants={itemVariants}>
          I build clean, modern, and responsive websites, applications, and systems that make a difference.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;