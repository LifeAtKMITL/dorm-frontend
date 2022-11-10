import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardComponent } from '../card/card.component';
import { Swipe } from '../swiper/swiper';

import { logoImg } from 'assets';
import './cardSlider.css';

const baseURL = 'https://life-at-kmitl-backend-production.up.railway.app/dorm/filter';

export const SliderComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(baseURL, {
        monthly: [0, 100000],
        zone: ['RNP'],
        facilities: [
          {
            utl: 'aircon',
            value: false,
          },
          {
            utl: 'furniture',
            value: false,
          },
          {
            utl: 'waterHeater',
            value: false,
          },
          {
            utl: 'fan',
            value: false,
          },
          {
            utl: 'TV',
            value: false,
          },
          {
            utl: 'fridge',
            value: false,
          },
          {
            utl: 'parking',
            value: false,
          },
          {
            utl: 'freeWifi',
            value: false,
          },
          {
            utl: 'keyCard',
            value: false,
          },
          {
            utl: 'CCTV',
            value: false,
          },
          {
            utl: 'luandry',
            value: false,
          },
        ],
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  function keki() {
    axios
      .post(baseURL, {
        monthly: [0, 100000],
        zone: ['เกกี'],
        facilities: [
          {
            utl: 'aircon',
            value: false,
          },
          {
            utl: 'furniture',
            value: false,
          },
          {
            utl: 'waterHeater',
            value: false,
          },
          {
            utl: 'fan',
            value: false,
          },
          {
            utl: 'TV',
            value: false,
          },
          {
            utl: 'fridge',
            value: false,
          },
          {
            utl: 'parking',
            value: false,
          },
          {
            utl: 'freeWifi',
            value: false,
          },
          {
            utl: 'keyCard',
            value: false,
          },
          {
            utl: 'CCTV',
            value: false,
          },
          {
            utl: 'luandry',
            value: false,
          },
        ],
      })
      .then((res) => {
        setData(res.data);
      });
  }

  function rnp() {
    axios
      .post(baseURL, {
        monthly: [0, 100000],
        zone: ['RNP'],
        facilities: [
          {
            utl: 'aircon',
            value: false,
          },
          {
            utl: 'furniture',
            value: false,
          },
          {
            utl: 'waterHeater',
            value: false,
          },
          {
            utl: 'fan',
            value: false,
          },
          {
            utl: 'TV',
            value: false,
          },
          {
            utl: 'fridge',
            value: false,
          },
          {
            utl: 'parking',
            value: false,
          },
          {
            utl: 'freeWifi',
            value: false,
          },
          {
            utl: 'keyCard',
            value: false,
          },
          {
            utl: 'CCTV',
            value: false,
          },
          {
            utl: 'luandry',
            value: false,
          },
        ],
      })
      .then((res) => {
        setData(res.data);
      });
  }

  function soiHorMai() {
    axios
      .post(baseURL, {
        monthly: [0, 100000],
        zone: ['ซอยหอใหม่'],
        facilities: [
          {
            utl: 'aircon',
            value: false,
          },
          {
            utl: 'furniture',
            value: false,
          },
          {
            utl: 'waterHeater',
            value: false,
          },
          {
            utl: 'fan',
            value: false,
          },
          {
            utl: 'TV',
            value: false,
          },
          {
            utl: 'fridge',
            value: false,
          },
          {
            utl: 'parking',
            value: false,
          },
          {
            utl: 'freeWifi',
            value: false,
          },
          {
            utl: 'keyCard',
            value: false,
          },
          {
            utl: 'CCTV',
            value: false,
          },
          {
            utl: 'luandry',
            value: false,
          },
        ],
      })
      .then((res) => {
        setData(res.data);
      });
  }

  return (
    <div className='Slider'>
      <div className='header'>
        <h4>Zone</h4>
        {/* {Name} */}
      </div>
      <div className='body'>
        <ul className='list_link'>
          <button className='zoneBtn' onClick={rnp}>
            RNP
          </button>
          <button className='zoneBtn' onClick={keki}>
            เกกี
          </button>
          <button className='zoneBtn' onClick={soiHorMai}>
            ซอยหอใหม่
          </button>
        </ul>
      </div>
      <Swipe testData={data} />
    </div>
  );
};
