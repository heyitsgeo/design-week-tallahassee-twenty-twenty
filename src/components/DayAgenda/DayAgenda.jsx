import React from 'react';
import propTypes from 'prop-types';

import './DayAgenda.scss';

const AgendaItem = ({agendaItem}) => {
  const endDate = (agendaItem.end && agendaItem.end.length > 0) && <> <span>&mdash;</span> {agendaItem.end}</>;
  const hasLink = agendaItem.event_link && agendaItem.event_link.trim().length > 0;

  return (
    <div className="AgendaItem">
      <h4 className="AgendaItem-time">{agendaItem.start}{endDate}</h4>
      <h6 className="title">
        {!hasLink && agendaItem.title}
        {hasLink && <a className="event-link" href={agendaItem.event_link} target="_blank" rel="noopener noreferrer">{agendaItem.title}</a> }
      </h6>
      <h6 className="description">{agendaItem.description}</h6>
    </div>
  );
};

const DayAgenda = ({schedule, color}) => {
  return (
    <div className={`DayAgenda ${color}`} id={schedule.day}>
      <h5 className="DayAgenda-day-of-week">{schedule.day}</h5>
      <h1 className="DayAgenda-date">{schedule.date}</h1>
      <ul className="DayAgenda-agenda">
        {schedule.agenda.map(item => (
          <li key={item.key} className="DayAgenda-agenda-item">
            <AgendaItem agendaItem={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayAgenda;

DayAgenda.propTypes = {
  schedule: propTypes.shape({
    day: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    agenda: propTypes.arrayOf(propTypes.shape({
      key: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      start: propTypes.string,
      end: propTypes.string,
      event_link: propTypes.string
    })).isRequired
  }).isRequired,
  color: propTypes.oneOf(['cream', 'black', 'pink', 'blue', 'orange', 'aqua', 'darkPink']).isRequired
};
