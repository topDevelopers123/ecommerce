import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./header_images/logo.png";
import logo2 from './header_images/FINAL LOGO white with Drop Shadow.png'
import "./header.css";
import CategoryPage from "./CategoryPage"
 
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
    <header>
      <nav className="navbar  navbar-expand-xl navbar-dark d-flex p-0">
        <div className="container-fluid p-0 m-0 w-100 h-100 ">
          <div className={`col-lg-2 col-md-2 col-sm-2 ${flag ? "col-2" : "col-2"} h-100  d-flex justify-content-center align-items-center`}>
            <Link to="/" className="navbar-brand ps-md-5 ps-0">
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
                className={`btn btn-outline mr-1  search_btn ${flag ? " w-inherit" : "bg-md-transparent"} `} onClick={show_searchBar}
                type="submit"
              >
                
                <i className="bi bi-search" ></i>
              </button>

             
            </div>
          </div>


        
          
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

              <div className="d-flex  position-relative   justify-content-center   align-items-center" >
                {flag2 ? 
                <Link to="" onClick={toggleFlag2}>
                <i className="bi bi-x-lg fs-2"></i>
                </Link>
                  : <Link to="" onClick={toggleFlag2}>
                    <i className="bi bi-person fs-2"></i>
                  </Link>
}
                
              </div>
            </div>
          </div>


        </div>
      </nav>
        <div className={`profile_main_box p-2 ${flag2 ? "d-block" : "d-none"}`}>

          <h6>Welcome</h6>
          <p>To access account and manage orders To access account and manage orders </p>
          <div className="d-flex justify-content-around">
            <p><Link to="/login" className="text-secondary">LOGIN</Link></p>
            <p><Link to="/register" className="text-secondary">REGISTER</Link></p>
          </div>

        </div>
        <CategoryPage/>
      </header>
    </>
  );
}

export default Header;


{/* second serach bar */ }

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

{/* <i className="bi bi-search search_icon" onClick={show_searchBar}></i> */ }

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
