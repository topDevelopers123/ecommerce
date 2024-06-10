import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./header_images/logo.png";
import "./header.css";

function Header() {
  const Li_show = useRef();
 


  const Toggle_Menu = () => {
    Li_show.current.style.display = "flex";
    Li_show.current.style.position = "absolute";
    Li_show.current.style.top = "0";
    Li_show.current.style.left = "0";
    Li_show.current.style.width = "100%";
    Li_show.current.style.height = "100%";
    Li_show.current.style.background = "lightgreen";
    Li_show.current.style.zIndex = "5";
  };

  useEffect(() => {
    if (window.innerWidth < 992) {
      Li_show.current.style.display = "none";
    }
  }, [window.innerWidth]);

  const hide_Navbar = () => {
    Li_show.current.style.display = "none";

    // Li_show.current.style.position = "inherit"
    // Li_show.current.style.width = "revert-layer"
  };



  return (
    <>
      <nav className="navbar navbar-expand-lg  p-0 position-static">
        <div className="container-fluid container-fluid-div p-0 h-100 d-flex  align-items-center">
          <div className="col-lg-2 col-md-2 col-sm-2 col-2   h-100 logo_div d-flex justify-content-around align-items-center">
           
              <img src={logo} />
    
          </div>

          <div
            className="col-lg-4 col-md-2 col-sm-2  col-2  h-100  li_div"
            ref={Li_show}
          >
            <div className=" navbar-collapse" id="navbarSupportedContent">
              <i class="bi bi-x fs-1  cross_icon" onClick={hide_Navbar}></i>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
                <li className="nav-item px-2">
                  <Link
                    className="nav-link  text-light"
                    aria-current="page"
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link text-light" to="/products">
                    PRODUCTS
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link text-light" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link className="nav-link text-light" to="/contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6  col-md-10 col-sm-10 col-10  h-100 main_form_div  d-flex align-items-center justify-content-center">
            <div className="col-lg-8  col-md-8 col-sm-8 col-8 d-flex  justify-content-center  form_div">
              <form
                className="d-flex   col-lg-10 col-md-10 col-10"
                role="search" 
              >
                <input
                  className="form-control rounded-1 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success rounded-0 search_btn "
                  type="submit"
                >
                  <i class="bi bi-search"></i>
                </button>
                
              </form>
            </div>
            <div className="col-lg-4  col-md-4  col-sm-4 col-4 d-flex  justify-content-around icons_div ">

            {/* <div className="d-flex  position-relative  w-100 justify-content-center align-items-center mobile_serach_icon">
                <i class="bi bi-search" ></i>
              </div> */}

              <div className=" d-flex position-relative w-100   justify-content-center align-items-center">
                <Link to="/wishlist"> <i class="bi bi-suit-heart"></i></Link>
                <div className="para_cart">
                <p className="text-light m-0">O</p>
                </div>
              </div>

              <div className="d-flex  position-relative  w-100 justify-content-center align-items-center">
                <Link to="/cart"><i class="bi bi-cart3"></i></Link>
                <div className="para_cart">
                <p className="text-light m-0">O</p>
                </div>
              </div>

              <div className="d-flex  position-relative  w-100 justify-content-center align-items-center menu_div d-none">
                <i class="bi bi-list menu_icon" onClick={Toggle_Menu}></i>
              </div>
              
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="container">
          <div className="row category_main_div">
            <div className="col-12 d-flex justify-content-around category_mini_div">
              <div className="mt-3  text-center ">
                <div className="mens_cate ">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg"
                    alt=""
                  />
                  <h6 className="mt-2 m-0">Men's</h6>
                </div>
                <div className="sub_categeries  w-100 ">
                  <div className="sub_mega  col-4">
                    <h4 className="mt-2">Topwear</h4>
                    <ul className="p-0">
                    
                      <li>T-shirts</li>
                      <li>Casual Shirts</li>
                      <li>Formal Shirts</li>
                      <li>Jacket</li>
                      <li>Sweaters</li>
                      <li>Suits</li>
                   
                      <li>Coats</li>
                    </ul>
                  </div>

                  <div className="sub_mega col-4">
                    <h4 className="mt-2">Bottomwear</h4>
                    <ul className="p-0">
                    
                      <li>Casual Trousers</li>
                      <li>Formal Trousers</li>
                      <li>Shorts</li>
                      <li>Track Pants & Joggers</li>
                      <li>Jeans</li>
                    
                    </ul>
                  </div>

                  <div className="sub_mega col-4">
                    <h4 className="mt-2">Footwear</h4>
                    <ul className="p-0">
                   
                      <li> Play Shoes</li>
                      <li>Casual Shoes</li>
                      <li>Formal Shoes</li>
                      <li>Sneakers</li>
                      <li>Sandals & Floaters</li>
                      <li>Flip Flops</li>
                      <li>Socks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-3   text-center">
                <div className="mens_cate ">
                  <img
                    src="https://st4.depositphotos.com/13193658/25036/i/450/depositphotos_250363326-stock-photo-smiling-attractive-woman-white-sweater.jpg"
                    alt=""
                  />
                  <h6 className="mt-2">Female's</h6>
                </div>
              
                    <div className="sub_categeries  w-100  ">
                      <div className="sub_mega col-4">
                        <h4 className="mt-2">Indian Wear</h4>
                        <ul className="p-0">

                          <li>Kurta</li>
                          <li>Sarees</li>
                          <li>Shirts & Palazzos</li>
                          <li>Jackets</li>
                          <li>Sweaters</li>
                          <li>Suits</li>
                      
                          <li>Lahenga</li>
                        </ul>
                      </div>

                      <div className="sub_mega col-4">
                        <h4 className="mt-2">Western Wear</h4>
                        <ul className="p-0">
                        
                          <li>Dress</li>
                          <li>Shirts</li>
                          <li>Playsuit</li>
                          <li>Jacket</li>
                          <li>Sweaters</li>
                          <li>
                          Jeans Coats</li>
                          <li>Coats</li>
                         
                        </ul>
                      </div>

                      <div className="sub_mega col-4">
                        <h4 className="mt-2">Footwear</h4>
                        <ul className="p-0">
                        

                          <li>Play Shoes</li>
                          <li>Casual Shoes</li>
                       
                          <li>Heels</li>
                          <li>Boots</li>
                          <li>Suits</li>
                          <li>Flats</li>
                          <li>Sports Shoes
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                

                  <div className="mt-3  text-center">
                <div className="mens_cate ">
                  <img
                    src="https://img.freepik.com/premium-photo/small-4-year-old-boy-with-curly-hairstyle-stand-against-pastel-color-background_758367-99107.jpg"
                    alt=""
                  />
                  <h6 className="mt-2">Kid's</h6>
                </div>
              
                    <div className="sub_categeries  w-100  ">
                      <div className="sub_mega col-4">
                        <h4 className="mt-2">Girls Clothing</h4>
                        <ul className="p-0">
                        
                          <li>Dresses</li>
                          <li>Tops</li>
                          <li>Tshirts</li>
                          <li>Jeans</li>
                          <li>Kurta Sets</li>
                          <li>Skirts & shorts</li>
                          
                        </ul>
                      </div>

                      <div className="sub_mega col-4">
                        <h4 className="mt-2">Boys Clothing</h4>
                        <ul className="p-0">
                        <li>T-shirts</li>
                          <li>Shirts</li>
                          <li>Shorts</li>
                          <li>Jeans</li>
                          <li>Trousers</li>
                        
                          
                        </ul>
                      </div>

                      <div className="sub_mega col-4">
                        <h4 className="mt-2">Footwear</h4>
                        <ul className="p-0">
                       
                          <li>Casual Shoes</li>
                          <li>Flipflops</li>
                          <li>Sports Shoes</li>
                         
                          <li>Heels</li>
                          <li>Sandel</li>
                          <li>Socks</li>
                        </ul>
                      </div>
                    </div>
                  </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
