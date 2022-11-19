import React, { useEffect, useState } from 'react';
import NavBar from 'components/navbar';
import './custom.css';
import Navbar from 'components/navbar';
import Zone from 'components/customPageComponent/zone';
import RangeSlider from 'components/customPageComponent/priceRange/index';
import Facilities from 'components/customPageComponent/facilities';
import GoButton from 'components/customPageComponent/GoButton';
import axios from 'utils/axios';
import Swipe3 from 'components/cardSlider/swiper/swiper3';
import SliderComponent3 from 'components/cardSlider/cardSlider/cardSlider3.components';
import NavBarBack from 'components/navbarBack';

const baseURL = 'https://life-at-kmitl-backend-production.up.railway.app/dorm/filter';
const getAllDorm = 'https://life-at-kmitl-backend-production.up.railway.app/dorm/';

const Custom = () => {
  const [dorm, setDorm] = useState([]);
  const temp = {
    monthly: [0, 20000],
    zone: [],
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
  };
  useEffect(() => {
    axios.post('/dorm/filter', temp).then((res) => {
      console.log('res =', res.data);
      setSendData(res.data);
    });
  }, []);

  // Zone
  // const zone: any = [];
  const [zone, setZone]: any = useState([]);
  const pull_zone = (data: any) => {
    if (zone.indexOf(data) !== -1) {
      const index = zone.indexOf(data);
      if (index > -1) {
        zone.splice(index, 1);
      }
    } else {
      zone.push(data);
    }
    console.log(zone);
    setZone(zone);
  };

  // price range
  // const [monthly, setMonthly] = React.useState(0);
  // const pull_range = (data: any) => {
  //   let priceRange = data;
  //   setMonthly(priceRange);
  // };
  let monthly = 0;
  const pull_range = (data: any) => {
    let priceRange = data;
    monthly = priceRange;
    console.log(monthly);
  };
  // console.log(monthly);

  // facilities
  const facilities = [
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
  ];
  const [fac, setFac] = useState(facilities);
  const pull_check = (data: any) => {
    let temp = data;
    for (let i = 0; i < fac.length; i++) {
      if (fac[i].utl == temp) {
        if (fac[i].value == false) {
          fac[i].value = true;
        } else {
          fac[i].value = false;
        }
      }
    }
    console.log(fac);
    setFac(fac);
  };

  const [sendData, setSendData] = useState([]);
  console.log('sendData', sendData);
  async function fetchData() {
    if (zone.length == 0) {
      alert('click at lease one zone');
      return;
    } else {
      const temp = {
        monthly: monthly,
        zone: zone,
        facilities: fac,
      };
      console.log('send =', temp);
      await getDorm(temp);
    }
  }

  async function getDorm(temp: any) {
    const res = await axios.post('/dorm/filter', temp);
    console.log('res =', res.data);
    setSendData(res.data);
    if (res.data.length == 0) {
      alert('There is no dormitory that match your needs. Try changing the facilities or price-range.');
    }
  }

  return (
    <div className='Big-Container'>
      <NavBarBack />
      <div className='custom-container'>
        <Zone func={pull_zone} />
        <RangeSlider func={pull_range} />
        <Facilities func={pull_check} />
        <div onClick={fetchData}>
          <GoButton />
        </div>
      </div>
      <div className='test'>
        <SliderComponent3 testData={sendData} />
      </div>
    </div>
  );
};

export default Custom;
