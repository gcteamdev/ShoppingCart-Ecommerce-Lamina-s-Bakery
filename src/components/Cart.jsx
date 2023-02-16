import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearAllItems } from '../Redux/cartSlice';
import itemList from '../data/itemList.json';
import './Cart.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Cart() {
  const { cartItems, cartItemIds } = useSelector((state) => state.cart);
  const cartItemData = itemList.items.filter((item) =>
    cartItemIds.includes(item.id)
  );
  const dispatch = useDispatch();

  const incrementQuantity = (itemId) => {
    dispatch(addToCart(itemId));
  };

  const decrementQuantity = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const getItemQuantity = (itemId) => {
    return cartItems[itemId]?.quantity || 0;
  };

  const getItemTotalPrice = (itemId) => {
    const item = cartItemData.find((item) => item.id === itemId);
    return item ? item.price * getItemQuantity(itemId) : 0;
  };

  const prices = cartItemIds.map(getItemTotalPrice);
  const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div>
      {cartItemData.length > 0 && (
        <div className="cart-product">
          <h3 className="text-dark Itemsadded">
            Items in cart:
            <span className="text-success">{cartItemData.length}</span>
          </h3>
          <div className="addedCards rounded">
            {cartItemData.map((item) => (
              <div key={item.id} className="row card m-5">
                <img className="itemImg p-2" src={item.imageUrl} alt="product" />
                <div className="itemInfo">
                  <h4>{item.name}</h4>
                  <p className="text-truncate">${item.price}</p>
                  <div className="quantity d-flex">Qt:
                    <button className="btn btn-warning" onClick={() => decrementQuantity(item.id)}>
                      -
                    </button>
                    <span className="count">{getItemQuantity(item.id)}</span>
                    <button className="btn btn-success" onClick={() => incrementQuantity(item.id)}>
                      +
                    </button>
                  </div>
                  <p>Total: ${getItemTotalPrice(item.id).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <h1> Total: ${total.toFixed(2)}</h1>
          <div className="checkout">
            <button className="btn btn-success" onClick={() => dispatch(clearAllItems())}>
              CHECKOUT
            </button>
          </div>
        </div>
      )}
      {cartItemData.length < 1 && (
        <div className="card text-dark mx-auto mt-5">
          <p>
            Empty
            <span>
              <ShoppingCartOutlinedIcon />
            </span>
            No problem!
          </p>
          <p>
            Our bakery is stocked with treats baked with love and humor. Fill up now and treat your taste buds.
          </p>
        </div>
      )}
      <Link to="/" className="btn-dark btn btn-lg mb-5 mt-5">
        Back to Bakery
      </Link>
    </div>
  );
}

export default Cart;
