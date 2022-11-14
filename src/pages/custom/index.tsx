import React, { useEffect, useState } from 'react';
import NavBar from 'components/navbar';
import './custom.css';
import Navbar from 'components/navbar';
import Zone from 'components/customPageComponent/zone';
import RangeSlider from 'components/customPageComponent/priceRange/index';
import Facilities from 'components/customPageComponent/facilities';
import GoButton from 'components/customPageComponent/GoButton';
import axios from 'axios';
import Swipe3 from 'components/cardSlider/swiper/swiper3';
import SliderComponent3 from 'components/cardSlider/cardSlider/cardSlider3.components';

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
    axios.post(baseURL, temp).then((res) => {
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
    // fetchData();
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
    // fetchData();
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
    // fetchData();
  };

  // dataToSend
  const initialData = [
    {
      _id: '63660db5bd6516697b9cde60',
      rangePrice: [5000, 12000],
      totalScore: [
        {
          userID: 'chawapon',
          score: 3,
        },
        {
          userID: 'chawapon2',
          score: 3,
        },
        {
          userID: 'U0f9557b09f1247e4de2bf3b1cb72679e',
          score: 3,
        },
      ],
      facilities: [
        {
          utl: 'aircon',
          value: true,
        },
        {
          utl: 'furniture',
          value: true,
        },
        {
          utl: 'waterHeater',
          value: true,
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
          value: true,
        },
        {
          utl: 'freeWifi',
          value: true,
        },
        {
          utl: 'keyCard',
          value: true,
        },
        {
          utl: 'CCTV',
          value: true,
        },
        {
          utl: 'luandry',
          value: true,
        },
      ],
      bills: {
        waterBill: 20,
        electricityBill: 8,
      },
      zone: ['RNP'],
      imagePath: [
        'https://bcdn.renthub.in.th/listing_picture/201503/20150301/c3Vxhhgak6SMHT4jTW6Z.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201503/20150301/5Pdv8WNYuYKnMihaRpFE.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201503/20150301/Lxb9jZFQ6UQZJTy4Vd2d.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201503/20150301/NvZHXdKtgueqqB7hUFks.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201503/20150301/nsB4F4KLMiNb1fdEgLeW.jpg?class=doptimized',
      ],
      room: [
        {
          type: 'normal',
          monthly: 5000,
        },
        {
          type: 'suite',
          monthly: 12000,
        },
      ],
      address: 'ซ.ฉลองกรุง 1 ถ.ฉลองกรุง ลาดกระบัง ลาดกระบัง กรุงเทพมหานคร',
      tel: '023264201',
      name: 'RNP Place',
    },
    {
      _id: '63660dd2bd6516697b9cde62',
      rangePrice: [3500, 8000],
      totalScore: [
        {
          userID: 'chawapon',
          score: 2,
        },
        {
          userID: 'chawapon2',
          score: 3,
        },
        {
          userID: 'U0f9557b09f1247e4de2bf3b1cb72679e',
          score: 5,
        },
      ],
      facilities: [
        {
          utl: 'aircon',
          value: true,
        },
        {
          utl: 'furniture',
          value: true,
        },
        {
          utl: 'waterHeater',
          value: false,
        },
        {
          utl: 'fan',
          value: true,
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
          value: true,
        },
        {
          utl: 'keyCard',
          value: true,
        },
        {
          utl: 'CCTV',
          value: false,
        },
        {
          utl: 'luandry',
          value: true,
        },
      ],
      bills: {
        waterBill: 16,
        electricityBill: 7,
      },
      zone: ['RNP'],
      imagePath: [
        'https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.18169-9/206281_152890764774371_6879934_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=109&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_eui2=AeEA0P7eaHUark_FX9f7HM3bRcvhuZdID29Fy-G5l0gPb83Z519qWhHbEaxhERqdO7MHkZmkz7F_fQ840lFBjHyT&_nc_ohc=2pQShtEn_zEAX-FNVbL&_nc_ht=scontent.fbkk5-1.fna&oh=00_AfAYmp7oD2LuSUQBrulS9o4B4nbX2RU5YzLjqCHDv0dcYw&oe=63884341',
        'https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.18169-9/207345_152895438107237_1730175_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_eui2=AeE32g76fRJMDC7YjyherPTMLR8TiomhAAAtHxOKiaEAANYm-G5lhofOl-IdBRZFnioBFyJPBIb6C8OIxsv53960&_nc_ohc=NIlXAHOeGScAX91eaDv&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfD7IrqqYU8EM1yQiPS-0bOnliAjQRn9m6w9S7hi2RmwfQ&oe=6385EF8B',
        'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.18172-8/201592_152895408107240_193149_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=111&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_eui2=AeG1j-p0K-uHn_qusXqnxQ_BnS0pcDm3wTqdLSlwObfBOjSRfrPh5i7V0XB1n_j3fKem0dvb7n2gFBVHROEQ9Zy8&_nc_ohc=Nw25iK-SitoAX9n2Ovs&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfAykiHWOHs8GHUWfmNvECFPu7o4w-AUIet5IAAkqVROeQ&oe=6388789C',
        'https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.18169-9/200666_152895598107221_3393326_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=100&ccb=1-7&_nc_sid=e007fa&efg=eyJpIjoidCJ9&_nc_eui2=AeFKbIfuXm7YtxNJpmFeqXhFTGZHgFOTXJBMZkeAU5NckCDi02Ixf-O1riP0ivqEzFoz_Gqnu9QRzhO7V2bOMnzP&_nc_ohc=mYNLA9KQ_sAAX-1TC02&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfA5c5YJJOrGmV_VUBoBb2iHvzKE8R9n7ai3NiDjU05Zxg&oe=6387172B',
      ],
      room: [
        {
          type: 'normal',
          monthly: 3500,
        },
        {
          type: 'suite',
          monthly: 8000,
        },
      ],
      address:
        '655/1-2 หอพัก กัลยรัตน์แมนชั่น1-2(โครงการ RNP Place) ซอยฉลองกรุง1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520',
      tel: '0816363728',
      name: 'กัลยรัตน์',
    },
    {
      _id: '63660e05bd6516697b9cde64',
      rangePrice: [4500, 7500],
      totalScore: [
        {
          userID: 'U0f9557b09f1247e4de2bf3b1cb72679e',
          score: 1,
        },
      ],
      facilities: [
        {
          utl: 'aircon',
          value: true,
        },
        {
          utl: 'furniture',
          value: true,
        },
        {
          utl: 'waterHeater',
          value: true,
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
          value: true,
        },
        {
          utl: 'freeWifi',
          value: true,
        },
        {
          utl: 'keyCard',
          value: true,
        },
        {
          utl: 'CCTV',
          value: true,
        },
        {
          utl: 'luandry',
          value: true,
        },
      ],
      bills: {
        waterBill: 18,
        electricityBill: 8,
      },
      zone: ['RNP'],
      imagePath: [
        'https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/300807246_595746288911465_1974920925799958513_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeER3kTD7r3VRYcOBq735kzPYnmkawTI7sZieaRrBMjuxnG8s92oBficNDG4vFzIt4vbMs3NA97ogqSgewuIvTeH&_nc_ohc=0JqFr5SLEcMAX-4Fyq6&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfB-M5PGLB1PRsT4FNEllvZxwM6wcvx-WFUV9QdRlVLX2A&oe=63668B2F',
        'https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/60406915_1104850719686308_7529390953392504832_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE8riaM_-pF9RCoe2A7YZnjOeqtRwp8Krk56q1HCnwqudtz8iQplUp-Mz52C66YRZEQOcCkorYBckcqevzA-ZyX&_nc_ohc=MdgAeEDEA9cAX8zm0PF&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfBmvIJfzhu__98jnwtaU3ognoVT6S6fYD_0hdYWC5vSsg&oe=638605F7',
        'https://scontent.fbkk5-6.fna.fbcdn.net/v/t31.18172-8/15843996_644540649050653_3469906724532474865_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGMm96S5M5I5e0AV3Y7_4L6qA8GAZJ-p9yoDwYBkn6n3JKhuLJe7wJ2fQWA4NY6B209lWmc8MdofsW8dV3GxYwY&_nc_ohc=eGvbZ8frOIAAX-PXzmW&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfATc-8buHqn4Fp_0ZcfkCO3hucSx93S8YWa_nxMy53yOA&oe=6386615D',
        'https://scontent.fbkk5-5.fna.fbcdn.net/v/t31.18172-8/15874789_644529025718482_498220896355553154_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFYB9ld0ILfliVxIDuxAHEcZnsIcvu4Yrdmewhy-7hit3IpWBAIZ2W0ecMKdr-VaQU6FgJJLFCeuPEuJxf6C07f&_nc_ohc=YeBUvo0iT9cAX-y02NI&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfDvNLZEql65OH2DozQzouBRWmCGwpSIpzsQTMdEi3UBOQ&oe=63871AEB',
      ],
      room: [
        {
          type: 'normal',
          monthly: 4500,
        },
        {
          type: 'suite',
          monthly: 7500,
        },
      ],
      address: 'ซ.ฉลองกรุง 1 ถ.ฉลองกรุง ลาดกระบัง ลาดกระบัง กรุงเทพมหานคร',
      tel: '0946609072',
      name: 'U-Place',
    },
    {
      _id: '63660f18866793dedd37ee37',
      name: 'P351',
      tel: '0895124088',
      address: '531 ซ.ถาวรพฤกษ์(เกกีงาม3) ถ.ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพ 10520',
      room: [
        {
          type: 'normal',
          monthly: 3500,
        },
        {
          type: 'suite',
          monthly: 4200,
        },
      ],
      imagePath: [],
      zone: ['เกกี'],
      bills: {
        waterBill: 18,
        electricityBill: 7,
      },
      facilities: [
        {
          utl: 'aircon',
          value: true,
        },
        {
          utl: 'furniture',
          value: true,
        },
        {
          utl: 'waterHeater',
          value: false,
        },
        {
          utl: 'fan',
          value: true,
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
          value: true,
        },
        {
          utl: 'keyCard',
          value: true,
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
      totalScore: [],
      rangePrice: [3500, 4200],
    },
    {
      _id: '63660f2b866793dedd37ee39',
      name: 'SSY PLACE',
      tel: '0894788303',
      address: '419 ซ.เกกีงาม ถ.ฉลองกรุง เขตลาดกระบัง กรุงเทพฯ',
      room: [
        {
          type: 'normal',
          monthly: 5000,
        },
        {
          type: 'suite',
          monthly: 6000,
        },
      ],
      imagePath: [
        'https://bcdn.renthub.in.th/listing_picture/201209/20120925/xsTpmfmDxH8f7zsCKcfa.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201209/20120925/7smqFwVQdB2yz1FSjh7M.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201403/20140306/TnfyUPuaenRozwgerZ3N.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201403/20140306/bSwn2zmAkFBDEHbFRGDG.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201403/20140306/nVLsAJjkatzc7dCfH4jU.jpg?class=doptimized',
      ],
      zone: ['เกกี'],
      bills: {
        waterBill: 18,
        electricityBill: 7,
      },
      facilities: [
        {
          utl: 'aircon',
          value: true,
        },
        {
          utl: 'furniture',
          value: true,
        },
        {
          utl: 'waterHeater',
          value: false,
        },
        {
          utl: 'fan',
          value: true,
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
          value: true,
        },
        {
          utl: 'freeWifi',
          value: true,
        },
        {
          utl: 'keyCard',
          value: true,
        },
        {
          utl: 'CCTV',
          value: true,
        },
        {
          utl: 'luandry',
          value: true,
        },
      ],
      totalScore: [],
      rangePrice: [5000, 6000],
    },
    {
      _id: '63660f37866793dedd37ee3b',
      name: 'เอกนำชัย',
      tel: '0831974436',
      address: 'ซอยเกกีงาม 1 ถนนคุณหญิงเหลี่ยม ลาดกระบัง กรุงเทพมหานคร',
      room: [
        {
          type: 'normal',
          monthly: 4200,
        },
      ],
      imagePath: ['https://www.easyhorpak.com/images/ES30434.jpg'],
      zone: ['เกกี'],
      bills: {
        waterBill: 18,
        electricityBill: 7,
      },
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
          value: true,
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
          value: true,
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
      totalScore: [],
      rangePrice: [4200, 999999],
    },
    {
      _id: '63660f46866793dedd37ee3d',
      rangePrice: [5000, 10000],
      totalScore: [
        {
          userID: 'U0f9557b09f1247e4de2bf3b1cb72679e',
          score: 5,
        },
        {
          userID: 'U85f0f0bb42c08c7e4bb03affe901e0cf',
          score: 0,
        },
      ],
      facilities: [
        {
          utl: 'aircon',
          value: true,
        },
        {
          utl: 'furniture',
          value: true,
        },
        {
          utl: 'waterHeater',
          value: true,
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
          value: true,
        },
        {
          utl: 'freeWifi',
          value: true,
        },
        {
          utl: 'keyCard',
          value: true,
        },
        {
          utl: 'CCTV',
          value: true,
        },
        {
          utl: 'luandry',
          value: true,
        },
      ],
      bills: {
        waterBill: 18,
        electricityBill: 8,
      },
      zone: ['ซอยหอใหม่'],
      imagePath: [
        'https://bcdn.renthub.in.th/listing_picture/201804/20180403/8tr7GW6kPwTwi9D2YDwL.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201804/20180403/pdEcHYYP5sQE5B8znVNs.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201804/20180403/ASwKcLPsXDErksu6WMx2.jpg?class=doptimized',
        'https://bcdn.renthub.in.th/listing_picture/201804/20180403/JmNDyh11u3jipn8VFJ83.jpg?class=doptimized',
      ],
      room: [
        {
          type: 'normal',
          monthly: 5000,
        },
        {
          type: 'suite',
          monthly: 10000,
        },
      ],
      address: '675 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520',
      tel: '0628439516',
      name: 'ทูซัน',
    },
    {
      _id: '63660f52866793dedd37ee3f',
      name: 'The HOME',
      tel: '0982621640',
      address: '691 ถนนฉลองกรุง 1 แยก 6 ลาดกระบัง, Bangkok, Thailand, Bangkok',
      room: [
        {
          type: 'normal',
          monthly: 6000,
        },
      ],
      imagePath: [
        'https://scontent.fbkk5-1.fna.fbcdn.net/v/t31.18172-8/11247078_850345155020015_5670321495619262368_o.png?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFei0Zcp2y8jiT-1CXUCgkrFJmM0FfXDCMUmYzQV9cMIy98aDWKiHisLLIH1H5Ojk_4W1fp7ZQLH1N87QAueOX1&_nc_ohc=lYXjSglCF0IAX-tJMXJ&_nc_ht=scontent.fbkk5-1.fna&oh=00_AfDuIR7QLFB_DPsRxug4padefj9eiCWpvca7PfOz2a5-Pw&oe=63874A00',
        'https://scontent.fbkk5-5.fna.fbcdn.net/v/t31.18172-8/11416329_850345105020020_5423625548715782987_o.png?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHfJp0i3JWDcynnsZB8qdcwCDA28sravVwIMDbyytq9XCi2Pf1zgBJTubfb2lzTJfL6RR7r94bCw50-uLMaKyEd&_nc_ohc=x8FKE7THBxAAX_65XV_&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfAwfDGrP4Wii5Bb5g9X-5gW3-TwV0dt0sTl1B8oCZJ2jA&oe=63883079',
        'https://scontent.fbkk5-3.fna.fbcdn.net/v/t31.18172-8/11536415_850343981686799_4682182670692219843_o.png?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFZsA5g39CrwlH5l4W8jkbXzWmvgqpz4wjNaa-CqnPjCMNxoASR_YcCDzovy6rZILYSrJPCsWDhIW1vKWYSLBGF&_nc_ohc=xavD62RNBdIAX8KdEYr&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfBI0oYTuNOO_BoVDGXgsSb7I3epfCwT2wLxpJfLhwMdpA&oe=6388C5B2',
      ],
      zone: ['ซอยหอใหม่'],
      bills: {
        waterBill: 17,
        electricityBill: 6,
      },
      facilities: [
        {
          utl: 'aircon',
          value: true,
        },
        {
          utl: 'furniture',
          value: true,
        },
        {
          utl: 'waterHeater',
          value: true,
        },
        {
          utl: 'fan',
          value: false,
        },
        {
          utl: 'TV',
          value: true,
        },
        {
          utl: 'fridge',
          value: true,
        },
        {
          utl: 'parking',
          value: true,
        },
        {
          utl: 'freeWifi',
          value: true,
        },
        {
          utl: 'keyCard',
          value: true,
        },
        {
          utl: 'CCTV',
          value: true,
        },
        {
          utl: 'luandry',
          value: true,
        },
      ],
      totalScore: [],
      rangePrice: [6000, 999999],
    },
  ];
  const [sendData, setSendData] = useState([]);
  console.log('sendData', sendData);
  function fetchData() {
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
      axios.post(baseURL, temp).then((res) => {
        console.log('res =', res.data);
        setSendData(res.data);
      });
    }
  }

  return (
    <div className='Big-Container'>
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
