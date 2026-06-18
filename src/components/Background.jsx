import { motion } from 'framer-motion';

export const Background = () => {
  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 100 + 50; // 50px to 150px
    const initialX = Math.random() * 100; // 0% to 100%
    const initialY = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 20 + 10; // 10s to 30s
    const delay = Math.random() * 5;

    return { id: i, size, initialX, initialY, duration, delay };
  });

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-dark pointer-events-none">
      {/* Large Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent blur-[150px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-accent blur-[120px]"
      />

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border border-accent/20 bg-accent/5 shadow-[0_0_15px_rgba(255,214,10,0.1)] backdrop-blur-sm"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.initialX}%`,
            top: `${bubble.initialY}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};
