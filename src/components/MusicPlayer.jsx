import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

// 這裡可以換成你想要的音樂連結 (mp3)
const MUSIC_URL = "/GGteens.mp3"; 

const MusicPlayer = ({ play }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Auto-play blocked:", e));
    }
  }, [play]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      <audio ref={audioRef} src={MUSIC_URL} loop />
      <Button 
        variant="light" 
        className="rounded-circle shadow"
        style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={togglePlay}
      >
        {isPlaying ? <FaMusic color="#ff7eb3" /> : <FaVolumeMute color="#aaa" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;
