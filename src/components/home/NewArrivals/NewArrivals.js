import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom';
import sbc01 from "../img/category/men_casual.jpg";
import sbc02 from "../img/category/men_formal.webp";
import sbc03 from "../img/category/women_casual.jpg";
import sbc04 from "../img/category/women_ethnic.webp";

function ShopByCategory() {
    return (
        <div>
            {/* New Arrivals start */}
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
                                <Link to="/productdetails/:id"> <img src={sbc01} alt='' /></Link>
                                <h4>Men's Causal Wear</h4>
                            </div>
                            <div className="item">
                                <img src={sbc02} alt='' />
                                <h4>Men's Formal Wear</h4>
                            </div>
                            <div className="item">
                                <img src={sbc03} alt=''/>
                                <h4>Category 1</h4>
                            </div>
                            <div className="item">
                                <img src={sbc04} alt='' />
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
                                <img src={sbc01} alt='' />
                                <h4>Men's Causal Wear</h4>
                            </div>
                            <div className="item">
                                <img src={sbc02} alt='' />
                                <h4>Men's Formal Wear</h4>
                            </div>
                            <div className="item">
                                <img src={sbc03} alt='' />
                                <h4>Category 1</h4>
                            </div>
                            <div className="item">
                                <img src={sbc04} alt=''/>
                                <h4>Category 1</h4>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/* New Arrivals end  */}
        </div>
    )
}

export default ShopByCategory
