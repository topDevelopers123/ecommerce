import React from 'react'
import './TrackOrder.css'

function TrackOrder() {


  return (
    <div>
      <section className='tracking_order_pg'>
              <div className="container">
                  <article className="card">
                      <header className="card-header"> My Orders / Tracking </header>
                      <div className="card-body">
                          <h6>Order ID: OD45345345435</h6>
                          <article className="card">
                              <div className="card-body row">
                                  <div className="col-md-3 col-12"> <strong>Estimated Delivery time:</strong> <br/>29 june 2024 </div>
                                  <div className="col-md-3 col-12"> <strong>Shipping BY:</strong> <br/> BLUEDART, | <i className="fa fa-phone"></i> +1598675986 </div>
                                  <div className="col-md-3 col-12"> <strong>Status:</strong> <br/> Picked by the courier </div>
                                  <div className="col-md-3 col-12"> <strong>Tracking #:</strong> <br/> BD045903594059 </div>
                              </div>
                          </article>
                          <div className="track">
                              <div className="step active"> <span className="icon"> <i className="bi bi-check2"></i> </span> <span className="text">Order confirmed</span> </div>
                              <div className="step active"> <span className="icon"> <i className="bi bi-person-circle"></i> </span> <span className="text"> Picked by courier</span> </div>
                              <div className="step"> <span className="icon"> <i className="bi bi-truck"></i> </span> <span className="text"> On the way </span> </div>
                              <div className="step"> <span className="icon"> <i className="bi bi-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                          </div>
                          <hr/>
                             
                          <div className="checkout_total_box w-50 ms-auto me-auto ">
                              <button>Continue Shopping</button>
                          </div>
                              </div>
                          </article>
                      </div>
      </section>
    </div>
  )
}

export default TrackOrder
