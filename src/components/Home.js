import React, { useState } from 'react';
import ReaperHoodie from '../images/ReaperHoodie.png';
import LoveHoodie from '../images/LoveHoodie.png';
import TearsHoodie from '../images/TearsHoodie.png';
import RageHoodie from '../images/RageHoodie.png';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <div className='image'>
        <img src={ReaperHoodie} alt='ReaperHoodie' />
        <h3>Reaper Hoodie</h3>
        <h3>$45.00</h3>
        <a
          onClick={() => props.addBasket('ReaperHoodie')}
          className='addToCart cart1'
          href='#'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={LoveHoodie} alt='LoveHoodie ' />
        <h3>Love Hoodie</h3>
        <h3>$45.00</h3>
        <a
          onClick={() => props.addBasket('LoveHoodie')}
          className='addToCart cart2'
          href='#'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={TearsHoodie} alt='TearsHoodie' />
        <h3>Tears Hoodie</h3>
        <h3>$45.00</h3>
        <a
          onClick={() => props.addBasket('TearsHoodie')}
          className='addToCart cart3'
          href='#'
        >
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={RageHoodie} alt='RageHoodie' />
        <h3>Rage Hoodie</h3>
        <h3>$45.00</h3>
        <a
          onClick={() => props.addBasket('RageHoodie')}
          className='addToCart cart4'
          href='#'
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(Home);
