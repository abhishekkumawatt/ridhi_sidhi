import React from 'react'
import Header from '../header/Header'
import "../about/About.css";
import Footer from '../footer/Footer';
import aboutpage1stimg from '../../assets/images/electric_hardware_img.jpg'
import bulb_aboutpage from '../../assets/images/bulb_aboutpage.jpg' 
import about_3img from '../../assets/images/electricforabout.jpg'
import { PiLightbulbFilamentThin } from "react-icons/pi";
import { PiTrophyThin } from "react-icons/pi";
import { PiScrewdriverThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const About = () => {
  return (
    <div className='aboutmain'>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/>
        <div>
        <div className='aboutmain1'>
        <b>About</b>
        <h6 style={{margin:'23px 0 0 60pc', fontWeight:'400'}}>Home / </h6>
        <h6 style={{margin:'23px 145px 0 0px', fontWeight:'400'}}>About</h6>
        </div>
        <div className='aboutmain2' style={{display:'flex'}}>
          <div className='onlineshop' style={{padding:'130px 0 160px 185px'}}>
          <h2>Get Know Our Online Shop</h2>
          <h6 style={{fontFamily:'initial',padding:'20px 0 0px 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br/>
           elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.<br/>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ut elit tellus,
           luctus nec ullamcorper mattis, pulvinar<br/> dapibus leo. </h6>
           <h6 style={{fontFamily:'initial', borderStyle:'solid', borderWidth:'0 0 0 2px', borderColor:'gold', padding:'0 0 0 20px'}}>Pulvinar dapibus leo. Lorem ipsum dolor sit amet,<br/>
             consectetur adipiscing elit. Ut elit tellus, luctus nec <br/>
             ullamcorper mattis, pulvinar dapibus leo.</h6>
             <h6 style={{fontFamily:'initial',padding:'20px 0 0px 0'}}>*Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
             </div>
             <div className='bulbaboutpage'>
             <img src={bulb_aboutpage} style={{borderRadius:'100%', height:'180px',width:'180px', position:'absolute', margin:'210px 0 0 111px'}}></img>
             </div>

             <div className='aboutpage1stimg'>
              <img src={aboutpage1stimg} style={{height:'480px',width:'800px', padding:'100px 0 0 200px'}}></img>
             </div>
        </div>
        <div className='aboutpage2ndimg' style={{backgroundColor:'antiquewhite', display:'flex'}}>
              <img src={about_3img} style={{height:'520px'}}></img>
              <div className='why' style={{padding:'100px 0 0 50px'}}>
              <h2>Why Choose Us</h2>
              <p>Because the quality of our goods is good and the prices are<br/>
               reasonable and our behavior is good, that is why people buy goods <br/>from us.</p>
              <div style={{display:'flex',gap:'120px'}}>
              <PiLightbulbFilamentThin style={{fontSize:'70px',padding:'20px 30px 10px 0'}}/>
              <PiTrophyThin style={{fontSize:'43px',marginTop:'18px'}}/> 
              </div>
              <div style={{display:'flex',gap:'80px'}}>
              <h6>Quality Control</h6> <h6>Original Products</h6>
              </div>
              <div style={{display:'flex',gap:'155px'}}>
              <PiScrewdriverThin style={{fontSize:'40px', margin:'40px 0 0 0'}}/>
              <CiDeliveryTruck style={{fontSize:'45px',marginTop:'40px'}}/>
              </div>
              <div style={{display:'flex', gap:'107px'}}>
                <h6>Free Service</h6> <h6>Fast Delivery</h6>
              </div>
             </div>
             </div>
             <div className='aboutmain3'>
              <h2 style={{textAlign:'center', paddingBottom:'10px'}}>Short information of "Electrical"</h2>
              <div style={{display:'flex'}}>
              <HiOutlineArrowLongRight style={{fontSize:'40px',paddingBottom:'18px',width:'70px'}}/><h6> Electric :- Apart from simplifying our lives at home by inventing electrical
                 appliances, electricity has enabled easy communication through the introduction of telephones and fax machines.Besides,
                  its use is found in many industries and factories to run large machines. Electrical cables are extensively used in building wiring 
                  for lighting, power and control circuits permanently installed in buildings. Since all the circuit conductors required can be
                   installed in a cable at one time, installation labor is saved compared to certain other wiring methods.</h6>
              </div>
             </div>
             <div className='aboutmain3'>
              <h2 style={{textAlign:'center', paddingBottom:'10px'}}>Short information of "Hardware"</h2>
              <div style={{display:'flex'}}>
              <HiOutlineArrowLongRight style={{fontSize:'40px',paddingBottom:'18px',width:'70px'}}/><h6> Electric :- Apart from simplifying our lives at home by inventing electrical
                 appliances, electricity has enabled easy communication through the introduction of telephones and fax machines.Besides,
                  its use is found in many industries and factories to run large machines. Electrical cables are extensively used in building wiring 
                  for lighting, power and control circuits permanently installed in buildings. Since all the circuit conductors required can be
                   installed in a cable at one time, installation labor is saved compared to certain other wiring methods.</h6>
              </div>
             </div>
             <div className='aboutmain3'>
              <h2 style={{textAlign:'center', paddingBottom:'10px'}}>Short information of "Sanitary"</h2>
              <div style={{display:'flex'}}>
              <HiOutlineArrowLongRight style={{fontSize:'40px',paddingBottom:'18px',width:'70px'}}/><h6> Electric :- Apart from simplifying our lives at home by inventing electrical
                 appliances, electricity has enabled easy communication through the introduction of telephones and fax machines.Besides,
                  its use is found in many industries and factories to run large machines. Electrical cables are extensively used in building wiring 
                  for lighting, power and control circuits permanently installed in buildings. Since all the circuit conductors required can be
                   installed in a cable at one time, installation labor is saved compared to certain other wiring methods.</h6>
              </div>
             </div>
        <Footer/>
        </div>
        </div>
  )
}

export default About