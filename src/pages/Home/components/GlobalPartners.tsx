import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const partners = [
  { src: "/partners/partner1.png", alt: "partner1" },
  { src: "/partners/partner2.png", alt: "partner2" },
  { src: "/partners/partner3.png", alt: "partner3" },
  { src: "/partners/partner4.png", alt: "partner4" },
  { src: "/partners/partner5.png", alt: "partner5" },
  { src: "/partners/partner6.png", alt: "partner6" },
  { src: "/partners/partner7.png", alt: "partner7" },
  { src: "/partners/partner8.png", alt: "partner8" },
];

export default function GlobalPartners() {
  const controls = useAnimationControls();
  const isRunningRef = useRef(true);

  useEffect(() => {
    const sequence = async () => {
      while (isRunningRef.current) {
        try {
          await controls.start({
            x: "-50%", // Only move by 50% since we have duplicate content
            transition: {
              duration: 20,
              ease: "linear"
            }
          });
          
          if (!isRunningRef.current) break;
          
          // Reset position instantly
          controls.set({ x: "0%" });
        } catch {
          // Animation was cancelled, exit loop
          break;
        }
      }
    };
    
    sequence();

    return () => {
      isRunningRef.current = false;
      controls.stop();
    };
  }, [controls]);

  return (
    <section className="w-full overflow-hidden py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">
          Our Global Partners
        </h2>
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex gap-16 flex-nowrap"
              animate={controls}
              style={{ x: "0%" }}
            >
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}