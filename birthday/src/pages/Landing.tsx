import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { playBirthdaySong } from "../components/MusicPlayer/MusicPlayer";

export default function Landing() {
  const beginJourney = () => {
    playBirthdaySong();

    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#01030b] via-[#08101f] to-[#16061d] px-6">
      {/* Aurora Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/15 blur-[220px]" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 180 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-pink-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 24}px`,
            }}
            initial={{
              y: "110vh",
              opacity: 0,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Envelope */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-20 w-full max-w-xl"
      >
        {/* Shadow */}
        <div className="absolute inset-x-10 bottom-0 h-10 rounded-full bg-black/50 blur-xl" />

        {/* Envelope */}
        <motion.div
          whileHover={{
            y: -10,
          }}
          transition={{
            duration: 0.4,
          }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#f8d7b5] to-[#eac08d] shadow-[0_30px_80px_rgba(0,0,0,.45)]"
        >
          {/* Top Flap */}
          <motion.div
            animate={{
              rotateX: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            style={{
              transformOrigin: "top",
            }}
            className="absolute left-0 top-0 h-40 w-full origin-top bg-gradient-to-b from-[#f6ddb7] to-[#dca86d]"
          />

          {/* Wax Seal */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-28 z-20 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-red-700 to-red-500 shadow-2xl"
          >
            <FaHeart className="text-3xl text-white" />
          </motion.div>

          {/* Letter */}
          <motion.div
            animate={{
              y: [-10, -25, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mx-6 mt-20 rounded-t-3xl bg-[#fffaf0] px-8 pb-10 pt-16 text-center"
          >
            <p className="paper-title text-4xl text-pink-600">
              To My Mi Reina ❤️
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Inside this letter is every smile,
              every memory,
              every laugh,
              and every reason I thank God for bringing you into my life.
            </p>

            <button
              onClick={beginJourney}
              className="mt-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-pink-500/40 transition hover:scale-105"
            >
              Open Your Birthday Gift ❤️
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.8,
          }}
          transition={{
            delay: 2,
          }}
          className="mt-10 text-center text-sm uppercase tracking-[0.35em] text-pink-200"
        >
          Made Especially For Miriam
        </motion.p>
      </motion.div>
    </main>
  );
}