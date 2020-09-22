import React from 'react';
import proptypes from 'prop-types';
import eventStyles from './event.module.css';
import { DateTime } from 'luxon';

export const Event = (props) => {
  const {
    date,
    name,
    location,
    description,
    eventUrl,
  } = props;

  const dateTimeFromISO = DateTime.fromISO(date);

  const day = dateTimeFromISO.day.toLocaleString();
  const month = dateTimeFromISO.monthShort.toLocaleString();
  const time = dateTimeFromISO.toFormat('h:mm a').toLocaleString();

  return (
    <div className={eventStyles.container}>
      <div className={eventStyles.dateContainer}>
        <h6 className={eventStyles.month}>{month}</h6>
        <h6 className={eventStyles.day}>{day}</h6>
      </div>
      <div className={eventStyles.detailsContainer}>
        <h4 className={eventStyles.name}>
          <a href={eventUrl} target="_blank" rel="noopener noreferrer">{name}</a>
        </h4>
        <h6 className={eventStyles.timeAndLocation}>{location} - {time}</h6>
        { description && (
          <p className={eventStyles.description} dangerouslySetInnerHTML={{ __html: description }} />)
        }
      </div>
    </div>
  )
}

Event.propTypes = {
  date: proptypes.string.isRequired,
  name: proptypes.string.isRequired,
  location: proptypes.string.isRequired,
  eventUrl: proptypes.string.isRequired,
  description: proptypes.string,
}