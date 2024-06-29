import React from 'react'
import './footer.css'
import logo from '../header/header_images/footer_logo.png'
import { Link } from 'react-router-dom'

function footer() {
  return (
    <div>
      <div className='container-fluid main_box'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex flex-wrap'>
              <div className='col-lg-4 col-md-12 co-sm-12 p-3'>
                <div className='footer_logo'>
                  <img src={logo}></img>
                </div>
                <p className='text-light mt-2'>Mayavi Fashion redefines what it means to be a fashion brand in the modern world . By chanelling a porton of its profit to support those in need it merges style with substance , proving that fashion can be a force for good. </p>
              </div>
              <div className='col-lg-8 col-md-12 co-sm-12 d-flex footer_li_div  p-4 flex-wrap px-5'>

                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                  <h6>USEFUL LINKS</h6>
                  <ul className="p-0">
                    <Link to="/about"><li className='text-light'>About Us</li></Link>
                    <li className='text-light'>Privacy Policy</li>
                    <li className='text-light'>Terms & Conditions</li>
                    <li className='text-light'>Refunds & Cancellation</li>
                    <li className='text-light'>Contact Us</li>
                    
                  </ul>
                </div>
                
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <h6>SHOP BY CATEGORY</h6>
                  <ul className="p-0">
                    <li className='text-light'>Shirt</li>
                    <li className='text-light'>Jeans</li>
                    <li className='text-light'>Footwear</li>
                    <li className='text-light'>Kid's Clothing</li>
                    <li className='text-light'>Women's Topwear</li>                   
                  </ul>
                </div>
                
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <h6>Get In Touch</h6>
                  <ul className="p-0">
                    <p className='text-light'>355, 3rd Floor, Aggarwal Millennium Tower-1, Netaji Subhas Place, Pitam Pura, New Delhi - 110 034</p>
                    <li className='text-light'>mayavifashion@gmail.com</li>
                    <li className='text-light'>9262852851</li>
                    
                    
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='container conatainer_Line mt-3'></div>

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-lg-8 col-md-12 col-12'>
            <p className='text-light'>Copyright © 2024 | All Rights Reserved | Paras Parivaar Pvt Ltd. New Delhi</p>
          </div>
          <div className='col-lg-4 col-md-12 col-12 d-flex justify-content-end pe-5'>
          <i className="bi bi-facebook mx-3 text-light"></i>
          <i className="bi bi-instagram mx-3 text-light"></i>
          <i className="bi bi-twitter-x mx-3 text-light"></i>
          <i className="bi bi-youtube mx-3 text-light"></i>
          </div>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default footer
