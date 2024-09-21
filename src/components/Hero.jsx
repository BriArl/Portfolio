import { motion } from "framer-motion";
import { styles } from "../styles";
import coding from "/coding.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#24252a]" />
          <div className="w-1 sm:h-80 h-40 line-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hi, I'm Brianna
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#25252A]-100`}>
          Motivated software engineer with hands-on experience in backend development, Java programming, and database management. 
          I have a solid understanding of Agile practices and have engaged in various IT projects, including SAP research and Spring Boot API development. 
          I’m excited to tackle new challenges and contribute to innovative solutions in the tech industry.
          </p>
          <br/>
          <img src={coding} alt="" className="w-full max-w-md mx-auto mt-6 items-center" style={{ width: '100%', height: 'auto' }} />

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