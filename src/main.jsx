import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Product from "./pages/product.jsx";
import Blogs from "./pages/blogs.jsx";
import Tracking from "./pages/tracking.jsx";
import Login from "./pages/login.jsx";
import Cart from "./pages/cart.jsx";
import Wishlist from "./pages/wishlist.jsx";
import PageNotFound from "./pages/pageNotFoud.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="product" element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  </HashRouter>,
);
