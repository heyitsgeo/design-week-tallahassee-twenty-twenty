import React from 'react';
import { Section } from '../../../Section';

import './CtaSection.scss';

const CtaSection = () => {
  return (
    <Section fillScreen={false} hideOverflow={false} transitionTop={true}>
      <div className="CtaSection-content">
        <h1>Design <span className='strike-through strike-through--orange'>Week</span> Tallahassee</h1>
        <div className='overflow-hidden'>
        <div className="CtaSection-action">
          <p className="CtaSection-brief">Here's how it will work: Instead of a single week of back-to-back sessions, DWT will now become a weekly online series. Each Friday from August 21st through December 18th we will host one or two speakers for fun virtual event over Facebook Live. All streams will be hosted on the main Design Week Facebook page for <span className="text--orange">free</span>.</p>
          {/*<a*/}
          {/*  className='btn'*/}
          {/*  href="https://www.eventbrite.com/o/aiga-tallahassee-chapter-17086601789"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer">*/}
          {/*  <span>Snag Tickets</span>*/}
          {/*</a>*/}
        </div>
        </div>
      </div>
    </Section>
  )
};

export default CtaSection;


