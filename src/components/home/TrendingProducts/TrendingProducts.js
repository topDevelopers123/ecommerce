import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { useCartContext, useProductContext, useWishlistContext } from "../../../Context/index.context";
import Share from './Share';

function TrendingProducts() {
    const { productData } = useProductContext()
    const { addToCart } = useCartContext()
    const { addToWishlist, wishlistData, CheckWishlistData, removeWishlist } = useWishlistContext()
    const { share, setShare } = useProductContext()
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const [product_id, setProduct_id] = useState("")

  
    const productDetailsPage = (id) => {
       
        navigate(`/productdetails/${id}`);
        window.scrollTo(0, 0);
    }

    const addtocartHandler = (product_id, productDetails_id, image) => {
        if (token === null) {

            navigate(`/login`);
            window.scrollTo(0, 0);
            return
        }
        
        addToCart(product_id, productDetails_id, image)
    }

    

    const wishlistHandler = (item_Id, ite_Id) => {
        if (token === null) {
            
            navigate(`/login`);
            window.scrollTo(0, 0);
            return
        }

        const obj = {
            product_id: item_Id,
            product_detail_id: ite_Id
        }
        addToWishlist(obj)
 
    }

   


    const [lastFourProducts, setLastFourProducts] = useState(productData?.slice(-4));

    useEffect(() => {
        if (productData && productData.length > 0) {
            setLastFourProducts(productData?.slice(-8));
        }
        else {
            setLastFourProducts([]);
        }
    }, [productData]);

    return (
        <div>
            <section className="trending_products">
                <div className="container">
                    <div className="head_title">
                        <h2>Trending Products</h2>
                    </div>
                    {/* <div className="nav-main">
                      <ul
                          className="nav nav-tabs filter-tope-group d-flex justify-content-center"
                          id="myTab"
                          role="tablist"
                      >
                          <button className="btn btn-success border-0">
                              All Products
                          </button>

                          <button className="btn">Men's Fashion</button>

                          <button className="btn">Women's Fashion</button>

                          <button className="btn">Kid's</button>
                      </ul>
                  </div> */}

                    {/* Product Start  */}
                    <div className="tp_area">
                        <div className="row">
                           
                            {lastFourProducts?.map((item, i) => (

                                <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="card" >
                                        <>
                                            <img src={item?.ProductDetails[0]?.image[0]?.image_url} onClick={() => productDetailsPage(item._id)} className="tp_img " alt="..." />
                                        </>
                                        <div className="card-body">
                                            <div className="add_icons">
                                                <div className="icons">
                                                    
                                                    <i className={`bi bi-heart-fill ${CheckWishlistData(item?.ProductDetails[0]?._id) ? "text-pink-200" : ""}`} onClick={() => { CheckWishlistData(item?.ProductDetails[0]?._id) ? removeWishlist(item?.ProductDetails[0]?._id) : wishlistHandler(item._id, item.ProductDetails[0]._id)  }}></i>
                                                    
                                                </div>
                                                <div className="icons">
                                                    <i className="bi bi-share-fill" onClick={() => { setShare(!share); setProduct_id(item?._id)}}></i>
                                                    
                                                </div>
                                            </div>
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text m-0">
                                                {item.description}
                                            </p>

                                            {
                                                (item?.ProductDetails[0]?.inStock <= 10 ? <p className="m-0" > InStock : {item.ProductDetails[0]?.inStock} Left</p> : "")
                                            }

                                            <p className="pricing">
                                                ₹{item?.ProductDetails[0]?.sellingPrice} <s> ₹{item.ProductDetails[0]?.MRP}</s> <span>{Math.round((item.ProductDetails[0]?.MRP - item?.ProductDetails[0]?.sellingPrice) / item?.ProductDetails[0]?.MRP * 100)}% off</span>{" "}
                                            </p>
                                            <div className="cart_n_buy">
                                                <button disabled={item?.ProductDetails[0]?.inStock < 1 ? true : false} className="btn btn-block addBtn" onClick={() => addtocartHandler(item._id, item.ProductDetails[0]._id, item?.ProductDetails[0]?.image[0]?.image_url)}>
                                                    Add to basket
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </section>
            {share ? <Share setShare={setShare} product_id={product_id} /> : null}
        </div>
    )
}

export default TrendingProducts
