import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Carousel, Button } from 'react-bootstrap';
import confetti from 'canvas-confetti';
import { FaHeart } from 'react-icons/fa';

{/*俐酉寶：

情人節快樂！

雖然我不是最浪漫的人，但我還是盡我所能地表達我對你的愛。

謝謝妳一直以來的陪伴，願意跟我一起哭一起笑，願未來的每一個情人節，我的身邊都有你在。

愛你的威威。*/}


const MainCard = () => {
  const [text, setText] = useState('');
  // 這裡是可以修改的情書內容
  const fullText = `
66:
好久不見阿

我其實不知道你是不是還留著那張卡片，也不知道你會不會回來看。
但我好想你，我總會突然在某個瞬間想到我們曾經做過的那些事情，那時候真的好開心。
那天我在整理我的東西的時候，我翻到了你那時候送我的卡片，看到的時候真的好難過。

有時候我好後悔我沒有珍惜這段感情，但那時的我是真的沒辦法，我的精神狀況真的不太好。
總想著說如果我在成熟點就好了，抗壓能力在好一點就好了，或許你也不會那麼痛苦了吧。
偷偷說個小秘密，其實有時候我說我臨時要上班是騙你的，我只是去看身心科了，抱歉阿這件事一直都瞞著你。
很抱歉後面那時候一直把問題都丟給你，希望你能原諒那時候的我，我真的生病了，對不起。

謝謝你阿，真的很開心我們曾經能夠在一起，你真的帶我體驗了好多東西。那些是真的沒辦法又言語訴說的。
我第一次感受到一個人全心全意愛我的感覺，時時刻刻都想著我，關心我的健康，以你的方式愛著我。
雖然我那時候只覺得你很煩，跟我媽一樣，但後來想想我媽也是這樣愛我的。
那時聽朋友說交往第一天後你就不喜歡我了。那時候聽到其實覺得挺難過地哈哈。但或許你真的沒有愛過我吧。

很開心我們分開之後你過得很好，沒有因為我而受到太多影響。
聽說你跟系上變得很好很好。
我知道對國高中沒甚麼朋友的你有一群可以玩在一起的朋友是你一直以來的願望。
其實還是滿糾結你在主頁放的等你會不會只是冠，也許你又有新的心儀的對象了吧，雖然我還是有一絲希望你說的是我，但還是算了。

很遺憾我們沒辦法看到那些我們一起規劃的未來，我們也有好多事都還沒一起做，甚至就連微微一笑都沒辦法一起看完。
前幾天我有跟佳芳在聊他們分手的事情，看了他們做的紀念影片，真的很感動。
我也有在做些東西來紀念我們的感情，但真的要完成可能還要很久吧。

希望你能知道你自己真正想要的，遇到你真正喜歡的人。能夠慢慢學會控制自己的情緒，不要讓愛你的人受傷了。
希望你可以不再對聲音敏感了，能夠好好地睡覺不要再失眠了。
要好好照顧好自己，不要又太忙忙到讓自己生奇奇怪怪的病。生病了也要好好吃藥，不要亂停藥了。
希望你能夠跟你的媽媽好好相處，能好好溝通，希望他能對你再好點。
你要好好的噢。

我還會在原地停留一段時間，整理一下，但我也會努力變得更好的。

smolwei.
2026/09/24
`;
  
  // 打字機效果
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50); // 調整速度，數字越小越快
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
            src="https://media.discordapp.net/attachments/925747611103797308/1470483656228339834/IMG20251125002002.jpg?ex=698b761f&is=698a249f&hm=fdf9bf32552cc45d28cd474f1c4d17f8e537c7da70a04cd873be8be1b4059e58&=&format=webp&width=600&height=800" // 佔位圖 1
            alt="First slide"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://media.discordapp.net/attachments/925747611103797308/1470483657138503923/IMG20251101201547.jpg?ex=698b7620&is=698a24a0&hm=840748f5f604968a5f2271c6028d7dd0b0d9e2b179d6526e19a7775cba609bb2&=&format=webp&width=600&height=800" // 佔位圖 2
            alt="Second slide"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://media.discordapp.net/attachments/925747611103797308/1470483654655480012/IMG20260108185124.jpg?ex=698b761f&is=698a249f&hm=bbd26ac7d0542c92ad367dee3a8b5428e19a9b6b261d24c382f22500a2cc1fa2&=&format=webp&width=600&height=800" // 佔位圖 3
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
    </motion.div>
  );
};

export default MainCard;
