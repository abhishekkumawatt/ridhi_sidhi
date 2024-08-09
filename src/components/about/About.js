import React from 'react'
import Header from '../header/Header'
import "../about/About.css";
import Footer from '../footer/Footer';
import aboutpage1stimg from '../../assets/images/electric_hardware_img.jpg'
import bulb_aboutpage from '../../assets/images/bulb_aboutpage.jpg'

const About = () => {
  return (
    <div className='aboutmain'>
        <Header/>
        <br/><br/><br/><br/><br/><br/><br/>
        <div className='aboutmain1'>
        <b>About</b>
        <h6 style={{margin:'23px 0 0 60pc', fontWeight:'400'}}>Home / </h6>
        <h6 style={{margin:'23px 145px 0 0px', fontWeight:'400'}}>About</h6>
        </div>
        <div className='aboutmain2' style={{display:'flex'}}>
          <div className='onlineshop' style={{padding:'130px 0 160px 185px'}}>
          <h2>Get Know Our Online Shop</h2>
          <h6 style={{fontFamily:'initial',padding:'20px 0 20px 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br/>
           elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.<br/>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Ut elit tellus,
           luctus nec ullamcorper mattis, pulvinar<br/> dapibus leo. </h6>
           <h6 style={{fontFamily:'initial', borderStyle:'solid', borderWidth:'0 0 0 2px', borderColor:'gold', padding:'0 0 0 20px'}}>Pulvinar dapibus leo. Lorem ipsum dolor sit amet,<br/>
             consectetur adipiscing elit. Ut elit tellus, luctus nec <br/>
             ullamcorper mattis, pulvinar dapibus leo.</h6>
             <h6 style={{fontFamily:'initial',padding:'20px 0 20px 0'}}>*Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
             </div>
             <div className='bulbaboutpage'>
             <img src={bulb_aboutpage} style={{borderRadius:'100%', height:'180px',width:'180px', position:'absolute', margin:'210px 0 0 111px'}}></img>
             </div>

             <div className='aboutpage1stimg'>
              <img src={aboutpage1stimg} style={{height:'480px',width:'800px', padding:'100px 0 0 200px'}}></img>
             </div>
        </div>
        <Footer/>
        </div>
  )
}

export default About