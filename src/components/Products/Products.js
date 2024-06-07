import React, { useState } from "react";
import "./products.css";

function Products() {
  const [range, setRenge] = useState(100);

  const obj = [
    {
      product_image:"https://timshop.timhortons.ca/cdn/shop/files/retro-logo-tshirt-back-1000px.png?v=1707853862&width=1000",
      product_title:"Stylish T-shirt For Men",
      product_real_price:"1899/-",
      product_discount_price:"1299"
    },
    {
      product_image:"https://timshop.timhortons.ca/cdn/shop/files/retro-logo-tshirt-back-1000px.png?v=1707853862&width=1000",
      product_title:"Stylish T-shirt For Men",
      product_real_price:"1899/-",
      product_discount_price:"1299"
    },
    {
      product_image:"https://timshop.timhortons.ca/cdn/shop/files/retro-logo-tshirt-back-1000px.png?v=1707853862&width=1000",
      product_title:"Stylish T-shirt For Men",
      product_real_price:"1899/-",
      product_discount_price:"1299"
    },
    {
      product_image:"https://timshop.timhortons.ca/cdn/shop/files/retro-logo-tshirt-back-1000px.png?v=1707853862&width=1000",
      product_title:"Stylish T-shirt For Men",
      product_real_price:"1899/-",
      product_discount_price:"1299"
    },
    {
      product_image:"https://timshop.timhortons.ca/cdn/shop/files/retro-logo-tshirt-back-1000px.png?v=1707853862&width=1000",
      product_title:"Stylish T-shirt For Men",
      product_real_price:"1899/-",
      product_discount_price:"1299"
    },
    {
      product_image:"https://timshop.timhortons.ca/cdn/shop/files/retro-logo-tshirt-back-1000px.png?v=1707853862&width=1000",
      product_title:"Stylish T-shirt For Men",
      product_real_price:"1899/-",
      product_discount_price:"1299"
    },
  ]

  return (
    <div>
      <div class="container-fluid mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex poducts_filter_main_div">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12   border border-dark">
                <div className="d-flex p-2">
                  <div className="w-100">
                  <h4>Filter</h4>
                  <input
                    type="range"
                    min={100}
                    max={5000}
                    onChange={(event) => setRenge(event.target.value)}
                  />
                  <p>
                    Range : {range > 100 ? "0-" : ""} {range}
                  </p>
                  <button className="btn go_btn border fw-bold text-light  px-4">
                    filter
                  </button>
                </div>

                <div className="d-flex justify-content-end px-2 w-100 border">
                  <a href="void::javascript">CLEAR ALL</a>
                </div>
              </div>

            
              <div class="dropdown  border mt-3">
  <button class="btn  w-100 dropdown-toggle text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  CUSTOMER RATINGS
  </button>
  <ul class="dropdown-menu ">
    <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">4★ & above</a></li>
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


<div class="dropdown  border mt-3">
  <button class="btn  w-100 dropdown-toggle text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  OFFERS
  </button>
  <ul class="dropdown-menu ">
    <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">No Cost EMI</a></li>
  </div>

  <div className="d-flex">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/><li><a class="dropdown-item" href="#">Special Price</a></li>
  </div>


  </ul>
</div>

<div class="dropdown  border mt-3">
  <button class="btn  w-100 dropdown-toggle text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  DISCOUNT
  </button>
  <ul class="dropdown-menu ">
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

<div class="dropdown  border mt-3">
  <button class="btn  w-100 dropdown-toggle text-start " type="button" data-bs-toggle="dropdown" aria-expanded="false">
  FABRIC
  </button>
  <ul class="dropdown-menu ">
  
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

              <div className="col-lg-9 col-md-12 col-sm-12 col-12 d-flex flex-wrap border border-dark ">
                {obj.map((item)=>{
                  return <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-3   border card_div">
                       <div className="d-flex flex-column justify-content-center card_mini_div  position-relative overflow-hidden border w-90">
                    <img src={item.product_image} alt="tshirt"/>
                    <h6 className="mt-2 ps-2">{item.product_title}</h6>
                    <div className="d-flex">
                    <del className="me-2 ps-2 ">  ₹{item.product_real_price}</del>
                    <h5 className="text-success ps-2">  ₹{item.product_discount_price}</h5>

                    <div className="discount_div d-flex justify-content-center align-items-center">

                      <p className="mb-0 text-light fw-bold">3 % OFF</p>
                    </div>

                    <div className="add_to_cart_div py-1 d-flex align-items-center  justify-content-between w-100">
                      <div>
                      <button type="button">Add To Cart</button>
                      </div>

                      <div className="px-2   d-flex align-items-center">
                      <i class="bi bi-eye px-2" title="Quick Shop"></i>
                      <i class="bi bi-heart px-2" title="Wishlist"></i>
                      </div>
                     
                    </div>
                    </div>
                    </div>
                </div>
                })}
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
