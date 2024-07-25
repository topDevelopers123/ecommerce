import React from 'react'
import placed from './img/order_placed.gif'
import './Thankyou.css'
import { Link } from 'react-router-dom'

function Thankyou() {
  return (
    <div>
      <section className='thankyou_pg'>
        <div className='container'>
          <div className='thankyou_area'>
            <div className='order_placed_gif'>
              <img src={placed}></img>
            </div>
            <div className='title'>
              <h3>Thank you for shopping with us ..!</h3>
              <p>Your order has been placed successfully !</p>
              <div className="submitBtn w-50 ms-auto me-auto ">
                <Link to="/"><button>Continue Shopping</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Thankyou;
