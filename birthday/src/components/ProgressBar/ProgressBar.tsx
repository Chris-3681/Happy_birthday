import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress((scrollTop / height) * 100);
    };

    window.addEventListener("scroll", update);

    update();

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">

      <div
        className="h-full bg-pink-500 transition-all"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}