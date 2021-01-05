import React, { FunctionComponent } from 'react';
import { Button } from '.';

interface IRestCard {
  imgUrl: string;
}

const RestCard: FunctionComponent<IRestCard> = ({ imgUrl }) => {
  return (
    <div className="restCard">
      <div className="restCard__img">
        <img
          src="https://images.sushishop.ru/assets/images/cache/docs/17669/roll-arigato-580h389.jpg/1592157185/580x389.webp"
          alt="Restaurant"
        />
      </div>
      <div className="restCard__text">
        <div className="restCard__text-top">
          <h1>Аригато</h1>
          <p>
            Тунец, сливочный сыр, салат чука, авокадо, попкорн из гречневых хлопьев, розовый соус
          </p>
        </div>
        <div className="restCard__text-bottom">
          <Button className="button-outline button-cart restCard__button">
            <span>В корзину</span>
          </Button>
          <h1>250 ₽</h1>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
