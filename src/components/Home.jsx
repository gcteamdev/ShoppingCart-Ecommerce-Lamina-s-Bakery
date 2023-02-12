import React from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllItems } from '../Redux/itemSlice';
import { useEffect } from 'react';

function Home() {
  const state = useSelector((state) => state)
  const { items } = state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems('http://localhost:3000/items'));
   
  }, [dispatch]);

  return (
    <div className="homePage">
      <div className="homePageWrapper">
        <h1 className="itemsHeader"> Items:</h1>
       
        {items.data?.map((item) => {
          return (
            <div className="wrapper col-md-4" key={item.id}>
              <div className="card">
                <img
                  className="card-img-top center-block"
                  src={item.imageUrl}
                  alt="Card cap"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Home;
