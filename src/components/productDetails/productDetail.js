import React, { useEffect, useState } from "react";
import { Link, useAsyncError, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OwlCarousel from "react-owl-carousel";
import { useCartContext, useProductContext, useProductDetailsContext, useWishlistContext } from "../../Context/index.context"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./productDetail.css";
import model from "./img/model.webp";
import p01 from "./img/p1.webp";
import p02 from "./img/p2.webp";
import p03 from "./img/p3.webp";
import p04 from "./img/p4.webp";
import p05 from "./img/p5.webp";
import p06 from "./img/p6.webp";
import color1 from "./img/color1.webp";
import color2 from "./img/color2.webp";
import tp01 from "../home/img/trending/1.jpg";

function ProductDetail() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [productDetail, setProductDetail] = useState({
  
    image: []
  });

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newFile = files.slice(0,5)
    console.log(newFile);
    const newImages = newFile.map(file => ({
      id: file.name + file.size, // Unique identifier based on file properties
      url: URL.createObjectURL(file),
      file: file
    }));
    setSelectedImages(prevImages => [...prevImages, ...newImages]);
    setProductDetail(prevDetail => ({
      ...prevDetail,
      image: [...prevDetail.image, ...newImages.map(image => image.file)]
    }));
  };

  const handleImageDelete = (id) => {
    setSelectedImages(prevImages => prevImages.filter(image => image.id !== id));
    setProductDetail(prevDetail => ({
      ...prevDetail,
      image: prevDetail.image.filter(image => image.name + image.size !== id)
    }));
  };

  const [qty, setQty] = useState(1)

const addValue = ()=>{
   if (qty < 5) {
    
     setQty(qty + 1)
   }
}

const removeValue =()=>{
  if (qty > 1) {
    
    setQty(qty -1)
  }
}

  const { productDetailsData } = useProductDetailsContext()
  const { addToCart2 } = useCartContext()
  const { addToWishlist } = useWishlistContext()
  // console.log(productDetailsData);
  const [image, setImage] = useState(null)
  const [color, setColor] = useState("")
  const [size, setSize] = useState(null)
  

  const { id } = useParams()



  const data = productDetailsData?.filter((item, i) => {
    return id === item._id
  })[0]

  const Prouctdetail = data?.ProductDetails[0]

  const filter = data?.ProductDetails?.filter((item) => item.color === color)
  const filter2 = filter?.filter((item) => item._id === size)[0]


  const [details, setDetails] = useState({
    product_id: "",
    productDetails: "",
    quantity: null,
  })

  const [wishDetails, setWishDetails] = useState({
    product_id:"",
    product_detail_id:""
  })

  useEffect(() => {

    setImage(filter ? filter[0]?.image[0]?.image_url : Prouctdetail?.image[0]?.image_url)
    setColor(Prouctdetail?.color)
    setSize(Prouctdetail?._id)
    setDetails({ ...details, product_id: data?._id, productDetails: Prouctdetail?._id, quantity:qty})
    setWishDetails({ ...wishDetails, product_id: data?._id, product_detail_id: Prouctdetail?._id })
    
  }, [productDetailsData])



  // console.log(details);

  const addToCartHandler = () => {

    addToCart2(details)
  }

  const wishListHandler = ()=>{
    addToWishlist(wishDetails)
    
  }

// console.log(wishDetails);
  
  // console.log(data?._id, filter2?._id, qty);

  return (
    <div>
      {/* Product details section start */}
      <section className="product-detail-sec">
        <div className="container">
          <div className="product_detail">


            {
              // productDetailsData?.filter((item) => {
              //   return item?._id === id
              // }).map((ite, ind) => (
              //   <>
              //     {productDetailId = ite?.ProductDetails[0]?._id}
              //     {ite?.ProductDetails.filter((ele) => {
              //       return ele._id === productDetailId
              //     }).map((element,i) => (

              <div className="row details-snippet1">
                <div className="col-md-7" >
                  <div className="row">
                    <div key="" className="col-md-2 col-sm-2 mini-preview order-2 order-sm-1">
                      {filter ? filter[0]?.image.map((photo, i) => (
                        <img className="img-fluid" src={photo.image_url} onClick={() => setImage(photo.image_url)} alt="preview" />
                      )) : Prouctdetail?.image.map((photo, i) => (
                        <img className="img-fluid" src={photo.image_url} onClick={() => setImage(photo.image_url)} alt="preview" />))}
                    </div>
                    <div className="col-md-10 col-sm-10 order-1 order-sm-2">
                      <div className="product-image">
                        <img className="img-fluid" src={image ? image : Prouctdetail?.image[0]?.image_url} alt="product" />
                      </div>
                    </div>
                  </div>
                </div >

                <div className="col-md-5">
                  <div className="theme-text mr-2">Category : <span className="text-secondary">{data?.category[0]?.category_name}</span></div>
                        
                  {/* <div className="theme-text mr-2">Product Ratings: </div>
                      <div className="reviews-counter">
                        <div className="rate">
                          <input
                            type="radio"
                            id="star5"
                            name="rate"
                            value="5"
                            checked
                          />
                          <label for="star5" title="text">
                            5 stars
                          </label>
                          <input
                            type="radio"
                            id="star4"
                            name="rate"
                            value="4"
                            checked
                          />
                          <label for="star4" title="text">
                            4 stars
                          </label>
                          <input
                            type="radio"
                            id="star3"
                            name="rate"
                            value="3"
                            checked
                          />
                          <label for="star3" title="text">
                            3 stars
                          </label>
                          <input type="radio" id="star2" name="rate" value="2" />
                          <label for="star2" title="text">
                            2 stars
                          </label>
                          <input type="radio" id="star1" name="rate" value="1" />
                          <label for="star1" title="text">
                            1 star
                          </label>
                        </div>
                        <span>3 Reviews</span>
                      </div> */}

                  <div><h3>{data?.title}</h3></div>

                  <div className="price my-2">
                    ₹{filter2?.sellingPrice}<strike className="original-price">  ₹{filter2?.MRP}</strike> <span>{((filter2?.MRP - filter2?.sellingPrice) / filter2?.MRP * 100).toFixed()}%</span>
                  </div>

                  <div className="delivery shadow">Free Delivery</div>
                  <div className="theme-text subtitle mb-3">Brief Description:</div>
                  <div className="brief-description">
                    {data?.description}
                  </div>

                  <hr />

                  <div>
                    <div className="subtitle my-3 theme-text">Colors:</div>
                    <div className="d-flex flex-row gap-2 p-2">

                      <div className="select-colors d-flex">
                        <div className="color blue ">
                          <div className="">

                            {/* {arr.map((color) => {
                                    if (color === element.color) {
                                      console.log(color)
                                    }
                                  })} */}
                            {(data?.ProductDetails?.map((photo) => (
                              <>
                                {photo?.image.length > 0 && <img src={photo?.image[0]?.image_url} className="mx-1 bg-transparent" style={{ width: "100px", height: "100px" }} onClick={() => { setColor(photo.color); setSize(photo._id); setImage(photo?.image[0]?.image_url); setDetails({ ...details, product_id: data?._id, productDetails: photo?._id, quantity: qty }); setWishDetails({ ...wishDetails, product_id: data?._id, product_detail_id: photo?._id }) }} />}
                              </>
                            )))}

                            {/* {ite?.ProductDetails.map((forId) => (
                                    
                              ))} */}
                          </div>
                        </div>


                      </div>


                    </div>
                  </div>
                  
                  <hr />
                  
                  <div>
                    <div>Size: </div>
                    <div className="subtitle my-3 theme-text size">
                      {filter?.map((item) => (
                        <span className={`px-2 py-1 border border-dark mx-1 ${item?._id === size ? "bg-secondary text-light" : ""}`}  onClick={() => setSize(item._id)} >
                          {item?.Size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <hr />
                  
                  <div className="row">
                    <div className="col-md-6 col-6 col-lg-4">
                      <div className="product-count">
                        <label for="size">Quantity</label>
                        <form action="#" className="d-flex">
                          <div className="qtyminus" onClick={removeValue} >-</div>
                          <input
                            type="text"
                            name="quantity"
                            value={qty}
                            className="qty"
                            onChange={(e) => setQty(e.target.value)}/>
                          <div className="qtyplus" onClick={addValue}>+</div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-1 col-1 col-lg-1 mx-2">
                      <div className="wishlist_btn" onClick={() => { wishListHandler(); setWishDetails({ ...wishDetails, product_id: data?._id, product_detail_id: filter2?._id }) }}>
                        <i className="bi bi-heart" ></i>
                      </div>
                    </div>
                    <div className="col-md-1 col-1 col-lg-1">
                      <div className="wishlist_btn ms-2">
                        <i className="bi bi-share-fill"></i>
                      </div>
                    </div>
                  </div>

                  <hr />
                  
                  <div className="row">
                    <div className="d-flex">
                      <button className="btn btn-block addBtn" onClick={() => { addToCartHandler(); setDetails({ ...details, product_id: data?._id, productDetails: filter2?._id, quantity: qty }) }}>
                        
                        Add to basket
                      </button>
                      
                      <button className="btn btn-block addBtn ms-3">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              // ))}
              //           </>
              //         ))
            }

            <div className="additional-details my-5 text-center">
              <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    data-bs-toggle="tab"
                    to="#home"
                  >
                    Description
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="tab" to="#menu1">
                    Reviews
                  </Link>
                </li>
              </ul>
              <div className="tab-content mt-4 mb-3">
                <div className="tab-pane container active" id="home">
                  <div className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident magni assumenda consectetur facere eius. Minus
                    reprehenderit placeat ullam vel ab eaque sequi impedit,
                    ipsum soluta temporibus fugit ipsa. Dolor libero modi
                    molestiae dicta, vitae minus laborum error cum consequatur
                    autem minima eveniet porro obcaecati quibusdam possimus eos,
                    debitis sint magnam, explicabo accusantium aspernatur ipsa
                    repellat tempore nihil. Cum placeat voluptate dignissimos
                    dicta harum consectetur, nemo debitis tempore. Quod culpa
                    perspiciatis unde natus. Modi expedita, ab repellendus
                    reiciendis sed voluptate, culpa laborum ad, consectetur quas
                    tempora quo? Quibusdam doloribus magnam maxime, accusamus
                    officiis odit reiciendis labore laudantium. Molestiae
                    corporis temporibus ad?
                  </div>
                </div>
                <div className="tab-pane container fade" id="menu1">
                  <div className="review">
                    <div className="theme-text mr-2 text-start">Product Ratings: </div>
                    <div className="reviews-counter text-start">
                      <div className="rate">
                        <input
                          type="radio"
                          id="star5"
                          name="rate"
                          value="5"
                          checked
                        />
                        <label for="star5" title="text">
                          5 stars
                        </label>
                        <input
                          type="radio"
                          id="star4"
                          name="rate"
                          value="4"
                          checked
                        />
                        <label for="star4" title="text">
                          4 stars
                        </label>
                        <input
                          type="radio"
                          id="star3"
                          name="rate"
                          value="3"
                          checked
                        />
                        <label for="star3" title="text">
                          3 stars
                        </label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">
                          2 stars
                        </label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">
                          1 star
                        </label>
                      </div>
                      <span>3 Reviews</span>
                    </div>
                    <div class="my-3 text-start">
                      <label for="" class="form-label text-start">Add Title</label>
                      <input
                        type="text"
                        class="form-control"
                        name=""
                        id=""                      
                        placeholder="Add Title"
                      />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="image-upload" className="form-label mb-3 ">Upload Images</label><br />
                        <input
                          id="image-upload"
                          type="file"
                          accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                          multiple // Allow multiple files
                          onChange={handleImageChange}
                        />
                      </div>
                      <div className="image-preview mt-4">
                        {selectedImages.map((image, index) => (
                          <div key={index} className="image-container" style={{ position: 'relative', display: 'inline-block', margin: '10px' }}>
                            <img src={image.url} alt={`preview-${index}`} style={{ maxWidth: '150px', maxHeight: '150px' }} />
                            <button
                              type="button"
                              onClick={() => handleImageDelete(image.id)}
                              style={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px',
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                cursor: 'pointer'
                              }}
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    <div class="my-3 text-start">
                      <label for="" class="form-label text-start">Your Review</label>
                      <textarea
                        type="text"
                        class="form-control"
                        name=""
                        id=""
                        rows={5}
                        aria-describedby="helpId"
                        placeholder="Add your review"
                      />
                    </div>
                    <div className="submitBtn">
                      <button> Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product details section end */}

      {/* Featured products start */}
      <section className="interested_prod">
        <div className="container">
          <div className="head_title">
            <h2 className="fp_heading" data-text="Featured Products">
              You might interested in
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
                items: 1, // 1 item in mobile view
              },
              768: {
                items: 2, // 3 items in tablet view
              },
              1200: {
                items: 4, // 4 items in desktop view
              },
            }}
          >
            <div className="item">
              <div className="card">
                <div className="add_icons">
                  <div className="icons">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                  <div className="icons">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
                <img src={tp01} className="tp_img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Navy Blue Printed Shirt</h5>
                  <p className="card-text">
                    Some quick example text to build on ..
                  </p>
                  <p className="pricing">
                    ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                  </p>
                  <div className="d-flex">
                    <button className="btn btn-block addBtn">
                      Add to basket
                    </button>
                    <button className="btn btn-block addBtn ms-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="add_icons">
                  <div className="icons">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                  <div className="icons">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
                <img src={tp01} className="tp_img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Navy Blue Printed Shirt</h5>
                  <p className="card-text">
                    Some quick example text to build on ..
                  </p>
                  <p className="pricing">
                    ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                  </p>
                  <div className="d-flex">
                    <button className="btn btn-block addBtn">
                      Add to basket
                    </button>
                    <button className="btn btn-block addBtn ms-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="add_icons">
                  <div className="icons">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                  <div className="icons">
                    <i className="bi bi-share-fill"></i>
                  </div>
                </div>
                <img src={tp01} className="tp_img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Navy Blue Printed Shirt</h5>
                  <p className="card-text">
                    Some quick example text to build on ..
                  </p>
                  <p className="pricing">
                    ₹429 <s> ₹999</s> <span>57% off</span>{" "}
                  </p>
                  <div className="d-flex">
                    <button className="btn btn-block addBtn">
                      Add to basket
                    </button>
                    <button className="btn btn-block addBtn ms-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      {/* Featured products end  */}
    </div>
  );
}

export default ProductDetail;