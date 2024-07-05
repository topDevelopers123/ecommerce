import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainRoutes from './components/Routes/MainRoutes';




function App() {


  return (
    <>
      <Toaster />
      <BrowserRouter>
       <MainRoutes />
      </BrowserRouter>
    </>
  );
}


export default App;

