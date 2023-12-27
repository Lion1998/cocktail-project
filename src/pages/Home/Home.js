import React from 'react';
import { AboutUs,FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from '../../components';
import './Home.css';
export default function Home() { 
  return(

    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};


