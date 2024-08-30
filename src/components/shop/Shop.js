import React from 'react'
import Header from '../header/Header'
import "../shop/Shop.css";

const Shop = () => {
  return (
    <div className='shopmain'>
        <Header/>
        <br /><br /><br /><br /><br /><br /><br />
        <div className='shopmain1'>
            <b>Shop</b>
            <h6 style={{ margin: '23px 0 0 60pc', fontWeight: '400' }}>Home / </h6>
            <h6 style={{ margin: '23px 145px 0 0px', fontWeight: '400' }}>Shop</h6>
        </div>
        </div>
  )
}

export default Shop