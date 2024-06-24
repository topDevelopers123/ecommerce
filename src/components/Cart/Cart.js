import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/index.context'

function Cart() {
    const { cartData } = useCartContext()
    console.log(cartData)
    
    return (

        <div className='container-fluid mt-5 mb-5'>
            <div className='container'>


                <div className='wish-list wish-list-main-box  p-0 w-100 '>
                    <div className=' col-lg-2 text-center '>
                        <h6 className='product_heading'>CART &nbsp;PRODUCT</h6>
                    </div>
                    <div className='wish-text wish-text-1 text-center flex-wrap  col-lg-10 d-flex justify-content-between'>
                        <h6 className='col-lg-2  col-12'>NAME</h6>
                        <h6 className='col-lg-2  col-12'>UNIT PRICE</h6>
                        <h6 className='col-lg-2  col-12'>QUANTITY</h6>
                        <h6 className='col-lg-2  col-12'>TOTAL</h6>
                        <h6 className='col-lg-2  col-12'><i className="bi bi-trash3"></i></h6>

                    </div>
                </div>
                <div className='wish-items wish-items-4  text-center w-100 d-flex align-items-center justify-content-center '>
                    {cartData?.map((item,i)=>(
                        <div className=' col-lg-2 col-md-5 col-sm-5 col-5'>
                            <img src={""} />
                        </div>
                    ))}
                   
                    <div className='wish-text wish-text-2   col-lg-10 col-md-7 col-sm-7 col-7 d-flex justify-content-between align-items-center'>
                        {/* {cartData?.map(())} */}
                        <Link className='col-lg-2 col-md-12 col-sm-12 col-12 '>EYEBOGLER Polo T-shirt For Men</Link>
                        <h6 className='col-lg-2 col-md-12 col-sm-12 col-12 '>₹ 250.00</h6>
                        <div className='col-lg-2 col-md-12 col-sm-12 col-12 d-flex quentity'>

                            <button className='col-lg-4 col-md-4 col-sm-4 col-4  text-dark'>-</button>
                            <div type='text' className='col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-center justify-content-center zero_input'>0</div>
                            <button className='col-lg-4 col-md-4 col-sm-4 col-4  text-dark'>+</button>
                        </div>
                        <h6 className='col-lg-2 col-md-12 col-sm-12 col-12 '>₹ 1000.00</h6>
                        <h6 className='col-lg-2 col-md-12 col-sm-12  col-12'><i className="bi bi-trash3"></i></h6>
                    </div>
                </div>




            </div>

                        <div className='container mt-5'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-wrap'>

                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12 add_to_cart_mini_div'>
                                        <input type='text' placeholder='Enter Your Coupon' />
                                        <button>APPLY</button>
                                    </div>

                                    <div className='col-lg-6 col-md-12 col-sm-12 col-12 cart_subtotal_div d-flex justify-content-end'>
                                        <div className='d-flex flex-column w-75 '>
                                            <div className='d-flex justify-content-between'>
                                                <p>Cart Subtotal</p>
                                                <p>₹0.00</p>
                                            </div>
                                            <hr />
                                            <div className='d-flex justify-content-between'>
                                                <div>You Pay</div>
                                                <div>₹0.00</div>
                                            </div>
                                            <button className='mt-5'>CHECKOUT</button>
                                            <button>CONTINUE SHOPPING</button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                
        </div>

    )
}

export default Cart;
