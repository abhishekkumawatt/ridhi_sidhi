import React from 'react'
import logo from '../../assets/images/ridhi_sidhi_logo (2).png'
import "../header/Header.css";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const header = () => {
  return (
    <div className='Header' style={{zIndex:'34', position:'fixed', width:'100%'}}>
    <div className='headerwelcome'>
      <div className='headerfirst' style={{paddingTop:'12px'}}>
      <p style={{padding:'8px 0 0 14px',color:'black',fontSize:'18px'}}>Welcome to Ridhi Sidhi</p>
      </div>
      <div className='headerbutton'>
        <Button  variant="outline-dark" style={{height:'35px',width:'100px',margin:'10px',fontSize:'13px'}}>Log In</Button>
        <Button variant="dark" style={{height:'35px',width:'100px',fontSize:'13px'}}>Sign Up</Button>
      </div>
    </div>
    <div className='header1' style={{zIndex:'34', position:'fixed', width:'100%'}}>
      <div className='imglogo'>
        <img src={logo} style={{height:'10vh',width:'21rem', color:'white',paddingTop:'20px'}} alt='' />  
        </div>
        <div className='navbar' style={{color:'white',paddingRight:'35px',paddingTop:'22px',gap:'40px'}}>
        <Nav.Link href="/" >HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/shop">SHOP</Nav.Link>
            <NavDropdown title="SERVICE" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/hardware">Hardware</NavDropdown.Item>
              <NavDropdown.Item href="/electric">
                Electric
              </NavDropdown.Item>
              <NavDropdown.Item href="/sanitary">
                Sanitary
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog">BLOG</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
            </div>
            <div className='headericons'>
            <FaSearch style={{color:'rgb(162, 136, 102)',fontSize:'20px',marginRight:'20px'}}/>
            <FaCartArrowDown style={{color:'rgb(162, 136, 102)',fontSize:'20px'}}/>
            </div>
           
    </div>
  </div>
  )
}

export default header