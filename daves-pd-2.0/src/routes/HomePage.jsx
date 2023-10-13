import React from 'react';
import Intro from '../components/Intro';
import PortfolioGallery from '../components/Portfolio/PortfolioGallery';
import Team from '../components/Team/Team';
import Pledge from '../components/Pledge/Pledge';
import Paints from '../components/Paints/Paints';
import Footer from '../components/ui/Footer';

const HomePage = () => {
  return (
    <>
        <Intro />
        <PortfolioGallery />
        <Team />
        <Pledge />
        <Paints />
        <Footer />
    </>
  )
}

export default HomePage