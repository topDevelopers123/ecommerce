import React, { useEffect, useState } from 'react'
import './TrackOrder.css'
import { Link } from 'react-router-dom'
import { useOrderContext } from '../../Context/index.context'
import Trackmodal from './Trackmodal'

function TrackOrder() {

    const { orderDetail, updateOrder } = useOrderContext()
    const [cancelOrder, setCancelOrder] = useState({
        payment_status: "",
        status: ""
    })

    const [toggle, setToggle] = useState({
        boolean_val: false,
        data: [] 
    })

    return (
        <>
            <div>
                <section className='tracking_order_pg'>
                    <div className="container">
                        <article className="card">
                            <header className="card-header"> My Orders / Tracking </header>
                            <div className="card-body">


                                <article className="card mb-4">
                                    <div className="card-body row">
                                        <div className="col-md-3 col-12"> <strong>Estimated Delivery time:</strong> <br />7 Days </div>
                                        <div className="col-md-3 col-12"> <strong>Shipping BY:</strong> <br /> BLUEDART, | <i className="fa fa-phone"></i> +1598675986 </div>
                                        <div className="col-md-3 col-12"> <strong>Status:</strong> <br /> Picked by the courier </div>
                                        <div className="col-md-3 col-12"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                                    </div>
                                </article>

                                <hr />

                                <div className='orders_sec my-3'>
                                    <div className='container'>

                                        <h4 className='fw-light'> Your Orders  </h4>
                                        {orderDetail?.UserOrder?.slice().reverse().map((item, i) => (
                                            <>
                                                <div className='orders'>
                                                    <div className='flex justify-between py-3 items-center'>
                                                        <div className='flex gap-3'>
                                                            <div className='product_img'>
                                                                <img width={100} src={item?.image} style={{ height: "60px", objectFit: "cover" }} className='shadow-sm rounded' alt='product_img' />
                                                            </div>
                                                            <div className='product_title'>
                                                                {item?.Product[0]?.title}
                                                               <div className=' sm:flex block gap-3 py-2'>
                                                                <div >
                                                                        <button className={`${item?.status === "cancelled" ? "bg-red-400 shadow text-center w-100  text-white rounded-full px-3 py-1 text-sm " : ""} ${item?.status === "pending" ? "bg-orange-400 w-100 shadow text-center  text-white rounded-full px-3 py-1 text-sm" : ""} ${item?.status === "delivered" ? "bg-green-400 w-100 shadow text-center  text-white rounded-full px-3 py-1 text-sm" : ""}`}>
                                                                {item.status}
                                                                        </button>
                                                                </div>
                                                                    <div ><button className='view-product w-100  bg-gray-300 rounded-full px-3 py-1 text-sm text-center' disabled={item?.status === "cancelled" ? true : false} onClick={() => setToggle({ ...toggle, boolean_val: true, data: item })}>
                                                                    View product</button>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div><i className="bi bi-chevron-right"></i></div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>

                                <div className="submitBtn w-50 ms-auto me-auto ">
                                    <Link to="/"> <button>Continue Shopping</button></Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                {toggle?.boolean_val ? <Trackmodal setToggle={setToggle} toggle={{ toggle }} /> : null}
            </div>
        </>
    )
}

export default TrackOrder



