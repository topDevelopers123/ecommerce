import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./checkout.css";
import online from "./img/online.png";
import cod from "./img/cod.png";

function Checkout() {
  return (
    <div>
      {/* Checkout section start */}
      <section className="checkout_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="checkout_form">
                <h2>Make Your Checkout Here</h2>
                <div className="form_area">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">First Name *</label>
                          <input
                            type="text"
                            placeholder="Enter First Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Last Name *</label>
                          <input
                            type="text"
                            placeholder="Enter Last Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone Number *</label>
                          <input
                            type="number"
                            placeholder="Enter Phone Number"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="form-group">
                            <label className="form-label">
                              Country<span>*</span>
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value="IN" selected>
                                India
                              </option>
                              <option value="AX">Åland Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            House No., Building Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Enter House No., Building Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Area, Colony</label>
                          <input
                            type="text"
                            placeholder="Enter Area, Colony"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">PIN Code</label>
                          <input
                            type="text"
                            placeholder="Enter PIN Code"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="payment_mode">
                    <section>
                      <h2 className="payment-title">Choose your payment method</h2>
                      <form action="" method="post">
                        <div className="pymt-radio">
                          <div className="row-payment-method payment-row">
                            <div className="select-icon">
                              <input type="radio" id="radio1" name="radios" value="pp" />
                              <label htmlFor="radio1"></label>
                            </div>
                            <div className="select-txt">
                              <p className="pymt-type-name">Online</p>
                              <p className="pymt-type-desc">Safe payment online. All services available : Paytm , Paypal , PhonePe , Razorpay.</p>
                            </div>
                            <div className="select-logo">
                              <img src={online} alt="Online" />
                            </div>
                          </div>
                        </div>
                        <div className="pymt-radio">
                          <div className="row-payment-method payment-row-last">
                            <div className="select-icon hr">
                              <input type="radio" id="radio2" name="radios" value="cc" defaultChecked />
                              <label htmlFor="radio2"></label>
                            </div>
                            <div className="select-txt hr">
                              <p className="pymt-type-name">Cash on Delivery</p>
                              <p className="pymt-type-desc">Make payment after receiving your parcel.</p>
                            </div>
                            <div className="select-logo">
                              <div className="select-logo-sub logo-spacer">
                                <img src={cod} alt="COD" />
                              </div>
                              
                            </div>
                          </div>
                        </div>
                       
                       
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="checkout_total_box">
                <div className="wrapper">
                  <div className="group">
                    <table>
                      <tbody>
                        <tr>
                          <td className="item-img">
                            <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/cf669aef-c9cd-443e-946f-54e1802a79f0/in-season-tr-13-workout-shoes-BDTlPf.png" alt="Men's Casual Shoes" />
                          </td>
                          <td className="item-details">
                            <span className="item-title">Men's Casual Shoes</span>
                            <span className="item-size">Size: UK 7</span>
                            <span className="item-qty">Quantity: 1</span>
                          </td>
                          <td className="item-price">₹899.00</td>
                        </tr>
                        <tr>
                          <td className="item-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwFtmbw7YaM7hDruOLb77JOifKlGAn5NqaA&usqp=CAU" alt="Men's Woolen Jacket" />
                          </td>
                          <td className="item-details">
                            <span className="item-title">Men's Woolen Jacket</span>
                            <span className="item-size">Size: M</span>
                            <span className="item-qty">Quantity: 1</span>
                          </td>
                          <td className="item-price">₹999.00</td>
                        </tr>
                        <tr>
                          <td className="item-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_yBcI2xSyryJ7hTEu0f6m6L5RsQOxBdbKw&usqp=CAU" alt="Men's Casual Trouser" />
                          </td>
                          <td className="item-details">
                            <span className="item-title">Men's Casual Trouser</span>
                            <span className="item-size">Size: M</span>
                            <span className="item-qty">Quantity: 1</span>
                          </td>
                          <td className="item-price">₹1000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="divider"></div>
                  <table>
                    <tbody>
                      <tr>
                        <td className="item-qty">Subtotal</td>
                        <td className="item-price">₹2898.00</td>
                      </tr>
                      <tr>
                        <td className="item-qty">Shipping</td>
                        <td className="item-price">₹102.00</td>
                      </tr>
                      <tr>
                        <td className="item-qty">Total</td>
                        <td className="item-price">₹3000.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="group">
                    <button>Confirm Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Checkout section end */}
    </div>
  );
}

export default Checkout;
