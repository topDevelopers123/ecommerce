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
                            <h6>PRODUCT</h6>
                        </div>
                        <div className='wish-text wish-text-1 text-center  col-lg-10 d-flex justify-content-between'>
                            <h6 className='col-lg-2  col-12'>NAME</h6>
                            <h6 className='col-lg-2  col-12'>Size</h6>
                            <h6 className='col-lg-2  col-12'>Colour</h6>
                            <h6 className='col-lg-2  col-12'>TOTAL</h6>
                            <h6 className='col-lg-2  col-12'>ADD TO CART</h6>
                            <h6 className='col-lg-2  col-12'><i class="bi bi-trash3"></i></h6>
                        </div>
                    </div>
                    <div className='wish-items-shadow'>
                        <div className='wish-items text-center w-100 '>
                            <div className=' col-lg-2 col-md-5 col-sm-5 col-5'>
                                <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ815kJ-v7Uks_o0V9j0SHxU-2m79ugH17qIC0az_TCbowEaenkpmcqcMS9jMwI4QnldKcEw5rp7kp9NnTa1AUPa9w8aWT4xj2MrL8tmLI' />
                            </div>
                            <div className='wish-text wish-text-2 col-lg-10 col-md-7 col-sm-7 col-7 d-flex justify-content-between align-items-center'>
                                <Link className='col-lg-2 col-md-12 col-sm-12 '>EYEBOGLER Polo T-shirt For Men</Link>
                                <h6 className='col-lg-2 col-md-12 col-sm-12 '>
                                    M</h6>
                                <h6 className='col-lg-2 col-md-12 col-sm-12 '>
                                    Grey</h6>
                                <h6 className='col-lg-2 col-md-12 col-sm-12 '>&#8377;
                                    199.00</h6>
                                <div className='col-lg-2 col-md-12 col-sm-12 '>
                                    <button >ADD TO CART</button></div>
                                <h6 className='col-lg-2 col-md-12 col-sm-12 '><i class="bi bi-trash3"></i></h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist;
