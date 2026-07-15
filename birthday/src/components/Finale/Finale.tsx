import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Finale() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShowMessage(true);

        const duration = 6000;
        const end = Date.now() + duration;

        const interval = setInterval(() => {
          confetti({
            particleCount: 6,
            startVelocity: 25,
            spread: 120,
            origin: {
              x: Math.random(),
              y: Math.random() * 0.4,
            },
            scalar: 1.1,
          });

          if (Date.now() > end) {
            clearInterval(interval);
          }
        }, 250);

        observer.disconnect();
      },
      {
        threshold: 0.6,
      }
    );

    const section = document.getElementById("finale");

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="finale"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#050816] to-black px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="h-[700px] w-[700px] rounded-full bg-pink-500 blur-[180px]"
        />
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
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
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-10 max-w-4xl text-center"
          >
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="script-font text-6xl text-pink-300 md:text-8xl"
            >
              Happy Birthday
            </motion.h2>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mt-6 bg-gradient-to-r from-pink-300 via-white to-rose-300 bg-clip-text text-5xl font-bold text-transparent md:text-8xl"
            >
              Miriam ❤️
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.6,
              }}
              className="mx-auto mt-16 max-w-2xl space-y-6 text-xl leading-10 text-gray-300 md:text-2xl"
            >
              <p>I will choose you...</p>

              <p>Today.</p>

              <p>Tomorrow.</p>

              <p>Always.</p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 3,
              }}
              className="mt-20"
            >
              <p className="paper-writing text-3xl text-pink-300">
                Forever Yours,
              </p>

              <h3 className="paper-title mt-3 text-6xl text-white">
                Chris ❤️
              </h3>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.7,
              }}
              transition={{
                delay: 4,
              }}
              className="mt-20 text-sm tracking-[0.4em] text-pink-200 uppercase"
            >
              The End • But Our Story Continues
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}