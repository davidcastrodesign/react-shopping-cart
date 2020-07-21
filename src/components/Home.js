import React from 'react';
import hoodiereaper2 from '../images/hoodiereaper2.png';
import hoodielove2 from '../images/hoodielove2.png';
import hoodietears2 from '../images/hoodietears2.png';
import hoodierage2 from '../images/hoodierage2.png';

const Home = () => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={hoodiereaper2} alt='Reaper Hoodie' />
        <h3>Reaper Hoodie</h3>
        <h3>$45.00</h3>
        <a className='addToCart cart1' href='#'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={hoodielove2} alt='Love Hoodie' />
        <h3>Love Hoodie</h3>
        <h3>$45.00</h3>
        <a className='addToCart cart2' href='#'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={hoodietears2} alt='Tears Hoodie' />
        <h3>Tears Hoodie</h3>
        <h3>$45.00</h3>
        <a className='addToCart cart3' href='#'>
          Add to Cart
        </a>
      </div>
      <div className='image'>
        <img src={hoodierage2} alt='Rege Hoodie' />
        <h3>Rage Hoodie</h3>
        <h3>$45.00</h3>
        <a className='addToCart cart4' href='#'>
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Home;
