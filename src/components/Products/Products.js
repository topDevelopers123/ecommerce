import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./products.css";
import fea01 from "../home/img/1.jpg";
import fea02 from "../home/img/2.webp";
import fea03 from "../home/img/3.jpg";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import { useCartContext, useCategoryContext, useProductContext, useWishlistContext } from "../../Context/index.context";

function Products() {
  
  const { addToCart } = useCartContext()
  const { addToWishlist } = useWishlistContext()
  let param = useLocation()
  const searchParams = new URLSearchParams(param.search);

  const [range, setRenge] = useState(100);
  const [flag, setFlag] = useState(false)
  const { productData } = useProductContext()
  const [allProductData, setAllProductData] = useState(productData)
 
  

  const { selectedCategory } = useCategoryContext()
  // console.log(param?.main)

  const main = searchParams.get("category")
  const sub_category = searchParams.get("subcategory")
  const sub_inner_Category = searchParams.get("sunInnercategory")
  // console.log(main, sub_category, sub_inner_Category);
  // console.log(main);
  // console.log(productData);
 


  useEffect(() => {
    let data = productData?.filter((item) => {
      return item?.category[0]?.category_name === main

     })
     
    
    
     const newData = data?.filter((item)=>{
       return  item.sub_category[0].sub_category_name === sub_category
     }) 
    })



    const newData = data?.filter((item) => {
      return item.sub_category[0].sub_category_name === sub_category
    })

    const finalData = newData?.filter((item) => {
      return item.sub_inner_category[0].sub_inner_category_name === sub_inner_Category
    })



    setAllProductData(finalData?.length > 0 ? finalData : newData?.length > 0 ? newData : data);

  }, [param, productData])

  const navigate = useNavigate()
  const showFilter = () => {
    flag ? setFlag(false) : setFlag(true)
  }
 
  const addToCartHandler =(product_id, productDetailsId) => {
    addToCart(product_id, productDetailsId)
  }

  const addToWishlistHandler =(product_id, product_detail_id)=>{
    const data = {
      product_id:product_id,
      product_detail_id:product_detail_id
    }
    addToWishlist(data)
  }



  // console.log(productData)
  const productDetailsPage = (id) => {
    navigate(`/productdetails/${id}`)
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
                {allProductData && allProductData.map((item) =>
                (<div className="col-lg-4 col-md-6 col-sm-6  col-6 p-3  card_div" >

                  <div className="d-flex flex-column justify-content-center border card_mini_div  position-relative overflow-hidden  w-90">
                    <img src={item?.ProductDetails[0]?.image[0]?.image_url} alt={item?.product_title} onClick={() => productDetailsPage(item._id)}/>
                    <h6 className="mt-2 ps-2">{item?.title}</h6>
                    <p className="ps-2 py-0 my-0 desc">{item?.description.slice(0, 30)}...</p>
                    <div className="d-flex flex-column">
                      <div>
                        <p className="ps-2 fw-bold text-success my-0 py-0">{item?.delivery_status}</p>
                        <p className="ps-2 fw-bold text-secondary my-0 py-0">{item?.ProductDetails[0]?.inStock <= 10 ? <p className="m-0" > InStock : {item.ProductDetails[0]?.inStock} Left</p> : ""} </p>
                      </div>
                      <div className="d-flex">
                        <del className=" ps-2 fw-bold text-dark"><p className="fw-bold  fs-6 text-secondary">  ₹{item.ProductDetails[0].sellingPrice} </p></del>
                        <p className=" ps-2 fs-5  fw-bold text-success">  ₹{item.ProductDetails[0].MRP}</p>

                      </div>



                      <div className="discount_div d-flex justify-content-center align-items-center">

                        <p className="mb-0 text-light ">{((item?.ProductDetails[0]?.MRP - item?.ProductDetails[0]?.sellingPrice) / item?.ProductDetails[0]?.MRP * 100).toFixed()}% OFF</p>
                      </div>

                      <div className="add_to_cart_div  py-2 px-2 d-flex align-items-center  justify-content-between w-100">
                        <div className="">
                          <button type="button" onClick={() => addToCartHandler(item?._id, item.ProductDetails[0]?._id) }>Add To Cart</button>
                        </div>

                        <div className="px-2 d-flex align-items-center justify-content-between">
                          <div className="icons">
                            <i className="bi bi-share px-2 mx-1" title="Share"></i>

                          </div>
                          <div className="icons">
                            <i className="bi bi-heart px-2 mx-1" title="Wishlist" onClick={() => addToWishlistHandler(item?._id, item.ProductDetails[0]?._id)}></i>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>)


                )
                }

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
