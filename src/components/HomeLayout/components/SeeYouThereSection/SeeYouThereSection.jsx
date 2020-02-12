import React from 'react';
import { Section } from '../../../Section';

import './SeeYouThereSection.scss';

const SeeYouThereSection = () => {
  return (
    <Section color="black" transitionTop={true} fillScreen={false}>
      <div className="SeeYouThereSection">
        <button className='btn' type='button'>
          <span>Get Tickets</span>
        </button>
      </div>
    </Section>
  );
};

export default SeeYouThereSection;
