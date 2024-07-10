import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Invoice = ({ setInvoice, data }) => {
    console.log(data);
    const printDocument = () => {
        const input = document.getElementById('invoice');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("invoice.pdf");
            });
    };

    return (
        <div className='bg-gray-500 py-24 absolute w-full top-0 left-0'>
            <h1 className='absolute top-10 right-10 cursor-pointer' onClick={() => setInvoice(false)}>
                <i className="bi bi-x-lg text-white"></i>
            </h1>
            <button onClick={printDocument}>Download</button>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg" id="invoice">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <img src="./image/invoice.png" alt="Logo" className="h-16 mr-4" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Mayavi Fashion Invoice</h2>
                    </div>
                </div>

                <div className='mb-4'>
                    <p><strong>Invoice Number: </strong> 1330</p>
                    <p>Date: 02/03/2024</p>
                </div>
                <div className='h-1 bg-[#4d869c] mb-4'></div>

                <div className="flex justify-between mb-8 py-3">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Bill From</h3>
                        <p className="text-gray-600">Mayavi Fashion</p>
                        <p className="text-gray-600">First str, 28-32, Chicago, USA</p>
                        <p className="text-gray-600">mayavifashion@gmail.com</p>
                        <p className="text-gray-600">8029697597</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Bill to</h3>
                        <p className="text-gray-600">{data.UserAddress[0].fullname}</p>
                        <p className="text-gray-600">{data.UserAddress[0].house_no}, {data.UserAddress[0].area}, {data.UserAddress[0].city}, {data.UserAddress[0].country}</p>
                        <p className="text-gray-600">shepard@mail.com</p>
                        <p className="text-gray-600">{data.UserAddress[0].phone}</p>
                    </div>
                </div>
                <div className='table-responsive mb-8'>
                    <table className="w-full border-collapse">
                        <thead className="border-y-2 border-black">
                            <tr>
                                <th className="py-2 px-4">Item</th>
                                <th className="py-2 px-4">Quantity</th>
                                <th className="py-2 px-4">Rate</th>
                                <th className="py-2 px-4">TAX</th>
                                <th className="py-2 px-4">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">{data.Product[0].title}</td>
                                <td className="py-2 px-4">{data.quantity}</td>
                                <td className="py-2 px-4">{data.ProductDetails[0].MRP}</td>
                                <td className="py-2 px-4">9%</td>
                                <td className="py-2 px-4">{data.ProductDetails[0].MRP}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='h-1 bg-[#4d869c] mb-4'></div>

                <div className="flex justify-between mb-8 mt-3">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Terms & Conditions</h3>
                        {/* Add any terms and conditions here */}
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Subtotal:</p>
                            <p className="text-gray-600">₹ 6999</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Discount (20%):</p>
                            <p className="text-gray-600">₹ 20</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Tax:</p>
                            <p className="text-gray-600">₹ 200</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-gray-600">Paid:</p>
                            <p className="text-gray-600">₹ 5999</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-blue-600 font-bold">Balance Due:</p>
                            <p className="text-blue-600 font-bold">₹ 8,480.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;