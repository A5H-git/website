import React from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="page-container flex min-h-screen flex-col">
      <header className="p-4">
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default Root;
