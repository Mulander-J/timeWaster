import { motion } from 'framer-motion';

const container = {
  initial: { clipPath: 'circle(0%)' },
  animate: { clipPath: 'circle(100%)' }
};
const word = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
  transitionEnd: {
    display: "none",
  }
};

function Curtain({children}:any) {
  const season = getSeason()

  return (
    <>
      <motion.div 
        className="h-screen w-screen bg-white"
        transition={{ ease: "easeOut", duration: 4, delay: 2 }}
        variants={container}
        initial="initial"
        animate="animate"
      >
        { children }
      </motion.div>
      <motion.div 
        className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center' 
        transition={{ ease: "easeOut", duration: 2, delay: 4 }}
        variants={word}
        initial="initial"
        animate="animate"
      >
        <div className='font-Bukhari relative px-10 text-9xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
          { season }
        </div>
      </motion.div>
    </>
  );
};

export default Curtain;

const getSeason = () => {
  const m = new Date().getMonth();
  if(m >= 9) return 'Winter';
  if(m >= 6) return 'Autumn';
  if(m >= 3) return 'Summer';
  return 'Spring';
};
