import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./header_images/logo.png";
import logo2 from './header_images/FINAL LOGO white with Drop Shadow.png'
import "./header.css";
 
function Header() {
  const [flag, setFlag] = useState(false)
  const [flag2, setFlag2] = useState(false)

  const show_searchBar = () => {
    flag ? setFlag(false) : setFlag(true)
  }

  const toggleFlag2 = () => {
    flag2 ? setFlag2(false) : setFlag2(true)
  }

  return (
    <>
      <nav className="navbar  navbar-expand-xl navbar-dark d-flex p-0">
        <div className="container-fluid p-0 m-0 w-100 h-100 ">
          <div className={`col-lg-2 col-md-2 col-sm-2 ${flag ? "col-2" : "col-2"} h-100  d-flex justify-content-center align-items-center`}>
            <Link to="/" className="navbar-brand ps-5">
              {/* Mayavi */}
              <img src={logo2}></img>
            </Link>
          </div>

       
           <div className={`col-lg-7  ${flag ? "col-md-10 col-sm-10 col-10 rounded" : "col-5"} d-flex justify-content-center align-items-center h-100  `  }>
            <div className="nav_right_div d-flex  w-100 h-100 align-items-center justify-content-center ">
              <div className={`search_Bar    ${flag ? " d-lg-flex d-md-flex d-sm-flex " : "d-none"} w-75`}>
            
              <input
                className="form-control w-100"
                type="search"
                placeholder="Search here.."
                aria-label="Search" 
              />
             
             
              </div>
              <button
                className={`btn btn-outline mr-1  search_btn ${flag ? "rounded-0 w-inherit" : "bg-md-transparent"} `} onClick={show_searchBar}
                type="submit"
              >
                
                <i className="bi bi-search" ></i>
              </button>

             
            </div>
          </div>


          {/* second serach bar */}
          
          {/* <div className={`col-lg-7 col-md-7 col-sm-7 col-7 d-flex justify-content-center align-items-center h-100  hidden_search_Bar `}>
            <div className="nav_right_div d-flex  w-100 h-100 align-items-center justify-content-center border border-dark">
              <div className="sel_cat_left ">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="IN" selected>
                    All
                  </option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
              <input
                className="form-control w-50"
                type="search"
                placeholder="Search"
                aria-label="Search" 
              />
                  <button
                className="btn btn-outline-success rounded-0 search_btn "
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
             
            </div>
          </div> */}

            {/* <i class="bi bi-search search_icon" onClick={show_searchBar}></i> */}

          {/* <div className="col-lg-1 col-md-1 col-sm-1 col-1 h-100  d-flex justify-content-center align-items-center order-sm-3 order-3 ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvas"
              aria-controls="navbarOffcanvas"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end bg-secondary"
              id="navbarOffcanvas"
              tabindex="-1"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-light"
                  id="offcanvasNavbarLabel"
                >
                  Mayavi
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <div className="navbar-nav justify-content-center flex-grow-1 pe-3">
                
                  <Link
                    className="nav-item nav-link text-dark btn btn-warning"
                    aria-current="page"
                    to="/about"
                  >
                    ABOUT
                  </Link>

                  
                 
                </div>
              </div>
            </div>
          </div> */}

          
          <div className={`col-lg-3 col-md-3 col-sm-4 col-5 d-flex justify-content-center align-items-center h-100 order-lg-3 order-md-2 order-sm-2 order-2  right_icons_box ${flag ? "d-none " : "d-flex"}`}>
            <div className="d-flex navbar_right_icon icons_div justify-content-center  w-100 ">
            

            

              <div className=" d-flex position-relative       align-items-center">
                <Link to="/wishlist">
                  {" "}
                  <i className="bi bi-suit-heart"></i>
                </Link>
                <div className="para_cart d-flex justify-content-center align-items-center">
                  <p className="text-light m-0">O</p>
                </div>
              </div>

              <div className="d-flex  position-relative   justify-content-center  align-items-center">
                <Link to="/cart">
                   <i className="bi bi-cart3"></i>
                </Link>
                <div className="para_cart d-flex justify-content-center align-items-center">
                  <p className="text-light m-0">O</p>
                </div>
              </div>

              <div className="d-flex  position-relative   justify-content-center   align-items-center" onClick={toggleFlag2}>
                <Link to="">
                <i class="bi bi-person fs-2"></i>
                </Link>
                
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
                  <h6 className="mt-2 m-0">Men</h6>
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
                  <h6 className="mt-2">Women</h6>
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
                      <li>Jeans Coats</li>
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
                      <li>Sports Shoes</li>
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
                  <h6 className="mt-2">Kids</h6>
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

        <div className={`profile_main_box p-2 ${flag2 ? "d-block" : "d-none"}`}>

          <h6>Welcome</h6>
          <p>To access account and manage orders To access account and manage orders </p>
          <div className="d-flex justify-content-around">
          <p><Link to="/login" className="text-secondary">LOGIN</Link></p>
          <p><Link to="/register" className="text-secondary">REGISTER</Link></p>
          </div>
 
        </div>
      </div>
    </>
  );
}

export default Header;
