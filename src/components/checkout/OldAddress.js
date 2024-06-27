import React, { useState } from 'react';
import './OldAddress.css';
import './checkout.css'
import { useUserAddressContext } from '../../Context/index.context';


function OldAddress() {
    const [modalVisible, setModalVisible] = useState(false);
    const { UserAddressData, addNewAddress, deleteAddress } = useUserAddressContext();
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        phone2: "",
        country: "",
        state: "",
        city: "",
        area: "",
        house_no: "",
        pincode: ""
    })
  
    // console.log(data)

    const newAddress = () => {
        setModalVisible((prev)=>!prev);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setModalVisible(false);
    };

    return (
        <div>
            <div className='p-5'>
                <div className='container'>
                    <div className='row'>
                        <h5>Select Your Address</h5>
                        <div className='newAdd col-lg-7 col-md-7 p-3'>
                            <div>
                                <h6>Your Addresses</h6>
                            </div>

                            {UserAddressData?.map((item, i) => (
                                <div className='p-1' key={i}>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios1">

                                            {item.house_no}|
                                            {item.area}
                                            {item?.state}| <span onClick={() => deleteAddress(item._id)}>Delete</span>

                                        </label>
                                    </div>
                                </div>))}




                            <div className='p-2'>
                                <button onClick={newAddress}><span className='addplus'>+</span> Add new Address</button>
                            </div>
                        </div>


                        <div className="col-lg-5 col-md-5 col-12">
                            <div className="checkout_total_box">
                                <div className="wrapper">
                                    <div className="group">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="item-img">
                                                        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/cf669aef-c9cd-443e-946f-54e1802a79f0/in-season-tr-13-workout-shoes-BDTlPf.png" alt="Men's Casual Shoes" />
                                                    </td>
                                                    <td className="item-details">
                                                        <span className="item-title">Men's Casual Shoes</span>
                                                        <span className="item-size">Size: UK 7</span>
                                                        <span className="item-qty">Quantity: 1</span>
                                                    </td>
                                                    <td className="item-price">₹899.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="item-img">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwFtmbw7YaM7hDruOLb77JOifKlGAn5NqaA&usqp=CAU" alt="Men's Woolen Jacket" />
                                                    </td>
                                                    <td className="item-details">
                                                        <span className="item-title">Men's Woolen Jacket</span>
                                                        <span className="item-size">Size: M</span>
                                                        <span className="item-qty">Quantity: 1</span>
                                                    </td>
                                                    <td className="item-price">₹999.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="item-img">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_yBcI2xSyryJ7hTEu0f6m6L5RsQOxBdbKw&usqp=CAU" alt="Men's Casual Trouser" />
                                                    </td>
                                                    <td className="item-details">
                                                        <span className="item-title">Men's Casual Trouser</span>
                                                        <span className="item-size">Size: M</span>
                                                        <span className="item-qty">Quantity: 1</span>
                                                    </td>
                                                    <td className="item-price">₹1000.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="divider"></div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="item-qty">Subtotal</td>
                                                <td className="item-price">₹2898.00</td>
                                            </tr>
                                            <tr>
                                                <td className="item-qty">Shipping</td>
                                                <td className="item-price">₹102.00</td>
                                            </tr>
                                            <tr>
                                                <td className="item-qty">Total</td>
                                                <td className="item-price">₹3000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="group">
                                        <button>Confirm Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {modalVisible && (
                <div className='container'>

                    <div className='newAdd modal'>
                        <div className='modal-content'>
                            <span className='close' onClick={closeModal}>&times;</span>
                            <h2>Add New Address</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='name'>Full Name *</label>
                                <input onChange={(e) => setData({ ...data, fullname: e.target.value })} type='text' id='name' name='name' placeholder='Full Name' required />

                                <label htmlFor='street'>Phone Number *</label>
                                <input onChange={(e) => setData({ ...data, phone: e.target.value })} type='text' id='street' name='street' placeholder='Enter Phone' required />

                                <label htmlFor='street'>Alternate Phone Number </label>
                                <input onChange={(e) => setData({ ...data, phone2: e.target.value })} type='text' id='street' name='street' placeholder='Enter Phone' />

                                <label htmlFor='street'>House No * </label>
                                <input onChange={(e) => setData({ ...data, house_no: e.target.value })} type='text' id='street' name='street' placeholder='Enter Address' required />

                                <label htmlFor='street'>Address *</label>
                                <input onChange={(e) => setData({ ...data, area: e.target.value })} type='text' id='street' name='street' placeholder='Enter Address' required />

                                <label htmlFor='city'>City *</label>
                                <input onChange={(e) => setData({ ...data, city: e.target.value })} type='text' id='city' name='city' placeholder='Enter City' required />

                                <label htmlFor='state'>State *</label>
                                <input onChange={(e) => setData({ ...data, state: e.target.value })} type='text' id='state' name='state' placeholder='Enter State' required />

                                <label htmlFor='state'>Country *</label>
                                <input onChange={(e) => setData({ ...data, country: e.target.value })} type='text' id='state' name='state' placeholder='Enter Country' required />

                                <label htmlFor='zip'>Zip Code *</label>
                                <input onChange={(e) => setData({ ...data, pincode: e.target.value })} type='text' id='zip' name='zip' placeholder='Enter Zip Code' required />

                                <button onClick={()=>addNewAddress(data)} className='d-flex justify-content-center' type='submit'>Add New Address</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OldAddress;
