import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeScreen from './components/WelcomeScreen';
import MainCard from './components/MainCard';
import MusicPlayer from './components/MusicPlayer';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <MusicPlayer play={isOpen} />
      <AnimatePresence mode='wait'>
        {!isOpen ? (
          <motion.div
            key="welcome"
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <MainCard />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;