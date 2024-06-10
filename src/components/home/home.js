import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import fea01 from "./img/1.jpg";
import fea02 from "./img/2.webp";
import fea03 from "./img/3.jpg";
import sbc01 from "./img/category/men_casual.jpg";
import sbc02 from "./img/category/men_formal.webp";
import sbc03 from "./img/category/women_casual.jpg";
import sbc04 from "./img/category/women_ethnic.webp";
import sum_banner01 from "./img/summer_banners/1.jpg";
import sum_banner02 from "./img/summer_banners/2.avif";
import sum_banner03 from "./img/summer_banners/3.jpg";
import tp01 from "./img/trending/1.jpg";
import tp02 from "./img/trending/2.webp";
import tp03 from "./img/trending/3.jpg";
import tp04 from "./img/trending/4.webp";
import tp05 from "./img/trending/5.webp";
import tp06 from "./img/trending/6.jpg";
import tp07 from "./img/trending/7.webp";
import tp08 from "./img/trending/8.webp";
import slid01 from "./img/slider/slider1.webp";
import slid02 from "./img/slider/slider2.webp";
import slid03 from "./img/slider/slider3.webp";
import "./home.css";

function Home() {
  const navigate = useNavigate()
  const productDetailsPage = () => {
    navigate("/productdetails")
    window.scrollTo(0, 0);
  }
  const ImageCarousel = () => {
    return (
      <div>
        {/* Slider section start  */}
        <section className="main_slider">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slid01} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slid02} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slid03} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* Slider section end  */}
        {/* Featured products start */}
        <section className="featured_products">
          <div className="container">
            <div className="head_title">
              <h2>Featured Products</h2>
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
                  items: 1, // 1 item in mobile view
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
        <section className="shop_category">
          <div className="container">
            <div className="head_title">
              <h2>Shop by Category</h2>
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
                autoplayTimeout={3000}
                items={4} // Number of items to display
                responsive={{
                  0: {
                    items: 1, // 1 item in mobile view
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
                autoplayTimeout={3000}
                items={4} // Number of items to display
                responsive={{
                  0: {
                    items: 1, // 1 item in mobile view
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

        {/* Summer banner section start  */}
        <section className="sum_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="banner_img">
                  <img src={sum_banner01} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_img">
                  <img src={sum_banner02} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="banner_img">
                  <img src={sum_banner03} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Summer banner section end  */}

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
            <div className="tp_area">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12" >
                  <div className="card" onClick={productDetailsPage}>
                    <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp01} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card" onClick={productDetailsPage}>
                  <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp02} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card" onClick={productDetailsPage}>
                  <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp03} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card" onClick={productDetailsPage}>
                  <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp04} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card" onClick={productDetailsPage}>
                  <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp05} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card" onClick={productDetailsPage}>
                  <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp06} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card" onClick={productDetailsPage}>
                  <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp07} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card" onClick={productDetailsPage}>
                  <div className="add_icons">
                      <div className="icons">
                        <i class="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i class="bi bi-share-fill"></i>
                      </div>
                    </div>
                    <img src={tp08} className="tp_img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Navy Blue Printed Shirt</h5>
                      <p className="card-text">
                        Some quick example text to build on ..
                      </p>
                      <p className="pricing">
                        ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-block addBtn">
                          Add to basket
                        </button>
                        <button className="btn btn-block addBtn ms-2">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trending products section end  */}

        {/* Services area start  */}
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
        {/* Services area end  */}
      </div>
    );
  };

  return (
    <div>
      <ImageCarousel />
    </div>
  );
}

export default Home;
