
import React, { useState } from 'react';
import './Trackmodal.css';
import "../checkout/OldAddress.css";
import { useOrderContext } from '../../Context/index.context';
import { Navigate } from 'react-router-dom';

function ReturnModal({ show, onClose }) {
    const { returnProduct }=useOrderContext();
    const token = localStorage.getItem("token")
    const [products,setProducts]=useState([]);
    const [formData, setFormData] = useState({
        reason: '',
        images: [],
        comment: ''
    });

    const [selectedReason, setSelectedReason] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + formData.images.length > 3) {
            alert('You can upload only 3 images.');
            return;
        }
        setFormData({
            ...formData,
            images: [...formData.images, ...files]
        });
    };

    const handleImageDelete = (index) => {
        const newImages = formData.images.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            images: newImages
        });
    };

    const handleReasonChange = (e) => {
        setSelectedReason(e.target.value);
        setFormData({
            ...formData,
            reason: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    if (!show) {
        return null;
    }

    const returnImageHandler = (product_id, productDetails, image) => {

        if (token === null) {
            Navigate(`/login`);
            window.scrollTo(0, 0);
            return
        }
        returnProduct(product_id, productDetails, image)
    }


    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <button onClick={onClose} className="closeButton">X</button>
                <h2>Return Product</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Reason for Return</label>
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
                        </div>
                    </div>
                    <div>
                        <label>Upload Images</label>
                        <input
                            type="file"
                            name="images"
                            multiple
                            onChange={handleImageChange}
                            required
                        />
                        {formData.images.length > 0 && (
                            <div className="imagePreview">
                                {formData.images.map((image, index) => (
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
                        <label>Description for Return Product !</label>
                        <textarea
                            className="returnTextarea"
                            placeholder='Write Description here'
                            type="text"
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className="rounded shadow-sm bg-[#4d869c] text-white" type="submit"
                       onClick={()=> returnImageHandler()}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ReturnModal;
