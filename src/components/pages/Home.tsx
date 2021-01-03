import React, { FunctionComponent } from 'react';

import promoBg from '../../assets/img/promo-bg.png';
import SortPopup from '../SortPopup';

const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <div className="home__promo">
        <div className="home__promo-text">
          <h1>
            Онлайн-сервис <br />
            доставки еды на дом
          </h1>
          <h3>
            Блюда из любимого ресторана привезет <br />
            курьер в перчатках, маске и с антисептиком
          </h3>
        </div>
        <img src={promoBg} alt="pizza" />
      </div>
      <div className="home__sort">
        <h1>Рестораны</h1>
        <SortPopup />
      </div>
      <div className="carts">
        <div className="cart"></div>
      </div>
    </div>
  );
};

export default Home;
