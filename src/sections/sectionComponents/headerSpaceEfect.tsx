import style from './styles/headerSpaceEfect.module.scss';
import * as img from '../images/imgIndex';
import { motion } from 'framer-motion';
const spaceAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 1,
    },
  }),
};

const imgHeaderFrameAnimation: any = {
  hidden: {
    scale: 0,
    rotate: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    rotate: 45,
    transition: {
      delay: custom * 1,
      duration: 6,
      ease: 'easeOut',
      repeat: Infinity,
      repeatType: 'reverse',
      rotate: { duration: 6, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' },
    },
  }),
};
const imgHeaderClockAnimation: any = {
  hidden: {
    scale: 0.7,
    rotate: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    rotate: 360,
    transition: {
      delay: custom * 1,
      duration: 12,
      repeat: Infinity,
      repeatType: 'reverse',
      rotate: { duration: 12, repeat: Infinity },
    },
  }),
};
function HeaderSpaceEfect() {
  const startNumber = 0;
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={spaceAnimation}
        custom={startNumber}
        className={style.conteiner}
        style={{ backgroundImage: `url(${img.imgHeaderBg})` }}
      >
        <motion.div className={style.header}>
          <motion.img
            initial="hidden"
            animate="visible"
            custom={startNumber}
            variants={imgHeaderFrameAnimation}
            className={style.imgHeaderFrame}
            src={img.imgHeaderFrame}
            alt=""
          />
          <motion.img
            initial="hidden"
            animate="visible"
            custom={startNumber}
            variants={imgHeaderClockAnimation}
            className={style.imgHeaderClock}
            src={img.imgHeaderClock}
            alt=""
          />
          <img className={style.imgHeaderDivision} src={img.imgHeaderDivision} alt="" />
          <img className={style.imgHeaderLight} src={img.imgHeaderLight} alt="" />
          <img className={style.imgHeaderPalette} src={img.imgHeaderPalette} alt="" />
          <img className={style.imgHeaderPalette1} src={img.imgHeaderPalette1} alt="" />
          <img className={style.imgHeaderPalette2} src={img.imgHeaderPalette2} alt="" />
          <img className={style.imgHeaderPalette3} src={img.imgHeaderPalette3} alt="" />
          <img className={style.imgHeaderPlus} src={img.imgHeaderPlus} alt="" />
          <img className={style.imgHeaderRocket} src={img.imgHeaderRocket} alt="" />
          <img className={style.imgHeaderPlane} src={img.imgHeaderPlane} alt="" />
          <img className={style.imgHeaderElephant} src={img.imgHeaderElephant} alt="" />
          <img className={style.imgHeaderBalloon} src={img.imgHeaderBalloon} alt="" />
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeaderSpaceEfect;
