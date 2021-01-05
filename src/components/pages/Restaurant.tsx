import React, { FunctionComponent } from 'react';
import { RestCard } from '..';
import { IRest } from '../interfaces/HomeInterface';

interface IRestaurant {
  items: Array<IRest>;
}

const Restaurant: FunctionComponent<IRestaurant> = ({ items }) => {
  return (
    <div className="restaurant">
      <div className="restCards">
        {items.map((item) => (
          <RestCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
