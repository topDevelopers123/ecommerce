import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./products.css";
import { useCartContext, useCategoryContext, useProductContext, useProductDetailsContext, useWishlistContext } from "../../Context/index.context";
import Share from "../home/TrendingProducts/Share";

function Products() {
  const { addToCart } = useCartContext()
  const { addToWishlist, wishlistData, deleteWishlistProduct, CheckWishlistData, removeWishlist } = useWishlistContext()
  const { productDetailsData } = useProductDetailsContext()
  const { selectedCategory } = useCategoryContext()
  const { share, setShare } = useProductContext()
  const { productData } = useProductContext()
  const [allProductData, setAllProductData] = useState(productData)
  let param = useLocation()
  const searchParams = new URLSearchParams(param.search);
  // console.log(allProductData.length)
  const [range, setRenge] = useState(100);
  const [flag, setFlag] = useState(false)
  const [toggle, setToggle] = useState({
    first: {
      checked: false,
      value: ""
    },
    second: {
      checked: false,
      value: ""
    },
    third: {
      checked: false,
      value: ""
    },
    four: {
      checked: false,
      value: ""
    },
    five: {
      checked: false,
      value: ""
    }
  })

  const [discountToggle, setDiscountToggle] = useState({
    first: {
      checked: false,
      value: ""
    },
    second: {
      checked: false,
      value: ""
    },
    third: {
      checked: false,
      value: ""
    },
    four: {
      checked: false,
      value: ""
    },
    five: {
      checked: false,
      value: ""
    }
  })

  const token = localStorage.getItem("token")

  const getReview = productDetailsData?.filter((item) => (item?.Review?.reduce((i, r) => i + r.rating, 0) / item?.Review?.length) <= 4);

  const main = searchParams.get("category")
  const sub_category = searchParams.get("subcategory")
  const sub_inner_Category = searchParams.get("sunInnercategory")
  const search_Data = searchParams.get("search")

  const priceFilterHandler = () => {

    const priceFilter = productData?.filter((item) => {
      return item?.ProductDetails[0]?.sellingPrice <= range
    }).filter((cat) => cat?.category[0]?.category_name === main);

    const bySubCategory = priceFilter?.filter((item) => {
      return item?.ProductDetails[0]?.sellingPrice <= range
    }).filter((cat) => cat?.sub_category[0]?.sub_category_name === sub_category);

    const bySubInnerCategory = bySubCategory?.filter((item) => {
      return item?.ProductDetails[0]?.sellingPrice <= range
    }).filter((cat) => cat?.sub_inner_category[0]?.sub_inner_category_name === sub_inner_Category);

    const getReview = (bySubInnerCategory?.length > 0 ? bySubInnerCategory : bySubCategory?.length > 0 ? bySubCategory : bySubInnerCategory?.length > 0 ? bySubInnerCategory : priceFilter?.length > 0 ? priceFilter : productData)?.filter((item) => (item?.Review?.reduce((i, r) => i + r.rating, 0) / item?.Review?.length) >= ((toggle?.five?.checked ? toggle?.five?.value : 0) || (toggle?.four?.checked ? toggle?.four?.value : 0) || (toggle?.third?.checked ? toggle?.third?.value : 0) || (toggle?.second?.checked ? toggle?.second?.value : 0) || (toggle?.first?.checked ? toggle?.first?.value : 0)))?.filter((cat) => cat?.category[0]?.category_name === main);

    const discountFilter = (getReview?.length > 0 ? getReview : bySubInnerCategory?.length > 0 ? bySubInnerCategory : bySubCategory?.length > 0 ? bySubCategory : bySubInnerCategory?.length > 0 ? bySubInnerCategory : priceFilter?.length > 0 ? priceFilter : productData)?.filter((item) => {
      return (((item?.ProductDetails[0]?.MRP - item?.ProductDetails[0]?.sellingPrice) / item?.ProductDetails[0]?.MRP * 100)?.toFixed(1)) >= ((discountToggle?.five?.checked ? discountToggle?.five?.value : 0) || (discountToggle?.four?.checked ? discountToggle?.four?.value : 0) || (discountToggle?.third?.checked ? discountToggle?.third?.value : 0) || (discountToggle?.second?.checked ? discountToggle?.second?.value : 0) || (discountToggle?.first?.checked ? discountToggle?.first?.value : 0))
    })

    setAllProductData(discountFilter?.length > 0 ? discountFilter : productData?.filter((cat) => cat?.category[0]?.category_name === main))
  }

  useEffect(() => {
    priceFilterHandler()
  }, [productData])

  const filterBYSerach = productData?.filter((item) => {
    return (((item?.title)?.toLowerCase())?.search(`${search_Data}`)) >= 0
  })

  useEffect(() => {
    setAllProductData(filterBYSerach?.length > 0 ? filterBYSerach : productData)
  }, [search_Data])

  // console.log(allProductData);

  const priceFilterHandler2 = () => {

    const priceFilter = filterBYSerach?.filter((item) => {

      return item?.ProductDetails[0]?.sellingPrice <= range
    })

    const bySubCategory = priceFilter?.filter((item) => {
      return item?.ProductDetails[0]?.sellingPrice <= range
    })

    const bySubInnerCategory = bySubCategory?.filter((item) => {
      return item?.ProductDetails[0]?.sellingPrice <= range
    })

    const getReview = (bySubInnerCategory?.length > 0 ? bySubInnerCategory : bySubCategory?.length > 0 ? bySubCategory : bySubInnerCategory?.length > 0 ? bySubInnerCategory : priceFilter?.length > 0 ? priceFilter : filterBYSerach)?.filter((item) => (item?.Review?.reduce((i, r) => i + r.rating, 0) / item?.Review?.length) >= ((toggle?.five?.checked ? toggle?.five?.value : 0) || (toggle?.four?.checked ? toggle?.four?.value : 0) || (toggle?.third?.checked ? toggle?.third?.value : 0) || (toggle?.second?.checked ? toggle?.second?.value : 0) || (toggle?.first?.checked ? toggle?.first?.value : 0)));

    const discountFilter = (getReview?.length > 0 ? getReview : bySubInnerCategory?.length > 0 ? bySubInnerCategory : bySubCategory?.length > 0 ? bySubCategory : bySubInnerCategory?.length > 0 ? bySubInnerCategory : priceFilter?.length > 0 ? priceFilter : filterBYSerach)?.filter((item) => {
      return (((item?.ProductDetails[0]?.MRP - item?.ProductDetails[0]?.sellingPrice) / item?.ProductDetails[0]?.MRP * 100)?.toFixed(1)) >= ((discountToggle?.five?.checked ? discountToggle?.five?.value : 0) || (discountToggle?.four?.checked ? discountToggle?.four?.value : 0) || (discountToggle?.third?.checked ? discountToggle?.third?.value : 0) || (discountToggle?.second?.checked ? discountToggle?.second?.value : 0) || (discountToggle?.first?.checked ? discountToggle?.first?.value : 0))
    })
    setAllProductData(discountFilter?.length > 0 ? discountFilter : filterBYSerach)
  }

  useEffect(() => {
    if (filterBYSerach?.length > 0) {
      setAllProductData(filterBYSerach)
    } else {
      let data = productData?.filter((item) => {
        return item?.category[0]?.category_name === main
      })

      const newData = data?.filter((item) => {
        return item.sub_category[0]?.sub_category_name === sub_category
      })

      const finalData = newData?.filter((item) => {
        return item.sub_inner_category[0]?.sub_inner_category_name === sub_inner_Category
      })
      setAllProductData(finalData?.length > 0 ? finalData : newData?.length > 0 ? newData : data);
    }

  }, [param, productData])

  // console.log(allProductData);

  const navigate = useNavigate()

  const showFilter = () => {
    flag ? setFlag(false) : setFlag(true)
  }

  const addToCartHandler = (product_id, productDetailsId, image) => {
    if (token === null) {
      navigate(`/login`);
      window.scrollTo(0, 0);
      return
    }
    addToCart(product_id, productDetailsId, image)
  }

  const addToWishlistHandler = (product_id, product_detail_id) => {
    if (token === null) {
      navigate(`/login`);
      window.scrollTo(0, 0);
      return
    }
    const data = {
      product_id: product_id,
      product_detail_id: product_detail_id
    }
    addToWishlist(data)
  }

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
                  <div className="w-50 range_div">
                    <h4>Filters</h4>
                    <input
                      type="range"
                      min={100}
                      max={5000}
                      onChange={(event) => setRenge(event.target.value)}
                    />
                    <p>
                      Range : {range > 100 ? "100-" : ""} {range}
                    </p>
                  </div>

                  {/* <div className="d-flex justify-content-end px-2 w-100 clear_all">
                    <Link to="void::javascript" className="text-decoration-none fw-bold">CLEAR ALL</Link>
                  </div> */}
                </div>

                <div className={flag ? "flex-direction-column col-12 d-flex flex-wrap" : "flex-direction-row col-12 d-flex flex-wrap"}>
                  <div className="dropdown col-lg-12 col-md-12 col-sm-12 col-12 border mt-3">
                    <button className="btn   dropdown-toggle border-0 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Customer Rating
                    </button>
                    <ul className="dropdown-menu p-0">
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="5" id="flexCheckIndeterminate" onChange={(e) => setToggle({ ...toggle, five: { checked: e.target.checked, value: e.target.value } })} />
                        <li className="dropdown-item">5 ★ or more</li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="4" id="flexCheckIndeterminate" onChange={(e) => setToggle({ ...toggle, four: { checked: e.target.checked, value: e.target.value } })} /><li className="dropdown-item">4 ★ or more</li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="3" id="flexCheckIndeterminate" onChange={(e) => setToggle({ ...toggle, third: { checked: e.target.checked, value: e.target.value } })} /><li className="dropdown-item">3 ★ or more</li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="2" id="flexCheckIndeterminate" onChange={(e) => setToggle({
                          ...toggle
                          , second: { checked: e.target.checked, value: e.target.value }
                        })} /><li className="dropdown-item">2 ★ or more</li>
                      </div>

                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" defaultValue="1" id="flexCheckIndeterminate" onChange={(e) => setToggle({
                          ...toggle
                          , first: { checked: e.target.checked, value: e.target.value }
                        })} /><li className="dropdown-item">1 ★ or more</li>
                      </div>
                    </ul>
                  </div>

                  <div className="dropdown col-lg-12 col-md-12 col-sm-12 col-12 border mt-3">
                    <button className="btn   dropdown-toggle border-0 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Discount
                    </button>
                    <ul className="dropdown-menu p-0">
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="50" id="flexCheckIndeterminate" onChange={(e) => setDiscountToggle({
                          ...discountToggle
                          , five: { checked: e.target.checked, value: e.target.value }
                        })} /><li className="dropdown-item">50% or more</li>
                      </div>
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="40" id="flexCheckIndeterminate" onChange={(e) => setDiscountToggle({
                          ...discountToggle
                          , four: { checked: e.target.checked, value: e.target.value }
                        })} /><li className="dropdown-item">40% or more</li>
                      </div>
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="30" id="flexCheckIndeterminate" onChange={(e) => setDiscountToggle({
                          ...discountToggle
                          , third: { checked: e.target.checked, value: e.target.value }
                        })} /><li className="dropdown-item">30% or more</li>
                      </div>
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="20" id="flexCheckIndeterminate" onChange={(e) => setDiscountToggle({
                          ...discountToggle
                          , second: { checked: e.target.checked, value: e.target.value }
                        })} /><li className="dropdown-item">20% or more</li>
                      </div>
                      <div className="d-flex">
                        <input className="form-check-input" type="checkbox" value="10" id="flexCheckIndeterminate" onChange={(e) => setDiscountToggle({
                          ...discountToggle
                          , first: { checked: e.target.checked, value: e.target.value }
                        })} /><li className="dropdown-item">10% or more</li>
                      </div>
                    </ul>
                  </div>
                </div>
                <button className="btn go_btn  fw-bold text-light  m-0 mt-3" onClick={() => { search_Data?.length > 0 ? priceFilterHandler2() : priceFilterHandler() }}>
                  FILTER
                </button>
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
                {allProductData?.length > 0 ? allProductData?.map((item) =>
                (<div className="col-lg-4 col-md-6 col-sm-6  col-6 p-3  card_div" >
                  <div className="d-flex flex-column card justify-content-center border card_mini_div  position-relative overflow-hidden  w-90">
                    <img src={item?.ProductDetails ? item?.ProductDetails[0]?.image[0]?.image_url : productData?.map((item) => item?.ProductDetails[0]?.image[0]?.image_url)} alt={item?.product_title} onClick={() => productDetailsPage(item._id)} />
                    <div className="card-body">
                      <h6 className="mt-2 ps-2 short-title">{item?.title}</h6>
                      <p className="ps-2 py-0 my-0 desc">{item?.description?.slice(0, 30)}...</p>
                      <div className="d-flex flex-column">
                        <div>
                          <p className="ps-2 fw-bold text-success my-0 py-0">{item?.delivery_status}</p>
                          <p className="ps-2 fw-bold text-secondary my-0 py-0">{item?.ProductDetails ? item?.ProductDetails[0].inStock < 10 ? `InStock: ${item?.ProductDetails[0]?.inStock} Left` : "" : productData?.map((ite) => ite?.ProductDetails[0]?.inStock)}</p>
                        </div>
                        <div className="d-flex">
                          <del className=" ps-2 fw-bold text-dark"><p className="fw-bold  fs-6 text-secondary">  ₹{item?.ProductDetails ? item?.ProductDetails[0]?.MRP : productData?.map((ite) => ite?.ProductDetails[0]?.MRP)} </p></del>
                          <p className=" ps-2 fs-5  fw-bold text-success">  ₹{item?.ProductDetails ? item?.ProductDetails[0]?.sellingPrice : productData?.map((ite) => ite?.ProductDetails[0]?.sellingPrice)}</p>
                        </div>

                        {/* {console.log(item?.ProductDetails[0]?.sellingPrice)} */}
                        {/* {console.log((((item?.ProductDetails[0]?.MRP - item?.ProductDetails[0]?.sellingPrice) / item?.ProductDetails[0]?.MRP) * 100).toFixed())} */}

                        <div className="discount_div rounded-pill d-flex justify-content-center align-items-center">
                          <p className="mb-0 text-light ">{(item?.ProductDetails ? (((item?.ProductDetails[0]?.MRP - item?.ProductDetails[0]?.sellingPrice) / item?.ProductDetails[0]?.MRP) * 100).toFixed() : (productData?.map((ite) => (ite?.ProductDetails[0]?.MRP - ite?.ProductDetails[0]?.sellingPrice / productData?.map((ite) => ite?.ProductDetails[0]?.MRP) * 100).toFixed())))}% OFF</p>
                        </div>

                        <div className="add_to_cart_div  py-3 px-2 d-flex align-items-center  justify-content-between w-100">
                          <div className="">
                            <button type="button" onClick={() => addToCartHandler(item?._id, item.ProductDetails[0]?._id, item?.ProductDetails ? item?.ProductDetails[0]?.image[0]?.image_url : productData?.map((item) => item?.ProductDetails[0]?.image[0]?.image_url))} disabled={item?.ProductDetails[0].inStock < 0 ? true : false}>Add To Cart</button>
                          </div>

                          <div className="p-0 px-md-2 d-flex align-items-center justify-content-between">
                            <div className="icons" onClick={() => setShare(!share)}>
                              <i className="bi bi-share px-2 mx-1" title="Share"></i>
                            </div>
                            <div className="icons">
                              <i className={`bi bi-heart-fill px-2 mx-1 ${CheckWishlistData(item?.ProductDetails[0]?._id) ? "text-pink-300" : ""}`} title="Wishlist" onClick={() => { CheckWishlistData(item?.ProductDetails[0]?._id) ? removeWishlist(item?.ProductDetails[0]?._id) : addToWishlistHandler(item?._id, item.ProductDetails[0]?._id); }} disabled={item?.ProductDetails[0].inStock < 0 ? true : false}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {share ? <Share setShare={setShare} /> : null}
                  </div>
                </div>)
                )
                  : <h2 className="w-100 text-center d-flex align-items-center justify-content-center">No Products Found</h2>
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
    </div>
  );
}

export default Products;
