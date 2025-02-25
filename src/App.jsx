import { useState } from "react";
import Home from "./pages/home";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
