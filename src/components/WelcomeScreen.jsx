import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const WelcomeScreen = ({ onOpen }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaHeart size={100} color="#ff4d6d" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 77, 109, 0.5))' }} />
      </motion.div>
      
      <h1 className="mt-5 mb-3" style={{ fontSize: '2.5rem' }}>給親愛的寶貝</h1>
      <p className="lead text-muted mb-4">有一封專屬於妳的信...</p>
      
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button 
          variant="danger" 
          size="lg" 
          className="btn-love rounded-pill px-5"
          onClick={onOpen}
        >
          點擊拆開
        </Button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
