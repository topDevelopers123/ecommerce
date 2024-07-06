import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OwlCarousel from "react-owl-carousel";
import { useCartContext, useProductContext, useProductDetailsContext, useWishlistContext } from "../../Context/index.context"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./productDetail.css";
import tp01 from "../home/img/trending/1.jpg";
import StarRatings from "react-star-ratings";

function ProductDetail() {
  const {  addReview, disable } = useProductDetailsContext()
  const { productData } = useProductContext()
  const { id } = useParams()
  const [qty, setQty] = useState(1)
  const { addToCart2 } = useCartContext()
  const { addToWishlist } = useWishlistContext()
  const [image, setImage] = useState(null)
  const [color, setColor] = useState("")
  const [size, setSize] = useState(null)
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate()

  let ratingAvg = 0;
  let totalReview = 0;
  const [error, setError] = useState("")

  const [reviewData, setReviewData] = useState({
    title: "",
    message: "",
    rating: 0,
    product_id: id,
    image: []
  });




  const getReview = productData?.filter((item) => item?._id === id)[0];


  getReview?.Review?.map((rev) => {
    ratingAvg += rev?.rating
    totalReview++
  })
  

  const redirectHandler = () => {
    navigate("/oldAddress")
    window.scrollTo(0, 0);
  }

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 3);
    const newImages = files.map(file => ({
      id: `${file.name}-${file.size}`,
      url: URL.createObjectURL(file),
      file
    }));

    setSelectedImages(prevImages => [...prevImages, ...newImages]);
    setReviewData(prevDetail => ({
      ...prevDetail,
      image: [...prevDetail.image, ...newImages.map(img => img.file)]
    }));
  };

  const handleImageDelete = (id) => {
    setSelectedImages(prevImages => prevImages.filter(img => img.id !== id));
    setReviewData(prevDetail => ({
      ...prevDetail,
      image: prevDetail.image.filter(file => `${file.name}-${file.size}` !== id)
    }));
  };


  const submitHandler = async () => {
    if (!reviewData.title || !reviewData.message || !reviewData.rating) {
      setError("All Field are Mendatory (Title, Message, Rating)")
      return
    }
    const formData = new FormData();
    formData.append('product_id', reviewData.product_id);
    formData.append('title', reviewData.title);
    formData.append('message', reviewData.message);
    formData.append('rating', reviewData.rating);


    reviewData.image.forEach((file) => {
      formData.append(`image`, file);
    });


    try {
      const result = await addReview(formData);
      if (result) {
        setReviewData({ ...reviewData, title: "", message: "", rating: 0 })
      }
    } catch (error) {
      console.error('Error adding product details:', error);
    }
  };


  const addValue = () => {
    if (qty < 5) {

      setQty(qty + 1)
    }
  }

  const removeValue = () => {
    if (qty > 1) {

      setQty(qty - 1)
    }
  }


  const data = productData?.filter((item, i) => {
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
    product_id: "",
    product_detail_id: ""
  })

  useEffect(() => {

    setImage(filter ? filter[0]?.image[0]?.image_url : Prouctdetail?.image[0]?.image_url)
    setColor(Prouctdetail?.color)
    setSize(Prouctdetail?._id)
    setDetails({ ...details, product_id: data?._id, productDetails: Prouctdetail?._id, quantity: qty })
    setWishDetails({ ...wishDetails, product_id: data?._id, product_detail_id: Prouctdetail?._id })

  }, [productData])



  // console.log(details);

  const addToCartHandler = () => {

    addToCart2(details)
  }

  const wishListHandler = () => {
    addToWishlist(wishDetails)

  }

  const changeRating = (newRating) => {
    setReviewData(prevState => ({
      ...prevState,
      rating: newRating
    }));
  };




  return (
    <div>

      <section className="product-detail-sec">
        <div className="container">
          <div className="product_detail">


            {
          
              <div className="row details-snippet1">
                <div className="col-md-7" >
                  <div className="row">
                    <div key="" className="col-md-2 col-sm-2 mini-preview order-2 order-sm-1">
                      {filter ? filter[0]?.image.map((photo, i) => (
                        <img key={i} className="img-fluid" src={photo.image_url} onClick={() => setImage(photo.image_url)} alt="preview" />
                      )) : Prouctdetail?.image.map((photo, i) => (
                        <img key={i} className="img-fluid" src={photo.image_url} onClick={() => setImage(photo.image_url)} alt="preview" />))}
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


                  <div><h3>{data?.title}</h3></div>

                  <div className="price my-2">
                    ₹{filter2?.sellingPrice} &nbsp; <strike className="original-price">   ₹{filter2?.MRP}</strike> <span>{((filter2?.MRP - filter2?.sellingPrice) / filter2?.MRP * 100)?.toFixed()}% OFF</span>
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
                          <div className="d-flex">
                            {(data?.ProductDetails?.map((photo, i) => (
                           
                                <div key={i}>
                                {photo?.image?.length > 0 && <img src={photo?.image[0]?.image_url} alt="" className="mx-1 bg-transparent" style={{ width: "100px", height: "100px" }} onClick={() => { setColor(photo?.color); setSize(photo?._id); setImage(photo?.image[0]?.image_url); setDetails({ ...details, product_id: data?._id, productDetails: photo?._id, quantity: qty }); setWishDetails({ ...wishDetails, product_id: data?._id, product_detail_id: photo?._id }) }} />}
                                </div>
                            )))}

                          </div>
                        </div>


                      </div>


                    </div>
                  </div>

                  <hr />

                  <div>
                    <div>Size: </div>
                    <div className="subtitle my-3 theme-text size">
                      {filter?.map((item, i) => (
                        <span key={i} className={`px-2 py-1 border border-dark mx-1 ${item?._id === size ? "bg-secondary text-light" : ""}`} onClick={() => setSize(item?._id)} >
                          {item?.Size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-md-6 col-6 col-lg-4">
                      <div className="product-count">
                        <label htmlFor="size">Quantity</label>
                        <form action="#" className="d-flex">
                          <div className="qtyminus" onClick={removeValue} >-</div>
                          <input
                            type="text"
                            name="quantity"
                            value={qty}
                            className="qty"
                            onChange={(e) => setQty(e.target.value)} />
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

                      <button className="btn btn-block addBtn ms-3" onClick={() => redirectHandler()}>
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
                  <Link className="nav-link" data-bs-toggle="tab" to="#reviews">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link" data-bs-toggle="tab" to="#addReview">
                    Add Reviews
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
                    molestiae dicta labore laudantium. Molestiae
                    corporis temporibus ad?
                  </div>
                </div>


                <div className="tab-pane container fade" id="reviews">
                  {getReview?.Review?.length > 0 ?
                    <div className="customer_reviews text-start">
                      <div className="ratings">
                        <h2 className="">{(ratingAvg / getReview?.Review?.length).toFixed(1)}<span className="ms-2"><i className="bi bi-star-fill" style={{ color: "gold" }}></i></span></h2>
                        <p> {totalReview} Reviews</p>
                      </div>

                      {getReview?.Review?.map((rev, i) => (
                        <div key={i} className="uploaded_images mt-4">
                          {/* {console.log()} */}
                          <h5>{rev?.title}</h5><span>{rev?.rating} <i className="bi bi-star-fill" style={{ color: "gold" }}></i></span>
                          <p> {rev?.message}</p>
                          <div className="d-flex">
                            {rev?.image?.map((photo, i) => (
                              <img key={i} src={photo?.image_url} width={100} height={150} alt="" />
                            ))}

                          </div>
                        </div>
                      ))}
                    </div>
                    : <h3 style={{ fontWeight: "400" }}>No Reviews Yet</h3>
                  }
                </div>

                <div className="tab-pane container fade" id="addReview">
                  <div className="review">
                    <div className="theme-text mr-2 text-start">Product Ratings: </div>

                    <div className="userRating text-start">
                      <StarRatings
                        rating={reviewData.rating}
                        starRatedColor="gold"
                        changeRating={changeRating}
                        numberOfStars={5}
                        name="rating"
                      />
                    </div>
                    <div className="my-3 text-start">
                      <label htmlFor="" className="form-label text-start">Add Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        placeholder="Add Title" required
                        onChange={(e) => setReviewData({ ...reviewData, title: e.target.value })} />
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
                    <div className="my-3 text-start">
                      <label htmlFor="" className="form-label text-start">Your Review</label>
                      <textarea
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        rows={5}
                        required
                        aria-describedby="helpId"
                        placeholder="Add your review"
                        onChange={(e) => setReviewData({ ...reviewData, message: e.target.value })}
                      />
                    </div>
                    {error ? <p className="text-danger text-start mt-3">{error}</p> : ""}
                    <div className="submitBtn">

                      <button onClick={() => { setReviewData({ ...reviewData, product_id: id }); submitHandler() }} disabled={disable} className={disable ? "bg-danger" : ""}> Post
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