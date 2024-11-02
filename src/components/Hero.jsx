import { motion } from "framer-motion";
import { styles } from "../styles";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader, MeshStandardMaterial } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const Model = () => {
  const fbxPath = '/pc-model/uploads_files_1910147_Macintosh_3_3.fbx';
  const model = useLoader(FBXLoader, fbxPath);

  // Load each texture
  const baseColorTexture = useLoader(TextureLoader, '/pc-model/Macintosh_3_3_Macintosh_01_BaseColor.png');
  const emissiveTexture = useLoader(TextureLoader, '/pc-model/Macintosh_3_3_Macintosh_01_Emissive.png');
  const metallicTexture = useLoader(TextureLoader, '/pc-model/Macintosh_3_3_Macintosh_01_Metallic.png');
  const normalTexture = useLoader(TextureLoader, '/pc-model/Macintosh_3_3_Macintosh_01_Normal.png');
  const roughnessTexture = useLoader(TextureLoader, '/pc-model/Macintosh_3_3_Macintosh_01_Roughness.png');

  // Apply textures to the model's materials
  model.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({
        map: baseColorTexture,
        emissiveMap: emissiveTexture,
        metalnessMap: metallicTexture,
        normalMap: normalTexture,
        roughnessMap: roughnessTexture,
      });
    }
  });

  return <primitive object={model} scale={0.5} position={[0, -1, 0]} />;
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#24252a]" />
          <div className="w-1 sm:h-80 h-40 line-gradient" />
        </div>

        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm Brianna
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#25252A]-100`}>
            Motivated software engineer with hands-on experience in backend development, Java programming, and database management. 
            I have a solid understanding of Agile practices and have engaged in various IT projects, including SAP research and Spring Boot API development. 
            I’m excited to tackle new challenges and contribute to innovative solutions in the tech industry.
          </p>
          <br />

          {/* Container for the Canvas with the same sizing as the image */}
          <div className="relative mt-8 mb-16" style={{ height: 'auto', maxWidth: '400px', width: '100%' }}>
            <Canvas style={{ height: '100%', width: '100%' }}>
              <ambientLight intensity={1.2} />
              <directionalLight position={[0, 10, 5]} intensity={0.8} />
              <pointLight position={[5, 5, 5]} intensity={0.6} />
              <Model />
              <OrbitControls />
            </Canvas>
          </div>
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
