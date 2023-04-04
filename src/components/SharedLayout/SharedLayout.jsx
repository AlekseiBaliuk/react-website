import React, { Suspense } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer";

const SharedLayout = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <main style={{ flex: "auto" }}>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
