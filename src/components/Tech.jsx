import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  // Estado para verificar si es un dispositivo móvil
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Escucha el tamaño de la pantalla. 768px es el límite típico para móviles/tablets pequeñas.
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Mis skills</p>
        <h2 className={styles.sectionHeadTextLight}>Tecnologias.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* Renderizado condicional: Img en celular, 3D en computadora */}
            {isMobile ? (
              <div className="w-full h-full flex justify-center items-center bg-[#1d1836] rounded-full p-4 shadow-card">
                 <img 
                   src={technology.icon} 
                   alt={technology.name} 
                   className="w-full h-full object-contain" 
                 />
              </div>
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");