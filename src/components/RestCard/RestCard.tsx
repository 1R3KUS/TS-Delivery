import React, { FunctionComponent } from 'react';
import { Button } from '../';

interface IRestCard {
  name: string;
  structure: string;
  price: number;
  imgUrl: string;
}

const RestCard: FunctionComponent<IRestCard> = ({ name, structure, price, imgUrl }) => {
  return (
    <div className="restCard">
      <div className="restCard__img">
        <img src={imgUrl} alt="Restaurant" />
      </div>
      <div className="restCard__text">
        <div className="restCard__text-top">
          <h1>{name}</h1>
          <p>{structure}</p>
        </div>
        <div className="restCard__text-bottom">
          <Button className="button-outline button-cart restCard__button">
            <span>В корзину</span>
          </Button>
          <h1>{price} ₽</h1>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
