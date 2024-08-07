import React, { useState } from 'react'
import './Trackmodal.css'
import { useOrderContext, useTrackOrderContext } from '../../Context/index.context'
import Invoice from './Invoice'
import ReturnModal from './ReturnModal';

function Trackmodal({ toggle, setToggle }) {
    const [invoice, setInvoice] = useState(false)
    const [invoicedata, setInvoicedata] = useState([])
    const { updateOrder } = useOrderContext()
    const [showReturnModal, setShowReturnModal] = useState(false);
    const { TrackOrderContext } = useTrackOrderContext();
    // console.log(TrackOrderContext?.data)

    const cancelOrderHandler = (id, payment_status) => {
        // setCancelOrder({...cancelOrder,payment_status:payment_status})
        const obj = {
            payment_status: payment_status,
            status: "cancelled"
        }
        updateOrder(id, obj)
    }
    return (
        <>
            <div className=" bg-gray-100 flex items-center justify-center h-screen">
                <div x-data="{ showPrivacyPolicy: true }">
                    <div className="fixed  inset-0  flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        <div className="relative py-5 bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4 h-[550px] overflow-x-hidden overflow-y-scroll p-3">
                            <div className="px-6 flex justify-between  align-items-center ">
                                <h3 className=" leading-6 font-medium text-gray-900 ">Product Details </h3>
                                <button onClick={() => setToggle({ ...toggle, boolean_value: false })}><i className="bi bi-x-circle m-0 p-0 " style={{ fontSize: "30px" }}></i></button>
                            </div>
                            <div className='row '>
                                <div className='col-md-4 d-flex justify-content-center '>
                                    <div className='productImg'>
                                        <img src={toggle?.toggle?.data?.image} alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className='productInfo'>
                                        <form>
                                            <div className='col-md-12 px-2 py-2'>
                                                <span className='fw-bold'>Product Name : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.Product[0]?.title}</span>
                                            </div>
                                            <div className='col-md-12 px-2 py-2'>
                                                <span className='fw-bold'>Product Description : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.Product[0]?.description}</span>
                                            </div>
                                            <hr />
                                            <div className='col-md-12 px-2 py-2'>
                                                <span className='fw-bold'>Price : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.ProductDetails[0]?.sellingPrice}</span>
                                            </div>
                                            <div className='col-md-12 px-2 py-2' >
                                                <span className='fw-bold'>Quantity : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.quantity}</span>
                                            </div>
                                            <div className='col-md-12 px-2 py-2'>
                                                <span className='fw-bold'>Size : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.ProductDetails[0]?.Size}</span>
                                            </div>

                                            <div className='col-md-12 px-2 py-2'>
                                                <span className='fw-bold'>Address : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.UserAddress[0]?.house_no} {toggle?.toggle?.data?.UserAddress[0]?.area} {toggle?.toggle?.data?.UserAddress[0]?.city} {toggle?.toggle?.data?.UserAddress[0]?.state} {toggle?.toggle?.data?.UserAddress[0]?.country} {toggle?.toggle?.data?.UserAddress[0]?.pincode}</span>
                                            </div>

                                            <div className='col-md-12 px-2 py-2'>
                                                <span className='fw-bold'>Phone Number : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.UserAddress[0]?.phone} </span>
                                            </div>

                                            <div className='col-md-12 px-2 py-2'>
                                                <span className='fw-bold'>Alternate Number : </span>
                                                <span htmlFor="title" className="text-gray-400 text-sm  leading-tight tracking-normal">{toggle?.toggle?.data?.UserAddress[0]?.phone2} </span>
                                            </div>
                                        </form>

                                    </div>
                                    {toggle?.toggle?.data?.status === "returned" || toggle?.toggle?.data?.status === "cancelled" ? "" : <div className="track mb-3">
                                        <div className="step active"> <span className="icon"> <i className="bi bi-check2"></i> </span> <span className="text">Order confirmed</span> </div>

                                        <div className={`step ${toggle?.toggle?.data?.status === "pending" || toggle?.toggle?.data?.status === "delivered" ? "active" : ""}`}> <span className="icon"> <i className="bi bi-truck"></i> </span> <span className="text"> On the way </span> </div>
                                        <div className={`step ${toggle?.toggle?.data?.status === "delivered" ? "active" : ""}`}> <span className="icon"> <i className="bi bi-box"></i> </span> <span className="text">Delivered</span> </div>
                                    </div>
                                    }

                                </div>
                                {toggle?.toggle?.data?.status === "cancelled" || toggle?.toggle?.data?.status === "returned" ? "" : <div className='flex w-full mt-5 gap-2 justify-between items-center'>
                                    {toggle?.toggle?.data?.status === "pending" ? "" : <>

                                        <button className='rounded text-sm px-3 py-2 shadow-sm bg-[#4d869c] text-white' onClick={() => setShowReturnModal(true)}>Return</button>

                                        <button className=' rounded text-sm px-3 py-2 shadow-sm bg-[#4d869c] text-white' onClick={() => { setInvoice(!invoice); setInvoicedata(toggle?.toggle?.data); window.scroll(0, 0) }}>Invoice</button>
                                    </>
                                    }
                                    <button className={`${toggle?.toggle?.data?.status === "delivered" ? "d-none" : ""} rounded text-sm px-3 py-2 shadow-sm bg-[#4d869c] text-white`} onClick={() => {
                                        cancelOrderHandler(toggle?.toggle?.data?._id, toggle?.toggle?.data?.payment_status)
                                        setToggle({ ...toggle, boolean_val: false })
                                    }}>Order Cancel</button>
                                    {/* {console.log(item)} */}

                                </div>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {invoice ? <Invoice setInvoice={setInvoice} data={invoicedata} /> : null}
            <ReturnModal show={showReturnModal} setToggle={setToggle} toggle={toggle} data={toggle?.toggle?.data} onClose={() => setShowReturnModal(false)} />

        </>
    )
}
export default Trackmodal

