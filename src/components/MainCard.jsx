import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Carousel, Button } from 'react-bootstrap';
import confetti from 'canvas-confetti';
import { FaHeart } from 'react-icons/fa';

const MainCard = () => {
  const [text, setText] = useState('');
  // 這裡是可以修改的情書內容
  const fullText = `親愛的寶貝：

情人節快樂！

這是一個特別的日子，我想用這個小小的網頁，記錄我們美好的點點滴滴。

雖然我不是最浪漫的人，但我對妳的心意永遠不變。

謝謝妳一直以來的陪伴，願未來的每一個情人節，我們都能一起度過。

永遠愛妳的，
(你的名字)`;
  
  // 打字機效果
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100); // 調整速度，數字越小越快
    return () => clearInterval(interval);
  }, []);

  const handleAccept = () => {
    // 愛心噴發特效
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="card-container"
    >
      {/* 照片輪播區域 - 請將 src 替換成你們的照片 */}
      <Carousel className="mb-4 shadow-sm rounded">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://picsum.photos/600/400?random=1" // 佔位圖 1
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://picsum.photos/600/400?random=2" // 佔位圖 2
            alt="Second slide"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://picsum.photos/600/400?random=3" // 佔位圖 3
            alt="Third slide"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>

      <h2 className="mb-4">To My Valentine 💖</h2>

      {/* 情書區域 */}
      <div className="text-start mb-4 p-3" style={{ background: '#fff0f5', borderRadius: '10px', minHeight: '200px', whiteSpace: 'pre-line' }}>
        <p style={{ fontFamily: 'Noto Sans TC', lineHeight: '1.8', fontSize: '1.1rem' }}>
          {text}
        </p>
      </div>

      <p className="text-muted small">我們已經相愛了 365 天 (範例)</p>

      <Button 
        variant="danger" 
        size="lg" 
        className="btn-love w-100 mt-2"
        onClick={handleAccept}
      >
        <FaHeart className="me-2" /> 接受我的愛
      </Button>
    </motion.div>
  );
};

export default MainCard;
