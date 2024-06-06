import React, { useEffect, useRef } from 'react'
import logo from './header_images/logo.png'
import './header.css'

function Header() {
  const Li_show = useRef()

  const Toggle_Menu =()=>{
    Li_show.current.style.display = "flex"
    Li_show.current.style.position = "absolute"
    Li_show.current.style.top = "0"
    Li_show.current.style.left = "0"
    Li_show.current.style.width = "100%"
    Li_show.current.style.height = "100%"
    Li_show.current.style.background = "lightgreen"
    Li_show.current.style.zIndex = "5"
    
  }

  useEffect(()=>{
    if (window.innerWidth < 992) {
      
      Li_show.current.style.display = "none"
    }
  }, [window.innerWidth])

  const hide_Navbar = () =>{
    
      
      Li_show.current.style.display = "none"
    
   
    // Li_show.current.style.position = "inherit"
    // Li_show.current.style.width = "revert-layer"
    
     
  }

  return (
    <>
  

    <nav className="navbar navbar-expand-lg  p-0 position-static">
  <div className="container-fluid container-fluid-div p-0 h-100 d-flex  align-items-center">
    <div className='col-lg-2 col-md-2 col-3 border border-dark h-100 logo_div d-flex justify-content-around align-items-center'>
    <a className="navbar-brand" href="#"><img src={logo} /></a>
    </div>
    
    
    <div className='col-lg-4 col-md-2  col-2 border border-dark h-100  li_div' ref={Li_show}>
    
    <div className=" navbar-collapse" id="navbarSupportedContent">
    <i class="bi bi-x fs-1  cross_icon" onClick={hide_Navbar}></i>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
        <li className="nav-item px-2">
          <a className="nav-link  text-light" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link text-light" href="#">PRODUCTS</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link text-light" href="#">ABOUT</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link text-light" href="#">CONTACT</a>
        </li>
      
        
      </ul>
      </div>
      </div>
      
      <div className='col-lg-6  col-md-10 col-9 border border-dark h-100 d-flex align-items-center justify-content-center'>
        <div className='col-lg-8  col-md-8 col-8 d-flex  justify-content-center '>
      <form className="d-flex   col-lg-10 col-md-10 col-10" role="search">
        <input className="form-control rounded-1 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success rounded-0 search_btn " type="submit"><i class="bi bi-search"></i></button>
      </form>
      </div>
      <div className='col-lg-4  col-md-4 col-4 d-flex border border-dark justify-content-around icons_div '>
      <div className=' d-flex position-relative w-100   justify-content-center align-items-center'>
      <i class="bi bi-suit-heart" ></i>
      <p className='text-light'>0</p>
      </div>

      <div className='d-flex  position-relative  w-100 justify-content-center align-items-center'>
      <i class="bi bi-cart3"></i>
      <p className='text-light'>0</p>
      </div>


      <div className='d-flex  position-relative  w-100 justify-content-center align-items-center menu_div d-none'>
      <i class="bi bi-list menu_icon" onClick={Toggle_Menu}></i>
     
      </div>
      </div>
      

      </div>

     
    </div>
    
  
</nav>

<div className='container-fluid'>
  <div className='container'>
    <div className='row category_main_div'>
      <div className='col-12 d-flex justify-content-center'>
      <div className='mt-3 mx-5 border border-dark text-center '>
        <div className='mens_cate '>
          <img src='https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg' alt=''/>
          <h6 className='mt-2 m-0'>Men's</h6>
          </div>
          <div className='sub_categeries border border-dark w-75 '>

            <div className='sub_mega col-4'>
              <h4>Topwear</h4>
              <ul className='p-0'>
                <li>T-shirts</li>
                <li>Shirts</li>
              </ul>
            </div>

            <div className='sub_mega col-4'>
              <h4>Bottomwear</h4>
              <ul className='p-0'>
                <li>Jeans</li>
                <li>Shorts</li>
              </ul>
            </div>

            <div className='sub_mega col-4'>
              <h4>Footwear</h4>
              <ul className='p-0'>
                <li>Shoes</li>
                <li>Sandel</li>
              </ul>
            </div>

          </div>
      </div>

      <div className='mt-3 mx-5 text-center'>
      <img src='https://st4.depositphotos.com/13193658/25036/i/450/depositphotos_250363326-stock-photo-smiling-attractive-woman-white-sweater.jpg' alt=''/>
      <h6 className='mt-2'>Female's</h6>
      </div>

      <div className='mt-3 mx-5 text-center'>
      <img src='https://img.freepik.com/premium-photo/small-4-year-old-boy-with-curly-hairstyle-stand-against-pastel-color-background_758367-99107.jpg' alt=''/>
      <h6 className='mt-2'>Kid's</h6>
      </div>
      </div>
    </div>
  </div>
</div>

</>

  )
}

export default Header
