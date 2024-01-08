import React from 'react';

import { SubHeading } from '../../../../components';
import { images } from '../../../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className="findUs__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 pm - 06:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 pm - 06:00 am</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;