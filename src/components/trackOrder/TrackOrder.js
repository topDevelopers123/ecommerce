import React, { useEffect, useState } from 'react'
import './TrackOrder.css'
import { Link } from 'react-router-dom'
import { useOrderContext } from '../../Context/index.context'
import Trackmodal from './Trackmodal'
import { boolean } from 'yup'
import Invoice from './Invoice'
import { logDOM } from '@testing-library/react'

function TrackOrder() {

    const [invoice, setInvoice] = useState(false)
    const [invoicedata, setInvoicedata] = useState([])
    const { orderDetail, updateOrder } = useOrderContext()
    const [id, setId] = useState("")
    const [cancelOrder, setCancelOrder] = useState({
        payment_status: "",
        status: ""
    })


    const [toggle, setToggle] = useState({
        boolean_val: false,
        data: []
    })
    

    const cancelOrderHandler = (id, payment_status) =>{
        // setCancelOrder({...cancelOrder,payment_status:payment_status})
        const obj = {
            payment_status: payment_status,
            status: "cancelled"
        }
        updateOrder(obj, id)
    
    }
 
    



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

                                <div className='order_table'>
                                    <div className='table-responsive'>
                                        <table class="table">
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
                                                {orderDetail?.UserOrder?.slice().reverse().map((item, i) => (
                                                    <>
                                                        <tr className={`${item?.status === "cancelled" ? "opacity-50" : ""}`}>
                                                            {/* of */}
                                                            <td><img width={100} src={item?.image} style={{ height: "60px", objectFit: "cover" }} className='shadow-sm rounded' alt='product_img' /></td>
                                                            <td>{item?.Product[0]?.title}</td>
                                                            <td>₹ {item?.ProductDetails[0]?.sellingPrice}</td>
                                                            <td>{item.quantity}</td>
                                                            <td className={`${item?.status === "cancelled" ? "text-danger  fw-bold rounded-full " : ""} ${item?.status === "pending" ? "text-warning fw-bold" : ""} ${item?.status === "delivered" ? "text-success fw-bold" : ""}`}>{item.status}</td>
                                                            
                                                            <td className='text-success cursor-pointer'  ><button disabled={item?.status === "cancelled" ? true : false} onClick={() => setToggle({ ...toggle, boolean_val: true, data: item })}>View More</button></td>

                                                        </tr>
                                                        {item?.status === "cancelled" ? "" : <div className='flex w-full my-2 gap-2 justify-between items-center'>
                                                            <button className=' rounded shadow-sm'>Return</button>
                                                            <button className=' rounded shadow-sm' onClick={() => { setInvoice(!invoice); setInvoicedata(item); window.scroll(0, 0) }}>Invoice</button>

                                                            <button className={`${item?.status === "delivered" ? "d-none" : ""} w-100 rounded shadow-sm`} onClick={() => {
                                                                cancelOrderHandler(item?._id, item?.payment_status)
                                                            }}>Order Cancel</button>
                                                            {/* {console.log(item)} */}


                                                        </div>}
                                                        
                                                    </>
                                                ))}

                                            </tbody>
                                        </table>
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
            {invoice ? <Invoice setInvoice={setInvoice} data={invoicedata} /> : null}
        </>
    )
}

export default TrackOrder