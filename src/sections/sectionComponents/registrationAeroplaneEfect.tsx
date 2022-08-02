import style from './styles/registrationAeroplaneEfect.module.scss';
import * as img from '../images/imgIndex';
import { motion } from 'framer-motion';
const imgRegistrationAeroplane = {
  hidden: { opacity: 1 },
  visible: (custom: number) => ({
    x: [280, 160, 0],
    y: [-180, -10, 0],
    rotate: [-10, 20, 50],
    transition: {
      delay: custom * 1,
      duration: 1.5,
      ease: 'linear',
    },
  }),
};
const RegistrationPoint1 = {
  hidden: { rotate: 30 },
  visible: (custom: number) => ({
    x: -31,
    rotate: 20,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'linear',
    },
  }),
};
const RegistrationPoint2 = {
  hidden: { rotate: 40 },
  visible: (custom: number) => ({
    x: -21,
    rotate: 50,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'linear',
    },
  }),
};

function RegistrationAeroplaneEfect() {
  const startNumber = 0.1;
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" className={style.conteiner}>
        <div className={style.registration}>
          <motion.div
            custom={startNumber}
            viewport={{ amount: 0.2, once: true }}
            variants={imgRegistrationAeroplane}
            className={style.RegistrationAeroplane}
            style={{ backgroundImage: `url(${img.imgRegistrationAeroplane})` }}
          ></motion.div>
          <motion.div
            custom={startNumber}
            viewport={{ amount: 0.2, once: true }}
            variants={RegistrationPoint1}
            className={style.RegistrationPoint1}
            style={{ backgroundImage: `url(${img.imgRegistrationAeroplane})` }}
          ></motion.div>
          <motion.div
            custom={startNumber}
            viewport={{ amount: 0.2, once: true }}
            variants={RegistrationPoint2}
            className={style.RegistrationPoint2}
            style={{ backgroundImage: `url(${img.imgRegistrationAeroplane})` }}
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
}
export default RegistrationAeroplaneEfect;
