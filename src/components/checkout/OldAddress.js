import React, { useEffect, useState } from 'react';
import './OldAddress.css';
import './checkout.css'
import cod from "./img/cod.png";
import online from "./img/online.png";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useCartContext, useUserAddressContext, useOrderContext } from '../../Context/index.context';
import { useFormik } from 'formik';
import * as yup from "yup";
import toast from 'react-hot-toast';



function OldAddress() {

    const { UserAddressData, addNewAddress, updateOldAddress } = useUserAddressContext();
    const { cartData, setLocalCharges, localCharges } = useCartContext()
    const { addOrder } = useOrderContext()
    const [modalVisible, setModalVisible] = useState(false);
    const [stateid, setstateid] = useState(0);
    const [countryid, setCountryid] = useState(0);
    // const [zonal_charges, setZonal_charges] = useState(null)
    // const [national_charges, setNational_charges] = useState(null)
    const [charges, setCharges] = useState(0)
    const [updateAddress, setUpdateAddress] = useState([])
    const [flag, setFlag] = useState(false)
    const [radio, setRadio] = useState()
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        phone2: "",
        country: "",
        addressType: "",
        state: "",
        city: "",
        area: "",
        house_no: "",
        pincode: ""
    })

    const [finalData, setFinalData] = useState({
        cartId: [],
        address_id: "",
        payment_type: "cash",
        payment_status: "pending",
        status: "pending"
    })


    let n = 0;
    let total = 0;
    cartData?.map((item) => (

        n += item?.product_id?.zonal_charges

    ));

    const getTotel = cartData?.reduce((i, r) => i + r?.productDetails?.sellingPrice * r?.quantity, 0)

    useEffect(() => {
        setRadio(UserAddressData?.map((item) => item?._id)[0])
        setLocalCharges(n)

    }, [UserAddressData])

    const selectedData = UserAddressData?.filter((item) => (
        item?._id === radio
    ))

    let x = cartData?.map((item) => selectedData[0]?.state === "Delhi" ? item?.product_id?.zonal_charges : item?.product_id?.national_charges)
    let cartId = cartData?.map((i, index) => ({ id: i._id, charges: x[index] }))

    useEffect(() => {



        setFinalData({ ...finalData, cartId: cartId, address_id: radio })

    }, [cartData, radio])

    const checkOut = () => {

        addOrder(finalData)


    }

    total = getTotel + localCharges

    const newAddress = () => {

        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmitData = (event) => {
        setFlag(false)
        event.preventDefault();
        setModalVisible(false);
    };

    const editeAddress = (id) => {
        setFlag(true)
        const get = UserAddressData?.filter((item) => {
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

    const radioHandler = (e, value) => {
        setData({ ...data, addressType: value })

    }
  
    const createNewAddress = (val) => {
        if (val.fullname.trim() === "") {
            toast.error("Full name is required")
        }
        else if (val.phone.trim() === ""){
            toast.error("Phone Number is required")
        }
        else if (val.country.trim() === "") {
            toast.error("Country is required")
        }
        else if (val.addressType.trim() === "") {
            toast.error("Address Type is required")
        }
        else if (val.state.trim() === "") {
            toast.error("State is required")
        }
        else if (val.city.trim() === "") {
            toast.error("City is required")
        }
        else if (val.area.trim() === "") {
            toast.error("Area is required")
        }
        else if (val.house_no.trim() === "") {
            toast.error("House No is required")
        }
        else if (val.pincode.trim() === "") {
            toast.error("Pincode is required")
        }
         else {
            addNewAddress(val)
        }
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
                                        <div className='mb-1'>{item.fullname} <span className="ms-3 bg-secondary px-3 rounded rounded-pill text-white ">{item?.addressType}</span></div>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={item?._id} defaultChecked={i === 0} onChange={(e) => setRadio(e.target.value)} />

                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            <div className='preAdd gap-2'>

                                                <span> {item.house_no}</span>&nbsp;
                                                <span>{item.area}</span>&nbsp;
                                                <span>{item?.city}</span>&nbsp;
                                                <span>{item?.pincode}</span>&nbsp;
                                                <div className='mt-1'>{item?.phone}</div>
                                                <span className='delAdd' onClick={() => { newAddress(); { setData({ ...data, fullname: item?.fullname, area: item?.area, addressType: item?.addressType, city: item?.city, country: item?.country, house_no: item?.house_no, phone: item?.phone, phone2: item?.phone2, state: item?.state, pincode: item?.pincode }); editeAddress(item._id) } }}>Edit</span>
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
                                                {cartData?.map((item, i) => (
                                                    <tr className='' key={i}>
                                                        <td className="item-img">
                                                            <img src={item?.productDetails?.image[0].image_url} />
                                                        </td>
                                                        <td className="item-details">
                                                            <span className="item-title">{item?.product_id?.title}</span>

                                                        </td>
                                                        <td className="item-details">
                                                            <span className="item-qty">Quantity : {item?.quantity}</span>


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
                                                <td className="item-price">₹{localCharges}</td>
                                            </tr>
                                            <tr>
                                                <td className="item-qty">Total</td>
                                                <td className="item-price">₹{total}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="divider"></div>

                                    <div className="payment_mode">
                                        <section>
                                            <h5 className="payment-title">Choose your payment method</h5>
                                            <form action="" method="post">
                                                <div className="pymt-radio">
                                                    <div className="row-payment-method payment-row">
                                                        <div className="select-icon">
                                                            <input type="radio" id="radio1" name="radios" value="online" onChange={(e) => setFinalData({ ...finalData, payment_type: e.target.value })} />
                                                            <label htmlFor="radio1"></label>
                                                        </div>
                                                        <div className="select-txt">
                                                            <p className="pymt-type-name">Online Payment</p>

                                                        </div>
                                                        <div className="select-logo">
                                                            <img src={online} alt="Online" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pymt-radio">
                                                    <div className="row-payment-method payment-row-last">
                                                        <div className="select-icon hr">
                                                            <input type="radio" id="radio2" name="radios" value="cash" defaultChecked onChange={(e) => setFinalData({ ...finalData, payment_type: e.target.value })} />
                                                            <label htmlFor="radio2"></label>
                                                        </div>
                                                        <div className="select-txt hr">
                                                            <p className="pymt-type-name">Cash on Delivery</p>

                                                        </div>
                                                        <div className="select-logo">
                                                            <div className="select-logo-sub logo-spacer">
                                                                <img src={cod} alt="COD" />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                            </form>
                                        </section>
                                    </div>
                                    <div className="group submitBtn">
                                        <button onClick={checkOut}>Confirm Order</button>

                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>

            {modalVisible && (
                <div className='container'>
                    {flag ?
                        <div className='newAdd modal'>
                            {updateAddress?.map((item, i) => (
                                <div className='modal-content' key={i}>

                                    <span className='close' onClick={() => { closeModal(); setFlag(false) }}>&times;</span>
                                    <h2>Update Address</h2>
                                    <form onSubmit={handleSubmitData}>
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


                                        {/* 
                                        <label htmlFor='city'>City *</label>
                                        <input onChange={(e) => setData({ ...data, city: e.target.value })} type='text' id='city' defaultValue={item ? item?.city : ""} name='city' placeholder='Enter City' required /> */}


                                        {/* <input onChange={(e) => setData({ ...data, state: e.target.value })} type='text' id='state' defaultValue={item ? item?.state : ""} name='state' placeholder='Enter State' required /> */}

                                        <label htmlFor='state'>Country *</label>
                                        <CountrySelect
                                            onChange={(e) => {
                                                setData({ ...data, country: e.name }); setCountryid(e.id);
                                            }
                                            }
                                            placeHolder="Select Country"
                                        />

                                        <label htmlFor='state'>State *</label>
                                        <StateSelect
                                            countryid={countryid}
                                            onChange={(e) => {
                                                setData({ ...data, state: e.name }); setstateid(e.id)
                                            }}
                                            placeHolder="Select State"
                                        />

                                        <label htmlFor='city'>City *</label>
                                        <CitySelect
                                            countryid={countryid}
                                            stateid={stateid}
                                            onChange={(e) => {
                                                setData({ ...data, city: e.name })
                                            }}
                                            placeHolder="Select City"
                                        />

                                        {/* <input onChange={(e) => setData({ ...data, country: e.target.value })} type='text' id='state' defaultValue={item ? item?.country : ""} name='state' placeholder='Enter Country' required /> */}

                                        <label htmlFor='zip'>Zip Code *</label>
                                        <input onChange={(e) => setData({ ...data, pincode: e.target.value })} type='text' id='zip' defaultValue={item ? item?.pincode : ""} name='zip' placeholder='Enter Zip Code' required />


                                        <div className='d-flex gap-2'>
                                            <span className={data?.addressType === "Home" ? "bg-secondary " : ""} onClick={(e) => radioHandler(e, "Home")} >Home</span>
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
                                <form onSubmit={handleSubmitData}>
                                    <label htmlFor='name'>Full Name</label>
                                    <input onChange={(e) => setData({ ...data, fullname: e.target.value })} type='text' id='name' name='name' placeholder='Full Name' />

                                    <label htmlFor='street'>Phone Number *</label>
                                    <input maxLength="10" onChange={(e) => setData({ ...data, phone: e.target.value })} type='text' id='street' name='street' placeholder='Enter Phone' />

                                    <label htmlFor='street'>Alternate Phone Number </label>
                                    <input maxLength="10" onChange={(e) => setData({ ...data, phone2: e.target.value })} type='text' id='street' name='street' placeholder='Enter Phone' />

                                    <label htmlFor='street'>House No * </label>
                                    <input onChange={(e) => setData({ ...data, house_no: e.target.value })} type='text' id='street' name='street' placeholder='Enter Address' />

                                    <label htmlFor='street'>Address *</label>
                                    <input onChange={(e) => setData({ ...data, area: e.target.value })} type='text' id='street' name='street' placeholder='Enter Address' />

                                    <label htmlFor='state'>Country *</label>
                                    <CountrySelect
                                        onChange={(e) => {
                                            setData({ ...data, country: e.name }); setCountryid(e.id);
                                        }
                                        }
                                        placeHolder="Select Country"
                                    />


                                    <label htmlFor='state'>State *</label>
                                    <StateSelect
                                        countryid={countryid}
                                        onChange={(e) => {
                                            setData({ ...data, state: e.name }); setstateid(e.id)
                                        }}
                                        placeHolder="Select State"
                                    />

                                    <label htmlFor='city'>City *</label>
                                    <CitySelect
                                        countryid={countryid}
                                        stateid={stateid}
                                        onChange={(e) => {
                                            setData({ ...data, city: e.name })
                                        }}
                                        placeHolder="Select City"
                                    />

                                    <label htmlFor='zip'>Zip Code *</label>
                                    <input onChange={(e) => setData({ ...data, pincode: e.target.value })} type='text' id='zip' name='zip' placeholder='Enter Zip Code' />

                                    <label htmlFor='street'>Work</label>
                                    <input onChange={(e) => setData({ ...data, addressType: e.target.value })} type='radio' id='street' name='addressType' value="Work" placeholder='Enter Address Type' />
                                    <label htmlFor='street'>Home</label>
                                    <input onChange={(e) => setData({ ...data, addressType: e.target.value })} type='radio' id='street' value="Home" name='addressType' placeholder='Enter Address Type' />

                                    <button onClick={() => { createNewAddress(data) }} className='d-flex justify-content-center' type='submit'>Add New Address</button>

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
