import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import style from './styles/headerPencilEfect.module.scss';
import * as img from '../images/imgIndex';

const imgHeaderPencilAnimation: any = {
  hidden: {},
  visible: (custom: number) => ({
    transition: {
      delay: custom * 1,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }),
};

function HeaderPencilEfect() {
  const startNumber = 2;
  return (
    <>
      <div className={style.conteiner}>
        <motion.div className={style.contentHeaderPencil}>
          <motion.img
            initial="hidden"
            animate="visible"
            custom={startNumber}
            variants={imgHeaderPencilAnimation}
            className={style.imgHeaderPencilAeroplane}
            src={img.imgHeaderPencilAeroplane}
            alt=""
          />
          <div className={style.contentHeaderPencilAnimation}>
            <motion.img
              initial="hidden"
              animate="visible"
              custom={startNumber}
              variants={imgHeaderPencilAnimation}
              className={style.imgHeaderGirl}
              src={img.imgHeaderGirl}
              alt=""
            />
            <motion.img
              initial="hidden"
              animate="visible"
              custom={startNumber}
              variants={imgHeaderPencilAnimation}
              className={style.imgHeaderPencil}
              src={img.imgHeaderPencil}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default HeaderPencilEfect;
