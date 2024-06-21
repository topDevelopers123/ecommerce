import React from 'react'
import "./Wishlist.css"
import { Link } from 'react-router-dom';


function Wishlist() {
    return (
        <div>

            <div className='container-fluid mt-5 mb-5'>
                <div className='container'>

                    <div className='wish-list p-0 w-100 '>
                        <div className=' col-lg-2 text-center '>
                            <h6>WISHLIST</h6>
                        </div>
                        <div className='wish-text wish-text-1 text-center  col-lg-10 d-flex justify-content-between'>
                            <h6 className='col-lg-2  col-12'>NAME</h6>
                            <h6 className='col-lg-2  col-12'>Size</h6>
                            <h6 className='col-lg-2  col-12'>Colour</h6>
                            <h6 className='col-lg-2  col-12'>TOTAL</h6>
                            <h6 className='col-lg-2  col-12'>ADD TO CART</h6>
                            <h6 className='col-lg-2  col-12'><i className="bi bi-trash3"></i></h6>
                        </div>
                    </div>
                    <div className='wish-items-shadow'>
                        <div className='wish-items text-center w-100 '>
                            <div className=' col-lg-2 col-md-5 col-sm-5 col-6'>
                                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ815kJ-v7Uks_o0V9j0SHxU-2m79ugH17qIC0az_TCbowEaenkpmcqcMS9jMwI4QnldKcEw5rp7kp9NnTa1AUPa9w8aWT4xj2MrL8tmLI' />
                            </div>
                            <div className='wish-text wish-text-3 col-lg-10 col-md-7 col-sm-7 col-6 d-flex justify-content-between align-items-center'>
                                <Link className='col-lg-2 col-md-12 col-sm-12 '>EYEBOGLER Polo T-shirt For Men</Link>
                                <h6 className='col-lg-2 col-md-12 col-sm-6 col-6'>
                                    M</h6>
                                <h6 className='col-lg-2 col-md-12 col-sm-6 col-6 '>
                                    Grey</h6>
                                <h6 className='col-lg-2 col-md-12 col-sm-12 '>&#8377;
                                    199.00</h6>
                                <div className='col-lg-2 col-md-12 col-sm-9 col-9 add_to_cart_delete_box'>
                                    <button >ADD TO CART</button></div>
                                <div className='col-lg-2 col-md-12 col-sm-3 col-3 '><i className="bi bi-trash3"></i></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist;
