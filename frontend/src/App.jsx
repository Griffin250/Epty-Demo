import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './global.css'
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import NotFound from "./components/pages/NotFound";
import Navbar from "./components/nAVBAR.JSX";



export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div className="min-h-[calc(100vh-160px)]">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
