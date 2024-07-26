
import React, { useState } from 'react';
import './Trackmodal.css';
import "../checkout/OldAddress.css";
import { useOrderContext } from '../../Context/index.context';

function ReturnModal({ show, onClose, data }) {
    const { returnProduct } = useOrderContext();
    const [selectedReason, setSelectedReason] = useState('');
    const [formData, setFormData] = useState({
        reason: '',
        image: [],
        product_id: data?.Product[0]?._id,
        product_detail_id: data?.ProductDetails[0]?._id,
        address_id: data?.UserAddress[0]?._id,
        upi_account_no: '',
        qty: data?.quantity,
        description: ''
    });

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files).slice(0, 3);
        const newImages = files.map(file => ({
            id: `${file.name}-${file.size}`,
            url: URL.createObjectURL(file),
            file
        }));
        setFormData(prevDetail => ({
            ...prevDetail,
            image: [...prevDetail.image, ...newImages.map(img => img.file)]
        }));
    };

    const handleImageDelete = (id) => {
        setFormData(prevDetail => ({
            ...prevDetail,
            image: prevDetail.image.filter(file => `${file.name}-${file.size}` !== id)
        }));
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleReasonChange = (e) => {
        setSelectedReason(e.target.value);
        setFormData({
            ...formData,
            reason: e.target.value
        });
    };

    const submitHandler = async () => {
        const formData2 = new FormData();
        formData2.append('reason', formData.reason);
        formData2.append('product_id', formData.product_id);
        formData2.append('product_detail_id', formData.product_detail_id);
        formData2.append('address_id', formData.address_id);
        formData2.append('upi_account_no', formData.upi_account_no);
        formData2.append('qty', formData.qty);
        formData2.append('description', formData.description);

        formData.image.forEach((file) => {
            formData2.append(`image`, file);
        });

        try {
            await returnProduct(formData2);
            window.location.href = ("/track_order");
            onClose();
        } catch (error) {
            console.error('Error adding product details:', error);
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <button onClick={onClose} className="closeButton">
                    <i className="bi bi-x-circle m-0 p-0" style={{ fontSize: "30px" }}></i>
                </button>
                <h2>Return Product</h2>

                <div>
                    <label htmlFor='reason'>Reason for Return </label>
                    <div className="radioGroup">
                        <label>
                            <input
                                type="radio"
                                value="Defective"
                                checked={selectedReason === 'Defective'}
                                onChange={handleReasonChange}
                                required
                            />
                            Defective
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Not as described"
                                checked={selectedReason === 'Not as described'}
                                onChange={handleReasonChange}
                            />
                            Not as described
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Changed my mind"
                                checked={selectedReason === 'Changed my mind'}
                                onChange={handleReasonChange}
                            />
                            Changed my mind
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Other"
                                checked={selectedReason === 'Other'}
                                onChange={handleReasonChange}
                            />
                            Other
                        </label>
                    </div>
                </div>

                {selectedReason === 'Other' && (
                    <>
                        <div>
                            <label htmlFor='upload_img' className='mt-4'>Upload Images</label>
                            <input
                                type="file"
                                name="image"
                                multiple
                                onChange={handleImageChange}
                                required
                            />
                            {formData.image.length > 0 && (
                                <div className="imagePreview">
                                    {formData.image.map((image, index) => (
                                        <div key={index} className="imageContainer">
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={`preview-${index}`}
                                                className="previewImage"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleImageDelete(index)}
                                                className="deleteButton"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div>
                            <label htmlFor='describe' className='mt-4'>Description for Return Product!</label>
                            <textarea
                                className="returnfield form-control"
                                rows={5}
                                placeholder='Write Description here'
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </>
                )}

                <div>
                    <label htmlFor='upi_account_no' className='mt-4'>Enter your UPI Number</label>
                    <input
                        type="text"
                        name="upi_account_no"
                        placeholder="Enter UPI Number"
                        className="form-control returnfield"
                        value={formData.upi_account_no}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button onClick={submitHandler} className="rounded shadow-sm bg-[#4d869c] text-white" type="submit">Submit</button>
            </div>
        </div>
    );
}

export default ReturnModal;
