import React, { useState } from 'react';
import { Link } from 'gatsby'
import './Navigation.scss';

const Navigation = () => {
  const [navActive, setNavActive] = useState(false);

    return (
      <div className={`Navigation ${navActive && 'active'}`}>
        <button type="button" className="Navigation-toggle" onClick={() => setNavActive(!navActive)}>
          <span className='line' />
          <span className='line' />
        </button>
        <div className="Navigation-overlay">
          <button type="button" className="Navigation-close-btn" onClick={() => setNavActive(!navActive)}>
            <span className='line' />
            <span className='line' />
          </button>
          <ul className="Navigation-overlay-links">
            <li className="link">
              <Link to="/" onClick={() => setNavActive(!navActive)}>Home</Link>
            </li>
            <li className="link">
              <Link to="/watch" onClick={() => setNavActive(!navActive)}>Watch</Link>
            </li>
            <li className="link">
              <Link to="/#speakers" onClick={() => setNavActive(!navActive)}>Speakers</Link>
            </li>
            <li className="link">
              <Link to="/schedule" onClick={() => setNavActive(!navActive)}>Schedule</Link>
            </li>
            <li className="link">
              <Link to="/swag" onClick={() => setNavActive(!navActive)}>Swag</Link>
            </li>
            <li className="link">
              <Link to="/shop" onClick={() => setNavActive(!navActive)}>Shop</Link>
            </li>
            <li className="link">
              <a href="https://www.facebook.com/designweektally" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    )
};

export default Navigation;
