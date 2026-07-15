import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opened, setOpened] = useState(false);

  const openEnvelope = () => {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <AnimatePresence>

      {!opened && (

        <motion.div

          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          exit={{ opacity:0 }}

          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]"

        >

          <motion.div

            whileHover={{
              scale:1.03
            }}

            whileTap={{
              scale:.98
            }}

            onClick={openEnvelope}

            className="cursor-pointer"

          >

            <div className="w-[340px] rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 p-1 shadow-2xl">

              <div className="rounded-3xl bg-[#09090f] p-12 text-center">

                <p className="text-gray-400">
                  To
                </p>

                <h2 className="script-font mt-2 text-5xl text-pink-300">
                  Miriam
                </h2>

                <p className="mt-8 text-gray-500">
                  From
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Chris ❤️
                </h3>

                <button className="mt-12 rounded-full bg-pink-500 px-8 py-4 font-semibold">
                  Open Me
                </button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}