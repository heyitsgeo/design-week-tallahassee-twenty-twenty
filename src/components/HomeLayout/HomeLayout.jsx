import React from 'react';
import CtaSection from './components/CtaSection';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import SeeYouThereSection from './components/SeeYouThereSection';
import SponsorsSection from './components/SponsersSection';
import TempHeroSection from './components/TempHeroSection';

import './HomeLayout.scss';
import DonateOrVolunteerPopout from '../DonateOrVolunteerPopout';

export const HomeLayout = () => (
  <div className='HomeLayout'>
    <TempHeroSection />
    <CtaSection />
    <AboutSection />
    <SpeakersSection />
    <SeeYouThereSection />
    <SponsorsSection />
    <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
  </div>
);
