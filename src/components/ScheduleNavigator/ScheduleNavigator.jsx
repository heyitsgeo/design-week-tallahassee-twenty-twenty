import React from 'react';
import { arrayOf, string, shape } from 'prop-types';
import { Link } from 'gatsby';

import './ScheduleNavigator.scss';

const ScheduleNavigator = (props) => {
  const {
    links
  } = props;

  return (
    <div className="ScheduleNavigator">
      <h4 className="ScheduleNavigator-jump-to-month">Jump to month:</h4>
      <div className="overflow-hidden">
        <ul className="ScheduleNavigator-links">
          {
            links.map(link => {
              return (
                <li key={`${link.monthName}-navigator-link`} className={`month-link ${link.color}`}>
                  <Link to={`/schedule/#${link.monthName}`}>
                    {link.monthName.substring(0, 3).toUpperCase()}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

ScheduleNavigator.propTypes = {
  links: arrayOf(
    shape({
      monthName: string.isRequired,
      color: string.isRequired,
    })
  )
}

export default ScheduleNavigator;
