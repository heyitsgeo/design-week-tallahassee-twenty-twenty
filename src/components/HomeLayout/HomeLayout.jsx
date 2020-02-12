import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import CtaSection from './components/CtaSection';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import SeeYouThereSection from './components/SeeYouThereSection';
import SponsorsSection from './components/SponsersSection';

export const HomeLayout = () => (
  <div className='HomeLayout'>
    <HeroSection />
    <CtaSection />
    <AboutSection />
    <SpeakersSection />
    <SeeYouThereSection />
    <SponsorsSection />
  </div>
);
