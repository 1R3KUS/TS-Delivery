import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, CartItem } from '..';

const Cart: FunctionComponent = () => {
  const { cartItems, totalCount, totalPrice } = useSelector((state: any) => state.cart);

  const cartItemsForMap = Object.keys(cartItems).map((key) => cartItems[key].items[0]);

  return (
    <div className="cart">
      <div className="cart__title">
        <i>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.0252 13.709H6.39432L6.9783 12.5195L16.6814 12.502C17.0096 12.502 17.2908 12.2676 17.3494 11.9434L18.6931 4.42187C18.7283 4.22461 18.6756 4.02148 18.5467 3.86719C18.483 3.79125 18.4035 3.73008 18.3138 3.68792C18.2241 3.64577 18.1263 3.62363 18.0271 3.62305L5.68338 3.58203L5.57791 3.08594C5.51151 2.76953 5.22635 2.53906 4.90213 2.53906H1.88455C1.7017 2.53906 1.52633 2.6117 1.39704 2.741C1.26774 2.8703 1.1951 3.04566 1.1951 3.22852C1.1951 3.41137 1.26774 3.58673 1.39704 3.71603C1.52633 3.84533 1.7017 3.91797 1.88455 3.91797H4.34354L4.80447 6.10937L5.93924 11.6035L4.4783 13.9883C4.40243 14.0907 4.35674 14.2123 4.34638 14.3393C4.33603 14.4663 4.36143 14.5937 4.41971 14.707C4.5369 14.9395 4.77322 15.0859 5.03494 15.0859H6.26151C6.00002 15.4332 5.85878 15.8563 5.85916 16.291C5.85916 17.3965 6.7576 18.2949 7.86307 18.2949C8.96854 18.2949 9.86697 17.3965 9.86697 16.291C9.86697 15.8555 9.72244 15.4316 9.46463 15.0859H12.6111C12.3496 15.4332 12.2084 15.8563 12.2088 16.291C12.2088 17.3965 13.1072 18.2949 14.2127 18.2949C15.3181 18.2949 16.2166 17.3965 16.2166 16.291C16.2166 15.8555 16.0721 15.4316 15.8142 15.0859H18.0271C18.406 15.0859 18.7166 14.7773 18.7166 14.3965C18.7154 14.2138 18.6421 14.039 18.5126 13.9102C18.3831 13.7814 18.2078 13.7091 18.0252 13.709V13.709ZM5.97049 4.94141L17.2166 4.97852L16.115 11.1465L7.28104 11.1621L5.97049 4.94141ZM7.86307 16.9082C7.52322 16.9082 7.24588 16.6309 7.24588 16.291C7.24588 15.9512 7.52322 15.6738 7.86307 15.6738C8.20291 15.6738 8.48026 15.9512 8.48026 16.291C8.48026 16.4547 8.41523 16.6117 8.29948 16.7274C8.18374 16.8432 8.02676 16.9082 7.86307 16.9082V16.9082ZM14.2127 16.9082C13.8728 16.9082 13.5955 16.6309 13.5955 16.291C13.5955 15.9512 13.8728 15.6738 14.2127 15.6738C14.5525 15.6738 14.8299 15.9512 14.8299 16.291C14.8299 16.4547 14.7648 16.6117 14.6491 16.7274C14.5333 16.8432 14.3764 16.9082 14.2127 16.9082V16.9082Z"
              fill="#1890FF"
            />
          </svg>
        </i>
        <span>Корзина</span>
      </div>

      {cartItemsForMap.length >= 1 ? (
        <>
          <div className="cart__items">
            {cartItemsForMap &&
              cartItemsForMap.map((cartItem: any, index: number) => (
                <CartItem
                  cartItem={cartItem}
                  key={index}
                  totalPrice={cartItems[cartItem.id].totalPrice}
                  totalCount={cartItems[cartItem.id].items.length}
                />
              ))}
          </div>
          <div className="cart__footer">
            <div className="cart__sum">
              <h1>
                Всего блюд: <span>{totalCount}</span>
              </h1>
              <h1>
                Сумма заказа: <span>{totalPrice} ₽</span>
              </h1>
            </div>
            <div className="cart__btns">
              <Link to="/">
                <Button className="button-outline button-cart">Вернуться назад</Button>
              </Link>
              <Button className="cart__pay-btn">Оплатить сейчас</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="cart__empty">
          <h1>Корзина пустая</h1>
          <p>Перейдите на главную страницу для выбора блюда </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
