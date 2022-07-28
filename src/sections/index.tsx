import React from 'react';
import DisclosureText from '../components/DisclosureText/DisclosureText';
import HeaderTimeEfect from './sectionComponents/headerTimeEfect';
import * as img from './images/imgIndex';
import './index.scss';

function Sections() {
  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
  }
  function submitMailing(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <>
      <section className="header">
        <div className="conteiner">
          <nav className="header__nav-conteiner">
            <div className="header__nav-title">
              <img className="header__nav-title-img" src={img.imgNav} alt="" />
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
            <div className="header__invite-time">
              <HeaderTimeEfect />
            </div>
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
      <section className="advantages" style={{ backgroundImage: `url(${img.imgAdvantagesBg})` }}>
        <div className="conteiner">
          <div className="advantages__content">
            <div className="content-title">
              <h2>
                Для чего <b>нужно</b> участвовать
              </h2>
            </div>

            <div className="advantages__content-column-conteiner">
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={img.imgAdvantages1} alt="" />
                <p className="advantages__content-column-p">
                  Шанс занять 1 место — в вашем городе и по всей России
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={img.imgAdvantages2} alt="" />
                <p className="advantages__content-column-p">
                  Развитие самостоятельности + свободное время для родителей ;)
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={img.imgAdvantages3} alt="" />
                <p className="advantages__content-column-p">
                  Персональный диплом в разных номинациях каждому участнику
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={img.imgAdvantages4} alt="" />
                <p className="advantages__content-column-p">
                  Призы и скидки для подписчиков и авторизованных пользователей
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={img.imgAdvantages5} alt="" />
                <p className="advantages__content-column-p">
                  Бесплатный диплом на email — через 1 день после конкурса
                </p>
              </div>
              <div className="advantages__content-column">
                <img className="advantages__content-column-img" src={img.imgAdvantages6} alt="" />
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
      <section className="plan" style={{ backgroundImage: `url(${img.imgPlanBg})` }}>
        <div className="conteiner">
          <div className="plan__content"></div>
          <div className="content-title">
            <h2>
              Пошаговый <b>план</b>
            </h2>
          </div>
        </div>
      </section>
      <section className="certificate" style={{ backgroundImage: `url(${img.imgCertificateBg})` }}>
        <div>
          <div className="conteiner">
            <div className="certificate__content-conteiner">
              <div className="certificate__content-text">
                <div className="content-title">
                  <h2>
                    Выдаём <b>дипломы</b> участникам
                  </h2>
                </div>
                <p className="certificate__content-text-p">
                  Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным
                  категориям, а также определит другие номинации, подчеркнув уникальную особенность
                  каждого конкретного рисунка — дипломы получат все дети!
                </p>
                <p className="certificate__content-text-p">
                  Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса,
                  дополнительно вышлем его на e-mail.
                </p>
                <p className="certificate__content-text-p">Со слоном к победам напролом!</p>
              </div>
              <div className="certificate__content-img">
                <img src={img.imgCertificate} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="registration">
        <div className="conteiner">
          <div className="registration__content-conteiner">
            <div className="registration__content-discount">
              <div className="registration__content-discount-img">
                <img src={img.imgRegistration} alt="" />
                <p className="registration__content-discount-img-text">Скидка за репост</p>
              </div>
              <div className="registration__content-discount-text">
                <p>Стоимость участия:</p>
                <p className="registration__content-discount-text-title">
                  149₽ <span>299₽</span>
                </p>
                <p>При наличии репоста в соцсетях :)</p>
              </div>

              <div className="registration__content-discount-social-network">
                <p>Получить скидку:</p>
                <div className="registration__content-discount-text-social-network-img">
                  <a href="">
                    <img src={img.imgRegistrationVk} alt="" />
                  </a>
                  <a href="">
                    <img src={img.imgRegistrationOk} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="registration__content-form">
              <div className="content-title">
                <h2>Зарегистрируйтесь, чтобы участвовать</h2>
              </div>
              <form className="registration__form" onSubmit={submitHandler}>
                <input type="text" placeholder="ФИО ребёнка" />
                <input type="text" placeholder="Дата рождения" />
                <input type="text" placeholder="Город" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Пароль" />
                <div className="form-checkbox">
                  <input
                    className="form-checkbox__one-checkbox"
                    type="checkbox"
                    id="check"
                    required
                  />
                  <label htmlFor="check"></label>
                  <p className="form-checkbox__one-checkbox-text">
                    Отправляя данные я соглашаюсь с <a href="">Условиями конкурса</a> и
                    <a href=""> Политикой обработки данных</a>
                  </p>
                </div>
                <div className="registration__form-btn-conteiner">
                  <button className="registration__form-btn"> Учавствовать</button>
                  <img className="registration__form-btn-img" src={img.imgRegistrationF} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="questions">
        <div className="conteiner">
          <div className="content-title">
            <h2>Зарегистрируйтесь, чтобы участвовать</h2>
          </div>
          <div className="questions__content">
            <DisclosureText title={'Может ли ребёнок заниматься самостоятельно?'}>
              Lorem ipsum dolor
            </DisclosureText>
            <DisclosureText title={'Как происходит оплата?'}>Lorem ipsum dolor</DisclosureText>
            <DisclosureText title={'Есть ли гарантии усвоения материала?'}>
              Lorem ipsum dolor
            </DisclosureText>
            <DisclosureText title={'С кем будет общаться мой ребёнок?'}>
              Lorem ipsum dolor
            </DisclosureText>
            <DisclosureText title={'Каковы принципы обучения?'}>Lorem ipsum dolor</DisclosureText>
            <DisclosureText title={'Сколько раз в неделю можно заниматься?'}>
              Lorem ipsum dolor
            </DisclosureText>
          </div>
        </div>
      </section>
      <section className="mailing" style={{ backgroundImage: `url(${img.imgMailing})` }}>
        <div className="conteiner">
          <div className="content-title">
            <h2>Подпишись на нашу рассылку</h2>
          </div>
          <p className="mailing__text-p">
            Обещаем присылать только самое <br /> важное и интересное :)
          </p>
          <div className="mailing__form-conteiner">
            <form className="mailing__form" onSubmit={submitMailing}>
              <input className="mailing__form-input" type="text" placeholder="Email" />
              <button className="mailing__form-btn">Отправить</button>

              <div className="form-checkbox">
                <input
                  className="form-checkbox__one-checkbox"
                  type="checkbox"
                  id="check1"
                  required
                />
                <label htmlFor="check1"></label>
                <p className="form-checkbox__one-checkbox-text">
                  Отправляя данные я соглашаюсь с{' '}
                  <a href="" style={{ color: 'var(--whiteColor)' }}>
                    Условиями конкурса
                  </a>{' '}
                  и{' '}
                  <a href="" style={{ color: 'var(--whiteColor)' }}>
                    Политикой обработки данных
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="conteiner">
          <div className="footer__content-conteiner">
            <div className="footer__content-link">
              <p className="footer__content-link-text">Наши соцсети:</p>
              <div className="footer__content-link-a-conteiner">
                <a className="footer__content-link-a" href="#">
                  <img src={img.imgFooter1} alt="" />
                </a>
                <a className="footer__content-link-a" href="#">
                  <img src={img.imgFooter2} alt="" />
                </a>
                <a className="footer__content-link-a" href="#">
                  <img src={img.imgFooter3} alt="" />
                </a>
              </div>
            </div>
            <div className="footer__content-nav">
              <a href="#" className="footer__content-nav-a">
                Главная
              </a>
              <a href="#" className="footer__content-nav-a">
                Личный кабинет
              </a>
              <a href="#" className="footer__content-nav-a">
                Контакты
              </a>
              <a href="#" className="footer__content-nav-a">
                Конфиденциальность
              </a>
            </div>
            <div className="footer__content-link-btn">
              <p className="footer__content-link-text">Наши соцсети:</p>
              <DisclosureText title="">
                <div className="footer__content-link-a-conteiner">
                  <a className="footer__content-link-a" href="#">
                    <img src={img.imgFooter1} alt="" />
                  </a>
                  <a className="footer__content-link-a" href="#">
                    <img src={img.imgFooter2} alt="" />
                  </a>
                  <a className="footer__content-link-a" href="#">
                    <img src={img.imgFooter3} alt="" />
                  </a>
                </div>
              </DisclosureText>
            </div>
          </div>
        </div>
        <div className="footer__content-text-bottom">@ Все права защищены. ООО”Слонум” 2022</div>
      </section>
    </>
  );
}
export default Sections;
