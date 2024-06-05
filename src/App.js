import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
