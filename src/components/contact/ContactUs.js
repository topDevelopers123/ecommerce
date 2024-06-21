import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
      <div className=" container">
        <div className="contact-div">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="contact-form-div">
                <div className="contact-form">
                  <h6>Get in touch</h6>
                  <h3>
                    Write Us A Message <span> [You Need To Login First]</span>
                  </h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-12 ">
                      <label id="Your Name">
                        Your Name <span>*</span>
                      </label>
                      <br />
                      <input type="text" placeholder="Your Name" />
                      <br />

                      <label id="Your Name">
                        Your Email<span>*</span>
                      </label>
                      <br />
                      <input type="text" placeholder="Your Email" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label id="Your Name">
                        Your Subject<span>*</span>
                      </label>
                      <br />
                      <input type="text" placeholder="Your Subject" />
                      <br />

                      <label id="Your Name">
                        Your Phone<span>*</span>
                      </label>
                      <br />
                      <input type="text" placeholder="Your Phone" />
                    </div>
                  </div>
                  <label>
                    Your Message<span>*</span>
                  </label>
                  <br />
                  <textarea type='text' placeholder='Your Message' />
                  <br />
                  <button>Send Message</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 ">
              <div className="contact-form-div">
                <div className="contact-location">
                  <div className="contact-icon">
                    <i className="bi bi-telephone "></i>
                    <h4>Call us Now :</h4>
                    <Link to="tel:9262852851">9262852851</Link>
                    <br />
                  </div>
                  <div className="contact-icon">
                    <i className="bi bi-envelope-open"></i>
                    <h4>Email</h4>
                    <Link to="mailto:mayavifashion@gmail.com">
                      mayavifashion@gmail.com
                    </Link>
                    <br />
                  </div>
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Our Address :</h4>
                    <ul>
                      <li>355, 3rd Floor, Aggarwal Millennium</li>
                      <li>Tower-1, Netaji Subhas Place, Pitampura.</li>
                      <li>New Delhi - 110 034</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
