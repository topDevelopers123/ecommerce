import React from 'react'
import logo from './header_images/logo.png'
import './header.css'
function header() {
  return (
    // <div className="container-fluid">
    //   <div className='container'>
    //     <div className='row w-100'>

    //       <div className='col-12 border border-dark d-flex'>

    //         {/* LOGO DIV */}
    //         <div className='col-lg-2 col-md-2 col-sm-2 border border-dark'>
    //           logo
    //         </div>
            
    //         {/* LIST DIV */}
    //         <div className='col-lg-5 col-md-5 col-sm-5 border border-dark'>
    //           <ul className='border border-dark d-flex justify-content-around'>
    //             <li><a href='void:javascript'>Home</a></li>
    //             <li><a href='void:javascript'>Product</a></li>
    //             <li><a href='void:javascript'>About</a></li>
    //             <li><a href='void:javascript'>Contact</a></li>
    //           </ul>
    //         </div>

    //         {/* SEARCH DIV */}
    //         <div className='col-lg-4 col-md-4 col-sm-4 border border-dark h-100'>
    //           <input type='text' className='w-75 h-100 bg-secondary '/>
    //           <button className='btn btn-dark h-100 rounded-0'><i className="bi bi-search "></i></button>
    //         </div>

    //         {/* ICON DIV */}
    //         <div className='col-lg-2 col-md-2 col-sm-2 border border-dark'>
    //           icons
    //         </div>

    //       </div>

    //     </div>
    //   </div>
    // </div>

    <nav className="navbar navbar-expand-lg bg-body-secondary p-0 ">
  <div className="container-fluid container-fluid-div p-0 h-100">
    <div className='col-lg-2 col-md-2 col-5 border border-dark h-100 logo_div'>
    <a className="navbar-brand" href="#"><img src={logo} /></a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className='col-lg-4 col-md-4 col-4 border border-dark'>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      
        
      </ul>
      </div>
      </div>
      
      <div className='col-lg-4 col-md-4 col-4 border border-dark'>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>

      <div className='col-lg-2 col-md-2 col-2 border border-dark h-100'>
        icons
        </div>
    </div>
    
  
</nav>
  )
}

export default header
