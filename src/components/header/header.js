
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from './header_images/FINAL LOGO white with Drop Shadow.png';
import "./header.css";
import CategoryPage from "./CategoryPage";
import { useAuthContext, useCartContext, useProductContext, useWishlistContext } from "../../Context/index.context";
import toast from "react-hot-toast";

function Header() {
  const { wishlistLength } = useWishlistContext();
  const { cartLength } = useCartContext();
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { productData } = useProductContext();
  const { APILogin } = useAuthContext()
  const [authorizeToken, setAuthorizeToken] = useState(localStorage.getItem("token"));
  const token = localStorage.getItem("token")

  useEffect(() => {
    const user = localStorage.getItem("token");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false)
    }
  }, []);

  const showSearchBar = () => {
    flag ? setFlag(false) : setFlag(true)
  };

  const toggleFlag2 = () => {
    setFlag2(!flag2);
  };

  const wishListHandler = () =>{
    if (token === null) {

      navigate(`/login`);
      window.scrollTo(0, 0);
      return
    }

    navigate('/wishlist')
 
  }
  const addToCartHandler = () =>{
    if (token === null) {

      navigate(`/login`);
      window.scrollTo(0, 0);
      return
    }

    navigate('/cart')
 
  }

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    const filter = value && productData && productData.filter((item) => item.title.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').includes(value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')));
    setSearchData(filter || []);
  };
>>>>>>> gyanendra

  const logout = () => {
    localStorage.clear();
    toast.success("Logout Successfully!");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const closeProfileModal = () => {
    setFlag2(false);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xl navbar-dark d-flex p-0">
          <div className="container-fluid p-0 m-0 w-100 h-100">
            <div className={`col-lg-2 col-md-2 col-sm-2 h-100 d-flex justify-content-center align-items-center`}>
              <Link to="/" className="navbar-brand ps-md-5 ps-0">
                <img src={logo2} alt="logo" />
              </Link>
            </div>

            <div className={`col-lg-7 ${flag ? "col-md-10 col-sm-10 col-10 rounded" : "col-5"} d-flex justify-content-center align-items-center h-100`}>
              <div className="nav_right_div d-flex h-100 align-items-center justify-content-center">
                <div className={`search_Bar ${flag ? "d-lg-flex d-md-flex d-sm-flex" : "d-none"} w-75`}>
                  <input
                    className="form-control w-100"
                    type="search"
                    placeholder="Search here.."
                    aria-label="Search"
                    value={search}
                    onChange={handleSearch}
                  />
                </div>
                <button className={`btn btn-outline mr-1 search_btn ${flag ? "w-inherit" : "bg-md-transparent"}`} onClick={showSearchBar}>
                  <i className="bi bi-search"></i>
                </button>

                <div className={`serach_preview bg-white rounded shadow ${flag3 ? "p-3" : "display:none"}`}>
                  {searchData?.map((item, i) => (
                    <p className="px-3 py-1" key={i} onClick={() => { navigate(`/productdetails/${item._id}`); setSearch(""); setSearchData([]); }}>
                      {item?.title}
                    </p>
                  ))}
                </div>
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

                {/* <div className="d-flex  position-relative  text-center justify-content-center   align-items-center" >
                {flag2 ? 
                    <Link to="#" onClick={toggleFlag2} className="text-center">
                <i className="bi bi-x-lg "></i>
                </Link>
                    : 
                  <div className="para_cart d-flex justify-content-center align-items-center">
                    <p className="text-light m-0">{cartLength}</p>
                  </div>
                </div>

                <div className="d-flex position-relative text-center justify-content-center align-items-center">
                  {flag2 ?
                    <Link to="#" onClick={toggleFlag2} className="text-center">
                      <i className="bi bi-x-lg"></i>
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
          {isLoggedIn ? (
            <div className="manage_account py-2">
              <Link to="/track_order" onClick={closeProfileModal}><p>Orders <i className="bi bi-chevron-right"></i></p></Link>
              <Link to="/wishlist" onClick={closeProfileModal}><p>Wishlist <i className="bi bi-chevron-right"></i></p></Link>
              <Link to="/savedAddress" onClick={closeProfileModal}><p>Saved Addresses <i className="bi bi-chevron-right"></i></p></Link>
              <p className="cursor-pointer logoutBtn" onClick={logout}>Logout <i className="bi bi-chevron-right"></i></p>
            </div>
          ) : (
            <div>
              <h6>Welcome</h6>
              <p>To access account and manage orders.</p>
              <div className="d-flex justify-content-around border-bottom">
                <p><Link to="/login" className="text-secondary p-xs-0 btn rounded-0 btn-outline-primary">LOGIN</Link></p>
                <p><Link to="/register" className="text-secondary p-xs-0 btn rounded-0 btn-outline-primary">REGISTER</Link></p>
              </div>
            </div>
          )}
        </div>
        <CategoryPage />
      </header>
    </>
  );
}

export default Header;
