import React from 'react'
import logo from "../../assets/images/ridhi_sidhi_logo (2).png"
import "../footer/Footer.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import QRcode from "../../assets/images/scanner.png";

const Footer = () => {
    return (
        <div className='footer' style={{marginTop:'0px'}}>
            <div className='footer2' style={{display:'flex'}}>
                <div className='footerimg' style={{margin:'70px 0 20px 20px'}}>
                    <img src={logo} style={{height:'50px',width:'290px',margin:'0 0 20px 0'}}></img>
                    <p style={{fontFamily:'revert'}}>Install Good Quality Materials in your House or<br/> Strengthen the House.</p>
                    <p><FaMapLocationDot style={{margin:'25x'}}/>  87, Jai Karani Nagar, Niwaru Road, Jaipur</p>
                    <p><IoIosCall />  +91 9785098898, 9694490409</p>
                    <p><MdEmail />  ridhisidhi17@gmail.com</p>
                </div>            
                <div className='collist1' style={{marginTop:'70px', textDecoration:'none',display:'inline-block'}}>
                <h6 className='text-uppercase fw-bold mb-4' style={{color:'gold'}}>Usefull Links</h6>
                <p>
                    <a href='#!' className='text-reset'>
                        About Us
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                       Blog
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Hardware
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Electric
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Senitary
                    </a>
                </p><p>
                    <a href='#!' className='text-reset'>
                        Contact us
                    </a>
                </p>
                </div>
                <div className='collist2' style={{margin:'70px 0 70px 0'}}>
                <h6 className='text-uppercase fw-bold mb-4' style={{color:'gold'}}>Social Media</h6>
                <p>
                    <a href='#!' className='text-reset'>
                       Facebook
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Twitter
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Linkedin
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Instagram
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Telegram
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                        Pinterest
                    </a>
                </p>
                </div>
                <div className='qrscanner' >
                    <img src={QRcode} style={{height:'160px',width:'160px',margin:'70px 30px 0 0'}}/>
                </div>
                </div>

            <div className='text-center p-4' style={{ backgroundColor:'antiquewhite' }}>
                © 2024 Copyright:
                <a className='text-reset fw-bold'>
                    RidhiSidhi.com
                </a>
            </div>
        </div>
    )
}

export default Footer