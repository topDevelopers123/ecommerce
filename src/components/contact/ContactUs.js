import React from "react";
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
                    <div className="col-md-6">
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

                    <div className="col-md-6">
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
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 ">
              <div className="contact-form-div">
                <div className="contact-location">
                  <div className="contact-icon">
                    <i class="bi bi-telephone "></i>
                    <h4>Call us Now :</h4>
                    <a href="tel:9262852851">9262852851</a>
                    <br />
                  </div>
                  <div className="contact-icon">
                    <i class="bi bi-envelope-open"></i>
                    <h4>Email</h4>
                    <a href="mailto:mayavifashion@gmail.com">
                      mayavifashion@gmail.com
                    </a>
                    <br />
                  </div>
                  <div className="contact-icon">
                    <i class="bi bi-geo-alt"></i>
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
