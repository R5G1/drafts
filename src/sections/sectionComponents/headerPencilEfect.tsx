import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import style from './styles/headerPencilEfect.module.scss';
import * as img from '../images/imgIndex';

const imgHeaderPencilAnimation = {
  hidden: {},
  visible: (custom: number) => ({
    rotate: [0, 24, 0, 66, 0, 72, 0],
    y: [0, -8, 2, -6, 4, -4, 2],
    transition: {
      type: 'spring',
      delay: custom * 1,
      damping: 1,
      bounce: 1,
      duration: 3.5,
      ease: 'easeInOut',
      times: [0, 0.2, 0.4, 0.5, 0, 6, 0.8, 1],
      repeat: Infinity,
    },
  }),
};
const contentHeaderPencilAnimation = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 1,
      ease: 'easeInOut',
    },
  }),
};
function HeaderPencilEfect() {
  const startNumber = 0;
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        custom={startNumber}
        className={style.conteiner}
      >
        <div className={style.contentHeaderPencil}>
          <img
            className={style.imgHeaderPencilAeroplane}
            src={img.imgHeaderPencilAeroplane}
            alt=""
          />
          <motion.div
            variants={contentHeaderPencilAnimation}
            className={style.contentHeaderPencilAnimation}
          >
            <img className={style.imgHeaderGirl} src={img.imgHeaderGirl} alt="" />
            <motion.img
              variants={imgHeaderPencilAnimation}
              className={style.imgHeaderPencil}
              src={img.imgHeaderPencil}
              alt=""
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default HeaderPencilEfect;
