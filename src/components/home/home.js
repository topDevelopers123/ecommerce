import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MainSlier from "./Mainlider/MainSlier";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import NewArrivals from "./NewArrivals/NewArrivals"
import ShortBanners from "./ShortBanners/ShortBanners";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import Services from "./Services/Services";
import "./home.css";
import { useProductContext } from "../../Context/index.context";

function Home() {
  const {productData} = useProductContext()
  const [data,setData] = useState([])
  

  useEffect(() => {
    setData(productData);
  }, [productData]);


  return (
    <>
      <div>
        <MainSlier />
        <FeaturedProducts data1={productData}/>
        <NewArrivals data={productData} />
        <ShortBanners />
        <TrendingProducts />
        <Services />        
      </div>
    </>
  );

}


export default Home;