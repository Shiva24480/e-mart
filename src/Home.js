import React, { useEffect } from 'react';
import BackToTop from './backToTopButton/BackToTop';
import "./Home.css"
import Product from './Product';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
import { useStateValue } from './StateProvider';

function Home() {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  const banner = ["https://github.com/trickjsprogram/amazon-resource/blob/master/BannerImages/Banner1.jpg?raw=true",
    "https://github.com/trickjsprogram/amazon-resource/blob/master/BannerImages/Banner2.jpg?raw=true",
    "https://github.com/trickjsprogram/amazon-resource/blob/master/BannerImages/Banner3.jpg?raw=true",
    "https://github.com/trickjsprogram/amazon-resource/blob/master/BannerImages/Banner4.jpg?raw=true",
  ];

  useEffect(()=>{
    if(!user){
      navigate('/login');
    }
  },[])

  return (
    <div className='home'>
      <div className='home-container'> 
        <Slider slides={banner} className="slider" />
        <div className='home-row'>
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id='2341'
            title='Amazon Brand - Vedaka Premium Pumpkin Seeds, 100 g'
            price={8}
            rating={3}
            image="https://m.media-amazon.com/images/I/51vf819w-4L._AC_SY400_.jpg"
          />
          <Product
            id='2342'
            title='Lava X2 (2+32GB, Striped Blue) | Fingerprint Sensor | Octa Core Mediatek Processor | 6.5" HD+ Display | 8MP Dual AI Camera | 5000 mAh Battery | Type-C Charger'
            price={499}
            rating={4}
            image="https://m.media-amazon.com/images/I/41MM0Fe-lHL._AC_SY400_.jpg"
          />

          <Product
            id='2343'
            title='Vega Junior Buds Open Face Helmet (Yellow, XS)'
            price={199}
            rating={4}
            image="https://m.media-amazon.com/images/I/31ZHc7yI05L._AC_SY400_.jpg"
          />

          <Product
            id='2344'
            title='D-Link DIR-1950 AC 1900 MU-MIMO Daul Band EasyMesh WiFi Router, 5 Gigabit Port, 4 External Antenna, Voice Control Compatible, Profile Based Parental Control, Black'
            price={799}
            rating={5}
            image="https://m.media-amazon.com/images/I/31c6zDmtEnL._AC_SY400_.jpg"
          />

          <Product
            id='2345'
            title='JK Heat Gun 2000W, Dual Temperature, dual speed, JK Super Drive 9005075'
            price={150}
            rating={3}
            image="https://m.media-amazon.com/images/I/41pSNxU4J6L._AC_SY400_.jpg"
          />

          <Product
            id='2346'
            title='Golden Cart 3D Wallpaper Sticker Roll II Linen Textured II 3D Foam Wallpaper for Home Large Size I 3D Wallpaper for Walls, Furniture (Light Beige, 1 Piece of 3 Meter x 0.7 Meter)'
            price={250}
            rating={2}
            image="https://m.media-amazon.com/images/I/612h6HxucoL._AC_SY400_.jpg"
          />

          <Product
            id='2347'
            title='boAt Rockerz 450 Pro Bluetooth Wireless On Ear Headphones with Upto 15 Hours Playback, ASAP Charge, 40MM Drivers, Padded Ear Cushions and Dual Modes with Mic (Aqua Blue)'
            price={550}
            rating={4}
            image="https://m.media-amazon.com/images/I/31r9el8JroL._AC_SY400_.jpg"
          />

          <Product
            id='2348'
            title='Truke Air Buds Bluetooth Truly Wireless in Ear Earbuds with Mic Ai Powered Noise Cancellation(Ai-Enc) , Black'
            price={230}
            rating={3}
            image="https://m.media-amazon.com/images/I/41mLx-vtuZL._AC_SY400_.jpg"
          />

          <Product
            id='2349'
            title='Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women'
            price={50}
            rating={3}
            image="https://m.media-amazon.com/images/I/51k88-c76XL._AC_SY400_.jpg"
          />

          <Product
            id='2350'
            title='Mivi Roam 2 Bluetooth 5W Portable Speaker, Wireless Stereo Speaker with Studio Quality Sound,Waterproof, Bluetooth 5.0 and in-Built Mic with Voice Assistance-Black'
            price={342}
            rating={5}
            image="https://m.media-amazon.com/images/I/512SMIvhtPL._AC_SY400_.jpg"
          />

          <Product
            id='2351'
            title='ORION Choco Pie - Chocolate coated biscuit, Chocolate Gift Pack, 560 g, 20 Coun'
            price={42}
            rating={5}
            image="https://m.media-amazon.com/images/I/51Agnlstv2L._AC_SY400_.jpg"
          />

          <Product
            id='2352'
            title='WeCool Moonwalk M2 ENC Earbuds with 48 Hours Playtime, Rich Music Experience, Ultra Low Latency with Dedicated Gaming Mode, IPX5, Bluetooth 5.3 (Black)
            '
            price={742}
            rating={4}
            image="https://m.media-amazon.com/images/I/41FfW2IUJuL._AC_SY400_.jpg"
          />

          <Product
            id='2353'
            title='Apple iPhone 13 (128GB) - Blue'
            price={999}
            rating={5}
            image="https://m.media-amazon.com/images/I/3150P3KQFlL._AC_SY400_.jpg"
          />

          <Product
            id='2354'
            title='Noise Pulse Buzz 1.69" Bluetooth Calling Smart Watch with Call Function, Spo2 & Heart Rate Monitoring, Calling Smart Watch for Men & Women - Jet Black'
            price={342}
            rating={4}
            image="https://m.media-amazon.com/images/I/41ENaDfUq4L._AC_SY400_.jpg"
          />

          <Product
            id='2354'
            title='Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black)'
            price={1442}
            rating={5}
            image="https://m.media-amazon.com/images/I/318NhXv22oL._AC_SY400_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
      <BackToTop />
    </div>
  )
}

export default Home;
