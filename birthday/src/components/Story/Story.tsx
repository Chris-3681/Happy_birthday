import { motion } from "framer-motion";
import { PhotoView } from "react-photo-view";
import { story } from "../../data/story";

export default function Story() {
  return (
    <div className="bg-[#020617]">
      {story.map((item, index) => (
        <section
          id={index === 0 ? "story" : undefined}
          key={index}
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />
          </div>

          {/* Stars */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-[2px] w-[2px] rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div
            className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* IMAGE */}
            <motion.div
              className="w-full flex-1"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              <PhotoView src={item.image}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="flex h-[600px] w-full cursor-pointer items-center justify-center rounded-[32px] bg-[#0b1120] p-5 shadow-[0_25px_80px_rgba(0,0,0,.45)]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full rounded-2xl object-contain"
                  />
                </motion.div>
              </PhotoView>
            </motion.div>

            {/* TEXT */}
            <motion.div
              className="w-full flex-1"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 100 : -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >
              {item.chapter && (
                <p className="script-font mb-4 text-3xl text-pink-400 md:text-4xl">
                  {item.chapter}
                </p>
              )}

              <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                {item.title}
              </h2>

              <div className="mt-8 h-1 w-28 rounded-full bg-pink-500" />

              <p className="mt-8 whitespace-pre-line text-lg leading-9 text-gray-300 md:text-xl">
                {item.text}
              </p>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}