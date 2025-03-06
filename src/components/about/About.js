// import React from 'react'
// import Header from '../header/Header'
// import "../about/About.css";
// import Footer from '../footer/Footer';
// import aboutpage1stimg from '../../assets/images/electric_hardware_img.jpg'
// import bulb_aboutpage from '../../assets/images/bulb_aboutpage.jpg'
// import about_3img from '../../assets/images/electricforabout.jpg'
// import { PiLightbulbFilamentThin } from "react-icons/pi";
// import { PiTrophyThin } from "react-icons/pi";
// import { PiScrewdriverThin } from "react-icons/pi";
// import { CiDeliveryTruck } from "react-icons/ci";
// import Slider from "react-slick";
// import Button from 'react-bootstrap/Button';
// import { FaArrowRight } from "react-icons/fa6";
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import { Link } from 'react-router-dom';

// const About = () => {
//   var settings = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className='aboutmain'>
//       <Header />
//       <br /><br /><br /><br /><br /><br /><br />
//       <div>
//         <div className='aboutmain1'>
//           <b>About</b>
//           <h6 style={{ margin: '23px 0 0 60pc', fontWeight: '400' }}>Home / </h6>
//           <h6 style={{ margin: '23px 145px 0 0px', fontWeight: '400' }}>About</h6>
//         </div>
//         <div className='aboutmain2' style={{ display: 'flex' }}>
//           <div className='onlineshop' style={{ padding: '130px 0 160px 185px' }}>
//             <h2>Get Know Our Online Shop</h2>
//             <h6 style={{ fontFamily: 'initial', padding: '20px 0 0px 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />
//               elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.<br />
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Ut elit tellus,
//               luctus nec ullamcorper mattis, pulvinar<br /> dapibus leo. </h6>
//             <h6 style={{ fontFamily: 'initial', borderStyle: 'solid', borderWidth: '0 0 0 2px', borderColor: 'gold', padding: '0 0 0 20px' }}>Pulvinar dapibus leo. Lorem ipsum dolor sit amet,<br />
//               consectetur adipiscing elit. Ut elit tellus, luctus nec <br />
//               ullamcorper mattis, pulvinar dapibus leo.</h6>
//             <h6 style={{ fontFamily: 'initial', padding: '20px 0 0px 0' }}>*Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
//           </div>
//           <div className='bulbaboutpage'>
//             <img src={bulb_aboutpage} style={{ borderRadius: '100%', height: '170px', width: '180px', position: 'absolute', margin: '210px 0 0 111px' }}></img>
//           </div>

//           <div className='aboutpage1stimg'>
//             <img src={aboutpage1stimg} style={{ height: '480px', width: '800px', padding: '100px 0 0 200px' }}></img>
//           </div>
//         </div>
//         <div className='aboutpage2ndimg' style={{ backgroundColor: 'antiquewhite', display: 'flex' }}>
//           <img src={about_3img} style={{ height: '520px' }}></img>
//           <div className='why' style={{ padding: '100px 0 0 50px' }}>
//             <h2>Why Choose Us</h2>
//             <p>Because the quality of our goods is good and the prices are<br />
//               reasonable and our behavior is good, that is why people buy goods <br />from us.</p>
//             <div style={{ display: 'flex', gap: '120px' }}>
//               <PiLightbulbFilamentThin style={{ fontSize: '70px', padding: '20px 30px 10px 0' }} />
//               <PiTrophyThin style={{ fontSize: '43px', marginTop: '18px' }} />
//             </div>
//             <div style={{ display: 'flex', gap: '80px' }}>
//               <h6>Quality Control</h6> <h6>Original Products</h6>
//             </div>
//             <div style={{ display: 'flex', gap: '155px' }}>
//               <PiScrewdriverThin style={{ fontSize: '40px', margin: '40px 0 0 0' }} />
//               <CiDeliveryTruck style={{ fontSize: '45px', marginTop: '40px' }} />
//             </div>
//             <div style={{ display: 'flex', gap: '107px' }}>
//               <h6>Free Service</h6> <h6>Fast Delivery</h6>
//             </div>
//           </div>
//         </div>
//         <div className='aboutmain3' style={{ display: 'flex' }}>
//           <div className='.' style={{margin:'90px 80px 90px 190px'}}>
//             <h3>Electrical Store</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//               <Link to ="/">
//             <Button variant="warning" style={{ height: '40px', width: '130px', fontSize: '14px', marginTop: '20px' }}><b>Shop Now </b><FaArrowRight /></Button></Link>
//           </div>
//           <div className='aboutmain4'> <div style={{display:'flex', gap:'440px'}}><h6  style={{color:'gold',paddingTop:'90px'}}>Stock of Products </h6><h6 style={{color:'gold',paddingTop:'90px'}}>90%</h6></div>
//               <ProgressBar variant="black" now={90} style={{height:'4px', width:'600px', margin:'0px 135px 20px 0px'}}/><div style={{display:'flex', gap:'460px'}}><h6 style={{color:'gold'}}>Packing Safety</h6><h6 style={{color:'gold'}}>98%</h6></div>
//               <ProgressBar variant="black" now={98}  style={{height:'4px', width:'600px', margin:'0px 80px 20px 0px'}}/><div style={{display:'flex', gap:'449px'}}><h6 style={{color:'gold'}}>Sale of Products </h6><h6 style={{color:'gold'}}>85%</h6></div>
//               <ProgressBar variant="black" now={85}  style={{height:'4px', width:'600px', margin:'0px 80px 20px 0px'}}/><div style={{display:'flex', gap:'485px'}}><h6 style={{color:'gold'}}>Five Rating </h6><h6 style={{color:'gold'}}>75%</h6></div>
//               <ProgressBar variant="black" now={75}  style={{height:'4px', width:'600px', margin:'0px 80px 20px 0px'}}/>
//           </div>
//         </div>
//         <div className='textslider'>
//           <div className="slider-container" style={{ backgroundColor: 'antiquewhite' }}>
//             <Slider {...settings}>
//               <div>
//                 <h6 style={{ textAlign: 'center', margin: '80px 195px 80px 195px', fontFamily: "-moz-initial" }}>A Hardware store business
//                   sells tools, building materials, and home improvement products to consumers and contractors. It caters to DIY enthusiasts
//                   and professionals by providing essential items like nails, screws, paint, plumbing supplies, and electrical equipment.Electric Blowers,
//                   Corded Impact Drills,Door closer , Hammer, Hinges, nails etc. Local hardware stores provide personalized service.
//                   The employees at these stores are often knowledgeable about the products they sell and can provide expert advice for your
//                   home improvement projects. They can also help you find the right tools and materials for the job, saving you time and money
//                   in the long run.<br />    <br /><b>Ridhi Sidhi Hardware</b><br /> Hardware</h6>
//               </div>
//               <div>
//                 <h6 style={{ textAlign: 'center', margin: '80px 195px 80px 195px', fontFamily: "-moz-initial" }}>An electrical shop sells
//                   various electrical supplies and devices such as cable channels, electrical sockets, fuse boxes, junction boxes, etc. If
//                   you are looking for a particular item, it is advisable to call or visit them. Electricity is both a basic part of nature
//                   and one of the most widely used forms of energy. The electricity that we use is a secondary energy source because it is
//                   produced by converting primary sources of energy such as coal, natural gas, nuclear energy, solar energy, and wind energy
//                   into electrical power. A shop focused on selling different electrical supplies (cable, cable channels, electric sockets etc)
//                   and electrical devices (electric meters, junction boxes, fuse boxes etc).<br />    <br /><b>Ridhi Sidhi Hardware</b> <br />Electric</h6>
//               </div>
//               <div>
//                 <h6 style={{ textAlign: 'center', margin: '80px 195px 80px 195px', fontFamily: "-moz-initial" }}>Sanitary Ware is the modern
//                   lifestyle that promises a great option of toilets, urinals, Basins, toilet seats, and much more for utmost comfort and
//                   convenience. The high range of Sanitary ware comes with cutting-edge designs that are suited to all sectors and budgets.
//                   The various fixtures and fittings used in bathrooms and kitchens for hygiene purposes, including toilets, sinks, basins,
//                   bidets, and bathtubs.  Any product in your bathroom that is plumbed in, whether that be a shower, sink, bidet or toilet. <br />    <br /><b>
//                     Ridhi Sidhi Hardware </b><br />Sanitary</h6>
//               </div>
//             </Slider>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default About


import React from 'react';
import Header from '../header/Header';
import '../about/About.css';  // External CSS for responsive design
import Footer from '../footer/Footer';
import aboutpage1stimg from '../../assets/images/electric_hardware_img.jpg';
import bulb_aboutpage from '../../assets/images/bulb_aboutpage.jpg';
import about_3img from '../../assets/images/electricforabout.jpg';
import { PiLightbulbFilamentThin, PiTrophyThin, PiScrewdriverThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa6";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';

const About = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className='about-main'>
      <Header />
      <div className="about-header">
        <b>About</b>
        <h6>Home / About</h6>
      </div>

      {/* About Section */}
      <div className='about-container'>
        <div className='about-content'>
          <h2>Get to Know Our Online Shop</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
             pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.</p>
          <p className="highlight-text">Pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <p>*Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='about-images'>
          <img src={bulb_aboutpage} alt="Bulb" className="bulb-image" />
          <img src={aboutpage1stimg} alt="About" className="main-image" />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='why-choose-us'>
        <img src={about_3img} alt="Why Choose Us" className="why-image" />
        <div className='why-content'>
          <h2>Why Choose Us</h2>
          <p>Because the quality of our goods is good and the prices are reasonable...</p>
          <div className="why-icons">
            <div className="icon-box"><PiLightbulbFilamentThin className="icon" /><h6>Quality Control</h6></div>
            <div className="icon-box"><PiTrophyThin className="icon" /><h6>Original Products</h6></div>
            <div className="icon-box"><PiScrewdriverThin className="icon" /><h6>Free Service</h6></div>
            <div className="icon-box"><CiDeliveryTruck className="icon" /><h6>Fast Delivery</h6></div>
          </div>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className='progress-section'>
        <div className='progress-text'>
          <h3>Electrical Store</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <Link to="/">
            <Button variant="warning"><b>Shop Now</b> <FaArrowRight /></Button>
          </Link>
        </div>
        <div className='progress-bars'>
          <div className='progress-item'><h6>Stock of Products - 90%</h6><ProgressBar now={90} /></div>
          <div className='progress-item'><h6>Packing Safety - 98%</h6><ProgressBar now={98} /></div>
          <div className='progress-item'><h6>Sale of Products - 85%</h6><ProgressBar now={85} /></div>
          <div className='progress-item'><h6>Five Star Rating - 75%</h6><ProgressBar now={75} /></div>
        </div>
      </div>

      {/* Slider Section */}
      <div className='slider-container'>
        <Slider {...settings}>
          <div className="slider-item"><h6>Hardware store business sells tools...</h6><b>Ridhi Sidhi Hardware</b></div>
          <div className="slider-item"><h6>An electrical shop sells various electrical supplies...</h6><b>Ridhi Sidhi Hardware</b></div>
          <div className="slider-item"><h6>Sanitary Ware is the modern lifestyle...</h6><b>Ridhi Sidhi Hardware</b></div>
        </Slider>
      </div>

      <Footer />
    </div>
  );
}

export default About;
