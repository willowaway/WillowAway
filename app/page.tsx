"use client";

import { useState, useEffect } from "react";

import Preloader from "@/Pre";
import Navbar from "@/NavBar";
import Home from "@/Home/Home";
import Footer from "@/Footer";
import ScrollToTop from "@/ScrollToTop";
import Contact from "@/Contact/Contact";


const Page: React.FC = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />

      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default Page;