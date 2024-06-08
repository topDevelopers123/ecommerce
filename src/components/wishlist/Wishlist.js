import React from 'react'
import "./Wishlist.css"
import { Link } from 'react-router-dom';


function Wishlist() {
    return (
        <div>

            <div className='container'>
                <div className='wish-content'>

                    <div className='wish-list'>
                        <h6>PRODUCT</h6>
                        <h6>NAME</h6>
                        <h6>TOTAL</h6>
                        <h6>ADD TO CART</h6>
                        <h6><i class="bi bi-trash3"></i></h6>
                    </div>

                    <div className='wish-items'>
                        <img src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ815kJ-v7Uks_o0V9j0SHxU-2m79ugH17qIC0az_TCbowEaenkpmcqcMS9jMwI4QnldKcEw5rp7kp9NnTa1AUPa9w8aWT4xj2MrL8tmLI' />
                        <Link >EYEBOGLER Polo T-shirt For Men</Link>
                        <h6>$ 199.00</h6>
                        <button>ADD TO CART</button>
                        <h6><i class="bi bi-trash3"></i></h6>
                    </div>

                    <div className='wish-items'>
                        <img src='https://shrus.com/cdn/shop/files/cbs02150.jpg?v=1712667433&width=3024' />
                        <Link >EYEBOGLER Polo T-shirt For Men</Link>
                        <h6>$ 199.00</h6>
                        <button>ADD TO CART</button>
                        <h6><i class="bi bi-trash3"></i></h6>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Wishlist;
