import React from "react";
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

function productDetail() {
    return (
        <div>
            {/* Product details section start */}
            <section className='product-detail-sec'>
                <div className='container'>
                    <div className='product_detail'>
                        <div className="row details-snippet1">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-2 col-sm-2 mini-preview">
                                        <img className="img-fluid" src={p01} alt="preview" />
                                        <img className="img-fluid" src={p02} alt="preview" />
                                        <img className="img-fluid" src={p03} alt="preview" />
                                        <img className="img-fluid" src={p04} alt="preview" />
                                        <img className="img-fluid" src={p05} alt="preview" />
                                        <img className="img-fluid" src={p06} alt="preview" />
                                    </div>
                                    <div className="col-md-10 col-sm-10">
                                        <div className="product-image">
                                            <img className="img-fluid" src={model} alt="product" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="category mt-sm-4"><span className="theme-text">Category:</span> Women</div>
                                <div className="title">Printed Kurta Set</div>
                                <div className="theme-text mr-2">Product Ratings: </div>
                                <div class="reviews-counter">
                                    <div class="rate">
                                        <input type="radio" id="star5" name="rate" value="5" checked />
                                        <label for="star5" title="text">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" checked />
                                        <label for="star4" title="text">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" checked />
                                        <label for="star3" title="text">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label for="star2" title="text">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label for="star1" title="text">1 star</label>
                                    </div>
                                    <span>3 Reviews</span>
                                </div>

                                <div className="price my-2">₹389<strike className="original-price"> ₹1,999</strike></div>
                                <div className="theme-text subtitle">Brief Description:</div>
                                <div className="brief-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta reiciendis odio consequuntur sunt magnam eum facilis quaerat dolor aperiam labore facere amet officiis, unde quae distinctio earum culpa omnis soluta voluptate tempora placeat?.
                                </div>
                                <div>
                                    <div className="subtitle my-3 theme-text">Colors:</div>
                                    <div className="select-colors d-flex">
                                        <div className="color blue"></div>
                                        <div className="color silver"></div>
                                        <div className="color black"></div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-3">
                                        <div class="product-count">
                                            <label for="size">Quantity</label>
                                            <form action="#" class="d-flex">
                                                <div class="qtyminus">-</div>
                                                <input type="text" name="quantity" value="1" class="qty" />
                                                <div class="qtyplus">+</div>
                                            </form>
                                        </div>
                                    </div>
                                   <div className="col-md-3">
                                    <div className="wishlist_btn">
                                            <i class="bi bi-heart"></i>
                                    </div>
                                   </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-md-4">
                                        <button className="btn btn-block addBtn">Add to basket</button>
                                    </div>
                                    <div className="col-md-3"><button className="btn btn-block addBtn">Buy Now</button></div>
                                </div>

                            </div>
                        </div>
                        <div className="additional-details my-5 text-center">
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" data-bs-toggle="tab" href="#home">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#menu1">Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#menu2">Specifications</a>
                                </li>
                            </ul>
                            <div className="tab-content mt-4 mb-3">
                                <div className="tab-pane container active" id="home">
                                    <div className="description">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni assumenda consectetur facere eius. Minus reprehenderit placeat ullam vel ab eaque sequi impedit, ipsum soluta temporibus fugit ipsa. Dolor libero modi molestiae dicta, vitae minus laborum error cum consequatur autem minima eveniet porro obcaecati quibusdam possimus eos, debitis sint magnam, explicabo accusantium aspernatur ipsa     repellat tempore nihil. Cum placeat voluptate dignissimos dicta harum consectetur, nemo debitis tempore. Quod culpa perspiciatis unde natus. Modi expedita, ab repellendus reiciendis sed voluptate, culpa laborum ad, consectetur quas tempora quo? Quibusdam doloribus magnam maxime, accusamus officiis odit reiciendis labore laudantium. Molestiae corporis temporibus ad?
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
        </div>
    );
}

export default productDetail;
