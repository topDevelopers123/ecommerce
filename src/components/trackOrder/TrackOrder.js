import React, { useState } from 'react'
import './TrackOrder.css'
import { Link } from 'react-router-dom'
import { useOrderContext } from '../../Context/index.context'
import Trackmodal from './Trackmodal'
import Invoice from './Invoice'

function TrackOrder() {
    const { orderDetail } = useOrderContext()
    const [toggle, setToggle] = useState(false)

    const [invoice, setInvoice] = useState(false)
    const [invoiceData,setInvoiceData] = useState([])

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
                                    <div className="col-md-3 col-12"> <strong>Estimated Delivery time:</strong> <br />29 june 2024 </div>
                                    <div className="col-md-3 col-12"> <strong>Shipping BY:</strong> <br /> BLUEDART, | <i className="fa fa-phone"></i> +1598675986 </div>
                                    <div className="col-md-3 col-12"> <strong>Status:</strong> <br /> Picked by the courier </div>
                                    <div className="col-md-3 col-12"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
                                </div>
                            </article>
                            <div className="track">
                                <div className="step active"> <span className="icon"> <i className="bi bi-check2"></i> </span> <span className="text">Order confirmed</span> </div>
                                <div className="step active"> <span className="icon"> <i className="bi bi-person-circle"></i> </span> <span className="text"> Picked by courier</span> </div>
                                <div className="step"> <span className="icon"> <i className="bi bi-truck"></i> </span> <span className="text"> On the way </span> </div>
                                <div className="step"> <span className="icon"> <i className="bi bi-box"></i> </span> <span className="text">Ready for pickup</span> </div>
                            </div>
                            <hr />

                            <div className='order_table'>
                                <div className='table-responsive'>
                                    <table class="table table-secondary table-striped  ">
                                        <thead >
                                            <tr >
                                                <th className='text-white bgprimary' scope="col">Product Image</th>
                                                <th className='text-white bgprimary' scope="col">Product Title</th>
                                                <th className='text-white bgprimary' scope="col">Price</th>
                                                <th className='text-white bgprimary' scope="col">Quantity</th>
                                                <th className='text-white bgprimary' scope="col">Status</th>
                                                <th className='text-white bgprimary' scope="col">More Info.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetail?.UserOrder?.map((item, i) => (
                                                <>
                                                    <tr>

                                                        <td><img width={100} src={item?.image} style={{ height: "60px", objectFit: "cover" }} className='shadow-sm rounded' alt='product_img' /></td>
                                                        <td>{item?.Product[0]?.title.slice(0,15)}...</td>
                                                        <td>{item?.ProductDetails[0]?.sellingPrice}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.status}</td>
                                                        <td className='text-success' onClick={() => setToggle(true)} >View More</td>
                                                    </tr>
                                                    <div className='flex w-full my-2 gap- justify-between items-center'>
                                                        <button>Return</button>
                                                        <button onClick={() => { setInvoice(!invoice); setInvoiceData (item)}}>Invoice</button>
                                                    </div>
                                                </>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>





                            <div className="submitBtn w-50 ms-auto me-auto ">
                                <button>Continue Shopping</button>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            {toggle ? <Trackmodal setToggle={setToggle} /> : null}
            {invoice ? <Invoice setInvoice={setInvoice} data={invoiceData} /> : null}


        </div>
    )
}

export default TrackOrder