import { motion } from "framer-motion";
import { photos } from "../../data/story";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-[#060918] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="script-font text-center text-6xl text-pink-400"
        >
          Our Beautiful Memories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 text-center text-gray-400"
        >
          Every picture tells part of our story.
        </motion.p>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {photos.map((photo, index) => (

            <motion.div
              key={index}
              initial={{
                opacity:0,
                y:60
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true
              }}
              transition={{
                delay:index*0.15
              }}
              whileHover={{
                y:-12,
                rotate:1,
                scale:1.03
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl"
            >

              <img
                src={photo.image}
                alt={photo.title}
                className="h-[380px] w-full object-cover transition duration-500 hover:scale-110"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">

                  {photo.title}

                </h3>

                <p className="mt-3 text-gray-400">

                  {photo.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}