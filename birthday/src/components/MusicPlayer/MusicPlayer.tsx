import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import {
  FaPause,
  FaPlay,
  FaRedoAlt,
  FaMusic,
} from "react-icons/fa";

let player: Howl | null = null;

export function playBirthdaySong() {
  if (!player) return;

  if (!player.playing()) {
    player.play();
  }
}

export function pauseBirthdaySong() {
  if (!player) return;

  player.pause();
}

export function restartBirthdaySong() {
  if (!player) return;

  player.stop();
  player.play();
}

export default function MusicPlayer() {
  const [, forceUpdate] = useState(0);

  const playing = useRef(false);

  useEffect(() => {
    player = new Howl({
      src: ["/music/heaven.mp3"],
      html5: true,
      preload: true,
      loop: false,
      volume: 0.7,

      onplay: () => {
        playing.current = true;
        forceUpdate((v) => v + 1);
      },

      onpause: () => {
        playing.current = false;
        forceUpdate((v) => v + 1);
      },

      onstop: () => {
        playing.current = false;
        forceUpdate((v) => v + 1);
      },

      onend: () => {
        playing.current = false;
        forceUpdate((v) => v + 1);
      },
    });

    return () => {
      player?.unload();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <div className="rounded-2xl border border-pink-500/20 bg-black/50 px-5 py-4 backdrop-blur-xl shadow-2xl">

        <div className="mb-3 flex items-center gap-2 text-pink-300">
          <FaMusic />
          <span className="text-sm font-medium">
            Heaven — Banky W
          </span>
        </div>

        <div className="flex items-center gap-3">

          {playing.current ? (
            <button
              onClick={() => {
                pauseBirthdaySong();
              }}
              className="rounded-full bg-pink-500 p-3 transition hover:scale-110"
            >
              <FaPause />
            </button>
          ) : (
            <button
              onClick={() => {
                playBirthdaySong();
              }}
              className="rounded-full bg-pink-500 p-3 transition hover:scale-110"
            >
              <FaPlay />
            </button>
          )}

          <button
            onClick={() => {
              restartBirthdaySong();
            }}
            className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <FaRedoAlt />
          </button>

        </div>
      </div>
    </div>
  );
}