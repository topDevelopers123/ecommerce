import React from 'react'

function Services() {
  return (
    <div>
          {/* Services area start  */}
          <section className="shop-services section home">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-6 col-12">
                          <div className="single-service">
                              <i className="bi bi-rocket  "></i>
                              <h4>Free shiping</h4>
                              <p className="m-0">Orders over $100</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12">
                          <div className="single-service">
                            <div className='pulse'></div>
                              <i className="bi bi-arrow-return-right"></i>
                              <h4>Free Return</h4>
                              <p className="m-0">Within 30 days returns</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12">
                          <div className="single-service">
                              <i className="bi bi-lock"></i>
                              <h4>Sucure Payment</h4>
                              <p className="m-0">100% secure payment</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12">
                          <div className="single-service" style={{ borderRight: "none" }}>
                              <i className="bi bi-tags"></i>
                              <h4>Best Price</h4>
                              <p className="m-0">Guaranteed price</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* Services area end  */}
    </div>
  )
}

export default Services
