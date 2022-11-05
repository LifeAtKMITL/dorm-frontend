import React from "react";


import { CardComponent } from "../card/card.component";
import { Swipe } from "../swiper/swiper";

import { logoImg } from "assets";
import './cardSlider.css'


export const SliderComponent = () => {
    return (
      <div className="Slider">
        <div className="header">
            <h4>Zone</h4>
            {/* {Name} */}
        </div>
        <div className="body">
            <ul className="list_link">
              <a href="#" className="link">Soi Hor Mai</a>
              <a href="#" className="link">Kaeke</a>
              <a href="#" className="link">RNP</a>
              <a href="#" className="link">FWB</a>
            </ul>
        </div>
        <Swipe />
      </div>
    );
  };