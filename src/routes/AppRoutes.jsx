import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/Home'
import Eror404 from '../pages/Eror404';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Eror404/>} />
      </Routes>
    </BrowserRouter>
  );
}
