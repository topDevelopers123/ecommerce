import React from 'react'
import './footer.css'

function footer() {
  return (
    <div>
      <div className='container-fluid main_box'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 d-flex flex-wrap'>
              <div className='col-lg-4 col-md-12 co-sm-12 border border-dark p-3'>
                <p className='text-light mt-5'>Mayavi Fashion redefines what it means to be a fashion brand in the modern world . By chanelling a porton of its profit to support those in need it merges style with substance , proving that fashion can be a force for good. </p>
                <p className='text-light'>Got Question? Call us 24/7</p>
                <h5 className='text-light'>9262852851</h5>
              </div>
              <div className='col-lg-8 col-md-12 co-sm-12 border border-dark d-flex footer_li_div  p-4 flex-wrap px-5'>

                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                  <h6>Information</h6>
                  <ul className="p-0">
                    <li className='text-light'>About Us</li>
                    <li className='text-light'>FAQ</li>
                    <li className='text-light'>Terms & Conditions</li>
                    <li className='text-light'>Contact Us</li>
                    <li className='text-light'>Help</li>
                    
                  </ul>
                </div>
                





                <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <h6>Customer Service</h6>
                  <ul className="p-0">
                    <li className='text-light'>Payment Methods</li>
                    <li className='text-light'>Money-back</li>
                    <li className='text-light'>Returns</li>
                    <li className='text-light'>Shipping</li>
                    <li className='text-light'>Privacy Policy</li>
                    
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
