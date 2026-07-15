import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 text-pink-400"
    >
      Scroll ↓
    </motion.div>
  );
}