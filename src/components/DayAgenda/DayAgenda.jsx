import React from 'react';
import { instanceOf } from 'prop-types';

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

const DayAgenda = ({date, color, schedule}) => {
  const formattedDateString = `${date.getMonth()}/${date.getDate()}`;

  return (
    <div className="DayAgenda">
      {/*<h5 className="DayAgenda-day-of-week">{schedule.day}</h5>*/}
      <h4 className="DayAgenda-date">{formattedDateString}</h4>
      <ul className="DayAgenda-agenda">
        {/*{schedule.agenda && schedule.agenda.map(item => (*/}
        {/*  <li key={item.key} className="DayAgenda-agenda-item">*/}
        {/*    <AgendaItem agendaItem={item} />*/}
        {/*  </li>*/}
        {/*))}*/}
        <li className="DayAgenda-agenda-item">
          <h6 className="AgendaItem">TBA</h6>
        </li>
      </ul>
    </div>
  );
};

export default DayAgenda;

DayAgenda.propTypes = {
  date: instanceOf(Date),
};
