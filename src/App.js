import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import { ToastContainer } from 'react-toastify';
import Services from './pages/services/Services';
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Careers from './pages/careers/Careers';
import ContactUs from './pages/contactUs/ContactUs';
import Markcon from './pages/services/Markcon';
import WebDe from './pages/services/WebDe';
import SoftDev from './pages/services/SoftDev';
import GraDeBr from './pages/services/GraDeBr';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
      <Route element={<Home/>} path='/'/>    
      <Route element={<Services/>} path='/Services'/>    
      <Route element={<AboutUs/> } path='/AboutUs'/>    
      <Route element={<Careers/> } path='/Careers'/>    
      <Route element={<ContactUs/> } path='/ContactUs'/>    
      <Route element={<Markcon/> } path='/Markcon'/>    
      <Route element={<WebDe/> } path='/WebDe'/>    
      <Route element={<SoftDev/> } path='/SoftDev'/>    
      <Route element={<GraDeBr/> } path='/GraDeBr'/>    
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
