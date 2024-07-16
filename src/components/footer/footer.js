import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
import logo from '../header/header_images/footer_logo.png'

function footer() {
  return (
    <div>
      <div className='container-fluid main_box'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex flex-wrap'>
              <div className='col-lg-4 col-md-12 co-sm-12 border border-dark p-3'>
                <Link to="/" className="footer_logo">
                  {/* Mayavi */}
                  <img src={logo}></img>
                </Link>
                <p className='text-light '>Mayavi Fashion redefines what it means to be a fashion brand in the modern world . By chanelling a porton of its profit to support those in need it merges style with substance , proving that fashion can be a force for good. </p>
              </div>
              <div className='col-lg-8 col-md-12 co-sm-12 d-flex footer_li_div  p-4 flex-wrap px-5'>
                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                  <h6>USEFUL LINKS</h6>
                  <ul className="p-0">
                    <Link to="/about"><li className='text-light'>About Us</li></Link>
                    <Link to="/PrivacyPolicy"><li className='text-light'>Privacy Policy</li></Link>
                    <Link to="/TermsAndConditions"><li className='text-light'>Terms & Conditions</li></Link>
                    <Link to="/ReturnCancellation"><li className='text-light'>Refunds & Cancellation</li></Link>
                    <Link to="/contact"><li className='text-light'>Contact Us</li></Link>
                  </ul>
                </div>

                {/* <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                  <h6>SHOP BY CATEGORY</h6>
                  <ul className="p-0">
                    <Link to=""><li className='text-light'>Shirts</li></Link>
                    <Link to=""><li className='text-light'>Shoes</li></Link>
                    <Link to=""><li className='text-light'>Women's Topwear</li></Link>
                    <Link to=""><li className='text-light'>Men's Formal Wear</li></Link>
                    <Link to=""><li className='text-light'>Women's Ethnic Wear</li></Link>
                  </ul>
                </div> */}

                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                  <h6>GET IN TOUCH</h6>
                  <ul className="p-0">
                    <p className='text-light'>BK-1/54, SHALIMAR BAGH , North West Delhi, DL, 110088</p>
                    <Link to="mailto:mayavifashion@gmail.com"><li className='text-light'>mayavifashion@gmail.com</li></Link>
                    <Link to="tel:9999999987"> <li className='text-light'>+91-99XXXXXXXX</li></Link>
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
              <p className='text-light'>Copyright © 2024 | All Rights Reserved | Mayavi Fashion LLP -  New Delhi</p>
            </div>
            <div className='col-lg-4 col-md-12 col-12 d-flex justify-content-end pe-5 socialMediaIcon'>
              <Link target='_blank' to="https://www.facebook.com/paras.guruji/">  <i className="bi bi-facebook mx-3 text-light"></i></Link>
              <Link target='_blank' to="https://www.instagram.com/parasparivaar/">  <i className="bi bi-instagram mx-3 text-light"></i></Link>
              <Link target='_blank' to="https://x.com/paras_parivaar/"><i className="bi bi-twitter-x mx-3 text-light"></i></Link>
              <Link target='_blank' to="https://www.youtube.com/@parasbhaiji">  <i className="bi bi-youtube mx-3 text-light"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
