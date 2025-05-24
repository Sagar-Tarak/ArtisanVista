import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
