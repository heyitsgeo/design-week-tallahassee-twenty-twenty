import React from 'react';
import { string, array } from 'prop-types';
import './MonthAgenda.scss';
import DayAgenda from '../DayAgenda';

const MonthAgenda = (props) => {
  const {
    monthName,
    color,
    days
  } = props;

  return (
    <div id={monthName} className={`MonthAgenda MonthAgenda--${color}`}>
      <h1 className="MonthAgenda__month">{monthName}</h1>
      <span className={`MonthAgenda__divider MonthAgenda__divider--${color}`} />
      {
        days.map(day => {
          return (
            <DayAgenda key={day.date} date={day.date} schedule={day.schedule} />
          )
        })
      }
    </div>
  )
}

MonthAgenda.propTypes = {
  monthName: string.isRequired,
  color: string.isRequired,
  days: array
}

export default MonthAgenda;