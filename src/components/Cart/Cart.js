import React from 'react'
import './Cart.css'
import {  Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../Context/index.context'

function Cart() {

    const { cartData, addToCartUpdate, deleteCartProduct } = useCartContext()
    const navigate = useNavigate()
    const productDetailsPage = (id) => {
        navigate(`/productdetails/${id}`);
        window.scrollTo(0, 0);
    }

    const checkoutPage = () => {
        navigate(`/OldAddress`);
        window.scrollTo(0, 0);

    }
    const getTotel = cartData?.reduce((i, r) => i + r?.productDetails?.sellingPrice * r?.quantity, 0)

    // let sellingPrice = 0
    // cartData?.map((item)=> sellingPrice += item.productDetails.sellingPrice * item.quantity )

    console.log(cartData);



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
                        <h6 className='col-lg-2  col-12'>DELETE</h6>

                    </div>
                </div>
                <div className='wish-items wish-items-4  text-center w-100 d-flex align-items-center justify-content-center flex-row flex-wrap '>
                    {cartData?.length > 0 ? cartData?.map((item,i)=>(
                        <>

                            <div className=' col-lg-2 col-md-3 col-sm-5 col-5 mt-3' onClick={() => productDetailsPage(item?.product_id?._id)}>


                                <img src={item?.image} />

                            </div>

                            <div className='wish-text wish-text-2 mt-3 col-lg-10 col-md-9 col-sm-7 col-7 d-flex justify-content-between align-items-center '>

                                <h6 className='col-lg-2 col-md-12 col-sm-12 col-12 '>
                                    {item?.product_id?.title.length <= 10
                                        ? item?.product_id?.title
                                        : `${item?.product_id?.title.slice(0, 26)}...`}
                                </h6>

                                <h6 className='col-lg-2 col-md-12 col-sm-12 col-12 ' >₹ {item?.productDetails?.sellingPrice}</h6>
                                <div className='col-lg-2 col-md-12 col-sm-12 col-12 d-flex quentity justify-content-md-center'>


                                    <div type='text' className='col-lg-4 col-md-4 col-sm-4 col-4 d-flex align-items-center justify-content-center zero_input'>
                                        <select defaultValue={item?.quantity} onChange={(event) => {

                                            addToCartUpdate(item?._id, event.target.value);
                                        }}>
                                            <option value={1}>01 qty</option>
                                            <option value={2}>02 qty</option>
                                            <option value={3}>03 qty</option>
                                            <option value={4}>04 qty</option>
                                            <option value={5}>05 qty</option>
                                        </select>
                                    </div>

                                </div>
                                <h6 className='col-lg-2 col-md-12 col-sm-12 col-12 ' >₹ {item?.productDetails?.sellingPrice * item?.quantity}</h6>

                                <h6 className='col-lg-2 col-md-12 col-sm-12  col-12'><i className="bi bi-trash3" onClick={() => deleteCartProduct(item?._id)}></i></h6>
                            </div>
                        </>
                    ))
                : <h4>Cart Empty</h4>}
                   
                    
                </div>




            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-wrap'>

                        <div className='col-lg-6 col-md-12 col-sm-12 col-12 add_to_cart_mini_div'>
                            {/* <input type='text' placeholder='Enter Your Coupon' />
                                        <button>APPLY</button> */}
                        </div>

                        <div className='col-lg-6 col-md-12 col-sm-12 col-12 cart_subtotal_div d-flex justify-content-end'>
                            <div className='d-flex flex-column w-75 '>
                                <div className='d-flex justify-content-between'>
                                    <p>Cart Subtotal</p>
                                    <p>₹ {getTotel}</p>
                                            </div>
                                            <hr />
                                           
                                            <button className='mt-5' onClick={()=>checkoutPage()}>CHECKOUT</button>
                                <button><Link to="/">CONTINUE SHOPPING</Link></button>

                                        </div>
                                    </div>

                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <div>You Pay</div>
                                    <div>₹0.00</div>
                                </div>
                                <button className='mt-5' onClick={() => checkoutPage()}>CHECKOUT</button>
                                <button>CONTINUE SHOPPING</button>

                            </div>
                        </div>

                    </div>
              

    )
}

export default Cart;
