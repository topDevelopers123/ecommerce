
// import React, { useState } from 'react';
// import './Trackmodal.css';

// function ReturnModal({ show, onClose }) {
//     const [formData, setFormData] = useState({
//         reason: '',
//         images: []
//     });

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleImageChange = (e) => {
//         setFormData({
//             ...formData,
//             images: Array.from(e.target.files)
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log(formData);
//         onClose();
//     };

//     if (!show) {
//         return null;
//     }

//     return (
//         <div className="modalOverlay">
//             <div className="modalContent">
//                 <button onClick={onClose} className="closeButton">X</button>
//                 <h2>Return Product</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label>User</label>
//                         <input
//                             type="text"
//                             name="user"
//                             value={formData.user}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Reason for Return</label>
//                         <textarea
//                         className='returnTextarea'
//                             type="text"
//                             name="reason"
//                             value={formData.reason}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     {/* <div>
//                         <label>Upload Images</label>
//                         <input
//                             type="file"
//                             name="images"
//                             multiple
//                             onChange={handleImageChange}
//                             required
//                         />
//                     </div> */}
//                     <button className='rounded shadow-sm bg-[#4d869c] text-white' type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ReturnModal;































// import React, { useState } from 'react';
// import './Trackmodal.css';

// function ReturnModal({ show, onClose }) {
//     const [formData, setFormData] = useState({
//         reason: '',
//         images: []
//     });

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleImageChange = (e) => {
//         setFormData({
//             ...formData,
//             images: Array.from(e.target.files)
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onClose();
//     };

//     if (!show) {
//         return null;
//     }

//     return (
//         <div className="modalOverlay">
//             <div className="modalContent">
//                 <button onClick={onClose} className="closeButton">X</button>
//                 <h2>Return Product </h2>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label>User</label>
//                         <input
//                             type="text"
//                             name="user"
//                             value={formData.user}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Reason for Return</label>
//                         <textarea
//                             className='returnTextarea'
//                             type="text"
//                             name="reason"
//                             value={formData.reason}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Upload Images</label>
//                         <input
//                             type="file"
//                             name="images"
//                             multiple
//                             onChange={handleImageChange}
//                             required
//                         />
//                     </div>
//                     <button className='rounded shadow-sm bg-[#4d869c] text-white' type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ReturnModal;


















import React, { useState } from 'react';
import './Trackmodal.css';

function ReturnModal({ show, onClose }) {
    const [formData, setFormData] = useState({
        reason: '',
        images: []
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 3) {
            alert('You can only upload up to 3 images.');
            return;
        }
        setFormData({
            ...formData,
            images: files
        });
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
                        <label>User</label>
                        <input
                            type="text"
                            name="user"
                            value={formData.user}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Reason for Return</label>
                        <textarea
                            className='returnTextarea'
                            type="text"
                            name="reason"
                            value={formData.reason}
                            onChange={handleInputChange}
                            required
                        />
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
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(image)}
                                        alt={`preview-${index}`}
                                        className="previewImage"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <button className='rounded shadow-sm bg-[#4d869c] text-white' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ReturnModal;
