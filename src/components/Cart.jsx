import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cartSlice from '../Redux/cartSlice';
import { removeFromCart, clearAllItems } from '../Redux/cartSlice';
import itemList from '../data/itemList.json';
import './Cart.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Cart() {
  const { cartItemIds } = useSelector((state) => state.cart);
  const cartItemData = itemList.items.filter((item) =>
    cartItemIds.includes(item.id)
  );
  const dispatch = useDispatch();

  return (
    <div>
      {cartItemData.length > 0 && (
        <div className="cart-product ">
          <h3 className="text-dark Itemsadded">
            Items in cart:
            <span className="text-success">{cartItemData.length}</span>
          </h3>
          <div className="addedCards">
            {cartItemData.map((item) => (
              <div key={item.id} className="row card m-5">
                <img className="item-image" src={item.imageUrl} alt="product" />

                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p className="text-truncate">{item.detail}</p>
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <i className="bi bi-trash-fill" /> Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          <footer className="text-center">
            <button
              className="btn btn-success"
              onClick={() => dispatch(clearAllItems())}
            >
              CHECKOUT
            </button>
          </footer>
        </div>
      )}

      {cartItemData.length < 1 && (
        <div className="card text-dark mx-auto mt-5">
          <p>
            Empty{' '}
            <span>
              <ShoppingCartOutlinedIcon />
            </span>{' '}
            No problem!
          </p>
          <p>
            Our bakery is stocked with treats baked with love and humor. Fill up
            now and treat your taste buds.
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
