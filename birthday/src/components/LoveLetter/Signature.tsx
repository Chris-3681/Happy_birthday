import { motion } from "framer-motion";

interface SignatureProps {
  name: string;
}

export default function Signature({ name }: SignatureProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="mt-20"
    >
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="paper-writing text-3xl text-[#4d3627]"
      >
        Forever Yours,
      </motion.p>

      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.8,
          duration: 1.2,
        }}
        className="paper-title mt-5 text-6xl text-[#7c1d4e] md:text-7xl"
      >
        {name}
      </motion.h2>

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 220,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="mt-4 h-[2px] bg-[#7c1d4e]"
      />

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.75,
        }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="mt-4 text-sm uppercase tracking-[0.25em] text-gray-600"
      >
        With all my love ❤️
      </motion.p>
    </motion.div>
  );
}