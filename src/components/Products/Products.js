import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import fea01 from "../home/img/1.jpg";
import fea02 from "../home/img/2.webp";
import fea03 from "../home/img/3.jpg";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useCategoryContext, useProductContext } from "../../Context/index.context";

function Products() {
  const [range, setRenge] = useState(100);
  const [flag, setFlag] = useState(false)
  const { productData, searchdata }=useProductContext()
  const { selectedCategory } =useCategoryContext()
  
  console.log(searchdata)
  
  const navigate = useNavigate()
  const showFilter = () => {  
    flag ? setFlag(false) : setFlag(true)
  }
  
  

  const obj = [
    {
      product_image: "https://assets.ajio.com/medias/sys_master/root/20230623/1gyg/6494b4aed55b7d0c63a300ba/-473Wx593H-464366270-green-MODEL.jpg",
      product_title: "Trending Suit For Women",
      product_real_price: "1899",
      product_discount_price: "1299",
      product_decsription: "some quick example to text to build on",
      discount: "10%",
      stock: "5",
      delivery_status: "Free Delivery"
    },
    {
      product_image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678720119_3019465.jpg?v=2",
      product_title: "Stylish T-shirt For Men",
      product_real_price: "2500",
      product_discount_price: "1999",
      product_decsription: "some quick example to text to build on",
      discount: "15%",
      stock: "3",
      delivery_status: "Free Delivery"
    },
    {
      product_image: "https://assets.ajio.com/medias/sys_master/root/20230718/DElg/64b6be4aeebac147fc7727a1/-473Wx593H-466368522-black-MODEL.jpg",
      product_title: "Girl's Frog",
      product_real_price: "1500",
      product_discount_price: "1100",
      product_decsription: "some quick example to text to build on",
      discount: "20%",
      stock: "10",
      delivery_status: "Free Delivery"
    },
    {
      product_image: "https://www.urbanprints.in/cdn/shop/files/IMG_8772_f2ed6e1b-6bb8-4684-bc0d-ea8341c1790c.webp?v=1709473084",
      product_title: "Fahionable Shirt For Men",
      product_real_price: "1639",
      product_discount_price: "1439",
      product_decsription: "some quick example to text to build on",
      discount: "5%",
      stock: "2",
      delivery_status: "Free Delivery"
    },
    {
      product_image: "https://sunasa.in/cdn/shop/products/IMG_20220130_114744_1500x.jpg?v=1696511459",
      product_title: "Stylish Saree",
      product_real_price: "3999",
      product_discount_price: "3299",
      product_decsription: "some quick example to text to build on",
      discount: "7%",
      stock: "6",
      delivery_status: "Free Delivery"
    },
    {
      product_image: "https://5.imimg.com/data5/SELLER/Default/2022/6/MX/SA/JD/151275676/mens-blue-plain-cotton-kurta-500x500.jpg",
      product_title: "Men's Kurta",
      product_real_price: "2199/-",
      product_discount_price: "1999",
      product_decsription: "some quick example to text to build on",
      discount: "13%",
      stock: "11",
      delivery_status: "Free Delivery"
    },
  ]
  console.log(productData)
  const productDetailsPage = () => {
    navigate("/productdetails")
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div className="container-fluid for_margin  mt-5 mb-5">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12 d-flex  poducts_filter_main_div   col-12 d-flex ">
              <div className={flag ? "col-lg-3 col-md-12 col-sm-12 col-12 hide_filter filter_mini_div " : "col-lg-3 col-md-12 col-sm-12 col-12  filter_mini_div  show_filters"}>
                <div className="d-flex p-2 ">
                  <div className="w-100 range_div">
                    <h4>Filters</h4>
                    <input
                      type="range"
                      min={100}
                      max={5000}
                      onChange={(event) => setRenge(event.target.value)}
                    />
                    <p>
                      Range : {range > 100 ? "0-" : ""} {range}
                    </p>
                    <button className="btn go_btn  fw-bold text-light  ">
                      FILTER
                    </button>
                  </div>

                  <div className="d-flex justify-content-end px-2 w-100 clear_all">
                    <Link to="void::javascript" className="text-decoration-none fw-bold">CLEAR ALL</Link>
                  </div>
                </div>

                <div className={flag ? "flex-direction-column col-12 d-flex flex-wrap" : "flex-direction-row col-12 d-flex flex-wrap"}>
                  <div className="dropdown col-lg-12 col-md-12 col-sm-12 col-12 border mt-3">
                    <button className="btn   dropdown-toggle border-0 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Customer Rating
                    </button>
                    <ul className="dropdown-menu p-0">
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        <li><Link className="dropdown-item" to="#">4★ & above</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">3★ & above</Link></li>
                      </div>


                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">2★ & above</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">1★ & above</Link></li>
                      </div>





                    </ul>
                  </div>


                  <div className="dropdown col-lg-12 col-md-12 col-sm-12 col-12  border mt-3">
                    <button className="btn   dropdown-toggle border-0 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Offers
                    </button>
                    <ul className="dropdown-menu p-0">
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">No Cost EMI</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">Special Price</Link></li>
                      </div>


                    </ul>
                  </div>

                  <div className="dropdown col-lg-12 col-md-12 col-sm-12 col-12 border mt-3">
                    <button className="btn   dropdown-toggle border-0 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Discount
                    </button>
                    <ul className="dropdown-menu p-0">
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">50% or more</Link></li>
                      </div>


                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">40% or more</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">30% or more</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">20% or more</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">10% or more</Link></li>
                      </div>


                    </ul>
                  </div>

                  <div className="dropdown  col-lg-12 col-md-12 col-sm-12 col-12  border mt-3">
                    <button className="btn dropdown-toggle border-0 text-start " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Fabric
                    </button>
                    <ul className="dropdown-menu p-0">

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">Linen Blend</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">Polyester</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">Nylon</Link></li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" /><li><Link className="dropdown-item" to="#">Linen Blend</Link></li>
                      </div>

                    </ul>
                  </div>
                </div>

              </div>

         
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-end w-100">
                    <button type="button" className="btn filter_btn  fw-bold text-light d-flex justify-content-center align-items-center " onClick={showFilter}>
                      {flag ? "CLOSE" : ` FILTER`}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-9 col-md-12 col-sm-12 col-12 d-flex flex-wrap card_main_div  ">
                {productData?.map((item) => 
                (<div className="col-lg-4 col-md-6 col-sm-6  col-6 p-3  card_div" >
                 
                  <div className="d-flex flex-column justify-content-center border card_mini_div  position-relative overflow-hidden  w-90">
                    <img src={item.product_image} alt={item.product_title} />
                    <h6 className="mt-2 ps-2">{item.title}</h6>
                    <p className="ps-2 py-0 my-0 desc">{item.description.slice(0,30)}...</p>
                    <div className="d-flex flex-column">
                      <div>
                        <p className="ps-2 fw-bold text-success my-0 py-0">{item.delivery_status}</p>
                        <p className="ps-2 fw-bold text-secondary my-0 py-0">ONLY {item?.ProductDetails?.inStock} LEFT </p>
                      </div>
                      <div className="d-flex">
                        <del className=" ps-2 fw-bold text-dark"><p className="fw-bold  fs-6 text-secondary">  ₹{item.product_real_price} </p></del>
                        <p className=" ps-2 fs-5  fw-bold text-success">  ₹{item.product_discount_price}</p>
                        <p className="ms-1
                          
                          
                          
                          
                          fw-bold fs-7">{item.discount}OFF</p>
                      </div>



                      <div className="discount_div d-flex justify-content-center align-items-center">

                        <p className="mb-0 text-light fw-bold">3 % OFF</p>
                      </div>

                      <div className="add_to_cart_div  py-2 px-2 d-flex align-items-center  justify-content-between w-100">
                        <div className="">
                          <button type="button">Add To Cart</button>
                        </div>

                        <div className="px-2 d-flex align-items-center justify-content-between">
                          <div className="icons">
                            <i className="bi bi-share px-2 mx-1" title="Share"></i>

                          </div>
                          <div className="icons">
                            <i className="bi bi-heart px-2 mx-1" title="Wishlist"></i>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>)


                )}

                {/*<div className="  container pagination_div d-flex justify-content-center   p-4  border">
<nav aria-label="Page navigation example  border border-dark d-flex justify-content-center align-items-center col-12">
  <ul className="pagination justify-content-center ">
    <li className="page-item disabled col-md-10 col-sm-10 col-10">
      <Link className="page-link text-center" to="#" tabindex="-1">Previous</Link>
    </li>
    <li className="page-item col-2"><Link className="page-link text-center text-dark" to="#">1</Link></li>
    <li className="page-item col-2"><Link className="page-link text-center text-dark" to="#">2</Link></li>
    <li className="page-item col-2"><Link className="page-link text-center text-dark" to="#">3</Link></li>
    <li className="page-item col-4">
      <Link className="page-link text-center text-secondary " to="#">Next</Link>
    </li>
  </ul>
</nav>
</div>
*/}


              </div>


            </div>
          </div>
        </div>
      </div>


      <section className="featured_products p-0">
        <div className="container">
          <div className="head_title">
            <h2 className="fp_heading" data-text="Featured Products">
              Related Products
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
                items: 3, // 1 item in mobile view
              },
              568: {
                items: 3, // 3 items in tablet view
              },
              768: {
                items: 3, // 3 items in tablet view
              },
              1200: {
                items: 4, // 4 items in desktop view
              },
            }}
          >
            <div className="item item2">
              <img src={fea01} alt="Featured Product 1" />
            </div>
            <div className="item item2">
              <img src={fea02} alt="Featured Product 2" />
            </div>
            <div className="item item2">
              <img src={fea03} alt="Featured Product 3" />
            </div>
          </OwlCarousel>
        </div>
      </section>


    </div>




  );
}

export default Products;
