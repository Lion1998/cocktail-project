import React from 'react';

import { images } from '../../../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.a} alt="a_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_Holiday_Cocktails flex__center">
        <img src={images.Holiday_Cocktails} alt="about_Holiday_Cocktails" />
      </div>
    </div>
  </div>
);

export default AboutUs;