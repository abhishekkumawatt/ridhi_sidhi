import React from 'react'
import logo from "../../assets/images/ridhi_sidhi_logo (2).png"
import "../footer/Footer.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import QRcode from "../../assets/images/scanner.png";
import { Link } from 'react-router-dom';

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
                <div className='collist1-hover' style={{marginTop:'70px', textDecoration:'none',display:'inline-block'}}>
                <h6 className='text-uppercase fw-bold mb-4' style={{color:'goldenrod'}}>Usefull Links</h6>
                <div className='aboutus-hover'>
                <p>
                    <Link to="About" className='text-reset'>
                        About Us
                    </Link>
                </p></div>
                <div className='blog-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                       Blog
                    </a>
                </p></div>
                <div className='hardware-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Hardware
                    </a>
                </p></div>
                <div className='electric-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Electric
                    </a>
                </p></div>
                <div className='sanitary-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Sanitary
                    </a>
                </p></div>
                <div className='contactus-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Contact us
                    </a>
                </p></div>
                </div>
                <div className='collist2' style={{margin:'70px 0 70px 0'}}>
                <h6 className='text-uppercase fw-bold mb-4' style={{color:'goldenrod'}}>Social Media</h6>
                <div className='facebook-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                       Facebook
                    </a>
                </p></div>
                <div className='twitter-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Twitter
                    </a>
                </p></div>
                <div className='linkedin-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Linkedin
                    </a>
                </p></div>
                <div className='instagram-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Instagram
                    </a>
                </p></div>
                <div className='telegram-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Telegram
                    </a>
                </p></div>
                <div className='pinterest-hover'>
                <p>
                    <a href='#!' className='text-reset'>
                        Pinterest
                    </a>
                </p></div>
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