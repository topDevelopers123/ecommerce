
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import { useContactUsContext } from "../../Context/index.context";

function ContactUs() {
  const { postContactForm } = useContactUsContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sub: '',
    phone: '',
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      sub: '',
      phone: '',
      text: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postContactForm(formData);
    resetForm();
  };

  return (
    <div>
      <div className="container">
        <div className="contact-div">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="contact-form-div">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h6>Get in touch</h6>
                  <h3>Write Us A Message</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <label htmlFor="name">
                        Full Name <span>*</span>
                      </label>
                      {/* <br /> */}
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {/* <br /> */}

                      <label htmlFor="email">
                         Email Address <span>*</span>
                      </label>
                      {/* <br /> */}
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <label htmlFor="sub">
                        Your Subject <span>*</span>
                      </label>
                      {/* <br /> */}
                      <input
                        type="text"
                        name="sub"
                        placeholder="Write Subject"
                        value={formData.sub}
                        onChange={handleChange}
                        required
                      />
                      {/* <br /> */}

                      <label htmlFor="phone">
                         Phone Number <span>*</span>
                      </label>
                      {/* <br /> */}
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <label htmlFor="text">
                    Your Message <span>*</span>
                  </label>
                  {/* <br /> */}
                  <textarea
                    name="text"
                    placeholder="Write Message"
                    value={formData.text}
                    onChange={handleChange}
                    required
                  />
                  {/* <br /> */}
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-form-div">
                <div className="contact-location">
                  <div className="contact-icon">
                    <i className="bi bi-telephone"></i>
                    <h4>Call us Now :</h4>
                    <Link to="tel:9262852851">+91-99XXXXXXXX</Link>
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
                      <li>BK-1/54, SHALIMAR BAGH,</li>
                      <li>North West Delhi,</li>
                      <li>DL, 110088</li>
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
