import { useEffect, useState } from "react";

export default function useSentenceReveal(text: string, delay = 1800) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const paragraphs = text
      .trim()
      .split("\n\n")
      .map((p) => p.trim())
      .filter(Boolean);

    let index = 0;

    setVisibleText("");

    const timer = setInterval(() => {
      if (index >= paragraphs.length) {
        clearInterval(timer);
        return;
      }

      setVisibleText((prev) =>
        prev.length === 0
          ? paragraphs[index]
          : prev + "\n\n" + paragraphs[index]
      );

      index++;
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return visibleText;
}