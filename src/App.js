import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home/home';
import About from './components/about/about';
import ContactUs from './components/contact/ContactUs';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import ProductDetails from './components/productDetails/productDetail';
import Products from './components/Products/Products'
import Login from './components/login/login'
import Register from './components/register/register'
import Checkout from './components/checkout/checkout'
import Wishlist from './components/wishlist/Wishlist'
import Cart from './components/Cart/Cart';
import Thankyou from './components/login/Thankyou';
import TrackOrder from './components/trackOrder/TrackOrder';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';


function App() {


  
  return (
    <> 
    <Toaster/>
      <BrowserRouter>
   
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/productdetails' element={<ProductDetails />}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/thankyou' element={<Thankyou />}/>
          <Route path='/track_order' element={<TrackOrder />}/>
        </Routes>
        <Footer/>
   
      </BrowserRouter>
    </>
  );
}

export default App;
