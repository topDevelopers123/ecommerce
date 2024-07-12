
import React from 'react';
import './Wishlist.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext, useWishlistContext } from '../../Context/index.context';

function Wishlist() {
    const { wishlistData, deleteWishlistProduct } = useWishlistContext()
    const { addToCart } = useCartContext()
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const productDetailsPage = (id) => {
        navigate(`/productdetails/${id}`);
        window.scrollTo(0, 0);
    };

    const addToCartHandler = (product_id, productDetails, image) => {
      
        if (token === null) {

            navigate(`/login`);
            window.scrollTo(0, 0);
            return
        }
        
        addToCart(product_id, productDetails, image)
    }


    return (
        <div>
            <div className='container-fluid mt-5 mb-5'>
                <div className='container'>
                    <div className='wish-list p-0 w-100 '>
                        <div className='col-lg-2 text-center'>
                            <h6>WISHLIST</h6>
                        </div>
                        <div className='wish-text wish-text-1 text-center col-lg-10 d-flex justify-content-between'>
                            <h6 className='col-lg-2 col-12'>NAME</h6>
                            <h6 className='col-lg-2 col-12'>SIZE</h6>
                            <h6 className='col-lg-2 col-12'>COLOUR</h6>
                            <h6 className='col-lg-2 col-12'>TOTAL</h6>
                            <h6 className='col-lg-2 col-12'>ADD TO CART</h6>
                            <h6 className='col-lg-2 col-12'>DELETE</h6>
                        </div>
                    </div>
                    <div className='wish-items-shadow'>
                        <div className='wish-items text-center d-flex flex-column w-100'>
                            {wishlistData?.map((item, i) => (
                                <div key={i} className='d-flex flex-row w-100 border-bottom my-2'>
                                    <div
                                        className='col-lg-2 col-md-5 col-sm-5 col-6 img-fluid'
                                        onClick={() => productDetailsPage(item?.product_id?._id)}
                                    >
                                        {item?.product_detail_id?.image?.map((img, i) => (
                                            <img key={i} src={i === 0 && img?.image_url} alt="" />
                                        ))}
                                    </div>
                                    <div className='wish-text wish-text-3 col-lg-10 col-md-7 col-sm-7 col-6 d-flex justify-content-between align-items-center'>
                                        <Link
                                            className='col-lg-2 col-md-12 col-sm-12'
                                            onClick={() => productDetailsPage(item?.product_id?._id)}
                                        >
                                            {item?.product_id?.title.length <= 10
                                                ? item?.product_id?.title
                                                : `${item?.product_id?.title.slice(0, 24)}...`}
                                        </Link>
                                        <h6 className='col-lg-2 col-md-12 col-sm-6 col-6'>
                                            {item?.product_detail_id?.Size}
                                        </h6>
                                        <h6 className='col-lg-2 col-md-12 col-sm-6 col-6'>
                                            {item?.product_detail_id?.color}
                                        </h6>
                                        <h6 className='col-lg-2 col-md-12 col-sm-12 '>&#8377;
                                            {item?.product_detail_id?.sellingPrice}
                                        </h6>
                                        <div className='col-lg-2 col-md-12 col-sm-9 col-9 add_to_cart_delete_box'>
                                            <button onClick={() => addToCartHandler(item?.product_id?._id, item?.product_detail_id?._id, item?.product_detail_id?.image[0]?.image_url)}>ADD TO CART</button>
                                        </div>
                                    
                                        <div className='col-lg-2 col-md-12 col-sm-3 col-3'>
                                            <i className="bi bi-trash3" onClick={() => deleteWishlistProduct(item?._id)}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
