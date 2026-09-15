import { useEffect, useState } from 'react';
import style from './styles/headerTimeEfect.module.scss';

function HeaderTimeEfect() {
  return (
    <>
      <div className={style.conteiner}>
        <div className={style.time}>
          <p className={style.timeTitle}>01</p>
          <p className={style.timeText}>дней</p>
        </div>
        <div className={style.timeEfect}>:</div>
        <div className={style.time}>
          <p className={style.timeTitle}>09</p>
          <p className={style.timeText}>часов</p>
          <p className={style.timeTextSmoll}>по МСК</p>
        </div>
        <div className={style.timeEfect}>:</div>
        <div className={style.time}>
          <p className={style.timeTitle}>43</p>
          <p className={style.timeText}>минут</p>
        </div>
      </div>
    </>
  );
}

export default HeaderTimeEfect;
