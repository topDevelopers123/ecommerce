import React, { useState } from 'react';
import './OldAddress.css';

function OldAddress() {
    const [modalVisible, setModalVisible] = useState(false);

    const newAddress = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Address submitted');
        setModalVisible(false);
    };

    return (
        <div>
            <div className='p-5'>
                <div className='container'>
                    <h5>Select Your Address</h5>
                    <div className='newAdd col-lg-8 col-md-7 p-3'>
                        <div>
                            <h6>Your Addresses</h6>
                        </div>

                        <div className='p-1'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    355, 3rd Floor, Aggarwal Millennium Tower-1, Netaji Subhas Place, Pitam Pura, New Delhi - 110 034 | <span>Edit Address</span>
                                </label>
                            </div>
                        </div>

                        <div className='p-1'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    355, 3rd Floor, Aggarwal Millennium Tower-1, Netaji Subhas Place, Pitam Pura, New Delhi - 110 034  | <span>Edit Address</span>
                                </label>
                            </div>
                        </div>

                        <div className='p-2'>
                            <button onClick={newAddress}><span>+</span> Add new Address</button>
                        </div>
                    </div>
                </div>
            </div>

            {modalVisible && (
                <div className='newAdd modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <h2>Add New Address</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Full Name *</label>
                            <input type='text' id='name' name='name' placeholder='Full Name' required />

                            <label htmlFor='street'>Phone Number *</label>
                            <input type='text' id='street' name='street' placeholder='Enter Phone' required />

                            <label htmlFor='street'>Alternate Phone Number </label>
                            <input type='text' id='street' name='street' placeholder='Enter Phone' required />


                            <label htmlFor='street'>Address *</label>
                            <input type='text' id='street' name='street' placeholder='Enter Address' required />

                            <label htmlFor='city'>City *</label>
                            <input type='text' id='city' name='city' placeholder='Enter City' required />

                            <label htmlFor='state'>State *</label>
                            <input type='text' id='state' name='state' placeholder='Enter State' required />

                            <label htmlFor='state'>Country *</label>
                            <input type='text' id='state' name='state' placeholder='Enter Country' required />

                            <label htmlFor='zip'>Zip Code *</label>
                            <input type='text' id='zip' name='zip' placeholder='Enter Zip Code' required />

                            <button className='d-flex justify-content-center' type='submit'>Add New Address</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OldAddress;
