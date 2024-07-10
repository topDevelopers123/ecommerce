
import React, { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import bgImg from "../NewArrivals/img/bg.avif"
import { useProductContext } from '../../../Context/index.context';
import { useNavigate } from 'react-router-dom';

function FeaturedProducts() {
    const { productData } = useProductContext();
    const navigate = useNavigate();
    const [shuffledProducts, setShuffledProducts] = useState(productData);

    const productDetailsPage = (id) => {
        navigate(`/productdetails/${id}`);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (productData) {
            setShuffledProducts(shuffleArray([...productData]));
        }
    }, [productData]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div>
            <section className="featured_products">
                <div className="container">
                    <div className="head_title">
                        <h2 className="fp_heading" data-text="Featured Products">
                            Featured Products
                        </h2>
                        <div className="bdr"></div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 d-md-block d-none'>
                            <div className='fp_aside_text' style={{
                                backgroundImage: 'url(' + bgImg + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover', backgroundPosition: 'center'
                            }}>
                                <h5>Discover the Best Deals <br /> on Top-Rated Products!</h5>
                            </div>
                        </div>
                        <div className='col-md-9 col-sm-12 col-12'>
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
                                {shuffledProducts?.map((item, i) => (
                                    <div key={i} className="item">
                                        <img
                                            src={item?.ProductDetails[0]?.image[0]?.image_url}
                                            alt={item?.product_title}
                                            onClick={() => productDetailsPage(item?._id)}
                                        />
                                        <h5 className="card-title mt-2">{item?.title.length <= 5
                                            ? item?.title
                                            : `${item?.title.slice(0, 15)}...`}</h5>
                                        <p className="pricing">
                                            ₹{item?.ProductDetails[0]?.sellingPrice} <s> ₹{item.ProductDetails[0]?.MRP}</s> <span>{Math.round((item.ProductDetails[0]?.MRP - item?.ProductDetails[0]?.sellingPrice) / item?.ProductDetails[0]?.MRP * 100)}% off</span>{" "}
                                        </p>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedProducts;
