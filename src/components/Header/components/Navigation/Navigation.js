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
            {/*<li className="link">*/}
            {/*  <Link to="/events" onClick={() => setNavActive(!navActive)}>Events</Link>*/}
            {/*</li>*/}
            <li className="link">
              <Link to="/schedule" onClick={() => setNavActive(!navActive)}>Schedule</Link>
            </li>
            <li className="link">
              <a href="https://www.facebook.com/designweektally/?__tn__=%2Cd%2CP-R&eid=ARAjb_Pt1Dxbn7CUSTIxKe54SGNbMMQ-FRMboMBs5JZdZHMgs4OiSDZWblnEzb46zsk_phtzRE5TGBtf" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    )
};

export default Navigation;
