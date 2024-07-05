import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import fea01 from "../img/1.jpg";
import fea02 from "../img/2.webp";
import fea03 from "../img/3.jpg";

function FeaturedProducts() {
    return (
        <div>
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
                        nav={false}
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
        </div>
    )
}

export default FeaturedProducts
