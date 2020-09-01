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
              <Link to="/guests" onClick={() => setNavActive(!navActive)}>Guests</Link>
            </li>
            {/*<li className="link">*/}
            {/*  <Link to="/events" onClick={() => setNavActive(!navActive)}>Events</Link>*/}
            {/*</li>*/}
            <li className="link">
              <Link to="/schedule" onClick={() => setNavActive(!navActive)}>Schedule</Link>
            </li>
          </ul>
        </div>
      </div>
    )
};

export default Navigation;
