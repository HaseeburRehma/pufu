import { motion } from 'motion/react';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Circle 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FBC49D]/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Circle 2 */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#444]/5 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Circle 3 */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#FBC49D]/5 rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
