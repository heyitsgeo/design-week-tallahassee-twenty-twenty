import React from 'react';
import { Section } from '../../../Section';

import './CtaSection.scss';

const CtaSection = () => {
  return (
    <Section fillScreen={false} hideOverflow={false} transitionTop={true}>
      <div className="CtaSection-content">
        <h1>Design Week Tallahassee</h1>
        <div className='overflow-hidden'>
        <div className="CtaSection-action">
          <h4 className="CtaSection-brief">A 5 day event that welcomes creatives of all <span className='underline pink'>creeds</span> and <span className='underline orange'>kinds</span></h4>
          <a className='btn' href="https://www.eventbrite.com/o/aiga-tallahassee-chapter-17086601789" target="_blank">
            <span>Snag Tickets</span>
          </a>
        </div>
        </div>
      </div>
    </Section>
  )
};

export default CtaSection;


