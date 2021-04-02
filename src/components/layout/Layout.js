import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../../css/tailwind.css';

const Layout = ({ children }) => {
  return (
    <>
    <div className="main">
      <div className="overlay">
        <Header />
        <main className="text-gray-900" >{children}</main>
        <Footer />
        </div>
    </div>
    </>
  );
};

export default Layout;
