import React from 'react';
import CtaSection from './components/CtaSection';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import SeeYouThereSection from './components/SeeYouThereSection';
import SponsorsSection from './components/SponsersSection';
import TempHeroSection from './components/TempHeroSection';
import Popout from '../Popout';

import './HomeLayout.scss';
import LinkButton from '../LinkButton';

export const HomeLayout = () => (
  <div className='HomeLayout'>
    <TempHeroSection />
    <CtaSection />
    <AboutSection />
    <SpeakersSection />
    <SeeYouThereSection />
    <SponsorsSection />
    <Popout className='HomeLayout--donate-and-volunteer'>
        <div className="HomeLayout--donate-and-volunteer--content" style={{marginRight: '2em'}}>
            <h3 style={{marginBottom: '0.5em'}}>We do our best to make this event as accessible as possible.</h3>
            <p style={{marginBottom: '1em'}}>Here's how you can help!</p>
            <div style={{maxWidth: '240px'}}>
                <LinkButton styleClass="secondary">
                    <span>Volunteer</span>
                </LinkButton>
                <h4 style={{textAlign: 'center', marginTop: '0.25em', marginBottom: '0.25em'}}><strong>or</strong></h4>
                <LinkButton styleClass="secondary">
                    <span>Donate</span>
                </LinkButton>
            </div>
        </div>
    </Popout>
  </div>
);
