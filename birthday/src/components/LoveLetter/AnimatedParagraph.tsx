import { motion } from "framer-motion";

interface AnimatedParagraphProps {
  text: string;
}

export default function AnimatedParagraph({
  text,
}: AnimatedParagraphProps) {
  const sentences = text
    .split("\n")
    .filter((sentence) => sentence.trim() !== "");

  return (
    <div className="space-y-7">
      {sentences.map((sentence, index) => (
        <motion.p
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: 12,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: index * 0.8,
            ease: "easeOut",
          }}
          style={{
            fontFamily: '"Caveat", "Patrick Hand", cursive',
            fontSize: "2rem",
            lineHeight: "2.1",
            color: "#3b2c22",
            letterSpacing: "0.02em",
          }}
        >
          {sentence}
        </motion.p>
      ))}
    </div>
  );
}