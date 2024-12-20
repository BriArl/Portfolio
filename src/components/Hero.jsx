import { motion } from "framer-motion";
import { styles } from "../styles";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader, MeshStandardMaterial } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mb-16"> {/* Kept bottom margin for separation */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#24252a]" />
          <div className="w-1 sm:h-80 h-40 line-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#25252A]`}> {/* Keeping original text color */}
            Hi, I'm Brianna
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#25252A]`}>
          Hi, I’m a junior developer with a unique blend of skills shaped by experience in both customer-facing and technical roles. I’ve developed hands-on expertise in Java, SAP administration, and Agile teamwork, and I’m passionate about leveraging technology to solve complex challenges and create seamless, efficient systems. My diverse background allows me to approach problems with fresh perspectives and innovative solutions in the tech industry.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#24252a] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#24252a] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
