import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./productDetail.css";
import model from "./img/model.webp";
import p01 from "./img/p1.webp";
import p02 from "./img/p2.webp";
import p03 from "./img/p3.webp";
import p04 from "./img/p4.webp";
import p05 from "./img/p5.webp";
import p06 from "./img/p6.webp";
import color1 from "./img/color1.webp";
import color2 from "./img/color2.webp";
import tp01 from "../home/img/trending/1.jpg";

function productDetail() {
    
  return (
    <div>
      {/* Product details section start */}
      <section className="product-detail-sec">
        <div className="container">
          <div className="product_detail">
            <div className="row details-snippet1">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-2 col-sm-2 mini-preview order-2 order-sm-1">
                    <img className="img-fluid" src={p01} alt="preview" />
                    <img className="img-fluid" src={p02} alt="preview" />
                    <img className="img-fluid" src={p03} alt="preview" />
                    <img className="img-fluid" src={p04} alt="preview" />
                    <img className="img-fluid" src={p05} alt="preview" />
                    <img className="img-fluid" src={p06} alt="preview" />
                  </div>
                  <div className="col-md-10 col-sm-10 order-1 order-sm-2">
                    <div className="product-image">
                      <img className="img-fluid" src={model} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="prod_desc_sec">
                <div className="category mt-sm-4">
                  <span className="theme-text">Category:</span> Women
                </div>
                <div className="title">Printed Kurta Set</div>
                <div className="theme-text mr-2">Product Ratings: </div>
                <div className="reviews-counter">
                  <div className="rate">
                    <input
                      type="radio"
                      id="star5"
                      name="rate"
                      value="5"
                      checked
                    />
                    <label for="star5" title="text">
                      5 stars
                    </label>
                    <input
                      type="radio"
                      id="star4"
                      name="rate"
                      value="4"
                      checked
                    />
                    <label for="star4" title="text">
                      4 stars
                    </label>
                    <input
                      type="radio"
                      id="star3"
                      name="rate"
                      value="3"
                      checked
                    />
                    <label for="star3" title="text">
                      3 stars
                    </label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">
                      2 stars
                    </label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">
                      1 star
                    </label>
                  </div>
                  <span>3 Reviews</span>
                </div>

                <div className="price my-2">
                  ₹389<strike className="original-price"> ₹1,999</strike> <span>13% off</span>
                </div>
                <div className="delivery">Free Delivery</div>
                <div className="theme-text subtitle mb-3">Brief Description:</div>
                <div className="brief-description">
                  <p><strong>Product Name : </strong> Printed Kurta Pant Set</p>
                  <p><strong>Fabric : </strong> Rayon</p>
                  <p><strong>Sleeve Length : </strong> 3 Quarter Sleeve</p>
                  <p><strong>Availability : </strong> <span className="text-success">In stock</span></p>
                </div>
                {/* <div>
                  <div className="subtitle my-3 theme-text">Colors:</div>
                  <div className="select-colors d-flex">
                    <div className="color blue"></div>
                    <div className="color silver"></div>
                    <div className="color black"></div>
                  </div>
                </div>*/}
                <hr /> 
                <div>
                  <div className="subtitle my-3 theme-text">Colors:</div>
                  <div className="select-colors d-flex">
                    <div className="color blue">
                        <img src={color1}></img>
                    </div>
                    <div className="color pink">
                    <img src={color2}></img>
                    </div>
                   
                  </div>
                </div>
                <hr />
                <div>
                  <div className="subtitle my-3 theme-text">Size:</div>
                  <div className="select-size d-flex">
                    <div className="size s">S</div>
                    <div className="size m">M</div>
                    <div className="size l">L</div>
                    <div className="size xl">XL</div>
                    <div className="size xxl">XXL</div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6 col-6 col-lg-4">
                    <div className="product-count">
                      <label for="size">Quantity</label>
                      <form action="#" className="d-flex">
                        <div className="qtyminus">-</div>
                        <input
                          type="text"
                          name="quantity"
                          value="1"
                          className="qty"
                        />
                        <div className="qtyplus">+</div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-1 col-1 col-lg-1">
                    <div className="wishlist_btn">
                      <i className="bi bi-heart"></i>
                    </div>
                  </div>
                  <div className="col-md-1 col-1 col-lg-1">
                    <div className="wishlist_btn ms-2">
                      <i className="bi bi-share-fill"></i>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="d-flex">
                    <button className="btn btn-block addBtn">
                      Add to basket
                    </button>
                    <button className="btn btn-block addBtn ms-3">
                      Buy Now
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="additional-details my-5 text-center">
              <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    data-bs-toggle="tab"
                    to="#home"
                  >
                    Description
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" to="#menu1">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" to="#menu2">
                    Specifications
                  </Link>
                </li>
              </ul>
              <div className="tab-content mt-4 mb-3">
                <div className="tab-pane container active" id="home">
                  <div className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident magni assumenda consectetur facere eius. Minus
                    reprehenderit placeat ullam vel ab eaque sequi impedit,
                    ipsum soluta temporibus fugit ipsa. Dolor libero modi
                    molestiae dicta, vitae minus laborum error cum consequatur
                    autem minima eveniet porro obcaecati quibusdam possimus eos,
                    debitis sint magnam, explicabo accusantium aspernatur ipsa
                    repellat tempore nihil. Cum placeat voluptate dignissimos
                    dicta harum consectetur, nemo debitis tempore. Quod culpa
                    perspiciatis unde natus. Modi expedita, ab repellendus
                    reiciendis sed voluptate, culpa laborum ad, consectetur quas
                    tempora quo? Quibusdam doloribus magnam maxime, accusamus
                    officiis odit reiciendis labore laudantium. Molestiae
                    corporis temporibus ad?
                  </div>
                </div>
                <div className="tab-pane container fade" id="menu1">
                  <div className="review">
                    <p>Please add your reviews here.</p>
                  </div>
                </div>
                <div className="tab-pane container fade" id="menu2">
                  <div className="specification">
                    <p>Please add specifications here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product details section end */}

       {/* Featured products start */}
       <section className="interested_prod">
          <div className="container">
            <div className="head_title">
              <h2 className="fp_heading" data-text="Featured Products">
                You might interested in
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
                  items: 1, // 1 item in mobile view
                },
                768: {
                  items: 2, // 3 items in tablet view
                },
                1200: {
                  items: 4, // 4 items in desktop view
                },
              }}
            >
              <div className="item">
              <div className="card">
                    <div className="add_icons">
                      <div className="icons">
                        <i className="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i className="bi bi-share-fill"></i>
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
              <div className="item">
              <div className="card">
                    <div className="add_icons">
                      <div className="icons">
                        <i className="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i className="bi bi-share-fill"></i>
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
              <div className="item">
              <div className="card">
                    <div className="add_icons">
                      <div className="icons">
                        <i className="bi bi-heart-fill"></i>
                      </div>
                      <div className="icons">
                        <i className="bi bi-share-fill"></i>
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
            </OwlCarousel>
          </div>
        </section>
        {/* Featured products end  */}
    </div>
  );
}

export default productDetail;
