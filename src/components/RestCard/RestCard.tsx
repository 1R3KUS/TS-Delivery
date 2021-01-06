import React, { FunctionComponent } from 'react';
import { Button } from '../';

interface IRestCard {
  name: string;
  structure: string;
  price: number;
  id: number;
  imgUrl: string;
  item: object;
  onAddCartItem(obj: object): void;
}

const RestCard: FunctionComponent<IRestCard> = ({
  onAddCartItem,
  item,
  name,
  structure,
  price,
  imgUrl,
}) => {
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
          <Button
            className="button-outline button-cart restCard__button"
            onClick={() => onAddCartItem(item)}>
            <span>В корзину</span>
          </Button>
          <h1>{price} ₽</h1>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
