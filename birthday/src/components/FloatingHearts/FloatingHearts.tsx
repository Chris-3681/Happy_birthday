import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 18 + 10,
  duration: Math.random() * 8 + 8,
  delay: Math.random() * 6,
}));

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-120vh",
            opacity: [0, 0.8, 0.8, 0],
            x: [0, 20, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            position: "fixed",
            left: `${heart.left}%`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <FaHeart
            size={heart.size}
            color="#ff4d8d"
            style={{
              filter: "drop-shadow(0 0 8px #ff4d8d)",
            }}
          />
        </motion.div>
      ))}
    </>
  );
}