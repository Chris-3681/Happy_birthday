import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LetterPaperProps {
  children: ReactNode;
}

export default function LetterPaper({ children }: LetterPaperProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        rotate: -2,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: [0, -4, 0],
        rotate: [0, -0.4, 0.4, 0],
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 1,
        },
        y: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative mx-auto w-full max-w-5xl"
    >
      {/* Shadow */}
      <motion.div
        animate={{
          scaleX: [1, 1.03, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-10 left-10 right-10 h-12 rounded-full bg-black blur-3xl"
      />

      {/* Paper */}
      <div
        className="relative rounded-md border border-[#e8dbc2] bg-[#fffaf0] px-8 py-14 md:px-20 md:py-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.02) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      >
        {/* Folded Corner */}
        <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden">
          <div
            className="absolute right-0 top-0 h-32 w-32 rotate-45 bg-[#efe5d2]"
            style={{
              transformOrigin: "top right",
            }}
          />
        </div>

        {/* Paper Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,.08) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Left Margin */}
        <div className="absolute left-14 top-0 bottom-0 w-[2px] bg-red-300/60" />

        {/* Coffee Ring */}
        <div className="absolute right-12 top-14 h-20 w-20 rounded-full border-[6px] border-[#b8864d]/20" />

        {/* Small Ink Stain */}
        <div className="absolute bottom-24 left-24 h-8 w-8 rounded-full bg-[#b8864d]/10 blur-sm" />

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="relative z-20 text-center"
        >
          <h2
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: "4.4rem",
              color: "#7c2d12",
            }}
          >
            A Letter To My Mi Reina ❤️
          </h2>

          <p className="mt-4 italic text-[#8b7355] text-lg">
            Written with all my heart
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "180px",
          }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="mx-auto my-10 h-px bg-[#d6c4a3]"
        />

        {/* Letter */}
        <div
          className="relative z-20 pl-8 md:pl-12"
          style={{
            color: "#2f2a27",
          }}
        >
          {children}
        </div>

        {/* Footer */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.75,
          }}
          transition={{
            delay: 12,
            duration: 1.5,
          }}
          className="mt-20 text-right italic text-[#8b7355]"
        >
          Made with love ❤️
        </motion.div>
      </div>
    </motion.div>
  );
}