import {
  imgAdvantages1,
  imgAdvantages2,
  imgAdvantages3,
  imgAdvantages4,
  imgAdvantages5,
  imgAdvantages6,
  imgAdvantagesBg,
  imgNav,
  imgPlanBg,
} from './images/imgIndex';
import './index.scss';

function Sections() {
  return (
    <div>
      <section className="header">
        <div className="conteiner">
          <nav className="header__nav-conteiner">
            <div className="header__nav-title">
              <img className="header__nav-title-img" src={imgNav} alt="" />
              <p className="header__nav-title">
                Слон<span>УМ</span>
              </p>
            </div>
            <button className="header__nav-title-btn">Войти</button>
          </nav>
          <div className="header__content-conteiner">
            <div className="header__content-text-conteiner">
              <p className="header__content-text-p-small">От компании СлонУМ</p>
              <h1>Всероссийский конкурс Детского рисунка</h1>
              <p className="header__content-text-p-bold">
                Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для
                всех возрастов
              </p>
            </div>
            <div className="header__content-img-conteiner">
              <img className="header__content-img-conteiner" src="" alt="" />
              <img className="header__content-img-conteiner" src="" alt="" />
            </div>
          </div>
          <div className="header__invite-conteiner">
            <button className="header__invite-btn">Учавствовать</button>
            <div className="header__invite-time">добавить время</div>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="conteiner">
          <div className="description__text">
            <p>
              Компания <b>СлонУм</b> – проводит конкурс для детей в котором могут участвовать ребята
              <span> всех возрастов!</span> Номинации в которых можно победить, есть возможность
              проявить себя во всех направлениях и даже <span>без художественных способностей</span>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="advantages" style={{ backgroundImage: `url(${imgAdvantagesBg})` }}>
        <div className="conteiner">
          <div className="advantages__content">
            <div className="content-title">
              <h2>
                Для чего <b>нужно</b> участвовать
              </h2>
            </div>

            <div className="advantages__content-column-conteiner">
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={imgAdvantages1} alt="" />
                <p className="advantages__content-column-p">
                  Шанс занять 1 место — в вашем городе и по всей России
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={imgAdvantages2} alt="" />
                <p className="advantages__content-column-p">
                  Развитие самостоятельности + свободное время для родителей ;)
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={imgAdvantages3} alt="" />
                <p className="advantages__content-column-p">
                  Персональный диплом в разных номинациях каждому участнику
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={imgAdvantages4} alt="" />
                <p className="advantages__content-column-p">
                  Призы и скидки для подписчиков и авторизованных пользователей
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={imgAdvantages5} alt="" />
                <p className="advantages__content-column-p">
                  Бесплатный диплом на email — через 1 день после конкурса
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={imgAdvantages6} alt="" />
                <p className="advantages__content-column-p">
                  Публикация работ победителей во ВКонтакте .
                  <a style={{ color: 'var(--orangeColor)' }} href="">
                    Подписывайтесь!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plan" style={{ backgroundImage: `url(${imgPlanBg})` }}>
        <div className="conteiner">
          <div className="plan__content"></div>
          <div className="content-title">
            <h2>
              Пошаговый <b>план</b>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Sections;
