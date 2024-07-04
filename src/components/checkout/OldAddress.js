import React, { useEffect, useState } from 'react';
import './OldAddress.css';
import './checkout.css'
import { useCartContext, useUserAddressContext } from '../../Context/index.context';


function OldAddress() {
    const [modalVisible, setModalVisible] = useState(false);
    const { UserAddressData, addNewAddress, updateOldAddress } = useUserAddressContext();
    const { cartData} = useCartContext()
    const [updateAddress, setUpdateAddress] = useState([])
    const [flag, setFlag] = useState(false)
    const [radio, setRadio] = useState(null)
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        phone2: "",
        country: "",
        addressType:"",
        state: "",
        city: "",
        area: "",
        house_no: "",
        pincode: ""
    })

    console.log(cartData);
    const getTotel = cartData?.reduce((i, r) => i + r?.productDetails?.sellingPrice * r?.quantity, 0)

    // console.log(updateAddress);

    // const [updateData, setupdateData] = useState({
    //     fullname: "",
    //     phone: "",
    //     phone2: "",
    //     country: "",
    //     addressType: "",
    //     state: "",
    //     city: "",
    //     area: "",
    //     house_no: "",
    //     pincode: ""
    // })

    


    // console.log(radio);


    const newAddress = () => {

        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmit = (event) => {
        setFlag(false)
        event.preventDefault();
        setModalVisible(false);
    };

    const editeAddress = (id)=>{
        setFlag(true)
       const get = UserAddressData?.filter((item)=>{
            return item?._id === id
        })
        setUpdateAddress(get);
        // console.log(get, id);
    }

    const updateAddressHandle = (id) => {
        
        // console.log(id);
        // console.log(updateAddress?.id);
        updateOldAddress(data, id);
    }

    const radioHandler =(e,value) => {
        setData({...data, addressType:value})
        
    }

    return (
        <div>
            <div className='p-5'>
                <div className='container'>
                    <div className='row'>
                        <h5>Select Your Address</h5>
                        <div className='newAdd col-lg-8 col-md-7 p-3'>
                            <div>
                                <h6>Your Addresses</h6>
                            </div>

                            {UserAddressData?.map((item, i) => (
                                <div className='p-1' key={i}>
                                    <div className="form-check">
                                        <div className='mb-1'>{item.fullname} <span class="ms-3 bg-secondary p-1 rounded">{item?.addressType}</span></div>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={item?._id} defaultChecked={i === 0} onChange={(e)=>setRadio(e.target.value)}/>
                                       
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            <div className='preAdd gap-2'>
                                                
                                                <span> {item.house_no}</span>&nbsp;
                                                <span>{item.area}</span>&nbsp;
                                                <span>{item?.state}</span>&nbsp;
                                                <span>{item?.pincode}</span>&nbsp;
                                                <div className='mt-1'>{item?.phone}</div>
                                                <span className='delAdd' onClick={() => { newAddress(); { setData({ ...data, fullname: item?.fullname, area: item?.area, addressType: item?.addressType, city: item?.city, country: item?.country, house_no: item?.house_no, phone: item?.phone, phone2: item?.phone2, state:item?.state, pincode:item?.pincode });editeAddress(item._id)}}}>Edit</span>
                                            </div>
                                        </label>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                                

                            <div className='p-2'>
                                <button onClick={newAddress}><span className='addplus'>+</span> Add new Address</button>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-5 col-12">
                            <div className="checkout_total_box">
                                <div className="wrapper">
                                    <div className="group">
                                        <table>
                                            <tbody>
                                                {cartData?.map((item)=>(
                                                    <tr className=''>
                                                        <td className="item-img">
                                                            <img src={item?.productDetails?.image[0].image_url} />
                                                        </td>
                                                        <td className="item-details">
                                                            <span className="item-title">{item?.product_id?.title}</span>
                                                          
                                                        </td>
                                                        <td className="item-price">₹{item?.productDetails?.sellingPrice}</td>
                                                    </tr>

                                                ))}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="divider"></div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="item-qty">Subtotal</td>
                                                <td className="item-price">₹{getTotel}</td>
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
                                    <div className="group submitBtn">
                                        <button>Confirm Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {modalVisible &&(
                <div className='container'>
                    {flag ? 
                    <div className='newAdd modal'>
                            {updateAddress?.map((item)=>(
                                <div className='modal-content'>
                                  
                                    <span className='close' onClick={() => { closeModal(); setFlag(false) }}>&times;</span>
                                    <h2>Add New Address</h2>
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor='name'>Full Name</label>
                                        <input onChange={(e) => setData({ ...data, fullname: e.target.value })} type='text' id='name' defaultValue={item ? item?.fullname : ""} name='name' placeholder='Full Name' required />

                                        <label htmlFor='street'>Phone Number *</label>
                                        <input maxLength="10" onChange={(e) => setData({ ...data, phone: e.target.value })} type='text' id='street' defaultValue={item ? item?.phone : ""} name='street' placeholder='Enter Phone' required />

                                        <label htmlFor='street'>Alternate Phone Number </label>
                                        <input maxLength="10" onChange={(e) => setData({ ...data, phone2: e.target.value })} type='text' id='street' defaultValue={item ? item?.phone2 : ""} name='street' placeholder='Enter Phone' />

                                        <label htmlFor='street'>House No * </label>
                                        <input onChange={(e) => setData({ ...data, house_no: e.target.value })} type='text' id='street' defaultValue={item ? item?.house_no : ""} name='street' placeholder='Enter Address' required />

                                        <label htmlFor='street'>Address *</label>
                                        <input onChange={(e) => setData({ ...data, area: e.target.value })} type='text' id='street' defaultValue={item ? item?.area : ""} name='street' placeholder='Enter Address' required />



                                        <label htmlFor='city'>City *</label>
                                        <input onChange={(e) => setData({ ...data, city: e.target.value })} type='text' id='city' defaultValue={item ? item?.city : ""} name='city' placeholder='Enter City' required />

                                        <label htmlFor='state'>State *</label>
                                        <input onChange={(e) => setData({ ...data, state: e.target.value })} type='text' id='state' defaultValue={item ? item?.state : ""} name='state' placeholder='Enter State' required />

                                        <label htmlFor='state'>Country *</label>
                                        <input onChange={(e) => setData({ ...data, country: e.target.value })} type='text' id='state' defaultValue={item ? item?.country : ""} name='state' placeholder='Enter Country' required />

                                        <label htmlFor='zip'>Zip Code *</label>
                                        <input onChange={(e) => setData({ ...data, pincode: e.target.value })} type='text' id='zip' defaultValue={item ? item?.pincode : ""} name='zip' placeholder='Enter Zip Code' required />

                                        
                                        <div className='d-flex gap-2'>
                                            <span className={data?.addressType === "Home" ? "bg-secondary" : ""} onClick={(e) => radioHandler(e, "Home")} >Home</span>
                                            <span className={data?.addressType === "Work" ? "bg-secondary" : ""} onClick={(e) => radioHandler(e, "Work")}>Work</span>
                                        </div>

                                        <button onClick={() => { setData({ ...data, fullname: item?.fullname, area: item?.area, addressType: item?.addressType, city: item?.city, country: item?.country, house_no: item?.house_no, phone: item?.phone, phone2: item?.phone2, state: item?.state, pincode: item?.pincode }); updateAddressHandle(item?._id) }} className='d-flex justify-content-center' type='submit'>Update Address</button>

                                    </form>
                                </div>
                            ))}
                        
                    </div>
                        : 
                        <div className='newAdd modal'>
                            <div className='modal-content'>
                                <span className='close' onClick={() => { closeModal(); setFlag(false) }}>&times;</span>
                                <h2>Add New Address</h2>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor='name'>Full Name</label>
                                    <input onChange={(e) => setData({ ...data, fullname: e.target.value })} type='text' id='name'  name='name' placeholder='Full Name' required />

                                    <label htmlFor='street'>Phone Number *</label>
                                    <input maxLength="10" onChange={(e) => setData({ ...data, phone: e.target.value })} type='text' id='street'  name='street' placeholder='Enter Phone' required />

                                    <label htmlFor='street'>Alternate Phone Number </label>
                                    <input maxLength="10" onChange={(e) => setData({ ...data, phone2: e.target.value })} type='text' id='street'  name='street' placeholder='Enter Phone' />

                                    <label htmlFor='street'>House No * </label>
                                    <input onChange={(e) => setData({ ...data, house_no: e.target.value })} type='text' id='street' name='street' placeholder='Enter Address' required />

                                    <label htmlFor='street'>Address *</label>
                                    <input onChange={(e) => setData({ ...data, area: e.target.value })} type='text' id='street'  name='street' placeholder='Enter Address' required />



                                    <label htmlFor='city'>City *</label>
                                    <input onChange={(e) => setData({ ...data, city: e.target.value })} type='text' id='city' name='city' placeholder='Enter City' required />

                                    <label htmlFor='state'>State *</label>
                                    <input onChange={(e) => setData({ ...data, state: e.target.value })} type='text' id='state' name='state' placeholder='Enter State' required />

                                    <label htmlFor='state'>Country *</label>
                                    <input onChange={(e) => setData({ ...data, country: e.target.value })} type='text' id='state'  name='state' placeholder='Enter Country' required />

                                    <label htmlFor='zip'>Zip Code *</label>
                                    <input onChange={(e) => setData({ ...data, pincode: e.target.value })} type='text' id='zip'  name='zip' placeholder='Enter Zip Code' required />

                                    <label htmlFor='street'>Work</label>
                                    <input onChange={(e) => setData({ ...data, addressType: e.target.value })} type='radio' id='street' name='addressType' value="Work" placeholder='Enter Address Type'  required />
                                    <label htmlFor='street'>Home</label>
                                    <input onChange={(e) => setData({ ...data, addressType: e.target.value })}  type='radio' id='street' value="Home" name='addressType' placeholder='Enter Address Type' required />

                                 <button onClick={() => { addNewAddress(data) }} className='d-flex justify-content-center' type='submit'>Add New Address</button>
                                  
                                </form>
                            </div>
                        </div>

}
                </div>
            )}
        </div>
    );
}

export default OldAddress;
