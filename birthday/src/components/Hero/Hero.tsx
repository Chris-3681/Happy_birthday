import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Hero() {
  const beginStory = () => {
    const story = document.getElementById("story");

    if (story) {
      story.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#0b1120] to-[#1a0933] px-6"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/15 blur-[180px]" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 140 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="mb-10 flex justify-center"
        >
          <FaHeart className="text-7xl text-pink-500 drop-shadow-[0_0_35px_rgba(255,0,120,.9)]" />
        </motion.div>

        <p className="script-font text-4xl text-pink-300">
          For The Most Beautiful Woman In My World
        </p>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-8xl">
          Happy Birthday,
          <br />

          <span className="script-font bg-gradient-to-r from-pink-300 via-rose-300 to-pink-500 bg-clip-text text-transparent">
            Miriam ❤️
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
          Today isn't just another birthday.
          <br />
          <br />
          Today I celebrate the woman who changed my life, gave me
          beautiful memories, and continues to make every ordinary day
          feel extraordinary.
          <br />
          <br />
          I made this little journey just for you.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={beginStory}
          className="mt-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-5 text-lg font-semibold shadow-2xl shadow-pink-500/30 transition"
        >
          ❤️ Begin Our Story
        </motion.button>
      </motion.div>
    </section>
  );
}