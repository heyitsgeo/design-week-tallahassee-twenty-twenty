import React from 'react';
import { Section } from '../../../Section';
import fortuneTeller from '../../../../../content/images/see-you-there.gif';

import './SeeYouThereSection.scss';

const SeeYouThereSection = () => {
  return (
    <Section color="alt-black" transitionTop={true} fillScreen={false}>
      <div className="SeeYouThereSection">
          <div className="illustration-container">
            <img src={fortuneTeller} alt="fortune teller ball"/>
          </div>
        <a
          className='btn'
          href="https://www.facebook.com/designweektally/?__tn__=%2Cd%2CP-R&eid=ARAjb_Pt1Dxbn7CUSTIxKe54SGNbMMQ-FRMboMBs5JZdZHMgs4OiSDZWblnEzb46zsk_phtzRE5TGBtf"
          target="_blank"
          rel="noopener noreferrer">
          <span>Watch Live</span>
        </a>
      </div>
    </Section>
  );
};

export default SeeYouThereSection;
