import { motion } from "framer-motion";
import LetterPaper from "./LetterPaper";
import AnimatedParagraph from "./AnimatedParagraph";
import letter from "../../data/letter";

export default function LoveLetter() {
  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-[#040814] px-6 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10">
        <LetterPaper>
          <AnimatedParagraph text={letter} />

          {/* Signature */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 25,
              duration: 1.4,
              ease: "easeOut",
            }}
            className="mt-24"
          >
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 25,
                duration: 1,
              }}
              style={{
                fontFamily: '"Great Vibes", cursive',
                fontSize: "2.6rem",
                color: "#5b4330",
              }}
            >
              Forever Yours,
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: -5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -2,
              }}
              transition={{
                delay: 26,
                duration: 1.5,
                ease: "easeOut",
              }}
              style={{
                fontFamily: '"Great Vibes", cursive',
                fontSize: "4.5rem",
                color: "#7c1638",
                marginTop: "18px",
              }}
            >
              Chris (Mi Rey) ❤️
            </motion.h2>

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "240px",
              }}
              transition={{
                delay: 27,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="mt-2 h-[2px] rounded-full bg-[#7c1638]"
            />

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.7,
              }}
              transition={{
                delay: 28,
                duration: 1,
              }}
              className="mt-4 text-sm uppercase tracking-[0.35em] text-[#7a6a5a]"
            >
              With all my love ❤️
            </motion.p>
          </motion.div>
        </LetterPaper>
      </div>
    </section>
  );
}