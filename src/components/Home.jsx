import React from 'react';
import Cart from './Cart';
//import { Link } from 'react-router-dom';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllItems } from '../Redux/itemSlice';
import cartSlice from '../Redux/cartSlice';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { addToCart, removeFromCart, clearAllItems } from '../Redux/cartSlice';

function Home() {
  const state = useSelector((state) => state);
  const { items, cart } = state;
  // const items = state.items;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems('http://localhost:3000/items'));
  }, [dispatch]);

  return (
    <div className="homePage">
      <div className="sloganCtn">
        <Fade left>
          <h1 className="itemsHeader">
            Pick <span>Sweetness:</span>
          </h1>
          <p className="sloganP">
            Experience the epitome of sweetness with every indulgent bite..
          </p>
        </Fade>
      </div>
      <div className="homePageWrapper">
        {items.data?.map((item, key) => {
          return (
            <div className="cardsWrapper">
              <Zoom duration={1450}>
                <div className="wrapper col-md" key={item.id}>
                  <div className="card">
                    <img
                      className="card-img-top center-block card-img"
                      src={item.imageUrl}
                      alt="Card cap"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <h6 className="card-title">{item.detail}</h6>
                      <p className="card-text">${item.price}</p>
                    </div>
                    {!cart.cartItemIds.includes(item.id) ? (
                      <button
                        className="btn btn-dark"
                        onClick={() => dispatch(addToCart(item.id))}
                      >
                        Add to cart
                      </button>
                    ) : null}
                    {cart.cartItemIds.includes(item.id) ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove from cart
                      </button>
                    ) : null}
                  </div>
                </div>
              </Zoom>
            </div>
          );
        })}
      </div>

      {/*   <Link to="/cart" >Cart</Link> */}
    </div>
  );
}

export default Home;
