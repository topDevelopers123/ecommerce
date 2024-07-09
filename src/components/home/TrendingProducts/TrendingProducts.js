import React from 'react'
import { useNavigate } from "react-router-dom";
import { useCartContext, useProductContext, useWishlistContext } from "../../../Context/index.context";

function TrendingProducts() {
    const { productData } = useProductContext()
    const { addToCart } = useCartContext()
    const { addToWishlist } = useWishlistContext()
    const navigate = useNavigate();
    const productDetailsPage = (id) => {
        navigate(`/productdetails/${id}`);
        window.scrollTo(0, 0);
    }

    const addtocartHandler = (product_id, productDetails_id, image) => {
        
        addToCart(product_id, productDetails_id, image)
    }

    const wishlistHandler = (item_Id, ite_Id) => {
        const obj = {
            product_id: item_Id,
            product_detail_id: ite_Id
        }

        addToWishlist(obj)
    }
  return (
    <div>
          {/* Trending products section start  */}
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
                          {productData?.map((item, i) => (

                              <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-6">
                                  <div className="card" >
                                      <>
                                          <img src={item?.ProductDetails[0]?.image[0]?.image_url} onClick={() => productDetailsPage(item._id)} className="tp_img " alt="..." />
                                      </>
                                      <div className="card-body">
                                          <div className="add_icons">
                                              <div className="icons">
                                                  <i className={"bi bi-heart-fill"} onClick={() => wishlistHandler(item._id, item.ProductDetails[0]._id)}></i>
                                              </div>
                                              <div className="icons">
                                                  <i className="bi bi-share-fill"></i>
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
                                              <button className="btn btn-block addBtn" onClick={() => addtocartHandler(item._id, item.ProductDetails[0]._id, item?.ProductDetails[0]?.image[0]?.image_url )}>
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
          {/* Trending products section end  */}
    </div>
  )
}

export default TrendingProducts
