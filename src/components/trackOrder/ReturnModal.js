
import React, { useState } from 'react';
import './Trackmodal.css';

function ReturnModal({ show, onClose }) {
    const [formData, setFormData] = useState({
        reason: '',
        images: []
    });

    const [showAccordion, setShowAccordion] = useState(false);
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
            alert('You can only upload 3 images.');
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

    const handleAccordionToggle = () => {
        setShowAccordion(!showAccordion);
    };

    const handleReasonChange = (e) => {
        setSelectedReason(e.target.value);
        setFormData({
            ...formData,
            reason: e.target.value
        });
        setShowAccordion(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <button onClick={onClose} className="closeButton">X</button>
                <h2>Return Product</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Reason for Return</label>
                        <input
                            type="text"
                            name="reason"
                            value={formData.reason}
                            onClick={handleAccordionToggle}
                            onChange={handleInputChange}
                            required
                            readOnly
                        />
                        {showAccordion && (
                            <div className="accordionContent">
                                <div className="radioGroup">
                                    <label>
                                        <input
                                            type="radio"
                                            value="Defective"
                                            checked={selectedReason === 'Defective'}
                                            onChange={handleReasonChange}
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
                        )}
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
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <label>Add Comment</label>
                        <textarea
                            className='returnTextarea'
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button className='rounded shadow-sm bg-[#4d869c] text-white' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ReturnModal;