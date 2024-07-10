import React, { useEffect, useRef, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "./header_images/logo.png";
import logo2 from './header_images/FINAL LOGO white with Drop Shadow.png'
import "./header.css";
import CategoryPage from "./CategoryPage"
import { useCartContext, useProductContext, useWishlistContext } from "../../Context/index.context";
import toast, { useToaster } from "react-hot-toast";
 
function Header() {
  const { wishlistLength } = useWishlistContext()
  const { cartLength } = useCartContext()
  const naviate = useNavigate()

  const [flag, setFlag] = useState(false)
  const [flag2, setFlag2] = useState(false)
  const [flag3,setflag3] = useState(false)
  const [Searchdata,setSearchdata]= useState([])
  const [search,setSearch]= useState("")
  const token = localStorage.getItem("token")
  const {  productData, setProductData } = useProductContext() 
  const navigate = useNavigate() 
  const show_searchBar = () => {
    flag ? setFlag(false) : setFlag(true)
  }

  const toggleFlag2 = () => {
    flag2 ? setFlag2(false) : setFlag2(true)
  }
  
  const handleSearch = (e)=>{
    const {value} = e.target
    setSearch(value)
    const filter = value && productData && productData.filter((item) => item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')))
    setSearchdata(filter || null)
  }

  const wishListHandler = () =>{
    if (token === null) {

      navigate(`/login`);
      window.scrollTo(0, 0);
      return
    }

    naviate('/wishlist')
 
  }
  const addToCartHandler = () =>{
    if (token === null) {

      navigate(`/login`);
      window.scrollTo(0, 0);
      return
    }

    naviate('/cart')
 
  }



  

  const logout = ()=>{
      localStorage.clear()
      toast.success("Logout Successfully !")
     window.location.href = "/"      
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
            <div className="nav_right_div d-flex h-100 align-items-center justify-content-center ">
              <div className={`search_Bar    ${flag ? " d-lg-flex d-md-flex d-sm-flex " : "d-none"} w-75`}>
            
              <input
                className="form-control w-100"
                type="search"
                placeholder="Search here.."
                aria-label="Search" 
                    value={search}
                    onChange={handleSearch}
              />
                    
              </div>
              <button
                className={`btn btn-outline mr-1  search_btn ${flag ? " w-inherit" : "bg-md-transparent"} `} onClick={show_searchBar}
                type="submit"
              >
                
                <i className="bi bi-search" ></i>
              </button>

              <div className={`serach_preiew bg-white  rounded shadow ${flag3 ? "p-3":"display:none"}`}>
                  {Searchdata?.map((item, i) => <p className="px-3 py-1" key={i} onClick={() => { naviate(`/productdetails/${item._id}`); setSearch(""); setSearchdata(null)}} >{item?.title}</p>)   }  
                  
                </div>             
            </div>
          </div>
                    
          <div className={`col-lg-3 col-md-3 col-sm-4 col-5 d-flex justify-content-center nav_icons align-items-center h-100 order-lg-3 order-md-2 order-sm-2 order-2  right_icons_box ${flag ? "d-none " : "d-flex"}`}>
            <div className="d-flex navbar_right_icon icons_div justify-content-center  w-100 ">
                <div className=" d-flex  text-center position-relative align-items-center" onClick={() => wishListHandler()}>
                  <Link to="" className="text-center" >
                  {" "}
                  <i className="bi bi-suit-heart"></i>
                  <span>Wishlist</span>
                </Link>
                  <div className="para_cart d-flex justify-content-center align-items-center">
                    <p className="text-light m-0">{wishlistLength}</p>
                </div>
              </div>

                <div className="d-flex  position-relative text-center  justify-content-center  align-items-center" onClick={() => addToCartHandler()}>
                <Link to="" className="text-center">
                   <i className="bi bi-cart3"></i>
                   <span>Bag</span>
                </Link>
                <div className="para_cart d-flex justify-content-center align-items-center">
                    <p className="text-light m-0">{cartLength}</p>
                </div>
              </div>

                <div className="d-flex  position-relative  text-center justify-content-center   align-items-center" >
                {flag2 ? 
                    <Link to="#" onClick={toggleFlag2} className="text-center">
                <i className="bi bi-x-lg "></i>
                </Link>
                    : <Link to="#" onClick={toggleFlag2} className="text-center">
                    <i className="bi bi-person-circle"></i>
                    <span>Profile</span>
                  </Link>
}
                
              </div>
            </div>
          </div>
        </div>
      </nav>
        <div className={`profile_main_box p-3 shadow-lg ${flag2 ? "d-block" : "d-none"}`}>
          <h6>Welcome</h6>
          <p>To access account and manage orders.</p>
          <div className="d-flex justify-content-around border-bottom">
            <p><Link to="/login" className="text-secondary p-xs-0 btn rounded-0 btn-outline-primary">LOGIN</Link></p>
            <p><Link to="/register" className="text-secondary p-xs-0 btn rounded-0 btn-outline-primary">REGISTER</Link></p>
          </div>
          <div className="manage_account py-2">
            <Link to=""><p>Orders <i className="bi bi-chevron-right"></i></p></Link>
            <Link to=""><p>Wishlist <i className="bi bi-chevron-right"></i></p></Link>
            <Link to=""><p>Saved Addresses <i className="bi bi-chevron-right"></i></p></Link>
            <p className="cursor-pointer" onClick={logout}>Logout <i className="bi bi-chevron-right"></i></p>
          </div>
        </div>
        <CategoryPage/>
      </header>
    </>
  );
}

export default Header;

