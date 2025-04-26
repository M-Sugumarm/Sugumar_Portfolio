import { motion } from 'framer-motion';

interface InfiniteScrollTextProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const InfiniteScrollText = ({ 
  text, 
  direction = 'left', 
  speed = 20,
  className = ''
}: InfiniteScrollTextProps) => {
  const baseText = `${text} • `.repeat(20);
  
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? [0, -2000] : [-2000, 0]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block"
      >
        {baseText}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText; 