import React, { useState } from 'react';
import './Trackmodal.css';
import { useOrderContext } from '../../Context/index.context';
import Invoice from './Invoice';
import ReturnModal from './ReturnModal';

function Trackmodal({ toggle, setToggle }) {
    const [invoice, setInvoice] = useState(false);
    const [invoicedata, setInvoicedata] = useState([]);
    const { updateOrder } = useOrderContext();
    const [showReturnModal, setShowReturnModal] = useState(false);

    const cancelOrderHandler = (id, payment_status) => {
        const obj = {
            payment_status: payment_status,
            status: "cancelled"
        };
        updateOrder(obj, id);
    };

    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div x-data="{ showPrivacyPolicy: true }">
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        <div className="relative py-5 bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4 h-[550px] max-w-full overflow-x-hidden overflow-y-scroll p-3">
                            <div className="px-6 flex justify-between align-items-center">
                                <h3 className="leading-6 font-medium text-gray-900">Product Details</h3>
                                <button onClick={() => setToggle({ ...toggle, boolean_value: false })}>
                                    <i className="bi bi-x-circle m-0 p-0" style={{ fontSize: "30px" }}></i>
                                </button>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 d-flex justify-content-center'>
                                    <div className='productImg'>
                                        <img src={toggle?.toggle?.data?.image} alt='img' />
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <div className='productInfo'>
                                        <form>
                                            {/* Product details go here */}
                                        </form>
                                    </div>
                                    <div className="track mb-3">
                                        <div className="step active">
                                            <span className="icon"><i className="bi bi-check2"></i></span>
                                            <span className="text">Order confirmed</span>
                                        </div>
                                        <div className={`step ${toggle?.toggle?.data?.status === "pending" || toggle?.toggle?.data?.status === "delivered" ? "active" : ""}`}>
                                            <span className="icon"><i className="bi bi-truck"></i></span>
                                            <span className="text">On the way</span>
                                        </div>
                                        <div className={`step ${toggle?.toggle?.data?.status === "delivered" ? "active" : ""}`}>
                                            <span className="icon"><i className="bi bi-box"></i></span>
                                            <span className="text">Delivered</span>
                                        </div>
                                    </div>
                                </div>
                                {toggle?.toggle?.data?.status === "cancelled" ? "" :
                                    <div className='flex w-full mt-5 gap-2 justify-between items-center'>
                                        {toggle?.toggle?.data?.status === "pending" ? "" :
                                            <>
                                                <button className='rounded shadow-sm bg-[#4d869c] text-white' onClick={() => setShowReturnModal(true)}>Return</button>

                                                <button className='rounded shadow-sm bg-[#4d869c] text-white' onClick={() => { setInvoice(!invoice); setInvoicedata(toggle?.toggle?.data); window.scroll(0, 0); }}>Invoice</button>
                                            </>
                                        }
                                        <button className={`${toggle?.toggle?.data?.status === "delivered" ? "d-none" : ""} rounded shadow-sm bg-[#4d869c] text-white`} onClick={() => {
                                            cancelOrderHandler(toggle?.toggle?.data?._id, toggle?.toggle?.data?.payment_status);
                                        }}>Order Cancel</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {invoice ? <Invoice setInvoice={setInvoice} data={invoicedata} /> : null}
            <ReturnModal show={showReturnModal} onClose={() => setShowReturnModal(false)} />
        </>
    );
}

export default Trackmodal;



