import React from 'react';
import CtaSection from './components/CtaSection';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import SeeYouThereSection from './components/SeeYouThereSection';
import SponsorsSection from './components/SponsersSection';
import TempHeroSection from './components/TempHeroSection';

export const HomeLayout = () => (
  <div className='HomeLayout'>
    <TempHeroSection />
    <CtaSection />
    <AboutSection />
    <SpeakersSection />
    <SeeYouThereSection />
    <SponsorsSection />
  </div>
);
