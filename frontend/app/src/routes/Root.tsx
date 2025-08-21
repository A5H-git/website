import React from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer/index.jsx";
// import Navbar from "../components/Navbar";

function Root() {
  return (
    <div className="page-container">
      <header className="sticky top-00 z-5 p-4">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
