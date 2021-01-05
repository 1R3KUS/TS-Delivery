import React, { FunctionComponent } from 'react';
import { RestCard } from '..';
import { IRest } from '../interfaces/HomeInterface';
import { useDispatch } from 'react-redux';
import { fetchRestItems } from '../../redux/actions/restAction';

interface IRestaurant {
  activeRestItem: Array<object>;
  activeItem: number;
}

const Restaurant: FunctionComponent<IRestaurant> = ({ activeRestItem, activeItem }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRestItems(activeItem));
  }, [activeItem]);

  const [activeRest] = activeRestItem.map((item: any) => item);

  console.log('Array: ', activeRest && activeRest.name);
  console.log('activeRestItem: ', activeRestItem);

  return (
    <div className="restaurant">
      {activeRest && (
        <div className="restaurant__title">
          <h1 className="restaurant__name">{activeRest.name}</h1>
          <span className="restaurant__rating">
            <i>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.6515 5.88223C14.5553 5.58477 14.2915 5.37351 13.9793 5.34538L9.73947 4.96039L8.06292 1.03625C7.9393 0.74866 7.65776 0.5625 7.34495 0.5625C7.03215 0.5625 6.75061 0.74866 6.62699 1.03692L4.95043 4.96039L0.709893 5.34538C0.398319 5.37418 0.135163 5.58477 0.0384405 5.88223C-0.0582818 6.17968 0.0310434 6.50593 0.266741 6.71159L3.47158 9.52226L2.52655 13.6851C2.45739 13.9912 2.5762 14.3076 2.83016 14.4912C2.96667 14.5898 3.12638 14.64 3.28744 14.64C3.4263 14.64 3.56404 14.6026 3.68766 14.5286L7.34495 12.3428L11.0009 14.5286C11.2684 14.6896 11.6057 14.6749 11.8591 14.4912C12.1131 14.307 12.2318 13.9905 12.1627 13.6851L11.2177 9.52226L14.4225 6.71216C14.6582 6.50593 14.7482 6.18024 14.6515 5.88223Z"
                  fill="#FFC107"
                />
              </svg>
            </i>
            {activeRest.rating}
          </span>
          <span className="restaurant__type">
            От {activeRest.price} ₽ | {activeRest.type}
          </span>
        </div>
      )}
      <div className="restCards">
        {activeRest && activeRest.menu.map((item: any) => <RestCard {...item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Restaurant;
