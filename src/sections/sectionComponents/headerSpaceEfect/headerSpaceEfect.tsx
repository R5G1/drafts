import style from './headerSpaceEfect.module.scss';
import * as img from '../../images/imgIndex';
import { motion } from 'framer-motion';
import {
  imgHeaderAeroplaneAnimation,
  imgHeaderBalloonAnimation,
  imgHeaderClockAnimation,
  imgHeaderDivisionAnimation,
  imgHeaderElephantAnimation,
  imgHeaderFrameAnimation,
  imgHeaderLightAnimation,
  imgHeaderPaletteAnimation,
  imgHeaderplanet1Animation,
  imgHeaderplanet2Animation,
  imgHeaderplanet3Animation,
  imgHeaderPlusAnimation,
  imgHeaderRocketAnimation,
  spaceAnimation,
} from './constHeaderSpaceEfect';

function HeaderSpaceEfect() {
  const startNumber = 2;
  const startImgHeaderLight = startNumber + 1.3;
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
            variants={imgHeaderFrameAnimation}
            className={style.imgHeaderFrame}
            src={img.imgHeaderFrame}
            alt=""
          />
          <motion.img
            variants={imgHeaderClockAnimation}
            className={style.imgHeaderClock}
            src={img.imgHeaderClock}
            alt=""
          />
          <motion.img
            variants={imgHeaderDivisionAnimation}
            className={style.imgHeaderDivision}
            src={img.imgHeaderDivision}
            alt=""
          />
          <motion.img
            custom={startImgHeaderLight}
            variants={imgHeaderLightAnimation}
            className={style.imgHeaderLight}
            src={img.imgHeaderLight}
            alt=""
          />
          <motion.img
            variants={imgHeaderPaletteAnimation}
            className={style.imgHeaderPalette}
            src={img.imgHeaderPalette}
            alt=""
          />
          <motion.img
            variants={imgHeaderplanet1Animation}
            className={style.imgHeaderPalette1}
            src={img.imgHeaderplanet1}
            alt=""
          />
          <motion.img
            variants={imgHeaderplanet2Animation}
            className={style.imgHeaderPalette2}
            src={img.imgHeaderplanet2}
            alt=""
          />
          <motion.img
            variants={imgHeaderplanet3Animation}
            className={style.imgHeaderPalette3}
            src={img.imgHeaderplanet3}
            alt=""
          />
          <motion.img
            variants={imgHeaderPlusAnimation}
            className={style.imgHeaderPlus}
            src={img.imgHeaderPlus}
            alt=""
          />
          <motion.img
            variants={imgHeaderRocketAnimation}
            className={style.imgHeaderRocket}
            src={img.imgHeaderRocket}
            alt=""
          />
          <motion.img
            variants={imgHeaderAeroplaneAnimation}
            className={style.imgHeaderPlane}
            src={img.imgHeaderAeroplane}
            alt=""
          />
          <motion.img
            variants={imgHeaderElephantAnimation}
            className={style.imgHeaderElephant}
            src={img.imgHeaderElephant}
            alt=""
          />
          <motion.img
            variants={imgHeaderBalloonAnimation}
            className={style.imgHeaderBalloon}
            src={img.imgHeaderBalloon}
            alt=""
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default HeaderSpaceEfect;
