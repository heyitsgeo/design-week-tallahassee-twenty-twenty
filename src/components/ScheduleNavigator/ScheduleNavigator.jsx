import React from 'react';
import { Link } from 'gatsby';

import './ScheduleNavigator.scss';

const ScheduleNavigator = () => {
  return (
    <div className="ScheduleNavigator">
      <h4 className="ScheduleNavigator-jump-to-day">Jump to day:</h4>
      <div className="overflow-hidden">
        <ul className="ScheduleNavigator-links">
          <li className="day-link wednesday">
            <Link to="/schedule/#Wednesday">W</Link>
          </li>
          <li className="day-link thursday">
            <Link to="/schedule/#Thursday">TH</Link>
          </li>
          <li className="day-link friday">
            <Link to="/schedule/#Friday">F</Link>
          </li>
          <li className="day-link saturday">
            <Link to="/schedule/#Saturday">SA</Link>
          </li>
          <li className="day-link sunday">
            <Link to="/schedule/#Sunday">SU</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScheduleNavigator;
