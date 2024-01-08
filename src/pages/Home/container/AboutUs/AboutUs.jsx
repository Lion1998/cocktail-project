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
        <p className="p__opensans">Our cocktail bar in the heart of Jerusalem is not just a place to drink – it's an experience. Reflecting the spirit of the holy city, our bar is like a magical chest inviting guests to marvel at a world of flavors and captivating aromas.
For many years, we have dedicated ourselves to the art of crafting cocktails. Our bar serves as a meeting point and connection hub, where each cocktail is a unique blend of creativity and perfect tastes.
Our team consists of skilled bartenders who passionately work to bring you the best experience. Each cocktail is prepared with a leap, with love and attention to every small detail.
Our bar offers a relaxed and elegant atmosphere, suitable for both business meetings and enjoyable hours with friends. Here, everyone is invited to discover innovation in the world of cocktails and enjoy an experience that will leave a lingering taste for more. Come and savor our magic in every sip and every ice cube drop.</p>
      </div>

      <div className="app__aboutus-content_Holiday_Cocktails flex__center">
        <img src={images.Holiday_Cocktails} alt="about_Holiday_Cocktails" />
      </div>
    </div>
  </div>
);

export default AboutUs;