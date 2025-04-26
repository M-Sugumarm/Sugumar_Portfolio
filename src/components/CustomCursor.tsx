import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="cursor-dot-outline hidden md:block fixed pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: '32px',
        height: '32px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        mixBlendMode: 'difference',
        borderRadius: '50%'
      }}
    >
      <motion.div
        className="cursor-dot"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </motion.div>
  );
} 