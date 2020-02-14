import React from 'react';
import { Section } from '../../../Section';
import fortuneTeller from '../../../../images/see-you-there.gif';

import './SeeYouThereSection.scss';

const SeeYouThereSection = () => {
  return (
    <Section color="alt-black" transitionTop={true} fillScreen={false}>
      <div className="SeeYouThereSection">
          <div className="illustration-container">
            <img src={fortuneTeller} alt="fortune teller ball"/>
          </div>
        <a className='btn' href="https://www.eventbrite.com/o/aiga-tallahassee-chapter-17086601789" target="_blank">
          <span>Get Tickets</span>
        </a>
      </div>
    </Section>
  );
};

export default SeeYouThereSection;
