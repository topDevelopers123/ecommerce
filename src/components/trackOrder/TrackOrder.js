import React, { useState } from 'react'
import './TrackOrder.css'
import { Link } from 'react-router-dom'
import { useOrderContext } from '../../Context/index.context'
import Trackmodal from './Trackmodal'
import { boolean } from 'yup'
import Invoice from './Invoice'

function TrackOrder() {

    const [invoice, setInvoice] = useState(false)
    const [invoicedata, setInvoicedata] = useState([])
    const { orderDetail } = useOrderContext()
    const [toggle,setToggle]= useState({
        boolean_val:false,
        data:[]
    })

    // console.log(orderDetail)

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
                                                {/* of */}
                                                <td><img width={100} src={item?.image} style={{height: "60px", objectFit: "cover"}} className='shadow-sm rounded' alt='product_img' /></td>
                                                <td>{item?.Product[0]?.title}</td>
                                                <td>{item?.ProductDetails[0]?.sellingPrice}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.status}</td>
                                                <td className='text-success' onClick={()=>setToggle({...toggle, boolean_val:true, data:item})} >View More</td>
                                            </tr>
                                             <div className='flex w-full my-2 gap-2 justify-between items-center'>
                                        <button>Return</button>
                                                    <button onClick={() => { setInvoice(!invoice); setInvoicedata(item)}}>Invoice</button>
                                    </div>
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
            {toggle?.boolean_val ? <Trackmodal setToggle={setToggle} toggle={{toggle}}  /> : null}
        </div>
        {invoice? <Invoice setInvoice={setInvoice} data = {invoicedata}  /> : null}
       </>
    )
}

export default TrackOrder