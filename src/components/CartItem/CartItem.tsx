import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../../redux/actions/cartAction';
import { ICartItem } from '../interfaces/CartInterface';

interface ICartItemProps {
  cartItem: ICartItem;
  totalPrice: number;
  totalCount: number;
}

const CartItem: FunctionComponent<ICartItemProps> = ({ cartItem, totalPrice, totalCount }) => {
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    if (window.confirm('Вы действительно хотите удалить данное блюдо')) {
      dispatch(deleteCartItem(cartItem.id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-sides">
        <div className="cart__img">
          <img src={cartItem.imgUrl} alt="Роллы" />
        </div>
        <h1>{cartItem.name}</h1>
      </div>
      <div className="cart__item-sides">
        <div className="cart__math-btns">
          <div className="minus">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <rect width="16" height="2" x="2" y="9" fillRule="evenodd" rx="1" />
              </svg>
            </i>
          </div>
          <span>{totalCount}</span>
          <div className="plus">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10,2 C10.5522847,2 11,2.44771525 11,3 L11,9 L17,9 C17.5522847,9 18,9.44771525 18,10 C18,10.5522847 17.5522847,11 17,11 L11,11 L11,17 C11,17.5522847 10.5522847,18 10,18 C9.44771525,18 9,17.5522847 9,17 L9,11 L3,11 C2.44771525,11 2,10.5522847 2,10 C2,9.44771525 2.44771525,9 3,9 L9,9 L9,3 C9,2.44771525 9.44771525,2 10,2 Z"
                />
              </svg>
            </i>
          </div>
        </div>
        <h1 className="cart__totalPrice">{totalPrice} ₽</h1>
        <div onClick={onDeleteItem} className="cart__delete-btn">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.4141,10 L15.7071,5.707 C16.0981,5.316 16.0981,4.684 15.7071,4.293 C15.3161,3.902 14.6841,3.902 14.2931,4.293 L10.0001,8.586 L5.7071,4.293 C5.3161,3.902 4.6841,3.902 4.2931,4.293 C3.9021,4.684 3.9021,5.316 4.2931,5.707 L8.5861,10 L4.2931,14.293 C3.9021,14.684 3.9021,15.316 4.2931,15.707 C4.4881,15.902 4.7441,16 5.0001,16 C5.2561,16 5.5121,15.902 5.7071,15.707 L10.0001,11.414 L14.2931,15.707 C14.4881,15.902 14.7441,16 15.0001,16 C15.2561,16 15.5121,15.902 15.7071,15.707 C16.0981,15.316 16.0981,14.684 15.7071,14.293 L11.4141,10 Z"
              />
            </svg>
          </i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
