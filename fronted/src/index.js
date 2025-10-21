import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/Homepage';
import PricingPage from './landing_page/pricing/PricingPage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

// react tells ill take control of div and render comp
const root = ReactDOM.createRoot(document.getElementById('root'));
//this is the div in index.html using dom manupulation im accessing it and rendering component
root.render(
  
  //helping wrapper function
  // <React.StrictMode>
  //     <HomePage/>
  // </React.StrictMode>
  <BrowserRouter>
  <Navbar/>
  <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>

);