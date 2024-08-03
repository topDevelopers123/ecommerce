import React, { useState } from 'react';
import './OldAddress.css';
import './checkout.css'
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import toast from 'react-hot-toast';
import { useUserAddressContext } from '../../Context/index.context';

function SavedAddress() {
    const { UserAddressData, addNewAddress, updateOldAddress, deleteAddress } = useUserAddressContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [stateid, setstateid] = useState(0);
    const [countryid, setCountryid] = useState(0);
    const [updateAddress, setUpdateAddress] = useState([])
    const [flag, setFlag] = useState(false)
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

    const updateAddressHandle = (id) => {
        updateOldAddress(data, id);
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

    const handleDeleteAddress = async (id) => {
        await deleteAddress(id);
    };

    return (
        <div>
            <div className='py-5 px-2 p-md-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='newAdd col-lg-12 col-md-8 p-3'>
                            <div>
                                <h6>Your Addresses</h6>
                            </div>

                            {UserAddressData?.map((item, i) => (
                                <div className='p-1' key={i}>
                                    <div className="form-check">
                                        <div className='mb-1'>{item.fullname} <span className="ms-3 bg-secondary px-3 rounded rounded-pill text-white ">{item?.addressType}</span></div>

                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            <div className='preAdd gap-2'>
                                                <span> {item.house_no}</span>&nbsp;
                                                <span>{item.area}</span>&nbsp;
                                                <span>{item?.city}</span>&nbsp;
                                                <span>{item?.pincode}</span>&nbsp;
                                                <div className='mt-1'>{item?.phone}</div>
                                                <div className='flex gap-5 my-3'>
                                                    <span className='delAdd editAdd' onClick={() => { newAddress(); { setData({ ...data, fullname: item?.fullname, area: item?.area, addressType: item?.addressType, city: item?.city, country: item?.country, house_no: item?.house_no, phone: item?.phone, phone2: item?.phone2, state: item?.state, pincode: item?.pincode }); editeAddress(item._id) } }}><i class="bi bi-pencil-square"></i>Edit</span>
                                                    <span
                                                        className='delAddBtn'
                                                        onClick={() => handleDeleteAddress(item?._id)}>
                                                        <i class="bi bi-trash"></i>Delete
                                                    </span>
                                                </div>
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

export default SavedAddress;

