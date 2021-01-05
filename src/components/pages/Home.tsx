import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SortPopup, Card, CardLoading } from '..';

import { IRest } from '../interfaces/HomeInterface';

import { fetchRest } from '../../redux/actions/restaurants';

import promoBg from '../../assets/img/promo-bg.png';

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { rest, isLoading, sortBy } = useSelector((state: any) => state.rests);

  React.useEffect(() => {
    dispatch(fetchRest(sortBy));
  }, [sortBy]);

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
      <div className="cards">
        {isLoading
          ? rest.map((restaurant: IRest) => <Card key={restaurant.id} item={restaurant} />)
          : Array(6)
              .fill(0)
              .map((_, index) => <CardLoading key={index} />)}
      </div>
    </div>
  );
};

export default Home;
