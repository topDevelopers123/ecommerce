import React from 'react';
import jsPDF from 'jspdf';

const Invoice = ({ setInvoice, data }) => {

    const printDocument = () => {
        var doc = new jsPDF("p", "pt", "a4")
        doc.html(document.getElementById("invoice"), {
            callback: function (pdf) {
                pdf.save("Invoice.pdf")
            }
        })
    };

    const dateStr = data?.createdAt?.split("T")[0].split("-")

    return (
        <div className='bg-gray-500 py-24 absolute h-[260vh]  w-full top-0 left-0'>
            <h1 className='absolute top-30 right-10 cursor-pointer' onClick={() => setInvoice(false)}>
                <i className="bi bi-x-lg text-white"></i>
            </h1>
            <div className='text-center'>
                <button className='text-white btn bg-[#4d869c] ' onClick={printDocument}>Download</button></div>
            <div className=" w-[595px] h-[842px] mx-auto bg-white p-6 rounded-lg shadow-lg" id="invoice">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                        <img src="./image/invoice.png" alt="Logo" className="h-14 mr-4" />
                    </div>
                </div>

                <div className='mb-1 text-center'>
                    <p><strong>Invoice Number: </strong> {data?.razorpay_order_id}</p>
                    <p>Date: {`${dateStr[2]}/${dateStr[1]}/${dateStr[0]}`}</p>
                </div>
                <div className='h-1 bg-[#4d869c] mb-1'></div>

                <div className="flex justify-between mb-1 py-1">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Bill From</h3>
                        <p className=" font-medium text-black">Mayavi Fashion</p>
                        <p className=" font-medium text-black">BK-1/54, SHALIMAR BAGH , North West Delhi, DL, 110088</p>
                        <p className=" font-medium text-black">mayavifashion@gmail.com</p>
                        <p className=" font-medium text-black">8029697597</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Bill to</h3>
                        <p className="text-gray-600">{data.UserAddress[0].fullname}</p>
                        <p className="text-gray-600">{data.UserAddress[0].house_no}, {data.UserAddress[0].area}, {data.UserAddress[0].city}, {data.UserAddress[0].country}</p>
                        <p className="text-gray-600">shepard@mail.com</p>
                        <p className="text-gray-600">{data.UserAddress[0].phone}</p>
                    </div>
                </div>
                <div className='table-responsive mb-2'>
                    <table className="w-full border-collapse ">
                        <thead className="">
                            <tr className='border-y-2' >
                                <th className="pt-1 pb-4 px-4">Item</th>
                                <th className="pt-1 pb-4 px-4">Quantity</th>
                                <th className="pt-1 pb-4 px-4">CGST</th>
                                <th className="pt-1 pb-4 px-4">SGST</th>
                                <th className="pt-1 pb-4 px-4">IGST</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-1  font-medium px-4">{data.Product[0].title}</td>
                                <td className="py-1 px-2">{data.quantity}</td>
                                {data?.UserAddress[0]?.state.toLowerCase() === "delhi" ?
                                    <>
                                        <td className="py-1 px-2">9%</td>
                                        <td className="py-1 px-2">9%</td>
                                        <td className="py-1 px-2">0%</td>
                                    </>
                                    :
                                    <>
                                        <td className="py-1 px-2">0%</td>
                                        <td className="py-1 px-2">0%</td>
                                        <td className="py-1 px-2">18%</td>
                                    </>
                                }
                                {/* <td className="py-1 px-4">{data.ProductDetails[0].MRP}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='h-1 bg-[#4d869c] mb-1'></div>

                <div className="flex justify-between mb-4 mt-3 ">
                    <div>
                        <p className="text-md font-bold text-gray-500"> Payment Mode : {data?.payment_type} </p>
                        <p className="text-md font-bold text-gray-500"> GST No :  </p>
                        <p className="text-md font-bold text-gray-500"> PAN NO :  </p>
                        {/* Add any terms and conditions here */}
                    </div>
                    <div className='w-60 h-10'>
                        <div className="flex justify-between  ">
                            <p className=" text-gray-600 font-bold">Subtotal:</p>
                            <p className="text-gray-600 font-medium">&#8377; {data.ProductDetails[0].sellingPrice - (((data.ProductDetails[0].sellingPrice) / 100) * 18).toFixed()}</p>
                        </div>
                        <div className="flex justify-between ">
                            <p className="text-gray-600 font-bold">GST (18%):</p>
                            <p className="text-gray-600 font-medium">&#8377; {(((data.ProductDetails[0].sellingPrice) / 100) * 18).toFixed()}</p>
                        </div>
                        <div className="flex justify-between ">
                            <p className="text-gray-600 font-bold">Shipping:</p>
                            {data?.UserAddress[0]?.state.toLowerCase() === "delhi" ?
                                <p className="text-gray-600 font-medium">&#8377; {data?.Product[0]?.zonal_charges}</p>
                                : <p className="text-gray-600 font-medium">&#8377; {data?.Product[0]?.national_charges}</p>}
                        </div>
                        <div className="flex justify-between border-y-2 items-center border-black">
                            <p className="text-black font-bold">Paid:</p>
                            <p className="text-black font-medium">&#8377; {data?.UserAddress[0]?.state.toLowerCase() === "delhi" ? data.ProductDetails[0].sellingPrice + data?.Product[0]?.zonal_charges : data.ProductDetails[0].sellingPrice + data?.Product[0]?.national_charges}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
