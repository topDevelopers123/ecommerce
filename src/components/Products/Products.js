import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import { Link } from "react-router-dom";

function Products() {
  const [range, setRenge] = useState(100);
  const navigate = useNavigate()

  const obj = [
    {
      product_image:"https://assets.ajio.com/medias/sys_master/root/20230623/1gyg/6494b4aed55b7d0c63a300ba/-473Wx593H-464366270-green-MODEL.jpg",
      product_title:"Trending Suit For Women",
      product_real_price:"1899",
      product_discount_price:"1299",
      product_decsription:"some quick example to text to build on"
    },
    {
      product_image:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1678720119_3019465.jpg?v=2",
      product_title:"Stylish T-shirt For Men",
      product_real_price:"2500",
      product_discount_price:"1999",
      product_decsription:"some quick example to text to build on"
    },
    {
      product_image:"https://assets.ajio.com/medias/sys_master/root/20230718/DElg/64b6be4aeebac147fc7727a1/-473Wx593H-466368522-black-MODEL.jpg",
      product_title:"Girl's Frog",
      product_real_price:"1500",
      product_discount_price:"1100",
      product_decsription:"some quick example to text to build on"
    },
    {
      product_image:"https://www.urbanprints.in/cdn/shop/files/IMG_8772_f2ed6e1b-6bb8-4684-bc0d-ea8341c1790c.webp?v=1709473084",
      product_title:"Fahionable Shirt For Men",
      product_real_price:"1639",
      product_discount_price:"1439",
      product_decsription:"some quick example to text to build on"
    },
    {
      product_image:"https://sunasa.in/cdn/shop/products/IMG_20220130_114744_1500x.jpg?v=1696511459",
      product_title:"Stylish Saree",
      product_real_price:"3999",
      product_discount_price:"3299",
      product_decsription:"some quick example to text to build on"
    },
    {
      product_image:"https://5.imimg.com/data5/SELLER/Default/2022/6/MX/SA/JD/151275676/mens-blue-plain-cotton-kurta-500x500.jpg",
      product_title:"Men's Kurta",
      product_real_price:"2199/-",
      product_discount_price:"1999",
      product_decsription:"some quick example to text to build on"
    },
  ]

  const productDetailsPage = () =>{
     navigate("/productdetails")
     window.scrollTo(0, 0);
  }
  return (
    <div>
      <div class="container-fluid for_margin mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex poducts_filter_main_div">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12  filter_mini_div">
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
                  <a href="void::javascript" className="text-decoration-none fw-bold">CLEAR ALL</a>
                </div>
              </div>

<div className=" col-12 d-flex flex-wrap">     
              <div class="dropdown col-lg-12 col-md-6 col-sm-6 col-12 border mt-3">
  <button class="btn   dropdown-toggle text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 Customer Rating
  </button>
  <ul class="dropdown-menu p-0">
    <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <li><a class="dropdown-item" href="#">4★ & above</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">3★ & above</a></li>
  </div>


  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">2★ & above</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">1★ & above</a></li>
  </div>

  


 
  </ul>
</div>


<div class="dropdown col-lg-12 col-md-6 col-sm-6 col-12  border mt-3">
  <button class="btn   dropdown-toggle text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Offers
  </button>
  <ul class="dropdown-menu p-0">
    <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">No Cost EMI</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">Special Price</a></li>
  </div>


  </ul>
</div>

<div class="dropdown col-lg-12 col-md-6 col-sm-6 col-12 border mt-3">
  <button class="btn   dropdown-toggle text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Discount
  </button>
  <ul class="dropdown-menu p-0">
    <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">50% or more</a></li>
  </div>


  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">40% or more</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">30% or more</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">20% or more</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">10% or more</a></li>
  </div>


  </ul>
</div>

<div class="dropdown  col-lg-12 col-md-6 col-sm-6 col-12  border mt-3">
  <button class="btn   dropdown-toggle text-start " type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Fabric
  </button>
  <ul class="dropdown-menu p-0">
  
  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">Linen Blend</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">Polyester</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">Nylon</a></li>
  </div>
  
  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">Linen Blend</a></li>
  </div>

  </ul>
</div>
</div>

              </div>

              <div className="col-lg-9 col-md-12 col-sm-12 col-12 d-flex flex-wrap card_main_div  ">
                {obj.map((item)=>{
                  return <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-3  card_div" onClick={productDetailsPage}>
                       <div className="d-flex flex-column justify-content-center border card_mini_div  position-relative overflow-hidden  w-90">
                    <img src={item.product_image} alt={item.product_title}/>
                    <h6 className="mt-2 ps-2">{item.product_title}</h6>
                    <p className="ps-2">{item.product_decsription}</p>
                    <div className="d-flex">
                    <del className="me-1 ps-2 fw-bold text-dark"><p className="fw-bold  fs-6 text-secondary">  ₹{item.product_real_price} </p></del>
                    <p className=" ps-2 fs-5  fw-bold text-success">  ₹{item.product_discount_price}</p>

                    <div className="discount_div d-flex justify-content-center align-items-center">

                      <p className="mb-0 text-light fw-bold">3 % OFF</p>
                    </div>

                    <div className="add_to_cart_div  py-2 px-2 d-flex align-items-center  justify-content-between w-100">
                      <div className="">
                      <button type="button">Add To Cart</button>
                      </div>

                      <div className="px-2     d-flex align-items-center justify-content-between">
                        <div className="icons">
                      <i class="bi bi-eye px-2 mx-1" title="Quick Shop"></i>
                      </div>
                      <div className="icons">
                      <i class="bi bi-heart px-2 mx-1" title="Wishlist"></i>
                      </div>
                      </div>
                     
                    </div>
                    </div>
                    </div>
                </div>
                
                })}

<div className="  container pagination_div d-flex justify-content-center   p-4  border">
<nav aria-label="Page navigation example  border border-dark d-flex justify-content-center align-items-center col-12">
  <ul class="pagination justify-content-center ">
    <li class="page-item disabled col-md-10 col-sm-10 col-10">
      <a class="page-link text-center" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item col-2"><a class="page-link text-center text-dark" href="#">1</a></li>
    <li class="page-item col-2"><a class="page-link text-center text-dark" href="#">2</a></li>
    <li class="page-item col-2"><a class="page-link text-center text-dark" href="#">3</a></li>
    <li class="page-item col-4">
      <a class="page-link text-center text-secondary " href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
                

              </div>

              
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="container">
          <div className="row">
          <h4 className="">RECENT POST</h4>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-wrap">

              
                {obj.map((elem)=>{
                  return  <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex mt-5 recent_post_mini ">
                  <img src={elem.product_image}/>
                  <div className=" px-3 pt-2">
                    <h6 className="">{elem.product_title}</h6>
                  
                    <div className="d-flex">
                    <del className="me-1 ps-2 "><p className="fs-6 fw-bold text-secondary">  ₹{elem.product_real_price}</p></del>
                    <h5 className="text-success ps-2 fs-6 fw-bold">  ₹{elem.product_discount_price}</h5>
            </div>
                  </div>
                </div>
                })}
               
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default Products;
