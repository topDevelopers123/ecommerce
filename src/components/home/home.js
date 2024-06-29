import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useCartContext, useProductContext, useWishlistContext } from "../../Context/index.context";
import fea01 from "./img/1.jpg";
import fea02 from "./img/2.webp";
import fea03 from "./img/3.jpg";
import sbc01 from "./img/category/men_casual.jpg";
import sbc02 from "./img/category/men_formal.webp";
import sbc03 from "./img/category/women_casual.jpg";
import sbc04 from "./img/category/women_ethnic.webp";
import tp01 from "./img/trending/1.jpg";
import tp02 from "./img/trending/2.webp";
import tp03 from "./img/trending/3.jpg";
import tp04 from "./img/trending/4.webp";
import tp05 from "./img/trending/5.webp";
import tp06 from "./img/trending/6.jpg";
import tp07 from "./img/trending/7.webp";
import tp08 from "./img/trending/8.webp";



import "./home.css";
import axios from "axios";


function Home() {
  const { productData } = useProductContext()
  const { addToCart } = useCartContext()
  const { addToWishlist } = useWishlistContext()
  const [bannner, setBanner] = useState(null);
  const [shortBanner, setShortBanner] = useState(null);
  // const [sendWishlistData, setSendWishlistData] = useState({
  //   product_id:"",
  //   product_detail_id:""
  // })

  const navigate = useNavigate();
  const productDetailsPage = (id) => {
    navigate(`/productdetails/${id}`);
    window.scrollTo(0, 0);
  }

  const addtocartHandler = (product_id, productDetails_id) => {
    console.log(product_id, productDetails_id);
    addToCart(product_id, productDetails_id, addToCart.quantity)
  }

  const wishlistHandler = (item_Id, ite_Id) => {
    const obj = {
      product_id: item_Id,
      product_detail_id: ite_Id
    }

    addToWishlist(obj)
  }





  const getbannerData = async () => {
    try {
      const resp = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/banner/get'
      )
      const resp2 = await axios.get('https://e-commerce-backend-4tmn.onrender.com/api/v1/shortBanner/get'
      )
      setBanner(resp.data.data)
      setShortBanner(resp2.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getbannerData();

  }, [])


  return (
    <>
      <div>
        {/* Slider section start  */}
        <section className="main_slider mt-3">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {bannner?.map((item, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={item?.image?.image_url} className="d-block w-100" alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        {/* Slider section end  */}

        {/* Featured products start */}
        <section className="featured_products">
          <div className="container">
            <div className="head_title">
              <h2 className="fp_heading" data-text="Featured Products">
                Featured Products
              </h2>
              <div className="bdr"></div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              items={4}
              dots={false}
              responsive={{
                0: {
                  items: 4, // 1 item in mobile view
                },
                768: {
                  items: 3, // 3 items in tablet view
                },
                1200: {
                  items: 4, // 4 items in desktop view
                },
              }}
            >
              <div className="item">
                <img src={fea01} alt="Featured Product 1" />
              </div>
              <div className="item">
                <img src={fea02} alt="Featured Product 2" />
              </div>
              <div className="item">
                <img src={fea03} alt="Featured Product 3" />
              </div>
            </OwlCarousel>
          </div>
        </section>
        {/* Featured products end  */}

        {/* Shop by category start */}
        <section className="new_arrivals">
          <div className="container">
            <div className="head_title">
              <h2>New Arrivals</h2>
              <div className="bdr"></div>
            </div>
            <div className="categories">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false} // Hide navigation arrows
                dots={false} // Hide dots
                autoplay
                autoplayTimeout={5000}
                items={4} // Number of items to display
                responsive={{
                  0: {
                    items: 3, // 1 item in mobile view
                  },
                  768: {
                    items: 4, // 3 items in tablet view
                  },
                  1200: {
                    items: 4, // 4 items in desktop view
                  },
                }}
              >
                <div className="item">
                  <img src={sbc01} />
                  <h4>Men's Causal Wear</h4>
                </div>
                <div className="item">
                  <img src={sbc02} />
                  <h4>Men's Formal Wear</h4>
                </div>
                <div className="item">
                  <img src={sbc03} />
                  <h4>Category 1</h4>
                </div>
                <div className="item">
                  <img src={sbc04} />
                  <h4>Category 1</h4>
                </div>
              </OwlCarousel>
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false} // Hide navigation arrows
                dots={false} // Hide dots
                autoplay
                autoplayTimeout={5000}
                items={4} // Number of items to display
                responsive={{
                  0: {
                    items: 3, // 1 item in mobile view
                  },
                  768: {
                    items: 4, // 3 items in tablet view
                  },
                  1200: {
                    items: 4, // 4 items in desktop view
                  },
                }}
              >
                <div className="item">
                  <img src={sbc01} />
                  <h4>Men's Causal Wear</h4>
                </div>
                <div className="item">
                  <img src={sbc02} />
                  <h4>Men's Formal Wear</h4>
                </div>
                <div className="item">
                  <img src={sbc03} />
                  <h4>Category 1</h4>
                </div>
                <div className="item">
                  <img src={sbc04} />
                  <h4>Category 1</h4>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* Shop by category end  */}

        {/* Short Banner  */}

        <section className="sum_banner">
          <div className="container">
            <div className="row">
              {shortBanner?.map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div className="banner_img">
                    <figure>
                      <img src={item?.image?.image_url} alt={`Banner ${i + 1}`} />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Short Banner  */}

        {/* Trending products section start  */}
        <section className="trending_products">
          <div className="container">
            <div className="head_title text-center">
              <h2>Trending Products</h2>
            </div>
            <div className="nav-main">
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
            </div>

            {/* Product Start  */}
            <div className="tp_area">
              <div className="row">
                {productData?.map((item, i) => (

                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card" >


                      <>


  <img src={item?.ProductDetails[0]?.image[0]?.image_url} onClick={() => productDetailsPage(item._id)} className="tp_img " alt="..." />
                          </>


    <div className="card-body">
      <div className="add_icons">
        <div className="icons">
          <i className="bi bi-heart-fill" onClick={() => wishlistHandler(item._id, item.ProductDetails[0]._id)}></i>
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
        (item?.ProductDetails[0]?.inStock <= 100 ? <p className="m-0" > InStock : {item.ProductDetails[0]?.inStock} Left</p> : "")
      }

      <p className="pricing">


        ₹{item.ProductDetails[0].sellingPrice} <s> ₹{item.ProductDetails[0]?.MRP}</s> <span>{Math.round((item.ProductDetails[0]?.MRP - item.ProductDetails[0].sellingPrice) / item.ProductDetails[0]?.MRP * 100)}% off</span>{" "}
      </p>
      <div className="d-flex cart_n_buy">

        <button className="btn btn-block addBtn" onClick={() => addtocartHandler(item._id, item.ProductDetails[0]._id)}>
          Add to basket
        </button>
        <button className="btn btn-block addBtn ms-2">
          Buy Now
        </button>
      </div>
    </div>
                      </div >
                    </div >
                 

                ))
}



              </div >
            </div >
          </div >
        </section >
  {/* Trending products section end  */ }

{/* Services area start  */ }
<section className="shop-services section home">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service">
          <i className="bi bi-rocket  "></i>
          <h4>Free shiping</h4>
          <p className="m-0">Orders over $100</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service">
          <i className="bi bi-arrow-return-right"></i>
          <h4>Free Return</h4>
          <p className="m-0">Within 30 days returns</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service">
          <i className="bi bi-lock"></i>
          <h4>Sucure Payment</h4>
          <p className="m-0">100% secure payment</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-service" style={{ borderRight: "none" }}>
          <i className="bi bi-tags"></i>
          <h4>Best Price</h4>
          <p className="m-0">Guaranteed price</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Services area end  */ }
      </div >
  </>
  );

}


export default Home;