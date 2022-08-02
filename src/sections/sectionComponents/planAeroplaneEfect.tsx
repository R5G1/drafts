import style from './styles/planAeroplaneEfect.module.scss';
import * as img from '../images/imgIndex';
import { motion } from 'framer-motion';
const imgPlanAeroplane = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    x: [-140, 460, 950, 1400],
    y: [-120, 190, 390, 330],
    rotate: [10, 40, 0, -40],
    opacity: [0.5, 1, 1, 1, 0.8, 0],
    transition: {
      delay: custom * 1,
      duration: 2.5,
      ease: 'linear',
    },
  }),
};
function PlanAeroplaneEfect() {
  const startNumber = 0.1;
  return (
    <>
      <motion.div
        className={style.conteiner}
        style={{ backgroundImage: `url(${img.imgPlanLine})` }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          custom={startNumber}
          viewport={{ amount: 0.2, once: true }}
          variants={imgPlanAeroplane}
          className={style.planAeroplane}
          style={{ backgroundImage: `url(${img.imgPlanAeroplane})` }}
        ></motion.div>
        <div className={style.plan}>
          <div className={style.planPoint1}>
            <h4 className={style.planPointH}>1</h4>
            <p className={style.planPointP}>
              Зарегистрируйтесь на конкурс <a href="#">Здесь</a>
            </p>
          </div>
          <div className={style.planPoint2}>
            <h4 className={style.planPointH}>2</h4>
            <p className={style.planPointP}>Выполните все условия конкурса</p>
          </div>
          <div className={style.planPoint3}>
            <h4 className={style.planPointH}>3</h4>
            <p className={style.planPointP}>
              Загрузите рисунок <a href="#">Здесь</a> или в Личном кабинете
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default PlanAeroplaneEfect;
