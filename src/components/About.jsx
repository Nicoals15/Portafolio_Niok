import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Conóceme</p>
        <h2 className={styles.sectionHeadText}>Optimización de Procesos y Gestión de Datos</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Soy un creador de soluciones tecnológicas enfocado en transformar flujos de trabajo operativos en sistemas eficientes e intuitivos. Combino el desarrollo Full Stack con una fuerte vocación por la arquitectura de datos para optimizar los procesos clave del negocio.
        Para lograrlo, construyo bajo un stack tecnológico moderno:
        <br />
        <strong> Frontend & UI:</strong> Desarrollo de interfaces escalables y seguras con React y TypeScript, desplegadas en ecosistemas Next.js.
        <br />
        <strong>Backend & ORM:</strong> Construcción de lógica empresarial y APIs robustas utilizando Node, apoyándome en Prisma para un manejo limpio de las consultas.
        <br />
        <strong>Data Architecture:</strong> Modelado estructurado de la información con el objetivo claro de especializarme en la administración avanzada de bases de datos.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
