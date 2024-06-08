import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Blogs from './pages/contact/Contact';
import Contact from './pages/blogs/Blogs';
import { AppProvider } from "./AppContext";
import BrandPage from './pages/brandpage/BrandPage';
import MaleWatchPage from './pages/malewatchpage/MaleWatchPage';
import FemaleWatchPage from './pages/femalewatchpage/FemaleWatchPage';
import CoupleWatchPage from './pages/couplewatchpage/CoupleWatchPage';
import Cart from './Components/cart/Cart';
import Products from './Components/products/Products';
import ProductsDetail from './Components/productdetail/ProductDetail';
import Casio from './pages/brandpage/casio/Casio';
import Citizen from './pages/brandpage/citizen/Citizen';
import Saga from './pages/brandpage/saga/Saga';
import KOI from './pages/brandpage/koi/KOI';
import Seiko from './pages/brandpage/seiko/Seiko';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thương-hiệu" element={<BrandPage />} />
          <Route path="/thương-hiệu/Casio" element={<Casio />} />
          <Route path="/thương-hiệu/Citizen" element={<Citizen />} />
          <Route path="/thương-hiệu/Saga" element={<Saga />} />
          <Route path="/thương-hiệu/KOI" element={<KOI />} />
          <Route path="/thương-hiệu/Seiko" element={<Seiko />} />
          <Route path="/đồng-hồ-nam" element={<MaleWatchPage />} />
          <Route path="/đồng-hồ-nữ" element={<FemaleWatchPage />} />
          <Route path="/đồng-hồ-cặp-đôi" element={<CoupleWatchPage />} />
          <Route path="/liên-hệ" element={<Contact />} />
          <Route path="/tin-tức" element={<Blogs />} />
          <Route path="/giỏ-hàng" element={<Cart />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
