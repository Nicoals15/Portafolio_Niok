import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { referencias } from '../constants';

const ReferenciaCard = ({ index, testimonial, name, designation, company, contact, email }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#111111] p-10 rounded-3xl xs:w-[320px] w-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-800"
  >


    <div className="mt-1">
      

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-bold text-[18px] font-beckman tracking-[1px]">
            <span className="text-white/50">@</span> {name}
          </p>
          <p className="mt-1 text-white/60 text-[14px] font-medium uppercase tracking-wider">
            {designation} - {company}
          </p>
          
          <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col gap-1">
            <p className="text-white text-[14px] font-bold">
              📞 {contact}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Referencias = () => {
  return (
    <div className="mt-12 bg-black rounded-[20px]">
      <div className={`bg-black rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-white/70`}>Lo que dicen de mi trabajo</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>Referencias Personales.</h2>
        </motion.div>
      </div>
      
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {referencias.map((referencia, index) => (
          <ReferenciaCard
            key={`referencia-${index}`}
            index={index}
            {...referencia}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Referencias, "referencias");