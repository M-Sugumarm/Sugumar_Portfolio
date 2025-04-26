import { motion } from 'framer-motion';

const FloatingIcons = () => {
  const icons = [
    '⚛️', '🎨', '💻', '🎯', '⚡', '🔮', '🎭', '🌟', '📱', '🎪'
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 1
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {icon}
        </motion.div>
      ))}
    </>
  );
};

const MovingShapes = () => {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-32 w-32"
          style={{
            background: `radial-gradient(circle at center, ${
              ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6B3', '#FFBE0B'][i % 5]
            }20, transparent)`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            rotate: 0
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const InteractiveGrid = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

const FloatingText = () => {
  const words = [
    { text: "UI/UX", color: "#FF6B6B" },
    { text: "Design", color: "#4ECDC4" },
    { text: "Creative", color: "#45B7D1" },
    { text: "Motion", color: "#96E6B3" },
    { text: "Interactive", color: "#FFBE0B" }
  ];

  return (
    <>
      {words.map((word, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl font-bold"
          style={{ color: word.color }}
          initial={{ opacity: 0.1 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -30, 0],
            x: Math.random() * window.innerWidth * 0.8
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 0.5
          }}
        >
          {word.text}
        </motion.div>
      ))}
    </>
  );
};

const GlowingOrbs = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle at center, ${
              ['#FF6B6B', '#4ECDC4', '#45B7D1'][i]
            }30, transparent)`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </>
  );
};

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Base gradient with animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(255,107,107,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(78,205,196,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(69,183,209,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(150,230,179,0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Interactive layers */}
      <InteractiveGrid />
      <GlowingOrbs />
      <MovingShapes />
      <FloatingIcons />
      <FloatingText />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />
    </div>
  );
};

export default DynamicBackground; 