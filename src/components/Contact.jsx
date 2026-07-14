import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="w-7 h-7" />,
      url: 'https://wa.me/3242824142', // Ejemplo: https://wa.me/1234567890
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-7 h-7" />,
      url: 'https://www.linkedin.com/in/juan-nicolas-guerrero-torres-647787279?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-7 h-7" />,
      url: 'https://www.instagram.com/niok223?igsh=ZGhibzA5bmh6aTV4',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-7 h-7" />,
      url: 'https://www.facebook.com/share/196rPFJ1DX/',
    },
  ];

  return (
    <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>¿TIENES UN PROYECTO EN MENTE?</p>
        <h3 className={styles.sectionHeadTextLight}>Contactame.</h3>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-6 font-poppins">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman py-5 px-6 w-full sm:w-[calc(50%-12px)] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');