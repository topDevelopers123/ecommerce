import React, { useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import sbc01 from "../img/category/men_casual.jpg";
import sbc02 from "../img/category/men_formal.webp";
import sbc03 from "../img/category/women_casual.jpg";
import sbc04 from "../img/category/women_ethnic.webp";
import { useProductContext } from '../../../Context/index.context';
import { useNavigate } from 'react-router-dom';



function ShopByCategory() {
    const { productData } = useProductContext();
    console.log(productData)

    const [allProductData, setAllProductData] = useState(productData)
    const navigate = useNavigate()

    const ArrivalProductNavigate = (id) => {
        navigate(`/ArrivalProductNavigate/${id}`)
        window.scrollTo(0, 0);
    }

    return (
        <div>
            {/* New Arrivals start */}
            <section className="new_arrivals">
                <div className="container">
                    <div className="head_title">
                        <h2>New Arrivals</h2>
                        <div className="bdr"></div>
                    </div>
                    {/* {allProductData && allProductData?.map((item) => */}
                    <div className="categories" >

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

                            {allProductData && allProductData?.map((item, i) =>
                                <div key={i} className="item" >

                                    <img src={item?.ProductDetails[0]?.image[0]?.image_url} alt={item?.product_title} onClick={() => ArrivalProductNavigate(item?._id)} />
                                    <h4>Men's Causal Wear</h4>
                                </div>
                            )}

                            {/* <div className="item">
                                <img src={sbc02} alt='' />
                                <h4>Men's Formal Wear</h4>
                            </div>
                            <div className="item">
                                <img src={sbc03} alt='' />
                                <h4>Category 1</h4>
                            </div>
                            <div className="item">
                                <img src={sbc04} alt='' />
                                <h4>Category 1</h4>
                            </div> */}

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
                                <img src={sbc04} alt='' />
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
