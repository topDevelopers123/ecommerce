import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useProductContext } from '../../../Context/index.context';
import { useNavigate } from 'react-router-dom';

function FeaturedProducts() {
    const { productData } = useProductContext();
    const navigate = useNavigate();

    const productDetailsPage = (id) => {
        navigate(`/productdetails/${id}`);
        window.scrollTo(0, 0);
    };

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
                                items: 4,
                            },
                            768: {
                                items: 3,
                            },
                            1200: {
                                items: 4,
                            },
                        }}
                    >

                        {productData?.map((item, i) => (
                            <div key={i} className="item">
                                <img
                                    src={item?.ProductDetails[0]?.image[0]?.image_url}
                                    alt={item?.product_title}
                                    onClick={() => productDetailsPage(item?._id)}
                                />
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
            {/* Featured products end  */}
        </div>
    )
}

export default FeaturedProducts
