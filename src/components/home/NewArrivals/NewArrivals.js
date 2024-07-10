
import React, { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useProductContext } from '../../../Context/index.context';
import { useNavigate } from 'react-router-dom';
import bgImg from "../NewArrivals/img/bgImg.avif"

function ShopByCategory() {
    const { productData } = useProductContext();
    const navigate = useNavigate();

    const productDetailsPage = (id) => {
        navigate(`/productdetails/${id}`);
        window.scrollTo(0, 0);
    };

    const [firstFourProducts, setFirstFourProducts] = useState(productData?.slice(0, 4));
    const [lastFourProducts, setLastFourProducts] = useState(productData?.slice(-4));

    useEffect(() => {
        if (productData && productData.length > 0) {
            setFirstFourProducts(productData?.slice(0, 4));
            setLastFourProducts(productData?.slice(-4));
        } else {
            setFirstFourProducts([]);
            setLastFourProducts([]);
        }
    }, [productData]);

    return (
        <div>
            {/* New Arrivals start */}
            <section className="new_arrivals" style={{
                backgroundImage: 'url(' + bgImg + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
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
                            nav={false}
                            dots={false}
                            autoplay
                            autoplayTimeout={5000}
                            items={4}
                            responsive={{
                                0: {
                                    items: 3,
                                },
                                768: {
                                    items: 4,
                                },
                                1200: {
                                    items: 4,
                                },
                            }}
                        >
                            {firstFourProducts?.map((item, i) => (
                                <div key={i} className="item">
                                    <img
                                        src={item?.ProductDetails[0]?.image[0]?.image_url}
                                        alt={item?.product_title}
                                        onClick={() => productDetailsPage(item?._id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <h4>
                                        {item?.title.length <= 5
                                            ? item?.title
                                            : `${item?.title.slice(0, 20)}...`}
                                    </h4>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShopByCategory;
