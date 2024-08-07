import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import toast from 'react-hot-toast';
import { useCartContext, useUserAddressContext, useOrderContext, useProductDetailsContext, useAuthContext, useTrackOrderContext } from '../../Context/index.context';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import logo from "../header/header_images/logo.png"

function OldAddress() {

    const { UserAddressData, addNewAddress, updateOldAddress } = useUserAddressContext();
    const { cartData, setLocalCharges, localCharges } = useCartContext()
    const { addOrder, addSingleOrder } = useOrderContext()
    const [modalVisible, setModalVisible] = useState(false);
    const [stateid, setstateid] = useState(0);
    const [countryid, setCountryid] = useState(0);
    const { productDetailsData } = useProductDetailsContext()
    const { product_id, id } = useParams()
    const { search } = useLocation()
    const urlParams = new URLSearchParams(search);
    const imageUrl = urlParams.get('image');
    const qty = urlParams.get('qty');
    const { API } = useAuthContext();
    const { createWayBill, wayBillData } = useTrackOrderContext();
    // console.log(wayBillData?.data);

    const [updateAddress, setUpdateAddress] = useState([])
    const [flag, setFlag] = useState(false)
    const [radio, setRadio] = useState()

    const navigate = useNavigate()
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
    // Create WayBill Data 
    const [createWayBillData, setCreateWayBillData] = useState({
        UserAddress1: "",
        UserId: "",
        UserEmail: "",
        UserPhone: "",
        UserName: "",
        Pincode: "",
        userPhone2: "",
        area: "",
        orderId: ""
    })

    const [finalData, setFinalData] = useState({
        cartId: [],
        address_id: "",
        payment_type: "COD",
        payment_status: "pending",
        status: "pending",
        razorpay_payment_id: ""
    })

    const [singleProductData, setSingleProductData] = useState({
        product_id: "",
        product_detail_id: "",
        user_id: "",
        charges: "",
        payment_type: "COD",
        address_id: "",
        payment_status: "pending",
        status: "pending",
        image: imageUrl,
        quantity: qty,
        razorpay_payment_id: ""
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
    ))[0]

    let x = cartData?.map((item) => selectedData?.state === "Delhi" ? item?.product_id?.zonal_charges : item?.product_id?.national_charges)
    let cartId = cartData?.map((i, index) => ({ id: i._id, charges: x[index], image: i?.image, quantity: i?.quantity }))

    const addressFilter = UserAddressData?.filter((item) => {
        return item?._id === selectedData?._id
    })[0]

    const product_id_filter = productDetailsData?.filter((item) => {
        return item._id === product_id
    })[0]

    const product_detail_Filter = product_id_filter?.ProductDetails?.filter((item) => {
        return item?._id === id
    })[0]

    let charges_s = selectedData?.state === "Delhi" ? product_id_filter?.zonal_charges : product_id_filter?.national_charges

    useEffect(() => {
        setFinalData({ ...finalData, cartId: cartId, address_id: radio })
        setSingleProductData({ ...singleProductData, product_id: product_id_filter?._id, product_detail_id: product_detail_Filter?._id, address_id: radio, user_id: addressFilter?.user_id, charges: charges_s })
    }, [cartData, radio])


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
    }

    const updateAddressHandle = (val, id) => {
        if (val.fullname.trim() === "") {
            toast.error("Full name is required")
        }
        else if (val.phone.trim() === "") {
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
        } else {
            updateOldAddress(data, id);
        }
    }

    const radioHandler = (e, value) => {
        setData({ ...data, addressType: value })
    }

    const createNewAddress = (val) => {
        if (val.fullname.trim() === "") {
            toast.error("Full name is required")
        }
        else if (val.phone.trim() === "") {
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

    const HandlePayement = async (amount) => {
        const newData = {
            amount,
            PaymenType: finalData.payment_type,
        };

        const order = await axios.post(`${API}/order/payement`, newData);

        if (finalData.payment_type === "COD") {
            await addOrder({
                ...finalData,
                payment_status: "pending",
                razorpay_payment_id: null,
                razorpay_order_id: order.data.id,
            });
            console.log("Order placed successfully with COD");
            return;
        }

        const options = {
            key: process.env.REACT_APP_KEY,
            amount: order.data.amount,
            currency: order.data.currency,
            name: "Mayavi Fashion",
            description: "Test Transaction",
            image: logo,
            order_id: order.data.id,
            handler: async function (response) {
                const paymentData = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                };
                await addOrder({
                    ...finalData,
                    payment_status: "success",
                    razorpay_payment_id: paymentData?.razorpay_payment_id,
                    razorpay_order_id: paymentData?.razorpay_order_id,
                });
            },
            prefill: {
                name: "Your Name",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        if (order.data.payment_capture !== 0) {
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        }
    };

    const HandlePayementForByNow = async (amount) => {
        const newData = {
            amount,
            PaymenType: singleProductData.payment_type,
        };

        const order = await axios.post(`${API}/order/payement`, newData);
        console.log(order);

        if (singleProductData.payment_type === "COD") {
            await addSingleOrder({
                ...singleProductData,
                payment_status: "pending",
                razorpay_payment_id: null,
                razorpay_order_id: order.data.id,
            });
            console.log("Order placed successfully with COD");
            return;
        }

        const options = {
            key: process.env.REACT_APP_KEY,
            amount: order.data.amount,
            currency: order.data.currency,
            name: "Mayavi Fashion",
            description: "Test Transaction",
            image: logo,
            order_id: order.data.id,
            handler: async function (response) {
                const paymentData = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                };

                await addSingleOrder({
                    ...singleProductData,
                    payment_status: "success",
                    razorpay_payment_id: paymentData?.razorpay_payment_id,
                    razorpay_order_id: paymentData?.razorpay_order_id,
                });
            },
            prefill: {
                name: "Your Name",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        if (order.data.payment_capture !== 0) {
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        }
    };

    return (
        <div>
            <div className='py-5 px-2 p-md-5'>
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
                                    {id ?
                                        <>
                                            <div className="group">
                                                <table>
                                                    <tbody>
                                                        <tr className=''>
                                                            <td className="item-img">
                                                                <img src={imageUrl} alt='#' />
                                                            </td>
                                                            <td className="item-details">
                                                                <span className="item-title">{product_id_filter?.title}</span>
                                                            </td>
                                                            <td className="item-details">
                                                                <span className="item-qty">Quantity : {qty}</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="divider"></div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="item-qty">Subtotal</td>
                                                        <td className="item-price">₹{(product_detail_Filter?.sellingPrice * qty) - (((product_detail_Filter?.sellingPrice * qty) / 100) * 18).toFixed()}</td>
                                                        { }
                                                    </tr>
                                                    <tr>
                                                        <td className="item-qty">GST (18%)</td>
                                                        <td className="item-price">+ ₹{(((product_detail_Filter?.sellingPrice * qty) / 100) * 18).toFixed()}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="item-qty">Shipping</td>
                                                        <td className="item-price">+ ₹{singleProductData?.charges}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="item-qty">Total</td>
                                                        <td className="item-price">₹{(product_detail_Filter?.sellingPrice * qty) + singleProductData?.charges}</td>
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
                                                                    <input type="radio" id="radio1" name="radios" value="online" onChange={(e) => { setSingleProductData({ ...singleProductData, payment_type: e.target.value }); }} />
                                                                    <label htmlFor="radio1"></label>
                                                                </div>
                                                                <div className="select-txt">
                                                                    <p className="pymt-type-name">Online Payment</p>
                                                                </div>
                                                                <div className="select-logo" >
                                                                    <img src={online} alt="Online" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pymt-radio">
                                                            <div className="row-payment-method payment-row-last">
                                                                <div className="select-icon hr">
                                                                    <input type="radio" id="radio2" name="radios" value="COD" defaultChecked onChange={(e) => setSingleProductData({ ...singleProductData, payment_type: e.target.value })} />
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
                                                <button onClick={() => HandlePayementForByNow((product_detail_Filter?.sellingPrice * qty) + singleProductData?.charges)}>Confirm Order</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="group">
                                                <table>
                                                    <tbody>
                                                        {cartData?.map((item,i) => (
                                                            <tr key={i} className=''>
                                                                <td className="item-img">
                                                                    <img src={item?.image} alt='#' />
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
                                                        <td className="item-price">₹{(getTotel) - (((getTotel) / 100) * 18).toFixed()}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="item-qty">GST (18%)</td>
                                                        <td className="item-price">+ ₹{(((getTotel) / 100) * 18).toFixed()}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="item-qty">Shipping</td>
                                                        <td className="item-price">+ ₹{localCharges}</td>
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
                                                                    <input type="radio" id="radio1" name="radios" value="online" onChange={(e) => { setFinalData({ ...finalData, payment_type: e.target.value }); }} />
                                                                    <label htmlFor="radio1"></label>
                                                                </div>
                                                                <div className="select-txt">
                                                                    <p className="pymt-type-name"   >Online Payment</p>
                                                                </div>
                                                                <div className="select-logo">
                                                                    <img src={online} alt="Online" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pymt-radio">
                                                            <div className="row-payment-method payment-row-last">
                                                                <div className="select-icon hr">
                                                                    <input type="radio" id="radio2" name="radios" value="COD" defaultChecked onChange={(e) => setFinalData({ ...finalData, payment_type: e.target.value })} />
                                                                    <label htmlFor="radio2"></label>
                                                                </div>
                                                                <div className="select-txt hr">
                                                                    <p className="pymt-type-name" >Cash on Delivery</p>
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
                                                <button onClick={() => HandlePayement(total)} >Confirm Order</button>
                                            </div>
                                        </>}
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
                                        <input onChange={(e) => setData({ ...data, pincode: e.target.value })} type='text' id='zip' defaultValue={item ? item?.pincode : ""} name='zip' placeholder='Enter Zip Code' required />

                                        <div className='d-flex gap-2'>
                                            <span className={data?.addressType === "Home" ? "bg-secondary text-white px-3  rounded-pill" : ""} onClick={(e) => radioHandler(e, "Home")} >Home</span>
                                            <span className={data?.addressType === "Work" ? "bg-secondary text-white px-3 rounded-pill" : ""} onClick={(e) => radioHandler(e, "Work")}>Work</span>
                                        </div>
                                        <button onClick={() => { setData({ ...data, fullname: item?.fullname, area: item?.area, addressType: item?.addressType, city: item?.city, country: item?.country, house_no: item?.house_no, phone: item?.phone, phone2: item?.phone2, state: item?.state, pincode: item?.pincode }); updateAddressHandle(data, item?._id) }} className='d-flex justify-content-center' type='submit'>Update Address</button>
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
                                    <div className='d-flex align-items-baseline justify-content-start'>
                                        <label htmlFor='street'>Work</label>
                                        <input onChange={(e) => setData({ ...data, addressType: e.target.value })} type='radio' id='street' name='addressType' value="Work" placeholder='Enter Address Type' style={{ width: "30%" }} />
                                    </div>
                                    <div className='d-flex align-items-baseline justify-content-start'>
                                        <label htmlFor='street'>Home</label>
                                        <input onChange={(e) => setData({ ...data, addressType: e.target.value })} type='radio' id='street' value="Home" name='addressType' placeholder='Enter Address Type' style={{ width: "30%" }} />
                                    </div>
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