import { useState } from 'react';
import { motion } from 'framer-motion';
import Clocks from './views/Clocks';

const container = {
  initial: { clipPath: 'circle(0%)' },
  animate: { clipPath: 'circle(100%)' },
};
const word = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
};

function App() {
  const season = getSeason();
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <motion.div
        className="h-screen w-full bg-white"
        transition={{ ease: 'easeOut', duration: 4, delay: 2 }}
        variants={container}
        initial="initial"
        animate="animate"
      >
        <div className="fixed top-0 left-0 h-screen w-screen -z-10 bg-black"></div>
        { isVisible && 
          <motion.div
            className='h-screen'
            initial={{opacity:0}} 
            animate={{opacity:1}}
            transition={{ease: 'easeIn', duration: 1}}
          >
            <Clocks />
          </motion.div>
        }
      </motion.div>

      <motion.div
        id="season_sence"
        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
        transition={{ ease: 'easeOut', duration: 1.6, delay: 4 }}
        variants={word}
        onAnimationComplete={() => {
          document.querySelector('#season_sence')?.remove();
          setVisible(true)
        }}
        initial="initial"
        animate="animate"
      >
        <div className="font-Bukhari relative px-10 text-9xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {season}
        </div>
      </motion.div>
    </>
  );
}

export default App;

const getSeason = () => {
  const m = new Date().getMonth();
  if (m >= 9) return 'Winter';
  if (m >= 6) return 'Autumn';
  if (m >= 3) return 'Summer';
  return 'Spring';
};

