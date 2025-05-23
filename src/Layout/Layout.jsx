import React from "react";
import Navbar from "../Navbar/Navbar";
export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
