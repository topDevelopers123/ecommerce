// import React from 'react'
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { useProductContext } from '../../../Context/index.context';
// import { useNavigate } from 'react-router-dom';



// function ShopByCategory() {
//     const { productData } = useProductContext();
//     console.log(productData)

//     const navigate = useNavigate()

//     const ArrivalProductNavigate = (id) => {
//         navigate(`/ArrivalProductNavigate/${id}`)
//         window.scrollTo(0, 0);
//     }

//     return (
//         <div>
//             {/* New Arrivals start */}
//             <section className="new_arrivals">
//                 <div className="container">
//                     <div className="head_title">
//                         <h2>New Arrivals</h2>
//                         <div className="bdr"></div>
//                     </div>
//                     <div className="categories" >

//                         <OwlCarousel
//                             className="owl-theme"
//                             loop
//                             margin={10}
//                             nav={false} // Hide navigation arrows
//                             dots={false} // Hide dots
//                             autoplay
//                             autoplayTimeout={5000}
//                             items={4} // Number of items to display
//                             responsive={{
//                                 0: {
//                                     items: 3, // 1 item in mobile view
//                                 },
//                                 768: {
//                                     items: 4, // 3 items in tablet view
//                                 },
//                                 1200: {
//                                     items: 4, // 4 items in desktop view
//                                 },
//                             }}
//                         >

//                             {productData?.map((item, i) =>
//                                 <div key={i} className="item" >

//                                     <img src={item?.ProductDetails[0]?.image[0]?.image_url} alt={item?.product_title} onClick={() => ArrivalProductNavigate(item?._id)} />
//                                     <h4>{productData[i]?.title}</h4>
//                                 </div>
//                             )}

//                         </OwlCarousel>
//                         <OwlCarousel
//                             className="owl-theme"
//                             loop
//                             margin={10}
//                             nav={false} // Hide navigation arrows
//                             dots={false} // Hide dots
//                             autoplay
//                             autoplayTimeout={5000}
//                             items={4} // Number of items to display
//                             responsive={{
//                                 0: {
//                                     items: 3, // 1 item in mobile view
//                                 },
//                                 768: {
//                                     items: 4, // 3 items in tablet view
//                                 },
//                                 1200: {
//                                     items: 4, // 4 items in desktop view
//                                 },
//                             }}
//                         >
//                             {productData?.map((item, i) =>
//                                 <div key={i} className="item" >

//                                     <img src={item?.ProductDetails[0]?.image[0]?.image_url} alt={item?.product_title} onClick={() => ArrivalProductNavigate(item?._id)} />
//                                     <h4>{productData[i]?.title}</h4>
//                                 </div>
//                             )}

//                         </OwlCarousel>
//                     </div>

//                 </div>
//             </section>
//             {/* New Arrivals end  */}
//         </div>
//     )
// }

// export default ShopByCategory


















import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useProductContext } from '../../../Context/index.context';
import { useNavigate } from 'react-router-dom';

function ShopByCategory() {
    const { productData } = useProductContext();
    console.log(productData);

    const navigate = useNavigate();

    const ArrivalProductNavigate = (id) => {
        navigate(`/ArrivalProductNavigate/${id}`);
        window.scrollTo(0, 0);
    };

    // Get the first 4 items
    const firstFourProducts = productData?.slice(0, 4);
    // Get the last 4 items
    const lastFourProducts = productData?.slice(4,8);

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
                                    items: 3, // 3 items in mobile view
                                },
                                768: {
                                    items: 4, // 4 items in tablet view
                                },
                                1200: {
                                    items: 4, // 4 items in desktop view
                                },
                            }}
                        >
                            {firstFourProducts?.map((item, i) => (
                                <div key={i} className="item">
                                    <img src={item?.ProductDetails[0]?.image[0]?.image_url} alt={item?.product_title} onClick={() => ArrivalProductNavigate(item?._id)} />
                                    <h4>{firstFourProducts[i]?.title}</h4>
                                </div>
                            ))}
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
                                    items: 3, // 3 items in mobile view
                                },
                                768: {
                                    items: 4, // 4 items in tablet view
                                },
                                1200: {
                                    items: 4, // 4 items in desktop view
                                },
                            }}
                        >
                            {lastFourProducts?.map((item, i) => (
                                <div key={i} className="item">
                                    <img src={item?.ProductDetails[0]?.image[0]?.image_url} alt={item?.product_title} onClick={() => ArrivalProductNavigate(item?._id)} />
                                    <h4>{item?.product_title}</h4>
                                </div>
                            ))}
                        </OwlCarousel>

                    </div>
                </div>
            </section>
            {/* New Arrivals end */}
        </div>
    );
}

export default ShopByCategory;
