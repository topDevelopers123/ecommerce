import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <div className='container-fluid mt-5 mb-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-12 d-flex'>

					<div className='col-lg-6 col-md-6 col-sm-6 col-6 add_to_cart_mini_div'>
                        <input type='text' placeholder='Enter Your Coupon'/>
                        <button>APPLY</button>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6 col-6 cart_subtotal_div d-flex justify-content-end'>
                        <div className='d-flex flex-column w-75'>
                            <div className='d-flex justify-content-between'>
                                <p>Cart Subtotal</p>
                                <p>0.00₹</p>
                            </div>
                            <hr/>
                            <div className='d-flex justify-content-between'>
                                <div>You Pay</div>
                                <div>0.00₹</div>
                            </div>
                            <button className='mt-5'>CHECKOUT</button>
                            <button>COUNTINUE SHOPPING</button>
                           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
