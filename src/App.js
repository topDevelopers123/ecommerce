import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ProductDetails from './components/productDetails/productDetail';
import Products from './components/Products/Products'
import Login from './components/login/login'
import Register from './components/register/register'
import Cart from './components/Cart/Cart';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/productdetails' element={<ProductDetails />}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
